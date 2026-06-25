let output_text_all_html = '';

function I_send_text(){
event.preventDefault();/* 送信時にページのリロードを防止 */ 

const output_area = document.getElementById('talk_message');
const input_text_html = `<div class='I-send-text'><p>${document.getElementById('input-textarea').value}</p></div>`;
output_text_all_html = output_text_all_html + input_text_html;/* 全てのデータ+今回のデータ */
output_area.innerHTML = input_text_all_html;

//aiへ返信してのパスを出す
send_question(document.getElementById('input-textarea').value);/* 入力データを取得して関数呼び出し */
};

function send_question (input_text){
  // 前処理 最初の余分なスペースを削る
  const clear_input = input_text.trim();
  //　辞書で検索
  for(let key in BasicDictionary){
  if(clear_input.includes(key)){
    const response = BasicDictionary[key];
    const random_response = Math.floor(Math.random() * response.length);/* 辞書のリスト内からランダムで言葉選び */
    const response_data = response[random_response];
    // 出力
    const output_area = document.getElementById('talk_message');
    const output_text_html = `
    <div class="ai-response-text"><p>${response_data}</p></div>
    `;
    output_text_all_html = output_text_all_html + output_text_html;/* 全てのデータ+今回のデータ */
    output_area.innerHTML = output_text_all_html;
    
    console.log(response_data);/* テスト：コンソールに表示 */
    return response_data;/* 戻り値で選んだ言葉を戻す */
    }
  }
  return　"404エラー"
};
