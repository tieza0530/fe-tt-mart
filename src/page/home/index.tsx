import { MainLayout } from "../../components/layout/MainLayout";
import { CategoryList } from "../components/category/CategoryList";
import { useGetAllProducts } from "../components/products/product.queries";
import { CarouselHome } from "./components/CarouselHome";

export const HomePage = () => {
  const { data } = useGetAllProducts();
  console.log(data);

  return (
    <div>
      <MainLayout>
        <div className="flex">
          <div className="w-[calc(100%/4)]">
            <CategoryList />
          </div>
          <div className="w-full h-full">
            <CarouselHome />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};
