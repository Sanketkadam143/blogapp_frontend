import { AUTH ,ALLPOST,DELETE} from "../constants/actionTypes";
import * as api from "../api";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data, status } = await api.signIn(formData);
    dispatch({ type: AUTH, payload: data });
    if (data.success) {
      navigate("/");
    }
  } catch (error) {
    console.log(error);
  }
};
export const signUp = (formData, navigate) => async (dispatch) => {
    try {
      const { data, status } = await api.signUp(formData);
      if (data.success) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const addBlog = (formData, navigate) => async (dispatch) => {
    try {
      const { data, status } = await api.addBlog(formData);
     navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  export const getPost = () => async (dispatch) => {
    try {
      const { data, status } = await api.getPost();
      dispatch({type:ALLPOST,payload:data.posts})
    
    } catch (error) {
      console.log(error);
    }
  };

  export const deletePost = (id) => async (dispatch) => {
    try {
      const { data, status } = await api.deletePost(id);
      dispatch({type:DELETE,id})
    
    } catch (error) {
      console.log(error);
    }
  };

  export const updatePost = (formData,navigate) => async (dispatch) => {
    try {
      const { data, status } = await api.updatePost(formData);
     navigate("/");
    
    } catch (error) {
      console.log(error);
    }
  };


