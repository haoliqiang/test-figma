import React from "react";

import { Row, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Row className="bg-blue_A401 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
          <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[98%]">
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
            <Text className="TwoHundredSeventySeven" variant="body8">
              可信赖评估
            </Text>
            <Text className="TwoHundredSeventyNine" variant="body8">
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
        </Row>
      </header>
    </>
  );
};

export default Header;
