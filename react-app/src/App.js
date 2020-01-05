import React, { Component } from 'react';
import './friendstyles.css';
import Header from './components/Header';

class App extends Component {
  state = {
    clickedfriends: [],
    score: 0,
    roundEnd: false,

    friends: [
      {
        gif: require('../src/gifs/6EA0E064-4DCD-41D8-93D9-5A14B437E639_4_5005_c.jpeg'),
        id: 1
      },

      {
        gif: require('../src/gifs/9B584571-8956-41F2-9078-9EB122AFF51D_4_5005_c.jpeg'),
        id: 2
      },

      {
        gif: require('../src/gifs/D7A9F136-8F39-4AB4-90D7-4B7FB3C8CF68_4_5005_c.jpeg'),
        id: 3
      },
      {
        gif: require('../src/gifs/17DA3EE7-608C-499B-B8C9-E46410236148_4_5005_c.jpeg'),
        id: 4
      },
      {
        gif: require('../src/gifs/09ACEAE7-411B-4F6F-B58C-89C2DD4B6103_4_5005_c.jpeg'),
        id: 5
      }
    ]
  };

  onClick = id => {
    let { clickedfriends, score, friends } = this.state;
    if (clickedfriends.includes(id)) {
      console.log('you lost');
      console.log(score);
      clickedfriends = [];
      score = 0;
    } else {
      console.log(score);
      console.log('you win');
      score++;
      clickedfriends.push(id);
    }

    let friendCount = friends.length;
    let friendSelected;
    let temp;

    while (friendCount > 0) {
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
    console.log(this.state);
    return (
      <div className='App'>
        <Header></Header>

        <p>High Score:{this.state.score}</p>
        <div className='friend-zone'>
          {this.state.friends.map(friend => (
            <img
              onClick={() => this.onClick(friend.id)}
              key={friend.id}
              src={friend.gif}
              alt='placeholder'
            ></img>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
