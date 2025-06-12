# Cofre-Token Fullstack Project

This is a minimal full-stack project with a maintenance page, ready for deployment on DigitalOcean App Platform.

## Setup Instructions

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
    This command will automatically install dependencies for both the `/server` and `/client` directories.

2.  **Environment Variables:**
    The project includes a `.env` file with the following variables:
    ```
    PORT=8080
    CLIENT_BUILD=client/dist
    ```

3.  **Build Frontend:**
    ```bash
    npm run build
    ```
    This command builds the React frontend for production.

4.  **Start Production Server:**
    ```bash
    npm run start:server
    ```
    This starts the Node.js server, serving the built frontend.

## Development

To run the project in development mode (with hot-reloading for both server and client):

```bash
npm run start:dev
```