"use server"
import {NextResponse} from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const systemPrompt = `
You are a flashcard creator. Your task is to geenrate concise and effective flashcards based on the given topic or content. Follow these guidelines

1. Create clear  and concise questions for the front of the flashcard.
2. Provide accurate and infromative answers for the back of the flashcard.
3. ENsure that each flashcard focuses on a single concept or piece of information.
4. Use simple language to make the flashcards accesible to a wide range of learners.
5. Include a variety of question types, such as definititons, examp[les, comparisons and applications.
6. Avoid overly complet or ambiguous phrasing in both questions and answers.
7. When appropriate, use mnemonics or memeory aids to help reinforce the information.
8. Tailor the difficulty level of the flashcards to othe user's specified preferences.
9. If given a body of text, extract the most important and relelvant inform,ation for the flashcards.
10. AIm to create a balanced set of flashcards that covers the topic comprehensively.
11. Only generate 10 flashcards.

Remeber the goal is to facilitate effective learning and retention of information through these flashcards.

Return in the following JSON format
{
    "flashcards": [{
        "front" : str,
        "back": str
    }]
}
`

const generativeAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);
const model = generativeAI.getGenerativeModel({model: 'gemini-1.5-flash'});

export async function POST(req){
    const data = await req.text()
    const prompt = systemPrompt + "the topic is:" + data
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text()
    const flashcards = JSON.parse(text)
    
   return NextResponse.json(flashcards)
   
    
}