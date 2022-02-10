import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getGames} from "../service/gameService";
import SpinnerComponent from "../components/ui/SpinnerComponent";
import UpdateServiceModal from "../components/modals/UpdateServiceModal";
import {getGamesBrand} from "../service/brandService";
import {RobotOutlined} from "@ant-design/icons";

const GamePage = () => {
  const dispatch = useAppDispatch();
  const {games, isLoading, currentModalVisible, currentGame, updateLoading} = useAppSelector(state => state.game);
  const {gamesBrand} = useAppSelector(state => state.brand);

  useEffect(() => {
    dispatch(getGames());
    dispatch(getGamesBrand());
  }, []);

  if (isLoading) {
    return <SpinnerComponent/>;
  }

  return (
    <>
      <Title className={'title'} level={3}>
        <RobotOutlined style={{marginRight: 10}}/>
        Игры
      </Title>
      <UpdateServiceModal
        loading={updateLoading}
        currentService={currentGame}
        currentModalVisible={currentModalVisible}
      />
      {games.map(item => (
        <div key={item.title}>
          <span className={'title service_title'}>{item.title}</span>
          <AppTable brand={gamesBrand} data={item.items}/>
        </div>
      ))}
    </>
  );
};

export default GamePage;
