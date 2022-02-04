import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {useAppDispatch, useAppSelector} from "../hooks";
import SpinnerComponent from "../components/ui/SpinnerComponent";
import {getPrograms} from "../service/programService";
import {AndroidOutlined} from "@ant-design/icons";
import UpdateServiceModal from "../components/modals/UpdateServiceModal";
import {getProgramsBrand} from "../service/brandService";

const ProgramsPage = () => {
  const dispatch = useAppDispatch();
  const {programs, isLoading, currentModalVisible, currentProgram, updateLoading} = useAppSelector(state => state.program);
  const {programsBrand} = useAppSelector(state => state.brand);

  useEffect(() => {
    dispatch(getPrograms());
    dispatch(getProgramsBrand());
  }, []);

  if (isLoading) {
    return <SpinnerComponent/>;
  }

  return (
    <>
      <Title className={'title'} level={3}>
        <AndroidOutlined style={{marginRight: 10}}/>
        Программы
      </Title>
      <UpdateServiceModal
        loading={updateLoading}
        currentService={currentProgram}
        currentModalVisible={currentModalVisible}
        />
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
