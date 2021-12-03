import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import dino1 from "./images/result/dino/dino1.png";
import dino2 from "./images/result/dino/dino2.png";
import dino3 from "./images/result/dino/dino3.png";
import dino4 from "./images/result/dino/dino4.png";

const Modal = (props) => {
  const { setIsShowAll } = props;
  const handleCloseBtn = (e) => {
    setIsShowAll(false);
  };

  return (
    <>
      <div className="modal" onClick={handleCloseBtn}>
        <div
          className="modalPost"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modalHead">
            <div className="modalHeadFont">전체 유형 보기</div>
            <CloseOutlined className="closeBtn" onClick={handleCloseBtn} />
          </div>
          <div className="modalCon">
            <img src={dino1} width="210px" height="180px" alt="img"></img>
            <div className="modalTitle">'씨앗 디노'</div>
            <div className="modalSemi">
              씨앗을 심고 새싹이 될 때까지 정성을 들이는 단계
            </div>
            <div className="modalDetail">
              더 나은 내일로 나아갈 무한한 잠재력을 지니고 있는 당신. 어떤
              꽃으로 피어날지는 당신의 손에 달려있어요. 물을 주고, 햇볕을 쪼이면
              곧 새싹이 모습을 드러낼 거예요.
            </div>
            <div className="modalDetail">
              내가 어떤 사람인지, 어떻게 꽃을 피워내야 할지 모르겠다면 다른
              사람의 이야기를 듣는 것도 좋은 방법! 모든 것은 나로부터
              시작되니까요.
            </div>
            <div className="tagContainer">
              <div className="tag" id="zerobase">
                #제로베이스
              </div>
              <div className="tag" id="todak">
                #토닥진로코디네이터
              </div>
              <div className="tag" id="gidae">
                #아무튼,기대
              </div>
            </div>
          </div>
          <div className="modalCon">
            <img src={dino2} width="210px" height="180px" alt="img"></img>
            <div className="modalTitle">'새싹 디노'</div>
            <div className="modalSemi">
              꽃이 피어날 미래를 기대하며 싱그러움으로 가득한 단계
            </div>
            <div className="modalDetail">
              땅 속에 묻힌 씨앗이 싹을 틔우기까지 많은 노력을 했을 당신. 어떤
              방향으로 나아가야할지 감을 잡았군요.
            </div>
            <div className="modalDetail">
              하지만 방심은 금물! 아직은 힘이 약한 새싹이 단단하게 성장하기
              위해서는 전문가의 도움이 필요할 수 있어요. 함께 구체적인 진로를
              고민해줄 누군가가 있다면 도움이 될 거예요.
            </div>
            <div className="tagContainer">
              <div className="tag" style={{ width: "80px" }}>
                #제로베이스
              </div>
              <div className="tag" style={{ width: "85px" }}>
                #아무튼,기대
              </div>
            </div>
          </div>
          <div className="modalCon">
            <img src={dino3} width="210px" height="180px" alt="img"></img>
            <div className="modalTitle">'꽃봉오리 디노'</div>
            <div className="modalSemi">
              더 풍성하고 향기롭게 꽃 피우기 위해 준비하는 단계
            </div>
            <div className="modalDetail">
              이제 꽃을 피울 준비가 다 되었어요. 내가 좋아하는 게 무엇인지 알고,
              무엇을 해야 하는 지 아는 당신.
            </div>
            <div className="modalDetail">
              다양한 실무경험을 할 수 있는 프로그램에서 당신의 능력을 십분
              발휘해보는 건 어떨까요? 그 동안의 시도와 노력들이 이번 기회를 통해
              더욱 빛나게 될 거예요!
            </div>
            <div className="tagContainer">
              <div className="tag" style={{ width: "70px" }}>
                #시리즈D
              </div>
              <div className="tag" style={{ width: "70px" }}>
                #미니인턴
              </div>
              <div
                className="tag"
                style={{ width: "75px", marginRight: "0px" }}
              >
                #자격증교육
              </div>
            </div>
          </div>
          <div className="modalCon">
            <img src={dino4} width="210px" height="180px" alt="img"></img>
            <div className="modalTitle">'꽃 디노'</div>
            <div className="modalSemi">
              완전히 꽃 피워 실전에 투입될 준비를 마친 단계
            </div>
            <div className="modalDetail">
              앞으로 한 걸음도 채 남아있지 않네요! 화분이 꽃을 더 아름답게
              만들어 주듯이 우리에게도 약간의 포장이 필요할 것 같아요.
            </div>
            <div className="modalDetail">
              당장 취업을 앞둔 당신의 2% 부족함을 채워줄 다양한 특강이 준비되어
              있어요. 전문가와 함께 포트폴리오, 자기소개서, 면접을 준비하고 최신
              취업 트렌드 및 기업정보를 알아볼까요?
            </div>
            <div className="tagContainer">
              <div className="tag" style={{ width: "80px" }}>
                #자소서특강
              </div>
              <div className="tag" style={{ width: "115px" }}>
                #슬기로운취업스쿨
              </div>
              <div className="tag" style={{ width: "70px" }}>
                #이루JOB
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;