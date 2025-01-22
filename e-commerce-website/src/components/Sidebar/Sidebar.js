import React from "react";
import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import { IoShapesSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Button className="w-100">
              <span className="icon">
                <MdDashboard />
              </span>
              Dashboards{" "}
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <FaProductHunt />
              </span>
              Products{" "}
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <FaCartShopping />
              </span>
              Orders{" "}
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <MdEmail />
              </span>
              Message
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <FaBell />
              </span>
              Notifications
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <IoDocumentText />
              </span>
              Invoices
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <MdEditDocument />
              </span>
              Documentation
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <IoShapesSharp />
              </span>
              Overview
            </Button>
          </li>

          <li>
            <Button className="w-100">
              <span className="icon">
                <IoSettingsSharp />
              </span>
              Settings
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
