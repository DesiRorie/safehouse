import { express } from "express";
import cors from "cors";
// import ---- from ----

const app = express();

app.use(cors());
app.use(Express.json());

app.use("/api/v1/____");
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app;
