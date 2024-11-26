import { getDataCategory } from "@/services/category/api-category.service";
import { useQuery } from "@tanstack/react-query";

export const useGetDataCatogory = () => {
  return useQuery({
    queryKey: ["list-category"],
    queryFn: () => {
      return getDataCategory();
    },
  });
};
