import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import NavBar from "./components/NavBar";


class App extends Component {

  
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked_ids:[],
    score: 0,
    message: ""
  };

  // shuffle cards
  shuffle = () => {
    // randomize this.state.friends
    const friends = this.state.friends.sort( () => Math.random() - 0.5);

    this.setState({ friends });
  };
  
  // Evaluate click
  pickEval = id => {
    // storing the clicked_ids state in clicked_ids let
    let clicked_ids = this.state.clicked_ids;
    
    // checking clicked_ids array to see if it includes the id of the friend clicked
    if(clicked_ids.includes(id)){
      console.log("wrong!")
      this.setState({ clicked_ids: [], score: 0, message:  "Game Over!" });
    } else {    
      clicked_ids.push(id);
      this.setState({score: clicked_ids.length, message: "Keep Going"})
      if (this.state.score === 2){
        this.setState({ clicked_ids: [], score: 0, message:  "Winner Winner Chicken Dinner!" });
      }
    }

    


    // run shuffle cards here to limit our onClick prop to only one
    this.shuffle();

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    this.state.friends.sort( () => Math.random() - 0.5)
    return (
      <div className = "App">
      <NavBar 
        total = {this.state.score}
        message = {this.state.message}
      />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            handleClick = {this.pickEval}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
