import React, { createContext } from 'react'
import axios from 'axios'
import d from './assets/dictionary'

export const LanguageContext = createContext();
const languageOptions = [{locale: 'en-US', dictionary: d}]

const LanguageProvider = ({ children }) => {
    //select locale dictionary
    const browserLanguage = navigator.language || 'en-US'
    let found = languageOptions.find( i => i.locale === browserLanguage)
    if(!found) found = languageOptions[0]

    //check for customization
    axios.get(`/assets/language-${found.locale}.js`)
    .then(res=> {
        if(res.data) found = {...found, ...res.data}
    })
    .catch()
  return (
    <LanguageContext.Provider value={found.dictionary}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider