import FECLogo from "../public/images/fec-logo.png";
import React from "react";
import ReactDOM from "react-dom";
import AppLinkSearch from './AppLinkSearch';

const App = () => {
  return (

    <div>
      <AppLinkSearch>
      </AppLinkSearch>
    </div>

  );
};


ReactDOM.render(<App />, document.getElementById("root"));
