import "dotenv/config";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { createMint } from "@solana/spl-token";
import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(
    `Loaded keypair: ${user.publicKey.toBase58()}`
);

const mintAccount = await createMint(
    connection,
    user,
    user.publicKey,
    null,
    9
);

