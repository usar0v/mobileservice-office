import React, {FC, useEffect, useState} from 'react';
import {Button, Table} from "antd";
import requester from "../../utils/requester";
import '../../styles.less';

const UserTable: FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    requester
      .get('user')
      .then(data => {
        setUsers(data);
      })
  }, []);


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Имя',
      dataIndex: 'fullName',
      key: 'fullName'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Баланс',
      dataIndex: 'sum',
      key: 'sum',
      render: (money: number) => <span style={{color: '#004d46'}}>$ {money}</span>
    },
    {
      title: 'Потратиль',
      dataIndex: 'spentMoney',
      key: 'spentMoney',
      render: (money: number) => <span style={{color: '#ab0000'}}>$ {money}</span>
    },
    {
      title: 'Подробнее',
      key: 'details',
      render: (money: number) => {
        return (
          <div style={{textAlign: 'center'}}>
            <Button>Подробнее</Button>
          </div>
        )
      }
    },
  ];

  return (
    <>
      <div className={'table_container'}>
        <Table
          // rowKey={user => `${user.id}`}
          bordered={true}
          // loading={true}
          dataSource={users}
          columns={columns}
          scroll={{
            x: true
          }}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20, 50, 100]
          }}
        />
      </div>
    </>
  );
};

export default UserTable;
