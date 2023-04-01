import { AUTH, ISLOGIN, ALLPOST, DELETE, EDIT } from "../constants/actionTypes";
import jwtDecode from "jwt-decode";

function decodeJWT(token) {
  try {
    const decoded = jwtDecode(token);
    return decoded;
  } catch (error) {
    console.log("Error decoding JWT", error);
    return null;
  }
}

const authReducer = (
  state = { authData: [], user: false, posts: [], editPost: [] },
  action
) => {
  switch (action.type) {
    case AUTH: {
      const memberData = decodeJWT(action.payload.token);
      localStorage.setItem("profile", action.payload.token);
      return {
        ...state,
        authData: memberData,
        user: true,
      };
    }
    case ISLOGIN: {
      const token = localStorage.getItem("profile");
      if (!token) return state;
      const memberData = decodeJWT(token);
      return {
        ...state,
        authData: memberData,
        user: true,
      };
    }
    case ALLPOST:
      return { ...state, posts: action.payload };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };

    case EDIT:
      return { ...state, editPost: action.payload };
    default:
      return state;
  }
};

export default authReducer;
