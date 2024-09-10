import { useState } from "react";
import toast from "react-hot-toast";

const useShowposts = () => {
  const [loading, setLoading] = useState(false);

  const showPosts = async () => {
    setLoading(true);
    try {
      const api = await fetch(`/api/post/allposts`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
          },  
      })
      const data = await api.json();
      // console.log(data)
      return data?.allposts;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, showPosts };
};
export default useShowposts;
