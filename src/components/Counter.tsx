import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div  style={{ background: `rgba(0,0,255,${count * 0.1})`, padding: "20px" }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)} style={{ margin: "5px" }}>
        Increment
      </Button>
      <Button variant="contained" color="primary" onClick={() => setCount(count - 1)} style={{ margin: "5px" }}>
        Decrement
      </Button>
      <Button variant="contained" color="primary" onClick={() => setCount(0)} style={{ margin: "5px" }}>
        Reset
      </Button>
      
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary" style={{ marginTop: "2px", marginLeft: "10px" }}>
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default Counter;
