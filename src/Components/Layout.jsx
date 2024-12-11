import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="px-[100px]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
