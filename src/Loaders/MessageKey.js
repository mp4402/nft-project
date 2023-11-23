import { useState } from "react";

const MessageKey = (props) => {
    const [key, setkey] = useState("");
    const get_private = (e) => {
        setkey(e)
    }
    return ( 
        <div>
            <div className="full-overlay">
                <div className="list-square">
                    <div className='text-center p-1'>
                        <div className="bg-primary closecross-section"><button onClick={props.closePopupMessage} style={{float:"right"}}><i className="fa fa-times"></i></button></div>
                        <div className="white-form-group">
                            <input type="text" className="form-control" placeholder="Private key" onChange={(e) => get_private(e.target.value)} />
                        </div>
                        <div>
                            <button className="btn-solid-grad" onClick={() => props.recive(key)}>OK</button>
                            
                        </div>
                        <div className="text-center text-danger">{props.errMessg}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MessageKey;