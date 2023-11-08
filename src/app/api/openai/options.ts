import OpenAI from 'openai';

export const openAI = new OpenAI({
  apiKey: process.env.OPENAI_ACCESS_TOKEN as string,
  dangerouslyAllowBrowser: true,
});