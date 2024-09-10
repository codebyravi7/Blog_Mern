import { useState } from "react";
import toast from "react-hot-toast";

const useEditPost = () => {
  const [loading, setLoading] = useState(false);

  const editPost = async (formData) => {
    setLoading(true);
    try {
      await fetch("/api/post/edit", {
        method: "PUT",
        body: formData,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, editPost };
};
export default useEditPost;
