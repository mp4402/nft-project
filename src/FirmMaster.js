import { useContext } from "react";
import { WalletContext } from "./Context/WalletContext";
import ConnectWalletCreate from "./ConnectWalletCreate";
import Firm from "./Firm";
import React from "react"
const FirmMaster = () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const encoded = queryParameters.get("encoded")
    const private_key = queryParameters.get("private")
    console.log("encoded: ", encoded)
    console.log("private_key: ", private_key)
    let link = "/firm?encoded=" + encoded + "&private=" + private_key
    const { walletId } = useContext(WalletContext); 
    if(!walletId)
        return ( <ConnectWalletCreate heading="Firm transaction" subHeading="Connect your wallet to firm transaction" navigateTo={link}/> );
    else
        return ( <Firm enconded={encoded} priv={private_key}/>);
}
 
export default FirmMaster;