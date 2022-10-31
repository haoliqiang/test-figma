import React from "react";

import { Row, Img, Text } from "components";

const Header7 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-blue_A400 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
          <Row className="items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[99%]">
            <Row className="items-center w-[13%]">
              <Img src="images/img_reply.svg" className="reply3" alt="reply" />
              <Text className="rowreply3" variant="body7">
                自动驾驶安全验证平台
              </Text>
            </Row>
            <Row className="items-center justify-center 2xl:ml-[103px] 3xl:ml-[123px] lg:ml-[73px] xl:ml-[91px] w-[35%]">
              <Text
                className="hover:font-semibold hover:text-white_A700 FiveHundredEightyFour"
                variant="body8"
              >
                首页
              </Text>
              <Text
                className="hover:font-semibold hover:text-white_A700 SixHundredFortySeven"
                variant="body8"
              >
                系统测试
              </Text>
              <Text
                className="hover:font-semibold hover:text-white_A700 FiveHundredEightyEight"
                variant="body8"
              >
                可信赖评估
              </Text>
              <Text
                className="hover:font-semibold hover:text-white_A700 FiveHundredEightyEight"
                variant="body8"
              >
                任务
              </Text>
              <Text
                className="hover:font-semibold SixHundredFortyNine"
                variant="body8"
              >
                资源库
              </Text>
            </Row>
            <Row className="items-center justify-between lg:ml-[245px] xl:ml-[306px] 2xl:ml-[345px] 3xl:ml-[414px] w-[19%]">
              <Row className="items-center justify-evenly w-[27%]">
                <Text className="rowapollovfiftyfive4" variant="body8">
                  AD-V2.3
                </Text>
                <Img
                  src="images/img_arrowdown_1.svg"
                  className="arrowleft"
                  alt="arrowdown"
                />
              </Row>
              <Row className="items-start justify-center w-[49%]">
                <Img
                  src="images/img_ellipse5.png"
                  className="rounded-radius50 user"
                  alt="EllipseFive"
                />
                <Row className="items-start justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] w-[78%]">
                  <Text className="rowfivehundredeightynine" variant="body8">
                    欢迎，王志杰
                  </Text>
                  <Img
                    src="images/img_arrowdown_1.svg"
                    className="arrowdown_One1"
                    alt="arrowdown One"
                  />
                </Row>
              </Row>
              <Img src="images/img_help.svg" className="arrowleft" alt="help" />
            </Row>
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header7;
