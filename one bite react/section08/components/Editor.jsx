import { useRef, useState } from "react";
import "./Editor.css";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState(""); //사용자가 입력창에 입력하는 내용이 content에 저장
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => { //엔터키로 입력
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => { //추가 버튼 클릭시 onCreate 함수 호출
    if (content === "") { //입력하지 않은 경우 그냥 리턴
      inputRef.current.focus(); //입력하라는 의미로 인풋창에 포커싱
      return;
    }
    onCreate(content);
    setContent(""); // 데이터 추가하고 인풋창 초기화
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeydown}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;