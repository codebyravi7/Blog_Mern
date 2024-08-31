import { useState } from "react";
import toast from "react-hot-toast";

const useAddPost = () => {
  const [loading, setLoading] = useState(false);

  const addPost = async (formData) => {
    setLoading(true);
    try {
      await fetch("/api/post/add", {
        method: "POST",
        body: formData,
      }).then((res) => console.log(res))
        .catch((err) => console.log(err))
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addPost };
};
export default useAddPost;
