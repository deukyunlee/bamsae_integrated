import imgUrlIMG from "./images/kakaoBtnShare.png"
import React, { useEffect } from "react"

const kakaoShare = () => {
  window.Kakao.init("926d02391a48cab481b16045e9af326d")
  new window.Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "Catch Up! BSTI �׽�Ʈ",
      description: "BSTI �׽�Ʈ �ް� ��ȭ���� ����!!",
      imageUrl: "https://i.ibb.co/CV1X2FB/for-Share-Ka-Kao.png",
      link: {
        mobileWebUrl: "https://bit.ly/ĳ���",
      },
    },
    itemContent: {
      titleImageUrl: "https://i.ibb.co/GCyyWZk/logo-KAKAO.png",
      titleImageText: "ĳ���",
      titleImageCategory: "û���̷�",
    },
    buttons: [
      {
        title: "�׽�Ʈ �Ϸ� ����",
        link: {
          mobileWebUrl: "https://bit.ly/ĳ���",
        },
      },
    ],
  })
}

const twitterShare = () => {
  var sendText = "ĳ���! ���� �ٷ� MDTI �׽�Ʈ �Ϸ�����"
  var sendUrl = "https://catchup.shop/                                                         "
  var sendHashTag = "û���̷�,ĳġ��,MyDream,MDTI"
  window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl + "&hashtags=" + sendHashTag)
}

const facebookShare = () => {
  var sendUrl = "https://localhost:3000"
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl)
}

export { kakaoShare, twitterShare, facebookShare }
