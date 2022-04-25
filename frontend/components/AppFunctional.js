import React, {useState} from 'react'


export default function AppFunctional(props) {
  const [state, setState] = useState({
    moves: 0,
    emailAddress: '',
    squares:[null,null,null,null,'B',null,null,null,null],
    coordinates: [2,2],
    message: '',
    input: '',
  })

const  Reset = () => {
  setState({...state, squares:[null,null,null,null,'B',null,null,null,null], moves: 0, coordinates:[2,2], message:'', emailAddress: '', input: ''})
}

const EmailInput = (evt) => {
  setState({
    ...state,
    input:evt.target.value,
    emailAddress: evt.target.value,
  })
}

const newEmail = (i) => {
  const newMessage = state.input;
const emailName = newMessage.split('@');
i.preventDefault();
if (state.input != ''){
setState({...state, emailAddress:'', message:`${emailName[0]} win #${Math.ceil(Math.random()*100)}`, moves: 0, coordinates:[2,2], squares:[null,null,null,null,'B',null,null,null,null]})
}
else{
setState({...state,message:'Ouch: email is required'})
}
}

  const MoveUp = () =>{
  if(state.squares[3]==='B'){
    setState({...state, squares:['B',null,null,null,null,null,null,null,null],moves:state.moves+1, coordinates:[1,1], message:''})
  }
  else if(state.squares[4]=== 'B'){
    setState({...state, squares:[null,'B',null,null,null,null,null,null,null],moves:state.moves+1, coordinates:[2,1], message:''})
  }
  else if(state.squares[5]=== 'B'){
    setState({...state, squares:[null,null,'B',null,null,null,null,null,null],moves:state.moves+1, coordinates:[3,1], message:''})
  }
  else if(state.squares[6]=== 'B'){
    setState({...state,squares:[null,null,null,'B',null,null,null,null,null],moves:state.moves+1, coordinates:[1,2], message:''})
  }
  else if(state.squares[7]==='B'){
    setState({...state, squares:[null,null,null,null,'B',null,null,null,null],moves:state.moves+1, coordinates:[2,2], message:''})
  }
  else if(state.squares[8]==='B'){
    setState({...state, squares:[null,null,null,null,null,'B',null,null,null],moves:state.moves+1, coordinates:[3,2], message:''})
  }
  else{
    return (state.squares, state.moves, state.coordinates, setState({...state, message: `You can't go up`}))
  }  
 }

 const MoveDown = () => {
  if (state.squares[0]=== 'B'){
    setState({...state, squares:[null,null,null,'B',null,null,null,null,null], moves:state.moves+1, coordinates:[1,2], message:''})
  }
  else if(state.squares[1]==='B'){
    setState({...state, squares:[null,null,null,null,'B',null,null,null,null], moves:state.moves+1, coordinates:[2,2], message:''})
  }
  else if(state.squares[2]==='B'){
    setState({...state,squares:[null,null,null,null,null,'B',null,null,null], moves: state.moves+1, coordinates:[3,2], message:''})
  }
  else if(state.squares[3]==='B'){
    setState({...state,squares:[null,null,null,null,null,null,'B',null,null], moves: state.moves+1, coordinates:[1,3], message:''})
  }
  else if(state.squares[4]==='B'){
    setState({...state, squares:[null,null,null,null,null,null,null,'B',null], moves: state.moves+1, coordinates:[2,3], message:''})
  }
  else if(state.squares[5]==='B'){
    setState({...state, squares: [null,null,null,null,null,null,null,null,'B'], moves:state.moves+1, coordinates:[3,3],message:''})
  }
  else{
    return(state.squares, state.moves,state.coordinates, setState({...state, message: `You can't go down`}))
  }
}

const MoveLeft = () => {
  if(state.squares[1]=== 'B'){
    setState({...state, squares:['B',null,null,null,null,null,null,null,null], moves: state.moves+1, coordinates:[1,1], message:''})
  }
  else if(state.squares[2]=== 'B'){
    setState({...state, squares:[null,'B',null,null,null,null,null,null,null], moves: state.moves+1, coordinates:[2,1], message:''})
  }
  else if(state.squares[4]=== 'B'){
    setState({state, squares:[null,null,null,'B',null,null,null,null,null], moves: state.moves+1, coordinates:[1,2], message:''})
  }
  else if(state.squares[5]=== 'B'){
    setState({...state, squares:[null,null,null,null,'B',null,null,null,null], moves: state.moves+1, coordinates:[2,2],message:''})
  }
  else if(state.squares[7]=== 'B'){
    setState({...state, squares:[null,null,null,null,null,null,'B',null,null], moves: state.moves+1, coordinates:[1,3],message:''})
  }
  else if(state.squares[8]=== 'B'){
    setState({...state, squares:[null,null,null,null,null,null,null,'B',null], moves: state.moves+1, coordinates:[2,3],message:''})
  }
  else{
    return (state.squares, state.moves, state.coordinates, setState({...state, message: `You can't go left`}))
  }  
}

const MoveRight = () => {
  if (state.squares[0]=== 'B'){
    setState({...state, squares:[null,'B',null,null,null,null,null,null,null],moves: state.moves+1, coordinates:[2,1],message:''})
  }
  else if(state.squares[1]=== 'B'){
    setState({...state, squares:[null,null,'B',null,null,null,null,null,null], moves: state.moves+1, coordinates:[3,1],message:''})
  }
  else if(state.squares[3]=== 'B'){
    setState({...state, squares:[null,null,null,null,'B',null,null,null,null], moves: state.moves+1, coordinates:[2,2],message:''})
  }
  else if(state.squares[4]=== 'B'){
    setState({...state, squares:[null,null,null,null,null,'B',null,null,null], moves: state.moves+1, coordinates:[3,2],message:''})
  }
  else if(state.squares[6]=== 'B'){
    setState({...state, squares:[null,null,null,null,null,null,null,'B',null], moves: state.moves+1, coordinates:[2,3],message:''})
  }
  else if(state.squares[7]=== 'B'){
    setState({...state, squares:[null,null,null,null,null,null,null,null,'B'], moves: state.moves+1, coordinates:[3,3],message:''})
  }
  else{
    return (state.squares, state.moves, state.coordinates, setState({...state, message: `You can't go right`}))
  }  
}

  return (
    <div id="wrapper" className={props.className}>
      {console.log(state)}
      <div className="info">
          <h3 id="coordinates">Coordinates ({state.coordinates[0]}, {state.coordinates[1]})</h3>
          <h3 id="steps">You moved {state.moves}{` time${state.moves>1 ||state.moves===0? 's':''}`}</h3>
        </div>
        <div id="grid">
          <div className={`square${state.squares[0]? ' active': ''}`} id = 'square1'>{state.squares[0]}</div>
          <div className={`square${state.squares[1]? ' active': ''}`} id = 'square2'>{state.squares[1]}</div>
          <div className={`square${state.squares[2]? ' active': ''}`} id = 'square3'>{state.squares[2]}</div>
          <div className={`square${state.squares[3]? ' active': ''}`} id = 'square4'>{state.squares[3]}</div>
          <div className= {`square${state.squares[4]? ' active': ''}`} id = 'square5'>{state.squares[4]}</div>
          <div className={`square${state.squares[5]? ' active': ''}`} id = 'square6'>{state.squares[5]}</div>
          <div className= {`square${state.squares[6]? ' active': ''}`} id = 'square7'>{state.squares[6]}</div>
          <div className= {`square${state.squares[7]? ' active': ''}`} id = 'square8'>{state.squares[7]}</div>
          <div className= {`square${state.squares[8]? ' active': ''}`} id = 'square9'>{state.squares[8]}</div>
        </div>
        <div className="info">
          <h3 id="message">{state.message}</h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={MoveLeft}>LEFT</button>
          <button id="up" onClick={MoveUp}>UP</button>
          <button id="right" onClick={MoveRight}>RIGHT</button>
          <button id="down"onClick={MoveDown}>DOWN</button>
          <button id="reset" onClick={Reset}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email" onChange={EmailInput}></input>
          <input id="submit" type="submit" onClick={newEmail}></input>
        </form>
    </div>
  )
}
