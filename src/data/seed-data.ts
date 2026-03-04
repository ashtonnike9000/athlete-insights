export const athletes = [
  {
    id: "grant-fischer",
    name: "Grant Fischer",
    eventFocus: "5K–Marathon",
    shoeSize: "US 10.5",
    weeklyVolume: "100–105 mpw",
    coach: "",
    teamGroup: "",
  },
  {
    id: "cole-hocker",
    name: "Cole Hocker",
    eventFocus: "800–5K (primarily 1500)",
    shoeSize: "Mix of 26 + 25",
    weeklyVolume: "",
    coach: "",
    teamGroup: "",
  },
  {
    id: "charles-hicks",
    name: "Charles Hicks",
    eventFocus: "Marathon / XC",
    shoeSize: "",
    weeklyVolume: "High mileage",
    coach: "Jerry (AVT), Alex (Science)",
    teamGroup: "",
  },
];

export const visits = [
  {
    id: "visit-fischer-1",
    athleteId: "grant-fischer",
    visitDate: new Date("2024-06-01"),
    location: "Nike Campus",
    interviewer: "",
    sessionNotes:
      "Detailed footwear rotation discussion. 80% carbon / 20% non-carbon split. Key insight around balancing leg strength conditioning vs. impact reduction through footwear. Raised important question about whether carbon shoes shift injury patterns to soft tissue.",
  },
  {
    id: "visit-hocker-1",
    athleteId: "cole-hocker",
    visitDate: new Date("2024-06-01"),
    location: "Nike Campus",
    interviewer: "",
    sessionNotes:
      "Comprehensive discussion covering footwear philosophy, spike periodization, mental game, race footwear choices, and spike proto feedback. Strong loyalty to Structure shoe. Effusive praise for Streakfly 2.",
  },
  {
    id: "visit-hicks-1",
    athleteId: "charles-hicks",
    visitDate: new Date("2024-06-01"),
    location: "Nike Campus",
    interviewer: "",
    sessionNotes:
      "Post-marathon reflections. Discussion of damage mitigation philosophy, PT/plyometric approach, recovery protocols, brain-body connection in distance running, data usage, apparel aerodynamics, and footstrike degradation throughout the marathon. Positive feedback on APEX proto.",
  },
];

