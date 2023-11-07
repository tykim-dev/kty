import { NextRequest, NextResponse } from "next/server"
import OpenAI from 'openai';

export const openAI = new OpenAI({
  apiKey: process.env.OPENAI_ACCESS_TOKEN as string,
  dangerouslyAllowBrowser: true,
});

export async function POST(request: NextRequest) {
  const { word } = await request.json();

  const chatCompletion = await openAI.chat.completions.create({
    messages: [{ role: 'user', content: `일본어 ${word} 단어 예문 3개와 해석 찾아줘` }],
    model: 'gpt-3.5-turbo',
  });

  return NextResponse.json(chatCompletion.choices)
}