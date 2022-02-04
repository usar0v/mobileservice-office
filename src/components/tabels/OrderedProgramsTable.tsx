import React, { useEffect } from 'react';
import {Button, Space, Typography} from "antd";
import {AndroidOutlined} from "@ant-design/icons";
import {IServiceItem} from "../../models/IService";
import {IUser} from "../../models/IUser";
import NumberSeparator from "../ui/NumberSeparator";
import moment from "moment";
import {IOrderedPhone, IOrderedProgram} from "../../models/IOrder";
import {changeProgramStatus, getOrderedPrograms} from "../../service/orderService";
import {useAppDispatch, useAppSelector} from "../../hooks";
import TableTemplate from "./TableTemplate";
import {setFilterValue} from "../../store/slices/userSlice";
import {useNavigate} from "react-router-dom";

const {Title} = Typography;

const OrderedProgramsTable = () => {
  const {orderedPrograms, loading} = useAppSelector(state => state.order);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrderedPrograms());
  }, []);

  const handleClickEmail = (email: string) => {
    navigate('/users');
    dispatch(setFilterValue(email));
  }

  const columns = [
    {
      title: "ID",
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Название',
      dataIndex: 'program',
      key: 'program',
      render: (program: IServiceItem) => program.title
    },
    {
      title: 'эл адрес',
      dataIndex: 'user',
      key: 'userId',
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
      title: 'эл адрес для доступа',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      filters: [
        {
          text: 'В ожидании',
          value: 'PENDING',
        },
        {
          text: 'Принятые',
          value: 'SUCCESS',
        },
        {
          text: 'Не принятые',
          value: 'REJECTED'
        }
      ],
      onFilter: (value: string, orderedPhone: IOrderedPhone) => value === orderedPhone.status,
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
      render: (id: number, program: IOrderedProgram) => (
        <Space size={10} direction={'vertical'} >
          <Button
            disabled={program.status === 'SUCCESS' || program.status === 'REJECTED'}
            onClick={() => dispatch(changeProgramStatus({
              id,
              status: "SUCCESS",
              userId: program.userId,
              price: program.price,
            }))}
            type={'primary'}
          >
            Принять
          </Button>
          <Button
            disabled={program.status === 'SUCCESS' || program.status === 'REJECTED'}
            onClick={() => dispatch(changeProgramStatus({
              id,
              status: "REJECTED",
              userId: program.userId,
              price: program.price,
            }))}
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
        <AndroidOutlined style={{marginRight: 10}}/>
        Заказанные программы
      </Title>
      <TableTemplate
        rowKey={(program: IOrderedProgram) => program.id}
        loading={loading}
        dataSource={orderedPrograms}
        columns={columns}
      />
    </>
  );
};

export default OrderedProgramsTable;