export const footwearNotes = [
  // ── Grant Fischer ──
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    shoeName: "Vomero 18",
    useCase: "Daily AM training, trail runs, Friday hills",
    frequency: "Daily (Mon AM, Thu AM, Fri hills)",
    sentiment: "positive",
    notes: "Primary non-carbon trainer. Uses on rocky trails for PM runs. Also used for hill work to build foot, calf, and achilles strength.",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    shoeName: "Vomero Plus",
    useCase: "Recovery, volume days",
    frequency: "Wed AM, Sat AM, Thu PM",
    sentiment: "positive",
    notes: "Volume and recovery shoe. Used on recovery Saturday and as PM alternate.",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    shoeName: "Vomero Premium",
    useCase: "Recovery, volume days",
    frequency: "Wed AM (alternate), Thu PM",
    sentiment: "positive",
    notes: "Alternates with Plus for recovery and volume days.",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    shoeName: "Alphafly (AF)",
    useCase: "Workouts, long runs, threshold sessions",
    frequency: "Tue AM+PM, Fri PM, Sun LR",
    sentiment: "very-positive",
    notes: "Primary carbon shoe for ~80% of quality sessions. Double threshold on Tuesdays. Long run on Sunday. Threshold on Friday PM. Used to use Streak LT for Friday PM threshold.",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    shoeName: "Peg 42 Proto",
    useCase: "Friday hills (alternate)",
    frequency: "Occasional (Fri AM alternate)",
    sentiment: "positive",
    notes: "Non-carbon alternative for hill work. Alternates with Vomero 18.",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    shoeName: "Dragonfly",
    useCase: "Track sessions",
    frequency: "Friday AM track",
    sentiment: "positive",
    notes: "Track spike option for Friday AM sessions.",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    shoeName: "Streakfly 2",
    useCase: "Track sessions",
    frequency: "Friday AM track (alternate)",
    sentiment: "very-positive",
    notes: "Described as a 'huge gap filler' — bridges the gap between track spikes and trainers.",
  },
  // ── Cole Hocker ──
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Structure 25/26",
    useCase: "80–90% of all training",
    frequency: "Daily primary trainer",
    sentiment: "very-positive",
    notes: "Primary training shoe. Mix of sizes 26 and 25. Loyal to the Structure due to achilles issues in college. Firm shoe builds lower-leg strength.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Vaporfly",
    useCase: "+400m, road races",
    frequency: "When going straight / road racing",
    sentiment: "positive",
    notes: "Used for distances over 400m and road. 'I wear Vaporflies when I'm going straight.'",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Streakfly 2",
    useCase: "Under 400m, workouts",
    frequency: "Main workout shoe (more than Vaporfly)",
    sentiment: "very-positive",
    notes: "Main workout shoe. 'Perfect, do not change.' Worn more than Vaporfly. No durability concerns. Might be the best shoe for a road mile. Saves legs in training vs. spikes.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Vomero Premium",
    useCase: "Easy runs",
    frequency: "Easy days",
    sentiment: "positive",
    notes: "Easy day shoe. Hasn't tried the Structure Plus.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Dragonfly 2",
    useCase: "1500m prelim rounds (race)",
    frequency: "Race only",
    sentiment: "positive",
    notes: "Used in first 2 rounds of 1500 at major championships.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Victory",
    useCase: "1500m final (race)",
    frequency: "Finals only",
    sentiment: "positive",
    notes: "Used for 1500 final. Could barely feel the plate. 1500 is the distance limit for this shoe. Vic 2 is stable enough (Vic 1 was not).",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Dragonfly Elite",
    useCase: "5K prelim + final (race)",
    frequency: "Race only",
    sentiment: "positive",
    notes: "Used for 5K at championships. Feels 'a little relaxed' compared to the Vic 2.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Dragonfly (normal)",
    useCase: "Spikes (general)",
    frequency: "Limited; race week",
    sentiment: "positive",
    notes: "Generally NOT using DF/Vic unless it's race week. 'I'm afraid of them getting too soft.' On soft surface already.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Lane 28 (proto)",
    useCase: "Spike prototype feedback",
    frequency: "Testing only",
    sentiment: "negative",
    notes: "'Looks too maximalist' — too big to race in.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    shoeName: "Sahara (proto)",
    useCase: "Spike prototype feedback",
    frequency: "Testing only",
    sentiment: "positive",
    notes: "'Looks as big as I'd want it' — 'normal.' Right size profile.",
  },
  // ── Charles Hicks ──
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    shoeName: "Vomero Premium",
    useCase: "Easy runs (road)",
    frequency: "Daily easy runs",
    sentiment: "very-positive",
    notes: "Likes a lot. 'What I wanted was what the Vomero offers now.' Previously wore Hokas in college.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    shoeName: "Vomero Plus",
    useCase: "Easy runs",
    frequency: "Rotation with Vomero Premium",
    sentiment: "very-positive",
    notes: "Likes a lot. Pegasus Premium 'fell to the Vomero Plus' in preference.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    shoeName: "Pegasus Premium",
    useCase: "Easy runs (dirt/gravel)",
    frequency: "Off-road easy days",
    sentiment: "neutral",
    notes: "Used on dirt or gravel surfaces. Fell below Vomero Plus in overall preference.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    shoeName: "Alphafly 3 (AF3)",
    useCase: "All long runs",
    frequency: "Every long run",
    sentiment: "very-positive",
    notes: "Best for 'damage mitigation' — reduce impact. Feels fresher after using. Wears with 1/2 tights.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    shoeName: "Vaporfly",
    useCase: "4:30 pace and faster",
    frequency: "Speed work / race",
    sentiment: "very-positive",
    notes: "'Feels faster.' Used at 4:30 min/mi pace and faster.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    shoeName: "Streakfly",
    useCase: "XC, 400m and under",
    frequency: "XC and short speed work",
    sentiment: "positive",
    notes: "Used for XC (63–67 sec) and 400m distances and under.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    shoeName: "APEX (proto)",
    useCase: "Prototype testing",
    frequency: "Testing",
    sentiment: "very-positive",
    notes: "'I'm settling on my toes really quick.' 'Immediately tipped forward — like going off a roller coaster at the top.' 'Getting a lot of bounce for little effort.' Self-described early adopter.",
  },
];

