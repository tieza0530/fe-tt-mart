import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "../ui/form";
import { Input } from "../ui/input";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export const Footer = () => {
  const FormSchema = z.object({
    email: z.string().min(2, {
      message: "email must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };
  return (
    <div className=" bg-backgroundFooter px-28 py-10">
      <div className="w-full grid grid-cols-2 items-center justify-center">
        <div>
          <p className="font-medium">Join our newsletter for £10 offs</p>
          <p className="text-xs">
            Register now to get latest updates on promotions &<br />
            coupons.Don’t worry, we not spam!
          </p>
        </div>
        <div className="flex justify-end">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-[400px] space-y-6"
            >
              <div className="relative">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="text-[10px]">
                        By subscribing you agree to our{" "}
                        <span className="text-customPurple">
                          Terms & Conditions and Privacy & Cookies Policy.
                        </span>
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <Button className="absolute top-0 right-0 bg-customPurple hover:bg-customPurple/80" type="submit">
                  Send
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
      <hr className="my-10" />
      <div className="grid grid-cols-5">
        <div className="px-2">
          <p className="font-medium">Do You Need Help ?</p>
          <p className="text-xs text-gray-400 space-y-4">
            Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
            Pressa fåmoska.
          </p>
          <div className="flex items-center mt-10">
            <FiPhoneCall className="text-3xl" />
            <div className="ml-2">
              <p className="text-xs text-gray-400 space-y-4">
                Monday-Friday: 08am-9pm
              </p>
              <strong className="text-2xl">0 800 300-353</strong>
            </div>
          </div>
          <div className="flex items-center mt-10">
            <MdOutlineMail className="text-3xl" />
            <div className="ml-2">
              <p className="text-xs text-gray-400 space-y-4">
                Need help with your order?
              </p>
              <strong className="text-xl">info@example.com</strong>
            </div>
          </div>
        </div>
        <div>
          <p className="font-medium">Make Money with Us</p>
          <div className="text-xs text-gray-400 space-y-4">
            <p>Sell on Grogin</p>
            <p>Sell Your Services on Grogin</p>
            <p>Sell on Grogin Business</p>
            <p>Sell Your Apps on Grogin</p>
            <p>Become an Affilate</p>
            <p>Advertise Your Products</p>
            <p>Sell-Publish with Us</p>
            <p>Become an Blowwe Vendor</p>
          </div>
        </div>
        <div>
          <p className="font-medium">Let Us Help You</p>
          <div className="text-xs text-gray-400 space-y-4">
            <p>Accessibility Statement</p>
            <p>Your Orders</p>
            <p>Returns & Replacements</p>
            <p>Shipping Rates & Policies</p>
            <p>Refund and Returns Policy</p>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Cookie Settings</p>
            <p>Help Center</p>
          </div>
        </div>
        <div>
          <p className="font-medium">Get to Know Us</p>
          <div className="text-xs text-gray-400 space-y-4">
            <p>Careers for Grogin</p>
            <p>About Grogin</p>
            <p>Inverstor Relations</p>
            <p>Grogin Devices</p>
            <p>Customer reviews</p>
            <p>Social Responsibility</p>
            <p>Store Locations</p>
          </div>
        </div>
        <div>
          <p className="font-medium">Download our app</p>
          <div className="flex mt-4 object-cover">
            <img
              src="/public/image/google-play-button-dark.png"
              alt="Download App"
            />
            <p className="text-xs text-gray-400 ml-2">Download App Get -10% Discount</p>
          </div>
          <div className="flex mt-2 object-cover">
            <img
              src="/public/image/apple-store-button-dark.png"
              alt="Download App"
            />
            <p className="text-xs text-gray-400 ml-2">Download App Get -20% Discount</p>
          </div>
          <p className="mt-5 text-sm">Follow us on social media:</p>
          <div className="flex space-x-2 mt-2">
            <img src="/public/image/Link.png" alt="fb" />
            <img src="/public/image/x.png" alt="x" />
            <img src="/public/image/inta.png" alt="inta" />
            <img src="/public/image/Linked.png" alt="linker" />
          </div>
        </div>
      </div>
      <hr className="my-10 "/>
      <div className="grid grid-cols-2 text-xs text-gray-400">
        <p>Copyright 2024 © Jinstore WooCommerce WordPress Theme. All right reserved. Powered by <span className="text-customPurple"> BlackRise Themes.</span>  </p>
        <div className="flex justify-end ">
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Order Tracking</p>
        </div>
      </div>
      <div className="flex space-x-2 mt-2 ">
        <img src="/public/image/visa.png" alt="visa" />
        <img src="/public/image/item.png" alt="item" />
        <img src="/public/image/paypal.png" alt="paypal" />
        <img src="/public/image/skri.png" alt="skri" />
        <img src="/public/image/klarna.png" alt="klarna" />
      </div>
    </div>
  );
};
