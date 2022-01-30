import {
  AndroidOutlined,
  MobileOutlined,
  UserOutlined,
  RobotOutlined,
  PieChartOutlined, PlusCircleOutlined
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
  {
    title: 'Добавить сервис',
    path: '/add_service',
    icon: <PlusCircleOutlined />,
  },
]
