import {
  AndroidOutlined,
  MobileOutlined,
  UserOutlined,
  RobotOutlined,
  PlusCircleOutlined,
  HomeOutlined
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
  {
    title: 'Добавить сервис',
    path: '/add_service',
    icon: <PlusCircleOutlined />,
  },
];

export const orderPaths = {
  phones: '/ordered_phones',
  games: '/ordered_games',
  programs: '/ordered_programs',
}
