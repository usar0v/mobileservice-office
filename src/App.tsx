import React, {FC} from 'react';
import AppPage from "./pages/AppPage";
import AuthPage from "./pages/AuthPage";
import {useAppSelector} from "./hooks";

const App: FC = () => {
  const {isAuth} = useAppSelector(state => state.user);

  if (isAuth) {
    return <AppPage/>
  }

  return <AuthPage/>
};

export default App;
