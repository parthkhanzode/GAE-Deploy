# GAE-Deploy
Overview
This project demonstrates deploying a static web application using Google App Engine (GAE) on Google Cloud Platform (GCP). It covers setting up the Google Cloud SDK, preparing required configuration files, and deploying the web app using the Google Cloud CLI.

Technologies Used
Google Cloud Platform (GCP)

Google App Engine (GAE)

Google Cloud SDK & CLI

HTML, CSS, JavaScript

Node.js (optional, if backend scripts are used)

Project Structure
pgsql
Copy
Edit
project-folder/
│
├── app.js
├── app.yaml
├── package.json
├── index.html
├── script.js
└── style.css
Steps to Run
1. Setup Google Cloud
Create an account at Google Cloud.

Install the Google Cloud SDK → Install Guide.

Run the following command to log in and set up the project:

bash
Copy
Edit
gcloud init
2. Create and Configure Project
Create a new project in the GCP console or via CLI.

Assign "Storage Admin" permission to your project.

3. Deploy the Application
Open your terminal and navigate to your project directory:

bash
Copy
Edit
cd path/to/project-folder
Deploy the application:

bash
Copy
Edit
gcloud app deploy
Open the deployed application in your browser:

bash
Copy
Edit
gcloud app browse
Output
Once deployed, the application will be accessible via a public GCP URL, displaying your static webpage.
