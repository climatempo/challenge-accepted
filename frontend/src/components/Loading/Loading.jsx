import "./Loading.css";

function Loading({ height }) {
  return (
    <div className="containerLoading" style={{ height: height }}>
         <div className="loader"></div>
    </div>
      );
}

export default Loading;