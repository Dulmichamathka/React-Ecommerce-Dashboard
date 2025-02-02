import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboards{" "}
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubmenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <FaProductHunt />
              </span>
              Products{" "}
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>

            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubmenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Product List</Link>
                </li>
                <li>
                  <Link to="#">Product View</Link>
                </li>
                <li>
                  <Link to="#">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 3 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(3)}
              >
                <span className="icon">
                  <FaCartShopping />
                </span>
                Orders{" "}
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(4)}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                Message
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(5)}
              >
                <span className="icon">
                  <FaBell />
                </span>
                Notifications
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(6)}
              >
                <span className="icon">
                  <IoDocumentText />
                </span>
                Invoices
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 7 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(7)}
              >
                <span className="icon">
                  <MdEditDocument />
                </span>
                Documentation
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 7 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(7)}
              >
                <span className="icon">
                  <IoShapesSharp />
                </span>
                Overview
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 8 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(8)}
              >
                <span className="icon">
                  <IoSettingsSharp />
                </span>
                Settings
              </Button>
            </Link>
          </li>
        </ul>

        <br />

        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              <span>
                <IoMdLogOut />
              </span>
              Logout{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
