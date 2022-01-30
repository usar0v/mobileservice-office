import React, {FC, useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Select} from "antd";

const AddServicePage: FC = () => {
  const [service, setService] = useState('phone');

  const services = [
    {id: 'phone', title: 'Телефоны'},
    {id: 'program', title: 'Программы'},
    {id: 'game', title: 'Игры'},
  ]
  return (
    <div>
      <div style={{ justifyContent: 'space-between'}}>
        <Title level={3} style={{marginBottom: 20}}>Добавить</Title>
        <Select value={service} style={{width: 150}} onChange={e => setService(e)}>
          {services.map((item) => (
            <Select.Option key={item.id} value={item.id}>{item.title}</Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default AddServicePage;
