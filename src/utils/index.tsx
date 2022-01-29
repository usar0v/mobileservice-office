import {
  AndroidOutlined,
  MobileOutlined,
  UserOutlined,
  RobotOutlined,
  PieChartOutlined
} from "@ant-design/icons";

export const MenuItems = [
  {
    title: 'Отчеты',
    path: '/',
    icon: <PieChartOutlined />,
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