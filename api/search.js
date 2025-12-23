import { createClient } from "./_lib/client.js";

export default async function handler(req, res) {
  try {
    const keyword = req.query.keyword;
    if (!keyword) {
      return res.status(400).json({ error: "keyword is required" });
    }

    const api = await createClient();

    const response = await api.post(
      "/drama-box/search/suggest",
      { keyword }
    );

    res.status(200).json({
      success: true,
      data: response.data.data.suggestList
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
