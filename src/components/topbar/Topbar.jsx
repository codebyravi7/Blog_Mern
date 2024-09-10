import { Link } from "react-router-dom";
import "./topbar.css";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";
export default function Topbar() {
  const { authUser } = useAuthContext();
  const { loading, logout } = useLogout();
  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };
  return (
    <div className="top  bg-gradient-to-b from-cyan-300 to-blue-50 opacity-80">
      <div className="topCenter flex">
        <ul className="topList flex w-full justify-evenly">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/code">
              CODE
            </Link>
          </li>
          <li className="topListItem ml-10 p-1 px-3 border-2 border-red-300 rounded-lg flex items-center cursor-pointer">
            <i className="fas fa-search"></i>
            <input type="text" className="rounded-lg ml-4 p-1 px-2"/>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {authUser ? (
          <>
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </Link>
            <Link className="" onClick={handleLogout}>
              LOGOUT
            </Link>
          </>
        ) : (
          <ul className="topList ">
            <li className="topListItem mx-8">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
