import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}