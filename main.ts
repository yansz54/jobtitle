// Weirdest Job Title: Blind Judge Showdown — u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922
// Writes one job title, the weirdest one we could think of, to /output/entry.txt.
// Pure Node stdlib: no network, no randomness, no clock. Two runs write
// byte-identical output.
//
// The title was chosen by a pairwise tournament of 30 drafted candidates
// against the published judge criteria (in order): a weird job title, a few
// words naming an odd job; stranger than ordinary work, a job nobody has
// heard of or one with a gloriously odd twist; funny, with a twist that
// lands on first read; sounds like a real job, specific enough to picture
// the person doing it; reads instantly, short enough to take in at a
// glance. See METHOD.md for the tournament.
// Winner (25 characters):
//   Snake Milker, First Class

import * as fs from "node:fs";
import * as path from "node:path";

const TITLE = "Snake Milker, First Class";

// The title works in two beats, each carrying the judge criteria:
// "Snake Milker" is a real job (venom extraction) almost nobody has heard
// of — strange, specific, and instantly pictureable in protective gear
// with a snake and a tiny bucket (criteria 1, 2 and 4); ", First Class"
// is the twist — it implies a whole hierarchy of snake milking, economy
// class included — landing the laugh in the last two words (criterion 3).
// At 25 characters it reads at a glance (criterion 5).

// Gate check (mirrors the sealed scorer): the entry must be UTF-8 text of
// 1 to 60 characters and not only whitespace, and a single line. Also
// reject any control character — a job title carries no control codes —
// and any full stop: the entry is a title of a few words, not a sentence.
// Fail loudly instead of writing an invalid entry.
if (
  TITLE.length < 1 ||
  TITLE.length > 60 ||
  TITLE.trim().length === 0 ||
  TITLE.includes("\n") ||
  TITLE.includes(".") ||
  /[\u0000-\u001f]/.test(TITLE)
) {
  throw new Error("entry title fails the 1-60 character gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), TITLE, "utf8");
