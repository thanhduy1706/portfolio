const iconConfig = {
  width: 36,
  height: 36,
  className: "rounded-full",
};

const classNameConfig = {
  className:
    "flex items-center justify-center w-full h-full rounded-full bg-white",
};
export function Tancaicon() {
  return (
    <div {...classNameConfig}>
      <img src="/TancaLogo.png" alt="Tanca Logo" {...iconConfig} />
    </div>
  );
}

export function HSVGicon() {
  return (
    <div {...classNameConfig}>
      <img src="/HSVGLogo.png" alt="HSVG Logo" {...iconConfig} />
    </div>
  );
}

export function HCMIUicon() {
  return (
    <div {...classNameConfig}>
      <img src="/HCMIUlogo.png" alt="HCMIU Logo" {...iconConfig} />
    </div>
  );
}
