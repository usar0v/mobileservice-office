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
  const {loading, filterUsers} = useAppSelector(state => state.user);
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
      key: 'fullName',
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
      render: (money: number) => <NumberSeparator sum={money}/>
    },
    {
      title: 'Потраченные',
      dataIndex: 'spentMoney',
      key: 'spentMoney',
      render: (money: number) => <NumberSeparator sum={money}/>
    },
    {
      title: 'Роли',
      dataIndex: 'role',
      key: 'role',
      // filters: [
      //   {
      //     text: 'Пользователи',
      //     value: 3,
      //   },
      //   {
      //     text: 'Админы',
      //     value: 1,
      //   },
      // ],
      // onFilter: (value: number, user: IUser) => user.role === value,
      render: (role: number) => (
        role === 1 ?
          <div style={{color: 'red'}}>АДМИН</div> :
          <div style={{color: '#003b34'}}>ПОЛЬЗОВАТЕЛЬ</div>
      ),
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
      <Table
        style={{marginTop: 15}}
        rowKey={(user: IUser) => user.id}
        bordered={true}
        locale={{
          emptyText: (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={'Пусто'} style={{margin: 50}}/>
          )
        }}
        loading={loading}
        dataSource={filterUsers}
        columns={columns}
        scroll={{x: true}}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: [5, 10, 20, 50, 100]
        }}
      />
      <CurrentUserModal/>
    </>
  );
};

export default UserTable;
