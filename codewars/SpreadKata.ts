export const buildString = (...template: string[]): string => {
  return `I like ${template.join(", ")}!`;
};
