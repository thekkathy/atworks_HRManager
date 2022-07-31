# Instructions for Booting Application

## 1) Start JDK backend

- cd into the `server` folder
- Type `java -Dserver.port=8080 -jar kathy.jar` to start the back end

## 2) Start React.js front end

- cd into the `client` folder
- Type `npm start` in the console to start the front end
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Implemented Functionalities

- Can navigate to the home page with the home buttons in the navbar
- Can get a list of all users in the resource manager page and filter users with their name and type using the filter section
- Can display the list of all users with the "All Users" button after filtering
- When editing a user by clicking on the pencil icon:
    - The user's form is prepopulated with their data
    - Can see a list of all of that user's addresses
- Can delete a user when clicking on the trash icon

# Future Improvements

- Ran into issues with forms nor submitting: investigate the issue further to see what's going on so that add and edit users and adding addresses can work
- Add success or failure alerts depending on if API requests were successful or not
- Add a users profile page
- Implement login
