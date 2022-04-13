import axios from "axios";

export const AddToIPFS = async (data) => {
  try {
    const formData = new FormData();
    formData.append("base64", data);

    const res = await axios.post(
      "https://ipfs.infura.io:5001/api/v0/add",
      formData,
      {
        headers: {
          // 'Content-Length': file.length,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res === null) {
      throw Error("Failed to add data to IPFS");
    }
    return { ipfsHash: res.data.Hash, data: data };
  } catch (er) {
    console.log(er);
    throw new Error("Failed to add data to IPFS");
  }
};

export const AddImageToIPFS = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post(
      "https://ipfs.infura.io:5001/api/v0/add",
      formData,
      {
        headers: {
          // 'Content-Length': file.length,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (res === null) {
      throw Error("Failed to add data to IPFS");
    }
    return { ipfsHash: res.data.Hash, data: file };
  } catch (er) {
    console.log(er);
    throw new Error("Failed to add data to IPFS");
  }
};

export const GetIPFSData = async (ipfsHash) => {
  try {
    const res = await axios.get(`https://ipfs.infura.io/ipfs/${ipfsHash}`);
    if (res) {
      return res.data;
    }
  } catch (er) {
    console.log(er);
    return null;
  }
};
// useEffect(() => {
//     async function fetchIpfs () {
//       try {
//         const res = await axios.get(`https://cloudflare-ipfs.com/ipfs/${transfer.ipfsHash}`)
//         if (res) {
//           console.log(res.data)
//           if (Object.keys(res.data).length === 0) {
//             setIpfsTransferData('NA')
//           } else {
//             setIpfsTransferData(JSON.stringify(res.data))
//             var array = []

//             for (var i in res.data) array.push({ key: i, value: res.data[i] })

//             setIpfsTransferDataArray(array)
//           }
//           // setIpfsData(res.data)
//         }
//       } catch (er) {
//         console.log(er)
//       }
//     }
//     // fetchIpfs();
//   }, [transfer])
