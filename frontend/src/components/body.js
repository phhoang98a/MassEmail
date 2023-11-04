/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../styles/body.css';
import React, { useEffect, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import EmailIcon from '@mui/icons-material/Email';
import TableMail from './tableMail';
import Mail from './mail';
import Instruction from './instruction';
import { extractEmail } from '../services/api';
const Body = () => {
  // eslint-disable-next-line no-unused-vars
  const [link, setLink] = useState("https://www.linkedin.com/posts/hoangphan7298_this-post-is-used-for-testing-activity-7047484222587990016-H3r-?utm_source=share&utm_medium=member_desktop");
  const [processing, setProcessing] = useState(false);
  const [emails, setEmails] = useState([]);
  const [toEmails, setToEmails] = useState([]);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const handleExtractEmail = async () => {
    setProcessing(true);
    const response = await extractEmail(link);
    let emailList = [];
    for (let i=0; i<response.emails.length;i++)
      emailList.push({id:i+1, email: response.emails[i]})
    setEmails(emailList);
    setProcessing(false);
  }


  return (
    <>
      <Box sx={{
        backgroundImage: 'url(https://source.unsplash.com/random/1920x1080/?country)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        height: "100vh",
      }}>
        <Box className="main-body">
          <Box sx={{ fontSize: "55px", fontWeight: "bold", color: "rgb(255, 99, 71)" }}>
            Mass Email
            <EmailIcon fontSize='medium' />
          </Box>
          <Box>
            <TextField id="outlined-basic" label="Linkedin Post URL" value={link} onChange={(e) => setLink(e.target.value)} sx={{ marginTop: "30px", width: "70%", fontFamily: "Courier New, monospace" }} />
          </Box>
          {
            processing ?
            <Button variant="contained" sx={{ marginTop: "20px", marginBottom: "20px", borderRadius: "12px" }}>
              <CircularProgress sx={{ marginRight: "20px", color: "white" }} size="1rem" />
              Extracting...
            </Button>:
            <Button variant="contained" onClick={handleExtractEmail} sx={{ marginTop: "20px", marginBottom: "20px",  backgroundColor: "rgb(255, 99, 71)", borderRadius: "12px" }}>Extract Email</Button>
          }
          {
            emails.length>0 &&
            <>
              <TableMail emails={emails} setToEmails={setToEmails}></TableMail>
              <Mail toEmails={toEmails}></Mail>
            </>
            // : <Instruction/>

          }
        </Box>
        
      </Box>
    </>
  );
};

export default Body;
