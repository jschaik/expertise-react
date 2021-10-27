//arrow function
const Tweet = ({name, message}) => {
  return (
    <div className="tweet">
      <h1>Tweet</h1>
      <h2>{name}</h2>
      <h3>{message}</h3>
      <button>Like</button>
      <button>Delete</button>
    </div>
  );
};

export default Tweet;
