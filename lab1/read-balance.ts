import "dotenv/config";
import { Connection,
        LAMPORTS_PER_SOL,
        PublicKey,
        clusterApiUrl,
} from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import bs58 from "bs58";


const connection = new Connection(clusterApiUrl("devnet"));

console.log("Checking balance of the account...");

const keyFromEnv = getKeypairFromEnvironment("SECRET_KEY");
const key = bs58.encode(keyFromEnv.secretKey);

console.log(`Secret key is ${key}`);

// const address = "CgzeTuK8nVFZKHCYj3PCoTxVYWutxP4cUQiub2zzmxqo";
// const publicKey = new PublicKey(address);
// const balanceInLamport = await connection.getBalance(publicKey);

// console.log(`Balance of the account is ${balanceInLamport} lamports`);
// // console.log('Wanting aidrop')

// // const aidropSignature = await connection.requestAirdrop(
// //     publicKey,
// //     LAMPORTS_PER_SOL
// // );
// // await connection.confirmTransaction(aidropSignature);

// console.log('Airdrop completed');

// const balanceInLamportAfterAidrop = await connection.getBalance(publicKey);

// console.log(`Balance of the account is ${balanceInLamportAfterAidrop} lamports`);