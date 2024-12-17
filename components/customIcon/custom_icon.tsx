import Image from "next/image";

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
      <Image src="/HCMIUlogo.png" alt="HCMIU Logo" {...iconConfig} />
    </div>
  );
}

export function Tancaicon() {
  return (
    <div {...classNameConfig}>
      <Image src="/TancaLogo.png" alt="Tanca Logo" {...iconConfig} />
    </div>
  );
}

export function HSVGicon() {
  return (
    <div {...classNameConfig}>
      <Image src="/HSVGLogo.png" alt="HSVG Logo" {...iconConfig} />
    </div>
  );
}
