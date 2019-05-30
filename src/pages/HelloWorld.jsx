import React, { useEffect } from "react";
import { connect } from "react-redux";
import { registerRequest } from "../actions/registerAction";

const HelloWorld = props => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    props.registerRequest({
      name: "name@name",
      email: "name@email",
      password: "password",
      c_password: "password"
    });
  });
  return (
    <div>
      <span> Hello World</span>
    </div>
  );
};

export default connect(
  null,
  { registerRequest }
)(HelloWorld);
