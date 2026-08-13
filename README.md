# blackbox — fake hacker terminal

A single-file, zero-dependency prank terminal. Mash any key and a "breach" writes
itself out character by character — spinners, progress bars, hex dumps, hash
cracking, exfiltration, log wiping, and a giant **ACCESS GRANTED** banner.

Nothing here is real. There is no network activity, no target, no exploit — just
CSS, a canvas, and a hardcoded script. It is a movie prop.

**Live:** https://guyyyy15-web.github.io/blackbox-terminal/

## Run it

Open `index.html` in any browser. That's it — no build, no server, no packages.

## Controls

| key | does |
| --- | --- |
| any key | advance the script (tap anywhere on mobile) |
| `ESC` | reset to the beginning |
| `F` | fullscreen — recommended |
| `S` | toggle keyboard clicks and blips |

## What's inside

- 8 scripted acts: relay hop → port sweep → CDN mapping → RCE → privesc →
  database dump → vault cracking → exfil → log shredding → finale
- after the finale it loops forever on randomized filler, so it never runs dry
- live side panel: CPU/GPU/uplink meters, packet counter, relay mesh with
  drifting latency, sweep radar, traffic feed
- CRT dressing: matrix rain, scanlines, rolling beam, vignette, screen shake

## Layout

Everything is in `index.html` — styles, script, and content. The scripted acts
live in `buildScript()`; edit that array to change the story.
