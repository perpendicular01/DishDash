import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Booking from "../Pages/Dashboard/Booking/Booking";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBooking from "../Pages/Dashboard/ManageBooking/ManageBooking";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <PrivateRoute> <Menu> </Menu></PrivateRoute>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
        ]
    },

    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'booking',
                element: <Booking></Booking>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },

            // admin only
            {
                path: 'allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute> <AddItems></AddItems></AdminRoute>
            },
            {
                path: 'mangeItems',
                element: <AdminRoute> <ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'manageBookings',
                element: <AdminRoute> <ManageBooking></ManageBooking></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem /></AdminRoute>,
                loader: ({ params }) => {
                    console.log("Loader params:", params);
                    return fetch(`http://localhost:5000/menu/${params.id}`)
                  }
                  
              }
              


        ]
    }
]);