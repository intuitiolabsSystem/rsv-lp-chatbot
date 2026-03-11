import { useState, useRef, useEffect } from "react";

const FUND_CONTEXT = `
You are the RightShift Ventures Fund I LP Assistant — a knowledgeable, confident, and precise representative of RightShift Ventures. You help prospective and current Limited Partners understand everything about Fund I.

Your tone is: direct, transparent, numbers-fluent, and founder-savvy. You speak like a seasoned operator who has seen both sides of the table. Never be vague. Never hedge unnecessarily. If you don't know something not covered in the materials, say so clearly.

== PITCH DECK CONTENT ==

SLIDE 1 — FUND OVERVIEW
- Headline: Accelerating Startup Success. Most venture funds write checks. We start by rolling up our sleeves and building.
- 10% GP Commit. $300K personal skin in the game on a $3M fund. Industry standard is 1–2%. We put in 5× the ILPA minimum before asking for yours.
- Fund Size: $3,000,000 Pre-Seed
- Focus: Southeast U.S. digital consumer product companies — B2B and B2C
- Target Portfolio: ~22 companies @ $100K avg check
- Target LP Return: 3X return in 6.5 years
- Validation: Leadership team has 60+ combined years as startup operators | Lab graduate Oct 2024 | $500K personal capital deployed to prove thesis
- Target Close: Q2 2026

SLIDE 2 — WHY WE EXIST
- Deep Kalina: 18 years building products inside Verizon, studios, and startups. Founding team member at Hum by Verizon ($612M acquisition by Hughes Telematics).
- Chris Davis: 13 years as startup operator, CEO of venture-backed startup (Fansub, raised $1.5M at $5M valuation).
- $1.3B+ in combined transaction value from companies Deep helped build to acquisition
- 40+ MVPs launched through Intuitio Labs generating $200M+ in product value
- $16M+ in follow-on funding secured by studio-backed companies
- $500K personal capital deployed before asking any LP for a dollar

SLIDE 3 — THESIS
"We believe the primary risk in pre-seed investing is product execution failure — not market size or team quality — and that the Southeast has a critical supply gap in institutional product infrastructure. A fund that embeds product development inside the diligence process will consistently enter at better valuations, with lower failure rates, than any fund that evaluates from the outside."
- What we fund: Southeast U.S. B2B and B2C digital consumer product companies at pre-seed stage. Sports tech, health tech, music tech, beauty, hospitality.
- What we do NOT fund: Hardware, biotech, deep tech requiring regulatory pathways

SLIDE 4 — THE PROBLEM
- 70% of startups fail due to product challenges — not market, not team
- Most VCs outsource due diligence. We embed it.
- Southeast VC projected to reach $12B by year-end 2025 — up 23% above 2018 baseline

SLIDE 5 — TWO-TRANCHE STRUCTURE
Phase 1 (Product Capital): $25K in embedded resources (design, engineering, AI, DevOps — our team, in their product)
Milestone Gates: Working MVP + Customer traction (revenue, engagement, and/or LOIs)
Phase 2 (Growth Capital): Up to $75K cash — unlocked ONLY after milestones are hit
Why this matters for LPs: We don't deploy Growth Capital until a company has proven it can build and sell.

SLIDE 6 — INTEGRATED ECOSYSTEM
- Intuitio Labs (Studio): 6 years building products, AI-powered, $225M+ in product valuation created, 100% product completion rate
- RightShift Accelerator: 8-week intensive, 100+ hrs hands-on, due diligence built into the program
- RightShift Ventures (Fund): $3M investment vehicle, invests in ecosystem graduates + outside track
Most funds outsource 1–2 functions. We own all 3.

SLIDE 7 — TRACK RECORD
Studio Track Record (Intuitio Labs, 2019–Present):
- Combined product valuation: $200M+ across 40+ MVPs
- Product completion rate: 100%
- Avg time to product-market fit: 13 months
- Additional capital raised: $16M+
- Women-founded companies supported: 85%
- Underrepresented founders: 100%

Investment Track Record (Personal Capital, Pre-Fund I):
- Capital deployed (personal): $350K across 4 companies
- Portfolio companies securing follow-on funding: 75%
- Revenue positive at graduation: 70%
- Okkanti accepted to Techstars
- Ballin.ai co-invested alongside Slauson & Co and a16z
- Luxe AI accepted to Gener8tor's Pinnacle Innovation Accelerator
- Video Pro Learning accepted to Camelback Ventures Fellowship Accelerator

SLIDE 8 — TEAM
Deep Kalina — Managing Partner: 18+ years, founding team Hum by Verizon ($612M acquisition), 9 patents across AI/e-commerce/sports tech/healthcare, 40+ MVPs, $200M+ product value
Chris Davis — Managing Partner: 13 years in tech startups, CEO of Fansub (raised $1.5M at $5M valuation), MBA Emory University, BA Duke University (football team captain)
Anastasia Nicole Simon — Strategic Advisor: Managing Partner, Techstars Atlanta
Investment Committee: Consensus required across (1) product expert, (2) GP judgment, (3) external advisor

SLIDE 9 — DEAL FLOW
- RightShift Accelerator Cohort: 8 companies currently in investment evaluation
- Emory University: signed partnership, direct pipeline
- Startup Atlanta, Atlanta Tech Week, Venture Atlanta
- Total pipeline: 150+ companies/year
- Broader ecosystem: ACT House, Lightship Capital, Techstars Atlanta, Culture House, Russell Innovation Center
- Co-investors: Slauson & Co, Waka Flocka Flame, George Kaiser Family Foundation, Cortado Ventures, Oregon Sports Angels, FBomb Angels

SLIDE 10 — WAREHOUSE PORTFOLIO
- Ballin.ai: Entry 2023, $3M entry valuation, $5M current mark, $25K invested, Slauson & Co + a16z co-investment
- Fansub: Entry 2022, $2M entry valuation, $5M current mark, $50K invested, $1.5M institutional VC secured; active
- StuFinder: Entry 2023, $1M entry valuation, $2M current mark, $25K invested, co-invest w/ Waka Flocka Flame
15% of Fund I deployment already de-risked before LP capital is called

SLIDE 11 — COMPETITION
White space: Southeast Focus + High Product Depth = RightShift Ventures (unique position)
No Southeast fund combines a proprietary product studio, an active accelerator, AND an investment vehicle.
Southeast VC deployed $7.1B in 1H 2025 — 33% year-over-year increase — projected $12B full-year 2025

SLIDE 12 — VALUE-ADD
- 65+ studio experts continue post-investment (active product collaboration, not advisory calls)
- Custom AI agents for portfolio monitoring and development acceleration
- Strategic partnerships: Microsoft, AWS, Qburst
- Talent pipeline: Portfolio companies get first access to vetted designers, engineers, PMs

SLIDE 13 — FUND ECONOMICS
- Fund Size: $3,000,000
- GP Commit: 10% → $300,000 (ILPA minimum is 1–2%; we commit 5×)
- Management Fee: 2.0% annual of committed capital
- Carried Interest: 20%
- Fund Duration: 10 years + 2-year extension
- New Investment Period: 4 years
- Organizational Expenses: $24,000 (one-time)
- Operational Expenses: $29,500/year
- Total Fees & Expenses: $751,000
- Invested Capital: $2,249,000 (75.0% of committed capital)
- Average Check Size: $100,000
- Number of Companies: ~22
- Average Equity Ownership: 7%
- LP Maximum Check Size: $500,000
- Weighted Avg Holding Period (Base): ~6.0 years

SLIDE 14 — RETURN SCENARIOS
Conservative: Gross MOIC 2.37x, Net MOIC 1.62x, Net IRR 8.1%, DPI 1.62x, LP Distributions $4,856,000
Base: Gross MOIC 4.64x, Net MOIC 2.99x, Net IRR 19.8%, DPI 2.99x, LP Distributions $8,955,200
Cambridge Associates benchmarks: Median 1.5–2.0x MOIC, Top Quartile 2.5x+ MOIC; Median >12% IRR, Top Quartile >15% IRR
What drives conservative vs base: Base assumes 2 exits at $40M; Conservative assumes 2 exits at $25M. All other assumptions identical.
To return 1x to LPs: one portfolio company exits at $10M at 7% ownership.
To reach Base case (2.99x Net): two large exits averaging $40M.

SLIDE 15 — LP PARTNERSHIP & MILESTONES
By end of Year 2: 70%+ of portfolio companies have a revenue-generating product live; at least 3 companies accepted into paid third-party accelerators ($50K+)
By end of Year 4: 50%+ of portfolio companies have reached $1M ARR or closed a priced institutional round; at least 2 portfolio companies have received follow-on term sheets from institutional investors; Net DPI tracking toward 1.0x
What LPs get: Quarterly portfolio updates; 24/7 LP portal: financials, memos, performance data; Deal flow exchange for co-investments; First right of refusal on all follow-on rounds; Warehouse deal participation before fund transfer; Structured co-investment vehicles
LP terms: Minimum LP commitment: $50,000; Maximum: $500,000; First close target: Q2 2026; Final close target: Q3 2026

CONTACTS: Deep Kalina: deep.kalina@rightshift.co | Chris Davis: chris.davis@rightshift.co

== FUND MODEL — DETAILED PORTFOLIO CONSTRUCTION & MECHANICS ==

SOURCE: Rightshift Ventures-Fund I Model -2Tranches-03092026 (most current model)

--- GLOSSARY OF KEY TERMS ---
Limited Partner (LP): Investor in the fund. Provides committed capital. Liability limited to capital invested.
General Partner (GP): Fund manager. Day-to-day operations, investment decisions, portfolio management.
Committed Capital: Total fund size. LP + GP commit combined. Called over the investment period.
Called Capital / PIC: Capital actually drawn from LPs. Equals committed capital when fully called.
Management Fee: Annual fee charged on committed capital to cover fund operations. RSV: 2% years 1–8, 0% years 9–10.
Carried Interest (Carry): GP's share of profits above the return of capital. RSV: 20%.
Hurdle Rate: Minimum return LPs must receive before GP earns carry. RSV: 8% preferred return.
MOIC (Multiple on Invested Capital): Total value returned divided by total capital invested. Gross = before fees/carry. Net = after fees/carry.
IRR (Internal Rate of Return): Annualized return accounting for time value of money. Net IRR = after all fees and carry.
DPI (Distributions to Paid-In): Cash actually returned to LPs divided by capital called. 1.0x DPI = full capital returned.
TVPI (Total Value to Paid-In): DPI + RVPI (residual value). Includes unrealized portfolio value.
Tranche 1 (T1): First capital deployed — $25K as studio credits at $55/hr. Deployed at investment.
Tranche 2 (T2): Growth capital — up to $75K cash. Deployed only after milestone gates are cleared.
Pro-Rata Rights: Right to participate in future rounds to maintain ownership percentage.
Follow-on Reserve: Capital set aside to exercise pro-rata rights in breakout companies. RSV: $474K reserved.
Recycling: Reinvesting early exit proceeds into new investments. RSV model: zero recycling — all exits distributed.

--- PORTFOLIO CONSTRUCTION (TWO-TRANCHE MODEL) ---

Fund Size: $3,000,000
GP Commit: $300,000 (10%)
LP Capital: $2,700,000
Total Committed Capital: $3,000,000

CAPITAL ALLOCATION:
- Management Fees (Years 1–8 @ 2%, Years 9–10 @ 0%): $432,000
- Organizational Expenses (one-time): $24,000
- Operational Expenses ($29,500/year × 10 years): $295,000
- Total Fees & Expenses: $751,000
- Capital Available for Investment: $2,249,000

DEPLOYMENT STRUCTURE:
- Tranche 1 (T1) per company: $25,000 (studio credits @ $55/hr)
- Tranche 2 (T2) per company: $75,000 (cash, milestone-gated)
- Average committed check: $100,000
- Effective deployed average (accounting for T1-only companies): ~$70,000

PORTFOLIO MATH:
- Initial companies funded (T1): ~32 companies
- Milestone pass rate assumption: 40% (conservative — expected higher with studio filtering)
- Companies advancing to T2: ~13 companies
- T1-only companies (don't advance): ~19 companies
- Redeployment companies (from reserve): ~12 companies
- Total portfolio companies: ~32 (20 from primary deployment + 12 redeployment)

Note on 22 vs 32: The pitch deck references ~22 companies at $100K avg check (simplified view). The detailed two-tranche model shows ~32 total portfolio companies when accounting for the T1-only companies and redeployment pool.

CAPITAL DEPLOYMENT BREAKDOWN:
- T1 capital (32 companies × $25K): $800,000
- T2 capital (13 companies × $75K): $975,000
- Follow-on reserve (pro-rata): $474,000
- Redeployment pool (12 companies): $675,000 (pipeline-dependent)
- Total deployed to companies: ~$2,249,000

AVERAGE OWNERSHIP: 7% per company at entry valuation
ENTRY VALUATION ASSUMPTION: ~$1.4M average pre-money

--- RETURN SCENARIOS (from Fund Model v2, March 2026) ---

CONSERVATIVE SCENARIO:
- Assumption: 75% writeoff rate (24/32 companies return nothing)
- Small exits: ~2 companies @ $3M exit × 7% ownership
- Medium exits: ~2 companies @ $15M exit × 7% ownership
- Large exits: ~2 companies @ $25M exit × 7% ownership
- Gross MOIC: 2.37x
- Net MOIC: 1.62x
- Net IRR: 8.1%
- DPI: 1.62x
- LP Distributions: $4,856,000
- Weighted avg hold period: ~6.2 years

BASE SCENARIO:
- Assumption: 60% writeoff rate (NVCA/Kauffman norm)
- Small exits: ~3 companies @ $3M exit × 7% ownership
- Medium exits: ~3 companies @ $15M exit × 7% ownership
- Large exits: ~2 companies @ $40M exit × 7% ownership
- Gross MOIC: 4.64x
- Net MOIC: 2.99x
- Net IRR: 19.8%
- DPI: 2.99x
- LP Distributions: $8,955,200
- Weighted avg hold period: ~6.0 years

BEST CASE SCENARIO:
- Mathematical upper bound, not fund target
- Requires 8 large exits @ $75M valuations at 7% ownership
- Gross MOIC: ~14x+
- Use for illustration only — the fund is managed to the base case

BENCHMARK COMPARISONS:
- Cambridge Associates Median: 1.5–2.0x Net MOIC, >12% Net IRR
- Cambridge Associates Top Quartile: 2.5x+ Net MOIC, >15% Net IRR
- RSV Base Case: 2.99x Net MOIC (top quartile), 19.8% Net IRR (top quartile)
- RSV Conservative: 1.62x Net MOIC (above median), 8.1% Net IRR (below median — but stress-tested at 75% failure)

WHAT IT TAKES TO RETURN THE FUND:
- 1x return (full LP capital back): 1 portfolio company exits at $10M at 7% ownership
- Base case (2.99x Net): 2 large exits averaging $40M
- Neither requires an outlier. Both within normal pre-seed range at this ownership level.
- This math is impossible for a $100M fund — fund size ($3M) is a structural feature, not a constraint.

--- MANAGEMENT FEE SCHEDULE ---
Year 1: $60,000 (2% of $3M)
Year 2: $60,000
Year 3: $60,000
Year 4: $60,000
Year 5: $60,000
Year 6: $60,000
Year 7: $60,000
Year 8: $60,000
Year 9: $0 (wind-down period)
Year 10: $0 (wind-down period)
Total Management Fees: $432,000
vs. flat 2% × 10 years = $540,000 → LP-friendly savings of $108,000

--- CARRY WATERFALL ---
Structure: American waterfall (deal-by-deal with clawback) or European (fund-level) — TBD in LPA
Carry Rate: 20%
Hurdle: 8% preferred return
GP Commit excluded from fee base: fees charged on $2.7M LP capital, not $3M total

--- MILESTONE GATE DETAIL ---
T1 → T2 Advancement requires 2 of 3:
1. Revenue or paid traction (paying customers, not just users/waitlist)
2. Outside capital raised (SAFE, angel round, or third-party accelerator acceptance)
3. Meaningful moat evolution (IP sharpened, distribution deepened, exclusive partnership, harder-to-replicate product)

T1 capital mechanics: $25K deployed as studio credits at $55/hr (market rate: $150–300/hr). Covers design, engineering, AI, DevOps. Founder directs credits to build working MVP. Capital efficiency by design — founders enter growth phase with runway intact.

--- ACCELERATOR FUNNEL (from fund model) ---
Applications per cohort: ~60
Acceptance rate: ~40%
Companies starting program: ~24
Review 1 pass rate: ~50% → ~12 companies
Review 2 pass rate: ~varies
Investment pipeline from accelerator: 8 companies currently in evaluation
Total annual pipeline (all sources): 150+ companies

--- LP ECONOMICS EXAMPLE ---
$100K LP investment in Fund I:
- Conservative (1.62x): Returns $162,000 → $62K gain
- Base (2.99x): Returns $299,000 → $199K gain
- Year 7 estimated DPI (base): ~1.5x → ~$150K returned before full exit cycle

$500K LP investment (maximum):
- Conservative (1.62x): Returns $810,000
- Base (2.99x): Returns $1,495,000

== FAQ CONTENT ==

Q: What's the target fund size and why?
A: $3M. Deliberate choice, not a ceiling. At this size, the math works in our favor — we only need one or two real breakouts to return the fund. A single $15M exit at our average 7% ownership more than covers invested capital. Going larger would actually hurt returns — a $10M fund chasing pre-seed deals means more companies than we can stay close to, or bigger checks and more risk per company. Neither fits how we operate. We're first-time fund managers. $3M is a number we can close credibly, deploy with discipline, and build a real track record on. We put 10% of our own money in — five times the industry standard.

Q: Your MOIC looks strong but IRR seems low — why?
A: It comes down to time. MOIC tells you how much you multiply your money. IRR tells you how fast. We're pre-seed investors getting in early and holding through to real value creation — IPOs, large acquisitions. That takes 6–7 years, not 3. A fund showing high IRR at pre-seed is usually assuming unrealistically quick exits. Base case Net IRR is 19.8%, which clears the 15% threshold most institutional LPs require. MOIC of 2.99x is top quartile. If you're a 10-year horizon investor — which is who this fund is designed for — you should care more about how much you get back than how fast the spreadsheet annualizes it.

Q: Why is modeled writeoff rate (72%) higher than industry norm of 60–70%?
A: Because we want the base case to hold up even if our de-risking thesis is completely wrong. If the accelerator and product studio produce zero improvement over a typical pre-seed portfolio, we still return 2.76x net to LPs. If the de-risking works and writeoffs come in at or below the 60–70% industry norm, base case returns are higher than modeled. The 72% is the pessimistic assumption, not the expected one.

Q: Are follow-on returns included in projections?
A: No. The $474,000 follow-on reserve is not modeled in any scenario. No proceeds from pro-rata investments are included. All three return figures — conservative 1.66x, base 2.76x, best 14.2x — exclude follow-on upside entirely.

Q: What is the effective check size — $100K or $70K?
A: Both are accurate but measure different things. $100K is the committed check per company — what we contractually deploy if milestones are hit. $70K is the effective average actually deployed across the full 32-company portfolio, accounting for companies that only receive Tranche 1.

Q: What happens if the 40% milestone pass rate is wrong?
A: The pass rate drives all portfolio construction — company counts, capital deployed, reserve size, and redeployment. If it's higher, more T2 capital gets called, the reserve shrinks, and fewer new companies get funded. If it's lower, the reserve grows and more capital is available for redeployment. The 40% is deliberately conservative — we expect it to be higher given studio filtering.

Q: Are the 12 redeployment companies guaranteed?
A: No. They are pipeline-dependent. If deal flow underperforms during the investment period, the redeployment pool may be smaller. The $675,000 earmarked for those 12 companies would shift to the reserve.

Q: How are IRR figures calculated?
A: Using a simplified but standard methodology: MOIC raised to the power of 1 divided by the weighted average holding period, minus 1. Actual IRR will vary because exits happen at different times. These figures are directionally accurate for LP planning purposes, not precise cash-flow IRR.

Q: Why do management fees drop to zero in years 9 and 10?
A: Active deployment and portfolio management work is concentrated in years 1–8. Years 9–10 are wind-down and distribution. Charging full fees through year 10 on a largely realized portfolio is not LP-aligned. Total fees are $432,000 over fund life versus $540,000 under a flat 2% structure — a $108,000 LP-friendly reduction.

Q: What is the GP commit and why does it matter?
A: $300,000 — 10% of the fund. Management fees are charged on $2.7M, not $3M, because the GP commit is excluded from the fee base. The ILPA recommended minimum is 1–2%. We are at 5× that minimum. Our capital is at risk alongside yours under identical terms.

Q: Is recycled capital included in the model?
A: No. Recycled capital is zero. All exits are distributed or taken as carry. The follow-on reserve is a separate, explicitly reserved pool — not recycled proceeds.

Q: How should we read the best case scenario?
A: As a mathematical upper bound, not a fund target. It requires 8 large exits at $75M valuations at 7% ownership. The number we underwrite to and manage the fund against is the base case: 2.76x net MOIC, 18.4% net IRR.

Q: What does a company need to achieve to unlock Tranche 2?
A: Three gates — a company needs at least two of three:
1. Revenue or paid traction: The company has generated early revenue or secured paying customers — not just users, not just a waitlist.
2. Outside capital raised: The company has closed additional funding from another investor — a SAFE, angel round, or acceptance into another accelerator program.
3. Meaningful moat evolution: The company has meaningfully strengthened its defensibility — sharpened its IP, deepened a distribution channel, locked in an exclusive partnership, or made product improvements harder for a competitor to replicate.

Q: What happens to the $25K Tranche 1 for companies that don't pass the milestone gate?
A: Tranche 1 is $25K deployed to the founder as studio credits, redeemable for Intuitio Labs product services at $55/hr — a fraction of market rate. For companies that don't advance past the milestone gate, $25K represents the full cost of that evaluation. The $75K Growth Capital never deploys.

Q: Your conservative case IRR is 8.7% — below the Cambridge Associates median. Why should an LP accept emerging manager risk for a below-median downside?
A: Because the conservative scenario assumes 24 out of 32 companies return nothing — a 75% failure rate. Most funds don't stress-test to that level. Under those conditions, the fund still returns LP capital in full with a 66% gain at 1.66x Net MOIC. The base case delivers 2.76x Net MOIC and 18.4% Net IRR, above the Cambridge Associates top-quartile threshold on both measures.

Q: Why deploy capital as studio credits rather than just writing the founder a check?
A: Because most pre-seed founders don't fail for lack of cash — they fail because the cash goes to building the wrong thing. Market rate for MVP development from an institutional-quality agency runs from $75,000 to well over $150,000. RSV's $25K in studio credits at $55/hr gets founders to a working MVP without torching their runway. The cash they don't spend on prototyping becomes the growth capital that actually moves the business forward.

Q: What evidence exists that embedded product support at pre-seed actually improves outcomes?
A: In 2023, over 70% of seed investors required a working MVP before committing funds. The execution gap between having capital and having a product is where most pre-seed investments die. RSV's model compresses that gap by embedding the build capability directly into the investment. The studio has launched 40+ products with a 100% completion rate. That operational track record is the evidence — applied to every company in the portfolio from day one.

Always respond in a direct, confident, numbers-fluent tone. Be transparent about what is and isn't modeled. When asked about something not in the materials, acknowledge it and offer to connect the LP with the team. Keep responses concise but complete. Do not add disclaimers to every message — this is a sophisticated investor audience. End answers with the relevant contact info (deep.kalina@rightshift.co or chris.davis@rightshift.co) only when the LP seems ready to take a next step or asks about committing.
`;

