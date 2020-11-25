import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStatement } from './publicAct.jsx';
import { FormErrors } from './publicAct.jsx';

class Report extends Component {
  state = {
    // status: '',
    // date: undefined,
    licenseNumber: '',
    //{ type: String, trim: true },
    color: '',
    //{ type: String },
    // type: '',
    ownerFullName: '',
    //{ type: String, trim: true, requ },
    // createdAt: { type: Date, default: Date.now()},
    // updateAt: undefined,
    // clientId: 'a9432bbe73645c1825a4c426db59f47d',
    // description: '',
    // resolution: '',
    formErrors: {
      // status: '',
      // date: undefined,
      licenseNumber: '',
      color: '',
      ownerFullName: '',
      // createdAt: undefined,
      // updateAt: undefined,
    },
    // status: false,
    // date: false,
    licenseNumberValid: false,
    colorValid: false,
    ownerFullNameValid: false,
    // createdAtValid: undefined,
    // updateAt: false,
    formValid: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.validateForm(e.target.name, e.target.value);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addStatement(this.state);
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let licenseNumberValid = this.state.licenseNumberValid;
    let ownerFullNameValid = this.state.ownerFullNameValid;
    let colorValid = this.state.colorValid;
    // let createdAtValid = this.state.createdAtValid;
    switch (fieldName) {
      // case 'email':
      //   emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      //   fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      //   break;
      case 'licenseNumber':
        licenseNumberValid = value.length > 3;
        fieldValidationErrors.licenseNumber = licenseNumberValid
          ? ''
          : ' is too short';
        break;
      case 'ownerFullName':
        ownerFullNameValid = value.match(/[\w]+ [\w]+/);
        fieldValidationErrors.ownerFullName = ownerFullNameValid
          ? ''
          : ' is not choose';
        break;
      case 'color':
        colorValid = value.length >= 3;
        fieldValidationErrors.color = colorValid ? '' : ' is not choose';
        break;
      // case 'createdAt':
      //   createdAtValid = value.length > 0;
      //   fieldValidationErrors.createdAt = createdAtValid
      //     ? ''
      //     : ' is not choose';
      //   break;
      // case 'password':
      // passwordValid = value.length >= 6;
      // fieldValidationErrors.password = passwordValid ? '': ' is too short';
      // break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        licenseNumberValid: licenseNumberValid,
        ownerFullNameValid: ownerFullNameValid,
        colorValid: colorValid,
        // createdAtValid: createdAtValid,
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.licenseNumberValid &&
        this.state.ownerFullNameValid &&
        this.state.colorValid,
      // this.state.createdAtValid,
    });
  }

  render() {
    return (
      <div>
        <div>
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <form onSubmit={this.handleSubmit}>
          {/* <label>Status</label>
          <select
            // defaultValue={{ label: 'New', value: 'New' }}
            value={this.state.value}
            onChange={this.handleChange}
            name="status"
          >
            <option>Choose</option>
            <option>New</option>
            <option>In progress</option>
            <option>Done</option>
          </select> */}
          <br />

          <label>License number</label>
          <input
            type="text"
            name="licenseNumber"
            placeholder="License Number"
            value={this.state.licenseNumber}
            onChange={this.handleChange}
          />
          <br />

          <label>Color</label>
          <select
            value={this.state.value}
            onChange={this.handleChange}
            name="color"
          >
            <option>Choose</option>
            <option>Red</option>
            <option>Black</option>
            <option>Green</option>
            <option>Blue</option>
          </select>
          <br />

          <label>Owner full name</label>
          <input
            type="text"
            name="ownerFullName"
            placeholder="Owner full name"
            value={this.state.ownerFullName}
            onChange={this.handleChange}
          />
          <br />

          {/* <label>Created at</label>
          <input
            type="date"
            name="date"
            value={this.state.createdAt}
            onChange={this.handleChange}
          />
          <br /> */}

          {/* <label>Client id</label>
          <input
            type="text"
            name="text"
            placeholder="Client id"
            value={this.state.clientId}
            onChange={this.handleChange}
          /> */}
          <br />

          <input type="submit" disabled={!this.state.formValid} />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addStatement: (userInfo) => dispatch(addStatement(userInfo)),
});

export default connect(null, mapDispatchToProps)(Report);
