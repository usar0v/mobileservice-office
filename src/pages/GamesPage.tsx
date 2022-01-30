import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getGames} from "../service/gameService";
import Spinner from "../utils/spinner";
import UpdateServiceModal from "../components/modals/UpdateServiceModal";
import {getGamesBrand} from "../service/brandService";
import {RobotOutlined} from "@ant-design/icons";

const GamePage = () => {
  const dispatch = useAppDispatch();
  const {games, isLoading, currentModalVisible, currentGame, updateLoading} = useAppSelector(state => state.game)
  const {gamesBrand} = useAppSelector(state => state.brand);

  useEffect(() => {
    dispatch(getGames());
    dispatch(getGamesBrand());
  }, []);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
      <Title className={'title'} level={3}>
        <RobotOutlined style={{marginRight: 10}}/>
        Телефоны
      </Title>
      <UpdateServiceModal
        loading={updateLoading}
        currentService={currentGame}
        currentModalVisible={currentModalVisible}
        brands={gamesBrand}/>
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
