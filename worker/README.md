# resume-chat

Cloudflare Worker that powers the "Ask about my work" section on joshey.io.

It holds the Anthropic API key server-side (GitHub Pages is static, so the key can
never live in the page) and answers questions using only the resume text embedded in
`src/index.ts`.

## Deploy

You need a Cloudflare account (free tier is plenty) and an Anthropic API key from
https://console.anthropic.com.

```bash
cd worker
npm install

# Log into Cloudflare — opens a browser
npx wrangler login

# Store the API key as an encrypted secret (never goes in a file)
npx wrangler secret put ANTHROPIC_API_KEY
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

## Cost

Runs on `claude-opus-5` with thinking disabled and `effort: "low"` — short factual
answers with no tool use, so latency stays low. The resume system prompt is cached
(`cache_control: ephemeral`), so repeat questions within the cache window read the
prompt at ~10% of input cost.

Rough order of magnitude: a few thousand questions costs single-digit dollars.
Cloudflare Workers' free tier covers 100,000 requests/day.

To cut cost further, swap the model to `claude-haiku-4-5` in `src/index.ts` — quality
drops somewhat but it's roughly 5x cheaper on input and output.

## Security notes

- The API key lives only in Cloudflare's secret store. It is never sent to the browser.
- `ALLOWED_ORIGINS` in `src/index.ts` restricts which sites can call the Worker. Update
  it if the domain changes.
- Request payloads are capped at 10 messages × 1000 characters to bound abuse.
- There is no per-IP rate limit. If the endpoint gets abused, add Cloudflare's Rate
  Limiting rules in the dashboard (free tier includes a basic rule) rather than writing
  one in code.
