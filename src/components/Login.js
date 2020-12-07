import React from "react";
import {Link} from "react-router-dom";
import {FaFacebookSquare} from "react-icons/fa"
import {AiFillGoogleCircle} from "react-icons/ai"

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <div className="container row login-reg" style={{boxShadow:"3px"}}>
        <div className="col md-4"></div>
          <div className="col md-4" style={{marginTop:60, marginRight:130}}>

            <form className="border border p-5" onSubmit={this.handleSubmit}>
              <div>
                <h1 style={{color:"maroon"}}>
                  Login In
                </h1>
                <small className="text-muted">Enjoy unlimited learning | Enjoy 7 day free trial</small>
              </div>

              <label htmlFor="email">
                Email Address
                </label>
                <input
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  required
                />
              <br />

              <label htmlFor="password">
                Password
            </label>
                <input
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  class="form-control"
                  name="password"
                  id="password"
                  required
                />

              <br />
              <div>
                <input
                  type="submit"
                  class="btn btn-primary"
                  value="LogIn"
                />
              </div>
             <small className="muted"> Don't have an account yet? <Link to="/register">Join Inquel online learning</Link> </small>
            <p style={{color:"maroon"}}>Other Login</p>
            <span style={{ fontSize:"20px"}}> <Link to="#"> <FaFacebookSquare/> </Link>  </span>
            <span style={{ fontSize:"20px"}}> <Link to="#"> <AiFillGoogleCircle/> </Link> </span>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
