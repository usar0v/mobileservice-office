import React, {useState} from 'react';
import {Button, Col, Input, Row} from "antd";
import {useAppDispatch} from "../../hooks";
import {addSiteService} from "../../service/settingSerivce";

const AddSiteServiceComponent = () => {
  const [title, setTitle] = useState<string>('');
  const [currentUnderTitle, setCurrentUnderTitle] = useState('');
  const [underTitles, setUnderTitles] = useState(['']);

  const dispatch = useAppDispatch();

  const underTitleChange = (current: string) => {
    setUnderTitles(prev => prev[0] === '' ? [current] : [...prev, current]);
  };

  const handleClickAddButton = () => {
    dispatch(addSiteService({title, items: underTitles}));
    setTitle('');
    setUnderTitles(['']);
  }

  return (
    <>
      <Row>
        <Col style={{marginTop: 10}} xs={24} md={12}>
          <div className={'add_content_container'}>
            <Input
              value={title}
              className={'mx'}
              placeholder={'Заголовок услуг'}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className={'mx'} style={{display: 'flex'}}>
              <Input
                value={currentUnderTitle}
                placeholder={'Подзаголовок услуг'}
                onChange={(e) => setCurrentUnderTitle(e.target.value)}
              />
              <Button
                type={'primary'}
                disabled={currentUnderTitle.length < 4}
                onClick={() => {
                  underTitleChange(currentUnderTitle);
                  setCurrentUnderTitle('');
                }}
              >
                Добавить
              </Button>
            </div>
            <div>
              <Button
                onClick={handleClickAddButton}
                danger
                type={'primary'}
                className={'mx'}
                disabled={title.length < 4 || !underTitles[0]}
              >Добавить</Button>
            </div>
          </div>
        </Col>
        <Col style={{marginTop: 10}} xs={24} md={12}>
            {
              underTitles.map((item, index) =>
              item === '' ? null :
                <div
                  key={index}
                  style={{
                    padding: 10,
                    backgroundColor: '#00606e',
                    color: 'white',
                    borderRadius: 5,
                    marginBottom: 10,
                    width: '100%',
                    margin: 5,
                  }}
                >
                  {item}
                </div>)
            }
        </Col>
      </Row>
    </>
  );
};

export default AddSiteServiceComponent;
