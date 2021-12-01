import React from "react";
// import WelcomeMessage from "../generic/WelcomeMessage";
import { Link } from "react-router-dom";

class Jumbo extends React.Component {
  constructor(props) {
    super(props);
    console.log("this_is_from_the_Jumbo_constructor");
    this.state = {
      localMsg: "Jumbo says Hi",
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="p-5 mb-4 rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">Homepage</h1>
              <p className="col-md-8 fs-4">
                Welcome! Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Libero repellendus quam commodi...
              </p>
              <p>
                <button className="btn btn-dark btn-lg">
                  <Link
                    to="/Content"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Details &raquo;
                  </Link>
                </button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Jumbo;
