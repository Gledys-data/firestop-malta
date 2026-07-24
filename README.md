# Firestop Selector · Malta

A free, independent web tool that helps installers, architects, and Fire Engineers
identify the correct **generic firestop system category** for a penetration seal on
Maltese construction sites.

**Live app:** https://firestopmalta.com

## What it does

The tool walks the user through four steps:

1. **Penetration type** — plastic pipe, metal pipe (insulated/uninsulated), cable &
   cable tray, linear joint, blank opening, or mixed penetration
2. **Base material** — rigid wall, flexible wall, or floor
3. **Penetration size** — pipe diameter or opening/joint dimensions
4. **Required fire rating** — EI 30 to EI 240 (EN 13501-2 scale)

Based on these answers, it returns the **generic firestop system category** (e.g.
intumescent pipe collar, fire-rated mortar seal, ablative coated board) that matches,
along with a certified product example shown as a reference.

## Independence

This app was developed independently by an engineer with hands-on field experience in
passive fire protection systems, gained through professional work on construction
sites in Malta. It is **not affiliated with, endorsed by, or sponsored by any
manufacturer**. Certified product examples shown in the app are illustrative
references only — always verify the current tested approval before installing.

## Data sources

- **EN 13501-2** — fire classification of construction products and building elements
- **EN 1366-1/2/3/4** — fire resistance test methods for service installations
- **EOTA public ETA database** (eota.eu) — European Technical Assessments
- **Construction Products Regulation (EU) No 305/2011**

## Disclaimer

This tool provides generic guidance only. It does not replace the manufacturer's
current tested approval or the judgment of a warranted Perit / Fire Engineer. Always
verify the specific certified system and installation instructions before installing.

Trademarks belong to their respective owners.

## Privacy

This app uses Google Analytics to understand usage patterns. No personal data is
collected.

## Tech notes

Single self-contained HTML file (no backend, no data collection beyond anonymous
usage analytics, no installation required). Works on any modern mobile or desktop
browser. Hosted on GitHub Pages at gledys-data.github.io/firestop-malta, served under
the custom domain firestopmalta.com.
