import React from 'react';
import {Typography} from "antd";
import {RobotOutlined} from "@ant-design/icons";

const {Title} = Typography;

const OrderedGamesTable = () => {
  return (
    <>
      <Title className={'title'} level={3}>
        <RobotOutlined style={{marginRight: 10}}/>
        Заказанные игры
      </Title>
    </>
  );
};

export default OrderedGamesTable;
