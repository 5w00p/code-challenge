import React from "react";

/*
        Make note of the following:
        - the name of the state properties and the name of the function
        - how the function and the state properties are passed into Child components
        - how the child references the state properties and function that are now in the props of the child

*/
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "I am a message from the parent. But I could be an object of any type.",
      childMessage: "--Nothing Yet-- ",
    };
  }

  //This function will be called from within an child component
  onParentCalled = (msg, data) => {
    console.log(msg, data);
    this.setState((prevState, prevProps) => {
      return { childMessage: msg };
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="parent">
              <h1>Heading in Parent</h1>
              <Child
                aNameIMakeUp={this.state.name}
                onMessageToParent={this.onParentCalled}
              />

              <ChildTwo
                aNameIMakeUp={this.state.name}
                onMessageToParent={this.onParentCalled}
              />
              <hr />
              <h2>A Message from Child: {this.state.childMessage}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Child(props) {
  /* 
     Make note of the following:
        - this functional Component has no render function, it just returns content.
        - there is no reference of "this" when accessing the props
        - we have access to data and functions passed through props
        - in props, we have to access the property as we declare/pass it at the parent level. 
            here we have to use "aNameIMakeUp"
          - naturally, you would make up a better name.
*/

  return (
    <React.Fragment>
      <div className="well btn-outline-primary  ">
        <hr />
        <p
          onClick={() =>
            props.onMessageToParent("I am going to do something", {
              eventName: "click",
            })
          }
        >
          I am inside of a functional child (click me)
        </p>
      </div>{" "}
      <em> {props.aNameIMakeUp}</em>
    </React.Fragment>
  );
}

class ChildTwo extends React.Component {
  /*
        Make note of the following:
        - you must reference "this" when accessing the props
        - we have access to data and functions passed through props

    */
  render() {
    return (
      <React.Fragment>
        <div className="well btn-outline-success ">
          <hr />
          <p
            onClick={() =>
              this.props.onMessageToParent("I am coming home", {
                eventName: "click",
              })
            }
          >
            I am inside of child React.Component (click me)
          </p>
        </div>
        <em> {this.props.aNameIMakeUp}</em>
      </React.Fragment>
    );
  }
}

export default Parent;
