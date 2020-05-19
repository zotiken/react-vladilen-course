
import React, {useState} from 'react';
import classes from "./MenuToggle .module.scss"
export const MenuToggle = (props) => {
  let[status,setStatus] = useState(true)
  let cls = ["fas"];
if (status) {
  cls=[...cls,"fa-bars"]
} else {
  cls=[...cls,"fa-times"]

}
  return (
    <i 
    className={cls.join(" ")}
    onClick={()=>setStatus(status = !status)}
    ></i>
    // <i class="fas fa-times"></i>
  );
};
 export default MenuToggle ;
