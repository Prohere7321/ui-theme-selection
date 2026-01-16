import Header from "./components/Header";
import SettingsPanel from "./components/SettingsPanel";
import PreviewCard from "./components/PreviewCard";
import { useSettings } from "./contexts/SettingsContext";

function AppContent() {
  const { theme } = useSettings();

  return (
    <div className={`app ${theme}`}>
      <Header />
      <SettingsPanel />
      <PreviewCard />
    </div>
  );
}

export default AppContent;