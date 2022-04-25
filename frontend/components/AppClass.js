import React from 'react'
const initialState = {
  moves: 0,
  emailAddress: '',
  squares:[null,null,null,null,'B',null,null,null,null],
  coordinates: [2,2],
  input: '',
  message: '',
}


export default class AppClass extends React.Component {
  state = initialState;

  Reset = () => {
    this.setState({...this.state, squares:[null,null,null,null,'B',null,null,null,null], moves: 0, coordinates:[2,2], message: '', emailAddress: '', input: ''})
  }

  EmailInput = (evt) => {
    this.setState({
      ...this.state,
      input:evt.target.value,
      emailAddress:evt.target.value,
    })
  }

  newEmail = (i) => {
    const newMessage = this.state.input;
  const emailName = newMessage.split('@');
  i.preventDefault();
 if (this.state.input != ''){
  this.setState({...this.state, emailAddress:'', message:`${emailName[0]} win #${Math.ceil(Math.random()*100)}`, moves: 0, coordinates:[2,2], squares:[null,null,null,null,'B',null,null,null,null], input: ''})
 }
 else{
  this.setState({...this.state,message:'Ouch: email is required'})
 }
  }

  MoveUp = () => {
      if(this.state.squares[3]==='B'){
        this.setState({...this.state, squares:['B',null,null,null,null,null,null,null,null],moves:this.state.moves+1, coordinates:[1,1], message:''})
      }
      else if(this.state.squares[4]=== 'B'){
        this.setState({...this.state, squares:[null,'B',null,null,null,null,null,null,null],moves:this.state.moves+1, coordinates:[2,1], message:''})
      }
      else if(this.state.squares[5]=== 'B'){
        this.setState({...this.state, squares:[null,null,'B',null,null,null,null,null,null],moves:this.state.moves+1, coordinates:[3,1], message:''})
      }
      else if(this.state.squares[6]=== 'B'){
        this.setState({...this.state,squares:[null,null,null,'B',null,null,null,null,null],moves:this.state.moves+1, coordinates:[1,2],message:''})
      }
      else if(this.state.squares[7]==='B'){
        this.setState({...this.state, squares:[null,null,null,null,'B',null,null,null,null],moves:this.state.moves+1, coordinates:[2,2],message:''})
      }
      else if(this.state.squares[8]==='B'){
        this.setState({...this.state, squares:[null,null,null,null,null,'B',null,null,null],moves:this.state.moves+1, coordinates:[3,2],message:''})
      }
      else{
        return (this.state.squares, this.state.moves, this.state.coordinates, this.setState({...this.state, message: `You can't go up`}))
      }
  }

  MoveDown = () => {
    if (this.state.squares[0]=== 'B'){
      this.setState({...this.state, squares:[null,null,null,'B',null,null,null,null,null], moves:this.state.moves+1, coordinates:[1,2], message:''})
    }
    else if(this.state.squares[1]==='B'){
      this.setState({...this.state, squares:[null,null,null,null,'B',null,null,null,null], moves:this.state.moves+1, coordinates:[2,2],message:''})
    }
    else if(this.state.squares[2]==='B'){
      this.setState({...this.state,squares:[null,null,null,null,null,'B',null,null,null], moves: this.state.moves+1, coordinates:[3,2],message:''})
    }
    else if(this.state.squares[3]==='B'){
      this.setState({...this.state,squares:[null,null,null,null,null,null,'B',null,null], moves: this.state.moves+1, coordinates:[1,3],message:''})
    }
    else if(this.state.squares[4]==='B'){
      this.setState({...this.state, squares:[null,null,null,null,null,null,null,'B',null], moves: this.state.moves+1, coordinates:[2,3],message:''})
    }
    else if(this.state.squares[5]==='B'){
      this.setState({...this.state, squares: [null,null,null,null,null,null,null,null,'B'], moves: this.state.moves+1, coordinates:[3,3],message:''})
    }
    else{
      return(this.state.squares, this.state.moves,this.state.coordinates, this.setState({...this.state, message: `You can't go down`}))
    }
  }

