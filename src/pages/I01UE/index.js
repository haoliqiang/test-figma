import React from "react";

import { Column, Stack, Img, Line, Text, Row, Button, Input } from "components";
import Header1 from "components/Header/Header1";

const I01UEPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Stack className="3xl:h-[1081px] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] w-[100%]">
          <Stack className="absolute bottom-[6%] lg:h-[554px] xl:h-[693px] 2xl:h-[780px] 3xl:h-[936px] top-[7%] w-[100%]">
            <Column className="absolute items-center justify-start left-[2%] w-[98%]">
              <Column className="justify-start w-[100%]">
                <Stack className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] lg:ml-[113px] xl:ml-[141px] 2xl:ml-[159px] 3xl:ml-[190px] w-[89%]">
                  <Img
                    src="images/img_image1_160X919.png"
                    className="imageOne"
                    alt="imageOne"
                  />
                  <Img
                    src="images/img_20220825_160X1249.png"
                    className="test_20220825"
                    alt="20220825"
                  />
                </Stack>
                <Line className="bg-gray_202 h-[1px] lg:mr-[22px] xl:mr-[28px] 2xl:mr-[32px] 3xl:mr-[38px] lg:mt-[439px] xl:mt-[549px] 2xl:mt-[618px] 3xl:mt-[742px] rounded-radius05 w-[98%]" />
              </Column>
            </Column>
            <Column className="absolute bg-gradient1  justify-start left-[0] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] top-[0] w-[65%]">
              <Text className="columnfivehundredfiftyone" as="h6" variant="h6">
                中华人民共和国道路交通安全法
              </Text>
            </Column>
          </Stack>
          <Column className="absolute bg-bluegray_50_75 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] top-[7%] w-[100%]">
            <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] w-[11%]">
              <Row className="items-start justify-evenly w-[100%]">
                <Text className="FiveHundredFiftyTwo" variant="body9">
                  任务
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark2"
                  alt="checkmark"
                />
                <Text className="FiveHundredFiftyThree" variant="body9">
                  自动驾驶合规性评估
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="absolute inset-x-[0] justify-start mx-[auto] top-[33%] w-[95%]">
            <Row className="items-center justify-end ml-[auto] w-[18%]">
              <Text className="FiveHundredFiftyFour" variant="body8">
                任务提交时间：
              </Text>
              <Text className="test_202208292001" variant="body8">
                2022-08-29 20:04:29
              </Text>
            </Row>
            <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[6%]">
              <Text className="FiveHundredFiftyFour" variant="body8">
                任务进度：
              </Text>
              <Text className="test_202208292001" variant="body8">
                --
              </Text>
            </Row>
            <Line className="bg-gray_201 h-[4px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
          </Column>
          <Row className="absolute border border-gray_201 border-solid inset-x-[0] items-center mx-[auto] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 top-[29%] w-[96%]">
            <Row className="items-start mb-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
              <Img
                src="images/img_close_24X24.svg"
                className="close5"
                alt="close"
              />
              <Text className="rowclose1" variant="body4">
                任务已取消
              </Text>
              <Column className="bg-blue_A400 items-center justify-end 2xl:ml-[1066px] 3xl:ml-[1279px] lg:ml-[758px] xl:ml-[948px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[9%]">
                <Text className="columnfivehundredfiftyeight" variant="body7">
                  再次运行
                </Text>
              </Column>
            </Row>
          </Row>
          <Column className="absolute bottom-[13%] justify-start left-[2%] w-[89%]">
            <Row className="items-start w-[14%]">
              <Text
                className="font-semibold text-bluegray_800 w-[auto]"
                variant="body4"
              >
                测试描述
              </Text>
              <Column className="bg-gray_53 items-center justify-end 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] p-[2px] rounded-radius4 w-[46%]">
                <Text className="columnapollovfiftyfive" variant="body9">
                  Apollo-V5.5
                </Text>
              </Column>
            </Row>
            <Column className="justify-start 3xl:ml-[117px] lg:ml-[69px] xl:ml-[87px] 2xl:ml-[98px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[92%]">
              <Text className="columndescription" variant="body8">
                按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。
              </Text>
              <Row className="items-center lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[71%]">
                <Column className="bg-gray_54 items-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[58%]">
                  <Row className="items-start justify-between w-[98%]">
                    <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[19%]">
                      <Text className="columnfivehundredsixty" variant="body8">
                        测试过程预览
                      </Text>
                      <div className="bg-gray_500 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                    </Column>
                    <Column
                      className="bg-cover bg-repeat items-center justify-start lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius4 w-[67%]"
                      style={{
                        backgroundImage: "url('images/img_group535.png')",
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
                <Column className="bg-gray_54 items-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[37%]">
                  <Row className="items-start justify-between mt-[1px] w-[97%]">
                    <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[31%]">
                      <Text className="columnfivehundredsixty" variant="body8">
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
            </Column>
          </Column>
          <Header1 className="absolute top-[0] w-[100%]" />
          <Column className="absolute bg-black_900_99 font-alibabapuhuiti1 items-center justify-center lg:p-[49px] xl:p-[62px] 2xl:p-[70px] 3xl:p-[84px] w-[100%]">
            <Column
              className="bg-cover bg-repeat justify-center xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] lg:my-[9px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group6424.png')" }}
            >
              <Input
                className="font-normal p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                wrapClassName="2xl:mt-[543px] 3xl:mt-[651px] flex lg:mt-[386px] w-[15%] xl:mt-[483px]"
                name="Maskgroup"
                placeholder="测试车辆信息"
                suffix={
                  <Img
                    src="images/img_minimize.svg"
                    className="mr-[0] lg:w-[8px] lg:h-[9px] lg:ml-[24px] xl:w-[10px] xl:h-[11px] xl:ml-[31px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[35px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[42px] my-[auto]"
                    alt="minimize"
                  />
                }
                shape="RoundedBorder4"
                size="2xl"
                variant="Outline"
              ></Input>
              <Row className="bg-gray_900_99 items-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pr-[14px] xl:pr-[17px] 2xl:pr-[20px] 3xl:pr-[24px] rounded-radius4 w-[15%]">
                <Button
                  className="font-normal xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[56%]"
                  shape="CustomBorderTL4"
                  size="xl"
                  variant="Outline"
                >
                  默认视角
                </Button>
                <Column className="items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] rounded-radius4 w-[32%]">
                  <Text
                    className="font-normal text-white_A700_a2 w-[auto]"
                    variant="body8"
                  >
                    主车视角
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default I01UEPage;
