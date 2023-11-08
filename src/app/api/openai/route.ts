import { NextRequest, NextResponse } from "next/server"
import { openAI } from "./options";

export async function POST(request: NextRequest) {
  const { word } = await request.json();

  const chatCompletion = await openAI.chat.completions.create({
    messages: [{ role: 'user', content: `일본어 ${word} 단어의 예문, 읽기, 해석 3개씩 찾아줘` }],
    model: 'gpt-3.5-turbo',
  });

  return NextResponse.json(chatCompletion.choices)
}