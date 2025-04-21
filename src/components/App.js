// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message); // `message` contains the image URL
      });
  }, []);

  return (
    <div className="App">
      {dogImage ? <img src={dogImage} alt="A Random Dog" /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
