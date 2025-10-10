import cors from "cors";
import express from "express";
import routes from "./routes/index";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use(routes)

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
