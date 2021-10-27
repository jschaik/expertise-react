//import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";
import { useState } from "react";

function App() {
  const message = "dit is mijn vijfde bericht";
  const [name, setName] = useState("Kees");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <CreateTweet
        textInput={textInput}
        setTextInput={setTextInput}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetList name={name} tweets={tweets} />
    </div>
  );
}

export default App;
