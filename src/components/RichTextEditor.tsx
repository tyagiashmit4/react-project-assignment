import React, { useEffect, useRef, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const RichTextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [userData, setUserData] = useState("");

  useEffect(() => {
    
    const savedContent = localStorage.getItem("editorContent");
    if (editorRef.current && savedContent) {
      editorRef.current.innerHTML = savedContent;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.length > 0) {
      const latestUser = users[users.length - 1]; 
      setUserData(`
        Name: ${latestUser.name}\n
        Email: ${latestUser.email}\n
        Address: ${latestUser.address}\n
        Phone: ${latestUser.phone}
      `);
    }
  }, []);

  const handleFormat = (command: string) => {
    document.execCommand(command, false, "");
    editorRef.current?.focus();
  };

  const saveContent = () => {
    if (editorRef.current) {
      localStorage.setItem("editorContent", editorRef.current.innerHTML);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Rich Text Editor
      </Typography>

      <div>
        <Button onClick={() => handleFormat("bold")}>Bold</Button>
        <Button onClick={() => handleFormat("italic")}>Italic</Button>
        <Button onClick={() => handleFormat("underline")}>Underline</Button>
        <Button onClick={() => handleFormat("insertUnorderedList")}>
          Bullet List
        </Button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        onInput={saveContent}
        style={{
          width: "100%",
          minHeight: "150px",
          border: "1px solid gray",
          padding: "10px",
          marginTop: "10px",
          outline: "none",
        }}
      />

      <Typography variant="h5" style={{ marginTop: "20px" }}>
        User Data:
      </Typography>
      <textarea
        value={userData}
        readOnly
        rows={4}
        style={{
          width: "100%",
          marginTop: "10px",
          padding: "10px",
          background: "#f4f4f4",
        }}
      />

      <Link to="/" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "20px" }}
        >
          Back to Dashboard
        </Button>
      </Link>
    </div>
  );
};

export default RichTextEditor;
