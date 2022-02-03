import React, {FC, useState} from 'react';
import {Button, Card, Input} from "antd";
import {LockOutlined} from "@ant-design/icons";
import requester from "../utils/requester";
import {errorMessage, successMessage} from "../utils/messages";
import {setUser} from "../store/slices/authSlice";
import {useDispatch} from "react-redux";
import Title from "antd/lib/typography/Title";

const AuthPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const checkUser = () => {
    setLoading(true);
    requester
      .post('auth/admin/login', {email, password})
      .then(({token}) => {
        if (token) {
          dispatch(setUser({token}));
          successMessage('Вы успешно вошли !');
        };
      })
      .catch((err) => {
        const data = err.response.data;
        if (data) {
          switch (data.message) {
            case "password_does_not_match":
              errorMessage('Пароль не совпадает !');
              break;
            case "user_is_not_found":
              errorMessage('Пользователь с таким эл.адресом не найден !');
              break;
            case "access_closed":
              errorMessage('Нет доступа!');
              break;
          }
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const checkValidData = !email.includes('@gmail.com') || password.length < 4 || loading;

  return (
    <div
      style={{
        alignItems: "center",
      }}
      className={"AuthPage"}
    >
      <Card style={{
        width: 320,
      }}>
        <Title level={3} style={{textAlign: 'center', color: '#18233f'}}>Mobile Service</Title>
        <div style={{textAlign: "center", margin: "12px 0px"}}>
          <LockOutlined style={{fontSize: 44}}/>
        </div>
        <div style={{margin: "12px 0px"}}>
          <Input
            style={{marginBottom: 20}}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            type={"email"}
            placeholder={"Email адрес"}
          />
          <Input
            onPressEnter={() => checkUser()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            type={"password"}
            placeholder={"Пароль"}
          />
        </div>
        <Button
          id={'sign-in-button'}
          type="primary"
          block
          disabled={checkValidData}
          onClick={() => checkUser()}
        >
          Подтвердить
        </Button>
      </Card>
    </div>
  );
};

export default AuthPage;
