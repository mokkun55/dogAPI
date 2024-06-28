// console.log("あああ");

const object = {
  key: "value",
  key2: "value2",
};

console.log(object);
console.log(object.key);
const key2 = object.key2;
console.log(key2);

// ---ここから---

// 初期設定
const APIURL = "https://dog.ceo/api/breeds/image/random";

// ロードしたら１度だけ実行
window.onload = () => {
  loadDogImg();
};

document.getElementById("dogButton").addEventListener("click", loadDogImg);

// async 非同期処理 -> 
// API の返信を待つ必要がある
async function loadDogImg() {
  // APIを叩く
  // データを取得
  const responce = await fetch(APIURL);
  // 取得したデータをjson形式に変換
  const dogData = await responce.json();
  // console.log(dogData);
  // console.log(dogData.message);
  const dogImgUrl = dogData.message;

  // img srcを書き換える
  document.getElementById("dogImg").src = dogImgUrl;
}
