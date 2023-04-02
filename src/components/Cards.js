import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../actions/creators";
import { EDIT } from "../constants/actionTypes";

export default function ImgMediaCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: "30%",
        minWidth: "300px",
        margin: "10px",
        flex: "1 1 auto",
      }}
    >
      <CardMedia
        component="img"
        alt={props.title}
        height="140"
        image={props.image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.text}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="small" onClick={() => dispatch(deletePost(props.id))}>
          Delete
        </Button>
        <Button
          size="small"
          onClick={() => {
            dispatch({ type: EDIT, payload: props });
            navigate("/edit");
          }}
        >
          Edit
        </Button>
        <Button size="small">
          Added on: {props.timestamp.substring(0, 10)}
        </Button>
      </CardActions>
    </Card>
  );
}
