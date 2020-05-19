
import React, {useState} from 'react';
import classes from "./MenuToggle.module.scss"
export const MenuToggle = ({toggleНandler}) => {
  let[status,setStatus] = useState(true)
   const onClickHandler = ()=>{
    setStatus(status = !status);
    toggleНandler();
    console.log('222');
  }
  let cls = [classes.toggleButton,"fas"];
if (status) {
  cls=[...cls,"fa-bars"]
} else {
  cls=[...cls,"fa-times",classes.active]

}
  return (
    <i 
    className={cls.join(" ")}
    onClick={()=> onClickHandler()}
    ></i>
    // <i class="fas fa-times"></i>
  );
};
 export default MenuToggle ;
