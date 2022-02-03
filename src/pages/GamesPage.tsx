import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getGames} from "../service/gameService";
import Spinner from "../utils/spinner";
import UpdateServiceModal from "../components/modals/UpdateServiceModal";
import {getGamesBrand} from "../service/brandService";
import {BranchesOutlined, RobotOutlined} from "@ant-design/icons";
import ItemBrandComponent from "../components/ui/ItemBrandComponent";
import {Row} from "antd";

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
      />
      {games.map(item => (
        <div key={item.title}>
          <span className={'title service_title'}>{item.title}</span>
          <AppTable brand={gamesBrand} data={item.items}/>
        </div>
      ))}
      <Title className={'title'} level={3}>
        <BranchesOutlined style={{marginRight: 10}}/>
        Бренды
      </Title>
      <hr style={{borderColor: '#074ba2'}}/>

      <Row>
        {gamesBrand.map(item => (
          <ItemBrandComponent item={item}/>
        ))}
      </Row>
    </>
  );
};

export default GamePage;
