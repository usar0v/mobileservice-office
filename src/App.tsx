import React, {FC, useEffect, useState} from 'react';
import AppPage from "./pages/AppPage";
import AuthPage from "./pages/AuthPage";
import {useAppSelector} from "./hooks";
import requester from "./utils/requester";
import {useDispatch} from "react-redux";
import {setUser, signOut} from "./store/slices/authSlice";
import SpinnerComponent from "./components/ui/SpinnerComponent";

const App: FC = () => {
  const [loading, setLoading] = useState(false);

  const {isAuth} = useAppSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    authCheck();
  }, []);

  const authCheck = () => {
    setLoading(true);
    requester.get('auth/admin/check')
      .then(({token}) => {
        dispatch(setUser({token}));
      })
      .catch((err) => {
        dispatch(signOut());
      }).finally(() => {
      setLoading(false);
    });
  };

  if (loading) {
    return <SpinnerComponent/>
  }
  return (
    <>
      {isAuth ? <AppPage/> : <AuthPage/>}
    </>
  );
}

export default App;
