import React from "react";
import styles from "./SortableTable.module.scss";
import { Table } from "antd";
import { TableProps } from "antd/lib/table/index";
import cx from "classnames";

const { Column } = Table;

interface Props<T extends any> extends TableProps<T> {
  /** Whether or not the table should be bordered */
  bordered?: boolean;
  /** The data in list form to show in table */
  data: T[];
  children?: React.ReactNode;
  className?: string;
  disablePagination: boolean;
  loading?: boolean;
}

/**
 * Custom Ant Design SortableTable
 */
const SortableTable = <T extends any>({
  bordered,
  children,
  className,
  data,
  disablePagination,
  loading,
  pagination,
  ...rest
}: Props<T>) => (
  <Table
    bordered={bordered}
    dataSource={data}
    rowKey="id"
    className={cx(className, styles.table)}
    pagination={
      disablePagination ? false : { position: "bottom", ...pagination }
    }
    loading={loading}
    sortDirections={["ascend", "descend"]}
    {...rest}
  >
    {children}
  </Table>
);

SortableTable.defaultProps = {
  disablePagination: false,
};

export default SortableTable;
export { Column };
