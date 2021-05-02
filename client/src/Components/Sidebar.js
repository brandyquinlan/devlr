const Sidebar = () => {
  return (
    <div id="side-nav">
      <h2>devlr</h2>
      <ul className="list-group">
        <li className="m-3">
          <a href="/home">
            <i className="material-icons">home</i>
            Home
          </a>
        </li>
        <li className="m-3">
          <i className="material-icons">groups</i>
          Browse Users
        </li>
        <li className="m-3">
          <i className="material-icons">dashboard</i> Create Profile
        </li>
        <li className="m-3">
          <i className="material-icons">manage_accounts</i>
          Account
        </li>
        <li className="m-3">
          <a href="/logout">
            <i className="material-icons">keyboard_return</i>
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
