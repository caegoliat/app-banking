Banking App
Overview
This is a simple banking application built using modern technologies. The app allows users to create an account, deposit and withdraw money, and view the current account balance. The application is styled to look like a modern banking interface without using any third-party libraries for styling.

Technologies Used
React: A JavaScript library for building user interfaces.
Next.js: A React framework that enables server-side rendering and generating static websites.
Redux Toolkit: A library that simplifies the use of Redux for state management.
React Query: A data-fetching library for React.
TypeScript: A superset of JavaScript that adds static typing.
CSS: Custom styling without third-party libraries.
Getting Started
Prerequisites
Node.js (>= 12.0.0)
npm (>= 6.0.0) or yarn (>= 1.0.0)


INSTALLATION:

1. Clone the repository:
git clone https://github.com/your-username/banking-app.git
cd banking-app

2. Install the dependencies:
Copiar código
npm install
# or
yarn install


Running the App
Start the development server:
npm run dev
# or
yarn dev
Open your browser and go to http://localhost:3000 to see the application running.


Mock API
To simulate backend interactions, we use a mock API located in mocks/mockApi.ts.

Redux State Management
The global state is managed using Redux Toolkit. The store configuration is found in store/store.ts and the account-related state logic in store/accountSlice.ts.

Styling
The application is styled using custom CSS located in styles/globals.css. No third-party libraries are used for styling to maintain a modern and clean banking interface.