export const quotes = [
  // ── Grant Fischer ──
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    text: "I'm way less afraid of a stress fracture, stress reaction.",
    topic: "footwear",
    context: "On how footwear innovation has enabled double-threshold sessions and higher quality volume",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    text: "It would be easiest to run in AF all the time but that's not the goal. All the shoe is running for you — feels like especially lower leg.",
    topic: "footwear",
    context: "On the balance between carbon shoe protection and building leg strength",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    text: "Huge gap filler.",
    topic: "footwear",
    context: "Describing the Streakfly 2's role bridging track spikes and trainers",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    text: "Piece of gear that makes me the most hot is a hat.",
    topic: "heat",
    context: "On thermoregulation and gear choices for hot conditions",
  },
  // ── Cole Hocker ──
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "I wear Vaporflies when I'm going straight.",
    topic: "footwear",
    context: "On shoe selection by context — Vaporfly for road and straight-line running",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "80–90% of my work is done in Structures.",
    topic: "footwear",
    context: "On his primary training shoe — loyal to the Structure due to achilles history",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "I'm afraid of them getting too soft.",
    topic: "footwear",
    context: "On why he avoids overly cushioned shoes — concern for achilles and calf conditioning",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "Perfect, do not change.",
    topic: "footwear",
    context: "On the Streakfly 2 — his main workout shoe, worn more than Vaporfly",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "My main workout shoe. I wear these much more than the Vaporfly.",
    topic: "footwear",
    context: "On the Streakfly 2",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "The mental component is such a key factor — maybe the most important factor on race day.",
    topic: "mental",
    context: "On the importance of psychological preparation and confidence for competition",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "Galen w/ the holes in his singlet — that's the coolest thing I've ever seen. Mental edge — I'm doing this and no one else is.",
    topic: "mental",
    context: "On how unique gear choices can become psychological weapons — turning worry into confidence",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "I would say to a high schooler… have your training shoes, and anything you want to spike up for, just wear Streakfly.",
    topic: "footwear",
    context: "Advice for young runners — save spikes for racing, Streakfly for everything else",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "If I saw irrefutable data that no armsleeves made you faster, it'd be stupid to ignore that.",
    topic: "data",
    context: "On how data would influence apparel/gear decisions — trying in practice is the first filter",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    text: "Poor man's altitude.",
    topic: "heat",
    context: "On using sauna heat protocol as a substitute for altitude training",
  },
  // ── Charles Hicks ──
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "Damage mitigation — reduce impact.",
    topic: "footwear",
    context: "On his philosophy for long run footwear — AF3 for all long runs",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "What I wanted was what the Vomero offers now.",
    topic: "footwear",
    context: "On switching from Hokas in college to Nike Vomero — the product finally meets his needs",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "I didn't lift at all for NY — an experiment.",
    topic: "training",
    context: "On replacing weightlifting with daily plyometrics and PT work for marathon prep",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "The greatest recovery tool in the world is time — especially time off of feet. All training volume starts and ends with feet.",
    topic: "recovery",
    context: "On his recovery philosophy — simplicity over gadgets, feet-first approach",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "A high stack-height shoe that's reinforced on the interior.",
    topic: "product-gap",
    context: "Describing what's missing from the Nike line — currently filled by HOKA Arahi. Wants stability + tall stack.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "Brain-body connection is one of the most underrated talents in distance running.",
    topic: "form",
    context: "On proprioception and the ability to perceive form degradation in real time",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "The art of running will always supersede the data — until we're further along in the understanding.",
    topic: "data",
    context: "On balancing data-driven training with intuition and the art of running",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "Heat management might be the most important factor in hot World Champs and Olympics going forward.",
    topic: "heat",
    context: "On the growing importance of thermoregulation in championship apparel and strategy",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "In my head the perfect running outfit has to maximize aerodynamics.",
    topic: "apparel",
    context: "On aero-first apparel philosophy — unless conditions are too hot",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "I'm settling on my toes really quick. Immediately tipped forward — like going off a roller coaster at the top. Getting a lot of bounce for little effort.",
    topic: "footwear",
    context: "First impressions of the APEX prototype — positive energy return feedback",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "Could FW help make people aware of the patterns they're stuck in?",
    topic: "product-gap",
    context: "On whether footwear could help runners identify bad movement patterns — form-cueing innovation opportunity",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    text: "Let the data go.",
    topic: "data",
    context: "On not racing with a watch in the marathon — followed experienced marathoners instead",
  },
];

