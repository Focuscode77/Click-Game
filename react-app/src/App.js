import React, { Component } from 'react';
import "./friendstyles.css";


class App extends Component {

  state = {
    clickedfriends: [],
    score:0,
    roundEnd : false,


    friends: [
      {

        gif: require("../src/gifs/2DA16715-0291-4972-B6E1-144A364ED43E_4_5005_c.jpeg"),
        id: 1

      },

      {

        gif: require("../src/gifs/A6F3505F-A08D-4D11-BC2D-4D7E445BDDBB.jpeg"),
        id: 2
      },

      {

        gif: require("../src/gifs/D7A9F136-8F39-4AB4-90D7-4B7FB3C8CF68_4_5005_c.jpeg"),
        id: 3
      }
    ]

  }

  onClick = (id)=> {
  let{clickedfriends, score, friends} = this.state;
  if(clickedfriends.includes(id)){
    console.log("you lost");
    console.log(score)
    clickedfriends = []
    score = 0

  }else{
    console.log(score)
   console.log("you win"); 
   score++
   clickedfriends.push(id)
  }



 let friendCount = friends.length;
 let friendSelected;
 let temp;

 while(friendCount > 0){

friendSelected = Math.floor(Math.random() * friendCount);
friendCount--;
temp = friends[friendCount];
friends[friendCount] = friends[friendSelected];
friends[friendSelected] = temp;

 }

 this.setState({
   clickedfriends,
   score,
   friends
 });
  };



  render() {

    console.log(this.state)
    return (
      <div className="App">

        <h1>Clicky Friends!</h1>
        <p>Click all the friends no duplicates allowed!</p>
        <div className="friend-zone">
          { this.state.friends.map(friend => <img onClick={()=> this.onClick(friend.id)} key = {friend.id} src= 
          {friend.gif} alt="placeholder"></img>)
          }
        </div>



      </div>

    );
  }
}

export default App;
