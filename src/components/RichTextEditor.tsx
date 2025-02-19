import React, { useState } from "react";
import { Button, Typography, TextareaAutosize } from "@mui/material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <Helmet>
        <title>Rich Text Editor</title>
      </Helmet>
      <Typography variant="h4" gutterBottom>Rich Text Editor</Typography>
      <TextareaAutosize
        value={content}
        onChange={(e) => setContent(e.target.value)}
        minRows={6}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="secondary" style={{ marginTop: "20px" }}>
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default RichTextEditor;
