import React, {FC} from 'react';
import {Button, Card, Input} from "antd";
import {LockOutlined} from "@ant-design/icons";

const AuthPage: FC = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={"AuthPage"}
    >
      <Card style={{
        width: 320,
      }}>
        <div style={{textAlign: "center", margin: "12px 0px"}}>
          <LockOutlined style={{fontSize: 44}}/>
        </div>
        <div style={{margin: "12px 0px"}}>
          <Input
            style={{marginBottom: 20}}
            // onPressEnter={() => sendOtp()}
            // onChange={(e) => setName(e.target.value)}
            type={"text"}
            placeholder={"Полное имя"}
          />
          <Input
            // onPressEnter={() => sendOtp()}
            // onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            placeholder={"Пароль"}
          />
        </div>
        <Button
          id={'sign-in-button'}
          type="primary"
          block
          // onClick={() => postUser()}
        >
          Подтвердить
        </Button>
      </Card>
    </div>
  );
};

export default AuthPage;
