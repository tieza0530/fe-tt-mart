import { getAllProduct } from "@/services/product/api-products.service"
import { useQuery } from "@tanstack/react-query"

export const useGetAllProducts = () => {
    return useQuery({
        queryKey: ['ListProducts'],
        queryFn: () => {
            return getAllProduct();
        }
    })
}