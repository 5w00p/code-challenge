import React from "react";
import Jumbo from "./Jumbo";

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log("this_is_from_the_Home_constructor");
    this.state = {
      localMsg: "Ipsum lorem...",
    };
  }

  //   getMessage = () => {
  //     return (
  //       <strong>
  //         {this.props.friend.firstName} has {this.props.friend.friends.length}{" "}
  //         known friends
  //       </strong>
  //     );
  //   };

  render() {
    // this.props.showGreeting(this.state.localMsg);
    return (
      <React.Fragment>
        <div>
          <Jumbo />
        </div>
        <div className="col-md-4 mx-auto p-2">
          <h5>
            <em>{this.state.localMsg}</em>
          </h5>
        </div>
        {/* <WelcomeMessage
          user={this.props.friend}
          frMsg={friendMsg}
          extra={this.getMessage()}
          end="df built this page."
        ></WelcomeMessage> */}
      </React.Fragment>
    );
  }
}

export default Home;
