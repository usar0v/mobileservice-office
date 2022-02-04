import React, {useEffect, useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Button, Card, Col, Input, Row, Select} from "antd";
import {Services} from "../utils";
import requester from "../utils/requester";
import {errorMessage, successMessage} from "../utils/messages";
import ItemBrandComponent from "../components/ui/ItemBrandComponent";
import {getGamesBrand, getPhonesBrand, getProgramsBrand} from "../service/brandService";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getPhones} from "../service/phoneService";
import {getGames} from "../service/gameService";
import {getPrograms} from "../service/programService";

const AddBrandPage = () => {
  const [service, setService] = useState<string>('phone');
  const [brand, setBrand] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const {gamesBrand, programsBrand, phonesBrand} = useAppSelector(state => state.brand);
  const {programs} = useAppSelector(state => state.program);
  const {phones} = useAppSelector(state => state.phone);
  const {games} = useAppSelector(state => state.game);


  useEffect(() => {
    if (service === 'phone'){
      dispatch(getPhones());
      dispatch(getPhonesBrand());
    }else if (service === 'game'){
      dispatch(getGames());
      dispatch(getGamesBrand());
    }else if (service === 'program'){
      dispatch(getPrograms());
      dispatch(getProgramsBrand());
    }
  },[service]);

  const addBrand = () => {
    setLoading(true);
    requester.post(`brand`, {
      name: brand,
      type: service,
      })
      .then(res => {
        successMessage('Бренд успешно добавлен');
        setBrand('');
        if (service == 'phone') {
          dispatch(getPhonesBrand());
        } else if (service == 'program') {
          dispatch(getProgramsBrand());
        } else if (service == 'game') {
          dispatch(getGamesBrand());
        }
      }).catch(err => {
      errorMessage('Что то пошло не так');
    }).finally(() => {
      setLoading(false);
    });
  };

  const serviceBrand = (service === 'program' ? programsBrand : service === 'game' ? gamesBrand : phonesBrand) || [];
  const services = (service === 'program' ? programs : service === 'game' ? games : phones) || [];

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
            <ItemBrandComponent key={item.id} services={services} status={service} item={item}/>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default AddBrandPage;
