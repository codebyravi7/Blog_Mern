import { useState } from "react";

const useLikepost = () => {
  const [likes, setLikes] = useState();
  const addLike = async (postid) => {
    console.log("postid:", postid);
    const api = await fetch("/api/post/like", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postid }),
    });
    const data = await api.json();
    console.log(data);
  };
  return { likes, addLike };
};
export default useLikepost;
