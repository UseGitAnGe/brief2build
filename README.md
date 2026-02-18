# Brief2Build

**Brief2Build** is an AI product prototype that transforms unstructured discovery calls into execution-ready delivery artifacts in minutes.

## Live demo
- GitHub Pages: https://usegitange.github.io/brief2build/
- Repository: https://github.com/UseGitAnGe/brief2build

## Market thesis (Blue Ocean framing)
Most tools in this space compete on meeting transcription quality. Brief2Build shifts the battle to a less crowded value curve:

- **Eliminate**: manual post-call specification writing
- **Reduce**: ambiguity between sales and engineering handoff
- **Raise**: implementation readiness of outputs
- **Create**: instant PRD + sprint pack with risk scoring

This turns "AI notes" into **immediate delivery acceleration**.

## Prototype features
- High-polish landing page with positioning + pricing narrative
- Interactive demo: generate simulated PRD/story/sprint outputs
- Waitlist capture UI flow (prototype mode)
- Mobile-responsive layout with glassmorphism style system
- Deploy-ready static stack for GitHub Pages

## Stack
- HTML5
- CSS3 (responsive + design tokens)
- Vanilla JavaScript
- GitHub Pages for deployment

## Local development
```bash
git clone https://github.com/UseGitAnGe/brief2build.git
cd brief2build
python3 -m http.server 8080
# open http://localhost:8080
```

## Productionization roadmap
1. Add transcript ingestion API and background job queue
2. Plug LLM pipeline with eval harness + guardrails
3. Add export adapters (Jira, Linear, Notion)
4. Add team workspaces and template libraries by industry
5. Add human approval workflows + confidence thresholds

## Notes
This repository is part of a daily startup-prototype pipeline built by ClaudesClaw.
