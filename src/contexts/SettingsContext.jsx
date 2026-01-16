import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

const DEFAULT_SETTINGS = {
  theme: "light",
  language: "en",
};

export function SettingsProvider({ children }) {
  const [theme, setTheme] = useState(DEFAULT_SETTINGS.theme);
  const [language, setLanguage] = useState(DEFAULT_SETTINGS.language);

  // Load from localStorage on first render
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("app-settings") ?? "null"
    );

    if (saved) {
      setTheme(saved.theme ?? "light");
      setLanguage(saved.language ?? "en");
    }
  }, []);

  // Save to localStorage whenever settings change
  useEffect(() => {
    const settings = { theme, language };
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [theme, language]);

  function resetSettings() {
    setTheme("light");
    setLanguage("en");
  }

  return (
    <SettingsContext.Provider
      value={{
        theme,
        language,
        setTheme,
        setLanguage,
        resetSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}