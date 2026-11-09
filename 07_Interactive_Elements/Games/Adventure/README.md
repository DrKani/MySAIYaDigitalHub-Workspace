# MySAIYa Adventure: board game

A 100-tile board game for **MySAIYa Play it → Adventure**. Players roll a die, move along a winding board, and do whatever the tile they land on says: play one of ten challenge types, spin the Bonus Wheel, climb a Grace path, slide down a Lesson path, or pause to reflect.

- `index.html`: the game. It is self-contained, needs no build, and works on phones.
- `adventure-content.js`: every question, answer, clue, story and prompt (about 450 items in 29 decks). Edit content here, not in the HTML.

## Run it

Open `index.html` in a browser. To show it in the site's game modal, load it in an iframe:

```html
<iframe src="/games/adventure/index.html" title="MySAIYa Adventure" style="width:100%;height:100%;border:0"></iframe>
```

Copy both files to the webapp's `public/` folder. The webapp is a separate repository and is not part of this workspace.

To check one challenge without playing a whole game, add `?test=` and a format name: `match`, `scramble`, `clue`, `riddle`, `quiz`, `fact`, `quick`, `hunt`, `bhajan`, `blank` or `spin`.

## Rules

1. 1–4 players. Each turn, roll the die and move.
2. Pass a challenge to earn **Karma points**. Miss it and step back 2 tiles.
3. Moves caused by the wheel, a Grace or Lesson path, or a step back do not trigger the tile you land on.
4. First to tile 100 wins. The reward screen also names the player with the most Karma.
5. **Relaxed mode** (on the setup screen) turns off the Quickfire timer for younger players.

## Tiles

| Tile | Colour | What happens | Pass mark |
|---|---|---|---|
| 🔗 Match Up | Violet | Pair 4 items with their partners | Fewer than 3 mistakes |
| 🔤 Unscramble | Crimson | Rebuild 3 scrambled names from letter tiles, then see the hidden bhajan with your words lit up | 2 of 3 |
| 🧭 Clue Quest | Navy | Answer 3 clue questions, multiple choice | 2 of 3 |
| ❓ Who Am I? | Bronze | A person or place riddle. Clues appear one at a time; guess early for up to 20 Karma. Each extra clue costs 3, each wrong guess 5 | Right answer with at most 1 wrong guess |
| 📜 Wisdom Quiz | Green | 3 authored questions. A wrong first answer shows your hint and gives one more try. Afterwards, the explanation and source appear | 2 of 3 |
| ⚖️ Fact or Fiction | Indigo | 4 statements: authored ones (with hint button and your explanations) alternate with statements built from the decks | 3 of 4 |
| ⚡ Quickfire | Orange | As many as you can in 45 seconds (6 untimed questions in relaxed mode). 8 correct earns the Quick Thinker badge and +10 | 4 correct |
| 🔍 Word Hunt | Cyan | Find 4 hidden answers in a 10×10 to 12×12 grid. Clue sets show the clues, not the words ("Show the words" costs 5) | 3 of 4 |
| 🎵 Bhajan Builder | Plum | Tap 6 bhajan words in the order they are sung. Peeking at the full line costs 5 | Fewer than 4 slips |
| ✏️ Fill the Blank | Lilac | Fill 3 blanks, multiple choice | 2 of 3 |
| 🎡 Bonus Wheel | Gold | Spin for: Leap +3 · Roll again · +30 Karma · Blessing Shield · Double points · Back 2 · Seva Star · Bonus question | – |
| 🪔 Reflection | White | A value prompt to share or think about quietly. +10 Karma | – |
| ⬆ Grace | Teal | A values story, then climb: 4→25, 13→46, 33→52, 42→63, 71→92 | – |
| ⬇ Lesson | Pink | A values story, then slide: 31→10, 48→26, 66→44, 87→64, 98→78 | – |

A **Blessing Shield** cancels the next missed challenge, Lesson slide or "Back 2". **Double** doubles the Karma from the next challenge.

The board layout is fixed, like a printed board. Within each deck, the game uses every item before it repeats one.

## Content and its sources

| Source document | Deck keys | Used in |
|---|---|---|
| Adventure workbook (`adventure2.pdf`) | `mothers`, `sun`, `ramayana`, `buddha` | Match Up, Quickfire, Fact or Fiction |
| | `vitthala`, `krishna`, `vedic`, `names1989` | Clue Quest, Word Hunt, Quickfire, Fact or Fiction |
| | `samyak` | Fill the Blank |
| | `krishnaWords`, `deviWords` | Unscramble, Bhajan Builder, Word Hunt |
| Matching | `bhakti`, `ganesha`, `shiva`, `ramaNames`, `motherNames`, `books` | Match Up, Clue Quest, Word Hunt |
| | `gayathri`, `sayings` | Fill the Blank |
| Adventure Word Search | `ramayanaHunt`, `mahabharataHunt`, `vahanaHunt`, `swamiHunt` | Word Hunt (clue mode), Clue Quest |
| | `bhajanHunt` (missing bhajan words) | Word Hunt, Fill the Blank |
| Quickfire | `saiQuickfire` (with your hints and second-chance messages) | Wisdom Quiz, Quickfire |
| Multi-Faith Quiz | `multiFaith` (with explanations and sources) | Wisdom Quiz, Quickfire |
| Sathya Sai Quiz | `saiQuiz` (with Sai Seeker / Scholar / Master levels) | Wisdom Quiz, Quickfire |
| | 100 true/false statements in `factStatements` | Fact or Fiction |
| | 12 place riddles in `riddles` ("Where Am I?") | Who Am I? |
| Fact or Fiction | 10 statements in `factStatements` | Fact or Fiction |
| Who Am I | 7 people in `riddles` | Who Am I? |

