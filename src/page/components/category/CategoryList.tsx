import { useGetDataCatogory } from "./category.queries";
import { ChevronDownIcon, DashboardIcon } from "@radix-ui/react-icons";
export const CategoryList = () => {
  const { data } = useGetDataCatogory();
  return (
    <div className=" w-full">
      <div className="border py-2 flex items-center justify-between rounded-t-sm">
        <div className="flex items-center">
          <DashboardIcon className="mx-2" />
          All Category
        </div>
        <ChevronDownIcon className="mr-2" />
      </div>
      {data?.slice(0, 11).map((item) => (
        <div className="border py-2 flex pl-8 last:rounded-b-sm" key={item}>{item}</div>
      ))}
    </div>
  );
};
