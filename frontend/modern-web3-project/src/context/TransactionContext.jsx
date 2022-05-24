import React, {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from "../utils/constants";

export const TransactionContext  = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({provider, signer, transactionContract})
}

export const TransactionProvider = ({children}) => {
    const [connectedAccount, setConnectedAccount] = useState();
    const checkIfWalletIsConnected = async () =>{
        if(!ethereum) return alert("Install Metamask!🦊");

        const accounts = await ethereum.request({method: 'eth_accounts'});
        console.log(accounts);
    }

    const connectWallet = async () =>{
        try{
            if(!ethereum) return alert("Install Metamask!🦊");  
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
        }
        catch(e){
            console.log(e);
            throw new Error("No ETH Object🤔");
        }
    }

    useEffect(()=> {
        checkIfWalletIsConnected();
    }, []);

    return(
    <TransactionContext.Provider value={{connectWallet: connectWallet}}>
        {children}
    </TransactionContext.Provider>
    );
}
