import React from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";

const ProgramsPage = () => {
  return (
    <>
      <Title style={{marginBottom: 17}} level={3}>Программы - 10</Title>
      <AppTable data={[1,2,3,4]}/>
    </>
  );
};

export default ProgramsPage;
