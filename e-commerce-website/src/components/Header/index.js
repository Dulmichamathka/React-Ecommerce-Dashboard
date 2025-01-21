import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../SearchBox";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
