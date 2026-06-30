---
title: Learnings from the course - AI Engineer Path(Scrimba) - Part 2 - Deployment (WIP 🚧)
slug: learnings-ai-engineer-path-part-2-deployment
description: Notes on Deployment
date: "2026-06-24"
tags:
  - AI
---

## Few Tips

- Never include API Key in the code. Keep it in .env file.
- Web App needs security headers. Helmet JS by Express which handle security is recommended.
- When a client sends a request to the server, it responds back and proper security headers must be set in order to display the data in a safe way. They are as follows
- P.S - Web App needs security headers.
  - CSP(Content-Security-Policy) -> blocks malicious content.
  - HSTS(Strict-Transport-Security) -> to force secure connections.
  - X-Frame-Options -> to prevent clickjacking
  - X-Content-Type-Options -> to prevent MIME-sniffing.

## Coming up Next - Node Environment
