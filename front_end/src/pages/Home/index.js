import React from 'react';
import Todo from '~/components/Todo';

const todoList = [
  {
    id: '1',
    name: 'Áo thun trơn',
    img: '',
  }
];

function Home() {
    return (
        <>
            <Todo todoList={todoList}/>
        </>
    );
}

export default Home;
