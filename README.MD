Here's an updated version of the README file with separate usage instructions for the server and client repositories, including Docker instructions for the server:

---

# AI Assistant

## Overview

This AI Assistant offers a highly personalized user experience by remembering and utilizing the context of past interactions, enhancing natural conversation flow and efficiency in daily tasks. The project integrates a high-performance backend and an intuitive frontend, supporting up to 2000+ users while providing rapid, responsive interaction capabilities.

## Features

- **Context-Aware Interactions**: The assistant remembers past interactions, allowing for a natural, seamless conversation flow, making daily task management more efficient.
  
- **High-Performance Backend**: Built with Express.js and MongoDB, the backend is optimized to handle a large user base, ensuring scalability and reliability.

- **Intuitive User Interface**: The frontend, developed using React.js, offers a responsive and user-friendly experience, catering to both desktop and mobile users.

- **Google Gemini Integration**: Leveraging the power of Google Gemini, the assistant enhances user interaction capabilities, reducing customer inquiry resolution time to less than 2 minutes.

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, JavaScript, HTML, CSS
- **API Integration**: Google Gemini API
- **Containerization**: Docker

## Repositories

- **Server**: [AI Assistant Server Repository](https://github.com/pruthiraj-97/AI-Friend-Server.git)
- **Client**: [AI Assistant Client Repository](https://github.com/pruthiraj-97/Ai-Friend-client.git)

## Installation

### Server

1. **Clone the server repository**:
   ```bash
   git clone https://github.com/pruthiraj-97/AI-Friend-Server.git
   cd AI-Friend-Server
   start server node index.js
   ```

2. **Build and run the server with Docker**:
   ```bash
   docker pull pruthiraj/ai-friend-image
   docker run -d -p 4000:4000  pruthiraj/ai-friend-image
   ```

4. **Check the server**:
   The server should be running on `http://localhost:4000`.

### Client

1. **Clone the client repository**:
   ```bash
   git clone https://github.com/pruthiraj-97/Ai-Friend-client.git
   cd Ai-Friend-client
   ```

2. **Install client dependencies**:
   ```bash
   npm install
   ```

3. **Run the client**:
   ```bash
   npm run dev
   ```

4. **Access the client**:
   Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Personalized Interactions**: Start a conversation, and the assistant will remember your context, making follow-up interactions more intuitive and efficient.
  
- **Task Management**: Use the assistant to manage daily tasks quickly and effortlessly, leveraging its understanding of your past interactions.

- **Fast Inquiry Resolution**: Benefit from the seamless Google Gemini integration to get quick responses, with resolution times reduced to under 2 minutes.

## Contributing

We welcome contributions! Please submit pull requests or report issues to help improve the AI Assistant.


---

You can customize the repository links and any other details as needed.