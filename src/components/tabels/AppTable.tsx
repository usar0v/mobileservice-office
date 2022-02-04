import React, {FC} from 'react';
import {Button} from "antd";
import {IServiceItem} from "../../models/IService";
import {useAppDispatch} from "../../hooks";
import {IBrand} from "../../models/IBrand";
import NumberSeparator from "../ui/NumberSeparator";
import {useLocation} from "react-router-dom";
import {showUpdatePhoneModal} from "../../store/slices/phoneSlice";
import {showUpdateGameModal} from "../../store/slices/gameSlice";
import {showUpdateProgramModal} from "../../store/slices/programSlice";
import {deleteGame} from "../../service/gameService";
import {deletePhone} from "../../service/phoneService";
import {deleteProgram} from "../../service/programService";
import TableTemplate from "./TableTemplate";

type Props = {
  data: any;
  brand: IBrand[];
}

const AppTable: FC<Props> = ({data, brand}) => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();

  const columns = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (text: number) => <span><NumberSeparator sum={text}/></span>,
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
        <Button type="primary" ghost onClick={() => showModal(record)}>
          Редактировать
        </Button>
      ),
    },
    {
      title: 'Удаление',
      key: 'remove',
      render: (text: string, record: any) => (
        <Button onClick={() => deleteService(record.id)} danger>
          Удалить
        </Button>
      ),
    },
  ];

  const showModal = (record: IServiceItem) => {
    if (pathname == '/phones') {
      dispatch(showUpdatePhoneModal(record));
    } else if (pathname == '/games') {
      dispatch(showUpdateGameModal(record));
    } else if (pathname == '/programs') {
      dispatch(showUpdateProgramModal(record));
    }
    ;
  };

  const deleteService = (id: number) => {
    if (pathname == '/phones') {
      dispatch(deletePhone(id));
    } else if (pathname == '/games') {
      dispatch(deleteGame(id));
    } else if (pathname == '/programs') {
      dispatch(deleteProgram(id));
    }
    ;
  };

  return (
    <div style={{marginBottom: 60}}>

      <TableTemplate
        rowKey={(service: IServiceItem) => service.id}
        dataSource={data}
        columns={columns}
      />
    </div>
  );
};

export default AppTable;
