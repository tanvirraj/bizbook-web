import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RouteComponentProps, generatePath } from "react-router";
import DashboardContainer from "ui/DashboardContainer/DashboardContainer";
import ContentContainer from "ui/ContentContainer/ContentContainer";
import BrowserTitle from "ui/BrowserTitle";
import Form, { FormItem } from "ui/forms/Form";
import Button, { ExtendButtonType } from "ui/Button/Button";
import Input from "ui/Input/Input";
import styles from "./ProductForm.module.scss";
import { Row, Col, Checkbox, Select, message } from "antd";
import { UtilHelper } from "app/utilHelper";
import { PRIVATE_ROUTES } from "router/Router.config";

const { Option } = Select;

interface IProps extends RouteComponentProps {
  history: any;
  loading: boolean;
  getCategoryList: Function;
  getBrandlist: Function;
  categoryList: any;
  brandList: any;
  createProduct: Function;
  user: any;
}

class ProductForm extends PureComponent<IProps> {
  componentDidMount() {
    const { getCategoryList, getBrandlist } = this.props;
    getCategoryList();
    getBrandlist();
  }

  handleSubmit = async (values: any) => {
    const { createProduct, user, history } = this.props;
    // If values exists remove all undefined values
    values && UtilHelper.removeUndefined(values);
    values.CreatedBy = user.userName;
    values.ModifiedBy = user.userName;
    values.CreatedFrom = "Browser";
    values.ShopId = "1";

    try {
      await createProduct(values);
      await message.success("Product Created successfully");
    } finally {
      history.push(generatePath(PRIVATE_ROUTES.SETTINGS_PRODUCT_SCREEN.path));
    }
  };
  render() {
    const { categoryList, brandList } = this.props;
    return (
      <>
        <BrowserTitle title="Add Product" />
        <DashboardContainer>
          <ContentContainer title="Product Details">
            <Form onSubmitForm={this.handleSubmit}>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem
                    label="Category"
                    name="productCategoryId"
                    options={{
                      rules: [
                        { required: true, message: "Category is required" },
                      ],
                    }}
                  >
                    <Select
                      className={styles.selectStyle}
                      placeholder="Select Category"
                    >
                      {categoryList.map((category: any) => (
                        <Option key={category.text} value={category.id}>
                          {category.text}
                        </Option>
                      ))}
                    </Select>
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    label="Brand"
                    name="brandId"
                    options={{
                      rules: [
                        {
                          required: true,
                          message: "Brand is required",
                        },
                      ],
                    }}
                  >
                    <Select
                      className={styles.selectStyle}
                      placeholder="Select Brand"
                    >
                      {brandList.map((brand: any) => (
                        <Option key={brand.text} value={brand.id}>
                          {brand.text}
                        </Option>
                      ))}
                    </Select>
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem
                    label="Name"
                    name="name"
                    options={{
                      rules: [{ required: true, message: "Name is required" }],
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem label="Model" name="Model">
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem label="Year" name="year">
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem label="Product Code" name="productCode">
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    label="Bar Code"
                    name="barCode"
                    options={{
                      rules: [
                        {
                          required: true,
                          message: "Bar Code is required",
                        },
                      ],
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
              </Row>

              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem label="Sale Price" name="salePrice">
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem label="Dealer Price" name="dealerPrice">
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem label="Type" name="type">
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem label="Color" name="color">
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem
                    label="Minimum Stock To Notify"
                    name="minimumStockToNotify"
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem label="Starting Inventory" name="startingInventory">
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem label="Purchased" name="Purchased">
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem label="Sold" name="Sold">
                    <Input />
                  </FormItem>
                </Col>
              </Row>

              <Row type="flex" justify="space-between" align="middle">
                <Col span={11}>
                  <FormItem label="On Hand" name="On Hand">
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <Col span={8}>
                    <FormItem
                      className={styles.rememberMeFormItem}
                      name="isActive"
                      options={{
                        valuePropName: "checked",
                        initialValue: false,
                      }}
                    >
                      <Checkbox className={styles.rememberMe}>
                        is Active
                      </Checkbox>
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormItem
                      className={styles.rememberMeFormItem}
                      name="isRawProduct"
                      options={{
                        valuePropName: "checked",
                        initialValue: false,
                      }}
                    >
                      <Checkbox className={styles.rememberMe}>
                        is Raw Product
                      </Checkbox>
                    </FormItem>
                  </Col>
                </Col>
              </Row>

              <Row type="flex" justify="end">
                <Col span={6}>
                  <FormItem>
                    <Button
                      buttonType={ExtendButtonType.PRIMARY}
                      htmlType="submit"
                      className={styles.button}
                      text="Submit"
                    />
                  </FormItem>
                </Col>
              </Row>
            </Form>
          </ContentContainer>
        </DashboardContainer>
      </>
    );
  }
}

const mapState = (state: any) => ({
  loading: state.loading.effects.userModel.login,
  categoryList: state.productModel.categoryList,
  brandList: state.productModel.brandList,
  user: state.userModel.user,
});

const mapDispatch = (dispatch: any) => ({
  getCategoryList: () => dispatch.productModel.getCategorylist(),
  getBrandlist: () => dispatch.productModel.getBrandlist(),
  createProduct: (data: any) => dispatch.productModel.createProduct(data),
});

const LoginWithRouter = withRouter(ProductForm);
export default connect(mapState, mapDispatch)(LoginWithRouter);
