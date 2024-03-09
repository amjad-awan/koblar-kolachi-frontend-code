import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import Header from "../header/Header";
import Sidebar from "../navbar/Sidebar";
import Footer from "../footer/Footer";
import SideOverLay from "../sideOverLay/SideOverLay";
import SearchProducts from "../searchProducts/SearchProducts";
import WhatsApp from "../WhatsApp/WhatsApp";

const Layout = ({ children }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  console.log(openSearch);
  return (
    <div className="relative flex flex-col">
      <SearchProducts openSearch={openSearch} setOpenSearch={setOpenSearch} />
      <SideOverLay open={open} setOpen={setOpen} />
      <NavBar
        open={open}
        setOpen={setOpen}
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />
      {children}
      <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />

      <Footer />
      <WhatsApp />
    </div>
  );
};

export default React.memo(Layout);
