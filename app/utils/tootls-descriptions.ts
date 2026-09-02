import toolsDescriptions from "~~/content/tools-descriptions.json";
import type { ITool } from "~/types/interfaces";

const tools = new Map<string, ITool>(Object.entries(toolsDescriptions));

const getTool = (toolName: string) => tools.get(toolName) || null;

export { getTool };
