import React from 'react';
import {useLocation} from "react-router-dom";
import {orderPaths} from "../utils";
import OrderedGamesTable from "../components/tabels/OrderedGamesTable";
import OrderedPhonesTable from "../components/tabels/OrderedPhonesTable";
import OrderedProgramsTable from "../components/tabels/OrderedProgramsTable";

const OrderPage = () => {
  const {pathname} = useLocation();
  return (
    <>
      {
        pathname === orderPaths.games ? <OrderedGamesTable/> :
        pathname === orderPaths.phones ? <OrderedPhonesTable/> :
        pathname === orderPaths.programs && <OrderedProgramsTable/>
      }
    </>
  );
};

export default OrderPage;
