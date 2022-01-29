import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import '../styles.less';

const {Header, Content, Footer, Sider} = Layout;

const MenuComponent: FC = ({children}) => {
  return (
    <>
      <Layout className={'h-100'}>
        <Sider
          breakpoint="sm"
          collapsedWidth="0"
        >
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined/>}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined/>}>
              nav 3
            </Menu.Item>
            <Menu.Item key="4" icon={<UserOutlined/>}>
              nav 4
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{padding: 0}}/>
          <Content style={{margin: '24px 16px 0'}}>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
              {children}
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>,
    </>
  );
};

export default MenuComponent;
