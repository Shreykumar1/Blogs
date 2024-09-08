const express = require('express');
const db = require('./database'); // Import the database connection
const app = express();
const cors = require('cors');
const postRouter = require('./routes/postRouter')

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use('/',postRouter)

app.get("*",(req,res) => {
  res.send({
      status : 404 ,
      error : "Page Not Found..."
  })
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});