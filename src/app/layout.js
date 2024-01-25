import { Lato } from "next/font/google";
import "../styles/globals.css";
import Footer from "@/components/Common/footer/Footer";
import Navbar from "@/components/Common/Navbar/Navbar";

const lato = Lato({
    weight: ["100", "300", "400", "700", "900"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Plan Pixel",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${lato.className} mx-auto max-w-screen-2xl`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
