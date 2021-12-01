import React from "react";

function WelcomeMessage(props) {
  // let end = <strong>Today</strong>;
  // let nowH = new Date().getHours;
  // let nowM = new Date().getMinutes;
  return (
    <React.Fragment>
      <>
        <div>Hi {props.user.firstName} from React</div>
      </>
      <div>{props.extra}</div>
      <div>{props.end}</div>
      <div>{props.frMsg}</div>
      <div>df_built_this</div>
    </React.Fragment>
  );
}

export default WelcomeMessage;
