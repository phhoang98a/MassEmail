# MassEmail

**Speech** is a web app used to extract and aggregate emails via LinkedIn posts and send them to all emails with a single mail action.

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
