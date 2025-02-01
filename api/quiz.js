import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://api.jsonserve.com/Uw5CrX");
    res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching quiz data" });
  }
}
