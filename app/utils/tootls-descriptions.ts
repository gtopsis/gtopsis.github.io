import toolsDescriptions from "~~/content/tools-descriptions.json";
import type { ITool } from "~/types/interfaces";

const tools: Record<string, ITool> = toolsDescriptions;

const getToolDescription = (toolName: string) =>
  tools[toolName].definition || "";

const getTool = (toolName: string) => tools[toolName] || null;

export { getToolDescription, getTool };
