import { ExpandMoreOutlined } from "@material-ui/icons";

import React from "react";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import "./sidebar.css";
import SideBarRow from "./SideBarRow";
import { useStateValue } from "./StateProvider";

export default function SideBar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      {/* we create row and reuse it */}
      <SideBarRow src={user.photoURL} title={user.displayName} />
      <SideBarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 information center"
      />
      <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SideBarRow Icon={PeopleIcon} title="Friends" />
      <SideBarRow Icon={ChatIcon} title="Messenger" />
      <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
      <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
      <SideBarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}
