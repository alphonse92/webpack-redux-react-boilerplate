import React from 'react';
import sass from './modal.component.sass'

const props_def = {
  styles: {},
  close: () => { }
}
const component = (props) => {
  props = Object.assign(props_def, props)
  const styles = Object.assign(sass, props.styles || {});
  return (
    <div className={styles.container}>
      <div onClick={props.close} className={styles.overlay}></div>
      <div className={styles.row}>
        <div className={styles.body}>
          {props.children}
        </div>
      </div>
    </div>);
};

export default component;