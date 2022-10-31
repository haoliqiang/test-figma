import React from "react";

import {
  Stack,
  Column,
  Img,
  Text,
  Row,
  Button,
  Line,
  List,
  CheckBox,
} from "components";
import Header3 from "components/Header/Header3";

const Page8 = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-pingfangsc lg:h-[1252px] xl:h-[1566px] 2xl:h-[1762px] 3xl:h-[2114px] mx-[auto] overflow-auto w-[100%]">
        <Column className="absolute items-center justify-start top-[0] w-[100%]">
          <Header3 className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
            <Stack className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] w-[100%]">
              <Stack className="test_20220825">
                <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                  <Img
                    src="images/img_image1_13.png"
                    className="imageOne"
                    alt="imageOne"
                  />
                  <Img
                    src="images/img_20220825_13.png"
                    className="test_20220825"
                    alt="20220825"
                  />
                </Stack>
                <Column className="absolute bg-gradient1  justify-end left-[0] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[65%]">
                  <Text
                    className="columnfivehundredfiftyone"
                    as="h6"
                    variant="h6"
                  >
                    中华人民共和国道路交通安全法
                  </Text>
                </Column>
              </Stack>
              <Column className="absolute bg-bluegray_50_75 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] top-[1%] w-[100%]">
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
            </Stack>
            <Column className="border border-pink_101 border-solid items-center justify-end lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] p-[1px] rounded-radius8 w-[96%]">
              <Column className="items-center justify-start lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[97%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Row className="items-center w-[11%]">
                        <Img
                          src="images/img_play_1.svg"
                          className="close5"
                          alt="play"
                        />
                        <Text className="rowplay1" variant="body4">
                          任务已终止
                        </Text>
                      </Row>
                      <Row className="items-center w-[18%]">
                        <Text className="FiveHundredFiftyFour" variant="body8">
                          任务提交时间：
                        </Text>
                        <Text className="test_202208292001" variant="body8">
                          2022-08-29 20:04:29
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-end justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Row className="items-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pr-[2px] pt-[2px] w-[15%]">
                        <Text
                          className="columnfivehundredsixty"
                          variant="body8"
                        >
                          任务进度：
                        </Text>
                        <Text className="test_202208292001" variant="body8">
                          1/5，已执行12:23，
                        </Text>
                      </Row>
                      <Button
                        className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[9%]"
                        shape="RoundedBorder4"
                        size="lg"
                        variant="FillBlueA400"
                      >
                        再次运行
                      </Button>
                    </Row>
                  </Column>
                  <Stack className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]">
                    <Line className="absolute bg-gray_201 h-[4px] left-[0] w-[100%]" />
                    <Line className="absolute bg-red_600 h-[4px] left-[0] w-[67%]" />
                  </Stack>
                </Column>
              </Column>
            </Column>
            <Row className="items-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[13%]">
              <Text
                className="font-semibold text-bluegray_800 w-[auto]"
                variant="body4"
              >
                测试描述
              </Text>
              <Text className="Group3551" variant="body9">
                Apollo-V5.5
              </Text>
            </Row>
            <Text className="column202208252" variant="body8">
              按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。
            </Text>
            <Row className="items-center lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[58%]">
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
                        alt="play One"
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
            <Line className="bg-gray_202 h-[1px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] rounded-radius05 w-[96%]" />
            <Row className="items-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[93%]">
              <Text
                className="rowonethousandthreehundredsixtyfour"
                variant="body4"
              >
                测试结果
              </Text>
              <Stack className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[7%]">
                <Text className="language5" variant="body9">
                  执行了 次测试
                </Text>
                <Text className="Twelve2" variant="body7">
                  12
                </Text>
              </Stack>
              <Column className="items-center justify-start 3xl:ml-[1055px] lg:ml-[625px] xl:ml-[781px] 2xl:ml-[879px] w-[20%]">
                <List
                  className="lg:gap-[22px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-[repeat(2,_1fr_2px)_1fr] min-h-[auto] xl:pl-[12px] 2xl:pl-[14px] 3xl:pl-[16px] lg:pl-[9px] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="listsix">
                    <Row className="items-end w-[78%]">
                      <Text className="rowbrand" variant="body4">
                        6
                      </Text>
                      <Text
                        className="OneThousandThreeHundredTwentyNine"
                        variant="body9"
                      >
                        次
                      </Text>
                    </Row>
                    <Row className="items-start justify-evenly lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                      <Text className="columnfivehundredsixty" variant="body9">
                        压线
                      </Text>
                      <Img
                        src="images/img_eye_9X13.svg"
                        className="eye"
                        alt="eye"
                      />
                    </Row>
                  </Column>
                  <Line className="self-center w-[2px] bg-red_601 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius1" />
                  <Column className="mt-[1px] listsix">
                    <Row className="items-end w-[78%]">
                      <Text className="rowbrand" variant="body4">
                        4
                      </Text>
                      <Text
                        className="OneThousandThreeHundredThirtyOne"
                        variant="body9"
                      >
                        次
                      </Text>
                    </Row>
                    <Row className="items-start justify-evenly lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Text className="columnfivehundredsixty" variant="body9">
                        撞车
                      </Text>
                      <Img
                        src="images/img_eye_9X13.svg"
                        className="eye"
                        alt="eye One"
                      />
                    </Row>
                  </Column>
                  <Line className="self-center w-[2px] bg-red_601 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius1" />
                  <Column className="mt-[1px] listsix">
                    <Row className="items-end w-[78%]">
                      <Text className="rowbrand" variant="body4">
                        5
                      </Text>
                      <Text
                        className="OneThousandThreeHundredThirtyOne"
                        variant="body9"
                      >
                        次
                      </Text>
                    </Row>
                    <Row className="items-start justify-evenly lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Text className="columnfivehundredsixty" variant="body9">
                        逆行
                      </Text>
                      <Img
                        src="images/img_eye_9X13.svg"
                        className="eye"
                        alt="eye Two"
                      />
                    </Row>
                  </Column>
                </List>
              </Column>
            </Row>
          </Column>
        </Column>
        <Stack className="absolute bottom-[7%] lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] inset-x-[0] mx-[auto] w-[96%]">
          <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[8%]">
            <Button
              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Button
              className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Button
              className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Button
              className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Button
              className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Button
              className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Button
              className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Button
              className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Button
              className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Button
              className="font-normal lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
          </Column>
          <Stack className="absolute lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] w-[100%]">
            <Stack className="absolute lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] w-[100%]">
              <Stack className="absolute lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] w-[100%]">
                <Stack className="absolute lg:h-[414px] xl:h-[518px] 2xl:h-[583px] 3xl:h-[699px] top-[0] w-[100%]">
                  <Stack className="absolute lg:h-[414px] xl:h-[518px] 2xl:h-[583px] 3xl:h-[699px] w-[100%]">
                    <Column className="absolute justify-start w-[100%]">
                      <Stack className="lg:h-[323px] xl:h-[403px] 2xl:h-[454px] 3xl:h-[544px] w-[100%]">
                        <Stack className="absolute lg:h-[277px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] top-[0] w-[100%]">
                          <Stack className="absolute lg:h-[277px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] w-[100%]">
                            <Stack className="absolute lg:h-[277px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] w-[100%]">
                              <Column className="absolute items-center justify-start left-[0] top-[0] w-[71%]">
                                <Row className="items-center justify-evenly w-[100%]">
                                  <Column className="items-center w-[41%]">
                                    <List
                                      className="gap-[0] min-h-[auto] w-[100%]"
                                      orientation="vertical"
                                    >
                                      <Row className="listrectangle127">
                                        <Column className="bg-white_A700 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[10%]">
                                          <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                                        </Column>
                                        <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[90%]">
                                          <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[42%]">
                                            <Column
                                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group777.png')",
                                              }}
                                            >
                                              <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                            </Column>
                                            <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                              <Text
                                                className="font-semibold text-bluegray_800 w-[auto]"
                                                variant="body9"
                                              >
                                                道路左转
                                              </Text>
                                              <Text
                                                className="TwentySix"
                                                variant="body9"
                                              >
                                                具体场景故障案例
                                              </Text>
                                            </Column>
                                          </Row>
                                        </Column>
                                      </Row>
                                      <Row className="listrectangle127">
                                        <Column className="bg-white_A700 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[10%]">
                                          <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                                        </Column>
                                        <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[90%]">
                                          <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[42%]">
                                            <Column
                                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                              style={{
                                                backgroundImage:
                                                  "url('images/img_group777.png')",
                                              }}
                                            >
                                              <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                            </Column>
                                            <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                              <Text
                                                className="font-semibold text-bluegray_800 w-[auto]"
                                                variant="body9"
                                              >
                                                道路左转
                                              </Text>
                                              <Text
                                                className="TwentySix"
                                                variant="body9"
                                              >
                                                具体场景故障案例
                                              </Text>
                                            </Column>
                                          </Row>
                                        </Column>
                                      </Row>
                                    </List>
                                  </Column>
                                  <List
                                    className="gap-[0] min-h-[auto] w-[59%]"
                                    orientation="vertical"
                                  >
                                    <Row className="listtwohundredsixtyeight">
                                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                        <Text
                                          className="columnu12302"
                                          variant="body9"
                                        >
                                          已终止
                                        </Text>
                                      </Column>
                                      <Column className="bg-white_A700 lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[44%]">
                                        <Text
                                          className="columnonethousandthreehundredforty"
                                          variant="body9"
                                        >
                                          --
                                        </Text>
                                      </Column>
                                      <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                                    </Row>
                                    <Row className="listtwohundredsixtyeight">
                                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                        <Text
                                          className="columnu12302"
                                          variant="body9"
                                        >
                                          已完成
                                        </Text>
                                      </Column>
                                      <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                                        <Text
                                          className="columnone12"
                                          variant="body9"
                                        >
                                          压线1次
                                        </Text>
                                      </Column>
                                      <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                                    </Row>
                                  </List>
                                </Row>
                              </Column>
                              <Line className="absolute bg-gray_202 h-[1px] top-[16%] w-[100%]" />
                              <Line className="absolute bg-gray_202 bottom-[18%] h-[1px] w-[100%]" />
                              <Text
                                className="absolute right-[27%] top-[7%] rowbrand"
                                variant="body9"
                              >
                                --
                              </Text>
                              <Text className="time4" variant="body9">
                                00:40
                              </Text>
                              <Text
                                className="absolute right-[44%] top-[7%] rowbrand"
                                variant="body9"
                              >
                                --
                              </Text>
                              <Text
                                className="test_202009092106"
                                variant="body9"
                              >
                                2020-09-09 21:00:02
                              </Text>
                              <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] top-[16%] w-[3%]">
                                <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="absolute bg-white_A700 bottom-[1%] items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                                <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="absolute bg-white_A700 justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] top-[16%] w-[26%]">
                                <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[82%]">
                                  <Column
                                    className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group191.png')",
                                    }}
                                  >
                                    <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                  </Column>
                                  <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[82%]">
                                    <Text
                                      className="font-semibold text-bluegray_800 w-[auto]"
                                      variant="body9"
                                    >
                                      道路左转
                                    </Text>
                                    <Text className="TwentySix" variant="body9">
                                      具体场景故障案例具体场景故障案例具体故..
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                              <Column className="absolute bg-white_A700 bottom-[0] justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[26%]">
                                <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[82%]">
                                  <Column
                                    className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group191.png')",
                                    }}
                                  >
                                    <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                  </Column>
                                  <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[82%]">
                                    <Text
                                      className="font-semibold text-bluegray_800 w-[auto]"
                                      variant="body9"
                                    >
                                      道路左转
                                    </Text>
                                    <Text className="TwentySix" variant="body9">
                                      具体场景故障案例具体场景故障案例具体故..
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Stack>
                            <List
                              className="absolute bottom-[1%] gap-[0] inset-x-[0] min-h-[auto] mx-[auto] w-[42%]"
                              orientation="vertical"
                            >
                              <Row className="listtwohundredsixtyeight">
                                <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                  <Text
                                    className="columnu12302"
                                    variant="body9"
                                  >
                                    已终止
                                  </Text>
                                </Column>
                                <Column className="bg-white_A700 lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[44%]">
                                  <Text
                                    className="columnonethousandthreehundredforty"
                                    variant="body9"
                                  >
                                    --
                                  </Text>
                                </Column>
                                <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                              </Row>
                              <Row className="listtwohundredsixtyeight">
                                <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                  <Text
                                    className="columnu12302"
                                    variant="body9"
                                  >
                                    已完成
                                  </Text>
                                </Column>
                                <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                                  <Text className="columnone12" variant="body9">
                                    撞车1次
                                  </Text>
                                </Column>
                                <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                              </Row>
                            </List>
                          </Stack>
                          <Column className="absolute bottom-[1%] items-center justify-start right-[19%] w-[13%]">
                            <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                              <Text
                                className="lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] test_75B1FF_One"
                                variant="body9"
                              >
                                --
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 justify-start lg:mt-[136px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                              <Text className="columntime_one" variant="body9">
                                01:23
                              </Text>
                            </Column>
                          </Column>
                        </Stack>
                        <Line className="absolute bg-gray_202 h-[1px] top-[28%] w-[100%]" />
                        <Line className="absolute bg-gray_202 bottom-[15%] h-[1px] w-[100%]" />
                        <Text
                          className="absolute right-[44%] top-[20%] rowbrand"
                          variant="body9"
                        >
                          --
                        </Text>
                        <Text className="test_20200909210_One1" variant="body9">
                          2020-09-09 21:00:02
                        </Text>
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] top-[28%] w-[3%]">
                          <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Column className="absolute bg-white_A700 bottom-[1%] items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Column className="absolute bg-white_A700 justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] top-[28%] w-[26%]">
                          <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[46%]">
                            <Column
                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group192.png')",
                              }}
                            >
                              <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路右转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                摄像头失效故障模式
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="absolute bg-white_A700 bottom-[0] justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[26%]">
                          <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[46%]">
                            <Column
                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group192.png')",
                              }}
                            >
                              <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路右转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                摄像头失效故障模式
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Stack>
                      <Row className="items-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[29%]">
                        <Column className="bg-white_A700 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[10%]">
                          <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[90%]">
                          <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[46%]">
                            <Column
                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group192.png')",
                              }}
                            >
                              <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路右转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                摄像头失效故障模式
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                    <List
                      className="absolute bottom-[1%] gap-[0] inset-x-[0] min-h-[auto] mx-[auto] w-[42%]"
                      orientation="vertical"
                    >
                      <Row className="listtwohundredsixtyeight">
                        <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                          <Text className="columnu12302" variant="body9">
                            已完成
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                          <Text className="columnone12" variant="body9">
                            逆行1次
                          </Text>
                        </Column>
                        <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                      </Row>
                      <Row className="listtwohundredsixtyeight">
                        <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                          <Text className="columnu12302" variant="body9">
                            已完成
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                          <Text className="columnone12" variant="body9">
                            逆行1次
                          </Text>
                        </Column>
                        <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                      </Row>
                      <Row className="listtwohundredsixtyeight">
                        <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                          <Text className="columnu12302" variant="body9">
                            已完成
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                          <Text className="columnone12" variant="body9">
                            逆行1次
                          </Text>
                        </Column>
                        <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                      </Row>
                    </List>
                  </Stack>
                  <Column className="absolute bottom-[1%] items-center justify-start right-[19%] w-[13%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                        <Text className="columntime_one" variant="body9">
                          05:23
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 justify-start lg:mt-[136px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                        <Text className="columntime_one" variant="body9">
                          05:23
                        </Text>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 justify-start lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                      <Text className="columntime_one" variant="body9">
                        05:23
                      </Text>
                    </Column>
                  </Column>
                </Stack>
                <Line className="absolute bg-gray_202 h-[1px] top-[30%] w-[100%]" />
                <Line className="absolute bg-gray_202 bottom-[31%] h-[1px] w-[100%]" />
                <Line className="absolute bg-gray_202 bottom-[11%] h-[1px] w-[100%]" />
                <Text className="test_20200909210_Two1" variant="body9">
                  2020-09-09 21:00:02
                </Text>
                <Column className="absolute justify-start left-[3%] top-[30%] w-[68%]">
                  <Row className="items-start w-[100%]">
                    <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[38%]">
                      <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[46%]">
                        <Column
                          className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          style={{
                            backgroundImage: "url('images/img_group1723.png')",
                          }}
                        >
                          <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                        </Column>
                        <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                          <Text
                            className="font-semibold text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            道路左转
                          </Text>
                          <Text className="TwentySix" variant="body9">
                            摄像头失效故障模式
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                      <Text className="columnu12302" variant="body9">
                        已完成
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[27%]">
                      <Text className="columnone12" variant="body9">
                        压线1次
                      </Text>
                    </Column>
                    <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[20%]"></div>
                  </Row>
                  <Text className="columnrectangle345_three" variant="body9">
                    2020-09-09 21:00:02
                  </Text>
                </Column>
                <Column className="absolute bottom-[15%] justify-start left-[3%] w-[68%]">
                  <Row className="items-start w-[100%]">
                    <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[38%]">
                      <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[46%]">
                        <Column
                          className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          style={{
                            backgroundImage: "url('images/img_group1723.png')",
                          }}
                        >
                          <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                        </Column>
                        <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                          <Text
                            className="font-semibold text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            道路左转
                          </Text>
                          <Text className="TwentySix" variant="body9">
                            摄像头失效故障模式
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                      <Text className="columnu12302" variant="body9">
                        已完成
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[27%]">
                      <Text className="columnone12" variant="body9">
                        压线1次
                      </Text>
                    </Column>
                    <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[20%]"></div>
                  </Row>
                  <Text className="columnrectangle3771" variant="body9">
                    2020-09-09 21:00:02
                  </Text>
                </Column>
                <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] top-[30%] w-[3%]">
                  <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[21%] items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                  <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[1%] items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                  <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[0] justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[26%]">
                  <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[46%]">
                    <Column
                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      style={{
                        backgroundImage: "url('images/img_group1723.png')",
                      }}
                    >
                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                    </Column>
                    <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        variant="body9"
                      >
                        道路左转
                      </Text>
                      <Text className="TwentySix" variant="body9">
                        摄像头失效故障模式
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[1%] justify-start left-[29%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[6%]">
                  <Text className="columnu12302" variant="body9">
                    已完成
                  </Text>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[1%] justify-end left-[35%] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[19%]">
                  <Text className="columnone12" variant="body9">
                    压线1次
                  </Text>
                </Column>
                <div className="absolute bg-white_A700 bottom-[1%] lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] right-[29%] w-[13%]"></div>
              </Stack>
              <Column className="absolute bottom-[21%] items-center justify-start right-[19%] w-[13%]">
                <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                  <Text className="columntime_one" variant="body9">
                    1:22:23
                  </Text>
                </Column>
                <Column className="bg-white_A700 justify-start lg:mt-[136px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                  <Text className="columntime_one" variant="body9">
                    1:22:23
                  </Text>
                </Column>
              </Column>
            </Stack>
            <Column className="absolute bottom-[1%] items-end justify-start right-[10%] w-[35%]">
              <Button
                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                shape="icbRoundedBorder3"
                size="mdIcn"
                variant="icbFillGray102"
              >
                <Img
                  src="images/img_vector_1.svg"
                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                  alt="Frame"
                />
              </Button>
              <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Text className="rowbrand" variant="body9">
                  2020-09-09 21:00:02
                </Text>
                <Column className="bg-white_A700 lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[37%]">
                  <Text className="columntime_one" variant="body9">
                    1:22:23
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame One"
                  />
                </Button>
              </Row>
            </Column>
            <Line className="absolute bg-gray_202 h-[1px] top-[39%] w-[100%]" />
            <Line className="absolute bg-gray_202 bottom-[21%] h-[1px] w-[100%]" />
            <Line className="absolute bg-gray_202 bottom-[1%] h-[1px] w-[100%]" />
            <Column className="absolute items-end justify-start right-[10%] top-[3%] w-[35%]">
              <Column className="items-center justify-start w-[6%]">
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center w-[100%]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Two"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Three"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Four"
                  />
                </Button>
              </Column>
              <Row className="items-center justify-between lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                <Text className="rowbrand" variant="body9">
                  2020-09-09 21:00:02
                </Text>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Five"
                  />
                </Button>
              </Row>
            </Column>
            <Column className="absolute bottom-[24%] items-end justify-start right-[10%] w-[35%]">
              <Column className="items-center justify-start w-[6%]">
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center w-[100%]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Six"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Seven"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Eight"
                  />
                </Button>
              </Column>
              <Row className="items-center justify-between lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]">
                <Text className="rowbrand" variant="body9">
                  2020-09-09 21:00:02
                </Text>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray102"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Nine"
                  />
                </Button>
              </Row>
            </Column>
          </Stack>
        </Stack>
        <footer className="absolute bg-white_A700 bottom-[44%] inset-x-[0] mx-[auto] w-[96%]">
          <Column className="justify-start w-[100%]">
            <Row className="items-start lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[86%]">
              <Column className="items-center justify-start mt-[2px] w-[2%]">
                <Text className="columnfivehundredsixty" variant="body9">
                  案例
                </Text>
              </Column>
              <Text
                className="OneThousandThreeHundredEightyNine"
                variant="body9"
              >
                任务状态
              </Text>
              <Row className="items-start xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[86px] w-[21%]">
                <Text className="rowsixhundredfiftythree" variant="body9">
                  发现事故
                </Text>
                <Img
                  src="images/img_filter.svg"
                  className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] ml-[4px] mt-[3px] w-[4%]"
                  alt="filter"
                />
                <Row className="items-start justify-evenly xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[82px] w-[26%]">
                  <Text className="rowsixhundredfiftythree" variant="body9">
                    完成时间
                  </Text>
                  <Img
                    src="images/img_close_16X16.svg"
                    className="arrowleft"
                    alt="close"
                  />
                </Row>
              </Row>
              <Row className="items-start justify-center lg:ml-[124px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] w-[5%]">
                <Text className="rowsixhundredfiftythree" variant="body9">
                  运行时长
                </Text>
                <Img
                  src="images/img_close_16X16.svg"
                  className="arrowleft"
                  alt="close One"
                />
              </Row>
              <Text
                className="OneThousandThreeHundredNinetyThree"
                variant="body9"
              >
                操作
              </Text>
            </Row>
            <Line className="bg-gray_202 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
          </Column>
        </footer>
        <Row className="absolute bottom-[4%] items-center justify-center left-[3%] w-[15%]">
          <CheckBox
            className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
            inputClassName="h-[16px] mr-[5px] w-[16px]"
            name="OneThousandThreeHundredNinetyFour"
            label="全选"
            shape="RoundedBorder2"
            size="sm"
            variant="OutlineGray402"
          ></CheckBox>
          <div className="bg-bluegray_200 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[1px]"></div>
          <Button
            className="font-normal lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[53%]"
            shape="RoundedBorder4"
            size="md"
            variant="FillBlueA400"
          >
            添加到测试集
          </Button>
        </Row>
        <Line className="absolute bg-bluegray_200 bottom-[40%] lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] right-[1%] rounded-radius2 w-[4px]" />
        <Img
          src="images/img_126deg.svg"
          className="absolute bottom-[0] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] left-[26%] w-[4px]"
          alt="126deg"
        />
        <Img
          src="images/img_144deg.svg"
          className="absolute bottom-[0] lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] right-[25%] w-[3px]"
          alt="144deg"
        />
        <Column className="absolute bottom-[0] justify-end left-[27%] w-[5px]">
          <Img
            src="images/img_126deg.svg"
            className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] ml-[1px] w-[80%]"
            alt="126deg One"
          />
          <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] rotate-[126deg] rounded-radius50 shadow-bs3 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
        </Column>
        <Column className="absolute bottom-[0] justify-end right-[23%] w-[4px]">
          <Img
            src="images/img_144deg.svg"
            className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] ml-[1px] w-[75%]"
            alt="144deg One"
          />
          <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] rotate-[144deg] rounded-radius50 shadow-bs3 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
        </Column>
        <div className="absolute bottom-[0] overflow-x-auto right-[0] w-[3%]">
          <Row className="items-center justify-between w-[100%]">
            <Img
              src="images/img_270deg_1.png"
              className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] rotate-[90deg] w-[12%]"
              alt="270deg"
            />
            <Img
              src="images/img_270deg_2.png"
              className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] rotate-[90deg] w-[12%]"
              alt="270deg One"
            />
          </Row>
        </div>
        <Img
          src="images/img_288deg.png"
          className="absolute bottom-[0] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] right-[0] w-[5px]"
          alt="288deg"
        />
        <div className="absolute bottom-[0] overflow-x-auto right-[0] w-[1%]">
          <Row className="items-start justify-evenly w-[100%]">
            <Img
              src="images/img_342deg.png"
              className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mt-[4px] w-[22%]"
              alt="342deg"
            />
            <Img
              src="images/img_342deg.png"
              className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] mb-[4px] w-[22%]"
              alt="342deg One"
            />
          </Row>
        </div>
        <Img
          src="images/img_288deg.png"
          className="absolute bottom-[0] xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] right-[0] w-[5px]"
          alt="288deg One"
        />
      </Stack>
    </>
  );
};

export default Page8;
