'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Cardクラス作成
  class Card {
    constructor(suit, num) {
      this.suit = suit;
      this.num = num;
    }
  }

  // カード配列作成
  const cards = [];
  const suits = ['s', 'd', 'h', 'c'];

  // 52枚のカードを作成
  suits.forEach(suit => {
    for (let num = 1; num <= 13; num++) {
      cards.push(new Card(suit, num));
    }
  });
  // カードグリッドを初期化
  const cardgrid = document.getElementById('cardgrid');
  const initgrid = () => {
    cardgrid.textContent=null;//cardgridに入っている要素をすべて削除
    cards.forEach(card => {
      const div = document.createElement('div');
      div.textContent=card.suit+':'+card.num;
      div.classList.add('card');
      cardgrid.appendChild(div);
    });
  };

  // ゲームスタートボタン
  const startBt = document.getElementById('startBt');
  startBt.addEventListener('click', () => {
    initgrid();
  });
});