import { useState } from 'react';
import QRCode from 'react-qr-code';
 
function App() {
    const [value, setValue] = useState();
 
    return (
        <div className="App">
            <center>
                <br />
                <br />
                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Value of Qr-code"
                />
                
                <br />
                <br />
                <br />
                {value && (
                    <QRCode
                        title="QRentrada"
                        value={value}
                        bgColor={'#FFFFFF'}
                        fgColor={'#000000'}
                        size={256}
                    />
                )}
            </center>
        </div>
    );
}
 
export default App;