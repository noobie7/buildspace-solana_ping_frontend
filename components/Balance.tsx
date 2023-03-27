import styles from '../styles/balance.module.css';
import { useState, useEffect } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';


export const Balance = () => {
    const [balance, setBalance] = useState(0);
    const { publicKey } = useWallet(); 
    const { connection } = useConnection();
    
    useEffect(() => {
        if(!connection || !publicKey) {
            return;
        }
        connection.getAccountInfo(publicKey).then( info => {
            setBalance(info.lamports);
        })
    }, [connection, publicKey]);

    return <div className = {styles.balance}>
        <p> Your total balance is :  </p>
     {balance / LAMPORTS_PER_SOL} 
    </div>
}