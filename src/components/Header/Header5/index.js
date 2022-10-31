import React from "react";

import { Stack, Row, Img, Text, Column } from "components";

const Header5 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Stack className="bg-blue_A401 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
          <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[96%]">
            <Row className="items-center w-[13%]">
              <Img
                src="images/img_airplane.svg"
                className="close5"
                alt="airplane"
              />
              <Text className="logo" variant="body8">
                自动驾驶安全验证平台
              </Text>
            </Row>
            <Text className="TwoHundredSeventySix" variant="body8">
              首页
            </Text>
            <Text className="TwoHundredSeventySeven" variant="body8">
              系统测试
            </Text>
            <Text className="TwoHundredSeventyNine" variant="body8">
              可信赖评估
            </Text>
            <Text className="TwoHundredSeventySeven" variant="body8">
              任务
            </Text>
            <Text className="TwoHundredSeventySeven" variant="body8">
              资源库
            </Text>
            <Row className="items-start justify-center lg:ml-[231px] xl:ml-[290px] 2xl:ml-[326px] 3xl:ml-[391px] w-[7%]">
              <Text className="rowapollovfiftyfive1" variant="body8">
                Apollo-V5.5
              </Text>
              <Img
                src="images/img_arrowdown_16X16.svg"
                className="arrowdown5"
                alt="arrowdown"
              />
            </Row>
            <Row className="items-start justify-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[9%]">
              <Img
                src="images/img_ellipse5.png"
                className="rounded-radius50 user"
                alt="EllipseFive"
              />
              <Text className="rowellipsefive1" variant="body8">
                欢迎，王志杰
              </Text>
              <Img
                src="images/img_arrowdown_16X16.svg"
                className="arrowdown_One"
                alt="arrowdown One"
              />
            </Row>
            <Img
              src="images/img_help.svg"
              className="helpcircle"
              alt="helpcircle"
            />
          </Row>
          <Row className="absolute bg-blue_A400 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
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
                  className="hover:font-semibold hover:text-white_A700 FiveHundredEightySix"
                  variant="body8"
                >
                  可信赖评估
                </Text>
                <Text
                  className="hover:font-semibold SixHundredFortyNine"
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
                    alt="arrowdown Two"
                  />
                </Row>
                <Row className="items-start justify-center w-[45%]">
                  <Img
                    src="images/img_ellipse5.png"
                    className="rounded-radius50 user"
                    alt="EllipseFive One"
                  />
                  <Row className="items-start justify-evenly lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] w-[78%]">
                    <Text className="rowfivehundredeightynine" variant="body8">
                      欢迎，王志杰
                    </Text>
                    <Img
                      src="images/img_arrowdown_16X16.svg"
                      className="arrowdown_One1"
                      alt="arrowdown Three"
                    />
                  </Row>
                </Row>
                <Img src="images/img_help.svg" className="help2" alt="help" />
              </Row>
            </Row>
          </Row>
        </Stack>
      </header>
    </>
  );
};

export default Header5;