Every deck except the Unscramble, Wisdom Quiz, statement and riddle decks also feeds Quickfire, the Bonus Wheel's bonus question and Fact or Fiction, using its `ask()` and `fact()` templates.

The Grace and Lesson stories and the Reflection prompts are new. They are written around the five human values and use only well-known maxims ("Love All, Serve All", "Help Ever, Hurt Never", "Hands that serve are holier than lips that pray"). Please review them before publishing.

### How the worksheets were adapted

- **Who Am I:** each person's statements became clues, ordered from hardest to easiest and rewritten in the first person. Clues that gave the name away were moved last or reworded. The 12 place riddles from the Sathya Sai Quiz were split into 3–4 clues each in the same way.
- **Sathya Sai Quiz:** the second question set always lists the right answer first, so those choices are shuffled. Questions that repeat the Quickfire sheet were not added twice.
- **Adventure Word Search:** the game builds its own grid each time from the clue answers, so the printed grids are not reused.

### Source issues for review

**Adventure workbook**
- **Vitthala:** "Lord took her form and did household chores → VARKARI" is left out. The workbook marks it with a stray `*`, and Varkari is the pilgrim tradition, not a person. The intended answer may be Janabai.
- **Unscramble:** `RARKSHI` (SRIKARI), `AYNKYRAAHBAI` (ABHAYANKARI) and `EYSISWRAE` (SAYEESWARI) do not use the same letters as their answers. The game reshuffles the answer's own letters for these.
- **Spelling:** "BHIRIGUVALLI" is shown as "Bhriguvalli". "WAERSIVAH SR" is joined into one scramble.
- **Discourse 1989:** "Kalatita" (Master of time) and "Kalateeta" (One who transcends time) are both answers. The game never offers both in the same question. "Sankarshana" was given a letter count "(11)" to match the other clues.

**Matching**
- **Rama:** two pairs are left out. "SAKETA = the invincible One" (Saketa is a name for Ayodhya) and "BHARATANUJA = the Elder Brother of Bharat" (anuja means younger brother; the elder brother is Bharatagraja).
- **Books:** the letters before the authors' names ("J. Vijayamma", "G. N. Kasturi") look like answer labels from the original sheet and were removed.

**Adventure Word Search**
- **Mahabharata:** clues 1 and 7 have no tick in the source. The answers "Bow" (found in the grid) and "Hundred" were added.
- **Vahanas:** the first grid suggests BULL and MONKEY, but the word list gives NANDI and VANARAS. The game follows the word list, with the Nandi clue reworded.
- **Swami's father:** the word search gives "Pedda Venkappa", but Quickfire and the Sathya Sai Quiz give "Pedda Venkama Raju". Both spellings currently appear. Please choose one.
- **Snake:** the grid answer is SNAKE; the word list says Cobra, which the game uses.

**Fact or Fiction:** "Antarabangasa" is corrected to "Antarabangsa", and "SIOM" to "SSIOM".

**Who Am I**
- **Kondama Raju:** the sheet says he lived to 110 and also that he passed away at 102. The age clues are left out; the explanation keeps "110".
- **Kote Subbanna:** the clue places him in Kamalapuram, but the explanation mentions the children of Puttaparthi. The place was left out of the clues.
- **Subbamma:** one clue is garbled ("…the village chieftain of Puttaparthi, is my husband") and was rewritten. The sheet calls Kamalamma both "co-wife" and "co-sister"; the game just says "Kamalamma".

**Sathya Sai Quiz**
- **Age at the declaration:** the true/false bank says He declared His mission "at the age of 14", and the schooling question says He left school "at age 14". On 20 October 1940 He was 13, a month before His 14th birthday, matching the Who Am I sheet. The game says 13.
- **Ragi Sankati** is described as "maize gruel". Ragi is finger millet, so the game says "a millet porridge".
- **First 16 years (TF_054):** the hint says teaching was the focus "from age 32", but the quiz question (citing Hislop) says Leelas and teaching ran to 45, then mainly teaching. The hint was replaced.
- **Ten Guiding Principles (TF_063):** the sheet says they were given at the "10th World Conference" in 1985. The 1985 gathering was, as far as I know, the 4th World Conference, so the number was left out.
- **Duplicates:** TF_076 repeats TF_022 and was not added twice.
- **Gaps:** Quiz part 1 jumps from question 5 to 9, Quiz part 2 has a heading for Q13 but no question, and the Multi-Faith Quiz starts at question 4. If questions 1–3 or 6–8 exist, they can be added.

## Adding more content

Copy an existing block in `adventure-content.js`, give it a new key, and set the flags. The board starts using the new deck straight away:

- `match: true`: pairs for Match Up
- `clue: true`: clue questions for Clue Quest
- `blank: true`: fill-in-the-blank items
- `hunt: true`: answers of 3–12 letters can be hidden in Word Hunt (with clues if the items have them)
- `scramble: true` plus `bhajan: "…"`: Unscramble and Bhajan Builder
- `quiz: true`: Wisdom Quiz questions with `choices`, `a`, and optional `right`, `hint`, `right2`, `wrong`, `explain`, `source`, `level` (add `shuffle: true` if the answer is always in the same place)
- `statements: true`: Fact or Fiction statements with `s`, `truth`, and optional `right`, `wrong`, `explain`, `hint`, `cat`
- `riddle: true`: Who Am I? riddles with `a`, `group` (`person` or `place`), `clues` (hardest first) and optional `explain`
