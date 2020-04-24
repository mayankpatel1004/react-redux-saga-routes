import React from 'react';
import { connect } from 'react-redux';
import {requestContactData} from '../actions/contactActions';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      username: '',
      useremail: '',
      userpassword: '',
      about: '',
      userphoto: '',
      usercontact: '',
      startdate: '',
      enddate: '',
      language: '',
      customselect: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.requestContactData(this.state);
    console.log(this.state);
  }


  render() {
    //console.log("Current State ===>",this.state);
    return(
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <table className="table-condensed">
              <tbody>
              <tr>
                <td>Name</td>
                <td><input className="form-control" onChange={this.handleChange} id="username" name="username" type="text" value={this.state.username} /></td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input className="form-control" onChange={this.handleChange} id="useremail" name="useremail" type="email" value={this.state.useremail} /></td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input className="form-control" onChange={this.handleChange} id="userpassword" name="userpassword" type="password" value={this.state.userpassword} /></td>
              </tr>
              <tr>
                <td>About</td>
                <td>
                <textarea className="form-control" onChange={this.handleChange} name="about" id="about" defaultValue={this.state.about}></textarea>
                </td>
              </tr>
              <tr>
                <td>Photo</td>
                <td><input className="form-control" onChange={this.handleChange} type="file" name="userphoto" id="userphoto" /></td>
              </tr>
              <tr>
                <td>Contact</td>
                <td><input className="form-control" onChange={this.handleChange} type="text" name="usercontact" value={this.state.usercontact} id="usercontact" /></td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td><input className="form-control" onChange={this.handleChange} type="date" name="startdate" id="startdate" value={this.state.startdate} /></td>
              </tr>
              <tr>
                <td>End Date</td>
                <td><input className="form-control" onChange={this.handleChange} type="date" name="enddate" id="enddate" value={this.state.enddate} /></td>
              </tr>
              <tr>
                <td>Language</td>
                <td>
                  <select name="language[]" id="language" onChange={this.handleChange} multiple className="form-control">
                    <option value="">Select Language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Gujarati">Gujarati</option>
                  </select>
                  </td>
              </tr>
              <tr>
                <td>Select Option</td>
                <td>
                <select className="form-control" onChange={this.handleChange} name="customselect" id="customselect">
                  <option value="grapefruit">Grapefruit</option>
                  <option value="lime">Lime</option>
                  <option value="coconut">Coconut</option>
                  <option value="mango">Mango</option>
                </select>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit" name="submit" value="Submit" />
                </td>
              </tr>
              </tbody>
          </table>
        </form>
          <br />
      </div>
    )
  }
}

const mapDispatchToProps = {requestContactData: requestContactData}
const mapStateToProps = state => ({ data: state.contactReducer.contact });
export default Contact = connect(mapStateToProps,mapDispatchToProps)(Contact);