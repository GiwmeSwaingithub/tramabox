import axios from "axios";
import { token } from "./get-token.js";

/**
 * Create DramaBox axios client
 */
export async function createClient(cid = "DRA1000042") {
  const t = await token();

  return axios.create({
    baseURL: "https://sapi.dramaboxdb.com",
    headers: {
      "User-Agent": "okhttp/4.10.0",
      "Accept-Encoding": "gzip",
      "Content-Type": "application/json",
      "tn": `Bearer ${t.token}`,
      "version": "430",
      "vn": "4.3.0",
      "cid": cid,
      "package-name": "com.storymatrix.drama",
      "apn": "1",
      "device-id": t.deviceid,
      "language": "in",
      "current-language": "in",
      "p": "43",
      "time-zone": "+0800"
    }
  });
}
