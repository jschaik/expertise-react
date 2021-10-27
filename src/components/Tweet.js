//arrow function
const Tweet = ({name, tweets}) => {
  return (
    <div className="tweet">
      <h1>{name}</h1>
      <h3>{tweets}</h3>
      <button>Like</button>
      <button>Delete</button>
    </div>
  );
};

export default Tweet;
