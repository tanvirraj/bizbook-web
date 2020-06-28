import React from "react";
import DashboardContainer from "ui/DashboardContainer/DashboardContainer";
import ContentContainer from "ui/ContentContainer/ContentContainer";
import Button, { ExtendButtonType, ExtendBUttonSize } from "ui/Button/Button";
import BrowserTitle from "ui/BrowserTitle";
import ProductFilter from "./ProductFilter/ProductFilter";

const ProductScreen = () => {
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
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default ProductScreen;
