import React, {useState} from 'react';
import {Button, Col, Modal, Popover, Row, Space} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {hideCurrentUserModal} from "../../store/slices/userSlice";
import NumberSeparator from "../ui/NumberSeparator";
import { changeRole} from "../../service/userService";
import AddBalancePopover from "../user/AddBalancePopover";
import AddDiscountPopover from "../user/AddDiscountPopover";

const CurrentUserModal = () => {
  const {
    currentUserModal,
    currentUser,
    changeRoleLoading,
    addBalanceLoading,
    addDiscountLoading,
  } = useAppSelector(state => state.user);

  const [balancePopover, setBalancePopover] = useState(false);
  const [discountPopover, setDiscountPopover] = useState(false);

  const dispatch = useAppDispatch();
  const handleClick = () => dispatch(hideCurrentUserModal());
  const changeBalancePopover = () => setBalancePopover(p => !p);
  const changeDiscountPopover = () => setDiscountPopover(p => !p);

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
            <a href={`malto:${currentUser?.email}`}>{currentUser?.email}</a>
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
        <Row justify={'space-between'} style={{marginBottom: 20}}>
          <Col span={10}>
            <b>Скидка:</b>
          </Col>
          <Col span={14}>
            {currentUser?.discount} %
          </Col>
        </Row>
        <hr color={'#e1e1e1'}/>
        <Row justify={'space-between'} gutter={[16, 16]} style={{marginTop: 20}}>
          <Col>
            <Button
              block
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
              content={<AddDiscountPopover user={currentUser} setPopover={setDiscountPopover}/>}
              title="Процент скидки"
              trigger="click"
              visible={discountPopover}
              onVisibleChange={changeDiscountPopover}
            >
              <Button
                type="primary"
                danger
                loading={addDiscountLoading}
              >
                Добавить скиду
              </Button>
            </Popover>
          </Col>
          <Col>
            <Popover
              content={<AddBalancePopover user={currentUser} setPopover={setBalancePopover}/>}
              title="Пополнить баланс"
              trigger="click"
              visible={balancePopover}
              onVisibleChange={changeBalancePopover}
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

