import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import { useEffect, useState } from "react";

export default function Homepage() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      console.log(window.innerWidth); // Log the updated screen size
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Another useEffect to log screenSize whenever it changes
  useEffect(() => {
    console.log(screenSize); // This will log whenever screenSize updates
  }, [screenSize]);
  return (
    <>
      <Header />
      <div className="home">
        {screenSize > 800 && (
          <div className="flex h-screen">
            <div className="sidebar max-h-screen overflow-y-auto max-w-[400px] hide-scrollbar">
              <Sidebar />
            </div>
            <div className="posts flex-grow overflow-y-auto hide-scrollbar">
              <Posts />
            </div>
          </div>
        )}
        {screenSize <= 800 && <Posts />}
      </div>
    </>
  );
}
