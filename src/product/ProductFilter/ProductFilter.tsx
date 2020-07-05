import React, { PureComponent } from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { Row, Col, Checkbox } from "antd";
import { connect } from "react-redux";
import styles from "./ProductFilter.module.scss";
import Input from "ui/Input/Input";
import { SearchOutlined } from "@ant-design/icons";
import _debounce from "lodash/debounce";

interface IProps extends RouteComponentProps {
  history: any;
  location: any;
  getProducts: Function;
}

interface IState {
  productName: string | undefined;
  isActive: boolean;
  isRaw: boolean;
}

class ProductFilter extends PureComponent<IProps, IState> {
  state: IState = {
    productName: undefined,
    isActive: false,
    isRaw: false,
  };

  onSearch = _debounce((search: string = "") => {
    this.setState(
      {
        productName: search,
      },
      () => this.getSearchResult()
    );
  }, 500);

  getSearchResult = () => {
    const { productName } = this.state;
    const { getProducts } = this.props;

    const apiArguments = {
      // isAscending: "False",
      keyword: productName,
      //orderBy: "Modified",
      page: 1,
      parentId: "",
    };
    getProducts(apiArguments);
  };

  render() {
    return (
      <>
        <div className={styles.productFilter}>
          <Row>
            <Col span={12}>
              <Input
                placeholder="Search"
                onChange={e => this.onSearch(e.target.value)}
                addonAfter={<SearchOutlined className={styles.iconFontSize} />}
              />
            </Col>
            <Col span={12} className={styles.checkboxFilter}>
              <Col span={10}>
                Actives Only <Checkbox />
              </Col>
              <Col span={10}>
                Is Raw Product Only <Checkbox />
              </Col>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapDispatch = (dispatch: any) => ({
  getProducts: (search: any) => dispatch.productModel.getProducts(search),
});

export default connect(null, mapDispatch)(withRouter(ProductFilter));
