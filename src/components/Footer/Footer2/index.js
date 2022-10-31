import React from "react";

import { Column, Row, Text } from "components";

const Footer2 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="justify-start lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mr-[395px] xl:mr-[494px] 2xl:mr-[556px] 3xl:mr-[667px] lg:my-[21px] xl:my-[26px] 2xl:my-[30px] 3xl:my-[36px] w-[50%]">
          <Row className="items-start 3xl:mr-[117px] lg:mr-[69px] xl:mr-[87px] 2xl:mr-[98px] w-[83%]">
            <Column className="justify-start mt-[1px] w-[26%]">
              <Text
                className="TwoThousandFourHundredThirtyEight"
                variant="body8"
              >
                测试方法：故障注入
              </Text>
              <div className="bg-gray_401 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[21%]"></div>
            </Column>
            <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
            <Text
              className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] columnonehundredseventeen"
              variant="body8"
            >
              控制类：
            </Text>
            <Text
              className="font-pingfangsc TwoThousandThreeHundredTwelve"
              variant="body8"
            >
              油门失效、刹车失效、刹车响应延迟
            </Text>
          </Row>
          <Column className="justify-start lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] mt-[3px] w-[74%]">
            <Row className="items-center w-[100%]">
              <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
              <Text
                className="font-pingfangsc TwoThousandThreeHundredThirteen"
                variant="body8"
              >
                控制类：
              </Text>
              <Text
                className="font-pingfangsc TwoThousandThreeHundredTwelve"
                variant="body8"
              >
                油门失效、刹车失效、刹车响应延迟、转向相应延迟
              </Text>
            </Row>
            <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[54%]">
              <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
              <Text
                className="font-pingfangsc TwoThousandThreeHundredFifteen"
                variant="body8"
              >
                预警交互类：
              </Text>
              <Text
                className="font-pingfangsc TwoThousandThreeHundredSixteen"
                variant="body8"
              >
                油门失效、刹车失效
              </Text>
            </Row>
          </Column>
        </Column>
      </footer>
    </>
  );
};

export default Footer2;
