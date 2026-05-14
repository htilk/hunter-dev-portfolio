# Hunter Dev Portfolio

Personal software engineering portfolio built with HTML, CSS, and JavaScript, deployed with Azure Static Web Apps, and connected to GitHub-based CI/CD.

## Overview

This repository contains my public developer portfolio site. The goal of this project is to create a clean, professional landing page for showcasing my software engineering work, technical focus areas, and cloud deployment experience.

The site currently highlights backend systems, applied AI interests, cloud deployment, automation, developer tooling, and upcoming open-source work.

## Live Site

Coming soon after Azure Static Web Apps deployment.

## Purpose

This project serves as a central portfolio hub for my public engineering work.

It is designed to:

- Present my software engineering background and technical interests
- Showcase featured projects in backend development, applied AI, and open-source work
- Demonstrate a basic cloud deployment workflow with Azure Static Web Apps
- Use GitHub as the source of truth for version control and deployment
- Provide a foundation that can grow as I add stronger project demos and case studies

## Tech Stack

- HTML
- CSS
- JavaScript
- Azure Static Web Apps
- GitHub Actions

## Current Features

- Responsive single-page portfolio layout
- Phoenix, Arizona local time and weather display
- Featured project cards
- Skills section
- Azure deployment section
- GitHub and LinkedIn links
- Dynamic footer year
- Weather API integration using client-side JavaScript

## Featured Project Areas

### AI-Driven Course Backend

FastAPI backend work for an AI tutoring platform, including analytics endpoints, reporting exports, service-layer logic, and Canvas LMS integration support.

### RuneLite Plugin Development

Upcoming Java plugin work focused on RuneLite API integration, event-driven game-state handling, configurable overlays, and open-source documentation.

### Azure Portfolio Site

Static portfolio site deployed with Azure Static Web Apps and connected to GitHub Actions for automated CI/CD deployment.

## Project Structure

```text
hunter-dev-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore
```

## Local Development

Clone the repository:

```bash
git clone https://github.com/htilk/hunter-dev-portfolio.git
cd hunter-dev-portfolio
```

Run a local development server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also open `index.html` directly in a browser, but using a local server is preferred because the site includes client-side JavaScript that fetches weather data.

## Deployment

This project is designed to deploy with Azure Static Web Apps.

Recommended Azure build settings:

| Setting | Value |
|---|---|
| App location | `/` |
| API location | Leave blank |
| Output location | Leave blank |

Because this is a plain static site, there is no separate build command or output directory.

After Azure Static Web Apps is connected to the GitHub repository, future pushes to the `main` branch will trigger an automated deployment workflow.

## Planned Improvements

- Add live Azure deployment URL
- Add links to individual project repositories
- Add screenshots or demo images
- Add a resume download link
- Add project case studies
- Add an experience section
- Add custom domain support
- Add deployment/status badge
- Add privacy-friendly analytics

## Author

Hunter Tielke

- GitHub: [htilk](https://github.com/htilk)
- LinkedIn: [Hunter Tielke](https://www.linkedin.com/in/hunter-tielke-0119a3237/)