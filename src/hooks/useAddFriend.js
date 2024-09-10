import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useAddFriend = () => {
  const [loading, setLoading] = useState(false);
  const {authUser} = useAuthContext()

  const addFriend = async (id) => {
    setLoading(true);
    try {
     const api = await fetch("/api/user/addfriend", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({ id }),
     });
      const data = await api.json();
      // console.log(data)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const areFriend = async (id) => {
    setLoading(true);
    // console.log(id);
    try {
      const api = await fetch(`/api/user/arefriend/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      // console.log(api)
      const data = await api.json();
      // console.log(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, addFriend ,areFriend};
};
export default useAddFriend;
