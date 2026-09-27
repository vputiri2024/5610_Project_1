# Vincent Putiri — Full-Stack Product Developer

**CS5610 Web Development · Project 1 · Northeastern University**

A personal introduction site that ties together a non-linear career — culinary school, music school, finance, entrepreneurship, product delivery, and now computer science — into a single, legible story: **Full-Stack Product Developer**. Not just someone who can build the thing, but someone who can research it, decide what ships, engineer it, and measure whether it created value.

**Live site:** https://vputiri2024.github.io/5610_Project_1/index.html
**Author:** Vincent Putiri · [GitHub](https://github.com/vputiri2024)

---

## Why this site exists

Resumes and LinkedIn compress a career into dense, chronological bullet points. For a candidate whose path doesn't follow the usual template, that format hides the throughline. This site is a place to tell that story directly, and a jumping-off point for future technical projects that demonstrate the work.

### User personas

| Persona                | Need                                                                                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Vince (site owner)** | A way to introduce his skillset before an interview — marketing beyond what a resume or LinkedIn profile can convey — and a home for future project demos. |
| **Hiring manager**     | A fast, low-effort way to gauge an applicant's skillset and the value they'd bring to a role, without decoding a dense resume.                             |

### User stories

- _As the site owner_, I want a site that concisely describes my career so that the value I bring is easy to understand, I'm differentiated in the candidate pool, and I can compete for the best roles.
- _As a hiring manager_ who reviews many applicants, I want an easy way to assess a candidate's skills and the value they would bring to a role.

---

## Site structure

The site is organized around a three-stage **value creation pipeline**. Each stage maps to a page and to a card on the landing page.

| #   | Page            | Theme                                                                        | What it covers                                                                                                                  |
| --- | --------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 01  | `index.html`    | **Product** — _Research it. Design it. Decide what ships and in what order._ | 11 years at Fidelity Investments (project management → product delivery), Wealthscape platform strategy, PMP · CSM · CSPO       |
| 02  | `build.html`    | **Build** — _Engineer it. Ship it. Repeat!_                                  | Northeastern MSCS coursework and in-progress projects (e.g. a family meal-planning app)                                         |
| 03  | `business.html` | **Business** — _Did it create value for the customers and the business?_     | Founding partner & investor at Catalyst Restaurant (2011–present); cofounder of JetPub Scientific Communications (2015–present) |

A credentials strip (Harvard ALM · Babson MBA · Northeastern MSCS · PMP/CSM/CSPO) and a footer with location and links appear on every page.

---

## Tech stack

Static site — no framework, no build step.

- **HTML5** — semantic layout (`header` / `nav` / `main` / `section` / `footer`)
- **CSS3** — custom styles in `css/stylesheet.css` layered on top of **Bootstrap 5.3** (via CDN) for the grid, navbar, and cards
- **Vanilla JavaScript (ES modules)** — `js/main.js` adds the landing-page card interaction: hovering one pipeline card highlights it and dims the others
- **Tooling** — ESLint 10 (flat config, `@eslint/js` recommended rules) and Prettier for consistent formatting

---

## Getting started

### Run locally

Because the site is fully static, you can open `index.html` directly in a browser. A local server is recommended so the ES module in `js/main.js` loads without file-protocol restrictions:

```bash
git clone https://github.com/vputiri2024/5610_Project_1.git
cd 5610_Project_1

# any static server works, e.g.
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:3000` (serve) or `http://localhost:8000` (Python).

### Lint and format

```bash
npm install          # installs ESLint + Prettier dev dependencies
npm run lint         # eslint .
npm run format       # prettier --write .
```

ESLint is configured for 2-space indent, double quotes, required semicolons, and Unix line endings. Prettier's rules take precedence over any conflicting stylistic ESLint rules via `eslint-config-prettier`.

---

## Design notes

- **One idea per page.** Each of the three pages answers a single question a hiring manager would ask: _Can you define the right thing? Can you build it? Did it work?_
- **Bootstrap for structure, custom CSS for personality.** Bootstrap handles responsive layout; the stylesheet adds the segment dividers, hover lift, and active/dim card states that make the pipeline feel like one connected system.
- **Minimal JavaScript.** The only script is the card interaction — enough to reinforce the "pick a stage" mental model without adding a framework to a content site.

---

## Roadmap

- Fill in the Build and Business pages with project write-ups and outcomes
- Wire up the Contact button and footer LinkedIn/GitHub links
- Deploy and add the live URL above
- Link out to future project repos as they're completed

---

## AI Usage
This README was created using Claude Fable 5.1

Script / Prompt: 
# Project 1 Vincent Putiri Full-Stack Product Developer Website
As a developer and expert at drafting technical information that is accessible to English 
speaking developers. Please take my project overview which I will provide and my github 
repository url which I will provide and draft a comprehensive but concise README for 
developers visiting this repository.

## License

[MIT](./LICENSE.MD) © Vincent Putiri
