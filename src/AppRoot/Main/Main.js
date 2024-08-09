import './Main.scss'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import json from "./response.json";

function func() {
  console.log('func');
}

// const dispatch = useDispatch();

const Main = function() {
  const user = useSelector((state) => state.auth.user);
  if (user) {
    console.log(user);
  }
  
  const [isOn, setIsOn] = useState(false);
  function onToggleMode(v) {
    // console.log(v, Data);
    // func();
    setIsOn(!v);
  }

  function run() {
    console.clear();
    // console.log('main:run', json.xml);
    const xml = json.xml;
    const length = json.xml.length;
    console.log('main:run.length', length);
    let laquo = '<';
    let raquo = '>';
    let laquoCount = 0;
    let raquoCount = 0;
    let tagList = [];
    let tag = '';
    let currentSymbol = null;
    let nextLetter = '';

    for (let i = 0; i < length; i++) {
      currentSymbol = xml[i];
      // console.log(xml[i]);
      if (currentSymbol === laquo) {
        laquoCount++;
      } else if (currentSymbol !== raquo) {
        tag += currentSymbol;
      } else {
        if (currentSymbol === '/') {
          return;
        }
        if (tag) {
          console.log(tag);
        }
        
        if (!tagList.includes(tag)) {
          tagList.push(tag);
        }
        tag = '';
        raquoCount++;
      }
    }
    
    console.log(laquoCount, raquoCount);
    if (laquoCount !== raquoCount || laquoCount % 2 || raquoCount % 2) {
      console.warn('Есть незакрытые кавычки или нет закрывающего тэга');
      if (laquoCount % 2) {
        console.warn('Не хватает <');
      }
      if (raquoCount % 2) {
        console.warn('Не хватает >');
      }
      return;
    }

    const filteredTagList = tagList.filter(item => item.indexOf('/') < 0)
    console.log(filteredTagList);
  }

  run();

  return (
    <>
      <button className="btn" onClick={run}>Run</button>
      <div className="title">Main</div>
      <div className="switch-mode">
        <button className="btn" onClick={ev => {
          ev.preventDefault()
          ev.stopPropagation()
          onToggleMode(isOn)
        }}>{ isOn ? 'ON' : 'OFF' }</button>
      </div>
    </>
  );
}

export default Main;
