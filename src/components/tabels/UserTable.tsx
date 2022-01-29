import React, {FC, useEffect} from 'react';
import {Button, Empty, Table} from "antd";
import '../../styles.less';
import {IUser} from "../../models/IUser";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllUsers} from "../../service/userService";
import {showCurrentUserModal} from "../../store/slices/userSlice";
import CurrentUserModal from "../modals/CurrentUserModal";
import NumberSeparator from "../ui/NumberSeparator";

const UserTable: FC = () => {
  const {users, loading} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
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
      render: (email: string, user: IUser) => <span
        style={{color: user.role === 1 ? '#a90000' : 'black'}}>{email}</span>
    },
    {
      title: 'Баланс',
      dataIndex: 'sum',
      key: 'sum',
      render: (money: number) => <NumberSeparator sum={money}/>
    },
    {
      title: 'Потратиль',
      dataIndex: 'spentMoney',
      key: 'spentMoney',
      render: (money: number) => <NumberSeparator sum={money}/>
    },
    {
      title: 'Подробнее',
      key: 'details',
      render: ({}, user: IUser) => {
        return (
          <div style={{textAlign: 'center'}}>
            <Button onClick={() => dispatch(showCurrentUserModal(user))}>
              Подробнее
            </Button>
          </div>
        )
      }
    },
  ];

  return (
    <>
      <div className={'table_container'}>
        <Table
          rowKey={(user: IUser) => user.id}
          bordered={true}
          locale={{
            emptyText: (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Пусто'} style={{margin: 50}}/>
            )
          }}
          loading={loading}
          dataSource={users}
          columns={columns}
          scroll={{x: true}}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20, 50, 100]
          }}
        />
      </div>
      <CurrentUserModal/>
    </>
  );
};

export default UserTable;
