import Sidebar from '../Components/Sidebar';
import NavTabs from '../Components/NavTabs';
import Tab from '../Components/Tab';

const Home = () => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-around">
      <Sidebar />
      <div className="d-flex flex-column align-items-left">
        <NavTabs />
        <Tab title="My Background" content="Figuring out how to pass the info we want."/>
        <Tab title="My Languages" />
      </div>
    </div>
  );
};

export default Home;
