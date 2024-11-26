import { getData } from "@/utils/api"

export const getDataCategory = () => {
    return getData<string[]>('https://dummyjson.com/products/category-list')
}