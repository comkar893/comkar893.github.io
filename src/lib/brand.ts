// Brand color for an icon. Very dark logos (such as GitHub or Next.js) are lightened so they stay visible on a dark background,
// while keeping their own hue.
export function brandFill(hex: string): string {
  const channels = [0, 2, 4].map((start) => parseInt(hex.slice(start, start + 2), 16));
  const [r, g, b] = channels;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (luminance >= 0.2) return `#${hex}`;
  const [lr, lg, lb] = channels.map((c) => Math.round(c + (255 - c) * 0.55));
  return `rgb(${lr}, ${lg}, ${lb})`;
}
