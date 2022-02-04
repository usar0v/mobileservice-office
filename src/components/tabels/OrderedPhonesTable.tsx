import React, {useEffect} from 'react';
import {Button, Space, Typography} from "antd";
import {MobileOutlined} from "@ant-design/icons";
import moment from "moment";
import {IOrderedPhone} from "../../models/IOrder";
import TableTemplate from "./TableTemplate";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changePhoneStatus, getOrderedPhones} from "../../service/orderService";
import NumberSeparator from "../ui/NumberSeparator";
import {IServiceItem} from "../../models/IService";
import {IUser} from "../../models/IUser";
import {useNavigate} from "react-router-dom";
import {setFilterValue} from "../../store/slices/userSlice";

const {Title} = Typography;

const OrderedPhonesTable = () => {
  const {orderedPhones, loading} = useAppSelector(state => state.order);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrderedPhones());
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
      dataIndex: 'phone',
      key: 'phone',
      render: (phone: IServiceItem) => phone.title,
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
      title: 'Серий номер',
      dataIndex: 'sn',
      key: 'sn',
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
      render: (id: number, phone: IOrderedPhone) => (
        <Space size={10} direction={'vertical'}>
          <Button
            disabled={phone.status === 'SUCCESS' || phone.status === 'REJECTED'}
            onClick={() => dispatch(changePhoneStatus({id, status: "SUCCESS"}))}
            type={'primary'}
          >
            Принять
          </Button>
          <Button
            disabled={phone.status === 'SUCCESS' || phone.status === 'REJECTED'}
            onClick={() => dispatch(changePhoneStatus({id, status: "REJECTED"}))}
            type={'primary'}
            danger
          >
            Отказать
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <>
      <Title className={'title'} level={3}>
        <MobileOutlined style={{marginRight: 10}}/>
        Заказанные телефоны
      </Title>
      <TableTemplate
        rowKey={(orderedPhone: IOrderedPhone) => orderedPhone.id}
        loading={loading}
        dataSource={orderedPhones}
        columns={columns}
      />
    </>
  );
};

export default OrderedPhonesTable;
