/* eslint-disable no-async-promise-executor */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../styles/body.css';
import React, { useEffect, useState } from 'react';
import { Box, TextField, InputAdornment, Button, Snackbar, Alert } from '@mui/material';
import { verifyEmail } from '../services/api';
import { Editor } from '@tinymce/tinymce-react';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';

const Mail = ({ toEmails }) => {
  const [notification, setNotification] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const [errorType, setErrorType] = useState(true);
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const buttonSx = {
    backgroundColor: "rgb(255, 99, 71)",
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  const handleEditorChange = async (text) => {
    setContent(text);
  };

  const handleUpload = async (e) => {
    let fileList = e.target.files;
    for (let i = 0; i < fileList.length; i++) {
      setFiles(files => [...files, fileList[i]]);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const sendMail = async () => {
    if (email == "") {
      setErrorType(true);
      setOpen(true);
      setNotification("Please enter your email to send");
      return;
    }
    if (isValidate == false) {
      setErrorType(true);
      setOpen(true);
      setNotification("Please verify your email.");
      return;
    }
    if (subject == "" || content == "") {
      setErrorType(true);
      setOpen(true);
      setNotification("Please send this message without a subject or text in the body?");
      return;
    }
    if (toEmails.length == 0) {
      setErrorType(true);
      setOpen(true);
      setNotification("Please select at least one email to be sent");
      return;
    }
    setSuccess(false);
    setLoading(true);
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i])
    }
    for (let i = 0; i < toEmails.length; i++) {
      formData.append('emails', toEmails[i]['email'])
    }
    formData.append('content', content);
    formData.append('sender', email);
    formData.append('subject', subject)
    const { data } = await axios.post('http://localhost:8080/send-email', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    if (data.statusCode == 200) {
      setErrorType(false);
      setNotification("Emails were sent successfully");
    } else {
      setErrorType(true)
      setNotification("Emails were not sent");
    }
    setOpen(true);
    setSuccess(true);
    setLoading(false);
    setIsValidate(false);
  }

  const remove = async (name) => {
    setFiles(files.filter(x => x.name !== name));
  }

  const handleVerify = async () => {
    if (email == "") {
      setIsValidate(false);
      setErrorType(true)
      setNotification("Please fill in the email form");
    } else {
      // eslint-disable-next-line no-useless-escape
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(email)){
        const response = await verifyEmail(email);
        if (response.msg == "Email was not verified") {
          setIsValidate(false);
          setErrorType(true);
          setNotification("Your email was not verified in Amazon SES. Following the verification instructions sent to your email address and verify again here");
        } else {
          setIsValidate(true);
          setErrorType(false);
          setNotification("Your email was verified in Amazon SES.");
        }
      } else {
        setIsValidate(false);
        setErrorType(true)
        setNotification("Invalid email address");
      }
    }
    setOpen(true);
  };
  return (
    <>
      <Box >
        <Box>
          <TextField className='email' id="outlined-basic" label="Your email" onChange={(e) => setEmail(e.target.value)} sx={{ width: "50%", marginBottom: "10px", fontFamily: "Courier New, monospace" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button variant="contained" disabled={loading} sx={{ color: 'white', backgroundColor: 'rgb(64, 109, 89)' }} onClick={handleVerify} >Verify</Button>
                </InputAdornment>
              ),
            }} />
        </Box>
        {
          isValidate &&
          <>
            <Box>
              <TextField className='subject' id="outlined-basic" label="Subject" onChange={(e) => setSubject(e.target.value)} sx={{ width: "50%", fontFamily: "Courier New, monospace", marginBottom: "10px" }} />
            </Box>
            <Box>
              <Editor
                apiKey='81fdyoznezq2x6v6ijlrpwayx6eb5wcgzeplnniti3w5eadu'
                init={{
                  height: 600,
                  menubar: false,
                  config: {},
                  images_upload_credentials: true,
                  plugins: [
                    'advlist', 'autolink',
                    'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks',
                    'fullscreen', 'insertdatetime', 'media', 'table', 'help', 'wordcount'
                  ],
                  toolbar: `undo redo| link | fontfamily fontsize | bold italic underline | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist checklist outdent indent | help`,
                  image_title: true,
                  automatic_uploads: true,
                }}
                onEditorChange={handleEditorChange}
              />
              <Box style={{ marginTop: "10px" }}>
                <Button variant="contained" component="label" sx={{ fontSize: "12px" }} disabled={loading}>
                  <InsertLinkIcon fontSize='small' />
                  Upload attach files
                  <input hidden multiple type="file" onChange={handleUpload} />
                </Button>
                <Box sx={{ color: "black" }}>
                  {
                    files.length > 0 && files.map((file, index) => (
                      <>
                        <span>{file.name}</span>
                        <Button onClick={() => { remove(file.name) }}>
                          Remove
                        </Button>
                      </>
                    ))
                  }
                </Box>

              </Box>
              <Box style={{ marginTop: "5px", m: 1, position: 'relative' }}>
                <Button onClick={sendMail} variant="contained" sx={buttonSx} disabled={loading}>Send mail</Button>
                {loading && (
                  <CircularProgress
                    size={24}
                    sx={{
                      color: green[500],
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: '-12px',
                      marginLeft: '-12px',
                    }}
                  />
                )}
              </Box>
            </Box>
          </>
        }

      </Box>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {
          errorType ?
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {notification}
            </Alert> :
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              {notification}
            </Alert>
        }
      </Snackbar>
    </>
  );
};

export default Mail;
