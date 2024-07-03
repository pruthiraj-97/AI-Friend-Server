const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,}=require("@google/generative-ai");
  const apiKey = process.env.GEMINI_API_KEY
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 100,
    responseMimeType: "text/plain",
  };
  
module.exports={model,generationConfig}