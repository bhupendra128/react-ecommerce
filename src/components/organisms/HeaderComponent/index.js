import React from 'react';
import styles from './header-component.style.js';
import withStyle from "../../lib/withStyle"

const Header= (props) =>{
  const {className} = props;
  return (
    <div className={`${className} header-name`}>
     Data {props.name}
     </div>
  )
};

export default withStyle(Header, styles);