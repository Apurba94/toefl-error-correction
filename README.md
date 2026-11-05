# Error Correction

Find the mistake in a sentence and learn the rule, for cleaner writing under time pressure.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the TOEFL iBT and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Error Correction.exe` from the [latest release](https://github.com/Apurba94/toefl-error-correction/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/toefl-error-correction/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Finding your own mistakes quickly is a skill. Each of twelve original sentences has four marked parts and one error, in agreement, tense, articles, prepositions, word form, countable nouns, gerunds, pronouns, comparatives, parallel structure or conditionals. Find it, then read the rule.

Sections: Practice, Progress, About.

## How to use it

1. Read the sentence in **Practice** and choose the marked part that is wrong.
2. Say the corrected sentence aloud after each answer.
3. Use the same habit when you proofread your emails and posts.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
