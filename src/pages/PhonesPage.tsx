import React from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";

const PhonesPage = () => {
  return (
    <>
      <Title style={{marginBottom: 17}} level={3}>Телефоны - 10</Title>
      <AppTable data={[1,2,3,4]}/>
    </>
  );
};

export default PhonesPage;
