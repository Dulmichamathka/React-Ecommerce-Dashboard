import Button from "@mui/material/Button";
import React from "react";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { FiTrendingUp } from "react-icons/fi";
import { FiTrendingDown } from "react-icons/fi";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdTime } from "react-icons/io";

const DashboardBox = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;

  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]} ,${props.color?.[1]})`,
      }}
    >
      {props.grow === true ? (
        <span className="chart">
          <FiTrendingUp />
        </span>
      ) : (
        <span className="chart">
          <FiTrendingDown />
        </span>
      )}

      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white mb-0">{props.text}</h4>
          <span className="text-white">277</span>
        </div>
        <div className="ml-auto">
          {props.icon ? (
            <span className="icon">{props.icon ? props.icon : ""}</span>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="d-flex w-100 align-items-center bottomEle">
        <h6 className="text-white">Last Month</h6>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <IoMdTime style={{ marginRight: "8px" }} />
            Last Day
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <IoMdTime style={{ marginRight: "8px" }} />
            Last Week
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <IoMdTime style={{ marginRight: "8px" }} /> Last Month
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <IoMdTime style={{ marginRight: "8px" }} />
            Last Year
          </MenuItem>
        </Menu>
        <div className="ml-auto">
          <Button className="ml-auto toggleIcon" onClick={handleClick}>
            <PiDotsThreeOutlineVerticalFill />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardBox;
