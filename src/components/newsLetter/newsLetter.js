import React from "react";
import "./newsLetter.css";
import { SendOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";

const NewsLetter = () => {
  return (
    <>
      <div className="newsLetterBanner">
        <SendOutlined />
        <input type="text" placeholder="Your email address" />
        <Button className="bg-g">Subscribe</Button>
      </div>
    </>
  );
};

export default NewsLetter;
