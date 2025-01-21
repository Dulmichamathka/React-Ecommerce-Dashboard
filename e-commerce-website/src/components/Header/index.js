import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import Badge from "@mui/material/Badge";

import Avatar from "@mui/material/Avatar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="d-flex  align-items-center  ">
        <div className="container-fluid w-100">
          <div className="row d-flex  align-items-center ">
            {/*logo wrapper*/}
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center  logo">
                <div>
                  <img
                    src="/tagged.png"
                    style={{ width: "50px", height: "50px" }}
                  ></img>

                  <span className="ml-2">TRENDIFY</span>
                </div>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle mr-3">
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end ">
              <Button className="rounded-circle mr-3">
                <MdOutlineLightMode />
              </Button>
              <Badge
                badgeContent={12}
                color="primary"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#096866",
                    color: "white",
                    right: "18px",
                    top: "5px",
                  },
                }}
              >
                <Button className="rounded-circle mr-3">
                  <IoCartOutline />
                </Button>
              </Badge>

              <Button className="rounded-circle mr-3">
                <MdOutlineEmail />
              </Button>
              <Button className="rounded-circle mr-3">
                <FaRegBell />
              </Button>

              <div
                className="myAcc d-flex align-items-center"
                onClick={handleClick}
              >
                <div className="userImg">
                  <Avatar
                    src="/profile.jpg"
                    sx={{
                      width: 34,
                      height: 34,
                      position: "relative",
                      bottom: "0.5px",
                      right: "0.5px",
                    }}
                  />
                </div>

                <div className="userInfo">
                  <h4>Dulmi Chamathka</h4>
                  <p className="mb-0">dulmi@gmail.com</p>
                </div>
              </div>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem sx={{ fontSize: "14px" }} onClick={handleClose}>
                  <ListItemIcon>
                    <FaUser />
                  </ListItemIcon>
                  My Account
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} onClick={handleClose}>
                  <ListItemIcon>
                    <IoShieldCheckmarkSharp />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} onClick={handleClose}>
                  <ListItemIcon>
                    <FaLock color="danger" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
