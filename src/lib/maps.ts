// hl=en 固定英文界面,否则地图会跟随访客浏览器语言
export function googleMapEmbedUrl(address: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(
    address,
  )}&z=16&hl=en&output=embed`;
}

export function googleMapDirectionsUrl(address: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
}
