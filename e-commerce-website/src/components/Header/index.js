import React from "react";
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

import Avatar from "@mui/material/Avatar";

const Header = () => {
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
              <Button className="rounded-circle mr-3">
                <IoCartOutline />
              </Button>
              <Button className="rounded-circle mr-3">
                <MdOutlineEmail />
              </Button>
              <Button className="rounded-circle mr-3">
                <FaRegBell />
              </Button>

              <div className="myAcc d-flex align-items-center">
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
