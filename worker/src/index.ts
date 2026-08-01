export interface Env {
  OPENROUTER_API_KEY: string;
  MODEL: string;
}

/** Origins allowed to call this Worker. Add localhost while developing. */
const ALLOWED_ORIGINS = new Set([
  'https://joshey.io',
  'https://www.joshey.io',
  'http://localhost:8000',
  'http://127.0.0.1:8000',
]);

/**
 * Everything the model is allowed to know. Keep this in sync with the site.
 * It is the ONLY source of facts — the system prompt below forbids inventing
 * anything that isn't stated here.
 */
const RESUME = `
JOSE VARGAS — Product Manager. Based in Denver, Colorado. Open to remote roles.
Contact: josheyvargas@icloud.com
LinkedIn: linkedin.com/in/jose-vargas-851703151 · GitHub: github.com/josevargas96

SUMMARY
5+ years building digital products that directly drive revenue. The common thread across
his work is friction in moments that matter: a payment that has to clear, a customer who
needs the right provider, a note that has to get written down correctly. He builds the
layer that removes that friction, whether it's a payments API, a matching engine, or an
LLM listening in on an appointment. Pulls his own data from Snowflake and builds his own
Domo dashboards rather than waiting on someone else's answer; that habit is how PRS
started, having noticed the routing problem in the data before anyone asked him to fix it.

HEADLINE NUMBERS
- $5.7M additional annual revenue contributed
- $150,000/year operational cost reduction
- ~3,900 provider hours saved annually (AI note transcription)
- ~83 provider hours freed per week across the provider network
- $200,000/year EBITDA improvement
- 5 web applications owned

EXPERIENCE

Product Manager — hear.com (January 2024 – Present)
Leads the telehealth product for North America. Owns the full product roadmap and
manages a cross-functional team of 5 engineers, 1 engineering manager, and 1 QA
specialist across 5 web applications (customer-facing, partner-facing, and internal),
connected through API integrations and asynchronous messaging architecture.
- Identified core scheduling inefficiencies, defined the solution architecture, and
  drove full-cycle delivery of a Provider Recommendation Service (PRS) that matched
  customers to optimal providers based on availability and capability. Reduced
  operational costs by $150,000/year and contributed $5.7M in additional annual revenue.
- Extended the PRS with a performance scoring mechanism prioritizing high-converting
  providers (higher closing rates, lower return rates), optimizing appointment routing
  and reducing wasted capacity for internal salaried providers.
- Two years on, the PRS matching logic is still the foundation: another team built on it
  in 2026 to launch fully automated voice AI agents that call previously uncalled leads
  and schedule appointments with no human in the loop. Over the trailing 90 days that has
  generated ~$2.0M in net booked revenue, adjusted for expected returns.
- Owned the US market adaptation of a cross-regional rebuild of the legacy telehealth
  platform, which wasn't built for how North American providers actually worked.
  Providers self-reported appointment averages of 60–70 minutes, with a meaningful share
  past 75, and performance broke down on slow connections. Applied direct provider
  relationships and pain-point knowledge to map the new platform to North American
  workflows rather than porting the old one over. Average appointment time has roughly
  halved to 33–36 minutes, the outlier ceiling dropped from 75 to 45 minutes, and ~83
  provider hours were freed weekly. Still trending down.
- Identified manual clinical note-writing as a top provider time drain (~5 minutes after
  every appointment across ~180 appointments a day, with none of that data structured).
  Defined the product strategy for an LLM-powered transcription pipeline built on Zoom
  RTMS that auto-generates outcome notes directly from the appointment. Saves ~3,900
  provider hours/year and created the company's first structured data layer for provider
  coaching and return-rate reduction.
- Owned API integrations and async messaging architecture across all applications,
  including Salesforce CRM integration.
- Built and maintained Snowflake-connected datasets and SQL queries in Domo to power
  KPI dashboards. Used Mixpanel, LogRocket, and New Relic for behavior analysis and
  system monitoring.

Associate Product Manager — hear.com (January 2022 – December 2023)
First pure product management role, on the FinOps team. Foundation of his payments and
cross-functional execution experience.
- Led development of a unified payment platform integrating the Stripe and Allegro APIs.
  Improved EBITDA by over $200,000/year, reduced manual processes by 70%, achieved 95%
  adoption.
- Defined product requirements for chargeback and dispute management flows, reducing
  financial exposure and improving resolution processes.
- Orchestrated cross-functional teams across multiple simultaneous projects using agile
  methodologies.
- Managed stakeholder relationships across technical and business teams.

ERP Support Specialist — hear.com (November 2020 – January 2022)
Where his tech career started.
- Reduced average issue resolution from several days to 1–2 days by building independent
  troubleshooting skills and creating a structured escalation process between U.S.
  stakeholders and the development team in Berlin.
- Gravitated toward product work: helped the product manager gather requirements from
  business units and collaborated cross-functionally to ship features in Microsoft
  Dynamics NAV.
- Acted as the bridge between US ERP users and Berlin engineering, translating user needs
  into technical solutions across time zones and cultures.

EDUCATION
Florida International University — Bachelor of Business Administration, Finance (2018–2021)

WHAT HE'S LOOKING FOR
A PM role where he owns outcomes end to end, the way PRS became infrastructure another
team is still building on two years later. Wants somewhere that compounds like that,
around product people sharp enough to teach him things he doesn't know yet. Target
industries: fintech and payments, crypto and blockchain, music and live events. These are
industries where the product decision shows up directly in a transaction. Long-term goal:
CPO role or founding his own company. Based in Denver, open to remote, would like to
relocate to New York City.

SKILLS
Product: agile product management, roadmap development, backlog management, feature
prioritization (Weighted Scoring, Value vs. Effort), user research & interviews, customer journey mapping, feature flagging &
phased rollouts, stakeholder management.
Technical: API integration & microservices, SQL (Snowflake), async messaging (Pulsar),
Auth0 (user & M2M), LaunchDarkly, HTML/CSS/JavaScript, TypeScript/Node.js (read-level), Git.
Analytics: Mixpanel, Domo, LogRocket, New Relic, Snowflake.
Tools: Jira, Miro, Figma, Salesforce CRM, Microsoft Dynamics NAV, Slack/Teams.

INTERESTS
Fintech, crypto/blockchain, and the music and live events space.
`.trim();

