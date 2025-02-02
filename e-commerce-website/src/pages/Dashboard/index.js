import React from "react";
import DashboardBox from "./Components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";

const Dashboard = () => {
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
    <>
      <div className="right-content w-100">
        <div className="row dashboardBoxWrapperRow">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#66cc66", "#40bf40"]}
                icon={<FaUserCircle />}
                text={["Total Users"]}
                grow={true}
              />
              <DashboardBox
                color={["#FFA45F", "#FF7005"]}
                icon={<FaShoppingCart />}
                text={["Total Orders"]}
              />
              <DashboardBox
                color={["#9343FF", "#BA87FF"]}
                icon={<FaShoppingBag />}
                text={["Total Products"]}
              />
              <DashboardBox
                color={["#3F3BFF", "#8481FF"]}
                icon={<TbStarsFilled />}
                text={["Total Reviews"]}
              />
            </div>
          </div>

          <div className="col-md-4 pl-0">
            <div className="box graphBox">
              <div className="d-flex w-100 align-items-center bottomEle">
                <h6 className="text-white">Total Sales</h6>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
