# Simple Chat app built using ChatGPT

Prompt used: Please write a simple chat app using Node.js and Socket.io

## Basic Setup
Express.js for server, Socket.io for realtime communication, and plain HTML, CSS, JavaScript for frontend.

```bash
# Clone the git repo and cd into it
npm install # installs the dependencies
node server.js # starts the server
```
## Code Cleanup

ChatGPT puts everything together in a single file. We need to separate the code into different files. We will use the following structure:

1. Split `index.html` into 3 files, `index.html`, `style.css`, and `script.js`. 
2. Crate a `public` folder and put all these files there. 
3. In `server.js`, use `express.static` module for `/public` folder. (Line number 10)

## Emoji search

Replace the following words with emojis:

```json
{
  "react": "⚛️",
  "woah": "😮",
  "hey": "👋",
  "lol": "😂",
  "like": "❤️",
  "congratulations": "🎉"
}
```
