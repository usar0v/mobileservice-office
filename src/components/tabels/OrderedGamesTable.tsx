import React, {useEffect} from 'react';
import {Button, Space, Typography} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeGameStatus, getOrderedGames} from "../../service/orderService";
import {IServiceItem} from "../../models/IService";
import {IUser} from "../../models/IUser";
import NumberSeparator from "../ui/NumberSeparator";
import moment from "moment";
import {IOrderedGame, IOrderedProgram} from "../../models/IOrder";
import TableTemplate from "./TableTemplate";
import {RobotOutlined} from "@ant-design/icons";
import {setFilterValue} from "../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

const {Title} = Typography;

const OrderedProgramsTable = () => {
  const {orderedGames, loading} = useAppSelector(state => state.order);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrderedGames());
  }, []);

  const handleClickEmail = (email: string) => {
    navigate('/users');
    dispatch(setFilterValue(email));
  }

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Название',
      dataIndex: 'game',
      key: 'game',
      render: (game: IServiceItem) => game?.title,
    },
    {
      title: 'эл. адрес',
      dataIndex: 'user',
      key: 'user',
      render: (user: IUser) =>
        <div className={'email'} onClick={() => handleClickEmail(user.email)}>{user.email}</div>
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (value: number) => <NumberSeparator sum={value}/>
    },
    {
      title: 'Никнейм',
      dataIndex: 'nickName',
      key: 'nickName',
      render: (value: string) => (
        value ? value : <div style={{textAlign: 'center', color: 'red'}}>НЕТ</div>
      )
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (value: string) => (
        value === "PENDING" ? <div style={{color: '#e39800'}}>В ожидании</div> :
          value === "REJECTED" ? <div style={{color: 'red'}}>Не принятый</div> :
            value === "SUCCESS" && <div style={{color: '#004b43'}}>Принятый</div>
      )
    },
    {
      title: 'Заказано',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (value: Date) => <div>{moment(value).format('Do MMMM  YYYY / h:mm')}</div>
    },
    {
      title: 'Управление',
      dataIndex: 'id',
      key: 'success',
      render: (id: number, game: IOrderedGame) => (
        <Space size={10} direction={'vertical'} >
          <Button
            disabled={game.status === 'SUCCESS' || game.status === 'REJECTED'}
            onClick={() => dispatch(changeGameStatus({id, status: "SUCCESS"}))}
            type={'primary'}
          >
            Принять
          </Button>
          <Button
            disabled={game.status === 'SUCCESS' || game.status === 'REJECTED'}
            onClick={() => dispatch(changeGameStatus({id, status: "REJECTED"}))}
            type={'primary'}
            danger
          >
            Отказать
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Title className={'title'} level={3}>
        <RobotOutlined style={{marginRight: 10}}/>
        Заказанные игры
      </Title>
      <TableTemplate
        rowKey={(orderedGame: IOrderedGame) => orderedGame.id}
        loading={loading}
        dataSource={orderedGames}
        columns={columns}
      />
    </>
  );
};

export default OrderedProgramsTable;
