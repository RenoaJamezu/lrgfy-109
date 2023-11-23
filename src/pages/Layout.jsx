import { Sidebar } from "../components/Sidebar";
import { Library } from "./page/Library";

export const Layout = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Library />
      </div>
    </>
  );
}