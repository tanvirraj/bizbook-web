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
import { DetailsParams } from "router/routerConst";

const { Option } = Select;

interface IProps extends RouteComponentProps<DetailsParams> {
  history: any;
  loading: boolean;
  getCategoryList: Function;
  getBrandlist: Function;
  categoryList: any;
  brandList: any;
  createProduct: Function;
  editProduct: Function;
  user: any;
  getProductDetailsById: Function;
  getProductDetails: any;
}

class ProductForm extends PureComponent<IProps> {
  componentDidMount() {
    const { getCategoryList, getBrandlist, match } = this.props;
    const productId = match.params.itemId;
    getCategoryList();
    getBrandlist();

    if (productId && match.path === PRIVATE_ROUTES.PRODUCT_EDIT_SCREEN.path) {
      this.getProduct(productId);
    }
  }

  getProduct = (productId: any) => {
    const { getProductDetailsById } = this.props;
    getProductDetailsById(productId);
  };

  componentDidUpdate(prevProps: IProps) {
    const { getProductDetails } = this.props;
    if (getProductDetails !== prevProps.getProductDetails) {
    }
  }

  handleSubmit = async (values: any) => {
    const { createProduct, editProduct, user, history, match } = this.props;
    const productId = match.params.itemId;
    // If values exists remove all undefined values
    values && UtilHelper.removeUndefined(values);
    values.CreatedBy = user.userName;
    values.ModifiedBy = user.userName;
    values.CreatedFrom = "Browser";
    values.ShopId = "1";

    if (productId) {
      values.id = productId;
      try {
        await editProduct(values);
        await message.success("Edit Product successfully");
      } finally {
        history.push(generatePath(PRIVATE_ROUTES.SETTINGS_PRODUCT_SCREEN.path));
      }
    } else {
      try {
        await createProduct(values);
        await message.success("Product Created successfully");
      } finally {
        history.push(generatePath(PRIVATE_ROUTES.SETTINGS_PRODUCT_SCREEN.path));
      }
    }
  };
  render() {
    const { categoryList, brandList, getProductDetails, match } = this.props;
    const editMode = !!match.params.itemId;

    return (
      <>
        <BrowserTitle title={editMode ? "Edit Product" : "Add Product"} />
        <DashboardContainer>
          <ContentContainer
            title={editMode ? "Edit Product" : "Add New Product"}
          >
            <Form onSubmitForm={this.handleSubmit}>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem
                    label="Category"
                    name="productCategoryId"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.productCategoryId
                          ? getProductDetails.productCategoryId
                          : undefined,
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
                      initialValue:
                        getProductDetails && getProductDetails.brandId
                          ? getProductDetails.brandId
                          : undefined,
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
                      initialValue:
                        getProductDetails && getProductDetails.name
                          ? getProductDetails.name
                          : undefined,
                      rules: [{ required: true, message: "Name is required" }],
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    label="Model"
                    name="model"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.model
                          ? getProductDetails.model
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem
                    label="Year"
                    name="year"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.year
                          ? getProductDetails.year
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem
                    label="Product Code"
                    name="productCode"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.productCode
                          ? getProductDetails.productCode
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    label="Bar Code"
                    name="barCode"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.barCode
                          ? getProductDetails.barCode
                          : undefined,
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
                  <FormItem
                    label="Sale Price"
                    name="salePrice"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.salePrice
                          ? getProductDetails.salePrice
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    label="Dealer Price"
                    name="dealerPrice"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.dealerPrice
                          ? getProductDetails.dealerPrice
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem
                    label="Type"
                    name="type"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.type
                          ? getProductDetails.type
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    label="Color"
                    name="color"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.color
                          ? getProductDetails.color
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem
                    label="Minimum Stock To Notify"
                    name="minimumStockToNotify"
                    options={{
                      initialValue:
                        getProductDetails &&
                        getProductDetails.minimumStockToNotify
                          ? getProductDetails.minimumStockToNotify
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    label="Starting Inventory"
                    name="startingInventory"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.startingInventory
                          ? getProductDetails.startingInventory
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
              </Row>
              <Row type="flex" justify="space-between">
                <Col span={11}>
                  <FormItem
                    label="Purchased"
                    name="purchased"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.purchased
                          ? getProductDetails.purchased
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
                <Col span={11}>
                  <FormItem
                    label="Sold"
                    name="sold"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.sold
                          ? getProductDetails.sold
                          : undefined,
                    }}
                  >
                    <Input />
                  </FormItem>
                </Col>
              </Row>

              <Row type="flex" justify="space-between" align="middle">
                <Col span={11}>
                  <FormItem
                    label="On Hand"
                    name="onHand"
                    options={{
                      initialValue:
                        getProductDetails && getProductDetails.onHand
                          ? getProductDetails.onHand
                          : undefined,
                    }}
                  >
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
                        initialValue:
                          getProductDetails && getProductDetails.isActive
                            ? getProductDetails.isActive
                            : undefined,
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
                        initialValue:
                          getProductDetails && getProductDetails.isRawProduct
                            ? getProductDetails.isRawProduct
                            : undefined,
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
  getProductDetails: state.productModel.productDetails,
});

const mapDispatch = (dispatch: any) => ({
  getCategoryList: () => dispatch.productModel.getCategorylist(),
  getBrandlist: () => dispatch.productModel.getBrandlist(),
  createProduct: (data: any) => dispatch.productModel.createProduct(data),
  editProduct: (data: any) => dispatch.productModel.editProduct(data),
  getProductDetailsById: (productId: any) =>
    dispatch.productModel.getProductDetailsById(productId),
});

const LoginWithRouter = withRouter(ProductForm);
export default connect(mapState, mapDispatch)(LoginWithRouter);
