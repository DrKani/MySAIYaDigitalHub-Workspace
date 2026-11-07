# MySAIYa Adventure: board game

A 100-tile board game for **MySAIYa Play it → Adventure**. Players roll a die, move along a winding board, and do whatever the tile they land on says: play a challenge, spin the Bonus Wheel, climb a Grace path, slide down a Lesson path, or pause to reflect.

- `index.html`: the game. It is self-contained, needs no build, and works on phones.
- `adventure-content.js`: every question, answer, story and prompt. Edit content here, not in the HTML.

## Run it

Open `index.html` in a browser. To show it in the site's game modal, load it in an iframe:

```html
<iframe src="/games/adventure/index.html" title="MySAIYa Adventure" style="width:100%;height:100%;border:0"></iframe>
```

Copy both files to the webapp's `public/` folder. The webapp is a separate repository and is not part of this workspace.

To check one challenge without playing a whole game, add `?test=` and a format name: `match`, `scramble`, `clue`, `fact`, `quick`, `hunt`, `bhajan`, `blank` or `spin`.

## Rules

1. 1–4 players. Each turn, roll the die and move.
2. Pass a challenge to earn **Karma points**. Miss it and step back 2 tiles.
3. Moves caused by the wheel, a Grace or Lesson path, or a step back do not trigger the tile you land on.
4. First to tile 100 wins. The reward screen also names the player with the most Karma.
5. **Relaxed mode** (on the setup screen) turns off the Quickfire timer for younger players.

## Tiles

| Tile | Colour | What happens | Pass mark |
|---|---|---|---|
| 🔗 Match Up | Violet | Pair 4 names with their partners | Fewer than 3 mistakes |
| 🔤 Unscramble | Crimson | Rebuild 3 scrambled names from letter tiles, then see the hidden bhajan with your words lit up | 2 of 3 |
| ❓ Who Am I? | Navy | Answer 3 clue questions, multiple choice | 2 of 3 |
| ⚖️ Fact or Fiction | Indigo | Say whether 4 statements are true. Fiction statements swap in a wrong answer from the same deck | 3 of 4 |
| ⚡ Quickfire | Orange | Answer as many as you can in 30 seconds (6 untimed questions in relaxed mode) | 4 correct |
| 🔍 Word Hunt | Cyan | Find 4 hidden names in a 10×10 grid by dragging or by tapping first and last letters | 3 of 4 |
| 🎵 Bhajan Builder | Plum | Tap 6 bhajan words in the order they are sung. Peeking at the full line costs 5 Karma | Fewer than 4 slips |
| ✏️ Fill the Blank | Lilac | Fill 3 blanks, multiple choice | 2 of 3 |
| 🎡 Bonus Wheel | Gold | Spin for: Leap +3 · Roll again · +30 Karma · Blessing Shield · Double points · Back 2 · Seva Star · Bonus question | – |
| 🪔 Reflection | White | A value prompt to share or think about quietly. +10 Karma | – |
| ⬆ Grace | Teal | A values story, then climb: 4→25, 13→46, 33→52, 42→63, 71→92 | – |
| ⬇ Lesson | Pink | A values story, then slide: 31→10, 48→26, 66→44, 87→64, 98→78 | – |

A **Blessing Shield** cancels the next missed challenge, Lesson slide or "Back 2". **Double** doubles the Karma from the next challenge.

The board layout is fixed, like a printed board. Within each deck, the game uses every item before it repeats one.

## Content and its sources

Every challenge comes from the MySAIYa Adventure workbook (`adventure2.pdf`):

| Deck key | Topic | Used in |
|---|---|---|
| `mothers` | Divine Incarnations and their mothers | Match Up, Quickfire, Fact or Fiction |
| `sun` | Twelve names of the Sun God | Match Up, Quickfire, Fact or Fiction |
| `ramayana` | Ramayana symbolism | Match Up, Quickfire, Fact or Fiction |
| `buddha` | Buddhist chants, Summer Course 1993 | Match Up, Quickfire, Fact or Fiction |
| `vitthala` | Lord Vitthala | Who Am I?, Word Hunt, Quickfire, Fact or Fiction |
| `krishna` | Lord Krishna | Who Am I?, Quickfire, Fact or Fiction |
| `vedic` | Vedic chants at Sai Kulwant Hall | Who Am I?, Quickfire, Fact or Fiction |
| `names1989` | Divine Discourse, 7 April 1989 | Who Am I?, Word Hunt, Quickfire, Fact or Fiction |
| `samyak` | Divine Discourse, 30 May 1999 | Fill the Blank, Quickfire, Fact or Fiction |
| `krishnaWords` | Krishna names and the bhajan "Jai Hari Krishna…" | Unscramble, Bhajan Builder, Word Hunt |
| `deviWords` | Devi names and the bhajan "Srikari Kripakari…" | Unscramble, Bhajan Builder, Word Hunt |

The Grace and Lesson stories and the Reflection prompts are new. They are written around the five human values and use only well-known maxims ("Love All, Serve All", "Help Ever, Hurt Never", "Hands that help are holier than lips that pray"). Please review them before publishing.

### Source issues for review

- **Vitthala:** "Lord took her form and did household chores → VARKARI" is left out. The workbook marks it with a stray `*`, and Varkari is the pilgrim tradition, not a person. The intended answer may be Janabai.
- **Unscramble:** three scrambles in the workbook do not use the same letters as their answers: `RARKSHI` (SRIKARI), `AYNKYRAAHBAI` (ABHAYANKARI) and `EYSISWRAE` (SAYEESWARI). The game reshuffles the answer's own letters for these, so they can still be solved.
- **Spelling:** "BHIRIGUVALLI" is shown as "Bhriguvalli". "WAERSIVAH SR" is joined into one scramble.
- **Discourse 1989:** both "Kalatita" (Master of time) and "Kalateeta" (One who transcends time) are answers. The game never offers both in the same question.
- **Sankarshana:** the clue now shows "(11)" letters, to match the other clues in that deck.

## Adding the other worksheets

The Word Search, Fact or Fiction, Matching, Multi-Faith Quiz, Quickfire, Ramayana quiz, Sathya Sai Quiz and Who Am I worksheets can each become a new deck in `adventure-content.js`. Copy an existing block and set the flags. The board starts using the new deck straight away:

- `match: true`: pairs for Match Up
- `clue: true`: clue questions for Who Am I?
- `blank: true`: fill-in-the-blank items
- `hunt: true`: answers of 4–10 letters can be hidden in Word Hunt
- `scramble: true` plus `bhajan: "…"`: Unscramble and Bhajan Builder

Every deck except scramble decks also feeds Quickfire and Fact or Fiction, using its `ask()` and `fact()` templates.
