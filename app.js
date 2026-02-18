const $ = (id) => document.getElementById(id);

function buildSpecPack(summary) {
  const short = summary.replace(/\s+/g, ' ').slice(0, 160);
  return `📄 PRD\n- Problem: ${short}${summary.length > 160 ? '…' : ''}\n- Target user: Agency PMs and technical founders\n- Success metric: 60% faster project kickoff\n\n🧩 User Stories\n1) As a PM, I upload a transcript and get a complete PRD.\n2) As an engineer, I receive acceptance criteria with edge cases.\n3) As an account lead, I get timeline + risk confidence score.\n\n🛠 Sprint 1 Plan\n- Day 1-2: transcript parser + semantic chunking\n- Day 3-4: PRD/story generation prompts\n- Day 5-6: contradiction/risk detector\n- Day 7-8: export to Markdown + Jira/Linear mapping\n- Day 9-10: QA set + evaluation harness\n\n⚠ Risks\n- Missing constraints from client side\n- Hallucinated assumptions\n- Domain-specific compliance not captured\n\n✅ Mitigation\n- Confidence score per section\n- Unknowns block with mandatory human review\n- Validation checklist before delivery`;
}

$("generate").addEventListener("click", () => {
  const text = $("summary").value.trim();
  const out = $("output");
  if (!text) {
    out.textContent = "Please paste a call summary first.";
    return;
  }
  out.textContent = buildSpecPack(text);
});

$("waitlistForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("email").value.trim();
  const role = $("role").value.trim();
  $("formMsg").textContent = `Thanks ${role}! ${email} is on the waitlist (prototype mode).`;
  e.target.reset();
});
