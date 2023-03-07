
// 이 컴포넌트에서는 오늘의 날짜, 요일, 그리고 남은 할 일 개수를 보여준다.
/*
이 컴포넌트에서는 TodoHeadBlock 안에 들어있는 내용들에 대하여 일일이 컴포넌트를 만드는 대신,
그냥 일반 HTML 태그를 사용하고 TodoHeadBlock 의 스타일에서 CSS Selector 를 사용하여 스타일링을 해주었다.

각각의 컴포넌트로 만들으셔도 상관 없지만, 이렇게 조건부 스타일링을 할 필요가 없고,
기능적으로도 크게 중요하지 않은 내용이라면 CSS Selector 를 사용하는 것도 좋은 방법이다.

이는 취향에 따라 갈릴수 있는 부분이니, 원한다면 각각의 컴포넌트로 만들어서 작업을 해도 된다.
*/
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  console.log(todos);
  return (
    <TodoHeadBlock>
      <h1>2019년 7월 10일</h1>
      <div className="day">수요일</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;