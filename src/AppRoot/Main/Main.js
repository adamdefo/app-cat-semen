import './Main.scss'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

const Data = `<dl>
  <dd>
    <dr></dr>
    <dr></dr>
  </dd>
  <dd>
    <dr></dr>
    <dr></dr>
    <dr></dr>
  </dd>
  <dd>
    <dr></dr>
  </dd>
  <dd>
    <dr></dr>
  </dd>
</dl>
`;

function func() {
  console.log('func');
}

// const dispatch = useDispatch();

const Main = function() {
  
  console.log('Main');
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

  return (
    <>
      <div className="title">Main</div>
      <div className="task">
        Task
        <button onClick={ev => {
          ev.preventDefault()
          ev.stopPropagation()
          onToggleMode(isOn)
        }}>{ isOn ? 'ON' : 'OFF' }</button>
      </div>
    </>
  );
}

export default Main;
