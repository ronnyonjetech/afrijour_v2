// import React, { createContext, useState } from "react";
// import translations from "../translations"; // Ensure this path is correct

// export const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en");

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from "react";
import translations from "../translations"; // Ensure this path is correct

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Load from storage or default to 'en'
  const [language, setLanguage] = useState(storedLanguage);

  useEffect(() => {
    localStorage.setItem("selectedLanguage", language); // Save language changes
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
