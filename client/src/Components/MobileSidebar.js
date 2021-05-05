const MobileSidebar = () => {
    return (
      <div id="mobile-side-nav">
        <div className="circle" style={{width: '44px', height: '44px', background: 'linen'}}></div>
        <ul className="list-group">
          <li className="m-3">
            <a href="/home">
              <i className="material-icons">home</i>
            </a>
          </li>
          <li className="m-3">
            <i className="material-icons">groups</i>
          </li>
          <li className="m-3">
            <i className="material-icons">dashboard</i></li>
          <li className="m-3">
            <i className="material-icons">manage_accounts</i></li>
          <li className="m-3">
            <a href="/logout">
              <i className="material-icons">keyboard_return</i></a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default MobileSidebar;
  
