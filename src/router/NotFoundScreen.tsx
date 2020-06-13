import React, { PureComponent } from "react";
import { Result } from "antd";

/** 404 Not found screen */
class NotFoundScreen extends PureComponent {
  render() {
    return <Result status="404" title="Not Found" />;
  }
}

export default NotFoundScreen;
