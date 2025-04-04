const express = require("express");
const http = require("http"); 
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require('body-parser');
const connectDB = require("./config/db.js");
const alertRoutes = require('./routes/alert.routes.js')
const authRoutes = require('./routes/auth.routes.js')

const app = express();
dotenv.config();


connectDB();


app.use(
  cors({
  origin: [ process.env.CORS_ORIGIN || "*" ], 
  credentials: true, 
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
  "Origin",
  "Content-Type",
  "Accept",
  "Authorization",
  "X-Request-With",
  ],
  })
  );

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/alert', alertRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
