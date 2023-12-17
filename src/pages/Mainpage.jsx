import { Navbar } from "../components/navbar/Navbar";
import { Heropage } from "./Heropage";

export const Mainpage = () => {
  return (
    <>
      <div className="bg-secondaryColor">
        <Navbar />
        <Heropage />
      </div>
    </>
  );
}