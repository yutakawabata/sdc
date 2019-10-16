import React from 'react';
import scss from '../styles/sample.scss';
import axios from 'axios';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  render() {
    return(
      <div>
        <input type="text" className={scss.name}
        placeholder="name" onChange={event => {
          this.setState({name: event.target.value});
        }} />

        <div className={scss.submitButton} onClick={() => {
          this.submit();
        }}>
          SUBMIT
        </div>
      </div>
    )
  }

  submit = () => {
    window.alert(this.state.name);
  }
}