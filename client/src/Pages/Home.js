// import { useState } from 'React';
import useViewport from '../utils/useViewport'
import Sidebar from '../Components/Sidebar';
import MobileSidebar from '../Components/MobileSidebar';
import Navbar from '../Components/Navbar';
import Tab from '../Components/Tab';

const Home = () => {

  const { width } = useViewport();
  const breakpoint = 768;

  return (
    <div className="d-flex flex-row align-items-top justify-content-around" id="col1">
      { width < breakpoint ? <MobileSidebar /> : <Sidebar />}
      <div className="d-flex flex-column align-items-left" id="col2">
        <Navbar />
      </div>
      <div className="d-flex flex-column align-items-right">
        <div className="ml-4" id="col3">
          <Tab title="Featured Devs" />
          <Tab title="Ad" />
        </div>
      </div>
    </div>
  );
};

export default Home;
