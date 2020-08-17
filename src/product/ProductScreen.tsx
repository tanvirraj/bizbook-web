import React, { FunctionComponent, useEffect } from "react";
import { RouteComponentProps, generatePath } from "react-router";
import { withRouter } from "react-router-dom";
import DashboardContainer from "ui/DashboardContainer/DashboardContainer";
import ContentContainer from "ui/ContentContainer/ContentContainer";
import Button, { ExtendButtonType, ExtendBUttonSize } from "ui/Button/Button";
import BrowserTitle from "ui/BrowserTitle";
import ProductFilter from "./ProductFilter/ProductFilter";
import ProductList from "./ProductList/ProductList";
import { PRIVATE_ROUTES } from "router/Router.config";
import { useSelector, useDispatch } from "react-redux";
import { RootState, RootDispatch } from "../redux/store";

interface Props extends RouteComponentProps {
  history: any;
}

const ProductScreen: FunctionComponent<Props> = () => {
  const productList: any = useSelector(
    (state: RootState) => state.productModel.productList
  );

  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    const apiArguments = {
      page: 1,
      parentId: "",
    };
    dispatch.productModel.getProducts(apiArguments);
  }, [dispatch.productModel, dispatch.productModel.getProducts]);

  return (
    <>
      <BrowserTitle title="Product" />

      <DashboardContainer
        actions={
          <Button
            size={ExtendBUttonSize.DEFAULT}
            text="Add New"
            buttonType={ExtendButtonType.PRIMARY}
            link={generatePath(PRIVATE_ROUTES.PRODUCT_CREATE_SCREEN.path)}
          />
        }
      >
        <ContentContainer title="Product Details">
          <ProductFilter />
          <ProductList productList={productList} />
        </ContentContainer>
      </DashboardContainer>
    </>
  );
};

export default withRouter(ProductScreen);
