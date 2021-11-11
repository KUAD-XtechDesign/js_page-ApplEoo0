$(function(){

 

  
})

var arr = []
//初期値の設定
function TypingInit() {
	$('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
		arr[i] = new ShuffleText(this);//動作させるテキストを配列に格納
	});
}
//スクロールした際のアニメーションの設定
function TypingAnime() {
	$(".js_typing").each(function (i) {
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			if(!$(this).hasClass("endAnime")){//endAnimeのクラスがあるかチェック
				arr[i].start();//配列で登録テキストのアニメーションをおこなう
				arr[i].duration = 2000;//テキストが最終変化するまでの時間※規定値600
				$(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
			}
		}else{
			$(this).removeClass("endAnime"); //範囲外にスクロールした場合はendAnimeのクラスを削除
		}
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TypingInit(); //初期設定
	TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	TypingInit(); //初期設定
	TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

ScrollReveal().reveal('h2', {
    duration: 1600,
    scale: 4,
    reset: true
});
ScrollReveal().reveal('.University1', {
    duration: 1600,
    origin: 'bottom', 
    distance: '500px',
    reset: true
});
ScrollReveal().reveal('.University2', {
  duration: 1600, 
  origin: 'left', 
  distance: '100px',
  reset: true  
});
ScrollReveal().reveal('.University3', {
  duration: 1600, 
  reset: true,
  origin: 'right', 
  distance: '100px',
  rotate: {
    x: 50,
    y: 0,
    z: 50,
  }
});
ScrollReveal().reveal('.University4', {
  duration: 1600, 
  reset: true,
  origin: 'left', 
  distance: '100px',
  rotate: {
    x: 50,
    y: 0,
    z: -50,
  }
});
ScrollReveal().reveal('.University5', {
  duration: 1600, 
  reset: true,
  origin: 'top', 
  distance: '1000px',
  rotate: {
    x: 50,
    y: 100,
    z: 150,
  }
});
ScrollReveal().reveal('.University6', {
  duration: 1600, 
  reset: true,
  rotate: {
    x: 180,
    y: 0,
    z: 180,
  }
});
ScrollReveal().reveal('.University7', {
  duration: 1600, 
  reset: true,
  scale: 0.1,
  rotate: {
    x: 0,
    y: 180,
    z: 270,
  }
});