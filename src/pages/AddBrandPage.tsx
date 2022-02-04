import React, {useEffect, useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Card, Col, Input, Row, Select} from "antd";
import {Services} from "../utils";
import requester from "../utils/requester";
import {errorMessage, successMessage} from "../utils/messages";
import ItemBrandComponent from "../components/ui/ItemBrandComponent";
import {getGamesBrand, getPhonesBrand, getProgramsBrand} from "../service/brandService";
import {useAppDispatch, useAppSelector} from "../hooks";

const AddBrandPage = () => {
  const [service, setService] = useState<string>('phone');
  const [brand, setBrand] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const {gamesBrand, programsBrand, phonesBrand} = useAppSelector(state => state.brand);

  useEffect(() => {
    if (service === 'phone'){
      dispatch(getPhonesBrand());
    }else if (service === 'game'){
      dispatch(getGamesBrand());
    }else if (service === 'program'){
      dispatch(getProgramsBrand());
    }
  },[service]);

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
  const serviceBrand = (service === 'program' ? programsBrand : service === 'game' ? gamesBrand : phonesBrand) || [];

  return (
    <div>
      <Title className={'title'} level={3} style={{marginBottom: 40}}>Добавить Бренд</Title>
      <Row>
        <Col span={24} md={12}>
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
        <Col span={24} md={12}>
          {serviceBrand.map(item => (
            <ItemBrandComponent status={service} item={item}/>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AddBrandPage;
