import {Fragment} from 'react';

const App = () => {
  const name = "js";

  const style = { 
    backgroundColor : "orange",
    color : "white",
    height : "100px",
  };

  return (
  <>
  {/* 주석... */}
    
  <div className="subject" style={style}>
    첫번째 컴포넌트!!
  </div>
  <div style={{color: 'blue'}}>신나는, {name && name} 공부</div>
  {name === 'React' && <h1>아! 재밌다!</h1>}
  <input 
    //주석... 태그안에도 주석 쓸 수 있다 -> `줄개행 + //`
  type="text" />
  </>
  );
};

export default App;
