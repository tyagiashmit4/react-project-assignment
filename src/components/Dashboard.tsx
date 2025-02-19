import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Paper } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Paper elevation={3} style={{ padding: "2rem", borderRadius: "10px", textAlign: "center" }}>
        <Typography variant="h4" style={{ fontWeight: "bold" }} gutterBottom>
          Welcome to the app
        </Typography>
        <Typography variant="h6" gutterBottom>
          What would you like to do?
        </Typography>
        
        <div style={{ marginBottom: "1rem" }}>
          <Link to="/counter" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
              Go to Counter
            </Button>
          </Link>
          <Link to="/form" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
              Go to User Data Form
            </Button>
          </Link>
          <Link to="/editor" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
              Go to Rich Text Editor
            </Button>
          </Link>
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;
