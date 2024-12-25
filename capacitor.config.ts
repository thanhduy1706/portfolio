import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: ".",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://192.168.56.1:3000",
    cleartext: true,
  },
};

export default config;
