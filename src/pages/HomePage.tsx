import React, {useEffect} from 'react';
import {Col, Row, Typography} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import CardComponent from "../components/ui/CardComponent";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getOrderedPhones, getOrderedPrograms} from "../service/orderService";
import {getAllUsers} from "../service/userService";

const {Title} = Typography;

const HomePage = () => {
  const {orderedPhones, orderedPrograms} = useAppSelector(state => state.order);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrderedPhones());
    dispatch(getOrderedPrograms());
    dispatch(getAllUsers());
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
            content={orderedPhones.length}
          />
        </Col>
        <Col xs={24} md={8}>
          <CardComponent
            path={'/ordered_programs'}
            color={'#ff8800'}
            title={'Заказанные программы'}
            content={orderedPrograms.length}
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
