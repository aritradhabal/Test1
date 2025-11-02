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
import { HomeDefault } from "./components/Home";

function App() {
  return (
    <div className="bg-[#DEDEDE] w-full h-screen flex gap-4 justify-center items-center flex-row">
      <div className="flex flex-col gap-4 justify-center items-center">
        {/* Buttons */}
        <ButtonDefault />
        <ButtonVariant2 />
        <ButtonVariant3 />
        {/* Desktop */}
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
      <div className="flex flex-col gap-4 justify-center items-center">
        {/* Home */}
        <HomeDefault />
      </div>
    </div>
  );
}

export default App;
