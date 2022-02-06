import React, {useState} from 'react';
import {Button, Col, Input, Row} from "antd";

const AddSiteServiceComponent = () => {
  const [title, setTitle] = useState<string>('');
  const [currentUnderTitle, setCurrentUnderTitle] = useState('');
  const [underTitles, setUnderTitles] = useState(['']);

  const underTitleChange = (current: string) => {
    setUnderTitles(prev => prev[0] === '' ? [current] : [...prev, current]);
  };

  return (
    <>
      <Row>
        <Col xs={24} md={12}>
          <div className={'add_content_container'}>
            <Input
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
                danger
                type={'primary'}
                className={'mx'}
                disabled={title.length < 4 || !underTitles[0]}
              >Добавить</Button>
            </div>
          </div>
        </Col>
        <Col>
          <ol>
            {underTitles.map(item =>
              item === '' ? null : <li>{item}</li>)
            }
          </ol>
        </Col>
      </Row>
    </>
  );
};

export default AddSiteServiceComponent;
