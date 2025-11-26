import type { Cell } from "@/type";

const 清音: (Cell | null)[][] = [
  [
    { hiragana: "あ", katakana: "ア" },
    { hiragana: "い", katakana: "イ" },
    { hiragana: "う", katakana: "ウ" },
    { hiragana: "え", katakana: "エ" },
    { hiragana: "お", katakana: "オ" },
  ],
  [
    { hiragana: "か", katakana: "カ" },
    { hiragana: "き", katakana: "キ" },
    { hiragana: "く", katakana: "ク" },
    { hiragana: "け", katakana: "ケ" },
    { hiragana: "こ", katakana: "コ" },
  ],
  [
    { hiragana: "さ", katakana: "サ" },
    { hiragana: "し", katakana: "シ" },
    { hiragana: "す", katakana: "ス" },
    { hiragana: "せ", katakana: "セ" },
    { hiragana: "そ", katakana: "ソ" },
  ],
  [
    { hiragana: "た", katakana: "タ" },
    { hiragana: "ち", katakana: "チ" },
    { hiragana: "つ", katakana: "ツ" },
    { hiragana: "て", katakana: "テ" },
    { hiragana: "と", katakana: "ト" },
  ],
  [
    { hiragana: "な", katakana: "ナ" },
    { hiragana: "に", katakana: "ニ" },
    { hiragana: "ぬ", katakana: "ヌ" },
    { hiragana: "ね", katakana: "ネ" },
    { hiragana: "の", katakana: "ノ" },
  ],
  [
    { hiragana: "は", katakana: "ハ" },
    { hiragana: "ひ", katakana: "ヒ" },
    { hiragana: "ふ", katakana: "フ" },
    { hiragana: "へ", katakana: "ヘ" },
    { hiragana: "ほ", katakana: "ホ" },
  ],
  [
    { hiragana: "ま", katakana: "マ" },
    { hiragana: "み", katakana: "ミ" },
    { hiragana: "む", katakana: "ム" },
    { hiragana: "め", katakana: "メ" },
    { hiragana: "も", katakana: "モ" },
  ],
  [
    { hiragana: "や", katakana: "ヤ" },
    null,
    { hiragana: "ゆ", katakana: "ユ" },
    null,
    { hiragana: "よ", katakana: "ヨ" },
  ],
  [
    { hiragana: "ら", katakana: "ラ" },
    { hiragana: "り", katakana: "リ" },
    { hiragana: "る", katakana: "ル" },
    { hiragana: "れ", katakana: "レ" },
    { hiragana: "ろ", katakana: "ロ" },
  ],
  [
    { hiragana: "わ", katakana: "ワ" },
    null,
    null,
    null,
    { hiragana: "を", katakana: "ヲ" },
  ],
  [{ hiragana: "ん", katakana: "ン" }, null, null, null, null],
];

const 濁音: Cell[][] = [
  [
    { hiragana: "が", katakana: "ガ" },
    { hiragana: "ぎ", katakana: "ギ" },
    { hiragana: "ぐ", katakana: "グ" },
    { hiragana: "げ", katakana: "ゲ" },
    { hiragana: "ご", katakana: "ゴ" },
  ],
  [
    { hiragana: "ざ", katakana: "ザ" },
    { hiragana: "じ", katakana: "ジ" },
    { hiragana: "ず", katakana: "ズ" },
    { hiragana: "ぜ", katakana: "ゼ" },
    { hiragana: "ぞ", katakana: "ゾ" },
  ],
  [
    { hiragana: "だ", katakana: "ダ" },
    { hiragana: "ぢ", katakana: "ヂ" },
    { hiragana: "づ", katakana: "ヅ" },
    { hiragana: "で", katakana: "デ" },
    { hiragana: "ど", katakana: "ド" },
  ],
  [
    { hiragana: "ば", katakana: "バ" },
    { hiragana: "び", katakana: "ビ" },
    { hiragana: "ぶ", katakana: "ブ" },
    { hiragana: "べ", katakana: "ベ" },
    { hiragana: "ぼ", katakana: "ボ" },
  ],
  [
    { hiragana: "ぱ", katakana: "パ" },
    { hiragana: "ぴ", katakana: "ピ" },
    { hiragana: "ぷ", katakana: "プ" },
    { hiragana: "ぺ", katakana: "ペ" },
    { hiragana: "ぽ", katakana: "ポ" },
  ],
];

const 拗音: Cell[][] = [
  [
    { hiragana: "きゃ", katakana: "キャ" },
    { hiragana: "きゅ", katakana: "キュ" },
    { hiragana: "きょ", katakana: "キョ" },
  ],
  [
    { hiragana: "しゃ", katakana: "シャ" },
    { hiragana: "しゅ", katakana: "シュ" },
    { hiragana: "しょ", katakana: "ショ" },
  ],
  [
    { hiragana: "ちゃ", katakana: "チャ" },
    { hiragana: "ちゅ", katakana: "チュ" },
    { hiragana: "ちょ", katakana: "チョ" },
  ],
  [
    { hiragana: "にゃ", katakana: "ニャ" },
    { hiragana: "にゅ", katakana: "ニュ" },
    { hiragana: "にょ", katakana: "ニョ" },
  ],
  [
    { hiragana: "ひゃ", katakana: "ヒャ" },
    { hiragana: "ひゅ", katakana: "ヒュ" },
    { hiragana: "ひょ", katakana: "ヒョ" },
  ],
  [
    { hiragana: "みゃ", katakana: "ミャ" },
    { hiragana: "みゅ", katakana: "ミュ" },
    { hiragana: "みょ", katakana: "ミョ" },
  ],
  [
    { hiragana: "りゃ", katakana: "リャ" },
    { hiragana: "りゅ", katakana: "リュ" },
    { hiragana: "りょ", katakana: "リョ" },
  ],
];

export const Cells = [
  { key: "清音", value: 清音 },
  { key: "濁音", value: 濁音 },
  { key: "拗音", value: 拗音 },
];
