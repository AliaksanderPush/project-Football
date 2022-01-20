import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { matchSelection } from "../../../redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { formatDate } from "../../../resourses/helpers";
import "./SingleMatchCard.css";

export const SingleMatchCard = ({ info }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (info) => {
    dispatch(matchSelection(info));
    navigate("/watch_matches/title");
  };
  const data = formatDate(info.date, "dd MMM yyyy hh:mm");

  return (
    <div
      className="col d-flex justify-content-center item-card mt-3 mb-3"
      onClick={() => handleClick(info)}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={info.thumbnail}
            alt={info.title}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              justify="center"
              align="center"
            >
              {info.title}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              justify="center"
              align="center"
            >
              {data}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
