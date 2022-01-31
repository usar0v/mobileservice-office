import React, {useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Card, Col, Input, Row, Select} from "antd";
import {Services} from "../utils";
import requester from "../utils/requester";
import {errorMessage, successMessage} from "../utils/messages";

const AddBrandPage = () => {
  const [service, setService] = useState<string>('phone');
  const [brand, setBrand] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const addBrand = () => {
    setLoading(true);
    requester.post(`brand/${activeService?.id}`,
      {name: brand})
      .then(res => {
        successMessage('Бренд успешно добавлен');
        setBrand('');
      }).catch(err => {
      errorMessage('Что то пошло не так');
    }).finally(() => {
      setLoading(false);
    });
  };

  const activeService = Services.find(v => v.id === service);

  return (
    <div>
      <Title className={'title'} level={3} style={{marginBottom: 40}}>Добавить Бренд</Title>
      <Row justify={'center'}>
        <Col span={24} md={15}>
          <Card style={{backgroundColor: '#002d49', color: 'white', padding: 20}}>
            <Select value={service} style={{width: '100%', marginBottom: 15}} onChange={e => setService(e)}>
              {Services.map((item) => (
                <Select.Option key={item.id} value={item.id}>{item.title}</Select.Option>
              ))}
            </Select>
            <Input
              value={brand}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrand(e.target.value)}
              placeholder={'Название бренда'}
              style={{marginBottom: 30}}
            />
            <div className={'d-flex-center'}>
              <Button
                disabled={brand.length < 2}
                style={{width: '80%'}}
                type={'primary'}
                onClick={addBrand}
                loading={loading}
              >Добавить</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddBrandPage;
