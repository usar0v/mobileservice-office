import React, {FC, useEffect} from 'react';
import {Card, Typography} from "antd";
import NumberSeparatorComponent from "./NumberSeparatorComponent";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {gamesIncome, phonesIncome, programsIncome, totalIncome} from "../../service/reportService";

const ReportCardComponent: FC = () => {
  const dispatch = useAppDispatch();
  const {sum, programsSum, phonesSum, gamesSum} = useAppSelector(state => state.report);

  useEffect(() => {
    dispatch(totalIncome());
    dispatch(phonesIncome());
    dispatch(gamesIncome());
    dispatch(programsIncome());

  },[]);

  return (
      <Card className={'report_card'}>
        <div className={'d-flex-between'} style={{marginBottom: 20}}>
          <Typography style={{fontSize: 20, color: 'white'}}>Вся сумма:</Typography>
          <Typography style={{fontSize: 20, color: 'white'}}>
            <NumberSeparatorComponent color={'white'} sum={sum}/>
          </Typography>
        </div>
        <hr/>
        <div className={'d-flex-between'}>
          <div style={{display: 'flex', flexDirection: "column"}}>
            <Typography style={{fontSize: 17, color: '#00c54c'}}>Телефоны</Typography>
            <Typography style={{color: 'white', textAlign: 'center'}}>
              <NumberSeparatorComponent color={'white'} sum={phonesSum}/>
            </Typography>
          </div>
          <div style={{display: 'flex', flexDirection: "column"}}>
            <Typography style={{fontSize: 17, color: '#ff8800'}}>Программы</Typography>
            <Typography style={{color: 'white', textAlign: 'center'}}>
              <NumberSeparatorComponent color={'white'} sum={programsSum}/>
            </Typography>
          </div>
          <div style={{display: 'flex', flexDirection: "column"}}>
            <Typography style={{fontSize: 17, color: '#ff0000'}}>Игры</Typography>
            <Typography style={{textAlign: 'center'}}>
              <NumberSeparatorComponent color={'white'} sum={gamesSum}/>
            </Typography>
          </div>
        </div>
      </Card>
  );
};

export default ReportCardComponent;
