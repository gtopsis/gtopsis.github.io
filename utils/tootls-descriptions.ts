import toolsDescriptions from "@/content/tools-descriptions.json";

interface Tool {
  definition: string;
  icon?: string;
}
const tools: Record<string, Tool> = toolsDescriptions;

const getToolDescription = (toolName: string) =>
  tools[toolName].definition || "";

export { getToolDescription };
