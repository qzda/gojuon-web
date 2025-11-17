export interface Timestamp {
  start: number
  end: number
}

export interface Cell {
  /** 平假名 */
  hiragana: string
  /** 片假名 */
  katakana: string
}

/** 显示模式：
 *  @key both 同时显示
 *  @key hiragana 平假名
 *  @key katakana 片假名
 */
export type DisplayMode = 'both' | 'hiragana' | 'katakana'
