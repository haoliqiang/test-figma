import React from "react";

import { Column, Stack, Img, Text, Row, Line, Button } from "components";
import Header4 from "components/Header/Header4";

const I15Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[36px] xl:pb-[46px] 2xl:pb-[52px] 3xl:pb-[62px] w-[100%]">
        <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
          <Stack className="bottom-[0] test_20220825">
            <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
              <Img
                src="images/img_image1_18.png"
                className="imageOne"
                alt="imageOne"
              />
              <Img
                src="images/img_20220825_18.png"
                className="test_20220825"
                alt="20220825"
              />
            </Stack>
            <Column className="absolute bg-gradient1  bottom-[0] justify-end left-[0] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[69%]">
              <Text
                className="lg:mb-[14px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] text-gray_905 w-[auto]"
                as="h6"
                variant="h6"
              >
                道路左传
              </Text>
            </Column>
          </Stack>
          <Column className="absolute bg-bluegray_50_75 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] top-[29%] w-[100%]">
            <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] w-[8%]">
              <Row className="items-start justify-evenly w-[100%]">
                <Text className="OneHundredFiftyThree" variant="body9">
                  系统测试
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark2"
                  alt="checkmark"
                />
                <Text className="TwoHundredEightyFour" variant="body9">
                  道路左传
                </Text>
              </Row>
            </Column>
          </Column>
          <Header4 className="absolute top-[0] w-[100%]" />
        </Stack>
        <Column className="justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[96%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-start w-[15%]">
                <Text
                  className="OneThousandSixHundredSeventyFive"
                  variant="body7"
                >
                  测试概览
                </Text>
                <Text
                  className="OneThousandSixHundredSeventySix"
                  variant="body7"
                >
                  测试记录
                </Text>
                <Text
                  className="bg-blue_A400_6c1 font-normal ml-[3px] not-italic px-[3px] py-[1px] rounded-radius7 text-blue_A400_ab1 w-[28px]"
                  variant="body9"
                >
                  99+
                </Text>
              </Row>
              <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                <Line className="absolute bg-gray_202 bottom-[0] h-[1px] rounded-radius05 w-[100%]" />
                <Line className="absolute bg-blue_A401 h-[3px] left-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[5%]" />
              </Stack>
            </Column>
          </Column>
          <Text
            className="lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] columnu1230"
            variant="body8"
          >
            测试描述
          </Text>
          <Text
            className="lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] columnu1230"
            variant="body8"
          >
            道路左传，有左侧车辆切入
          </Text>
          <Column className="items-center justify-start lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[61%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Column className="bg-gradient2  border border-gray_202 border-solid items-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[58%]">
                  <Row className="items-start justify-between w-[98%]">
                    <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[19%]">
                      <Text className="columnu1230" variant="body8">
                        测试过程预览
                      </Text>
                      <div className="bg-gray_500 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat items-center justify-start lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius4 w-[67%]"
                      style={{
                        backgroundImage: "url('images/img_group1715.png')",
                      }}
                    >
                      <Button
                        className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center rounded-radius50 lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                        size="lgIcn"
                        variant="icbOutlineWhiteA700e5"
                      >
                        <Img
                          src="images/img_play_44X44.svg"
                          className="flex items-center justify-center"
                          alt="play"
                        />
                      </Button>
                    </Column>
                  </Row>
                </Column>
                <Column className="bg-gradient2  border border-gray_202 border-solid items-center lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[37%]">
                  <Row className="items-start justify-between mt-[1px] w-[97%]">
                    <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[31%]">
                      <Text className="columnu1230" variant="body8">
                        测试报告预览
                      </Text>
                      <div className="bg-gray_500 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                    </Column>
                    <Img
                      src="images/img_rectangle349.png"
                      className="Rectangle349"
                      alt="Rectangle349"
                    />
                  </Row>
                </Column>
              </Row>
              <Row className="items-center lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[22%]">
                <Button
                  className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[35%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA401"
                >
                  运行
                </Button>
                <Row className="items-start justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[58%]">
                  <Text className="rowfile1" variant="body9">
                    上次测试时长：
                  </Text>
                  <Text
                    className="font-medium mb-[1px] text-gray_905 w-[auto]"
                    variant="body8"
                  >
                    --
                  </Text>
                </Row>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default I15Page;
