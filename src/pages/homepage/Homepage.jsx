import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import { useEffect, useState } from "react";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="flex h-screen">
          <div className="w-1/3 sidebar max-h-screen overflow-y-auto max-w-[400px] hide-scrollbar sidebar">
            <Sidebar />
          </div>
          <div className="posts flex-grow overflow-y-auto hide-scrollbar">
            <Posts className="w-2/3"/>
          </div>
        </div>
      </div>
    </>
  );
}
