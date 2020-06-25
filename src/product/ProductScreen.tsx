import React from "react";
import DashboardContainer from "ui/DashboardContainer/DashboardContainer";
import ContentContainer from "ui/ContentContainer/ContentContainer";
import Button, { ExtendButtonType, ExtendBUttonSize } from "ui/Button/Button";
const ProductScreen = () => {
  return (
    <>
      <DashboardContainer
        title="Product Details"
        actions={
          <Button
            size={ExtendBUttonSize.DEFAULT}
            text="Add New"
            buttonType={ExtendButtonType.PRIMARY}
            onClick={() => {}}
          />
        }
      >
        <ContentContainer title="Product Details">Table</ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default ProductScreen;
