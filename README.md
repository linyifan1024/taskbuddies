# Task Buddies

Task Buddies is a web application that allows users to create and participate in ephemeral tasks where participants need to check in daily. If a user fails to check in for a day, they will be automatically removed from the task.

## Features

- **Task Creation**: Users can create ephemeral tasks, specifying the task's name, description, start date, end date, and daily actions required.

- **User Management**: Users can register, and registered users can join tasks. Each user can only participate in one task at a time.

- **Daily Check-Ins**: Users are required to post daily check-ins for the task. If a user fails to check in for a day, they will be marked as "not checked in."

- **Automatic Kick-Out**: Users who do not check in for a day will be automatically kicked out of the task. This applies to the task owner as well.

- **Task Completion**: Users can complete tasks successfully by checking in daily until the end date.

- **Task Expiration**: If a task has no active members left (everyone was kicked out), it will be automatically deactivated or deleted.

## Getting Started

Follow these instructions to set up and run Task Buddies on your local machine.

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running
- Git (optional)

### Installation

1. Clone the repository (or download the ZIP file and extract it):

   git clone https://github.com/yourusername/task-buddies.git

2. Navigate to the project directory:

   cd task-buddies

3. Install the project dependencies:

   npm install

### Configuration

1. Create a `.env` file in the project root and configure your environment variables:

   PORT=3000
   MONGODB_URI=mongodb://localhost/task-buddies

   Adjust the values as needed for your local setup.

2. Run the application:

   npm start

3. Open your web browser and access the application at http://localhost:3000.
