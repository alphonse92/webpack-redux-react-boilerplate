import React from 'react';
export default class InputComponentBase extends React.Component {
  inputProps = {};
  children = React.Fragment;
  constructor(props) {
    super(props);
  }

  render = () => <React.Fragment></React.Fragment>;
}