//Init
const express = require('express');
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

//Mongoose Library
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Sabrina:basd1234@basd-rr.gdgvl.mongodb.net/BaSD-RR?retryWrites=true&w=majority',
(error)=>{
  if(error){
    console.log("error: ", error)
  }else{
    console.log("Database connected")
  }
})

//Routes require
const adminRoutes = require("./routes/admins");
const applicantRoutes = require("./routes/applicants");
const appointmentRoutes = require("./routes/appointments");
const clientRoutes = require("./routes/clients");
const interviewRoutes = require("./routes/interviews");
const postulationsRoutes = require("./routes/postulations");
const profilesRoutes = require("./routes/profiles");
const psychologistsRoutes = require("./routes/psychologists");


//Init body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use('/', router)

//Frontpage message
app.get('/', (req, res) => {
  res.send('Mindset frontpage');
});

//ADMIN admins
router.use("/admin", adminRoutes);

//Applicants
router.use("/applicants", applicantRoutes);

//Appointments 
router.use("/appointments", appointmentRoutes);

//Clients 
router.use("/clients", clientRoutes);

//Interviews 
router.use("/interviews", interviewRoutes);

//Postulations
router.use("/postulations", postulationsRoutes);

//Profiles
router.use("/profiles", profilesRoutes);

//Psychologists
router.use("/psychologists", psychologistsRoutes);

app.listen(PORT, () => {
    console.log(`MindSet server listening at http://localhost:${port}`);
  });