import React from 'react';
import style from './style.sass'
export default (props) => {
  // console.log("asdasd")
  return (
    <React.Fragment>
      <div className={style.container}>
        <div className={style.title}>
          <h1>{props.conf.title}</h1>
        </div>
        {props.children}
      </div>
    </React.Fragment>
  );
}