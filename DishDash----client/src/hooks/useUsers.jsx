import { useQuery } from "@tanstack/react-query";
import useAxioSecure from "./useAxioSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axioSecure = useAxioSecure();
    // const {user} = useAuth();

    const { refetch, data : users = [] } = useQuery({
        
        queryKey: ['users'],
        queryFn: async() => {
          const res = await axioSecure.get(`/users`)
          return res.data;
        }
      })

      return [users, refetch]

};

export default useCart;