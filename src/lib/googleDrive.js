// src/lib/googleDrive.js

// Giả sử bạn đã có access token hợp lệ
export const getDriveImages = async () => {
  const folderId = "ID_THU_MUC_GOOGLE_DRIVE";
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name,thumbnailLink,webContentLink)&key=YOUR_API_KEY`
  );
  const data = await res.json();
  return data.files;
};
