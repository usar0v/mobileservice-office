import React, {useEffect} from 'react';
import AppTable from "../components/tabels/AppTable";
import Title from "antd/lib/typography/Title";
import {getPhones} from "../service/phoneService";
import {useAppDispatch, useAppSelector} from "../hooks";
import Spinner from "../utils/spinner";

const PhonesPage = () => {
  const dispatch = useAppDispatch();
  const {phones, isLoading} = useAppSelector(state => state.phone)

  useEffect(() => {
    dispatch(getPhones());
  }, [])

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <>
      <Title style={{marginBottom: 17}} level={3}>Телефоны - 10</Title>
      {phones.map(item => (
        <>
          <Title style={{marginBottom: 10}} level={4}>{item.title}</Title>
          <AppTable data={item.items}/>
        </>
      ))}
    </>
  );
};

export default PhonesPage;
