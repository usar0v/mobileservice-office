import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Empty, Table} from "antd";

interface ITableTemplate {
  rowKey: (data: any) => any;
  loading: boolean;
  dataSource: any,
  columns: any;
}

const TableTemplate: FC<ITableTemplate> = ({ columns, dataSource, loading, rowKey }) => {
  return (
    <>
      <Table
        style={{marginTop: 15}}
        rowKey={rowKey}
        bordered={true}
        locale={{
          emptyText: (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Пусто'} style={{margin: 50}}/>
          )
        }}
        loading={loading}
        dataSource={dataSource}
        columns={columns}
        scroll={{x: true}}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20, 50, 100]
        }}
      />
    </>
  );
};

export default TableTemplate;
