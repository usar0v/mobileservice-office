import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import '../styles.less';
import {MenuItems} from "../utils";
import {useNavigate} from "react-router-dom";

const { Content, Footer, Sider} = Layout;

const MenuComponent: FC = ({children}) => {
  const navigate = useNavigate();

  return (
    <>
      <Layout className={'h-100'}>
        <Sider
          breakpoint="sm"
          collapsedWidth="0"
        >
          <div className="logo"/>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
            {
              MenuItems.map((item, index) =>
                <Menu.Item
                  onClick={() => navigate(item.path)}
                  key={index}
                  icon={item.icon}
                >
                  {item.title}
                </Menu.Item>
              )
            }
          </Menu>
        </Sider>
        <Layout>
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
