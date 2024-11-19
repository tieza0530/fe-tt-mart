import { Suspense } from "react";
import { Footer } from "../footer";
import { Loading } from "../ui/Loading";
import { Header } from "../header";

export type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
          <Header />
          <main className="px-28">{children}</main>
          <Footer />
      </Suspense>
    </div>
  );
};
