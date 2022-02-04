import React, {FC} from 'react';
import {Layout, Menu} from "antd";
import '../../styles.less';
import {MenuItems} from "../../utils";
import {useLocation, useNavigate} from "react-router-dom";
import Title from "antd/lib/typography/Title";

const {Content, Footer, Sider} = Layout;

const MenuComponent: FC = ({children}) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();

  return (
    <>
      <Layout>
        <Sider
          breakpoint="sm"
          collapsedWidth="0"
        >
          <div className="logo">
            <Title style={{color: 'white', textAlign: 'center'}} level={4}>Mobile Service</Title>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={
              [pathname === '/users' ? '1' :
                pathname === '/programs' ? '2' :
                  pathname === '/games' ? '4' :
                    pathname === '/phones' ? '3' :
                      pathname === '/add_service' ? '5' :
                        pathname === '/add_brand' ? '6' : '0'
              ]
            }
            defaultSelectedKeys={['0']}>
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
          <Content style={{margin: '16px'}}>
            <div className="content">
              {children}
            </div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default MenuComponent;
