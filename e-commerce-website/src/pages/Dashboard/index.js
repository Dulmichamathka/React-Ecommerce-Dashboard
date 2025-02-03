import React, { useState } from "react";
import DashboardBox from "./Components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { TbStarsFilled } from "react-icons/tb";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMdTime } from "react-icons/io";
import Button from "@mui/material/Button";
import { Chart } from "react-google-charts";

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

import InputLabel from "@mui/material/InputLabel";

import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { ImBin } from "react-icons/im";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  backgroundColor: "transparent",
  curveType: "function",
  legend: { position: "bottom" },
  colors: ["#1E90FF", "#FF0000"], // Blue for Sales, Red for Expenses
  hAxis: {
    title: "Year",
    textStyle: { color: "#fff", fontSize: 12 }, // Improve readability
    titleTextStyle: { color: "#fff", bold: true },
  },
  vAxis: {
    textStyle: { color: "#fff", fontSize: 12 },
    titleTextStyle: { color: "#fff", bold: true },
    gridlines: { color: "#ccc" }, // Light gray gridlines for better contrast
    baselineColor: "#fff",
  },
};

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showBy, setshowBy] = useState("");
  const [categoryBy, setcategoryBy] = useState("");
  const [brandBy, setbrandBy] = useState("");

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
                <h6 className="text-white font-weight-bold">Total Sales</h6>
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

              <h3 className="text-white font-weight-bold">#3,787,681.00</h3>
              <p className=""> $3,578.90 in last month </p>

              <Chart
                chartType="LineChart"
                width="100%"
                height="200px"
                data={data}
                options={options}
                legendToggle
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Best Selling Products</h3>
          <div className="row cardFilters mt-3">
            <div className="col-md-3">
              <h4>Show By</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} className="w-100">
                <Select
                  value={showBy}
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-simple-select-helper-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>12 Rows</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>Category By</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} className="w-100">
                <Select
                  value={categoryBy}
                  onChange={(e) => setcategoryBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-simple-select-helper-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>Mans</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>Brand By</h4>
              <FormControl sx={{ m: 1, minWidth: 120 }} className="w-100">
                <Select
                  value={brandBy}
                  onChange={(e) => setbrandBy(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  labelId="demo-simple-select-helper-label"
                  className="w-100"
                >
                  <MenuItem value="">
                    <em>Ectasy</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3 ml-2">
            <table className="table table-bordered v-align">
              <thead className="thead-dark">
                <tr>
                  <th>UID</th>
                  <th>PRODUCT</th>
                  <th>CATEGORY</th>
                  <th>BRAND</th>
                  <th>PRICE</th>
                  <th>STOCK</th>
                  <th>RATING</th>
                  <th>ORDER</th>
                  <th>SALES</th>
                  <th>ACTION</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className="d-flex align-items-center productBox">
                      <div className="imgWrapper">
                        <div className="img">
                          <img src="/skirt.jpg" alt="" />
                        </div>
                      </div>
                      <div className="info ">
                        <h6>Tops and skirt set for Female...</h6>
                        <p>
                          women's exclusive summer Tops and skirt set for Female
                          Tops and skirt set
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>Womans</td>
                  <td>richman</td>
                  <td>
                    <del className="old">$21.00</del>
                    <span className="new text-danger">$19.00</span>
                  </td>
                  <td>30</td>
                  <td>4.6(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                      </Button>
                      <Button className="success" color="success">
                        <FaPencil />
                      </Button>
                      <Button className="error" color="error">
                        <ImBin />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
