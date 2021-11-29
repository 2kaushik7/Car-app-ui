import React from "react";
import Header from "./reusable/Header";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header
          activeUser={this.props.activeUser}
          handleLogout={this.props.handleLogout}
        />
      </div>
    );
  }
}

export default Home;
