import QRCode from 'react-qr-code';


const QrCodeShow = (props) => {
    return ( 
        <div>
            <div className="full-overlay">
                <div className="list-square">
                    <div className='text-center p-1'>
                        <div className="bg-primary closecross-section"><button onClick={props.closePopupMessage} style={{float:"right"}}><i className="fa fa-times"></i></button></div>
                            <QRCode
                            title="QRentrada"
                            value={props.value}
                            bgColor={'#FFFFFF'}
                            fgColor={'#000000'}
                            size={256}
                            />
                        <div className="text-center text-danger">{props.errMessg}</div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default QrCodeShow;