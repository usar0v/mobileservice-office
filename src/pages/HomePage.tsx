import React, {useEffect} from 'react';
import {Col, Row, Typography} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import CardComponent from "../components/ui/CardComponent";
import {useAppDispatch} from "../hooks";
import {getOrderedPhones} from "../service/orderService";

const {Title} = Typography;

const HomePage = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrderedPhones());
  }, []);


  return (
    <>
      <Title className={'title'} level={3}>
        <HomeOutlined style={{marginRight: 10}}/>
        Главная
      </Title>
      <Row style={{marginTop: 20}}>
        <Col xs={24} md={8}>
          <CardComponent
            path={'/ordered_phones'}
            color={'#00c54c'}
            title={'Заказанные телефоны'}
            content={'10'}
          />
        </Col>
        <Col xs={24} md={8}>
          <CardComponent
            path={'/ordered_programs'}
            color={'#ff8800'}
            title={'Заказанные программы'}
            content={'100'}
          />
        </Col>
        <Col xs={24} md={8}>
          <CardComponent
            path={'/ordered_games'}
            color={'#ff0000'}
            title={'Заказанные игры'}
            content={'100'}
          />
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
