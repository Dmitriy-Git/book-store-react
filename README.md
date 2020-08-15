# Интернет-магазин книг.
Приложение для поиска нужной книги, сортировки книг по категориям. Для управления состоянием используется Redux. 
Также подключен Semantic UI React для создания компонентов.
Файловая структора состоит из actions, reducers, components and containers.
Для сортировки книг по категориям используется библиотека lodash.


[Посмотреть на GitHub Pages](https://dmitriy-git.github.io/book-store-react/)

Чтобы развернуть проект локально необходимо иметь установленные [Git](https://git-scm.com/) и [Node.js с NPM](https://nodejs.org/en/)

В консоле Git Bush выполните следующие команды:
```
git clone https://github.com/laka-vadim/webpack-praktikum.git # клонирует данный репозиторий
cd webpack-praktikum # переходим в папку репозитория
npm install # установит все зависимости из package.json
```

Далее выполним сборку или запустим локальный сервер разработки:
```
npm run start # режим разработки, поднимает dev сервер, следит за изменениями в файлах

# ИЛИ

npm run build # сборка проекта на продакшн

