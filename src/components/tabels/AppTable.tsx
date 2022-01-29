import React, {FC} from 'react';
import {Button, Empty, Space, Table} from "antd";
import {IServiceItem} from "../../models/IService";
import {useAppDispatch} from "../../hooks";
import {showUpdateModal} from "../../store/slices/phoneSlice";
import {IUser} from "../../models/IUser";
import {IBrand} from "../../models/IBrand";

type Props = {
  data: any;
  brand: IBrand[];
}

const AppTable: FC<Props> = ({data, brand}) => {
  const dispatch = useAppDispatch();

  const columns = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Бренд',
      key: 'brand',
      dataIndex: 'brandId',
      render: (text: number) => {
        const brandTitle = brand.find(v => v.id == text)?.name;
        return <span>{brandTitle}</span>;
      }
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (text: string) => <span>{text} <u>c</u></span>,
    },
    {
      title: 'Время',
      dataIndex: 'term',
      key: 'term',
      render: (text: string) => <span>{text} мин</span>,
    },
    {
      title: 'Редактирование',
      key: 'redactor',
      render: (text: string, record: IServiceItem) => (
        <Button onClick={() => dispatch(showUpdateModal(record)) } type={'link'}>Редактировать</Button>
      ),
    },
    {
      title: 'Удаление',
      key: 'remove',
      render: (text: string, record: any) => (
        <Button danger type={'link'}>Удалить</Button>
      ),
    },
  ];

  return (
    <div style={{marginBottom: 60}}>
      <Table
        rowKey={(service: IServiceItem) => service.id}
        scroll={{x: true}}
        locale={{
          emptyText: <Empty description={'Пусто'}/>
        }} columns={columns}
        dataSource={data}/>
    </div>
  );
};

export default AppTable;
