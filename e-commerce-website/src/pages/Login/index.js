import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

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
                className={`form-group mb-3 position-relative ${
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
                className={`form-group mb-3 position-relative ${
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

              <div className="form-group"></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
