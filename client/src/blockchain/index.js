import { Keypair, Networks, TransactionBuilder, Server, Operation } from 'stellar-sdk';
import axios from 'axios';
var server = new Server(process.env.REACT_APP_STELLAR_HORIZON);
const submitURL = 'https://7jjtmvg62l.execute-api.us-east-1.amazonaws.com/prod/submit'

export async function addHash(ipfsHash, secretKey) {

    const keypair = Keypair.fromSecret(secretKey);
    const account = await server.loadAccount(keypair.publicKey());

    /*
        Right now, we have one function that fetches the base fee.
        In the future, we'll have functions that are smarter about suggesting fees,
        e.g.: `fetchCheapFee`, `fetchAverageFee`, `fetchPriorityFee`, etc.
    */
    const fee = await server.fetchBaseFee();

    const transaction = new TransactionBuilder(account, { fee, networkPassphrase: Networks.TESTNET })
        .addOperation(
            // this operation funds the new account with XLM
            Operation.manageData({
                name: "IPFSHASH",
                value: ipfsHash,
                source: keypair.publicKey()
            })
        )
        .setTimeout(0)
        .build();

    // sign the transaction
    transaction.sign(keypair);
    let x = transaction
        .toEnvelope()
        .toXDR()
        .toString('base64')
    console.log(x)


    try {
        const res = await axios.post(submitURL, { xdr: x })
        // const transactionResult = await server.submitTransaction(transaction);
        console.log(res.data.data);
        return res.data.data;
    } catch (err) {
        console.error(err);
        return null
    }
}