import { useState } from "react";
import toast from "react-hot-toast";

const useShowSinglePost = () => {
  const [loading, setLoading] = useState(false);

  const showPost = async (id) => {
    setLoading(true);
      try {
      const api = await fetch(`/api/post/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await api.json();
      return data?.post;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, showPost };
};
export default useShowSinglePost;
