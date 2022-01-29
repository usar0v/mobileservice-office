import React, {useEffect, FC, useState} from 'react';
import {Button, Layout, PageHeader, Space} from "antd";
import MenuComponent from "../components/MenuComponent";
import {LoginOutlined, MenuOutlined, UserOutlined} from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Text from "antd/lib/typography/Text";

const AppPage: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const breakpoint = useBreakpoint();

  return (
    <Layout className={'h-100'}>
      <Layout.Header className={'d-flex-between'} style={{width: '100%', backgroundColor: '#fff'}}>
        <Space style={{height: '100%'}}>
          <MenuOutlined className={'logo'} onClick={() => setCollapsed(!collapsed)}/>
          {breakpoint.md && <h1> Mobile Service</h1>}
        </Space>
        <Space style={{height: '100%', color: '#a9a9a9'}}>
          <UserOutlined style={{border: '2px solid #45BE82', padding: 5, borderRadius: '100%', color: '#45BE82'}}/>
          <Text>User Name</Text>
          <div style={{height: 40, borderLeft: '0.4px solid #c9c9c9', marginRight: 15, marginLeft: 15}}/>
          <Text>Выход </Text> <LoginOutlined style={{fontSize: 20}} />
        </Space>
      </Layout.Header>
      <div className={'d-flex-between h-100'}>
        <MenuComponent collapsed={collapsed}/>
        <Layout.Content className={'content'}>
          <h1>Content</h1>
        </Layout.Content>
      </div>

    </Layout>
  );
};

export default AppPage;
