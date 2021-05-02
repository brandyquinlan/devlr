import { Component } from "react";
import NavTabs from './NavTabs';
import Activity from './Feeds/Activity';
import Profile from './Feeds/Profile';
import Explore from './Feeds/Explore';

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
