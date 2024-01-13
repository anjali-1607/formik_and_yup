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
              <label>Email</label>
              <br></br>
              <input /> <br></br>
              <label>Password</label>
              <br></br>
              <input />
              <br></br>
              <label>Update Password</label>
              <br></br>
              <input />
              <br></br>
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
