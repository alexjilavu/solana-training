import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { createMemoInstruction } from "@solana/spl-memo";

const sender = getKeypairFromEnvironment("SECRET_KEY");

console.log(sender.publicKey.toBase58());

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const receiver = new PublicKey("AMhdHJ83EQnFRp3DXKr9NCJxZCUjjoqpHf63XnuYT81G");

const balance = await connection.getBalance(receiver);

console.log(`Andrei balance ${balance / LAMPORTS_PER_SOL} SOL`);

const transaction = new Transaction();

const transferInstructions = SystemProgram.transfer({
    fromPubkey: sender.publicKey,
    toPubkey: receiver,
    lamports: 1000000,
});

transaction.add(transferInstructions);

const memo = "HAAAI ROMANIA!!!";
const memoInstruction = createMemoInstruction(memo);

transaction.add(memoInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [sender]);

console.log(`Transaction confirmed. Signature: ${signature}`);