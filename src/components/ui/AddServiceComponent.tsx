import React, {FC, useEffect, useState} from 'react';
import {Button, Col, Form, Input, InputNumber, Row, Select, Space, Timeline} from "antd";
import {CloseOutlined} from "@ant-design/icons";
import {IBrand} from "../../models/IBrand";
import TextArea from "antd/lib/input/TextArea";
import requester from "../../utils/requester";
import {errorMessage, successMessage} from "../../utils/messages";

type Props = {
  brand: IBrand[];
  activeService: any;
};

const AddServiceComponent: FC<Props> = ({brand, activeService}) => {
  const [brandId, setBrandId] = useState<number>(brand[0]?.id);
  const [title, setTitle] = useState<string>('');
  const [term, setTerm] = useState<string>('1-10');
  const [price, setPrice] = useState<number>(0);
  const [instructionTitle, setInstructionTitle] = useState<string>('');
  const [instructionStep, setInstructionStep] = useState<string[]>([]);
  const [stepText, setStepText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setBrandId(brand[0]?.id);
  }, [brand]);

  const addInstructionStep = () => {
    setInstructionStep(p => [...p, stepText]);
    setStepText('');
  };

  const deleteInstructionStep = (v: string) => {
    const step = instructionStep.filter((g: string) => g !== v);
    setInstructionStep(step);
  };

  const clearStates = () => {
    setTitle('');
    setPrice(0);
    setInstructionTitle('');
    setInstructionStep([]);
    setStepText('');
  }

  const addService = () => {
    setLoading(true);
    requester.post(`${activeService.id}`,{
      title,
      brandId,
      term,
      price,
      instructionTitle,
      instructionStep
    })
      .then(() => {
        successMessage('Успешно добавлен')
        clearStates()
      }).catch(err => {
      errorMessage('Что то пошло не так');
    }).finally(() => {
      setLoading(false);
    });
  };

  const checkInputs = title.length < 2 || term.length < 1 || price < 1 || instructionTitle.length < 2 || instructionStep.length < 1 || !brandId;

  return (
    <>
      <Row style={{marginBottom: 20}} justify={'space-between'}>
        <Col span={8}>
          <b>Название:</b>
        </Col>
        <Col span={15}>
          <Input value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}/>
        </Col>
      </Row>
      <Row style={{marginBottom: 20}} justify={'space-between'}>
        <Col span={8}>
          <b>Бренд:</b>
        </Col>
        <Col span={15}>
          <Select style={{width: '100%'}} value={brandId} onChange={e => setBrandId(e)}>
            {brand.map((item) => (
              <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
      <Row style={{marginBottom: 20}} justify={'space-between'}>
        <Col span={8}>
          <b>Время (мин):</b>
        </Col>
        <Col span={15}>
          <Input value={term} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)}
                 style={{width: 150}}/>
        </Col>
      </Row>
      <Row style={{marginBottom: 20}} justify={'space-between'}>
        <Col span={8}>
          <b>Цена ($):</b>
        </Col>
        <Col span={15}>
          <InputNumber value={price} onChange={(e: number) => setPrice(e)} style={{width: 150}}/>
        </Col>
      </Row>
      <hr style={{borderColor: '#419d7e'}}/>
      <Row style={{marginBottom: 20, marginTop: 30}} justify={'space-between'}>
        <Col span={9}>
          <b>Название инструкции:</b>
        </Col>
        <Col span={14}>
          <Input value={instructionTitle}
                 onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInstructionTitle(e.target.value)}/>
        </Col>
      </Row>
      <Row style={{marginBottom: 20, marginTop: 30}} justify={'space-between'}>
        <Col span={24} md={17}>
          <TextArea
            value={stepText}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setStepText(e.target.value)}
            placeholder={'добавить инструкцию'}/>
        </Col>
        <Col span={24} md={7} style={{textAlign: 'right'}}>
          <Button disabled={stepText.length < 2} onClick={() => addInstructionStep()} danger>Добавить</Button>
        </Col>
      </Row>
      <Timeline>
        {instructionStep.map((item: string) => (
          <Timeline.Item
            key={item}
            dot={<CloseOutlined onClick={() => deleteInstructionStep(item)} className="timeline-clock-icon"/>}
            color={'red'} style={{color: 'white'}}>{item}</Timeline.Item>
        ))}
      </Timeline>
      <Row>

      </Row>
      <Col className={'d-flex-center'} span={24}>
        <Button
          loading={loading}
          onClick={addService}
          disabled={checkInputs}
          type={'primary'} style={{width: '70%'}}>
          Добавить
        </Button>
      </Col>
    </>
  );
};

export default AddServiceComponent;
