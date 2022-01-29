import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getGames} from "../service/gameService";
import Spinner from "../utils/spinner";

const GamePage = () => {
  const dispatch = useAppDispatch();
  const {games, isLoading} = useAppSelector(state => state.game)

  useEffect(() => {
    dispatch(getGames());
  }, []);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
      <Title style={{marginBottom: 17}} level={3}>Игры - 10</Title>
      {games.map(item => (
        <>
          <Title style={{marginBottom: 10}} level={4}>{item.title}</Title>
          <AppTable data={item.items}/>
        </>
      ))}
    </>
  );
};

export default GamePage;
