import { useContext } from "react";
import { WalletContext } from "./Context/WalletContext";
import ConnectWalletCreate from "./ConnectWalletCreate";
import Firm from "./Firm";
import React from "react"
const FirmMaster = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const encoded = queryParameters.get("encoded")
    const private_key = queryParameters.get("private")
    const { walletId } = useContext(WalletContext); 
    if(!walletId)
        return ( <ConnectWalletCreate heading="Firm transaction" subHeading="Connect your wallet to firm transaction" navigateTo="/firm" /> );
    else
        return ( <Firm enconded={encoded} priv={private_key}/>);
}
 
export default FirmMaster;