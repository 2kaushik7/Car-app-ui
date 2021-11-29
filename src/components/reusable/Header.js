const Header = (props) => (
  <div className="header">
    <h1>Skills Demonstration</h1>
    {console.log("props.activeUser: " + props.activeUser)}
    {props.activeUser === undefined ? (
      <noscript></noscript>
    ) : (
      <button type="button" onClick={props.handleLogout}>
        Logout
      </button>
    )}
  </div>
);

export default Header;
