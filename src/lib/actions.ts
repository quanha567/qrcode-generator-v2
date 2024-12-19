"use server";

export const generateQrCode = async (urlGenerate: string) => {
  if (!urlGenerate) return;

  try {
    const url = "https://api.qrcode-monkey.com//qr/custom";

    const headers = {
      accept: "*/*",
      "accept-language": "vi,fr-FR;q=0.9,fr;q=0.8,en-US;q=0.7,en;q=0.6",
      "content-type": "text/plain;charset=UTF-8",
      origin: "https://www.qrcode-monkey.com",
      priority: "u=1, i",
      referer: "https://www.qrcode-monkey.com/",
      "sec-ch-ua":
        '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
    };

    const body = JSON.stringify({
      data: urlGenerate,
      config: {
        body: "circular",
        eye: "frame12",
        eyeBall: "ball14",
        erf1: [],
        erf2: [],
        erf3: [],
        brf1: [],
        brf2: [],
        brf3: [],
        bodyColor: "#000000",
        bgColor: "#FFFFFF",
        eye1Color: "#000000",
        eye2Color: "#000000",
        eye3Color: "#000000",
        eyeBall1Color: "#000000",
        eyeBall2Color: "#000000",
        eyeBall3Color: "#000000",
        gradientColor1: "#000000",
        gradientColor2: "#0277bd",
        gradientType: "linear",
        gradientOnEyes: "true",
        logo: "",
        logoMode: "clean",
      },
      size: 1000,
      download: "imageUrl",
      file: "svg",
    });

    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result?.imageUrl;
  } catch (err) {
    throw err;
  }
};
