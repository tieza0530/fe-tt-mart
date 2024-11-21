import { RootObject } from "@/page/components/products/product.type"
import { getData } from "@/utils/api"


export const getAllProduct = () => {
    return getData<RootObject>('https://dummyjson.com/products')
}