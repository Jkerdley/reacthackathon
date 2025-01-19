import JohnAvatar from '../assets/images/avatarjo.jpg';
import EmranAvatar from '../assets/images/avatarEmran.jpg';
import AndreiAvatar from '../assets/images/avatarAndrei.jpg';
import { BADGE_TYPE } from '../components/badge/constants/badgeType';

export const database = {
	users: [
		{
			id: '1',
			name: 'Евгений Эрдле',
			years: '33',
			profession: 'FRONTEND DEVELOPER | DESIGN',
			avatar: JohnAvatar,
			socialLinks: [
				{ socialName: 'Twitter', url: 'https://www.twitter.com/erdleEvgenij', color: '#52b7ee' },
				{ socialName: 'Instagram', url: 'https://www.instagram.com/erdle.foto', color: '#95305A' },
				{
					socialName: 'LinkedIn',
					url: 'https://www.linkedin.com/in/eugen-erdle-4ba180308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
					color: '#399AD0',
				},
				{ socialName: 'VK', url: 'https://vk.com/erdle.foto', color: '#3076B6' },
				{ socialName: 'GitHub', url: 'https://github.com/Jkerdley', color: '#314645' },
			],
			text: 'Креативный frontend разработчик, увлеченный UI, анимациями и программированием. Стремлюсь к гармонии между искусством и технологиями. Графический дизайнер и фотограф в прошлом.',
			makeInProject: [
				{ id: '1', text: 'Инициализация VITE проекта.' },
				{ id: '2', text: 'Подключение GitHub.' },
				{ id: '3', text: 'Создание layout (верстка).' },
				{ id: '5', text: 'Разработка архитектуры App.' },
				{ id: '7', text: 'Отрисовка интерфейса в Figma.' },
				{ id: '9', text: 'Создание компонента Карточка' },
				{ id: '8', text: 'Создание компонента Аватарка' },
				{ id: '10', text: 'Создание структуры базы данных' },
				{ id: '11', text: 'Функционал отрисовки компонентов с данными из db.js' },
				{ id: '12', text: 'Динамическая отрисовка компонентов' },
			],
			level: '79',
			skills: [
				{ name: 'HTML', color: '#399AD0', level: 74, type: 'line' },
				{ name: 'CSS', color: '#4539D0', level: 63, type: 'line' },
				{ name: 'JavaScript', color: '#D4C647', level: 72, type: 'line' },
				{ name: 'REACT', color: '#56B9E3', level: 68, type: 'line' },
				{ name: 'REDUX', color: '#214B5C', level: 56, type: 'line' },
				{ name: 'Backend', color: '#CA4151', level: 37, type: 'circle' },
				{ name: 'Frontend', color: '#64EAAA', level: 66, type: 'circle' },
			],
			ultimate: 'Interface',
			badge: [
				{ id: '001', title: 'TeamLead', type: BADGE_TYPE.DARK },
				{ id: '002', title: 'Designer', type: BADGE_TYPE.PRIMARY },
			],
			projects: [
				{
					id: '1',
					title: 'Dashboard UI',
					imageUrl: 'https://i.postimg.cc/0z2N6LpC/dashboardui.jpg',
					url: '',
				},
				{
					id: '2',
					title: 'Hackathon UI',
					imageUrl: 'https://i.postimg.cc/0b0M3Gkb/hackatonui.jpg',
					url: '',
				},
				{
					id: '3',
					title: 'Kinopoisk RU',
					imageUrl: 'https://i.postimg.cc/hJXPsTZz/kinopoinsui.jpg',
					url: 'https://kinopoisk.ru',
				},
				{
					id: '4',
					title: 'OZON Frontend',
					imageUrl: 'https://i.postimg.cc/hJN45vNC/ozonui.jpg',
					url: 'https://ozon.ru',
				},
			],
		},
		{
			id: '2',
			name: 'Эрдэни Чимитов',
			years: '41',
			profession: 'FRONTEND DEVELOPER',
			avatar: EmranAvatar,
			socialLinks: [
				{ socialName: 'Telegram', url: 'https://t.me/erdenich', color: '#399AD0' },
				{ socialName: 'ВК', url: 'https://vk.com/erdeniru', color: '#399AD0' },
			],
			text: 'Обучаюсь на курсе Frontend-разработчик уровня Junior. Знаю основы HTML, CSS и JavaScript. Изучаю React и основы Redux. Мне нравиться программировать и заниматься саморазвитием',
			makeInProject: [
				{ id: '1', text: 'Создание компонентов Input' },
				{ id: '2', text: 'Разработка компонента Progress' },
				{ id: '3', text: 'Разработка компонента Slider' },
				{ id: '4', text: 'Разработка компонента Badge' },
				{ id: '5', text: 'Разработка компонента Offer.' },
				{ id: '5', text: 'Разработка компонента Button.' },
			],
			level: '73',
			skills: [
				{ name: 'HTML', color: '#399AD0', level: 75, type: 'line' },
				{ name: 'CSS', color: '#4539D0', level: 60, type: 'line' },
				{ name: 'JavaScript', color: '#D4C647', level: 80, type: 'line' },
				{ name: 'REACT', color: '#56B9E3', level: 87, type: 'line' },
				{ name: 'REDUX', color: '#214B5C', level: 66, type: 'line' },
				{ name: 'Backend', color: '#CA4151', level: 37, type: 'circle' },
				{ name: 'Frontend', color: '#64EAAA', level: 73, type: 'circle' },
			],
			ultimate: 'Interface',
			badge: [{ id: '001', title: 'FrontendBeast', type: BADGE_TYPE.DANGER }],
			projects: [
				{
					id: '1',
					title: 'Игра "Крестики-Нолики"',
					imageUrl: 'https://i.postimg.cc/1VQmyTmw/emran3.jpg',
					url: 'https://github.com/erdeniru/my-tic-tac-toe',
				},
				{
					id: '2',
					title: 'Приложение "Список задач"',
					imageUrl: 'https://i.postimg.cc/cv9LfXhG/emran2.jpg',
					url: 'https://github.com/erdeniru/my-todos',
				},
				{
					id: '3',
					title: 'Приложение "Учет доходов и расходов"',
					imageUrl: 'https://i.postimg.cc/MMRZ2xSz/emran1.jpg',
					url: 'https://codesandbox.io/p/sandbox/my-finance-x2c6qg',
				},
				{
					id: '4',
					title: 'Hackathon UI',
					imageUrl: 'https://i.postimg.cc/0b0M3Gkb/hackatonui.jpg',
					url: '',
				},
			],
		},
		{
			id: '3',
			name: 'Андрей Пачалия',
			years: '35',
			profession: 'FRONTEND DEV | BACKEND',
			avatar: AndreiAvatar,
			socialLinks: [
				{ socialName: 'Twitter', url: 'twitter.com', color: '#52b7ee' },
				{ socialName: 'Telegram', url: 't.me/pachalia', color: '#399AD0' },
				{ socialName: 'Instagram', url: 'instagram.com', color: '#95305A' },
			],
			text: 'Frontend разработчик от бога',
			makeInProject: [
				{ id: '1', text: 'Реализовал Redux Store' },
				{ id: '2', text: 'Разработка архитектуры проекта' },
				{ id: '3', text: 'Создал компонент Избранное' },
				{ id: '4', text: 'Создал компонент BreadCrumbs' },
				{ id: '5', text: 'Добавил PropTypes' },
				{ id: '6', text: 'Оргиназовал роутинг' },
			],
			level: '88',
			skills: [
				{ name: 'HTML', color: '#399AD0', level: 94, type: 'line' },
				{ name: 'CSS', color: '#4539D0', level: 83, type: 'line' },
				{ name: 'JavaScript', color: '#D4C647', level: 87, type: 'line' },
				{ name: 'REACT', color: '#56B9E3', level: 78, type: 'line' },
				{ name: 'REDUX', color: '#214B5C', level: 81, type: 'line' },
				{ name: 'Backend', color: '#CA4151', level: 87, type: 'circle' },
				{ name: 'Frontend', color: '#64EAAA', level: 71, type: 'circle' },
			],
			ultimate: 'Interface',
			badge: [
				{ id: '001', title: 'FrontBoss', type: BADGE_TYPE.INFO },
				{ id: '002', title: 'BackMagic', type: BADGE_TYPE.WARNING },
			],
			projects: [
				{
					id: '1',
					title: 'Hackathon UI',
					imageUrl: 'https://i.postimg.cc/0b0M3Gkb/hackatonui.jpg',
					url: '',
				},
				{
					id: '2',
					title: 'Kinopoisk RU',
					imageUrl: 'https://i.postimg.cc/hJXPsTZz/kinopoinsui.jpg',
					url: 'https://kinopoisk.ru',
				},
				{
					id: '3',
					title: 'OZON Frontend',
					imageUrl: 'https://i.postimg.cc/hJN45vNC/ozonui.jpg',
					url: 'https://ozon.ru',
				},
			],
		},
	],
};
