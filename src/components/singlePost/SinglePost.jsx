import { Link } from "react-router-dom";
import "./singlePost.css";
import { useAuthContext } from "../../context/AuthContext";

export default function SinglePost(post) {
  const { authUser } = useAuthContext();

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post?.post?.image?.url} alt="" />
        <h1 className="singlePostTitle">{post?.post?.title}</h1>
        {post?.post?.user?._id === authUser._id && (
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"> </i>
            <i className="singlePostIcon far fa-trash-alt"> </i>
          </div>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {post?.post?.user?.fullName}
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">{post?.post?.description}</p>
      </div>
      <div className="comment-box">
        <p className="comment text-xl mx-2">Comments ☰</p>
        {post?.post?.comments?.length > 0 ? (
          post?.post?.comments?.map((comment) => {
            return (
              <div
                key={comment._id}
                className="comment-box border-2 border-gray-600 shadow-lg p-2 mx-1 my-2 rounded-md"
              >
                <p className="comment-author text-lg font-bold">
                  {comment.user.fullName}
                </p>
                <p className="comment text-lg">{comment.content}</p>
                {console.log(comment)}
              </div>
            );
          })
        ) : (
          <>
            <p> No Comments Yet!!</p>
            <p> No Comments Yet!!</p>
          </>
        )}
      </div>
    </div>
  );
}
