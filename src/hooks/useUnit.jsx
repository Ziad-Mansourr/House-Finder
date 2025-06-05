import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../services/axiosInstance"

export default function useUnit() {
    function getUnit(){
        return axiosInstance.get(`units`);
    }

    let apiRes = useQuery({
        queryKey:['recentUnits'],
        queryFn:getUnit,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
      });
  return apiRes
  
}
