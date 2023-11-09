import express, { json } from "express";
import project_router from "./routes/projectRoutes";
import { testConnection } from "./config/sqlConfig";
import cors from 'cors'
import user_router from "./routes/userRoutes";
const app = express();

app.use(cors())
app.use(json())

// app.use("/", () => {
//   console.log("api is working");
// });

app.use('/project', project_router);
app.use('/user', user_router)
const PORT = 6000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} `);
  testConnection();
});
