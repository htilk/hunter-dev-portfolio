# Hunter Dev Portfolio

Personal software engineering portfolio built with HTML, CSS, and JavaScript, deployed with Azure Static Web Apps, and connected to GitHub Actions for CI/CD.

## Purpose

This repository contains a public developer portfolio for presenting my software engineering background, featured project areas, technical skills, and cloud deployment experience.

The site currently highlights backend systems, applied AI interests, Azure deployment, automation, developer tooling, and upcoming open-source work.

## Live Site

https://lemon-beach-0f0735d0f.7.azurestaticapps.net

## Tech Stack

- HTML
- CSS
- JavaScript
- Azure Static Web Apps
- GitHub Actions

## Features

- Responsive single-page portfolio layout
- Phoenix, Arizona local time and weather display
- Featured project cards
- Skills section
- Azure deployment section
- GitHub and LinkedIn links
- Dynamic footer year
- Client-side weather API integration

## Project Structure

```text
hunter-dev-portfolio/
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
|-- AGENTS.md
|-- .gitignore
`-- .github/
    `-- workflows/
        `-- azure-static-web-apps-lemon-beach-0f0735d0f.yml
```

## Local Development

Clone the repository:

```bash
git clone https://github.com/htilk/hunter-dev-portfolio.git
cd hunter-dev-portfolio
```

Run a local static server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Opening `index.html` directly in a browser can work, but a local server better matches the hosted environment and avoids browser restrictions around client-side requests.

## Deployment

This project is deployed with Azure Static Web Apps. Because it is a plain static site, there is no build step, API folder, or generated output directory.

Azure Static Web Apps settings:

| Setting | Value |
|---|---|
| App location | `/` |
| API location | Leave blank |
| Output location | Leave blank |
| Build behavior | Skip app build |

The Azure Static Web Apps resource is connected to this GitHub repository. Changes pushed to `main` trigger a production deployment.

## GitHub Actions CI/CD

The deployment workflow is defined in `.github/workflows/azure-static-web-apps-lemon-beach-0f0735d0f.yml`.

The workflow:

- runs on pushes to `main`
- runs on pull requests targeting `main`
- uploads the static site to Azure Static Web Apps
- creates or updates Azure preview environments for pull requests
- closes the Azure preview environment when a pull request is closed

The workflow uses the Azure Static Web Apps deployment action and the repository secret `AZURE_STATIC_WEB_APPS_API_TOKEN_LEMON_BEACH_0F0735D0F`.

## Planned Improvements

- Add links to individual project repositories
- Add screenshots or demo images
- Add a resume download link
- Add project case studies
- Add an experience section
- Add custom domain support
- Add a deployment/status badge
- Add privacy-friendly analytics

## Author

Hunter Tielke

- GitHub: [htilk](https://github.com/htilk)
- LinkedIn: [Hunter Tielke](https://www.linkedin.com/in/hunter-tielke-0119a3237/)
