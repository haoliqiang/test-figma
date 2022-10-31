import React from "react";

import { Row, Column, Text, Img } from "components";

const Header8 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-blue_A400 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
          <Row className="items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[99%]">
            <Column className="items-center w-[12%]">
              <Text
                className="columnfourthousandfourhundredsixtysix"
                variant="body7"
              >
                自动驾驶安全验证平台
              </Text>
            </Column>
            <Row className="items-center justify-center xl:ml-[107px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[86px] w-[35%]">
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
            <Row className="items-center justify-between lg:ml-[248px] xl:ml-[310px] 2xl:ml-[349px] 3xl:ml-[419px] w-[19%]">
              <Row className="items-center justify-evenly w-[27%]">
                <Text className="rowapollovfiftyfive4" variant="body8">
                  AD-V2.3
                </Text>
                <Img
                  src="images/img_arrowdown_16X16.svg"
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
                    src="images/img_arrowdown_16X16.svg"
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

export default Header8;
