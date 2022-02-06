import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import {SettingOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import {Button, Col, Input, Row} from "antd";
import AddSiteServiceComponent from "../components/ui/AddSiteServiceComponent";
import SiteServicesComponent from "../components/ui/SiteServicesComponent";

const SettingsPage = () => {

  return (
    <>
      <Title level={3} style={{fontWeight: 'inherit', color: '#484848'}}>
        <SettingOutlined style={{marginRight: 10}}/>
        Настройка сайта
      </Title>
      <AddSiteServiceComponent/>
      <SiteServicesComponent/>
    </>
  );
};

export default SettingsPage;
