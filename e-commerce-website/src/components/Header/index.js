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

import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { styled } from "@mui/material";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 10,
  height: 10,
  padding: 3,

  border: `1px solid ${theme.palette.background.paper}`,
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isOpennotification, setIsOpennotification] = useState(false);
  const openNotification = Boolean(isOpennotification);

  const handleClickNotifications = (event) => {
    setIsOpennotification(true);
  };
  const handleCloseNotifications = () => {
    setIsOpennotification(false);
  };

  const notifications = [
    {
      id: 1,
      userAvatar: "/profile.jpg",
      smallAvatar: "/heartwhite.png",
      Sbackground: "red",
      message: " added to her favourite list Nirasha Madubashini",
      time: " few seconds ago!",
    },
    {
      id: 2,
      userAvatar: "/boy1.jpeg",
      smallAvatar: "/chat.png",
      Sbackground: "green",
      message: "John liked your post",
      time: "5 minutes ago!",
    },
    {
      id: 3,
      userAvatar: "/girl2.jpg",
      smallAvatar: "/like.png",
      Sbackground: "blue",
      message: "Alex commented on your photo",
      time: "10 minutes ago!",
    },
    {
      id: 4,
      userAvatar: "/girl3.jpeg",
      smallAvatar: "/chat.png",
      Sbackground: "green",
      message: "Sarah started following you",
      time: "1 hour ago!",
    },
    {
      id: 5,
      userAvatar: "/girl5.jpeg",
      smallAvatar: "/heartwhite.png",
      Sbackground: "red",
      Sbackgroud: "green",
      message: "Michael shared your post",
      time: "2 hours ago!",
    },
  ];

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
              <div className="notificationWrapper">
                <Button
                  className="rounded-circle mr-3"
                  onClick={handleClickNotifications}
                >
                  <FaRegBell />
                </Button>

                <Menu
                  anchorEl={isOpennotification}
                  id="notifications"
                  className="notifications dropdownList"
                  open={openNotification}
                  onClose={handleCloseNotifications}
                  onClick={handleCloseNotifications}
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
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "center", vertical: "top" }}
                  anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                >
                  <div className="head pl-3 pb-1  pt-2">
                    <h4>Notifications (34)</h4>
                  </div>

                  <Divider />
                  <div className="scroll">
                    {notifications.map((notification) => (
                      <MenuItem
                        key={notification.id}
                        className="notification-menuitem"
                        sx={{ fontSize: "14px" }}
                        onClick={handleCloseNotifications}
                      >
                        <div className="notificationAvatar d-flex ">
                          <div className="userImg mt-3 ">
                            <Badge
                              overlap="circular"
                              anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                              }}
                              badgeContent={
                                <SmallAvatar
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    color: "white",
                                    backgroundColor: notification.Sbackground,
                                  }}
                                  alt="Remy Sharp"
                                  src={notification.smallAvatar}
                                />
                              }
                            >
                              <Avatar
                                src={notification.userAvatar}
                                style={{
                                  width: "43px",
                                  height: "43px",
                                }}
                              />
                            </Badge>
                          </div>

                          <div className="dropdownInfo">
                            <h4>
                              <span>
                                <b>Dulmi</b> {notification.message}{" "}
                                <b>Nirasha Madubashini</b>{" "}
                              </span>
                            </h4>

                            <p className="text-sky mb-0 mt-0">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </MenuItem>
                    ))}
                  </div>
                  <div className="pl-2 pr-2 w-100">
                    <Button className="btn-blue w-100">
                      View all notifications
                    </Button>
                  </div>
                </Menu>
              </div>

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
