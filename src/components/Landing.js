import React from "react";
import Header from "./reusable/Header";

class Landing extends React.Component {
  render() {
    return (
      <div className="Landing">
        <Header />
        <form onSubmit={this.props.handleLogin}>
          <label>Username</label>
          <input
            type="text"
            onChange={this.props.handleLoginUsernameChange}
          ></input>
          <label>Password</label>
          <input
            type="password"
            onChange={this.props.handleLoginPasswordChange}
          ></input>
          <button type="submit">Login</button>
          <a href="https://www.google.com">Forgot Password?</a>
        </form>
      </div>
    );
  }
}

export default Landing;