  MoveLeft = () => {
    if(this.state.squares[1]=== 'B'){
      this.setState({...this.state, squares:['B',null,null,null,null,null,null,null,null], moves: this.state.moves+1, coordinates:[1,1],message:''})
    }
    else if(this.state.squares[2]=== 'B'){
      this.setState({...this.state, squares:[null,'B',null,null,null,null,null,null,null], moves: this.state.moves+1, coordinates:[2,1],message:''})
    }
    else if(this.state.squares[4]=== 'B'){
      this.setState({...this.state, squares:[null,null,null,'B',null,null,null,null,null], moves: this.state.moves+1, coordinates:[1,2],message:''})
    }
    else if(this.state.squares[5]=== 'B'){
      this.setState({...this.state, squares:[null,null,null,null,'B',null,null,null,null], moves: this.state.moves+1, coordinates:[2,2],message:''})
    }
    else if(this.state.squares[7]=== 'B'){
      this.setState({...this.state, squares:[null,null,null,null,null,null,'B',null,null], moves: this.state.moves+1, coordinates:[1,3],message:''})
    }
    else if(this.state.squares[8]=== 'B'){
      this.setState({...this.state, squares:[null,null,null,null,null,null,null,'B',null], moves: this.state.moves+1, coordinates:[2,3],message:''})
    }
    else{
      return(this.state.squares, this.state.moves,this.state.coordinates, this.setState({...this.state, message: `You can't go left`}))
    }
  }

  MoveRight = () => {
    if (this.state.squares[0]=== 'B'){
      this.setState({...this.state, squares:[null,'B',null,null,null,null,null,null,null],moves: this.state.moves+1, coordinates:[2,1],message:''})
    }
    else if(this.state.squares[1]=== 'B'){
      this.setState({...this.state, squares:[null,null,'B',null,null,null,null,null,null], moves: this.state.moves+1, coordinates:[3,1],message:''})
    }
    else if(this.state.squares[3]=== 'B'){
      this.setState({...this.state, squares:[null,null,null,null,'B',null,null,null,null], moves: this.state.moves+1, coordinates:[2,2],message:''})
    }
    else if(this.state.squares[4]=== 'B'){
      this.setState({...this.state, squares:[null,null,null,null,null,'B',null,null,null], moves: this.state.moves+1, coordinates:[3,2],message:''})
    }
    else if(this.state.squares[6]=== 'B'){
      this.setState({...this.state, squares:[null,null,null,null,null,null,null,'B',null], moves: this.state.moves+1, coordinates:[2,3],message:''})
    }
    else if(this.state.squares[7]=== 'B'){
      this.setState({...this.state, squares:[null,null,null,null,null,null,null,null,'B'], moves: this.state.moves+1, coordinates:[3,3],message:''})
    }
    else{
      return(this.state.squares, this.state.moves,this.state.coordinates, this.setState({...this.state, message: `You can't go right`}))
    }
  }
  
  render() {
    const { className } = this.props
    return (
      
      <div id="wrapper" className={className}>
        {console.log(this.state)}
        <div className="info">
          <h3 id="coordinates">Coordinates ({this.state.coordinates[0]}, {this.state.coordinates[1]})</h3>
          <h3 id="steps">You moved {this.state.moves}{` time${this.state.moves>1 ||this.state.moves===0? 's':''}`}</h3>
        </div>
        <div id="grid">
        <div className={`square${this.state.squares[0]? ' active': ''}`} id = 'square1'>{this.state.squares[0]}</div>
          <div className={`square${this.state.squares[1]? ' active': ''}`} id = 'square2'>{this.state.squares[1]}</div>
          <div className={`square${this.state.squares[2]? ' active': ''}`} id = 'square3'>{this.state.squares[2]}</div>
          <div className={`square${this.state.squares[3]? ' active': ''}`} id = 'square4'>{this.state.squares[3]}</div>
          <div className= {`square${this.state.squares[4]? ' active': ''}`} id = 'square5'>{this.state.squares[4]}</div>
          <div className={`square${this.state.squares[5]? ' active': ''}`} id = 'square6'>{this.state.squares[5]}</div>
          <div className= {`square${this.state.squares[6]? ' active': ''}`} id = 'square7'>{this.state.squares[6]}</div>
          <div className= {`square${this.state.squares[7]? ' active': ''}`} id = 'square8'>{this.state.squares[7]}</div>
          <div className= {`square${this.state.squares[8]? ' active': ''}`} id = 'square9'>{this.state.squares[8]}</div>
        </div>
        <div className="info">
          <h3 id="message">{this.state.message}</h3>
        </div>
        <div id="keypad">
        <button id="left" onClick={this.MoveLeft}>LEFT</button>
          <button id="up" onClick={this.MoveUp}>UP</button>
          <button id="right" onClick={this.MoveRight}>RIGHT</button>
          <button id="down"onClick={this.MoveDown}>DOWN</button>
          <button id="reset" onClick={this.Reset}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email" onChange={this.EmailInput}></input>
          <input id="submit" type="submit" onClick={this.newEmail}></input>
        </form>
      </div>
    )
  }
}
