// import { useState } from 'React';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const Home = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-around">
      <Sidebar />
      <div className="d-flex flex-column align-items-left">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
