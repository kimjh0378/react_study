import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Detail from './Detail';
import App2 from './App2';

function App() {
  // const [변수명, 변경함수] = useState(초기값);
  // useXXX : 리액트 내장함수 (리액트 훅)
  const[title, setTitle] = useState('상품목록');

  const [board, setboard] = useState([
    {
      title : 'React',
      data : '2025-07-15',
      like : 0
    },
    {
      title : 'HTML',
      data : '2025-07-16',
      like : 0
    },
    {
      title : 'CSS',
      data : '2025-07-13',
      like : 0
    },
  ])


  const[boardTitle, setBoardTitle] = useState(['React', 'HTML', 'CSS']);
  const[like, setLike]= useState([0,0,0]);

  const [show, setShow] = useState(false);

  // 몇번쨰 게시글을 클릭한지 저장
  const [titleIndex, settitleIndex] = useState(0);

  //새로운글작성 제목을 기억하는 스테이트
  const [newTitle, setNewTiltle] = useState('');

  console.log(newTitle)



  let arr = [1,2,3,4,5];


  //누를때 마다 늘릴 함수
  function change() {
    setLike(like+1);
  }

 


  return (
    
    <div className='App'>

      <App2 />
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
              <button onClick={()=> {
                let _boardTitle = [...boardTitle];
                _boardTitle.splice(i, 1);
                setBoardTitle(_boardTitle);

                let _like = [...like];
                _like.splice(1, 1);
                setLike(_like);

              }}>삭제</button>
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
        
        <br />
        
        <input type="text" value={newTitle} onInput={(e) => {
          setNewTiltle(e.target.value);
        }} />
        <button onClick={() => {
          if( newTitle == '') {
            alert('제목을 입력하셔야 합니다')
            return;
          }

          let _boardTitle = [...boardTitle];
          _boardTitle.push(newTitle);

          setBoardTitle(_boardTitle);

          let _like = [...like];
          _like.push(0);
          setLike(_like);

          setNewTiltle('');
        }}>글작성</button>


      
    </div>
  )
}

export default App;
