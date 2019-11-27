import React from 'react';
import styles from './header-component.style.js';
import withStyle from "../../lib/withStyle";
import data from './header-component.data.js';

const Header= (props) =>{
  const {className} = props;
  console.log(data,'data');
  return (
    <div className={`${className} header-name`}>
     Data {props.name}
     </div>
  )
};

export default withStyle(Header, styles);