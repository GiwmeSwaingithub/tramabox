import { createClient } from "./_lib/client.js";

export default async function handler(req, res) {
  try {
    const { bookId, episode = 1 } = req.query;

    if (!bookId) {
      return res.status(400).json({ error: "bookId is required" });
    }

    const api = await createClient("DRA1000000");

    const response = await api.post(
      "/drama-box/chapterv2/batch/load",
      {
        boundaryIndex: 0,
        comingPlaySectionId: -1,
        index: Number(episode),
        currencyPlaySource: "discover_new_rec_new",
        needEndRecommend: 0,
        currencyPlaySourceName: "",
        preLoad: false,
        rid: "",
        pullCid: "",
        loadDirection: 0,
        startUpKey: "",
        bookId
      }
    );

    res.status(200).json({
      success: true,
      stream: response.data.data.chapterList[0].cdnList[0]
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
