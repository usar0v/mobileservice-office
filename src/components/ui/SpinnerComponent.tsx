import {Space, Spin} from "antd";

const SpinnerComponent = () => {
  return (
    <Space className={'spinner'} size="middle">
      <Spin size="large"/>
    </Space>
  );
};

export default SpinnerComponent;
