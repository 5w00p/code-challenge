import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./App.css";
// import WelcomeMessage from "./generic/WelcomeMessage";
import SiteNav from "./components/SiteNav";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ProductForm from "./components/ProductForm";
import Home from "./components/Home";
import Cars from "./components/Cars";
import { usersService } from "./services/userService";
import { productService } from "./services/productService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const notify = () => toast("Toast test is a success.");

class App extends Component {
  componentDidMount() {
    console.log("componentDidMount firing from App component");
    // console.log(this.state);
    // console.log(usersService.getCurrentUsers());
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav />
          <Route
            path="/SiteNav"
            exact
            render={(routeProps) => <SiteNav {...routeProps}></SiteNav>}
          />
          <main role="main">
            <Route
              path="/Home"
              exact
              render={(routeProps) => <Home {...routeProps}></Home>}
            />
            <Route
              path="/Jumbo"
              exact
              render={(routeProps) => <Jumbo {...routeProps}></Jumbo>}
            />

            <Route
              path="/Content"
              exact
              render={(routeProps) => <Content {...routeProps}></Content>}
            />

            <Route exact path="/Cars" component={Cars} />

            <Route exact path="/ProductForm" component={ProductForm} />
          </main>
          <div>
            {/* <button onClick={notify}>Toaster Button</button> */}
            <ToastContainer />
          </div>
          <Footer />
          <Route
            path="/Footer"
            exact={true}
            render={(routeProps) => <Footer {...routeProps}></Footer>}
          />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
