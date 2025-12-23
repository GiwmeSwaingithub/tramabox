import axios from "axios";

/**
 * Fetch token + deviceId
 */
export async function token() {
  const res = await axios.get(
    "https://dramabox-token.vercel.app/token",
    { timeout: 10000 }
  );

  return res.data;
}
