import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {useAppDispatch, useAppSelector} from "../hooks";
import Spinner from "../utils/spinner";
import {getPrograms} from "../service/programService";
import {AndroidOutlined} from "@ant-design/icons";
import UpdateService from "../components/modals/UpdateService";
import {getProgramsBrand} from "../service/brandService";

const ProgramsPage = () => {
  const dispatch = useAppDispatch();
  const {programs, isLoading} = useAppSelector(state => state.program);
  const {programsBrand} = useAppSelector(state => state.brand);

  useEffect(() => {
    dispatch(getPrograms());
    dispatch(getProgramsBrand());
  }, []);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
      <Title className={'title'} level={3}>
        <AndroidOutlined style={{marginRight: 10}}/>
        Программы
      </Title>
      <UpdateService brands={programsBrand}/>
      {programs.map(item => (
        <div key={item.title}>
          <span className={'title service_title'}>{item.title}</span>
          <AppTable brand={programsBrand} data={item.items}/>
        </div>
      ))}
    </>
  );
};

export default ProgramsPage;
