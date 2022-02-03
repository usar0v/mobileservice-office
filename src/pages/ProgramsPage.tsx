import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {useAppDispatch, useAppSelector} from "../hooks";
import Spinner from "../utils/spinner";
import {getPrograms} from "../service/programService";
import {AndroidOutlined, BranchesOutlined} from "@ant-design/icons";
import UpdateServiceModal from "../components/modals/UpdateServiceModal";
import {getProgramsBrand} from "../service/brandService";
import {Row} from "antd";
import ItemBrandComponent from "../components/ui/ItemBrandComponent";

const ProgramsPage = () => {
  const dispatch = useAppDispatch();
  const {programs, isLoading, currentModalVisible, currentProgram, updateLoading} = useAppSelector(state => state.program);
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
      <Title className={'title'} level={3}>
        <BranchesOutlined style={{marginRight: 10}}/>
        Бренды
      </Title>
      <hr style={{borderColor: '#074ba2'}}/>

      <Row>
        {programsBrand.map(item => (
          <ItemBrandComponent item={item}/>
        ))}
      </Row>
    </>
  );
};

export default ProgramsPage;
