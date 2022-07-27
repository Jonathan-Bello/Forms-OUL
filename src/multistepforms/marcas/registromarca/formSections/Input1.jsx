import { ErrorMessage, Field } from "formik";
import React from "react";
import renderError from "../../../utils/renderError";

const Input1 = () => {
  return (
    <div>
      <h2>Input1</h2>
      <Field type="text" name="nombre" />
      <ErrorMessage name="nombre" render={renderError} />
    </div>
  );
};

export default Input1;
