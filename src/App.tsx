import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Container, Paper, Typography} from "@mui/material";
import Counter from "./components/Counter";
import UserDataForm from "./components/UserDataForm";
import RichTextEditor from "./components/RichTextEditor";
import Dashboard from "./components/Dashboard";
import AuthProvider  from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#f4f4f4",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Container maxWidth="md" style={{ marginTop: "2rem" }}>
            <Paper elevation={3} style={{ padding: "2rem", borderRadius: "10px" }}>
              <Typography variant="h4" align="center" gutterBottom>
                React App Assignment
              </Typography>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/counter" element={<Counter />} />
                <Route path="/form" element={<UserDataForm />} />
                <Route path="/editor" element={<RichTextEditor />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/counter" />} />
              </Routes>
            </Paper>
          </Container>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
