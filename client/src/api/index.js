import axios from "axios";
// AUTH API //
export async function addDoc(data) {
    try {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL + "uploads", data);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function listDocsByPK(pk) {
    try {
        const response = await axios.get(process.env.REACT_APP_SERVER_URL + `uploadsByPk/${pk}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}
