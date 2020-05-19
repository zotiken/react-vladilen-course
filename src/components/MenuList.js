import * as React from 'react';
import classes from "./MenuList.module.scss";

export const MenuList = ({state}) => {
  let cls = [classes.menuList]
if (state) {
  cls = [...cls,classes.active]
} 
  return (
    <div className={cls.join(' ')}>
   <ul>
     <li><a href=""></a>Lorem.</li>
     <li><a href=""></a>Lorem, ipsum.</li>
     <li><a href=""></a>Lorem, ipsum dolor.</li>
     <li><a href=""></a>Lorem ipsum dolor sit.</li>
     <li><a href=""></a>Lorem, ipsum dolor.</li>
   </ul>
    </div>
  );
};
export default MenuList ;
