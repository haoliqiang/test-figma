import React from "react";

import { Row, Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-blue_A400 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
          <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[98%]">
            <Row className="items-center w-[14%]">
              <Img
                src="images/img_airplane.svg"
                className="close5"
                alt="airplane"
              />
              <Text className="logo" variant="body7">
                自动驾驶安全验证平台
              </Text>
            </Row>
            <Row className="items-center justify-center 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] w-[35%]">
              <Text
                className="hover:font-semibold hover:text-white_A700 FiveHundredEightyFour"
                variant="body8"
              >
                首页
              </Text>
              <Text
                className="cursor-pointer font-pingfangsc hover:font-semibold TwoThousandSixHundredSeventeen"
                variant="body8"
              >
                系统测试
              </Text>
              <Text
                className="hover:font-semibold hover:text-white_A700 FiveHundredEightySix"
                variant="body8"
              >
                可信赖评估
              </Text>
              <Text
                className="hover:font-semibold hover:text-white_A700 FiveHundredEightySix"
                variant="body8"
              >
                任务
              </Text>
              <Text
                className="hover:font-semibold hover:text-white_A700 FiveHundredEightyEight"
                variant="body8"
              >
                资源库
              </Text>
            </Row>
            <Row className="items-start justify-between lg:ml-[231px] xl:ml-[289px] 2xl:ml-[325px] 3xl:ml-[390px] w-[21%]">
              <Row className="items-start justify-evenly mt-[2px] w-[33%]">
                <Text className="rowapollovfiftyfive_one" variant="body8">
                  Apollo-V5.5
                </Text>
                <Img
                  src="images/img_arrowdown_16X16.svg"
                  className="eye2"
                  alt="arrowdown"
                />
              </Row>
              <Row className="items-start justify-center w-[45%]">
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
                    src="images/img_arrowdown_16X16.svg"
                    className="arrowdown_One1"
                    alt="arrowdown One"
                  />
                </Row>
              </Row>
              <Img src="images/img_help.svg" className="help2" alt="help" />
            </Row>
          </Row>
        </Row>
      </header>
    </>
  );
};

export default Header1;
