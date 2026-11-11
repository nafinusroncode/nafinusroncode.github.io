import { certificates } from "../data/profile";

// Keep bundled certificates available even when remote data or an old cache exists.
export const mergeCertificates = (records = []) => {
  const result = [...certificates];
  for (const record of Array.isArray(records) ? records : []) {
    if (!record || !(record.Img || record.img)) continue;
    const certificate = {
      ...record,
      id: String(record.id),
      Img: record.Img || record.img,
      Title: record.Title || record.title || "Sertifikat",
      Description: record.Description || record.description || "Dokumen sertifikat dan informasi pendukung.",
    };
    if (!result.some((item) => item.id === certificate.id || item.Img === certificate.Img)) {
      result.push(certificate);
    }
  }
  return result;
};

export const readCachedCertificates = () => {
  try {
    return mergeCertificates(JSON.parse(localStorage.getItem("certificates")));
  } catch {
    return mergeCertificates();
  }
};
