import { useState } from "react";
import { CiStar } from "react-icons/ci";
import "./App.css"


function App() {
  const [rating, setRating] = useState(0); 
  const [hoverRating, setHoverRating] = useState(0); 

  return (
  <>
  <h1 className="headline">Your Product</h1>
    <div className="card">
      <div >
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Product_Photography.jpg/2560px-Product_Photography.jpg" alt="" />
          <h1 >Nivea</h1>
          <h2 >Rating This Product </h2>
          <div className="rating ">
        {[...Array(5)].map((_, index) => {
          const currentRate = index + 1; 
          return (
            <CiStar
              key={index}
              size={50}
              onClick={() => setRating(currentRate)} 
              onMouseEnter={() => setHoverRating(currentRate)} 
              onMouseLeave={() => setHoverRating(0)} 
              color={currentRate <= (hoverRating || rating) ? "yellow" : "grey"} 
              
            />
          );
        })}
      </div>
      </div>
     
    </div>
  </>
  );
}

export default App;
