import express from "express";
import notesRoutes from "../src/routes/noteRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// create a middleware indication
app.use(express.json());


//database connection



//set up routes here
app.use("/api/notes", notesRoutes);


// listen to a port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})