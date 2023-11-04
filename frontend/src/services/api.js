
import axios from 'axios';
export async function extractEmail(link) {
  try {
    const { data }  = await axios.post("http://localhost:8080/extract-email", {link});
    return data; 
  } catch(e) {
    console.log(e);
  }
}

export async function verifyEmail(email) {
  try {
    const { data }  = await axios.post("https://6d5qn4knee.execute-api.us-east-2.amazonaws.com/prod/verify-email", {email});
    return data; 
  } catch(e) {
    console.log(e);
  }
}