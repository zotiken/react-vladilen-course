import React, { Component } from 'react';
import classes from "./Layout.module.scss"

class Layout extends Component {
  render() {
    return (
      <>
        <main className={classes.main}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
