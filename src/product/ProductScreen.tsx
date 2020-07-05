import React, { PureComponent } from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import DashboardContainer from "ui/DashboardContainer/DashboardContainer";
import ContentContainer from "ui/ContentContainer/ContentContainer";
import Button, { ExtendButtonType, ExtendBUttonSize } from "ui/Button/Button";
import BrowserTitle from "ui/BrowserTitle";
import ProductFilter from "./ProductFilter/ProductFilter";
import ProductList from "./ProductList/ProductList";

interface IProps extends RouteComponentProps {
  history: any;
}

class ProductScreen extends PureComponent<IProps> {
  render() {
    return (
      <>
        <BrowserTitle title="Product" />

        <DashboardContainer
          actions={
            <Button
              size={ExtendBUttonSize.DEFAULT}
              text="Add New"
              buttonType={ExtendButtonType.PRIMARY}
              onClick={() => {}}
            />
          }
        >
          <ContentContainer title="Product Details">
            <ProductFilter />
            <ProductList />
          </ContentContainer>
        </DashboardContainer>
      </>
    );
  }
}

export default withRouter(ProductScreen);
