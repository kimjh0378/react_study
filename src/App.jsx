import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';

function App() {
  // const [변수명, 변경함수] = useState(초기값);
  // useXXX : 리액트 내장함수 (리액트 훅)
  const[title, setTitle] = useState('상품목록');
  const[boardTitle, setBoardTitle] = useState(['React', 'HTML', 'CSS']);
  const[like, setLike]= useState([0,0,0]);

  const [show, setShow] = useState(false);

  // 몇번쨰 게시글을 클릭한지 저장
  const [titleIndex, settitleIndex] = useState(0);



  let arr = [1,2,3,4,5];


  //누를때 마다 늘릴 함수
  function change() {
    setLike(like+1);
  }

 


  return (
    <div className='App'>
      <div className='nav'>
        <h3>{title}</h3>
      </div> 
      <button onClick={() => {
        setTitle('게시판');
      }}>제목바꾸기</button>

      {
        boardTitle.map((title, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setShow(!show)
                settitleIndex(i);
              }}>{title} <button onClick={(e) => {
                e.stopPropagation();

                let _like = [...like];
                _like[i] = _like[i] +1;
                setLike(_like);
              }}>좋아요</button> {like[i]} </h4>
              <p>2025-07-16</p>
            </div>
          )

        })
      }







      <button onClick={() => {
        let _boardTitle = [...boardTitle];
        _boardTitle[0] = 'java';

        setBoardTitle(_boardTitle);
      }}>첫번째 게시물 제목바꾸기</button>


      { 
      show ? <Detail 
      boardTitle={boardTitle}
       setBoardTitle={setBoardTitle}
        titleIndex={titleIndex}
        
        /> : '' 

      }
        
      
        
        
        


      
    </div>
  )
}

export default App
