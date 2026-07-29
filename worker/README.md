# resume-chat

Cloudflare Worker that powers the "Ask about my work" section on joshey.io.

It holds an OpenRouter API key server-side (GitHub Pages is static, so the key can
never live in the page) and answers questions using only the resume text embedded in
`src/index.ts`.

## Deploy

You need a Cloudflare account (free tier is plenty) and an OpenRouter API key from
https://openrouter.ai/keys.

```bash
cd worker
npm install

# Log into Cloudflare — opens a browser
npx wrangler login

# Store the API key as an encrypted secret (never goes in a file)
npx wrangler secret put OPENROUTER_API_KEY
# paste the key when prompted

npx wrangler deploy
```

Deploy prints a URL like `https://resume-chat.<your-subdomain>.workers.dev`.

Paste that into `CHAT_ENDPOINT` at the bottom of `v2.html`:

```js
const CHAT_ENDPOINT = 'https://resume-chat.your-subdomain.workers.dev';
```

## Local development

```bash
npx wrangler dev          # serves on http://localhost:8787
python3 -m http.server 8000   # from the repo root, serves the site
```

`http://localhost:8000` is already in the allowlist. Point `CHAT_ENDPOINT` at
`http://localhost:8787` while testing.

## Editing the resume the model sees

`RESUME` in `src/index.ts` is the model's entire world. The system prompt forbids
inventing anything outside it, so if you add a job or a number to the site, add it
here too or the chat won't know about it. Redeploy with `npx wrangler deploy`.

## Changing the model

The model is an OpenRouter slug set in `wrangler.toml` under `[vars] MODEL`, not
hardcoded in `src/index.ts`. To swap models (e.g. from `anthropic/claude-opus-5` to
`anthropic/claude-sonnet-5`, or a different provider entirely), edit that value and
run `npx wrangler deploy` — no code changes needed. Browse available models and
pricing at https://openrouter.ai/models.

## Cost

Routes through OpenRouter, which adds a small margin on top of the underlying
provider's per-token price. Pricing depends entirely on which `MODEL` is configured —
check the model's page on openrouter.ai/models for current rates.

Cloudflare Workers' free tier covers 100,000 requests/day.

## Security notes

- The API key lives only in Cloudflare's secret store. It is never sent to the browser.
- `ALLOWED_ORIGINS` in `src/index.ts` restricts which sites can call the Worker. Update
  it if the domain changes.
- Request payloads are capped at 10 messages × 1000 characters to bound abuse.
- There is no per-IP rate limit. If the endpoint gets abused, add Cloudflare's Rate
  Limiting rules in the dashboard (free tier includes a basic rule) rather than writing
  one in code.
