import { useSettings } from "../contexts/SettingsContext";

export default function Header() {
  const { language } = useSettings();

  return (
    <header>
      <h1>
        {language === "en" ? "Welcome" : "ยินดีต้อนรับ"}
      </h1>
    </header>
  );
}