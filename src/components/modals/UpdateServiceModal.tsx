import React, {FC, useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, Modal, Select, Space, Timeline} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {IBrand} from "../../models/IBrand";
import {CloseOutlined} from "@ant-design/icons";
import {useLocation} from "react-router-dom";
import {IServiceItem} from "../../models/IService";
import {closeUpdatePhoneModal} from "../../store/slices/phoneSlice";
import {closeUpdateProgramModal} from "../../store/slices/programSlice";
import {closeUpdateGameModal} from "../../store/slices/gameSlice";
import {updateGame} from "../../service/gameService";
import {updatePhone} from "../../service/phoneService";
import {updateProgram} from "../../service/programService";

type Props = {
  brands: IBrand[];
  currentModalVisible: boolean;
  currentService: IServiceItem;
  loading: boolean;
};

const UpdateServiceModal: FC<Props> = ({brands, currentModalVisible, currentService, loading}) => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();

  const [values, setValues] = useState(currentService);
  const [instruction, setInstruction] = useState<string>('');

  useEffect(() => {
    setValues(currentService);
  }, [currentService]);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>, valueName: string) => {
    setValues({...values, [valueName]: e.target.value});
  };

  const deleteInstructionStep = (v: string) => {
    const step = values.instructionStep.filter((g: string) => g !== v);
    setValues({...values, instructionStep: step});
  };

  const addInstructionStep = () => {
    const step = [...values.instructionStep, instruction];
    setValues({...values, instructionStep: step});
    setInstruction('');
  };

  const closeModal = () => {
    if (pathname == '/phones') {
      dispatch(closeUpdatePhoneModal());
    } else if (pathname == '/games') {
      dispatch(closeUpdateGameModal());
    } else if (pathname == '/programs') {
      dispatch(closeUpdateProgramModal());
    }
    ;
  };

  const updateService = () => {
    if (pathname == '/phones') {
      dispatch(updatePhone(values));
    } else if (pathname == '/games') {
      dispatch(updateGame(values));
    } else if (pathname == '/programs') {
      dispatch(updateProgram(values));
    }
    ;
  };

  return (
    <div>
      <Modal
        cancelText={'Отмена'}
        okText={'Редактировать'}
        style={{top: 20}}
        title='Редактирование'
        onOk={updateService}
        confirmLoading={loading}
        okButtonProps={{disabled: loading}}
        onCancel={() => closeModal()}
        visible={currentModalVisible}>
        <Form.Item label='Название'>
          <Input style={{width: 250}} value={values.title}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e, 'title')}/>
        </Form.Item>
        <Form.Item label='Время (мин)'>
          <Input style={{width: 250}} value={values.term}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e, 'term')}/>
        </Form.Item>
        <Form.Item label="Цена ($)">
          <InputNumber value={values.price} onChange={(e: number) => setValues({...values, brandId: e})}/>
        </Form.Item>
        <hr/>
        <Form.Item style={{marginTop: 20}} label="Название инструкции">
          <Input value={values.instructionTitle}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e, 'instructionTitle')}/>
        </Form.Item>
        <Form.Item className={'d-flex-between'} label="Инструкции">
          <Space>
            <Input placeholder={'добавить инструкцию'}
                   value={instruction}
                   style={{width: 260}}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInstruction(e.target.value)}/>
            <Button disabled={instruction.length < 3} onClick={addInstructionStep} danger>Добавить</Button>
          </Space>
        </Form.Item>
        <Timeline>
          {values?.instructionStep?.map((item: string) => (
            <Timeline.Item
              key={item}
              dot={<CloseOutlined onClick={() => deleteInstructionStep(item)} className="timeline-clock-icon"/>}
              color={'red'}>{item}</Timeline.Item>
          ))}
        </Timeline>
      </Modal>
    </div>
  );
};

export default UpdateServiceModal;