export const protocols = [
  // ── Grant Fischer ──
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    category: "altitude",
    description:
      "Prefers to adapt to altitude fully first, then layer heat (via sauna, etc.). Heat used as a tool to maintain existing altitude benefits. Racing strategy has shifted: now comes down ~2 weeks before the race, does hard workouts, then races (vs. old approach of racing immediately after coming down).",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    category: "heat",
    description:
      "Notes a hat is the gear that makes him hottest. Feels nice starting a 5K out of an ice vest. Prefers to add heat training after altitude adaptation is complete.",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    category: "recovery",
    description:
      "Uses bike for cross-training at threshold and easy intensities — extra volume with no impact. Interest in recovery metrics: moxy and muscle glycogen.",
  },
  {
    athleteId: "grant-fischer",
    visitId: "visit-fischer-1",
    category: "strength",
    description:
      "Deliberately programs non-carbon shoe runs (hills) to build foot, calf, and achilles strength (muscle + tendon gains). Conditioning legs for high impact is necessary to race on track or road.",
  },
  // ── Cole Hocker ──
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    category: "altitude",
    description:
      "Goes to Provo (~4,500–5K ft) for altitude camp, approximately March only.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    category: "heat",
    description:
      "Does a sauna heat protocol in lieu of altitude — calls it 'poor man's altitude.'",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    category: "recovery",
    description:
      "Massage 1x/week (2x during outdoor track). Rotation of recovery tools: Normatec, Hyperice, Frequency Mat. No HR monitor in running (uses on bike for zone 2). No lactate testing.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    category: "nutrition",
    description:
      "Cherry juice, beet juice before sessions, collagen supplementation. In humid VA summers, really focuses on electrolytes and not getting depleted.",
  },
  {
    athleteId: "cole-hocker",
    visitId: "visit-hocker-1",
    category: "mental",
    description:
      "Core philosophy: turn WORRY into CONFIDENCE. The mental component may be the most important factor on race day. Gear as psychological weapon (Galen's singlet example). Data would influence decisions if irrefutable; trying in practice is the first filter.",
  },
  // ── Charles Hicks ──
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    category: "altitude",
    description:
      "Altitude chamber/tent at home — 10–13,000 ft in home office. Notes it's 'anti-recovery.' Passive altitude work in recovery mode post-marathon. Used for 2–4 months maximum.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    category: "recovery",
    description:
      "Greatest recovery tool is TIME — especially time off feet. All training volume starts and ends with feet. PT every Tuesday, massage every Thursday. Wears compression tights/socks when flying.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    category: "strength",
    description:
      "Didn't lift at all for NY marathon (experiment). Has worked with the same PT since age 14. Replaced lifting with daily plyometric exercises (health-focused) and form intervention. Created symmetry in form and eliminated pain/tightness. Also works on sitting and casual posture.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    category: "heat",
    description:
      "Sees heat management as potentially the most important factor for future hot World Champs and Olympics. Wants aero version of 'radical airflow' — balance of aerodynamics and cooling.",
  },
  {
    athleteId: "charles-hicks",
    visitId: "visit-hicks-1",
    category: "mental",
    description:
      "Brain-body connection is one of the most underrated talents in distance running. Being able to perceive form degradation. Fueling helps degrade less. The more miles you run correctly, the more it becomes natural motion.",
  },
];

