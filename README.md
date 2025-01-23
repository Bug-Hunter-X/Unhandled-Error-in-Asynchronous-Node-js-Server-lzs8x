# Unhandled Error in Asynchronous Node.js Server

This repository demonstrates an unhandled error scenario in an asynchronous Node.js HTTP server.  The server crashes if an error occurs within the asynchronous request handling.  The solution demonstrates proper error handling to prevent this. 

## Bug

The `bug.js` file contains a server that simulates an asynchronous operation. If the URL is '/error', an error is thrown within the `setTimeout` callback.  Because this error is not caught, it causes the server to crash.

## Solution

The `bugSolution.js` file demonstrates a solution where the `server.on('error', ...)` event listener catches and logs the error, preventing the server from crashing.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Access `http://localhost:3000/error` in your browser.
4. Observe the server crash.
5. Run `node bugSolution.js`.
6. Access `http://localhost:3000/error` in your browser.
7. Observe that the server does not crash and logs the error to the console.