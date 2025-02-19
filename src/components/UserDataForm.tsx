import React, { useState } from "react";
import { Button, TextField, Typography, Alert } from "@mui/material";
import { Link } from "react-router-dom";

const UserDataForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    let newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    
    if (!formData.password) newErrors.password = "Password is required";
    else if (!validatePassword(formData.password)) newErrors.password = "Password must be at least 6 characters long";

    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (existingUsers.some((user: any) => user.email === formData.email)) {
      setMessage("Error: User with this email already exists!");
      return;
    }

    // Save user to localStorage
    const updatedUsers = [...existingUsers, formData];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("User added successfully!");

    // Reset form
    setFormData({ name: "", email: "", password: "", address: "", phone: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>User Data Form</Typography>

      {message && <Alert severity={message.startsWith("Error") ? "error" : "success"}>{message}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Name"
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          label="Password"
          fullWidth
          margin="normal"
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          name="address"
          value={formData.address}
          onChange={handleChange}
          label="Address"
          fullWidth
          margin="normal"
          error={!!errors.address}
          helperText={errors.address}
        />
        <TextField
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          label="Phone"
          fullWidth
          margin="normal"
          error={!!errors.phone}
          helperText={errors.phone}
        />

        <Button type="submit" variant="contained" color="primary" style={{ margin: "10px" }}>
          Save
        </Button>
      </form>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary" style={{ marginTop: "20px" }}>
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default UserDataForm;
