import { useSettings } from "../contexts/SettingsContext";

export default function SettingsPanel() {
  const {
    theme,
    language,
    setTheme,
    setLanguage,
    resetSettings,
  } = useSettings();

  return (
    <div className="panel">
      <h2>Settings</h2>

      <div>
        <p>Theme</p>
        <button onClick={() => setTheme("light")}>
          Light
        </button>
        <button onClick={() => setTheme("dark")}>
          Dark
        </button>
      </div>

      <div>
        <p>Language</p>
        <button onClick={() => setLanguage("en")}>
          EN
        </button>
        <button onClick={() => setLanguage("th")}>
          TH
        </button>
      </div>

      <button onClick={resetSettings}>
        Reset
      </button>
    </div>
  );
}