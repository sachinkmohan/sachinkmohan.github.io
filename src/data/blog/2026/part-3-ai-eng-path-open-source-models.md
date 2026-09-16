---
title: Learnings from the course - AI Engineer Path(Scrimba) - Part 3 - Open Source Models
slug: part-3-ai-eng-path-open-source-models
description: Notes on Deployment
date: "2026-07-04"
tags:
  - AI
---

## Notes

- LLM's are built on Transformers
- Until GPT 2, OpenAI was open source.
- Meta launched LLama
- An AI Engineer should know to use both Open Source and Closed Source models.

## Hugging Face Models

You will need a token with read access to run inference on the models.

Model used - [facebook/bart-large-cnn](https://huggingface.co/facebook/bart-large-cnn?inference_api=true&inference_provider=hf-inference&language=js&client=huggingface.js)

The syntax to run is given under code snippets(too much detail, look around) on the link above. This will help you run it quickly.

```js
import { InferenceClient } from "@huggingface/inference";
const client = new InferenceClient(process.env.HF_TOKEN);


export async function chatCompletion() {
  const response = await client.chatCompletion({
  messages: [
        {
          role: "system",
          content: "Respond like you are William Shakespeare",
        },
        {
          role: "user",
          content: "Tell me a fun fact about the internet",
        },
    ],
    model: "katanemo/Arch-Router-1.5B:hf-inference",
  });
```

Note: Role "system" gives personality and doesn't mix-up with the user prompt.

## Running AI models in the Browser

This can be achieved by using Transformer.js from HF

I was surprised to see how 'Xenovo Transformers' was easily accessible without 'npm i @huggingface/transformers'.
npm step was mentioned on the HF website.

Note - Lesson learned, there are literally CDN for a lot of npm packages.

```js
import { pipeline } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.8.0";

// Create a new object detection pipeline

const detector = await pipeline("object-detection", "Xenova/yolos-tiny");
```

## Running your Own Model

- This can be done by installing Ollama model on the MAC.
- The model could be run locally by doing 'npm run'
- The browser is run and can be run through query params.
