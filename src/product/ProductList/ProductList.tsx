import React, { PureComponent } from "react";
import { RouteComponentProps, generatePath } from "react-router";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Checkbox } from "antd";
import { PRIVATE_ROUTES } from "router/Router.config";
import SortableTable, { Column } from "ui/SortableTable/SortableTable";
import Button, { ExtendButtonType, ExtendBUttonSize } from "ui/Button/Button";

interface IProps extends RouteComponentProps {
  history: any;
  loading: boolean;
  getProducts: Function;
  productList: any;
}

class ProductList extends PureComponent<IProps> {
  componentDidMount() {
    const { getProducts } = this.props;
    const apiArguments = {
      // isAscending: "False",
      keyword: "",
      //orderBy: "Modified",
      page: 1,
      parentId: "",
    };
    getProducts(apiArguments);
  }

  render() {
    const { productList } = this.props;
    return (
      <div>
        <SortableTable bordered data={productList}>
          <Column title={"Code"} dataIndex="productCode" key="productCode" />
          <Column sorter={true} title={"Name"} dataIndex="name" key="name" />
          <Column title={"On Hand"} dataIndex="onHand" key="onHand" />
          <Column title={"Price"} dataIndex="salePrice" key="salePrice" />
          <Column
            title={"State"}
            dataIndex="isActive"
            key="isActive"
            render={(isActive: any) => {
              const isProductActive = isActive ? "Active" : "Deactived";
              return (
                <span>
                  <Checkbox checked={isActive} /> {isProductActive}
                </span>
              );
            }}
          />
          <Column
            title={"Action"}
            dataIndex="action"
            key="action"
            render={(text: any, product: any) => {
              return (
                <span>
                  <Button
                    size={ExtendBUttonSize.SMALL}
                    buttonType={ExtendButtonType.DEFAULT}
                    text="Edit"
                    link={generatePath(
                      PRIVATE_ROUTES.PRODUCT_EDIT_SCREEN.path,
                      { itemId: product.id }
                    )}
                  >
                    Edit
                  </Button>
                </span>
              );
            }}
          />
        </SortableTable>
      </div>
    );
  }
}

const mapState = (state: any) => ({
  productList: state.productModel.productList,
  loading: state.loading.effects.productModel.getproducts,
});

const mapDispatch = (dispatch: any) => ({
  getProducts: (search: any) => dispatch.productModel.getProducts(search),
});

export default connect(mapState, mapDispatch)(withRouter(ProductList));
