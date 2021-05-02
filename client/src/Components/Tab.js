const Tab = (props) => {
  return (
    <div className="tab gradient" style={{width: '400px'}}>
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h4>{props.title}</h4>
        <span className="material-icons">expand_more</span>
      </div>
      <div className="separator mb-3"></div>
      <div>{props.content}</div>
    </div>
  );
};

export default Tab;
