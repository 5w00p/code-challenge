import React from "react";
// import WelcomeMessage from "../generic/WelcomeMessage";

class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log("this_is_from_the_Content_constructor");
    // this.state = {
    //   firstName: this.props.firstName,
    //   lastName: this.props.lastName,
    // };
    // console.log(this.state.firstName + " " + this.props.lastName);
  }

  // onFormFieldChanged = (e) => {
  //   let currentTarget = e.currentTarget;
  //   let newValue = currentTarget.value;
  //   let inputName = currentTarget.name; // first or last
  //   console.log("newValue comes from currentTarget.value", newValue);
  //   console.log("theinputNamer is: ", inputName);
  //   this.setState(() => {
  //     let newState = {};
  //     newState[inputName] = newValue;
  //     console.log("hey this is newState: ", newState);
  //     return newState;
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row p-5">
            <div className="col-md-4 card bg-dark text-white p-3">
              <div className="card-header bg-secondary">Heading 1</div>
              <div className="card-body text-white">
                <h5 className="card-title">Details</h5>
                <p className="card-text text-white">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quia libero esse unde consectetur, amet sed eligendi
                  facere optio f...
                </p>
                <p>
                  <button className="btn btn-secondary">
                    Start here &raquo;
                  </button>
                </p>
              </div>
            </div>
            <div className="col-md-4 card bg-light p-3 border-5">
              <div className="card-header bg-secondary text-white">
                Heading 2
              </div>
              <div className="card-body text-secondary">
                <h5 className="card-title">More Details</h5>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quia libero esse unde consectetur, amet sed eligendi
                  facere optio f...
                </p>
                <p>
                  <button className="btn btn-secondary">
                    See more &raquo;
                  </button>
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Content;
