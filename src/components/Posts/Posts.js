import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const kelas = useStyles();

  return (
    <>
      <h1>POSTS</h1>
      <Post></Post>
      <Post></Post>
    </>
  );
};

export default Posts;
