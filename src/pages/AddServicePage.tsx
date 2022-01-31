import React, {FC, useEffect, useState} from 'react';
import Title from "antd/lib/typography/Title";
import {Card, Col, Row, Select} from "antd";
import AddServiceComponent from "../components/add/AddServiceComponent";
import {getGamesBrand, getPhonesBrand, getProgramsBrand} from "../service/brandService";
import {useAppDispatch, useAppSelector} from "../hooks";
import {Services} from "../utils";

const AddServicePage: FC = () => {
  const [service, setService] = useState<string>('phone');

  const PHONE_SERVICE = service === 'phone';
  const PROGRAM_SERVICE = service === 'program';
  const GAME_SERVICE = service === 'game';

  const dispatch = useAppDispatch();
  const {phonesBrand, programsBrand, gamesBrand} = useAppSelector(state => state.brand);

  useEffect(() => {
    if (PHONE_SERVICE) {
      dispatch(getPhonesBrand());
    }else if (PROGRAM_SERVICE) {
      dispatch(getProgramsBrand());
    }else if (GAME_SERVICE) {
      dispatch(getGamesBrand());
    };
  }, [service]);



  const brand = PHONE_SERVICE ? phonesBrand : PROGRAM_SERVICE ? programsBrand : gamesBrand;
  const activeService = Services.find(v => v.id === service);

  return (
    <div>
      <Row justify={'space-between'}>
        <Col>
          <Title className={'title'} level={3} style={{marginBottom: 20}}>Добавить {activeService?.title}</Title>
        </Col>
        <Col>
          <Select value={service} style={{width: 170}} onChange={e => setService(e)}>
            {Services.map((item) => (
              <Select.Option key={item.id} value={item.id}>{item.title}</Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col span={22} md={16}>
          <Card style={{backgroundColor: '#002d49', color: 'white'}}>
            <AddServiceComponent activeService={activeService} brand={brand}/>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AddServicePage;
