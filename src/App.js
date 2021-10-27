//import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import {useState} from 'react';

function App() {
  const message = "dit is mijn vijfde bericht";
  const name = "Mike";

  return (
    <div>
      <CreateTweet />
     <TweetList name={name} message={message}/>
    </div>
  );
}


export default App;
