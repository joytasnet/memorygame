'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Cardクラス作成
  class Card {
    constructor(suit, num) {
      this.suit = suit; // スート (s:スペード, d:ダイヤ...)
      this.num = num;   // 数字 (1, 2, ... 13)
    }
  }

  // カード配列作成
  const cards = [];
  const suits = ['s', 'd', 'h', 'c']; // スートの種類 (スペード, ダイヤ, ハート, クローバー)

  // 52枚のカードを作成
  suits.forEach(suit => {
    for (let num = 1; num <= 13; num++) {
      cards.push(new Card(suit, num)); // 各カードを生成して配列に追加
    }
  });
  // カードグリッドを初期化
  const cardgrid = document.getElementById('cardgrid');
  const initgrid = () => {
    cards.forEach(card => {
      const div = document.createElement('div'); //div要素作成
      div.textContent=card.suit+':'+card.num;//divのtextContentを設定
      div.classList.add('card'); //divにcardクラスを追加
      cardgrid.appendChild(div); // グリッドにカードを追加
    });
  };

  // ゲームスタートボタン
  const startBt = document.getElementById('startBt');
  startBt.addEventListener('click', () => {
    initgrid();
  });
});