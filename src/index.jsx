import React from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

class SweetAlertBtn extends React.Component {
  handleClick = () => {
    Swal.fire('Hello World!');
  };

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Click Me!
      </button>
    );
  }
}

ReactDOM.render(<SweetAlertBtn />, document.getElementById('root'));
