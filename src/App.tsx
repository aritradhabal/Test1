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
import { Frame } from "./components/Frame";
import { HomeDefault } from "./components/Home";

function App() {
  const variants = [
    DesktopVariant2,
    DesktopVariant4,
    DesktopVariant5,
    DesktopVariant6,
    DesktopVariant7,
    DesktopVariant8,
    DesktopVariant9,
    DesktopVariant10,
  ];
  return (
    <>
      <div className="bg-gray-200/50 w-full h-screen flex gap-10 justify-center items-center flex-row">
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
          {variants.map((Variant, idx) => (
            <HomeDefault key={idx} right={<Variant home={true} />} />
          ))}
        </div>
        {/* Frame */}
        <Frame />
      </div>
    </>
  );
}

export default App;
