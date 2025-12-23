import { createClient } from "./_lib/client.js";

export default async function handler(req, res) {
  try {
    const page = Number(req.query.page || 1);
    const api = await createClient();

    const response = await api.post(
      "/drama-box/he001/theater",
      {
        newChannelStyle: 1,
        isNeedRank: 1,
        pageNo: page,
        index: 1,
        channelId: 43
      }
    );

    res.status(200).json({
      success: true,
      data: response.data.data.newTheaterList.records
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
}
