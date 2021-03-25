import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search"; // copied from material ui site
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";

import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      {/*  split header into 3 areas */}
      <div className="header_left">
        <img
          src="https://th.bing.com/th/id/OIP.A4k1z25xge4FBEBOiP-5MwHaHa?w=188&h=188&c=7&o=5&dpr=1.25&pid=1.7"
          alt="fbimage"
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header_center">
        <div className="header_option header_option_active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div className="header_info">
          <IconButton>
            <Avatar src={user.photoURL} />
          </IconButton>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}
