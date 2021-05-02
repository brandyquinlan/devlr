const Tab = ({ title, content }) => {
  return (
    <div className="tab gradient">
      <div className="d-flex flex-row align-items-center justify-content-between">
        <h4>{title}</h4>
        <span className="material-icons">expand_more</span>
      </div>
      <div className="separator mb-3"></div>
      <div>{content}</div>
    </div>
  );
};

export default Tab;
