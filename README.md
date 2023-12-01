## Getting Started
To use this application, follow these steps to set up the project:

### 1. Start the Backend

```bash
cd server
```
```bash
npm i
```
```bash
npm run start:dev
```

### 2. Start the Frontend
```bash
cd client
```
```bash
npm i
```

```bash
npm start
```

# The UI part of the application is built using React, TypeScript, and Tailwind. The backend part of the application is implemented with Nest.js.



# In the backend section, there is a .env file containing the key used for encrypting user data to identify user messages.

Regarding the point:
1.6 "If using a secure WebSocket connection (wss://), ensure proper handling."
Since this is a test task to be sent in zip format, and as there is no need to deploy anywhere, using an SSL certificate for a more secure connection may be unnecessary for installation and local testing. Using a self-signed certificate would not be a convenient and optimal solution. In the future, during development and deployment, a signed SSL certificate can be added but at this stage, using Helmet on the server side for protection against XSS vulnerabilities would be sufficient.








