import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import DashboardContainer from "ui/DashboardContainer/DashboardContainer";
import ContentContainer from "ui/ContentContainer/ContentContainer";
import BrowserTitle from "ui/BrowserTitle";
import Form, { FormItem } from "ui/forms/Form";
import Button, { ExtendButtonType } from "ui/Button/Button";
import Input from "ui/Input/Input";
import styles from "./ProductForm.module.scss";
import { Row, Col, Checkbox } from "antd";

// import { PUBLIC_ROUTES } from "router/Router.config";

interface IProps extends RouteComponentProps {
  history: any;
  /** ProductForm function that calls the API and sets tokens */
  login: Function;
  /** Loading state from rematch that listens to the login function */
  loading: boolean;
}

class ProductForm extends PureComponent<IProps> {
  handleSubmit = async (data: any) => {
    console.log("data", data);
  };
  render() {
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
                    <Input />
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
                    <Input />
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
});

const mapDispatch = (dispatch: any) => ({
  login: (username: string, password: string) =>
    dispatch.userModel.login({ username, password }),
});

const LoginWithRouter = withRouter(ProductForm);
export default connect(mapState, mapDispatch)(LoginWithRouter);
