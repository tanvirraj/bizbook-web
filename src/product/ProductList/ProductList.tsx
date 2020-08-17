import React from "react";
import { generatePath } from "react-router";
import { Checkbox } from "antd";
import { PRIVATE_ROUTES } from "router/Router.config";
import SortableTable, { Column } from "ui/SortableTable/SortableTable";
import Button, { ExtendButtonType, ExtendBUttonSize } from "ui/Button/Button";

interface Props {
  productList: any;
}

const ProductList = ({ productList }: Props) => {
  return (
    <div>
      <SortableTable
        pagination={{
          current: 1,
          total: 50,
        }}
        bordered
        onChange={e => {
          console.log(e);
        }}
        data={productList}
      >
        <Column title={"Code"} dataIndex="productCode" key="productCode" />
        <Column title={"Name"} dataIndex="name" key="name" />
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
                  link={generatePath(PRIVATE_ROUTES.PRODUCT_EDIT_SCREEN.path, {
                    itemId: product.id,
                  })}
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
};

export default ProductList;
