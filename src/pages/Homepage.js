import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ImgMediaCard from "../components/Cards";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPost } from "../actions/creators";

const Homepage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const posts = useSelector((state) => state.auth.posts);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <>
      <Navbar />
      {user ? (
        posts?.map((post) => <ImgMediaCard key={post.id} {...post} />)
      ) : (
        <div>Login first to see post</div>
      )}
    </>
  );
};

export default Homepage;
