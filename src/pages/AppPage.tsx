import React, {FC} from 'react';
import MenuComponent from "../components/ui/MenuComponent";
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import GamePage from "./GamesPage";
import PhonesPage from "./PhonesPage";
import ProgramsPage from "./ProgramsPage";
import UsersPage from "./UsersPage";
import AddServicePage from "./AddServicePage";
import OrderPage from "./OrderPage";
import {orderPaths} from "../utils";

const AppPage: FC = () => {
  return (
    <MenuComponent>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/games'} element={<GamePage/>}/>
        <Route path={'/phones'} element={<PhonesPage/>}/>
        <Route path={'/programs'} element={<ProgramsPage/>}/>
        <Route path={'/users'} element={<UsersPage/>}/>
        <Route path={'/add_service'} element={<AddServicePage/>}/>
        <Route path={orderPaths.programs} element={<OrderPage/>}/>
        <Route path={orderPaths.games} element={<OrderPage/>}/>
        <Route path={orderPaths.phones} element={<OrderPage/>}/>
      </Routes>
    </MenuComponent>
  );
};

export default AppPage;
