import React, {ChangeEvent, useEffect} from 'react';
import {Col, Input, Row, Typography} from "antd";
import {UserOutlined} from "@ant-design/icons";
import UserTable from "../components/tabels/UserTable";
import {useAppDispatch, useAppSelector} from "../hooks";
import {setFilterUsers, setFilterValue} from "../store/slices/userSlice";

const {Title} = Typography;

const UsersPage = () => {
  const {filterUsersValue} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilterUsers(filterUsersValue));
  }, [filterUsersValue]);

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
            value={filterUsersValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(setFilterValue(e.target.value))}
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
