import {clusterApiUrl, Connection, Keypair, Transaction } from '@solana/web3.js';
import { NodeWallet } from '@metaplex/js';
import { decode } from 'bs58';
import { Buffer } from 'buffer';

//import { ShyftWallet } from '../types';
// two wallet firm transaction

export async function partialSignWithKeyAndWallet(connection,encodedTransaction,privateKey,wallet)
{
    const feePayer = Keypair.fromSecretKey(decode(privateKey));
    console.log("el encodedTransaction: ", typeof encodedTransaction)
    console.log(encodedTransaction)
    encodedTransaction = encodedTransaction.replace(/\t/g, '+');
    encodedTransaction = encodedTransaction.replace(/\s/g, '+');
    console.log("------")
    console.log(encodedTransaction)
    const recoveredTransaction = Transaction.from(
      Buffer.from(encodedTransaction, 'base64')
    );
    recoveredTransaction.partialSign(feePayer); //partially signing using private key of fee_payer wallet
    const signedTx = await wallet.signTransaction(recoveredTransaction); // signing the recovered transaction using the creator_wall
    const blockhashResponse = await connection.getLatestBlockhashAndContext();
    const lastValidBlockHeight = blockhashResponse.context.slot + 150;
    const rawTransaction = signedTx.serialize();
    let blockheight = await connection.getBlockHeight();
    let confirmTransaction;
    while (blockheight < lastValidBlockHeight) {
      confirmTransaction = await connection.sendRawTransaction(rawTransaction, {
        skipPreflight: true,
      });
      blockheight = await connection.getBlockHeight();
    }
    return confirmTransaction;
  
}

export async function confirmTransactionFromBackend(network, encodedTransaction, privateKey) {
  const connection = new Connection(clusterApiUrl(network), 'confirmed');
  const feePayer = Keypair.fromSecretKey(decode(privateKey));
  const wallet = new NodeWallet(feePayer);
  const recoveredTransaction = Transaction.from(
    Buffer.from(encodedTransaction, 'base64')
  );
  const signedTx = await wallet.signTransaction(recoveredTransaction);
  const confirmTransaction = await connection.sendRawTransaction(
    signedTx.serialize()
  );
  return confirmTransaction;
}

export async function confirmTransactionFromFrontend(connection, encodedTransaction, wallet) {
  console.log("Estos son los parametros que se están enviando:")
  console.log(connection)
  console.log(encodedTransaction)
  console.log(wallet)
  console.log("--------------------------------------------------")
  console.log("----------------Tercero1---------------------------------------")
  console.log(encodedTransaction);
  console.log("----------------Tercero2---------------------------------------")
  const recoveredTransaction = Transaction.from(
    Buffer.from(encodedTransaction, 'base64')
  );
  console.log("----------------Tercero3---------------------------------------")
  const signedTx = await wallet.signTransaction(recoveredTransaction);
  console.log(signedTx)
  console.log(signedTx.serialize())
  console.log("----------------Tercero4---------------------------------------")
  const confirmTransaction = await connection.sendRawTransaction(
    signedTx.serialize()
  );
  console.log("----------------Tercero5---------------------------------------")
  return confirmTransaction;
}
export async function confirmTransactionsFromFrontend(connection, encodedTransactions, wallet) {
  
  const recoveredTransactions = encodedTransactions.map((tx) => {
    return Transaction.from(
      Buffer.from(tx, 'base64')
    );
  });

  const signedTx = await wallet.signAllTransactions(recoveredTransactions);
  var sentTxns = [];
  for await(const tx of signedTx)
  {
    //console.log("LogginTX",tx);
    const confirmTransaction = await connection.sendRawTransaction(
      tx.serialize()
    );
    sentTxns.push(confirmTransaction);
  }
  //console.log(sentTxns);
  return sentTxns;
  
}
