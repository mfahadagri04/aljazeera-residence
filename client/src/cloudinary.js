import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const cld = new Cloudinary({
  cloud: {
    cloudName: "daerjbaol", // Your cloud name
  },
});

// Exact folder names from your Cloudinary
const VILLA_FOLDERS = {
  "AL-RAYYAN": 19,
  "AL-THAKIRA": 19,
  "AL-AZIZIYAH": 16,
  "AL-KHOR": 17,
  "RAS-LAFFAN": 7,
  "AL-RUWAIS": 17
};

// Gets the main image (first image) for a villa
export const getVillaImage = (villaName) => {
  const folderName = Object.keys(VILLA_FOLDERS).find(name => 
    name.replace("AL-", "") === villaName.replace("AL-", "")
  ) || villaName;
  
  return cld.image(`villas/${folderName}/${folderName}-01`)
    .resize(fill().width(1200).height(800))
    .format("auto")
    .quality("auto")
    .toURL();
};

// Generates all gallery images for a villa
export const generateVillaGallery = (villaName) => {
  const folderName = Object.keys(VILLA_FOLDERS).find(name => 
    name.replace("AL-", "") === villaName.replace("AL-", "")
  ) || villaName;
  
  const imageCount = VILLA_FOLDERS[folderName] || 0;
  
  return Array.from({ length: imageCount }, (_, i) => 
    cld.image(`villas/${folderName}/${folderName}-${String(i + 1).padStart(2, "0")}`)
      .resize(fill().width(1600).height(1200))
      .format("auto")
      .quality("auto")
      .toURL()
  );
};

export default cld;