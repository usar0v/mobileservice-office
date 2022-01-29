import React, {FC} from 'react';
import {Menu} from "antd";
import {WalletOutlined} from "@ant-design/icons";

export type Props = {
  collapsed: boolean;
}

const MenuComponent: FC<Props> = ({collapsed}) => {
  return (
    <div>
      <Menu mode="inline" style={{width: !collapsed ? 255 : 0, paddingTop: 20}} inlineCollapsed={collapsed}
            className={'h-100'}
            theme="dark">
        {[1, 2, 3, 4].map(item => (
          <Menu.Item icon={<WalletOutlined/>} key={6}>
            Касса
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default MenuComponent;
