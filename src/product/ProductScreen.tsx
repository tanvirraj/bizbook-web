import React, { PureComponent } from "react";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import DashboardContainer from "ui/DashboardContainer/DashboardContainer";
import ContentContainer from "ui/ContentContainer/ContentContainer";
import Button, { ExtendButtonType, ExtendBUttonSize } from "ui/Button/Button";
import BrowserTitle from "ui/BrowserTitle";
import ProductFilter from "./ProductFilter/ProductFilter";
import ProductList from "./ProductList/ProductList";

interface IProps extends RouteComponentProps {
  history: any;
  /** Login function that calls the API and sets tokens */
  login: Function;
  /** Loading state from rematch that listens to the login function */
  loading: boolean;
  getProducts: Function;
}
interface IState {
  /** All the timesheets */
  productList: any[];
  /** Loading state for fetching timesheets */
  loading: boolean;
}

class ProductScreen extends PureComponent<IProps, IState> {
  state: IState = {
    productList: [],
    loading: true,
  };

  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
  }

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

const mapState = (state: any) => ({
  productList: state.productModel.productList,
  loading: state.loading.effects.productModel.getproducts,
});

const mapDispatch = (dispatch: any) => ({
  getProducts: (search: any) => dispatch.productModel.getProducts({ search }),
});

export default connect(mapState, mapDispatch)(ProductScreen);
