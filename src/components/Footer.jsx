import React from "react";
// import WelcomeMessage from "../generic/WelcomeMessage";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log("this_is_from_the_Footer_constructor");
    this.state = {
      localMsg: "Footer says Hi",
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className="container p-3">
          <p>&copy; 2021 DDF</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
