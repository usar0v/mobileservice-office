import React, {FC} from 'react';
import {Card, Col, Typography} from "antd";
import NumberSeparator from "./NumberSeparator";

const ReportCard: FC = () => {
  return (
      <Card className={'report_card'}>
        <div className={'d-flex-between'} style={{marginBottom: 20}}>
          <Typography style={{fontSize: 20, color: 'white'}}>Вся сумма:</Typography>
          <Typography style={{fontSize: 20, color: 'white'}}>
            <NumberSeparator color={'white'} sum={24201}/>
          </Typography>
        </div>
        <hr/>
        <div className={'d-flex-between'}>
          <div style={{display: 'flex', flexDirection: "column"}}>
            <Typography style={{fontSize: 17, color: '#00c54c'}}>Телефоны</Typography>
            <Typography style={{color: 'white', textAlign: 'center'}}>
              <NumberSeparator color={'white'} sum={5512}/>
            </Typography>
          </div>
          <div style={{display: 'flex', flexDirection: "column"}}>
            <Typography style={{fontSize: 17, color: '#ff8800'}}>Программы</Typography>
            <Typography style={{color: 'white', textAlign: 'center'}}>
              <NumberSeparator color={'white'} sum={5512}/>
            </Typography>
          </div>
          <div style={{display: 'flex', flexDirection: "column"}}>
            <Typography style={{fontSize: 17, color: '#ff0000'}}>Игры</Typography>
            <Typography style={{textAlign: 'center'}}>
              <NumberSeparator color={'white'} sum={5512}/>
            </Typography>
          </div>
        </div>
      </Card>
  );
};

export default ReportCard;
