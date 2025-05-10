import axios from "axios";

const axioSecure = axios.create({
    baseURL: "http://localhost:5000"
})


const useAxioSecure = () => {   
    return axioSecure;
    
};

export default useAxioSecure;