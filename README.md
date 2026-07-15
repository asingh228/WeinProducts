# OMEGA ARIS-660B Integrated Product Campaign

An AI-assisted video campaign, product storytelling system, and responsive launch experience for the OMEGA ARIS-660B bullion coin testing system by Wein Products Inc.

[View the live experience](https://asingh228.github.io/WeinProducts/)

## Project overview

This project translates a specialized technical product into a coordinated launch story for bullion professionals. The assignment extended well beyond a landing page: it included campaign strategy, product positioning, concept development, scriptwriting, storyboarding, generative video production, visual asset creation, editorial direction, and the design and implementation of the final web experience.

The client needed a complete media system that could introduce the OMEGA ARIS-660B, explain why full-volume acoustic analysis matters, establish confidence in the technology, and create anticipation ahead of commercial availability. The resulting campaign combines a primary product film, eight short-form ads, supporting imagery, technical visualizations, and a modern product site into one consistent narrative.

The work was designed to feel closer to a contemporary product launch than a traditional industrial equipment presentation: focused messaging, cinematic product imagery, memorable campaign concepts, progressive technical education, and a clear path from awareness to product interest.

The final deliverables include:

- A campaign video package comprising a primary product overview and eight advertising concepts.
- Scripts, narrative structures, shot concepts, and storyboards developed for multiple audiences and campaign angles.
- AI-generated and art-directed video and image assets refined through an editorial workflow.
- A live React experience deployed through GitHub Pages.
- A portable static build that can be uploaded to a conventional web server or integrated into a future commerce platform.

## The client brief

The work began by translating stakeholder conversations, source documents, product photography, brand materials, technical diagrams, and legal considerations into a focused set of requirements.

The main objectives were to:

- Explain what the product is within the first screen.
- Position acoustic resonance as the core product differentiator.
- Communicate that the system helps evaluate the entire coin—not only a localized center point.
- Present technical information without overwhelming a non-engineering buyer.
- Develop the primary product story, scripts, storyboards, shot language, and supporting campaign concepts.
- Create a family of ads that could communicate different benefits while remaining part of one recognizable campaign.
- Support a launch-stage “Coming soon” state while leaving room for future Shopify or add-to-cart integration.
- Give one primary product video and eight campaign videos substantial space within the experience.
- Deliver a polished result on a short production timeline.
- Ensure technical and marketing language used appropriately qualified claims such as “helps verify.”

## Campaign and experience strategy

The central creative challenge was to turn a technical testing process into stories that could be understood quickly. Video concepts were developed around recognizable risks, moments of doubt, contrasting outcomes, product demonstrations, and the value of inspecting more than a localized area of a coin.

The campaign-development process included:

- Converting technical source material and client conversations into audience-facing story premises.
- Writing and refining the primary product narrative and short-form advertising scripts.
- Building storyboards, shot progressions, visual references, and timing plans before generation and editing.
- Exploring multiple creative routes so individual ads could emphasize trust, risk, speed, workflow, or product differentiation.
- Generating video shots and supporting visual assets across multiple AI platforms.
- Selecting, sequencing, compositing, and refining generated material into coherent edits in Final Cut Pro.
- Maintaining consistent product proportions, brand language, lighting, color, and messaging across separately generated scenes.

The web experience then gives the campaign a durable product context. It uses progressive disclosure to move visitors from a simple value proposition into deeper product education:

1. **Immediate product identification** — The opening section names the product, explains its purpose, and pairs it with a recognizable product view.
2. **Three concise proof points** — Acoustic resonance, full-volume analysis, and workflow clarity establish the core story at a glance.
3. **Technical visualization** — A live animated waveform gives the acoustic technology a responsive visual identity without relying on video.
4. **Problem-and-solution comparison** — Conventional localized checking is contrasted with full-volume acoustic analysis.
5. **Media experience** — A YouTube-powered playlist combines the main overview with eight campaign ads, custom thumbnails, persistent volume controls, scroll-aware playback, and direct video selection.
6. **Launch statement** — The closing composition reinforces the product’s market positioning and future availability.

## AI-assisted creative production

AI was used as a production accelerator across design, content, imagery, and implementation—not as a replacement for product judgment or client collaboration.

### Visual development

- Product photography, supplied references, brand assets, and rough infographic concepts were analyzed to establish a consistent visual language.
- Generative image workflows were used to explore premium product environments, lighting, material treatments, coin imagery, technical comparison concepts, and launch-section compositions.
- Selected visual directions were refined into web-ready assets with controlled crops, corrected proportions, brand-aligned color, and space reserved for responsive copy.
- Existing assets were reconstructed or reinterpreted when the supplied source was better suited as a reference than as final production artwork.

### Content and product storytelling

- Product documentation and stakeholder language were synthesized into a concise narrative hierarchy.
- AI-assisted drafting helped explore headlines, proof points, explanatory copy, and transitions between technical and commercial ideas.
- Claims were reviewed and deliberately qualified to support responsible product communication.
- The final structure reflects iterative client feedback about terminology, emphasis, hierarchy, and what a first-time visitor needs to understand.

### Video and media production

- AI-assisted ideation was used to explore campaign hooks, visual metaphors, character moments, technical demonstrations, and short-form ad structures.
- Product information was translated into scripts, voiceover directions, scene descriptions, shot lists, and storyboards before production.
- Generative video workflows were used to develop cinematic shots, product contexts, transitions, and campaign-specific imagery.
- Multiple model outputs were evaluated for continuity, product fidelity, composition, motion quality, and editorial usefulness.
- Final Cut Pro was used to assemble and refine footage, shape pacing, establish narrative rhythm, and prepare finished campaign assets.
- The completed video set was organized into a coherent viewing sequence with a dedicated product overview followed by eight ads.
- YouTube thumbnail imagery was collected and incorporated into the custom media navigation.
- AI-assisted debugging and browser testing were used to work through autoplay restrictions, caption defaults, persistent volume state, playlist continuity, and cross-origin player behavior.
- Final videos remain YouTube-hosted, keeping the deployable web package lightweight and easy to maintain.

### Frontend implementation

- AI-assisted coding accelerated component construction, responsive CSS, interaction logic, asset routing, and deployment setup.
- Each generated or suggested implementation was reviewed against the live page, client feedback, mobile behavior, browser limitations, and deployment constraints.
- The result is a purpose-built interface rather than a generic generated template.

## Selected design and engineering details

### Responsive visual system

The layout adapts from a full-width desktop product narrative to a focused mobile sequence. Important artwork receives breakpoint-specific composition rather than simple proportional shrinking. Text panels, media navigation, proof points, and the closing product scene are restructured for phone readability.

### Live acoustic waveform

The acoustic visualization is generated from 72 independently animated bars. Each bar receives its own amplitude, duration, and phase offset, producing varied movement without stretching a raster image. Reduced-motion preferences are respected by the global motion rules.

### YouTube playlist experience

The media section uses the YouTube IFrame Player API with a native nine-video playlist. It includes:

- Scroll-triggered play and pause behavior.
- Muted autoplay that respects modern browser policies.
- A clear user-controlled volume toggle.
- Captions disabled at initialization while preserving the viewer’s ability to enable them.
- Persistent volume preference across playlist items.
- Custom thumbnail navigation and previous/next controls.
- Automatic progression through the campaign queue.

### Portable deployment

All local assets use portable relative paths. The Vite build can therefore be hosted:

- At a domain root.
- Inside a subdirectory.
- Through GitHub Pages.
- As the frontend foundation for a future Shopify or commerce implementation.

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/pages.yml`, creates the production build, and deploys it to GitHub Pages.

## What this project demonstrates

- Client discovery and iterative stakeholder communication.
- Translation of a complex technical product into accessible buyer-facing language.
- Campaign concept development, copywriting, scripts, shot lists, and storyboards.
- Multi-model generative video direction and continuity management.
- Editorial judgment, pacing, and post-production in Final Cut Pro.
- Visual direction for an industrial product with a premium consumer presentation.
- Responsible use of generative AI in a commercial creative workflow.
- Responsive design and breakpoint-specific art direction.
- React component development and interaction design.
- Third-party media API integration and browser-policy troubleshooting.
- Legal and messaging awareness in product marketing.
- Static-site packaging, CI/CD, and deployment portability.
- Rapid delivery without sacrificing presentation quality or maintainability.

## Technology

- OpenAI Image 2.0
- Codex 5.5 and 5.6
- Gemini 3.1 Pro and 3.5 Flash
- Veo 3.1
- Anthropic Fable and Opus 4.8
- Grok 4.5
- Final Cut Pro
- React 19
- Vite 6
- Modern CSS
- YouTube IFrame Player API
- GitHub Actions
- GitHub Pages

## Project structure

```text
src/
  App.jsx              Page structure, playlist behavior, and interactions
  styles.css           Responsive design system and animation
public/assets/
  generated/           Art-directed and generated presentation assets
  productshots/        Product photography
  video-thumbnails/    Overview and campaign thumbnails
  branding/            Brand source material
.github/workflows/
  pages.yml            Automated production deployment
```

## Local development

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

The upload-ready website is generated in `dist/`. Upload the contents of that directory—not the `dist` folder itself—to the destination web root.

## Updating content

Video titles, thumbnails, and YouTube IDs are defined in the `videos` array near the top of `src/App.jsx`.

```js
{
  title: 'Product overview',
  image: asset('assets/video-thumbnails/product-overview.jpg'),
  youtubeId: '0Zgb-dHvVNw'
}
```

The shared `ComingSoon` component controls the launch-state buttons. It can later be replaced with a commerce link, Shopify buy button, or product availability component.

## Product communication note

This experience presents acoustic resonance as one component of a responsible verification workflow. Product copy intentionally uses qualified language and does not position a single testing method as a substitute for appropriate metallurgical, physical, and professional evaluation.
