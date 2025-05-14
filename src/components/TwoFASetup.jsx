import React from 'react';

const TwoFASetup = () => {
    return (
        <div
            className="bg-white rounded-lg shadow-md w-full max-w-sm mx-auto">
            <div className='pt-6'>
                <h2 className='text-3xl text-center font-extralight'>
                    Turn on 2fa verification</h2>
            </div>
            <hr className='text-gray-200 mt-6 mb-6' />
            <p className='text-centertext-gray-600 text-large font-light pr-6 pl-6'>
                Scan the QR code below your authenticator app
            </p>
            <div className='p-6'>
                <div className='flex justify-center'>
                    <img src="" alt="2fa QR code" className='mb-4 border rounded-md' />

                </div>
                <div className='flex items-center mt-3 mb-3'>
                    <div className='border-t border-1 border-gray-200 flex-grow'>
                        <div className='text-gray-600 text-sm front-light pr-2 pl-2'>
                            Qr enter the code manually

                        </div>
                        <div className='border-t border-1 border-gray-200 flex-grow'>
                        </div>
                        <div className='mb-6'>
                            <input readOnly defaultValue="" value="" className='w-full border rounded mt-2 text-xs text-gray-600 p-4'
                            onClick={copyClipBoard}
                            ></input>
                        </div>
                        <button onClick={onSetupComplete} className='w-full bg-blue-500 text-white py-2 rounded-md'>continue to varification</button>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default TwoFASetup;