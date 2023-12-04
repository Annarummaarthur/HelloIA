const API_KEY = "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"
const OPENAI_COMPLETION_ENDPOINT = 'https://api.openai.com/v1/chat/completions';

async function fetchRecommendations(preference = "how to eat less") {
    const maxTokens = 100;
    

    const res = await fetch(OPENAI_COMPLETION_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                   
                    { role: "user",
                      content: "Give best recommendations for: " + preference
                      }
                ],
                max_tokens: maxTokens,
                n: 5,
                stop: '\n'

            })
        })
        const data = await res.json()
        console.log(data);
        return data.choices.map(choice => choice.message)
}
