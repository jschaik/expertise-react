//import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import {useState} from 'react';

function App() {
  const message = "dit is mijn vijfde bericht";
  const name = "Mike";

  const [count, setCount] = useState(4);

  const decrementCount = () => {
    setCount(count - 1);
  }

  const incrementCount = () => {
    setCount(count + 1);
  }
  return (
    // <div>
    //   <CreateTweet />
    //  <TweetList name={name} message={message}/>
    // </div>
    <> 
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}


export default App;
