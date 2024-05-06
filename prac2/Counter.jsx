// counter컴포넌트 정의, usestate훅을 사용하여 count상태와 이를 변경하는 함수 선언
// 버튼을 2개 추가하여 count를 증감시킴
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };
  const onDecrease = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
};

export default Counter;