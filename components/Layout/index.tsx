import Footer from "components/Footer";
import Header from "components/Header";
import Ticker from "components/Ticker";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Header />
            <div className="flex-grow max-w-[1200px] mx-auto w-full pb-10 px-5">
                {children}
            </div>
            <Footer />
            <Ticker />
        </div>
    );
}