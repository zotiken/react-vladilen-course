export function validation(value, param) {
  let state;
  param.map((validItem) => {
    switch (validItem) {
      case "required":
        return (state = value.trim() !== "" ? true : false);
      case "email":
        return (state = value.trim() !== "" ? true : false);
      case "password":
        return (state = value.trim() !== "" ? true : false);
      default:
        return false;
    }
  });
  return state;
}
