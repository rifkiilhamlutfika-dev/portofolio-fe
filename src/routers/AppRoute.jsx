import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Navbar from "../ui/modules/Navbar";
import Sidebar from "../ui/modules/Sidebar";
import Home from "../ui/views/Home";
import Projects from "../ui/views/Projects";
import DetailProjects from "../ui/views/DetailProject";
import Academy from "../ui/views/Academy";
import Hobbies from "../ui/views/Hobbies";
import DetailFilePopUp from "../ui/modules/DetailImagePopUp";
import useStore from "../stores/StoreApp";

function AppRoute() {
  const [sizeFrame, setSizeFrame] = useState(window.innerWidth);
  const [isNav, setIsNav] = useState(Boolean);

  useEffect(() => {
    const handleResize = () => {
      setSizeFrame(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (sizeFrame < 1024) {
      setIsNav(true);
    } else {
      setIsNav(false);
    }
  }, [sizeFrame]);

  const { urlImagePopUp, isImagePopUp, closeImagePopUp } = useStore();

  return (
    <BrowserRouter>
      {isImagePopUp ? (
        <DetailFilePopUp url={urlImagePopUp} onClose={closeImagePopUp} />
      ) : (
        ""
      )}
      <div className="lg:flex lg:space-x-[250px]">
        {!isNav ? <Sidebar /> : <Navbar />}
        <div className={`flex-1`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:idProject" element={<DetailProjects />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default AppRoute;
