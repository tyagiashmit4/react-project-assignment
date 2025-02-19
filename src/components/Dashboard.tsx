import React from "react";
import { Line } from "react-chartjs-2";
import { Button, Typography, Paper, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
 
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "User Activity",
        data: [12, 19, 3, 5, 2, 3, 10], 
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "User Activity Trend",
      },
    },
  };

  return (
    <div>
      <Paper elevation={3} style={{ padding: "2rem", borderRadius: "10px", textAlign: "center" }}>
        <Typography variant="h4" style={{ fontWeight: "bold" }} gutterBottom>
          Welcome to the app
        </Typography>
        <Typography variant="h6" gutterBottom>
          What would you like to do?
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Link to="/counter" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" fullWidth>
                Go to Counter
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/form" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" fullWidth>
                Go to User Data Form
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/editor" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" fullWidth>
                Go to Rich Text Editor
              </Button>
            </Link>
          </Grid>
        </Grid>

     
        <div style={{ marginTop: "2rem" }}>
          <Typography variant="h5" gutterBottom>
            User Profile Trends
          </Typography>
          <Line data={data} options={options} />
        </div>
      </Paper>
    </div>
  );
};

export default Dashboard;
