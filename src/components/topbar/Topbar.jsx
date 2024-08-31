import { Link } from "react-router-dom";
import "./topbar.css";
import { useAuthContext } from "../../context/AuthContext";
import useLogout from "../../hooks/useLogout";
export default function Topbar() {
  const { authUser } = useAuthContext();
  const {loading, logout} = useLogout()
  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };
  return (
    <div className="top  bg-gradient-to-b from-cyan-300 to-blue-50 opacity-80">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {authUser && <li className="topListItem"onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {authUser ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
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
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
