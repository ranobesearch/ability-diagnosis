// 異能力50種（診断結果用）
const abilities = [
  {
    name: "刻喰ノ時環",
    description: "世界の時を巻き戻す、時空を侵す禁忌の力"
  },
  {
    name: "絶対零識",
    description: "視た者を“無”に変える凍てつく眼"
  },
  {
    name: "焉舞ノ焔",
    description: "死者の怨嗟を喰らい踊る、深紅の炎"
  },
  // …50個分すべて入れる（前回のリストから順に追加）
];

// 質問10問
const questions = [
  {
    text: "世界が崩壊する――君に残されたのは「ひとつの力」のみ。何を選ぶ？",
    choices: [
      {
        text: "時間を止める力",
        relatedAbilities: ["刻喰ノ時環", "刻断ノ鎖", "崩壊律動"]
      },
      {
        text: "他者を操る力",
        relatedAbilities: ["他者の感情操作", "魂縛鎖", "魔鎖の歌"]
      },
      {
        text: "炎すら凍らせる冷気の刃",
        relatedAbilities: ["焉舞ノ焔", "絶対零識", "蒼焔氷結"]
      },
      {
        text: "未来を“書き換える”力",
        relatedAbilities: ["神滅語", "曇天記憶", "災厄予知"]
      }
    ]
  },
  // Q2〜Q10を同じ形式で追加

{
    text: "君の心に最も深く根付く感情は？",
    choices: [
      { text: "怒り", relatedAbilities: ["闇核解放", "魂砕呪詛", "絶電咆哮"] },
      { text: "悲しみ", relatedAbilities: ["黒奏", "曇天記憶", "災厄予知"] },
      { text: "孤独", relatedAbilities: ["絶影瞬動", "運命偽装", "無音支配"] },
      { text: "希望", relatedAbilities: ["聖焔浄化", "精霊同化", "鉄心装甲"] }
    ]
  },
  {
    text: "仲間が裏切ったとき、君はどうする？",
    choices: [
      { text: "すべてを忘れ、赦す", relatedAbilities: ["聖焔浄化", "禁書閲覧", "空間解断"] },
      { text: "記憶を改竄して支配下に置く", relatedAbilities: ["曇天記憶", "魔鎖の歌", "血誓融合"] },
      { text: "静かに排除する", relatedAbilities: ["深淵召喚", "絶影瞬動", "虚無侵蝕"] },
      { text: "その魂に罰を刻む", relatedAbilities: ["魂縛鎖", "魂砕呪詛", "死界王印"] }
    ]
  },
  {
    text: "「理想の力」とは、どんなものだと思う？",
    choices: [
      { text: "絶対的な防御力", relatedAbilities: ["鉄心装甲", "結界創世", "反射収束"] },
      { text: "誰にも見破られない幻影", relatedAbilities: ["念操幻影", "虚言封印", "誘導錯覚"] },
      { text: "魂すら操る支配力", relatedAbilities: ["魂縛鎖", "血塗ノ契", "魔鎖の歌"] },
      { text: "全てを消し去る破壊力", relatedAbilities: ["闇核解放", "焉舞ノ焔", "終焉降臨"] }
    ]
  },
  {
    text: "世界に対して、君はどんな存在でありたい？",
    choices: [
      { text: "観測者（全てを知る者）", relatedAbilities: ["零識解析", "禁書閲覧", "拡張認識"] },
      { text: "破壊者（終焉をもたらす者）", relatedAbilities: ["闇核解放", "一撃穿神", "虚無侵蝕"] },
      { text: "操縦者（背後から動かす者）", relatedAbilities: ["他者の感情操作", "運命偽装", "魔眼解放"] },
      { text: "守護者（影で守る者）", relatedAbilities: ["精霊同化", "結界創世", "鉄心装甲"] }
    ]
  },
  {
    text: "「死」が目の前にあるとき、君はどう動く？",
    choices: [
      { text: "己の命を差し出し、真理へと至る", relatedAbilities: ["黒翼転生", "血誓融合", "灰燼転生"] },
      { text: "笑ってすべてを燃やす", relatedAbilities: ["焉舞ノ焔", "終焉降臨", "闇核解放"] },
      { text: "何度でも蘇ることを選ぶ", relatedAbilities: ["黒翼転生", "灰燼転生", "死界王印"] },
      { text: "魂を他者に移して生き残る", relatedAbilities: ["魂語喚起", "血塗ノ契", "異界通行"] }
    ]
  },
  {
    text: "“運命”とは君にとって何か？",
    choices: [
      { text: "従うもの", relatedAbilities: ["災厄予知", "魂縛鎖", "絶影瞬動"] },
      { text: "壊すもの", relatedAbilities: ["一撃穿神", "虚無侵蝕", "終焉降臨"] },
      { text: "騙すもの", relatedAbilities: ["運命偽装", "誘導錯覚", "虚言封印"] },
      { text: "創るもの", relatedAbilities: ["神滅語", "禁書閲覧", "空間解断"] }
    ]
  },
  {
    text: "一番惹かれる言葉は？",
    choices: [
      { text: "世界の裏側", relatedAbilities: ["異界通行", "深淵召喚", "禁書閲覧"] },
      { text: "禁断の契約", relatedAbilities: ["血塗ノ契", "血誓融合", "魔眼解放"] },
      { text: "目覚めし真の姿", relatedAbilities: ["黒翼転生", "闇核解放", "魔眼解放"] },
      { text: "封印されし力", relatedAbilities: ["終黒ノ瞳", "結界創世", "魂砕呪詛"] }
    ]
  },
  {
    text: "君の強さの源は？",
    choices: [
      { text: "知恵", relatedAbilities: ["零識解析", "禁書閲覧", "拡張認識"] },
      { text: "意志", relatedAbilities: ["聖焔浄化", "鉄心装甲", "災厄予知"] },
      { text: "孤独", relatedAbilities: ["無音支配", "絶影瞬動", "虚無侵蝕"] },
      { text: "怒り", relatedAbilities: ["魂砕呪詛", "闇核解放", "焉舞ノ焔"] }
    ]
  },
  {
    text: "最後の一撃を放つとき、君は何を想う？",
    choices: [
      { text: "これが正義だ", relatedAbilities: ["聖焔浄化", "一撃穿神", "鉄心装甲"] },
      { text: "全てを壊せ", relatedAbilities: ["闇核解放", "終焉降臨", "焉舞ノ焔"] },
      { text: "…戻れないな", relatedAbilities: ["黒翼転生", "曇天記憶", "魔眼解放"] },
      { text: "許さない", relatedAbilities: ["魂砕呪詛", "血塗ノ契", "終黒ノ瞳"] }
    ]
  }
]