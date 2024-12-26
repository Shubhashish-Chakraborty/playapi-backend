# PlayAPI

PlayAPI is a dynamic and fun server-side application that provides a variety of content to users on demand. It has the ability to respond with quotes , jokes, user data, and much more. The server is designed to be extensible, allowing for the addition of new features and endpoints over time.

## Features

- **Retrieve All Jokes**: Fetch all jokes available in the database.
- **Fetch a Joke by ID**: Retrieve a specific joke using its unique ID.
- **Add New Jokes**: Add your own jokes to the database with proper validation.
- **Get a Random Joke**: Surprise yourself with a random joke from the database.
- **Retrieve Quotes**: Fetch inspirational quotes (planned feature).
- **Fetch User Data**: Retrieve information about users (planned feature).
- **Extensible Architecture**: Easily add more content types and features in the future.

---

## Endpoints

### 1. **Get All Jokes**
- **URL**: `/api/v1/jokes`
- **Method**: `GET`
- **Description**: Fetch all jokes from the database.
- **Response Example**:
  ```json
  [
    {
      "jokeNumber": 1,
      "content": "Why don’t skeletons fight each other? They don’t have the guts."
    },
    .
    .
  ]
  ```

### 2. **Get a Joke by ID**
- **URL**: `/api/v1/jokes/:id`
- **Method**: `GET`
- **Description**: Retrieve a specific joke using its `jokeNumber`.
- **Response Example**:
  ```json
  {
    "jokeNumber": 3,
    "content": "Why did the scarecrow win an award? Because he was outstanding in his field."
  }
  ```

### 3. **Add a New Joke**
- **URL**: `/api/v1/jokes/add`
- **Method**: `POST`
- **Description**: Add a new joke to the database. The joke must contain at least 5 characters.
- **Request Example**:
  ```json
  {
    "content": "I told my wife she was drawing her eyebrows too high. She looked surprised."
  }
  ```
- **Response Example**:
  ```json
  {
    "message": "New Joke is Successfully added!"
  }
  ```

### 4. **Get a Random Joke**
- **URL**: `/api/v1/jokes/random`
- **Method**: `GET`
- **Description**: Fetch a random joke from the database.
- **Response Example**:
  ```json
  {
    "jokeNumber": 5,
    "content": "I’m reading a book on anti-gravity. It’s impossible to put down!"
  }
  ```

---

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Validation**: Zod
- **Deployment**: Vercel

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/playapi.git
   cd playapi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file with the following variables:
   ```env
   MONGO_URI=your_mongo_database_uri
   PORT=your_preferred_port
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## Deployment

The application is deployed on **Vercel** and can be accessed at:
[https://api-playapi.vercel.app](https://api-playapi.vercel.app)

---

## Future Enhancements

- **User Authentication**: Allow users to create accounts and save their favorite content.
- **Categories**: Add categories to jokes, quotes, and other content for better organization.
- **Rate Content**: Users can rate jokes or quotes to find the most popular items.
- **Admin Panel**: Add an admin interface for better control over the database.
- **New Content Types**: Continuously add more types of content like facts, trivia, etc.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Push to your fork and submit a pull request.

---

## Contact

For any inquiries or feedback, reach out to me:

- **GitHub**: [https://github.com/Shubhashish-Chakraborty](https://github.com/Shubhashish-Chakraborty)
- **Email**: shubhashish147@gmail.com