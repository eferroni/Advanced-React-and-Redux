import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <Fragment>
      <div>
        <Header />
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default App;
