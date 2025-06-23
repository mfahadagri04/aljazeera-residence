// imgix.js
const IMGIX_CONFIG = {
  domain: 'aljazeera-residence-beta.vercel.app',
  basePath: 'assets',
  secureURLToken: 'your-secure-token',
  defaultParams: {
    auto: 'format,compress',
    q: 80
  }
};

// Export this configuration object
export const VILLA_CONFIG = {
  "AL-RAYYAN": { imageCount: 19 },
  "AL-THAKIRA": { imageCount: 19 },
  "AL-AZIZIYAH": { imageCount: 16 },
  "AL-KHOR": { imageCount: 17 },
  "RAS-LAFFAN": { imageCount: 7 },
  "AL-RUWAIS": { imageCount: 17 }
};

const buildImgixUrl = (path, params = {}) => {
  const queryParams = new URLSearchParams({
    ...IMGIX_CONFIG.defaultParams,
    ...params
  }).toString();
  return `https://${IMGIX_CONFIG.domain}/${IMGIX_CONFIG.basePath}/${path}?${queryParams}`;
};

export const getVillaCoverImage = (villaName, options = {}) => {
  if (!VILLA_CONFIG[villaName]) {
    console.error(`Villa ${villaName} not found in configuration`);
    return '';
  }
  return buildImgixUrl(`villas/${villaName}/${villaName}-01.jpg`, {
    w: 1200,
    h: 800,
    fit: 'fill',
    ...options
  });
};

export const generateVillaGallery = (villaName, options = {}) => {
  if (!VILLA_CONFIG[villaName]) {
    console.error(`Villa ${villaName} not found in configuration`);
    return [];
  }
  
  return Array.from(
    { length: VILLA_CONFIG[villaName].imageCount }, 
    (_, i) => {
      const num = String(i + 1).padStart(2, '0');
      return buildImgixUrl(
        `villas/${villaName}/${villaName}-${num}.jpg`,
        { w: 1600, h: 1200, fit: 'fill', ...options }
      );
    }
  );
};

// Default export remains the same
export default {
  VILLA_CONFIG,
  getVillaCoverImage,
  generateVillaGallery
};