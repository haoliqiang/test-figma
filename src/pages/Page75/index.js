import React from "react";

import { Column, Row, Text, Img, Line, Button } from "components";
import Header6 from "components/Header/Header6";
import Sidebar5 from "components/Sidebar/Sidebar5";

const Page75 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-alibabapuhuiti1 items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Header6 className="w-[100%]" />
          <Row className="items-start justify-evenly w-[98%]">
            <Sidebar5 className="w-[20%]" />
            <Column className="font-pingfangsc justify-start w-[80%]">
              <Column className="items-center justify-start lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[100%]">
                <Column className="justify-start w-[99%]">
                  <Row className="items-start w-[18%]">
                    <Row className="items-start justify-evenly w-[63%]">
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        资源库
                      </Text>
                      <Img
                        src="images/img_checkmark_3.svg"
                        className="checkmark2"
                        alt="checkmark"
                      />
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        被测车辆管理
                      </Text>
                    </Row>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark One"
                    />
                    <Text className="SevenHundredSeventyNine" variant="body9">
                      吉利 V2.0
                    </Text>
                  </Row>
                  <Line className="bg-gray_201 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                </Column>
              </Column>
              <Column className="justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[36%]">
                <Row className="items-center w-[55%]">
                  <Text
                    className="OneThousandTwoHundredSeventyEight"
                    variant="body4"
                  >
                    被测车辆：
                  </Text>
                  <Text
                    className="lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] FiveHundredFiftyTwo"
                    variant="body4"
                  >
                    吉利 V2.0
                  </Text>
                </Row>
                <Button
                  className="font-normal lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[27%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA400"
                >
                  编辑
                </Button>
                <Row className="items-center lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[81%]">
                  <Text className="FiveHundredFiftyFour" variant="body8">
                    名称
                  </Text>
                  <Text className="V20_Two" variant="body8">
                    吉利 V2.0
                  </Text>
                </Row>
                <Row className="items-center justify-between lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]">
                  <Text className="FiveHundredFiftyThree" variant="body8">
                    类型
                  </Text>
                  <Text
                    className="OneThousandTwoHundredSeventyEight"
                    variant="body8"
                  >
                    被测工控机-吉利 V2.0
                  </Text>
                </Row>
                <Row className="items-center lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[72%]">
                  <Text className="FiveHundredFiftyThree" variant="body8">
                    车辆类型
                  </Text>
                  <Text
                    className="lg:ml-[145px] xl:ml-[181px] 2xl:ml-[204px] 3xl:ml-[244px] OneThousandTwoHundredSeventyEight"
                    variant="body8"
                  >
                    轿车
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[69%]">
                  <Text className="FiveHundredFiftyFour" variant="body8">
                    车辆动力学配置
                  </Text>
                  <Text
                    className="lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] FiveHundredFiftyTwo"
                    variant="body8"
                  >
                    --
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[69%]">
                  <Text className="FiveHundredFiftyFour" variant="body8">
                    车辆传感器配置
                  </Text>
                  <Text
                    className="lg:ml-[115px] xl:ml-[144px] 2xl:ml-[162px] 3xl:ml-[194px] FiveHundredFiftyTwo"
                    variant="body8"
                  >
                    --
                  </Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page75;
