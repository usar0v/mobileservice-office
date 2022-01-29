import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {getPhones} from "../service/phoneService";
import {useAppDispatch, useAppSelector} from "../hooks";
import Spinner from "../utils/spinner";
import UpdateService from "../components/modals/UpdateService";
import {getPhonesBrand} from "../service/brandService";
import {MobileOutlined} from "@ant-design/icons";

const PhonesPage = () => {
  const dispatch = useAppDispatch();
  const {phones, isLoading} = useAppSelector(state => state.phone)
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
      <UpdateService brands={phonesBrand}/>
      {phones.map(item => (
        <div key={item.title}>
          <span className={'title service_title'}>{item.title}</span>
          <AppTable brand={phonesBrand} data={item.items}/>
        </div>
      ))}
    </>
  );
};

export default PhonesPage;
