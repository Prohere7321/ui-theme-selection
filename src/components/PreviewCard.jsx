import { useSettings } from "../contexts/SettingsContext";

export default function PreviewCard() {
  const { theme, language } = useSettings();

  return (
    <div className="card">
      <p>
        <strong>Theme:</strong> {theme}
      </p>
      <p>
        <strong>Language:</strong> {language}
      </p>

      <p>
        {language === "en"
          ? "This is your preference preview."
          : "นี่คือหน้าตัวอย่างการตั้งค่า"}
      </p>
    </div>
  );
}