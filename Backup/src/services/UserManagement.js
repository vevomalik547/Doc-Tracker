//Remove Later
import axios from "axios";
import jwt from "jsonwebtoken";

var niftronAPI =
  "https://api.niftron.com";

export async function checkEmail(email) {
  try {
    const res = await axios.get(
      `${niftronAPI}/users/${email}/checkEmail`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res != null) {
      return res.data.data;
    }
    return null;
  } catch (err) {
    return null;
  }
}

//Remove Later
export async function checkAlias(alias) {
  try {
    const res = await axios.get(
      `${niftronAPI}/users/${alias}/checkAlias`,
      {
        headers: {
          // 'Authorization': "bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );

    if (res != null) {
      return res.data.data;
    }
    return null;
  } catch (err) {
    return null;
  }
}

export function getUserSession() {
  if (localStorage.getItem("niftoken") !== null) {
    // jwt.decode(localStorage.getItem("token"))
    const decodedToken = jwt.decode(localStorage.getItem("niftoken"));
    if (decodedToken === null) {
      return null;
    } else {
      // ////////console.log(decodedToken)
      return decodedToken;
    }
  }
}
