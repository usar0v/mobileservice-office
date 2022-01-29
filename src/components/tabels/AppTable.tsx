import React, {FC} from 'react';
import {Button, Empty, Space, Table} from "antd";

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
    dataIndex: 'brand',
    render: (text: string) => <span>{text}</span>,
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
    title: 'Действия',
    key: 'action',
    render: (text: string, record: any) => (
      <Space size={0}>
        <Button type={'link'}>Редактировать</Button>
        <Button danger type={'link'}>Удалить</Button>
      </Space>
    ),
  },
];

type Props = {
  data: any;
}

const AppTable: FC<Props> = ({data}) => {
  return (
    <div>
      <Table
        scroll={{x: true}}
        locale={{
          emptyText: <Empty style={{margin: '80px 0'}}
                            description={'Пусто'}/>
        }} columns={columns}
        dataSource={data}/>
    </div>
  );
};

export default AppTable;
