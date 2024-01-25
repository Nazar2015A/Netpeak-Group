https://nazar2015a.github.io/Netpeak-Group/

STEPS FOR INSTALL PROJECT:

### `npm install`

### `npm start`

FOR TESTING: 

### `npm run test`


### `Цей проект містить в собі 4 (SPA) сторінки:`

1 - /female/the-goal
2 - /female/measure-yourself
3 - /female/destructive-behaviour
4 - /female/physical-exercise

Бібліотеки які містить цей проект: 
react-router-dom (для реалізації роутингу); 
eslint (для чистого коду);
framer-motion (для анімацій появи сторінок та drop-down); 
styled-components (для стилізації елементів).

Сторінки побудовані за допомогою "react-router-dom" та з використанням HashRouter замість звичайного BrowserRouter тому, що GitHub pages погано працює із ним і можу виникати помилки - Page Not Found

### `1` - При переході по шляху "/" (домашня сторінка) за допомогою Navigate перенаправляє на /female/the-goal (стартова сторінка проекту).

1.1 - На кожні сторінці є навігація (Navbar), в якому є іконка для повернення на попередню сторінку (за допомогою useNavigate).

1.2 - Кожна сторінка появляється із анімацією за допомогою framer-motion.

1.3 - На першій сторінці (/female/the-goal) при кліку на одну із карточок, автоматично перенаправляє на слідуючу сторінку (/female/measure-yourself),та в залежності від натисненої карточки цей вибір записується в useContext (це поле goal).

### `2` - На другій сторінці (/female/measure-yourself) одразу появляється drop-down в який можна записати height та currentHeight, та обрати значення (imperial чи metric). Також можна приховати drop-down натиснувши на активне значення.

2.1 - При кліку на кнопку Continue, автоматично перенаправляє на слідуючу сторінку (/female/destructive-behaviour), та в залежності від обраного значення (imperial чи metric) записує вибір в useContext (imperialHeight, imperialCurrentHeight, metricHeight, metricCurrentHeight).

### `3` - На третій сторінці (/female/destructive-behaviour) можна вибрати декілька карточок (активні карточки мають темніший background), та вона автоматично запишуться в useContext (behaviours: []).

3.1 Також можна деактивовувати каточки (якщо карточка активна і натиснути на неї вона деактивуєтсья).

3.2 - При кліку на кнопку Continue автоматично перенаправляє на останню сторінку (/female/physical-exercise).

### `4` - На останній сторінці (/female/physical-exercise) можна вибрати тільки одну карточку, та вибрана карточка запишеться в useContext (physicalExercise).

### `4.1` Свій вибір можна змінити просто натиснувши на іншу карточку.

### `5` - При перевірці продуктивності за допомогою Lighthouse Performance Audit було досягнуто 95-100 ефективності.
### `6` - Також було написано тести за допомогою Jest та React Testing Library для всіх сторінок.
