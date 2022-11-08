import "./loader.scss";

function Loader() {
  return (
    <div className="loader">
      <div id="wrapper">
        <div id="mouse"></div>
        <div className="loader"></div>
        <div className="loading-bar">
          <div className="progress-bar"></div>
        </div>
        <div className="status">
          <div className="state"></div>
          <div className="percentage"></div>
        </div>
      </div>
    </div>
  );
}

export default Loader;