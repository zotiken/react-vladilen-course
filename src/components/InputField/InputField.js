import React from "react";
import classes from "./InputField.module.scss";
export default ({
  label,
  type,
  name,
  value,
  errorMessage,
  id,
  valid,
  onChange,
  validation,
  className,
  toutched,
  formValid,
}) => {
  const cls = [];
  if (!valid && toutched && formValid) {
    cls.push(classes.invalid);
  }
  if (!formValid && !valid) {
    cls.push(classes.invalid);
  }

  const itemId = name + "-" + btoa(name + id);
  function validate() {
    switch (validation) {
      case "email":
        return { required: "required" };
      case "password":
        return { maxLength: 5, required: "required" };
      // case "text":
      //   return { maxLength: 100, required: "required" };
      default:
        return null;
    }
  }
  return (
    <div className={className}>
      <input
        className={cls.join(" ")}
        type={type}
        name={name}
        autoComplete
        value={value}
        id={itemId}
        {...validate()}
        onChange={(event) => onChange(event, name)}
      />
      <label className={toutched ? classes.touched : null} htmlFor={itemId}>
        {label}
      </label>

      {!valid && !formValid && <span>{errorMessage}</span>}
    </div>
  );
};
