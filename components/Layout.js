import { Sora } from "@next/font/google";

// font setting
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

// Components
import Nav from "../components/Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Nav />
      <Header />
      <TopLeftImg />
      {children}
    </div>
  );
};

export default Layout;
