import Image from "next/image";
import HCMIU from "/HCMIUlogo.png";
import Tanca from "/TancaLogo.png";
import HSVG from "/HSVGLogo.png";

const iconConfig = {
  width: 36,
  height: 36,
  className: "rounded-full",
};

const classNameConfig = {
  className:
    "flex items-center justify-center w-full h-full rounded-full bg-white",
};

export function HCMIUicon() {
  return (
    <div {...classNameConfig}>
      <Image src={HCMIU} alt="HCMIU Logo" {...iconConfig} />
    </div>
  );
}

export function Tancaicon() {
  return (
    <div {...classNameConfig}>
      <Image src={Tanca} alt="Tanca Logo" {...iconConfig} />
    </div>
  );
}

export function HSVGicon() {
  return (
    <div {...classNameConfig}>
      <Image src={HSVG} alt="HSVG Logo" {...iconConfig} />
    </div>
  );
}
