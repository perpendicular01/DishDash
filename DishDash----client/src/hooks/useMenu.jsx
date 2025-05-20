import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
    const axioPublic = useAxiosPublic();
    
    const { refetch, isPending: loading, data : menu = [] } = useQuery({
        
        queryKey: ['menu'],
        queryFn: async() => {
          const res = await axioPublic.get(`/menu`)
          return res.data;
        }
      })

      return [menu, loading, refetch]
}

export default useMenu;