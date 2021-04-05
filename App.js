import React, { Component } from 'react';
import './App.css';


const data = [
  {id:'weirdhitsound', letter:'Q', src:'http://www.superluigibros.com/downloads/sounds/SNES/SMK/wav/weirdhitsound.wav'},
  {id:'superluigibros', letter:'W', src:'http://www.superluigibros.com/downloads/sounds/SNES/SMK/wav/thud1.wav'},
   {id:'Brk_Snr', letter:'E', src:'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'},
   {id:'punchy_kick_1', letter:'A', src:'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'},
   {id:'Heater', letter:'S', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
   {id:'Dsc_Oh', letter:'D', src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
   {id:'Kick_n_Hat', letter:'Z', src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
  {id:'RP4_KICK_1', letter:'X', src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
  {id:'Cev_H2', letter:'C', src:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
  
];

class DrumPad extends React.Component {
  componentDidMount(){
    document.addEventListener('keydown',this.handleKeyDown)
    window.focus()
  }
  componentWillUnmount(){
    document.addEventListener('keydown',this.handleKeyDown)
  }
  handleKeyDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()){
      this.audio.play()
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id)
    }
  }
  
handleClick = () => {
  this.audio.play();
  this.audio.currentTime = 0
  this.props.handleDisplay(this.props.id)
}
render(){
  return(
   
      <div class='drum-pad' id={this.props.id} onClick={this.handleClick} >
      <button class='col-xs-4'>{this.props.letter}</button>     
        <audio 
          ref={ref=>this.audio = ref} 
          className='clip' 
          src={this.props.src}
          id={this.props.letter}>
            
         </audio>
      </div>
     
  );
}
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      display:''
    }
  }
handleDisplay = display => this.setState({display});

render(){
  return(
      <div id='drum-machine'>
        <h1 class='text-center'>Display:<div id='display' class='text-center'>{this.state.display}</div></h1>
       <div id='drum-pads'>   
      {data.map(x=>(<DrumPad id={x.id} letter={x.letter} src={x.src} handleDisplay = {this.handleDisplay}/>))}
      </div>
      </div>
  );
}
}

export default App;
