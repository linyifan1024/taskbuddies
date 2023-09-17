# taskbuddies

task sharing plan

to run:
in two terminals run `npm i`
cd backend: `nodemon index.js`
cd task-buddies: `npm start`

backend:

1. connect to frontend using axios

database:

1. complete database scheme
2. create api for database logic
3. set up mongodb storage
4. deploy database into aws efs with org account(shared resource)

frontend:

1. tasks display page(brows task, join task(if user login))
2. specific task detail page for each task id
3. user info page, display username, completed task, on going task

userLogin:

1. set up google authentication login, or creating account option
