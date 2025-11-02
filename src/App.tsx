import {
  ButtonDefault,
  ButtonVariant2,
  ButtonVariant3,
} from "./components/Button";
import {
  DesktopDefault,
  DesktopVariant2,
  DesktopVariant9,
  DesktopVariant4,
  DesktopVariant5,
  DesktopVariant6,
  DesktopVariant7,
  DesktopVariant8,
  DesktopVariant10,
} from "./components/Desktop";

function App() {
  return (
    <div className="bg-white w-full h-screen flex gap-4 justify-center items-center flex-col">
      <ButtonDefault />
      <ButtonVariant2 />
      <ButtonVariant3 />
      <DesktopDefault />
      <DesktopVariant2 />
      <DesktopVariant9 />
      <DesktopVariant4 />
      <DesktopVariant5 />
      <DesktopVariant6 />
      <DesktopVariant7 />
      <DesktopVariant8 />
      <DesktopVariant10 />
    </div>
  );
}

export default App;