export const themes = [
  {
    id: "softness-paradox",
    title: "The Softness Paradox: Protection vs. Conditioning",
    description:
      "All three athletes navigate a tension between cushioned/plated shoes that reduce impact and the need to build lower-leg resilience. Fischer deliberately runs hills in non-carbon shoes. Hocker does 80–90% of work in Structures because he's 'afraid of getting too soft.' Hicks loves tall stack but wants interior reinforcement. The consensus: carbon-plated shoes are transformative for volume and quality, but athletes must intentionally program firmer shoes to maintain structural conditioning — particularly in the posterior chain.",
    athleteNames: "Grant Fischer, Cole Hocker, Charles Hicks",
  },
  {
    id: "fw-innovation-training",
    title: "Footwear Innovation Has Changed Training Capacity",
    description:
      "Fischer directly credits shoe innovation with enabling double-threshold sessions. Hocker's careful spike periodization shows how the Streakfly has absorbed traditional spike territory. Hicks uses AF3 for all long runs purely for 'damage mitigation.' Across the board, modern footwear is allowing athletes to accumulate more quality work with less breakdown.",
    athleteNames: "Grant Fischer, Cole Hocker, Charles Hicks",
  },
  {
    id: "injury-shift",
    title: "Injury Pattern Shift: Skeletal to Soft Tissue",
    description:
      "Fischer raises a critical question: are the shoes diminishing total impact or shifting it elsewhere? He notes more soft-tissue injuries on the posterior chain (achilles, calf, hamstring, glute). This suggests injury prevention R&D may need to address muscular/tendon loading, not just skeletal impact.",
    athleteNames: "Grant Fischer",
  },
  {
    id: "streakfly-gap-filler",
    title: "Streakfly 2: Universal Praise as a Gap Filler",
    description:
      "Both Fischer ('huge gap filler') and Hocker ('perfect, do not change') highlight the Streakfly 2 as essential. Hocker wears it more than the Vaporfly and would recommend it to any high schooler. It uniquely bridges the gap between spike performance and trainer protection.",
    athleteNames: "Grant Fischer, Cole Hocker",
  },
  {
    id: "mental-game",
    title: "Mental Game & Brain-Body Connection",
    description:
      "Hocker places the mental component as 'maybe the most important factor on race day' — philosophy: turn worry into confidence. Hicks calls brain-body connection 'one of the most underrated talents in distance running.' Both suggest gear can serve as a mental edge.",
    athleteNames: "Cole Hocker, Charles Hicks",
  },
  {
    id: "heat-management",
    title: "Heat Management as a Growing Priority",
    description:
      "Fischer notes a hat is the gear making him hottest; Hicks states 'heat management might be the most important factor' at future championships. With climate trends, this is an increasing area of opportunity for apparel and pre-race protocols.",
    athleteNames: "Grant Fischer, Charles Hicks",
  },
  {
    id: "data-art-balance",
    title: "Data: Useful but Not Dominant",
    description:
      "Hocker uses no HR or lactate in running. Hicks didn't race the marathon with a watch. Both conclude: data informs but doesn't dictate. 'The art of running will always supersede the data.' Coaches, not athletes, tend to be the primary data consumers.",
    athleteNames: "Cole Hocker, Charles Hicks",
  },
  {
    id: "product-gaps",
    title: "Product Gaps & Opportunities",
    description:
      "High-stack stability shoe (Hicks) — currently HOKA Arahi, no Nike equivalent. Streakfly 2 preservation (Hocker) — 'perfect, do not change.' Spike proto sizing (Hocker) — Lane 28 too maximalist; Sahara about right. APEX proto (Hicks) — positive early impressions: 'lot of bounce for little effort.' Form-cueing through footwear (Hicks) — could shoes help runners identify bad patterns?",
    athleteNames: "Cole Hocker, Charles Hicks",
  },
];
