import "./globals.css";
import { roboto } from "../lib/fonts";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import siteData from "@/data/siteData";

export const metadata = siteData.metaData;

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className="scroll-smooth scrollbar-thin scrollbar-thumb-secondary scrollbar-track-primary">

      <body className={`${roboto.className} antialiased`}>

        <Navbar />

        {children}

        <Footer />

      </body>

    </html>
  );
}

export default RootLayout;