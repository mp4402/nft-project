import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

import { WalletContext } from "./Context/WalletContext";
import { partialSignWithKeyAndWallet } from './utility/shyft';
import { clusterUrl } from "./utility/utilityfunc";
import {  Connection } from "@solana/web3.js";

const Firm = (props) => {
    const navigate = useNavigate();
    //const { waddress } = useParams();
    const network = "devnet";
    const { walletId, setWalletId } = useContext(WalletContext);
    const [okModal,setOkModal] = useState(false);
    const callback = (signature,result) => {
        console.log("Signature ",signature);
        console.log("result ",result);
        try {
          if(signature.err === null)
          {
            console.log('ok');
          }
          else
          {
            console.log('failed');
          }
          setOkModal(false);
        } catch (error) {
          console.log('failed');
          setOkModal(false);
        }
        
      }
    useEffect(() => {
        async function firm_transaction(network,transaction,private_key,callback)
        {
            const phantom = new PhantomWalletAdapter();
            await phantom.connect();
            const rpcUrl = clusterUrl(network);
            const connection = new Connection(rpcUrl,"confirmed");
            const ret = await partialSignWithKeyAndWallet(connection,transaction,private_key,phantom);
            const checks = await connection.confirmTransaction({signature:ret},'finalised');
            console.log("el ret",ret);
            console.log("el checks",checks);
            connection.onSignature(ret,callback,'finalized')
        } 
        if (!walletId) {
            console.log('Wallet Not connected')
            navigate('/');
        }
        else{
            firm_transaction(network, props.encoded, props.private_key,callback)
        }
    }, []);   
    
    return (
      <div>
        <div className="right-al-container mb-2">
          <div className="container-lg">
            <div className="your-listings">
              <h2 className="section-heading">Firma la transaccion</h2>
              <div className="row mt-4">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Firm;