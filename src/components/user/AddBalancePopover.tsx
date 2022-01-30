import React, {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Button, InputNumber, Space} from "antd";
import {addBalance} from "../../service/userService";
import {IUser} from "../../models/IUser";

interface IAddBalance {
  user: IUser | null;
  setPopover: (prev: (prev: any) => boolean ) => void;
}


const AddBalancePopover: FC<IAddBalance> = ({user, setPopover}) => {
  const [balance, setBalance] = useState(10);
  const {addBalanceLoading} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  return (
    <>
      <Space>
        <InputNumber
          value={balance}
          onChange={setBalance}
        />
        <Button
          disabled={(balance >= 0 && balance < 10) || (user ? user?.sum + balance < 0 : true)}
          loading={addBalanceLoading}
          danger
          onClick={() => {
            if (user) {
               dispatch(addBalance({
                 email: user.email,
                 balance: balance
               }))
               setPopover(prev => !prev);
               setBalance(10);
            }
          }}
        >
          пополнить
        </Button>
      </Space>
    </>
  )
}
export default AddBalancePopover;