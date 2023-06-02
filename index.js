import { Configuration, OpenAIApi } from "openai";
import readline from "readline";

const configuration = new Configuration({
    organization:"org-gnhOea89Jq2X0ToaBjG4u8Br",
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async (input) => {

    await openai
    .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input}],
    })
    .then((res) => {
        console.log(res.data.choices[0].message.content);
        userInterface.prompt();
    })
    .catch((error) => {
        console.log(error);
    });
});