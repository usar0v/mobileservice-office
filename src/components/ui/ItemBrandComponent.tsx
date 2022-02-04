import React, {FC, useState} from 'react';
import {Button} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {IBrand} from "../../models/IBrand";
import requester from "../../utils/requester";
import {useDispatch} from "react-redux";
import {deleteBrand} from "../../store/slices/brandSlice";
import {errorMessage, successMessage} from "../../utils/messages";

type Props = {
  item: IBrand;
  status: string;
}

const ItemBrandComponent: FC<Props> = ({item, status}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

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
      fetchBrand(status)
  };

  return (
    <div key={item.id} className={'brand_card'}>
      <div className={'d-flex-between'}>
        <div className={'title'} style={{color: 'white', fontSize: 20}}>{item.name}</div>
        <Button loading={loading} onClick={removeBrand} shape="circle" type={'primary'} danger>
          <DeleteOutlined style={{color: 'white'}}/>
        </Button>
      </div>
    </div>
  );
};

export default ItemBrandComponent;
