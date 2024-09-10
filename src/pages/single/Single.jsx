import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useShowSinglePost from "../../hooks/useShowSinglePost";

export default function Single() {
  const { id } = useParams();
  const [post1, setPost] = useState();
  const { loading, showPost } = useShowSinglePost();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await showPost(id);
        setPost(res || []);
        console.log(res);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPost();
  }, []);
  return (
    <div className="single">
      <div className="flex h-screen">
        <div className="sidebar max-h-screen overflow-y-auto max-w-[400px] hide-scrollbar sidebar">
          <SinglePost post={post1} />
        </div>
        <div className="posts flex-grow overflow-y-auto hide-scrollbar">
          <Sidebar user={post1?.user} className="sidebarProfile" />
        </div>
      </div>
    </div>
  );
}
