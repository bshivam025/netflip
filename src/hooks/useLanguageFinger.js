import React from 'react'
import { useSelector } from 'react-redux'

const useLanguageFinger = () => {
    let selector = useSelector((state)=> state.app.prefferedLanguage);
    return {
        image: selector
    };
}

export default useLanguageFinger