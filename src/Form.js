import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function Form() {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <form onSubmit={handleSubmit}>
          <div className="parent">
            <div className="child1">
              <div className="child3">
                <label classname="label_div">Name</label>
                <br></br>
                <input
                  className="field_"
                  type="name"
                  autoComplete="off"
                  name="name"
                  id="name"
                  placeholder="Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? <p>{errors.name} </p> : null}
                <br></br>
                <label classname="label_div">Email</label>
                <br></br>
                <input
                  className="field_"
                  type="email"
                  autoComplete="off"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}

                <br></br>
                <label classname="label_div">Password</label>
                <br></br>
                <input
                  className="field_"
                  type="password"
                  autoComplete="off"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}

                <br></br>
                <label classname="label_div">Confirm Password</label>
                <br></br>
                <input
                  className="field_"
                  type="password"
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="Confirm Password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p>{errors.confirm_password}</p>
                ) : null}

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
        </form>
      </div>
    </>
  );
}
