//useState
import {useState} from 'react';

const CreateTweet = () => {
  
 const [textInput, setTextInput] = useState("");

 const userInputHandler = (e) => {
  setTextInput(e.target.value);
 }

    return (
      <form action="">
          <textarea value={textInput} onChange={userInputHandler} cols="30" rows="5"></textarea>
          <button>Submit</button>
          <h1 onClick={() => setTextInput("")}>{textInput}</h1>
      </form>
    );
  };
  
  export default CreateTweet;
  