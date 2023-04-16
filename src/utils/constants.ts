import Locales from "../locales";

export const defaultModel = "gpt-3.5-turbo";

export const availableModels = [
  {
    value: "gpt-3.5-turbo",
    label: "GPT-3.5-TURBO (Default ChatGPT)",
  },
  { value: "gpt-3.5-turbo-0301", label: "GPT-3.5-TURBO-0301" },
  { value: "gpt-4", label: "GPT-4 (Limited Beta)" },
  { value: "gpt-4-0314", label: "GPT-4-0314 (Limited Beta)" },
  { value: "gpt-4-32k", label: "GPT-4-32K (Limited Beta)" },
  {
    value: "gpt-4-32k-0314",
    label: "GPT-4-32K-0314 (Limited Beta)",
  },
];

export const writingCharacters = Locales.writingCharacters;

export const writingTones = Locales.writingTones;

export const writingStyles = Locales.writingStyles;

export const writingFormats = Locales.writingFormats;
