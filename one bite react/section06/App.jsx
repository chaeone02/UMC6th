//App.jsx
import './App.css'
import Viewer from "./components/Viewer";
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App() {

  const [count,setCount] = useState(0);
  const [input,setInput] = useState("");

  const isMount = useRef(false);


  //1. mount : deps로 빈배열 전달

  useEffect(()=>{
    console.log("mount");
  },[]);

  //2. update : deps 전달하지 않음 
  // & 레퍼런스 객체 하나 생성해서 플래그로써 사용

  useEffect(()=>{
    console.log("update");
  })

  useEffect(()=>{
    if(!isMount.current){
      isMount.current=true;
      return;
    }
    console.log("update");
    });

  //3. unmount :

  const onClickButton = (value) =>{
    setCount(count+value);
  };

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e)=>{
        setInput(e.target.value)
      }}/>
    </section>
    <section>
      <Viewer count={count}/>
      {count % 2 === 0 ? <Even/> : null}
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
    </div>
  );
}

export default App
