import React, {useState} from 'react';

export default function useToggle(IntialVal = false){
    const [state, setState] = useState(IntialVal);
    const setToggle = ()=>{
        setState(!state);
    };
    return [state, setToggle];
}
