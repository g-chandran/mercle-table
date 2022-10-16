// Truncates given string to fixed threshold
export const textTruncate = (
  text: string,
  threshold: number
): { text: string; isModified: boolean } =>
  text.length > threshold
    ? { text: `${text.slice(0, threshold - 3)}...`, isModified: true }
    : { text, isModified: false };
