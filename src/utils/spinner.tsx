import {Space, Spin} from "antd";

const Spinner = () => {
  return (
    <Space className={'spinner'} size="middle">
      <Spin size="large"/>
    </Space>
  );
};

export default Spinner;
