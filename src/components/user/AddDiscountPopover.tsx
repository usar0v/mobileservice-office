import React, {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Button, InputNumber, Space} from "antd";
import {IUser} from "../../models/IUser";
import {addDiscount} from "../../service/userService";

interface IAddDiscount {
  user: IUser | null;
  setPopover: (prev: (prev: any) => boolean ) => void;
}


const AddDiscountPopover: FC<IAddDiscount> = ({user, setPopover}) => {
  const [discount, setDiscount] = useState(10);
  const {addDiscountLoading} = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  return (
    <>
      <Space>
        <InputNumber
          value={discount}
          onChange={setDiscount}
        />
        <Button
          loading={addDiscountLoading}
          danger
          onClick={() => {
            if (user) {
              dispatch(addDiscount({
                email: user.email,
                discount
              }))
              setPopover(prev => !prev);
              setDiscount(10);
            }
          }}
        >
          добавить
        </Button>
      </Space>
    </>
  )
}
export default AddDiscountPopover;