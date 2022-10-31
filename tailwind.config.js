module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_900_14: "#1e242714",
        bluegray_500_6c: "#666e8b6c",
        bluegray_50: "#f1f1f1",
        blue_A401: "#266fe8",
        blue_A400: "#2373ff",
        blue_A402: "#2476fe",
        red_400: "#e34d59",
        green_A100: "#a7e5c0",
        green_A101: "#a8e5c0",
        black_900_87: "#00000087",
        deep_orange_901: "#8c3605",
        teal_500: "#00a870",
        deep_orange_900: "#b24610",
        deep_orange_100: "#ffb8aa",
        blue_A400_ab: "#2373ffab",
        blue_A400_ab1: "#266fe8ab",
        blue_900: "#073ab2",
        pink_50: "#ffdde5",
        bluegray_500_63: "#666e8b63",
        white_A700_66: "#ffffff66",
        black_900_99: "#00000099",
        bluegray_401: "#7c839c",
        cyan_51: "#c6fff3",
        bluegray_400: "#8e9094",
        bluegray_500_67: "#666e8b67",
        blue_100: "#c6e2ff",
        cyan_50: "#d6fffe",
        blue_101: "#b4cfff",
        deep_orange_A200: "#ff6730",
        light_blue_A400: "#00c1ff",
        red_300: "#e85a6d",
        red_301: "#f17083",
        green_A200: "#7bd8a3",
        teal_400: "#30bf78",
        black_900_66: "#00000066",
        black_900_63: "#00000063",
        gray_905: "#1e2427",
        gray_906: "#1e1e26",
        gray_903: "#420101",
        gray_904: "#1e2025",
        bluegray_500_90: "#666e8b90",
        gray_200_66: "#ededee66",
        gray_105: "#f5f5f5",
        white_A700_e5: "#ffffffe5",
        gray_103: "#f3f3f5",
        gray_104: "#f7f7f7",
        gray_901: "#012618",
        blue_800: "#1355d8",
        gray_902: "#662800",
        gray_900: "#1e2128",
        orange_500: "#ff9900",
        teal_A201: "#6ae8d7",
        gray_101: "#f2f3f5",
        teal_A200: "#60eaf7",
        gray_102: "#f4f4f4",
        blue_A400_33: "#256fe833",
        gray_100: "#eff7ff",
        bluegray_300: "#9298ad",
        indigo_A400: "#3b6de0",
        cyan_900: "#0a6077",
        deep_orange_A100: "#ff9b82",
        white_A700_b0: "#ffffffb0",
        red_601: "#e03d3d",
        blue_A202: "#3c7dea",
        red_600: "#db3244",
        blue_A203: "#5592f7",
        light_blue_A100: "#62d9ff",
        red_602: "#e03c3c",
        light_blue_A101: "#63d9ff",
        blue_A200: "#4c93ff",
        blue_A201: "#4f7ef7",
        gray_100_75: "#f4f4f475",
        deep_orange_300: "#ff7f59",
        white_A700_19: "#ffffff19",
        deep_orange_301: "#ff865d",
        yellow_200: "#ffe099",
        bluegray_800_63: "#25305a63",
        bluegray_600: "#555e7e",
        cyan_402: "#25c5e8",
        cyan_400: "#25acc4",
        cyan_401: "#1dcec1",
        blue_A100: "#75b0ff",
        red_500: "#ff2f2f",
        blue_A101: "#85b4ff",
        teal_600: "#1e995f",
        black_900: "#000000",
        black_901: "#010101",
        deep_orange_200: "#ffb8a3",
        gray_700: "#5d5f66",
        bluegray_50_75: "#f1f1f175",
        indigo_52: "#dee7f4",
        indigo_50: "#e2e2fc",
        white_A700_a2: "#ffffffa2",
        gray_701: "#626668",
        gray_702: "#575663",
        indigo_51: "#dbe1f2",
        indigo_102: "#b1c4df",
        cyan_300: "#38d5ea",
        white_A700_00: "#ffffff00",
        orange_50: "#fff7e0",
        indigo_100: "#c9cafc",
        indigo_101: "#b9d0f0",
        bluegray_500: "#666e8b",
        blue_700_7f: "#1976d27f",
        indigo_902: "#013289",
        indigo_900: "#00258c",
        blue_200: "#9ecbff",
        indigo_901: "#001766",
        black_900_b2: "#000000b2",
        pink_900: "#680808",
        gray_900_99: "#1a233299",
        teal_901: "#033e51",
        teal_900: "#074c30",
        light_blue_A700: "#007bff",
        deep_purple_A200: "#9747ff",
        pink_100: "#ffb5c3",
        pink_101: "#ffb5c4",
        gray_402: "#c4c6c7",
        gray_700_90: "#62666890",
        gray_400: "#c5c5c7",
        gray_401: "#c2c5d1",
        black_900_0c: "#0000000c",
        bluegray_801: "#364167",
        indigo_201: "#a3b3cd",
        bluegray_800: "#25305a",
        indigo_200: "#9aadc7",
        black_900_14: "#00000014",
        bluegray_803: "#25315a",
        bluegray_802: "#404363",
        gray_52: "#f9f9fa",
        gray_51: "#f2fffd",
        gray_54: "#f5f7fc",
        gray_53: "#f8f9f9",
        gray_56: "#f1f7ff",
        bluegray_600_63: "#626a8663",
        gray_55: "#f7f9fd",
        red_51: "#fff2f5",
        gray_500_90: "#9a9c9e90",
        gray_50: "#f2fff6",
        red_50: "#fff3f2",
        teal_800: "#117248",
        deep_orange_400: "#fd774a",
        gray_501: "#a1a3a4",
        gray_502: "#979797",
        black_900_a2: "#000000a2",
        gray_500: "#9a9c9e",
        teal_50: "#d7f2e1",
        bluegray_702: "#424f83",
        bluegray_701: "#4b5052",
        bluegray_700: "#444d71",
        white_A700_7f: "#ffffff7f",
        cyan_A100: "#89f9ff",
        light_blue_100: "#a4e9ff",
        red_200: "#f48699",
        indigo_A101: "#a29ef6",
        indigo_A100: "#a39efc",
        teal_300: "#53cc8b",
        blue_A400_3d: "#256fe83d",
        green_A700: "#05c150",
        black_900_dd: "#000000dd",
        deep_orange_700: "#d8561e",
        blue_A400_6c1: "#266fe86c",
        gray_900_63: "#1e242763",
        gray_204: "#ececec",
        gray_205: "#e9e9e9",
        gray_202: "#ededee",
        gray_203: "#f0f0f0",
        blue_700: "#2264d1",
        blue_701: "#1976d2",
        gray_206: "#e8e8e8",
        teal_A100: "#affdff",
        amber_300: "#fcd552",
        gray_200: "#e7e7e7",
        blue_52: "#e9f1ff",
        gray_201: "#e9eaee",
        blue_53: "#e5f0fc",
        blue_50: "#e4edfc",
        blue_51: "#e9f2fd",
        bluegray_203: "#b1b4c4",
        bluegray_202: "#acb0c0",
        bluegray_201: "#bec1ce",
        bluegray_200: "#a8acbd",
        gray_100_00: "#f3f3f300",
        cyan_800: "#16859e",
        white_A700: "#ffffff",
        red_901: "#8e1216",
        blue_A100_00: "#85b1ff00",
        red_900: "#b5202a",
        red_101: "#f1d4db",
        light_green_300: "#b7eb8f",
        blue_A400_66: "#2373ff65",
        red_100: "#ffd9d3",
        black_900_d8: "#000000d8",
        blue_A400_65: "#266fe865",
        black_900_1e: "#0000001e",
        gray_900_80: "#1a233280",
        pink_200: "#f190a5",
        black_900_26: "#00000026",
        gray_303: "#e6e6e6",
        gray_304: "#dee0e3",
        gray_301: "#dcdce0",
        black_900_e5: "#000000e5",
        gray_302: "#dcdcdc",
        bluegray_100: "#cfd2db",
        gray_300: "#dcdee5",
        bluegray_900: "#2f2e3e",
        black_900_33: "#00000033",
        black_900_cc: "#000000cc",
        bluegray_102: "#d9d9d9",
        bluegray_101: "#ced4de",
        blue_A400_6b: "#3278e86b",
        blue_A400_6c: "#2373ff6c",
        gray_900_90: "#1e242790",
      },
      borderRadius: {
        radius1: "1px",
        radius2: "2px",
        radius3: "3px",
        radius4: "4px",
        radius5: "5px",
        radius05: "0.5px",
        radius6: "6px",
        radius7: "7px",
        radius8: "8px",
        radius10: "10px",
        radius12: "12px",
        radius121: "1.2px",
        radius15: "1.5px",
        radius21: "21px",
        radius22: "22px",
        radius25: "2.5px",
        radius44: "44px",
        radius50: "50%",
        radius95: "9.5px",
        radius125: "12.5px",
        radius192: "19.2px",
      },
      borderWidth: { bw05: "0.5px" },
      boxShadow: {
        bs8: "0px 4px  4px 0px #ededee66",
        bs7: "0px 0px  1px 0px #2373ff",
        bs5: "0px 1px  9px 0px #3278e86b",
        bs1: "0px 1px  5px 0px #0000001e",
        bs3: "0px 2.27px  15.87px 0px #dbe1f2",
        bs4: "2px 6px  6px 2px #1e242714",
        bs2: "0px 2px  8px 0px #00000026",
        bs6: "0px 9px  28px 8px #0000000c",
        bs: "0px 8px  10px -5px #00000014",
      },
      fontFamily: {
        pingfangsc: "PingFang SC",
        alibabapuhuiti: "Alibaba PuHuiTi",
        dinpro: "DINPro",
        roboto: "Roboto",
        dinpro1: "DIN Pro",
        alibabapuhuiti1: "Alibaba PuHuiTi 2.0",
      },
      letterSpacing: { ls1: "1px" },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#424f83,#25305a)",
        gradient1: "linear-gradient(90deg ,#f3f3f5,#f3f3f300)",
        gradient2: "linear-gradient(39.34deg ,#f8f9f9,#f8f9f9)",
        gradient3: "linear-gradient(34.59deg ,#4f7ef7,#00c1ff)",
        gradient4: "linear-gradient(65.66deg ,#ff865d,#ffb8a3)",
        gradient5: "linear-gradient(45.58deg ,#2476fe,#85b4ff)",
        gradient6: "linear-gradient(2.69deg ,#2476fe,#85b4ff)",
        gradient7: "linear-gradient(1.23deg ,#ff865d,#ffb8a3)",
        gradient8: "linear-gradient(180deg ,#e9f1ff,#b4cfff)",
        gradient9:
          "linear-gradient(225deg ,#85b1ff00,#62d9ff,#a4e9ff,#63d9ff,#85b1ff00)",
        gradient10: "linear-gradient(180deg ,#e5f0fc,#ffffff00)",
        gradient11: "linear-gradient(180deg ,#ffffff,#ffffff00)",
        gradient12: "linear-gradient(191.04deg ,#ffffff,#ffffff00)",
        gradient13: "linear-gradient(165.32deg ,#ffffff,#ffffff00)",
      },
      textShadow: { ts: "0px 0px  5px #013289" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
