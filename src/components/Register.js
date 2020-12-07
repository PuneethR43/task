import React from "react";
import {Link} from "react-router-dom";
import Select from "react-select";
import {FaFacebookSquare} from "react-icons/fa"
import {AiFillGoogleCircle} from "react-icons/ai"

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      mobile: "",
      course: "",
      location: "",
      referalCode: "",
      options: [
        {value: "Select Course", label: "Select Course"},
        {value: "Math", label: "Math"},
        {value: "Science", label: "Science"},
        {value: "Social Studies", label: "Social Studies"},
      ]
    }
  }

  handleSelect = (value) => {
    this.setState({course: value})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
      <div>
        <div class="container row">
        <div className="col md-4"></div>
          <div class="form-group col md-4">
          <div className="col md-4 login-reg" style={{marginTop:40}}>
            <form className="border border p-5" onSubmit={this.handleSubmit}>
              <div>
                <h1 style={{color:"maroon"}}>
                  <span > Create Your Account</span>
                  </h1>
                <small className="text-muted">Enjoy Unlimited Learning | 4 week free course </small>

              </div>
              <label htmlFor="fullName">
                Full Name<span style={{color: "red"}}> *</span>
              </label>
                <input
                  placeholder="John Smith"
                  type="text"
                  class="form-control"
                  id="fullName"
                  name="fullName"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                  required
                />
              <br />

              <label htmlFor="email">
                Email<span style={{color: "red"}}> *</span>
                </label>
                <input
                  placeholder="john@example.com"
                  type="text"
                  class="form-control"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              <br />
    
              <label htmlFor="mobile">
                Mobile<span style={{color: "red"}}> *</span>
                </label>
                <input
                  placeholder="+91 00000 00000"
                  type="text"
                  class="form-control"
                  id="mobile"
                  name="mobile"
                  value={this.state.mobile}
                  onChange={this.handleChange}
                  required
                />
              <br />
              <label htmlFor="email">
                Select Course<span style={{color: "red"}}> *</span>
                </label>
                <Select
                placeholder="Select Course"
                  options={this.state.options}
                  onChange={this.handleSelect}
                  required
                />
              <br />

              <label htmlFor="location">
                Location<span style={{color: "red"}}> *</span>
                </label>
                <input
                  placeholder="Enter city"
                  type="text"
                  class="form-control"
                  id="location"
                  name="location"
                  value={this.state.location}
                  onChange={this.handleChange}
                  required
                />
              <br />

              <label htmlFor="referalCode">
                Referal Code
                </label>
                <input
                  placeholder="Referal Code"
                  type="text"
                  id="referalCode"
                  class="form-control"
                  name="referalCode"
                  value={this.state.referalCode}
                  onChange={this.handleChange}
                />

              <br />
              <div>
                <input
                  type="submit"
                  class="btn btn-primary"
                  value="Sign-up"
                />
              </div>
              <small className="text-muted " > By signing up you agree to Inquel's <span style={{color:"maroon"}}>Privacy Policy</span> and <span style={{color:"maroon"}}> Terms of Use</span></small>
              
              <p style={{color:"maroon"}}>Other Login</p>
            <span> <Link to="#"> <FaFacebookSquare/> </Link> </span>
            <span> <Link to="#"> <AiFillGoogleCircle/> </Link> </span>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Register;