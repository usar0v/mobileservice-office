import React from 'react';
import {Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import UserTable from "../components/tabels/UserTable";

const {Title} = Typography;

const UsersPage = () => {
  return (
    <>
      <Title level={3} style={{fontWeight: 'inherit', color: '#484848'}}>
        <UserOutlined style={{marginRight: 10}}/>
        Пользователи
      </Title>
      <UserTable/>
    </>
  );
};

export default UsersPage;
