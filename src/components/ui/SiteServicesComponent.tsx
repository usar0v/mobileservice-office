import React, {useEffect} from 'react';
import {DeleteFilled, OrderedListOutlined} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {deleteSiteService, getAllSiteService} from "../../service/settingSerivce";
import SpinnerComponent from "./SpinnerComponent";

const SiteServicesComponent = () => {
  const {services, loading} = useAppSelector(state => state.setting);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllSiteService());
  }, []);

  if(loading) {
    return <SpinnerComponent/>
  }
  return (
    <div
      style={{
        marginTop: 40,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#004c59',
        color: "white"
    }}>
      <Title level={3} style={{fontWeight: 'inherit', color: '#fff'}}>
        <OrderedListOutlined style={{marginRight: 10}}/>
        Все услуги сайта
      </Title>
      <hr/>
      {
        services.map(service =>
          <>
            <div key={service.id} className={'site_service_title'}>
              {service.title}
              <DeleteFilled
                onClick={() => dispatch(deleteSiteService(service.id))}
                style={{marginLeft: 10, cursor: "pointer", color: '#ff1313'}}/>
            </div>
            <ul>
              {service.items.map((item, index) => <li className={'site_service_item'} key={index}>{item}</li>)}
            </ul>
          </>
        )
      }
    </div>
  );
};

export default SiteServicesComponent;
