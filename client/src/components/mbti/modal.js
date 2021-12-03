import React from "react";
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
            <div className="modalHeadFont">��ü ���� ����</div>
          </div>
          <div className="modalCon">
            <img src={dino1} width="210px" height="180px" alt="img"></img>
            <div className="modalTitle">'���� ���'</div>
            <div className="modalSemi">
              ������ �ɰ� ������ �� ������ ������ ���̴� �ܰ�
            </div>
            <div className="modalDetail">
              �� ���� ���Ϸ� ���ư� ������ ������� ���ϰ� �ִ� ���. �
              ������ �Ǿ���� ����� �տ� �޷��־��. ���� �ְ�, �޺��� ���̸�
              �� ������ ����� �巯�� �ſ���.
            </div>
            <div className="modalDetail">
              ���� � �������, ��� ���� �ǿ����� ���� �𸣰ڴٸ� �ٸ�
              ����� �̾߱⸦ ��� �͵� ���� ���! ��� ���� ���κ���
              ���۵Ǵϱ��.
            </div>
            <div className="tagContainer">
              <div className="tag" id="zerobase">
                #���κ��̽�
              </div>
              <div className="tag" id="todak">
                #��������ڵ������
              </div>
              <div className="tag" id="gidae">
                #�ƹ�ư,���
              </div>
            </div>
          </div>
          <div className="modalCon">
            <img src={dino2} width="210px" height="180px" alt="img"></img>
            <div className="modalTitle">'���� ���'</div>
            <div className="modalSemi">
              ���� �Ǿ �̷��� ����ϸ� �̱׷������� ������ �ܰ�
            </div>
            <div className="modalDetail">
              �� �ӿ� ���� ������ ���� Ʒ������ ���� ����� ���� ���. �
              �������� ���ư������� ���� ��ұ���.
            </div>
            <div className="modalDetail">
              ������ ����� �ݹ�! ������ ���� ���� ������ �ܴ��ϰ� �����ϱ�
              ���ؼ��� �������� ������ �ʿ��� �� �־��. �Բ� ��ü���� ���θ�
              ������� �������� �ִٸ� ������ �� �ſ���.
            </div>
            <div className="tagContainer">
              <div className="tag" style={{ width: "80px" }}>
                #���κ��̽�
              </div>
              <div className="tag" style={{ width: "85px" }}>
                #�ƹ�ư,���
              </div>
            </div>
          </div>
          <div className="modalCon">
            <img src={dino3} width="210px" height="180px" alt="img"></img>
            <div className="modalTitle">'�ɺ����� ���'</div>
            <div className="modalSemi">
              �� ǳ���ϰ� ���Ӱ� �� �ǿ�� ���� �غ��ϴ� �ܰ�
            </div>
            <div className="modalDetail">
              ���� ���� �ǿ� �غ� �� �Ǿ����. ���� �����ϴ� �� �������� �˰�,
              ������ �ؾ� �ϴ� �� �ƴ� ���.
            </div>
            <div className="modalDetail">
              �پ��� �ǹ������� �� �� �ִ� ���α׷����� ����� �ɷ��� �ʺ�
              �����غ��� �� ����? �� ������ �õ��� ��µ��� �̹� ��ȸ�� ����
              ���� ������ �� �ſ���!
            </div>
            <div className="tagContainer">
              <div className="tag" style={{ width: "70px" }}>
                #�ø���D
              </div>
              <div className="tag" style={{ width: "70px" }}>
                #�̴�����
              </div>
              <div
                className="tag"
                style={{ width: "75px", marginRight: "0px" }}
              >
                #�ڰ�������
              </div>
            </div>
          </div>
          <div className="modalCon">
            <img src={dino4} width="210px" height="180px" alt="img"></img>
            <div className="modalTitle">'�� ���'</div>
            <div className="modalSemi">
              ������ �� �ǿ� ������ ���Ե� �غ� ��ģ �ܰ�
            </div>
            <div className="modalDetail">
              ������ �� ������ ä �������� �ʳ׿�! ȭ���� ���� �� �Ƹ����
              ����� �ֵ��� �츮���Ե� �ణ�� ������ �ʿ��� �� ���ƿ�.
            </div>
            <div className="modalDetail">
              ���� ����� �յ� ����� 2% �������� ä���� �پ��� Ư���� �غ�Ǿ�
              �־��. �������� �Բ� ��Ʈ������, �ڱ�Ұ���, ������ �غ��ϰ� �ֽ�
              ��� Ʈ���� �� ��������� �˾ƺ����?
            </div>
            <div className="tagContainer">
              <div className="tag" style={{ width: "80px" }}>
                #�ڼҼ�Ư��
              </div>
              <div className="tag" style={{ width: "115px" }}>
                #����ο��������
              </div>
              <div className="tag" style={{ width: "70px" }}>
                #�̷�JOB
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;