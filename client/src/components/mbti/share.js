import imgUrlIMG from "./images/kakaoBtnShare.png";

const kakaoShare = () => {
  window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "Catch Up! BSTI 테스트",
      description: "BSTI 테스트 받고 영화보러 가자!!",
      imageUrl: "https://i.ibb.co/CV1X2FB/for-Share-Ka-Kao.png",
      link: {
        mobileWebUrl: "https://bit.ly/캐취업",
      },
    },
    itemContent: {
      titleImageUrl: "https://i.ibb.co/GCyyWZk/logo-KAKAO.png",
      titleImageText: "캐취업",
      titleImageCategory: "청년이룸",
    },
    buttons: [
      {
        title: "테스트 하러 가기",
        link: {
          mobileWebUrl: "https://bit.ly/캐취업",
        },
      },
    ],
  });
};

const twitterShare = () => {
  var sendText = "캐취업! 지금 바로 MDTI 테스트 하러가기";
  var sendUrl =
    "https://catchup.shop/                                                         ";
  var sendHashTag = "청년이룸,캐치업,MyDream,MDTI";
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      sendText +
      "&url=" +
      sendUrl +
      "&hashtags=" +
      sendHashTag
  );
};

const facebookShare = () => {
  var sendUrl = "https://localhost:3000";
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
};

export { kakaoShare, twitterShare, facebookShare };