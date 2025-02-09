import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);

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
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src="/tagged.png" style={{ width: "60px", height: "60px" }} />
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
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter your email"
                  onFocus={() => focusInput(0)}
                  //this store the index of the input field
                  onBlur={() => setInputIndex(null)}
                />
              </div>

              <div
                className={`form-group  position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <RiLockPasswordFill />
                </span>
                <input
                  type={`${isShowPassword === true ? "text" : "password"}`}
                  //according to visibility of icon text type is changed
                  className="form-control"
                  placeholder="enter your email"
                  onFocus={() => focusInput(1)}
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

              <div className="form-group">
                <Button className="btn-blue btn-lg btn-big w-100">
                  Sign In
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
            </form>
          </div>

          <div className="wrapper mt-3 border card footer p-3 ">
            <span className="text-center">
              Don't have an account?
              <Link to={"/signUp"} className="link color ml-2">
                Register
              </Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
