import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div className="parent">
          <div className="child1">
            <div className="child3">
              <label classname="label_div">Name</label>
              <br></br>
              <input
                type="name"
                autoComplete="off"
                name="name"
                id="name"
                placeholder="Name"
                className="field_"
              />
              <br></br>
              <label classname="label_div">Email</label>
              <br></br>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                placeholder="Email"
                className="field_"
              />
              <br></br>
              <label classname="label_div">Password</label>
              <br></br>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                placeholder="Password"
                className="field_"
              />
              <br></br>
              <label classname="label_div">Confirm Password</label>
              <br></br>
              <input
                type="password"
                autoComplete="off"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm Password"
                className="field_"
              />
              <br></br>
              <div>
                <a href="#">Want to register using Gmail?</a>
                <button type="submit" className="btn_submit">
                  Registration
                </button>
              </div>
            </div>
          </div>
          <div className="child2">
            <img className="picture" src={require("./picture.jpg")} />
          </div>
        </div>
      </div>
    </>
  );
}
