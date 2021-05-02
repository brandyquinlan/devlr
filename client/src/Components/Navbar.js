import { Component } from "react";
import NavTabs from './NavTabs/NavTabs';
import Activity from './NavTabs/Activity';
import Profile from './NavTabs/Profile';
import Explore from './NavTabs/Explore';

class Container extends Component {
    state = {
      currentPage: 'About'
    };
  
    handlePageChange = page => {
      this.setState({ currentPage: page });
    };
  
    renderPage = () => {
      if (this.state.currentPage === 'Activity') {
        return <Activity />;
      } else if (this.state.currentPage === 'Profile') {
        return <Profile />;
      } else {
        return <Explore />;
      }
    };
  
    render() {
      return (
        <>
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </>
      );
    }
  }

export default Container
