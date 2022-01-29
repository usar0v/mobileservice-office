import React, {FC, useState} from 'react';
import {Button, Col, InputNumber, Modal, Popover, Row, Space} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {hideCurrentUserModal} from "../../store/slices/userSlice";
import NumberSeparator from "../ui/NumberSeparator";
import {addBalance, changeRole} from "../../service/userService";
import {IUser} from "../../models/IUser";

const CurrentUserModal = () => {
  const {
    currentUserModal,
    currentUser,
    changeRoleLoading,
    addBalanceLoading,
  } = useAppSelector(state => state.user);

  const [popover, setPopover] = useState(false);

  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(hideCurrentUserModal());
  const changePopover = () => setPopover(p => !p);

  return (
    <>
      <Modal
        title={`${currentUser?.fullName}`}
        visible={currentUserModal}
        cancelButtonProps={{block: true, type: 'primary'}}
        okButtonProps={{style: {display: 'none'}}}
        cancelText={'назад'}
        onCancel={handleClick}
      >
        <Row justify={'space-between'} style={{marginBottom: 20}}>
          <Col span={10}>
            <b>Email:</b>
          </Col>
          <Col span={14}>
            {currentUser?.email}
          </Col>
        </Row>
        <Row justify={'space-between'} style={{marginBottom: 20}}>
          <Col span={10}>
            <b>Номер телефона:</b>
          </Col>
          <Col span={14}>
            <a
              href={`tel:+${currentUser?.phoneNumber}`}>{currentUser?.phoneNumber ? '+' + currentUser.phoneNumber : 'Нет телефон номера пользователья'}</a>
          </Col>
        </Row>
        <Row justify={'space-between'} style={{marginBottom: 20}}>
          <Col span={10}>
            <b>Страна:</b>
          </Col>
          <Col span={14}>
            {currentUser?.country}
          </Col>
        </Row>
        <Row justify={'space-between'} style={{marginBottom: 20}}>
          <Col span={10}>
            <b>Текущий баланс:</b>
          </Col>
          <Col span={14}>
            <NumberSeparator sum={currentUser?.sum}/>
          </Col>
        </Row>
        <Row justify={'space-between'} style={{marginBottom: 20}}>
          <Col span={10}>
            <b>Потраченный баланс:</b>
          </Col>
          <Col span={14}>
            <NumberSeparator color={'red'} sum={currentUser?.spentMoney}/>
          </Col>
        </Row>
        <Row justify={'space-between'} style={{marginBottom: 20}}>
          <Col span={10}>
            <b>Роль:</b>
          </Col>
          <Col span={14}>
            <div
              style={{color: currentUser?.role === 1 ? 'red' : '#003b34'}}>{(currentUser?.role === 1 ? 'Админ' : 'Пользователь').toUpperCase()}</div>
          </Col>
        </Row>
        <hr color={'#e1e1e1'}/>
        <Row justify={'space-between'} style={{marginTop: 20}}>
          <Col>
            <Button
              type={'primary'}
              loading={changeRoleLoading}
              danger
              onClick={() => {
                if (currentUser) {
                  dispatch(changeRole({
                    email: currentUser.email,
                    role: currentUser.role === 1 ? 3 : 1
                  }))
                }
              }}
            >
              {currentUser?.role === 1 ? 'Убрать админа' : 'Сделать админом'}
            </Button>
          </Col>
          <Col>
            <Popover
              content={<AddBalance user={currentUser} setPopover={setPopover}/>}
              title="Пополнить баланс"
              trigger="click"
              visible={popover}
              onVisibleChange={changePopover}
            >
              <Button
                type="primary"
                danger
                loading={addBalanceLoading}
              >
                Пополнить баланс
              </Button>
            </Popover>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default CurrentUserModal;

interface IAddBalance {
  user: IUser | null;
  setPopover: (prev: (prev: any) => boolean ) => void;
}

const AddBalance: FC<IAddBalance> = ({user, setPopover}) => {
  const [balance, setBalance] = useState(10);
  const {addBalanceLoading} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  return (
    <>
      <Space>
        <InputNumber
          min={10}
          value={balance}
          onChange={setBalance}
        />
        <Button
          disabled={balance < 10}
          loading={addBalanceLoading}
          danger
          onClick={() => {
            if (user) {
              dispatch(addBalance({
                email: user.email,
                balance: user.sum + balance
              }))
              setPopover(prev => !prev);
            }
          }}
        >
          пополнить
        </Button>
      </Space>
    </>
  )
}
