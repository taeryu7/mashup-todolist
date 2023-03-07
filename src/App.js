
/*
페이지의 배경 색상을 설정하려면 body 태그에 CSS 를 적용해주면 되는데, index.css 에서 해도 무방하다.
만약에 styled-components 를 사용해서 적용을 하고 싶을때에 대한 설명이다.

styled-components 에서 특정 컴포넌트를 만들어서 스타일링 하는게 아니라 글로벌 스타일을 추가하고 싶을 땐 createGlobalStyle 이라는 것을 사용.
→ https://styled-components.com/docs/api#createglobalstyle
이 함수를 사용하면 컴포넌트가 만들어지는데, 이 컴포넌트를 렌더링하면 된다.
*/
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;