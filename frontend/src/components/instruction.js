/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../styles/body.css';
import React, { useEffect, useState } from 'react';
import { Box, Button, ListItem } from '@mui/material';

const Instruction = () => {

  return (
    <>
      <Box sx={{ color: "black" }}>
        <Box sx={{ fontSize: "25px", fontWeight: "bold", color: "rgb(255, 99, 71)" }}>
          Instruction
        </Box>
        <Box sx={{fontWeight: "bold"}}>
          Rather than texting each person to provide a document or job description, you can extract and aggregate emails via Linkedin post and send to all emails with a single mail action.
        </Box>
        <Box sx={{marginLeft: "20px"}}>
          <ListItem style={{ display: 'list-item' }}>
            Copy the link of your Linkedin post.
          </ListItem>
          <ListItem style={{ display: 'list-item' }}>
            Click <Button variant="contained" sx={{ backgroundColor: "rgb(255, 99, 71)", borderRadius: "12px" }}>Extract Email</Button> to extract the emails in the post.
          </ListItem>
          <ListItem style={{ display: 'list-item' }}>
            Click all emails or choose the email you want to sent.
          </ListItem>
          <ListItem style={{ display: 'list-item' }}>
            Verify your email to use Amazon Simple Email Service.
          </ListItem>
          <ListItem style={{ display: 'list-item' }}>
            If your email is verified successfully, you can fill in the content, add attachment files and send mails.
          </ListItem>
          <iframe
            width="70%"
            height="450"
            src="https://www.youtube.com/embed/Z7Y1aJDq2z8"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </Box>
      </Box >
    </>
  );
};

export default Instruction;
