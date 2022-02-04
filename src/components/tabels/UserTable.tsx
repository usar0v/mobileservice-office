import React, {FC, useEffect} from 'react';
import {Button} from "antd";
import '../../styles.less';
import {IUser} from "../../models/IUser";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllUsers} from "../../service/userService";
import {showCurrentUserModal} from "../../store/slices/userSlice";
import CurrentUserModal from "../modals/CurrentUserModal";
import NumberSeparator from "../ui/NumberSeparator";
import TableTemplate from "./TableTemplate";


const UserTable: FC = () => {
  const {loading, filterUsers} = useAppSelector(state => state.user);
  const {user} = useAppSelector(state => state.auth);
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
      render: (email: string) => <a href={`mailto:${email}`}>{email}</a>
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
      filters: [
        {
          text: 'Пользователи',
          value: 3,
        },
        {
          text: 'Админы',
          value: 1,
        },
      ],
      onFilter: (value: any, user: IUser) => user.role === value,
      render: (role: number, item: IUser) => (
        item.email === user?.email ? <div style={{color: '#008681'}}>ВЫ</div> :
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
      <TableTemplate
        rowKey={(user: IUser) => user.id}
        loading={loading}
        dataSource={filterUsers}
        columns={columns}/>
      <CurrentUserModal/>
    </>
  );
};

export default UserTable;
