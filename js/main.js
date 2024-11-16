'use strict';
document.addEventListener('DOMContentLoaded', () => {
  // Cardクラス作成
  class Card {
    constructor(suit, num) {
      this.suit = suit;
      this.num = num;
      this.front=`${suit}${num < 10 ? '0':''}${num}.gif`;//カードの画像
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
  //クリックした際の関数を定義
  const flip=(eve)=>{
    //クリックされた要素を特定
    const div=eve.target;
    //toggle(ついていたら外れ、外れていたら付く)
    div.classList.toggle('back');
  };
  // カードグリッドを初期化
  const cardgrid = document.getElementById('cardgrid');
  const initgrid = () => {
    cardgrid.textContent=null;
    cards.forEach(card => {
      const div = document.createElement('div');
      div.style.backgroundImage=`url(images/${card.front})`;
      div.classList.add('card','back');
      div.onclick=flip;
      cardgrid.appendChild(div);
    });
  };
  //カードシャッフル関数(Fisher–Yates shuffle)
  const shuffle=()=>{
    let i=cards.length;
    while(i){
      const index=Math.floor(Math.random()*i--);
      [cards[index],cards[i]]=[cards[i],cards[index]]
    }
  };

  // ゲームスタートボタン
  const startBt = document.getElementById('startBt');
  startBt.addEventListener('click', () => {
    shuffle();
    initgrid();
  });
});