import { useQuery } from "@tanstack/react-query";
import useAxioSecure from "./useAxioSecure";
import useAuth from "./useAuth";

const useBooking = () => {
    const axioSecure = useAxioSecure();
    const {user} = useAuth();

    const { refetch, data : booking = [] } = useQuery({
        
        queryKey: ['booking', user?.email],
        queryFn: async() => {
          const res = await axioSecure.get(`/booking?email=${user.email}`)
          return res.data;
        }
      })

      return [booking, refetch]

};

export default useBooking;