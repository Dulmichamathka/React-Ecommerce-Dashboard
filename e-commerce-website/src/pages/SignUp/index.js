import React from "react";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TiHome } from "react-icons/ti";

const SignUp = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHideSidebarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };

  return (
    <>
      <img src="/background.jpg" className="loginpatern" />
      <section className="loginSection signUpSection">
        <div className="row">
          <div className="col-md-8 d-flex justify-content-center flex-column part1">
            <h1>BEST UX/UI FASHION ECOMMERCE DASHBOARD & ADMIN PANEL</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              ipsum dicta laborum doloribus aperiam a fugit assumenda dolorum
              esse molestiae. Ducimus eos qui corporis odio repellendus aut vel
              sequi earum.
            </p>
            <div className="mt-4">
              <Link to={"/"}>
                <Button className="btn-blue btn-lg btn-big ">
                  <TiHome />
                  Go To Home
                </Button>
              </Link>
            </div>
          </div>

          <div className="col-md-4 pr-0">
            <div className="loginBox">
              <div className="logo text-center">
                <img
                  src="/tagged.png"
                  style={{ width: "60px", height: "60px" }}
                />
                <h5 className="font-weight-bold">Login to Trendify</h5>
              </div>

              <div className="wrapper mt-3 border card ">
                <form>
                  <div
                    className={`form-group  position-relative ${
                      inputIndex === 0 && "focus"
                      //When inputIndex matches the input's index, the class "focus" is added.
                    }`}
                  >
                    <span className="icon">
                      <FaUserCircle />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      onFocus={() => focusInput(0)}
                      //this store the index of the input field
                      onBlur={() => setInputIndex(null)}
                    />
                  </div>

                  <div
                    className={`form-group  position-relative ${
                      inputIndex === 1 && "focus"
                      //When inputIndex matches the input's index, the class "focus" is added.
                    }`}
                  >
                    <span className="icon">
                      <MdEmail />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                      onFocus={() => focusInput(1)}
                      //this store the index of the input field
                      onBlur={() => setInputIndex(null)}
                    />
                  </div>

                  <div
                    className={`form-group  position-relative ${
                      inputIndex === 2 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <RiLockPasswordFill />
                    </span>
                    <input
                      type={`${isShowPassword === true ? "text" : "password"}`}
                      //according to visibility of icon text type is changed
                      className="form-control"
                      placeholder="Enter your password"
                      onFocus={() => focusInput(2)}
                      onBlur={() => setInputIndex(null)}
                    />
                    <span
                      className="toggleShowPassword"
                      onClick={() => setIsShowPassword(!isShowPassword)}
                      // when isShowPassword is false this set isshowpassword true
                      // when set isshowpassword true show relavant eye
                    >
                      {isShowPassword === true ? <IoEye /> : <IoEyeOff />}
                    </span>
                  </div>

                  <div
                    className={`form-group  position-relative ${
                      inputIndex === 3 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <IoShieldCheckmark />
                    </span>
                    <input
                      type={`${
                        isShowConfirmPassword === true ? "text" : "password"
                      }`}
                      //according to visibility of icon text type is changed
                      className="form-control"
                      placeholder="Enter your password"
                      onFocus={() => focusInput(3)}
                      onBlur={() => setInputIndex(null)}
                    />
                    <span
                      className="toggleShowPassword"
                      onClick={() =>
                        setIsShowConfirmPassword(!isShowConfirmPassword)
                      }
                      // when isShowPassword is false this set isshowpassword true
                      // when set isshowpassword true show relavant eye
                    >
                      {isShowConfirmPassword === true ? (
                        <IoEye />
                      ) : (
                        <IoEyeOff />
                      )}
                    </span>
                  </div>

                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="I agree to the all Terms & Conditions"
                  />

                  <div className="form-group">
                    <Button className="btn-blue btn-lg btn-big w-100">
                      Sign Up
                    </Button>
                  </div>

                  <div className="form-group text-center mb-0">
                    <Link to={"/forgot-password"} className="link ">
                      FORGOT PASSWORD
                    </Link>
                    <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                      <span className="line"></span>
                      <span className="txt">or</span>
                      <span className="line"></span>
                    </div>

                    <Button
                      variant="outlined"
                      className="w-100 btn-lg btn-big loginWithGoogle"
                    >
                      <img src="/google.png" width="25px" />
                      &nbsp; Sign In with Google
                    </Button>
                  </div>

                  <span className="text-center d-block mt-3">
                    Don't have an account?
                    <Link to={"/login"} className="link color ml-2">
                      Sign In
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
