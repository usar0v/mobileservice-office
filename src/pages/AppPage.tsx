import React, {FC} from 'react';
import MenuComponent from "../components/ui/MenuComponent";
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import GamePage from "./GamesPage";
import PhonesPage from "./PhonesPage";
import ProgramsPage from "./ProgramsPage";
import UsersPage from "./UsersPage";

const AppPage: FC = () => {
  return (
    <MenuComponent>
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/games'} element={<GamePage/>}/>
        <Route path={'/phones'} element={<PhonesPage/>}/>
        <Route path={'/programs'} element={<ProgramsPage/>}/>
        <Route path={'/users'} element={<UsersPage/>}/>
      </Routes>
    </MenuComponent>
  );
};

export default AppPage;
