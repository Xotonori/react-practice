import React from 'react';
import './App.scss';
import Message from "./components/Message/Message";
import avatar from './components/Message/img/avatar.jpeg'


function App() {
    return (
        <div className="App">
            <Message
                avatarURL={avatar}
                name={'Aleksei D'}
                message={'Hello dudes, how r uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu?'}
            />
        </div>
    );
}

export default App;


// домашка от меня №1: создать проект и выложить на github:
//     - создать компоненту, которая красиво будет выводить ваше ФИО
// - *** создать компоненту, которая будет выводить текст,  стилизованно как в телеграмме (имя, текст, время, уголок)
// - не заливать на гит папку .idea (в этой папке настройки вашего вэбшторма, которые никому не нужны, эту папку заливают эгоисты, которые не хотят работать в команде)
// - все компоненты где есть реакт должны быть с расширением jsx, в том числе index, App
// - ну и Ctrl + Alt + L не забывайте нажимать чтоб красивый код был (это увеличивает скорость чтения кода и облегчает поиск ошибок)