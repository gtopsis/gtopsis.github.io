import toolsDescriptions from "@/content/tools-descriptions.json";

const tools: Record<string, string> = toolsDescriptions;

const getToolDescription = (toolName: string) => tools[toolName] || "";

export { getToolDescription };
