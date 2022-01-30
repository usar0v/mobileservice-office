import React from 'react';
import {Typography} from "antd";
import {AndroidOutlined} from "@ant-design/icons";

const {Title} = Typography;

const OrderedProgramsTable = () => {
  return (
    <>
      <Title className={'title'} level={3}>
        <AndroidOutlined style={{marginRight: 10}}/>
        Заказанные программы
      </Title>
    </>
  );
};

export default OrderedProgramsTable;
