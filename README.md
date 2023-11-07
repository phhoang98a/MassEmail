# MassEmail

**MassEmail** is a web app used to extract and aggregate emails via LinkedIn posts and send them to all emails with a single mail action.

Watch the demo at: [Youtube](https://www.youtube.com/watch?v=Z7Y1aJDq2z8)

## Why did I build this?

Rather than texting each person to provide a document or job description, you can extract and aggregate emails via LinkedIn post and send them to all emails with a single mail action.

## How it works?

- Copy the link of your LinkedIn post which contains the comments including email information [Example](https://www.linkedin.com/posts/hoangphan7298_this-post-is-used-for-testing-activity-7047484222587990016-H3r-/?utm_source=share&utm_medium=member_desktop))
- Click the "Extract Email" button to extract the emails in the post
- Choose the email you want to send.
- Verify your email to use Amazon Email Service.
- If your email is verified successfully, you can fill in the content, add attachment files, and send emails.

## Technologies Used
- Reactjs and MUI for the frontend
- AWS lambda, API gateway, AWS email service, S3 storage
- Puppeteer for data crawling

- ## Env configure
   In your `/backend/.env` file:

   - Fill in `LINKEDIN_USERNAME` with your LinkedIn username
   - Fill in `LINKEDIN_PASSWORD` with your LinkedIn password
   - Fill in `AMAZON_ACCESS_KEY` with your Amazon access key
   - Fill in `AMAZON_SECRET_KEY` with your Amazon secret key
   - Fill in `S3_BUCKET_NAME` with your S3 bucket name

### Start the development server

   For backend and front end:

   ```bash
   npm install
   npm start 
   ```

### Function

- Provide the URL of LinkedIn post to extract the email data

![](https://firebasestorage.googleapis.com/v0/b/engpronun-d85fd.appspot.com/o/document%2FScreenshot%202023-11-05%20at%2012.13.18%20PM.png?alt=media&token=5595aa05-dfe1-47a1-abf0-3ee6070a35b7&_gl=1*17cvr58*_ga*MTU5Mzc3MDQwMy4xNjk0NjYyMzI5*_ga_CW55HF8NVT*MTY5OTIwODE2NC4yMS4xLjE2OTkyMDg1MzQuNTIuMC4w)

- Choose the emails that you want to send the emails and fill in your email.

![](https://firebasestorage.googleapis.com/v0/b/engpronun-d85fd.appspot.com/o/document%2FScreenshot%202023-11-05%20at%2012.14.57%20PM.png?alt=media&token=23162cc5-5a40-4d9d-822d-d13638b98c49&_gl=1*1bkp7aj*_ga*MTU5Mzc3MDQwMy4xNjk0NjYyMzI5*_ga_CW55HF8NVT*MTY5OTIwODE2NC4yMS4xLjE2OTkyMDg1OTkuNjAuMC4w)

- If your email has not been verified before, you will receive a verified email to use Aws SES service.

![](https://firebasestorage.googleapis.com/v0/b/engpronun-d85fd.appspot.com/o/document%2FScreenshot%202023-11-05%20at%2012.17.42%20PM.png?alt=media&token=50a9c860-d9dc-425a-b7c6-a813d1d59c1c&_gl=1*sv95y8*_ga*MTU5Mzc3MDQwMy4xNjk0NjYyMzI5*_ga_CW55HF8NVT*MTY5OTIwODE2NC4yMS4xLjE2OTkyMDg3MDIuNTguMC4w)

- You can upload the attached files and send emails to chosen people 

![](https://firebasestorage.googleapis.com/v0/b/engpronun-d85fd.appspot.com/o/document%2FScreenshot%202023-11-05%20at%2012.18.21%20PM.png?alt=media&token=0568c6d9-2a3e-4523-a013-c162ff830ea7&_gl=1*1ddtz1f*_ga*MTU5Mzc3MDQwMy4xNjk0NjYyMzI5*_ga_CW55HF8NVT*MTY5OTIwODE2NC4yMS4xLjE2OTkyMDg3NzguNjAuMC4w)

![](https://firebasestorage.googleapis.com/v0/b/engpronun-d85fd.appspot.com/o/document%2FScreenshot%202023-11-05%20at%2012.19.01%20PM.png?alt=media&token=7148f5cb-4556-423a-8f65-ba9b01c5efc5&_gl=1*ebn4n6*_ga*MTU5Mzc3MDQwMy4xNjk0NjYyMzI5*_ga_CW55HF8NVT*MTY5OTIwODE2NC4yMS4xLjE2OTkyMDg4MDUuMzMuMC4w)

 
