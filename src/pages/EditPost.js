import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Grid, Typography } from "@mui/material";
import { addBlog, updatePost } from "../actions/creators";
import { EDIT } from "../constants/actionTypes";

const EditPost = () => {
  const postDetails = useSelector((state) => state.auth.editPost);
  const [details, setDetails] = useState(postDetails);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileUploadRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const submitDetails = (e) => {
    e.preventDefault();

    dispatch(updatePost(details,navigate));
    dispatch({type:EDIT,payload:[]})
    setFile(null);
  };

  // Function to convert file into base64 string
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  // Function to handle file read
  const handleFileRead = async (event) => {
    const file = event.target.files[0];
    // Check file size
    if (file.size > 500000) {
      setError("Please choose a file smaller than 1mb");
      return;
    }
    if (file.type !== "application/pdf" && file.type !== "image/jpeg") {
      setError("File does not support. You must use .pdf or .jpg ");
      return;
    }
    const base64 = await convertBase64(file);
    setDetails({
      ...details,
      [event.target.name]: base64,
    });
    setFile(file);
    setError("");
  };

  return (
    <>
      <form onSubmit={submitDetails}>
        <Typography variant="h5">Edit Post with id {postDetails.id}</Typography>
        <Button color="primary" size="medium" type="submit" variant="contained">
          Update
        </Button>
        <Button
          color="primary"
          size="medium"
          onClick={() => {
            navigate("/");
          }}
          variant="contained"
        >
          Home
        </Button>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
        >
          <TextField
            value={details.text}
            name="text"
            id="outlined-textarea"
            label="Description"
            required
            multiline
            sx={{ m: 1, minWidth: "63%" }}
            onChange={handleChange}
          />

          <Grid item xs={12} sm={6}>
            <TextField
              ref={fileUploadRef}
              type="file"
              id="image-upload"
              name="image"
              label="Upload Photo less than 500kb"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                accept: "image/jpeg,image/png",
              }}
              onChange={handleFileRead}
              onClick={() => fileUploadRef.current.click()}
            />
            {details.image && (
              <img src={details.image} width="100" height="100" />
            )}
            {file && <p>{file.name}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </Grid>
        </Box>
      </form>
    </>
  );
};

export default EditPost;
