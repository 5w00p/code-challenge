import React from "react";
// import WelcomeMessage from "../generic/WelcomeMessage";
import logo from "../images/Capture2.svg";
import { Link } from "react-router-dom";

// import userService from "../services/userService";

// and within your compoent you can now do something like

// onClickHandler = () => {
//   // const data = {...};

//   //... code omitted.

//   userService.logIn(data).then(this.onActionSuccess).catch(this.onActionError);
// };

// onActionSuccess = (response) => {
//   // do something
// };

// onActionError = (errResponse) => {
//   // do something
// };

class SiteNav extends React.Component {
  constructor(props) {
    super(props);
    console.log("this_is_from_the_SiteNav_constructor");
    this.state = {
      localMsg: "SiteNav says Hi",
    };
  }

  // onItemClicked = (e) => {
  //   console.log("the item clicked was: ", e.currentTarget);
  //   Route = `<NavLink to="/Register"></NavLink>`;
  // };

  render() {
    return (
      <React.Fragment>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/Home"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <img
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="react-logo"
                />
              </a>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    <Link
                      to="/Home"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Home
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="nav-link px-2 text-white link-button">
                    <Link
                      to="/ProductForm"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Add Product
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="nav-link px-2 text-white link-button">
                    <Link
                      to="/Content"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Our Products
                    </Link>
                  </button>
                </li>
                <li>
                  <button className="nav-link px-2 text-white link-button">
                    <Link
                      to="/Cars"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Cars
                    </Link>
                  </button>
                </li>
                {/* <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    Reviews
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    className="nav-link px-2 text-white link-button"
                  >
                    About
                  </button>
                </li> */}
              </ul>

              {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form> */}

              {/* <Link to="/Register">Register</Link> */}

              {/* <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
                <button
                  // component={Link}
                  // to="/Register"
                  type="button"
                  className="btn btn-warning"
                  // onClick={this.onItemClicked}
                  // onClick={handleClick}
                >
                  Join our Rewards Club
                </button>
              </div> */}
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default SiteNav;
