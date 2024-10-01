import {
  Keypair,
  Connection,
  PublicKey,
  LAMPORTS_PER_SOL,
  TransactionInstruction,
  Transaction,
  sendAndConfirmTransaction,
} from '@solana/web3.js';
import fs from 'mz/fs';
import path from 'path';


/*
  Our keypair we used to create the on-chain Rust program
*/
const PROGRAM_KEYPAIR_PATH = path.join(
  path.resolve(__dirname, '../contract/target/deploy'),
  'contract-keypair.json'
);
const contract_pKey_file = fs.readFile(PROGRAM_KEYPAIR_PATH, { encoding: 'utf8' }).then(() => console.log("Read successfully"), err => {
  console.error(err)
})
console.log(contract_pKey_file)