import { useConnection, useWallet } from '@solana/wallet-adapter-react';
<<<<<<< HEAD
import * as Web3 from '@solana/web3.js'
=======
import * as web3 from '@solana/web3.js'
>>>>>>> 513ef9ce67793f9f73eb8f5d114b0354515f7862
import { FC } from 'react'
import styles from '../styles/PingButton.module.css'

const PROGRAM_ID = new Web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa")
const PROGRAM_DATA_PUBLIC_KEY = new Web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod")

export const PingButton: FC = () => {
	const { connection } = useConnection();
	const { publicKey, sendTransaction } = useWallet();

	const onClick = () => {
<<<<<<< HEAD
		if (!connection || !publicKey) { 
			alert("Please connect your wallet first lol")
			return
		}

		const transaction = new Web3.Transaction()

		const instruction = new Web3.TransactionInstruction({
			keys: [
				{
					pubkey: PROGRAM_DATA_PUBLIC_KEY,
=======
		if (!connection || !publicKey) { return }

		const programId = new web3.PublicKey(PROGRAM_ID)
		const programDataAccount = new web3.PublicKey(DATA_ACCOUNT_PUBKEY)
		const transaction = new web3.Transaction()

		const instruction = new web3.TransactionInstruction({
			keys: [
				{
					pubkey: programDataAccount,
>>>>>>> 513ef9ce67793f9f73eb8f5d114b0354515f7862
					isSigner: false,
					isWritable: true
				},
			],
<<<<<<< HEAD
			programId: PROGRAM_ID,
=======
			programId
>>>>>>> 513ef9ce67793f9f73eb8f5d114b0354515f7862
		});

		transaction.add(instruction)
		sendTransaction(transaction, connection).then(sig => {
<<<<<<< HEAD
			console.log(`Explorer URL: https://explorer.solana.com/tx/${sig}?cluster=devnet`)
=======
			console.log(sig)
>>>>>>> 513ef9ce67793f9f73eb8f5d114b0354515f7862
		})
	}

	return (
		<div className={styles.buttonContainer} onClick={onClick}>
			<button className={styles.button}>Ping!</button>
		</div>
	)
}