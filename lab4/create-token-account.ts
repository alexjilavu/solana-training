import "dotenv/config";
import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { createAccount, createMint, getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
const user = getKeypairFromEnvironment("SECRET_KEY");

console.log(
    `Loaded keypair: ${user.publicKey.toBase58()}`
);

const RECIPIENT_ACCOUNT = "CgzeTuK8nVFZKHCYj3PCoTxVYWutxP4cUQiub2zzmxqo";
const TOKEN_MINT_ADDRESS = ""; // TODO

const recipient = new PublicKey(RECIPIENT_ACCOUNT);
const tokenMintAccount = new PublicKey(TOKEN_MINT_ADDRESS);

const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    user,
    tokenMintAccount,
    recipient
);

const link = getExplorerLink(
    "address",
    tokenAccount.address.toBase58(),
    "devnet"
);
