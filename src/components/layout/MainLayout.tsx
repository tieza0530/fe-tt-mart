import { Suspense } from "react";
import { Footer } from "../footer";
import { Loading } from "../ui/Loading";

export type MainLayoutProps = {
    children: React.ReactNode
}
export const MainLayout = ({children}:MainLayoutProps ) => {
    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <main>{children}</main>
                <Footer/>
            </Suspense>
        </div>
    );
};

