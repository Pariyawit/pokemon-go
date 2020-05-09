const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();

//Middleware
app.use(express.json());

// Serve statics assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set statci folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
