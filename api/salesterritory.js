const { getColumn } = require("../lib/sheets");

module.exports = async (req, res) => {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  try {
    const data = await getColumn("SALES TERRITORY!A:A");
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
