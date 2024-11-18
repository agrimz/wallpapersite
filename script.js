function downloadWallpaper(imageName) {
  const a = document.createElement('a');
  a.href = imageName;
  a.download = imageName;
  a.click();
}