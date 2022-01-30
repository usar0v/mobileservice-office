import React, {ChangeEvent} from 'react';
import {Col, Input, Row, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import UserTable from "../components/tabels/UserTable";
import {useAppDispatch} from "../hooks";
import {setFilterUsers} from "../store/slices/userSlice";

const {Title} = Typography;

const UsersPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Row justify={'space-between'}>
        <Col>
          <Title level={3} style={{fontWeight: 'inherit', color: '#484848'}}>
            <UserOutlined style={{marginRight: 10}}/>
            Пользователи
          </Title>
        </Col>
        <Col>
          <Input
            onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setFilterUsers(e.target.value))}
            addonAfter="@gmail.com"
            placeholder={'Поиск по Email'}
          />
        </Col>
      </Row>
      <UserTable />
    </>
  );
};

export default UsersPage;
