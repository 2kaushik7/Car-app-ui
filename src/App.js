import React from "react";
import Home from "./components/Home";
import Landing from "./components/Landing";

class CarApp extends React.Component {
  state = {
    loginUsername: "",
    loginPassword: "",
    activeUser: "",
  };
  handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/car/userlogin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: this.state.loginUsername,
        password: this.state.loginPassword,
      }),
    })
      .then((response) =>
        response.json().then((descision) => {
          if (descision.status) {
            this.setState({ activeUser: this.state.loginUsername });
            console.log("activeUser: " + this.state.activeUser);
          } else {
            throw new Error("login failed");
          }
        })
      )
      .catch((err) => {
        console.log(
          "This is a custom message. Please check the connection, actual err is " +
            err
        );
      });
  };

  handleLogout = () => {
    console.log("in handle logout");
    this.setState({ activeUser: "" });
  };
  handleLoginUsernameChange = (e) => {
    this.setState({ loginUsername: e.target.value });
  };
  handleLoginPasswordChange = (e) => {
    this.setState({ loginPassword: e.target.value });
  };
  render() {
    if (this.state.activeUser.length === 0) {
      return (
        <Landing
          handleLogin={this.handleLogin}
          handleLoginUsernameChange={this.handleLoginUsernameChange}
          handleLoginPasswordChange={this.handleLoginPasswordChange}
        />
      );
    } else {
      return (
        <Home
          activeUser={this.state.activeUser}
          handleLogout={this.handleLogout}
        />
      );
    }
  }
}
export default CarApp;
