import { useQuery } from "@tanstack/react-query";
import useAxioSecure from "./useAxioSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axioSecure = useAxioSecure();
    const {user} = useAuth();

    const { refetch, data : cart = [] } = useQuery({
        
        queryKey: ['cart', user?.email],
        queryFn: async() => {
          const res = await axioSecure.get(`/carts?email=${user.email}`)
          return res.data;
        }
      })

      return [cart, refetch]

};

export default useCart;