import React from 'react';
import {OrderedListOutlined, SettingOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const SiteServicesComponent = () => {
  return (
    <div style={{marginTop: 30}}>
      <Title level={3} style={{fontWeight: 'inherit', color: '#484848'}}>
        <OrderedListOutlined style={{marginRight: 10}}/>
        Настройка сайта
      </Title>
    </div>
  );
};

export default SiteServicesComponent;
