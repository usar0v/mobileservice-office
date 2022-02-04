import React, {useEffect} from 'react';
import {Col, Row, Typography} from "antd";
import {HomeOutlined} from "@ant-design/icons";
import CardComponent from "../components/ui/CardComponent";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllUsers} from "../service/userService";
import {getOrderedGames, getOrderedPhones, getOrderedPrograms} from "../service/orderService";
import ReportCard from "../components/ui/ReportCard";

const {Title} = Typography;

const HomePage = () => {
  const {orderedPhones, orderedGames, orderedPrograms} = useAppSelector(state => state.order);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrderedPhones());
    dispatch(getAllUsers());
    dispatch(getOrderedGames());
    dispatch(getOrderedPrograms());
  }, []);


  return (
    <>
      <Title className={'title'} level={3}>
        <HomeOutlined style={{marginRight: 10}}/>
        Главная
      </Title>
      <Row style={{marginTop: 20}} justify={'space-between'}>
        <Col xs={24} md={12}>
          <CardComponent
            path={'/ordered_phones'}
            color={'#00c54c'}
            title={'Заказанные телефоны'}
            content={orderedPhones.length}
          />
          <CardComponent
            path={'/ordered_programs'}
            color={'#ff8800'}
            title={'Заказанные программы'}
            content={orderedPrograms.length}
          />
          <CardComponent
            path={'/ordered_games'}
            color={'#ff0000'}
            title={'Заказанные игры'}
            content={(orderedGames?.length).toString()}
          />
        </Col>
        <Col xs={24} md={12}>
          <ReportCard/>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
