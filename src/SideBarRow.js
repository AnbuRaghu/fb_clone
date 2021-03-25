import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarRow.css";

// export default function SideBarRow(props) {
export default function SideBarRow({ src, title, Icon }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}
