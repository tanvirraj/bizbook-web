import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";

interface Props {
  /** Meta title (optional) */
  title?: string;
}

/**
 * Set the browser title
 */
class BrowserTitle extends PureComponent<Props> {
  render() {
    const { title } = this.props;

    return (
      <Helmet>
        <title>
          {(!!title && `${title} | `) || ""}
          {"BizBook"}
        </title>
      </Helmet>
    );
  }
}

export default BrowserTitle;
