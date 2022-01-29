import React, {FC, useEffect, useState} from 'react';
import {Button, Form, Input, InputNumber, Modal, Row, Select, Space, Timeline} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {closeUpdateModal} from "../../store/slices/phoneSlice";
import {IBrand} from "../../models/IBrand";
import {CloseOutlined} from "@ant-design/icons";
import {IServiceItem} from "../../models/IService";

type Props = {
  brands: IBrand[]
};

const UpdateService: FC<Props> = ({brands}) => {
  const dispatch = useAppDispatch();
  const {currentModalVisible, currentService} = useAppSelector(state => state.phone);

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
    const step = [...values.instructionStep, instruction]
    setValues({...values, instructionStep: step});
    setInstruction('');
  };

  return (
    <div>
      <Modal style={{top: 20}} title='Редактирование' visible={currentModalVisible} onCancel={() => dispatch(closeUpdateModal())}>
        <Form.Item label='Название'>
          <Input style={{width: 250}} value={values.title}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeValue(e, 'title')}/>
        </Form.Item>
        <Form.Item style={{width: 250}} label="Бренд">
          <Select onChange={e => setValues({...values, brandId: e})} value={values.brandId}>
            {brands.map(v => (
              <Select.Option key={v.id} value={v.id}>{v.name}</Select.Option>
            ))}
          </Select>
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

export default UpdateService;
