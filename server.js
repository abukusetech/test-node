const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("API running"));
app.get("/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, "127.0.0.1", () => {
  console.log(`Listening on http://127.0.0.1:${PORT}`);
});
