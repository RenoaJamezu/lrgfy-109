import { Navbar } from "../components/Navbar";
import { Heropage } from "./Heropage";

export const Mainpage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Heropage />
      </div>
    </>
  );
}