import { Button } from "./components/Button";
import {
  DesktopDefault,
  DesktopVariant2,
  DesktopVariant9,
  DesktopVariant4,
  DesktopVariant5,
  DesktopVariant6,
  DesktopVariant7,
} from "./components/Desktop";

function App() {
  return (
    <div className="bg-white w-full h-screen flex gap-4 justify-center items-center flex-col">
      Components:
      <Button />
      <DesktopDefault />
      <DesktopVariant2 />
      <DesktopVariant9 />
      <DesktopVariant4 />
      <DesktopVariant5 />
      <DesktopVariant6 />
      <DesktopVariant7 />
    </div>
  );
}

export default App;
