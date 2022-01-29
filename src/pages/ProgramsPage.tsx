import React from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {useAppDispatch, useAppSelector} from "../hooks";
import Spinner from "../utils/spinner";

const ProgramsPage = () => {
  const dispatch = useAppDispatch();
  const {programs, isLoading} = useAppSelector(state => state.program);

  if (isLoading) {
    return <Spinner/>;
  }

  return (
    <>
      <Title style={{marginBottom: 17}} level={3}>Программы - 10</Title>
      {programs.map(item => (
        <>
          <Title style={{marginBottom: 10}} level={4}>{item.title}</Title>
          <AppTable data={item.items}/>
        </>
      ))}
    </>
  );
};

export default ProgramsPage;
