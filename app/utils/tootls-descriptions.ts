import toolsDescriptions from "~~/content/tools-descriptions.json";
import type { ITool } from "~/types/interfaces";

const tools: Record<string, ITool> = toolsDescriptions;

const getTool = (toolName: string) => tools[toolName] || null;

export { getTool };
