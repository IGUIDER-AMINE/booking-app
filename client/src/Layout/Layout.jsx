import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="p-4 flex flex-col min-h-screen">
      <Header />
      {/*  the Outlet component is used to render nested routes within a parent route. It's a placeholder for where the child routes will be displayed. */}
      <Outlet />
    </div>
  );
}
