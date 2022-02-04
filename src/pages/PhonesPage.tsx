import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {getPhones} from "../service/phoneService";
import {useAppDispatch, useAppSelector} from "../hooks";
import Spinner from "../utils/spinner";
import UpdateServiceModal from "../components/modals/UpdateServiceModal";
import {getPhonesBrand} from "../service/brandService";
import {BranchesOutlined, MobileOutlined} from "@ant-design/icons";
import {Row} from "antd";
import ItemBrandComponent from "../components/ui/ItemBrandComponent";

const PhonesPage = () => {
  const dispatch = useAppDispatch();
  const {phones, isLoading, currentModalVisible, currentPhone, updateLoading} = useAppSelector(state => state.phone);
  const {phonesBrand} = useAppSelector(state => state.brand);

  useEffect(() => {
    dispatch(getPhones());
    dispatch(getPhonesBrand());
  }, []);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
      <Title className={'title'} level={3}>
        <MobileOutlined style={{marginRight: 10}}/>
        Телефоны
      </Title>
      <UpdateServiceModal
        loading={updateLoading}
        currentService={currentPhone}
        currentModalVisible={currentModalVisible}
        />

      {phones.map(item => (
        <div key={item.title}>
          <span className={'title service_title'}>{item.title}</span>
          <AppTable brand={phonesBrand} data={item.items}/>
        </div>
      ))}
      <Title className={'title'} level={3}>
        <BranchesOutlined style={{marginRight: 10}}/>
        Бренды
      </Title>
      <hr style={{borderColor: '#074ba2'}}/>
      <Row>
        {phonesBrand.map(item => (
          <ItemBrandComponent item={item}/>
        ))}
      </Row>
    </>
  );
};

export default PhonesPage;