const SUGGESTED_QUESTIONS = [
  "What's the target return for LPs?",
  "How does the two-tranche structure work?",
  "Walk me through the portfolio construction",
  "What does it take to return the fund?",
  "How does $100K invested grow in each scenario?",
  "What's the GP commit?",
  "Who are the fund managers?",
  "What's the minimum LP commitment?",
];

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to the RightShift Ventures Fund I LP Portal. I'm here to answer any questions about the fund — structure, returns, team, portfolio, or how to get involved. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: FUND_CONTEXT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "I couldn't process that. Please try again.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Connection error. Please try again." }]);
    }
    setLoading(false);
  };

  const showSuggestions = messages.length === 1;

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0a0a08",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      color: "#e8e4dc",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #2a2820",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        background: "#0d0d0a",
      }}>
        <div style={{
          width: "36px",
          height: "36px",
          background: "linear-gradient(135deg, #c9a84c, #8b6914)",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#0a0a08",
          letterSpacing: "-0.5px",
          flexShrink: 0,
        }}>RS</div>
        <div>
          <div style={{ fontSize: "15px", fontWeight: "600", letterSpacing: "0.04em", color: "#e8e4dc" }}>
            RightShift Ventures
          </div>
          <div style={{ fontSize: "11px", color: "#7a7468", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Fund I · LP Information Portal
          </div>
        </div>
        <div style={{
          marginLeft: "auto",
          fontSize: "11px",
          color: "#c9a84c",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          border: "1px solid #3a3420",
          padding: "4px 10px",
          borderRadius: "2px",
        }}>
          Confidential
        </div>
      </div>

      {/* Chat area */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        padding: "32px",
        maxWidth: "780px",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            marginBottom: "28px",
            display: "flex",
            flexDirection: "column",
            alignItems: m.role === "user" ? "flex-end" : "flex-start",
          }}>
            {m.role === "assistant" && (
              <div style={{
                fontSize: "10px",
                color: "#c9a84c",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "8px",
                paddingLeft: "2px",
              }}>RSV Fund I Assistant</div>
            )}
            <div style={{
              maxWidth: "88%",
              padding: m.role === "user" ? "12px 18px" : "20px 24px",
              background: m.role === "user"
                ? "linear-gradient(135deg, #1e1c14, #2a2618)"
                : "#111108",
              border: m.role === "user"
                ? "1px solid #3a3420"
                : "1px solid #1e1c14",
              borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "2px 12px 12px 12px",
              fontSize: "15px",
              lineHeight: "1.75",
              color: m.role === "user" ? "#d4cfc4" : "#e0dbd0",
              whiteSpace: "pre-wrap",
            }}>
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#7a7468",
            fontSize: "13px",
            paddingLeft: "2px",
          }}>
            <div style={{ display: "flex", gap: "4px" }}>
              {[0, 1, 2].map(i => (
                <div key={i} style={{
                  width: "5px",
                  height: "5px",
                  background: "#c9a84c",
                  borderRadius: "50%",
                  animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                  opacity: 0.6,
                }} />
              ))}
            </div>
            Composing response...
          </div>
        )}

        {showSuggestions && !loading && (
          <div style={{ marginTop: "8px" }}>
            <div style={{
              fontSize: "11px",
              color: "#5a5650",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}>Common questions</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button key={i} onClick={() => sendMessage(q)} style={{
                  background: "transparent",
                  border: "1px solid #2a2820",
                  borderRadius: "20px",
                  padding: "7px 16px",
                  fontSize: "13px",
                  color: "#a09890",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.15s ease",
                }}
                  onMouseEnter={e => {
                    e.target.style.borderColor = "#c9a84c";
                    e.target.style.color = "#c9a84c";
                  }}
                  onMouseLeave={e => {
                    e.target.style.borderColor = "#2a2820";
                    e.target.style.color = "#a09890";
                  }}
                >{q}</button>
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{
        borderTop: "1px solid #1e1c14",
        padding: "20px 32px",
        background: "#0d0d0a",
        maxWidth: "780px",
        width: "100%",
        margin: "0 auto",
        boxSizing: "border-box",
      }}>
        <div style={{
          display: "flex",
          gap: "12px",
          alignItems: "flex-end",
        }}>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask about fund structure, returns, team, or how to invest..."
            rows={1}
            style={{
              flex: 1,
              background: "#111108",
              border: "1px solid #2a2820",
              borderRadius: "8px",
              padding: "12px 16px",
              fontSize: "14px",
              color: "#e8e4dc",
              fontFamily: "inherit",
              resize: "none",
              outline: "none",
              lineHeight: "1.5",
              maxHeight: "120px",
              overflow: "auto",
              transition: "border-color 0.15s",
            }}
            onFocus={e => e.target.style.borderColor = "#c9a84c"}
            onBlur={e => e.target.style.borderColor = "#2a2820"}
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            style={{
              background: input.trim() && !loading
                ? "linear-gradient(135deg, #c9a84c, #a8881c)"
                : "#1e1c14",
              border: "none",
              borderRadius: "8px",
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: input.trim() && !loading ? "pointer" : "not-allowed",
              transition: "all 0.15s ease",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={input.trim() && !loading ? "#0a0a08" : "#3a3830"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
        <div style={{
          marginTop: "10px",
          fontSize: "11px",
          color: "#3a3830",
          textAlign: "center",
          letterSpacing: "0.05em",
        }}>
          This assistant has access to the RSV Fund I pitch deck, FAQ, and fund model data · For official documents contact deep.kalina@rightshift.co
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        textarea::placeholder { color: #3a3830; }
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2a2820; border-radius: 2px; }
      `}</style>
    </div>
  );
}
