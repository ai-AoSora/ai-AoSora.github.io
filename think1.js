function send_question (input_text){
  // 前処理 最初の余分なスペースを削る
  const clear_input = input_text.trim();
  //　辞書で検索
  for(let key in BasicDictionary){
  if(clear_input.includes(key)){
    const response = BasicDictionary[key];
    const random_response = Math.floor(Math.random() * response.length);/* 辞書のリスト内からランダムで言葉選び */
    // 出力準備
    console.log(random_response);/* テスト：コンソールに表示 */
    return response[random_response];/* 戻り値で選んだ言葉を戻す */
    }
  }
  return　"404エラー"
};
