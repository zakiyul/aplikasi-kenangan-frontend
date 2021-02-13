import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const posts = useSelector((state) => state.props);
  const kelas = useStyles();

  console.log(posts);

  return (
    <>
      <h1>POSTS</h1>
      <Post></Post>
      <Post></Post>
    </>
  );
};

export default Posts;