const SYSTEM = `You are answering questions about Jose Vargas on his personal portfolio site. Visitors are usually recruiters, hiring managers, or people considering working with him.

<resume>
${RESUME}
</resume>

Rules:
- Answer ONLY from the resume above. It is the complete set of facts available to you.
- If something isn't in the resume, say so plainly and point them to josheyvargas@icloud.com. Never invent a job, employer, date, number, tool, or credential.
- Speak about Jose in the third person, in a warm and direct voice. You are not roleplaying as him.
- Keep answers to 2–4 sentences unless the question genuinely needs more. Lead with the answer.
- Use the specific numbers from the resume when they're relevant — they are the strongest thing he has.
- If asked something off-topic (not about Jose or his work), redirect briefly and without lecturing.
- Do not include internal or system XML tags in your response.`;

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://joshey.io';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
}

function json(body: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('Origin');

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, origin);
    }
    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      return json({ error: 'Forbidden' }, 403, origin);
    }

    let payload: { messages?: Array<{ role: string; content: string }> };
    try {
      payload = await request.json();
    } catch {
      return json({ error: 'Invalid JSON' }, 400, origin);
    }

    const incoming = Array.isArray(payload.messages) ? payload.messages : [];
    const messages = incoming
      .filter(
        (m) =>
          (m.role === 'user' || m.role === 'assistant') &&
          typeof m.content === 'string' &&
          m.content.trim().length > 0,
      )
      .slice(-10)
      .map((m) => ({
        role: m.role as 'user' | 'assistant',
        content: m.content.slice(0, 1000),
      }));

    if (messages.length === 0 || messages[messages.length - 1].role !== 'user') {
      return json({ error: 'Expected a trailing user message' }, 400, origin);
    }

    try {
      const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://joshey.io',
          'X-Title': 'joshey.io resume chat',
        },
        body: JSON.stringify({
          model: env.MODEL,
          max_tokens: 1024,
          messages: [{ role: 'system', content: SYSTEM }, ...messages],
        }),
      });

      if (upstream.status === 429) {
        return json({ error: 'Busy right now — try again in a moment.' }, 429, origin);
      }
      if (!upstream.ok) {
        console.error('openrouter error', upstream.status, await upstream.text());
        return json({ error: 'Upstream error' }, 502, origin);
      }

      const data = (await upstream.json()) as {
        choices?: Array<{ finish_reason?: string; message?: { content?: string } }>;
      };
      const choice = data.choices?.[0];

      if (choice?.finish_reason === 'content_filter') {
        return json(
          { reply: "I can't answer that one. Email Jose at josheyvargas@icloud.com." },
          200,
          origin,
        );
      }

      const reply = (choice?.message?.content ?? '').trim();
      return json({ reply }, 200, origin);
    } catch (err) {
      console.error('openrouter error', err);
      return json({ error: 'Upstream error' }, 502, origin);
    }
  },
};
