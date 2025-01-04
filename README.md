# Book Search Engine

## Description

This application is a full-stack MERN book search engine that allows users to search for books via the Google Books API. Users can create accounts, search for books, and save their favorite books to their profile. The application has been refactored from a RESTful API to a GraphQL API built with Apollo Server.

## Features

- User authentication (signup/login)
- Book search functionality using Google Books API
- Save books to user profile
- View saved books
- Remove books from saved list
- Responsive design
- GraphQL API with Apollo Server

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- TypeScript
- Apollo Server
- GraphQL
- JSON Web Tokens
- Vite
- Tailwind CSS

## Installation

1. Clone the repository:
```
bashCopygit clone [repository-url]
```
2. Install dependencies for both server and client:

bash
```
# Install server dependencies
cd server
npm install

## Install client dependencies
cd ../client
npm install
```

3. Create a .env file in the server directory with your MongoDB URI and secret:

env
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
## Running the Application

1. Start the development server:

bash
```
# Start the server
cd server
npm run dev

## In a new terminal, start the client
cd client
npm run dev
```
2. Open your browser and navigate to:

- Client: http://localhost:5173
- GraphQL Playground: http://localhost:3001/graphql

## Usage

1. Sign Up/Login:

- Click the "Login/Sign Up" button in the navigation bar
- Create a new account or login with existing credentials

2. Search Books:

- Enter a search term in the search bar
- Click "Submit Search"
- Browse through the search results

3. Save Books:

- When logged in, click "Save This Book!" under any book to save it to your profile
- View saved books by clicking "See Your Books" in the navigation

4. View/Remove Saved Books:

- Navigate to "See Your Books" to view your saved books
- Click "Delete This Book!" to remove a book from your saved list

## API Endpoints

### GraphQL Queries
graphql
```
query {
  me {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
```
### GraphQL Mutations
graphql
```
mutation {
  login(email: String!, password: String!) {
    token
    user {
      _id
      username
    }
  }

  addUser(username: String!, email: String!, password: String!) {
    token
    user {
      _id
      username
    }
  }

  saveBook(bookData: BookInput!) {
    _id
    username
    savedBooks {
      bookId
      title
    }
  }

  removeBook(bookId: String!) {
    _id
    username
    savedBooks {
      bookId
      title
    }
  }
}
```

## Testing

The application includes a GraphQL Playground for testing queries and mutations:

1. Navigate to http://localhost:3001/graphql
2. Use the documentation explorer to view available queries and mutations
3. Test queries and mutations with the interactive interface

## Deployment
This application can be deployed to Render using the following steps:

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure environment variables:
- MONGODB_URI
- JWT_SECRET
4. Deploy the application

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Questions

For any questions email me at jakewalter080@gmail.com, or find me on GitHub @jakewalter080