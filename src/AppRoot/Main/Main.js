import './Main.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authState.js';
import json from './response.json';
import { ENDPOINTS, http } from '../../services/api.service.ts';

const Main = function() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [password, setPassword] = useState('pass');

  useEffect(() => {
    console.log('Main');
  }, [password]);

  http(ENDPOINTS.LIST, null).then(resp => {
    console.log(resp);
  }).catch(err => console.error(err));

  const [isOn, setIsOn] = useState(false);
  function onToggleMode(v) {
    // console.log(v, Data);
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

  // run();

  function start() {
    console.log(user);
    dispatch(logIn({login: 'admin', password: 'admin'}));
    setPassword('admin');
  }

  return (
    <>
      <div className="title">Main</div>
      <div className="content center">
        <button className="btn btn_white" onClick={start}>Start</button>
      </div>
    </>
  );
}

export default Main;
