import { getAllProduct } from "@/services/product/apt-products.service"
import { useQuery } from "@tanstack/react-query"

export const useGetAllProducts = () => {
    return useQuery({
        queryKey: ['ListProducts'],
        queryFn: () => {
            return getAllProduct();
        }
    })
}