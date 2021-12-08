# Starting the Application

1. Start the Server
    - In the terminal run command: 'cd server'
    - Once in the server directory, run 'npm start'
    - Terminal should read: 'Listening to Port: 5000'

2. Start the Application
    - Navigate to the root directory (doctor-provider)
        - If currently in the server directory, use 'cd ..' to navigate back to the root directory
    - In the terminal, run 'npm start'

3. Running Unit Tests
    - Navigate to the root directory
    - Run 'npm test'

NOTES: 

This was fun to build!  I've named this case study "Doctor Provider".  For packages, I used Material UI in order to account for styling and web responsiveness, Express.js to set up the server on the backend (on Port 5000), Axios, for my asychronous call on the backend, CORS to resolve Cross Origin Errors, and Body-Parser to parse the Post Request.  

Backend work is organized in the 'server' directory, and frontend work is organized in the 'src' directory.  

EXTRAS:
I decided to incorporate the optional Pagination (page numbers are located at the bottom) to display 6 results to symmetrically fill out the webpage, and display the remaining 4 results on the next page (Maximum results returned were 10).

I also incorporated some basic Unit Tests on 'App.test.js'.