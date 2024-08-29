import {createContext, useState} from 'react';

export const Usercontext = createContext("");

function MyProvider({children}){
    console.log(children);
    const [pincode, setPincode] = useState('');

    return(
        <>
        <Usercontext.Provider value={[pincode, setPincode]}>
        {children}
        </Usercontext.Provider>
        </>
    )
}

export default MyProvider;


