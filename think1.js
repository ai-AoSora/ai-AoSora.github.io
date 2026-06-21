function send_question (input_text){
  // 前処理 最初の余分なスペースを削る
  const clear_input = input_text.trim();
  //辞書で元を見つける
  for(let key in BasicDictionary){
  if(clear_input.includes(key)){
    const response = BasicDictionary[key];
    const random_response = Math.floor(Math.random() * BasicDictionary.length);/* 辞書のリスト内からランダムで言葉選び */
    return response[random_response];/* 戻り値で選んだ言葉を戻す */
    console.log(random_response)
    }
  }
  return　"404エラー"
};
