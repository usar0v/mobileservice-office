import React, {FC, useState} from 'react';
import {Button, Card, Col} from "antd";
import Title from "antd/es/typography/Title";
import {DeleteOutlined} from "@ant-design/icons";
import {IBrand} from "../../models/IBrand";
import requester from "../../utils/requester";
import {useDispatch} from "react-redux";
import {deleteBrand} from "../../store/slices/brandSlice";
import {errorMessage, successMessage} from "../../utils/messages";
import {useLocation} from "react-router-dom";

type Props = {
  item: IBrand;
}

const ItemBrandComponent: FC<Props> = ({item}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const {pathname} = useLocation();

  const fetchBrand = (name: string) => {
    setLoading(true);
    requester.post(`brand/${name}/delete`, {id: item.id})
      .then(res => {
        dispatch(deleteBrand({type: name, id: item.id}));
        successMessage('Бренд успешно удален');
      }).catch(err => {
      errorMessage('Сначала удалите сервисы этого бренда, и попробуйте заново');
    }).finally(() => {
      setLoading(false);
    })
  };

  const removeBrand = () => {
    if (pathname === '/phones') {
      fetchBrand('phone')
    } else if (pathname === '/games') {
      fetchBrand('game')
    } else if (pathname === '/programs') {
      fetchBrand('program')
    }
    ;
  };

  return (
    <Col span={24} md={8}>
      <div key={item.id} className={'brand_card'}>
        <div className={'d-flex-between'}>
          <div className={'title'} style={{color: 'white', fontSize: 20}}>{item.name}</div>
          <Button loading={loading} onClick={removeBrand} shape="circle" type={'primary'} danger>
            <DeleteOutlined style={{color: 'white'}}/>
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default ItemBrandComponent;
