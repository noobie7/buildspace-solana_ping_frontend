import { useState } from 'react';
import styles from "../styles/form.module.css";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Transaction, TransactionInstruction, PublicKey, LAMPORTS_PER_SOL, SystemProgram } from '@solana/web3.js';


export const Form = () => {
    const [txSig, setTxSig] = useState('');
    const {publicKey, sendTransaction} = useWallet();
    const { connection } = useConnection();


    const link = () => {
        return txSig ? `http://explorer.solana/tx/${txSig}?cluster=devnet` : ''
    }

    const sendSol = () => {
        event.preventDefault();
        if(!connection || !publicKey){
            return;
        }
        const recipient = new PublicKey(event.target.address.value);
        const transaction = new Transaction();
        const instruction = SystemProgram.transfer({
            fromPubkey : publicKey, 
            toPubkey  : recipient, 
            lamports: LAMPORTS_PER_SOL * event.target.amt.value
        });

        transaction.add(instruction);
        sendTransaction(
            transaction,
            connection
        ).then( sig => {
            setTxSig(sig);
        });
    }


    return <div>
        {
            publicKey?
            <form  className = {styles.form} onSubmit={sendSol}>
                <label htmlFor = "amt">Amount to send (SOL) </label>  
                <br/>
                <input id = "amt" type='text'></input>
                <br/> 
                <label htmlFor = "address">Send SOL to </label> 
                <br/>
                <input id = "address" type='text'></input> 
                <br/>
                <button type='submit'> Submit</button>
            </form>
            :
            <span> Connect your Wallet! </span> 
        }
        {
            txSig ? 
            <>
                <p> View your transaction here</p>
                <a href = {link()}>Solana Explorer</a>
            </>
            :
            null

        }
        

    </div>
}