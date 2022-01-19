import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { useState } from "react";
import "./Footer.css";

export const Footer = () => {
  const [value, setValue] = useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="footer">
      <Typography
        variant="h6"
        align="center"
        sx={{
          color: "#fff",
        }}
      >
        Play Football
      </Typography>

      <BottomNavigation
        className="footer-item"
        showLabels
        value={value}
        onChange={handleChange}
        sx={{
          color: "#fff",
        }}
      >
        <BottomNavigationAction
          sx={{
            color: "#fff",
          }}
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          sx={{
            color: "#fff",
          }}
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          sx={{
            color: "#fff",
          }}
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </div>
  );
};
