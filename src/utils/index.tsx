import {
  AndroidOutlined,
  HomeOutlined,
  MobileOutlined,
  UserOutlined,
  RobotOutlined
} from "@ant-design/icons";

export const MenuItems = [
  {
    title: 'Главная',
    path: '/',
    icon: <HomeOutlined />,
  },
  {
    title: 'Пользователи',
    path: '/users',
    icon: <UserOutlined />,
  },
  {
    title: 'Программы',
    path: '/programs',
    icon: <AndroidOutlined />,
  },
  {
    title: 'Телефоны',
    path: '/phones',
    icon: <MobileOutlined />,
  },
  {
    title: 'Игры',
    path: '/games',
    icon: <RobotOutlined />,
  },
]