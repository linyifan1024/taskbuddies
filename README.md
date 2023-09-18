# Squad Goals (not sure about the name yet)

Squad Task is a web application that allows users to create and participate in ephemeral Tasks where participants need to check in daily. If a user fails to check in for a day, they will be automatically removed from the Task.

## Features

- **Task Creation**: Users can create ephemeral Tasks, specifying the Task's name, description, start date, end date, and daily actions required.

- **User Management**: Users can register, and registered users can join Tasks. Each user can only participate in one Task at a time.

- **Daily Check-Ins**: Users are required to post daily check-ins for the Task. If a user fails to check in for a day, they will be marked as "not checked in."

- **Automatic Kick-Out**: Users who do not check in for a day will be automatically kicked out of the Task. This applies to the Task owner as well.

- **Task Completion**: Users can complete Tasks successfully by checking in daily until the end date.

- **Task Expiration**: If a Task has no active members left (everyone was kicked out), it will be automatically deactivated or deleted.

## Getting Started

Follow these instructions to set up and run Squad Task on your local machine.

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running
- Git (optional)

### Installation

1. Clone the repository (or download the ZIP file and extract it):

   git clone https://github.com/yourusername/Task-buddies.git

2. Navigate to the project directory:

   cd Task-buddies

3. Install the project dependencies:

   npm install

### Configuration


1. Run the application:

   npm start, mongod --dbpath ./mongodb-data, nodemon index.js

2. Open your web browser and access the application at http://localhost:3000.
