import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

export const Header = () => {
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <div>
      <div className="bg-customPurple text-white flex justify-center py-3 text-xs">
        <p>
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </p>
      </div>
      <div className=" px-28 mb-5">
        <div className="grid grid-cols-2 items-center py-2">
          <div className="flex text-xs space-x-4">
            <p>About Us</p>
            <p>My account</p>
            <p>Wishlist</p>
            <p>|</p>
            <p>
              We deliver to you every day from{" "}
              <strong className="text-colorText">7:00 to 23:00</strong>
            </p>
          </div>
          <div className="flex justify-end text-xs space-x-4">
            <p>English</p>
            <p>Order Tracking</p>
          </div>
        </div>
        <hr />
        <div className="mt-4 grid grid-cols-4 justify-between items-center">
          <div className="flex items-center col-span-1">
            <img src="/public/image/log.png" alt="logo" />
            <p className="ml-2 font-semibold text-xl">THUY TUYEN MART</p>
          </div>
          <div className="col-span-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6 m"
              >
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="bg-backgroundFooter "
                            placeholder="Search for products, categories or brands..."
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button className="absolute top-0 right-0 bg-customPurple hover:bg-customPurple/80" type="submit"><FiSearch/></Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="flex justify-end space-x-4 col-span-1 mr-1">
            <FaRegUser />
            <FaRegHeart />
            <RiShoppingCartLine />
          </div>
        </div>
      
      </div>
    </div>
  );
};
