"use client";
import MobileNav from "@/components/headers/MobileNav";
import "../public/assets/scss/styles.scss";
import { useEffect } from "react";
import SiteMenu from "@/components/headers/SiteMenu";
import ScrollTop from "@/components/common/ScrollTop";
import CursorFollor from "@/components/common/CursorFollor";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import PopupSearch from "@/components/headers/PopupSearch";

// import "bootstrap/dist/js/bootstrap.bundle";

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="bg-white">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteMenu />
        <MobileNav />
        <PopupSearch />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
        <CursorFollor />
        <ScrollTop />
      </body>
    </html>
  );
}
