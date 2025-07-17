import { useRef, useState } from "react";

function App2() {
 
    const [board, setBoard] = useState([
    {
      title : 'React',
      date : '2025-07-15',
      like : 0
    },
    {
      title : 'HTML',
      date : '2025-07-16',
      like : 0
    },
    {
      title : 'CSS',
      date : '2025-07-13',
      like : 0
    },
  ]);

  const [newTitle, setNewTiltle] = useState();

  const refNew = useRef();

  
  return (
    <div>
      {
        board.map((data, i) => {
          return(

          <div className="list" key={i}>
            <h4>
              {data.title}
              <span onClick={()=> {
                // 스마일 이모지 누를때 마다  옆에 버튼 like가 올라감
                let _board = [...board];
                _board[i].like =_board[i].like + 1

                console.log(_board)

                setBoard(_board)


              }} >😁</span><span>{data.like}</span>
            </h4>
            <p>{data.date}</p>
            <button onClick={()=> {
              // 삭제버튼을 배열방에 있는 오브젝트를 삭제함
              let _board = [...board];
              _board.splice(i,1);  

              console.log(_board)



            }}>삭제</button>
          </div>
          )
        })
      }

      <input ref={refNew} type="text" onChange={(e)=> {

      setNewTiltle(e.target.value);
      }} />
      <button onClick={() => {
        let now = new Date();
        let date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();

        let newData = {
          title: newTitle,
          date: date,
          like:0
        }

        let _board = [...board];

        _board.push(newData);

        setBoard(_board)


        refNew.current.value = '';

      }}>추가</button>

    </div>
    
  )
 
}
  
export default App2;