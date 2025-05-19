const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000;
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')



const app = express()

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())


// verify the token
const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).send({ message: 'unauthorized access' })
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'unauthorized access' })
    }

    req.user = decoded
    next()
  })
}




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oi6ry.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection


    const database = client.db('DishDash')
    const menuCollection = database.collection('menu')
    const reviewsCollection = database.collection('reviews')
    const cartCollection = database.collection('carts')
    const userCollection = database.collection('users')

    // verify the admin 
    const verifyAdmin = async (req, res, next) => {
      const email = req.user.email;
      const query = { email: email };
      const user = await userCollection.findOne(query)
      const isAdmin = user?.role === 'admin';

      if (!isAdmin) {
        return res.status(403).send({ message: 'forbidden access in verify admin' })
      }

      next();
    }


    // JWT
    app.post('/jwt', async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' });

      res
        .cookie('token', token, {
          httpOnly: true,
          secure: false

        })
        .send({ success: true })
    })

    app.post('/logout', async (req, res) => {
      res.
        clearCookie('token', {
          httpOnly: true,
          secure: false
        })
        .send({ success: true })
    })
    // users
    app.get('/users', verifyToken, verifyAdmin, async (req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    })


    app.post('/users', async (req, res) => {
      const user = req.body;
      // check if the email user exist or not
      const query = { email: user.email }
      const exitingUser = await userCollection.findOne(query)
      if (exitingUser) {
        return res.send({ message: 'user already exists', insertedId: null })
      }
      const result = await userCollection.insertOne(user);
      res.send(result)
    })

    app.patch('/users/admin/:id', verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const updatedDoc = {
        $set: {
          role: 'admin'
        }
      }
      const result = await userCollection.updateOne(filter, updatedDoc)
      res.send(result)
    })

    // check admin or not
    app.get('/users/admin/:email', verifyToken, async (req, res) => {
      const email = req.params.email;
    
      if (email !== req.user.email) {
        return res.status(403).send({ message: 'unauthorized access' });
      }
    
      const user = await userCollection.findOne({ email });
      const isAdmin = user?.role === 'admin';
      res.send({ admin: isAdmin });
    });
    

    app.delete('/users/:id', verifyToken, verifyAdmin, async (req, res) => {
      const { id } = req.params;

      try {
        const query = { _id: new ObjectId(id) };
        const user = await userCollection.findOne(query);

        if (!user) {
          return res.status(404).json({ message: 'User not found in database' });
        }

        // Try deleting from Firebase Auth, but ignore if not found
        if (user.firebaseUid) {
          try {
            await admin.auth().deleteUser(user.firebaseUid);
          } catch (firebaseError) {
            if (firebaseError.code === 'auth/user-not-found') {
              console.warn(`Firebase user not found: ${user.firebaseUid} — skipping delete`);
            } else {
              throw firebaseError; // rethrow if it's another error
            }
          }
        }

        const deleteResult = await userCollection.deleteOne(query);
        res.send({ success: true, deletedCount: deleteResult.deletedCount });

      } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: 'Failed to delete user' });
      }
    });




    // menu
    app.get('/menu', async (req, res) => {
      const result = await menuCollection.find().toArray();
      res.send(result);
    })

    app.get('/reviews', async (req, res) => {
      const result = await reviewsCollection.find().toArray();
      res.send(result);
    })


    // carts
    app.get('/carts', verifyToken, async (req, res) => {
      const email = req.query.email
    
      if (email !== req.user.email) {
        return res.status(403).send({ message: 'unauthorized access' });
      }

      
      const query = { email: email }
      const result = await cartCollection.find(query).toArray();
      res.send(result)
    })

    app.post('/carts', async (req, res) => {
      const cartItem = req.body;
      const result = await cartCollection.insertOne(cartItem);
      res.send(result)
    })

    app.delete('/carts/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await cartCollection.deleteOne(query);
      res.send(result)
    })


    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('DishDash is setting')
})

app.listen(port, () => {
  console.log(`DishDash is running on port ${port}`)
})