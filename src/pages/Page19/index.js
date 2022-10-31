import React from "react";

import { Column, Text, Line, Row, Img, List, Stack, Button } from "components";

const Page19 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] w-[100%]">
        <Column className="justify-start lg:mb-[433px] xl:mb-[542px] 2xl:mb-[610px] 3xl:mb-[732px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              as="h5"
              variant="h5"
            >
              其他
            </Text>
            <Column className="justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]">
              <Text
                className="font-semibold text-black_900_e5 w-[auto]"
                variant="body5"
              >
                标签
              </Text>
              <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            </Column>
            <Row className="items-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[31%]">
              <Column className="border border-deep_purple_A200 border-solid items-end justify-end xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] lg:p-[9px] rounded-radius5 w-[25%]">
                <Row className="items-start justify-center mr-[1px] mt-[1px] w-[98%]">
                  <Text className="A5" as="h1" variant="h1">
                    A
                  </Text>
                  <Text
                    className="flex items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] rowellipsenine_twelve1"
                    variant="body4"
                  >
                    级
                  </Text>
                  <Img
                    src="images/img_union.svg"
                    className="lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[20%]"
                    alt="Union"
                  />
                </Row>
                <Column className="items-center justify-start mr-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[89%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="B7" as="h1" variant="h1">
                      B
                    </Text>
                    <Text
                      className="flex items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] columnonehundredseventeen"
                      variant="body4"
                    >
                      级
                    </Text>
                    <Img
                      src="images/img_signal_13X12.svg"
                      className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] w-[13%]"
                      alt="signal"
                    />
                    <Line className="bg-bluegray_101 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rounded-radius1 w-[4px]" />
                  </Row>
                  <Row className="items-start justify-evenly lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[99%]">
                    <Text className="C3" as="h1" variant="h1">
                      C
                    </Text>
                    <Text
                      className="flex items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] columnonehundredseventeen"
                      variant="body4"
                    >
                      级
                    </Text>
                    <div className="bg-red_600 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] rotate-[90deg] rounded-radius1 w-[4%]"></div>
                    <div className="bg-bluegray_101 2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[29px] rotate-[90deg] rounded-radius1 w-[4%]"></div>
                    <Line className="bg-bluegray_101 lg:h-[10px] xl:h-[13px] 2xl:h-[14px] 3xl:h-[17px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rounded-radius1 w-[4px]" />
                  </Row>
                </Column>
              </Column>
              <List
                className="border border-deep_purple_A200 border-solid gap-[0] min-h-[auto] lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-radius5 w-[20%]"
                orientation="vertical"
              >
                <Row className="items-start justify-center lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] mt-[9px] mx-[auto] w-[95%]">
                  <Text className="A5" as="h4" variant="h4">
                    A
                  </Text>
                  <Text
                    className="flex items-center ml-[2px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] columnonehundredseventeen"
                    variant="body8"
                  >
                    级
                  </Text>
                  <div className="bg-teal_400 2xl:h-[3px] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rotate-[90deg] rounded-radius1 2xl:w-[2px] xl:w-[2px] lg:w-[2px] 3xl:w-[3px]"></div>
                  <div className="bg-teal_400 lg:h-[5px] 2xl:h-[6px] xl:h-[6px] 3xl:h-[8px] ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] rotate-[90deg] rounded-radius1 w-[6%]"></div>
                  <div className="bg-teal_400 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] ml-[2px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rotate-[90deg] rounded-radius1 w-[6%]"></div>
                </Row>
                <Row className="items-start justify-center ml-[4px] mr-[1px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[89%]">
                  <Text className="B7" as="h4" variant="h4">
                    B
                  </Text>
                  <Text
                    className="flex items-center lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] columnonehundredseventeen"
                    variant="body8"
                  >
                    级
                  </Text>
                  <div className="bg-deep_orange_A200 2xl:h-[3px] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rotate-[90deg] rounded-radius1 2xl:w-[2px] xl:w-[2px] lg:w-[2px] 3xl:w-[3px]"></div>
                  <div className="bg-deep_orange_A200 lg:h-[5px] 2xl:h-[6px] xl:h-[6px] 3xl:h-[8px] ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] rotate-[90deg] rounded-radius1 w-[6%]"></div>
                  <div className="bg-bluegray_101 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] ml-[2px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rotate-[90deg] rounded-radius1 w-[6%]"></div>
                </Row>
                <Row className="items-start justify-center mx-[auto] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[95%]">
                  <Text className="C3" as="h4" variant="h4">
                    C
                  </Text>
                  <Text
                    className="flex items-center xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] columnonehundredseventeen"
                    variant="body8"
                  >
                    级
                  </Text>
                  <div className="bg-red_600 2xl:h-[3px] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] rotate-[90deg] rounded-radius1 2xl:w-[2px] xl:w-[2px] lg:w-[2px] 3xl:w-[3px]"></div>
                  <div className="bg-bluegray_101 lg:h-[5px] 2xl:h-[6px] xl:h-[6px] 3xl:h-[8px] ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[16px] 3xl:mt-[20px] rotate-[90deg] rounded-radius1 w-[6%]"></div>
                  <div className="bg-bluegray_101 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] ml-[2px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rotate-[90deg] rounded-radius1 w-[6%]"></div>
                </Row>
              </List>
              <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[17%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="bg-gray_54 items-center justify-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius2 w-[100%]">
                    <Row className="items-start justify-evenly mt-[2px] w-[100%]">
                      <div className="bg-red_600 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] mt-[2px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                      <Text className="rowbrand" variant="body9">
                        不通过
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_54 justify-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius2 w-[100%]">
                    <Row className="items-start mr-[auto] mt-[2px] w-[74%]">
                      <div className="bg-teal_400 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] mt-[2px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                      <Text className="rowellipsenine_two" variant="body9">
                        通过
                      </Text>
                    </Row>
                  </Column>
                </List>
                <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] p-[2px] w-[100%]">
                  <Text
                    className="lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] rowbrand"
                    variant="body9"
                  >
                    --
                  </Text>
                </Column>
              </Column>
              <List
                className="border border-deep_purple_A200 border-solid gap-[0] min-h-[auto] lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[17%]"
                orientation="vertical"
              >
                <Row className="items-start justify-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] pt-[2px] w-[100%]">
                  <Line className="bg-red_600 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] mt-[1px] rounded-radius1 w-[2px]" />
                  <Stack className="lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[76%]">
                    <Row className="absolute items-end justify-between left-[0] top-[0] w-[73%]">
                      <Text className="Six54" variant="body3">
                        6
                      </Text>
                      <Text
                        className="font-pingfangsc mb-[2px] TwoThousandEighty"
                        variant="body9"
                      >
                        次
                      </Text>
                    </Row>
                    <Row className="absolute bottom-[0] items-start justify-evenly w-[100%]">
                      <Text className="columnapollovfiftyfive" variant="body9">
                        压线
                      </Text>
                      <Img
                        src="images/img_eye_1.svg"
                        className="eye4"
                        alt="eye"
                      />
                    </Row>
                  </Stack>
                </Row>
                <Row className="items-start justify-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] pt-[2px] w-[100%]">
                  <Line className="bg-red_600 lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] mt-[1px] rounded-radius1 w-[2px]" />
                  <Stack className="lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[76%]">
                    <Row className="absolute items-end justify-between left-[0] top-[0] w-[73%]">
                      <Text className="Six54" variant="body3">
                        6
                      </Text>
                      <Text
                        className="font-pingfangsc mb-[2px] TwoThousandEighty"
                        variant="body9"
                      >
                        次
                      </Text>
                    </Row>
                    <Row className="absolute bottom-[0] items-start justify-evenly w-[100%]">
                      <Text className="columnapollovfiftyfive" variant="body9">
                        压线
                      </Text>
                      <Img
                        src="images/img_airplane_16X16.svg"
                        className="eye4"
                        alt="airplane"
                      />
                    </Row>
                  </Stack>
                </Row>
              </List>
            </Row>
            <Column className="justify-start xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[85px] w-[100%]">
              <Text
                className="font-semibold text-black_900_e5 w-[auto]"
                variant="body5"
              >
                任务状态
              </Text>
              <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            </Column>
          </Column>
          <List
            className="border border-deep_purple_A200 border-solid gap-[0] min-h-[auto] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[76%]"
            orientation="vertical"
          >
            <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[17%]">
                  <Text className="OneThousandSixtySeven" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text className="test_202208292003" variant="body8">
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[24%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="Three33" variant="body8">
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      前方还有{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      3{" "}
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      个任务，预计还需等待{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      8{" "}
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      分钟
                    </span>
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
              </Column>
              <Column className="absolute border border-solid border-teal_A100 justify-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius8 w-[100%]">
                <Row className="items-center 3xl:mr-[1041px] lg:mr-[616px] xl:mr-[771px] 2xl:mr-[868px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[11%]">
                  <Img
                    src="images/img_arrowdown.svg"
                    className="arrowdown"
                    alt="arrowdown"
                  />
                  <Text className="rowarrowdown" variant="body4">
                    任务排队中
                  </Text>
                </Row>
                <Button
                  className="font-normal mb-[2px] 3xl:ml-[1085px] lg:ml-[643px] xl:ml-[804px] 2xl:ml-[904px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA400"
                >
                  取消任务
                </Button>
              </Column>
            </Stack>
            <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[17%]">
                  <Text className="OneThousandSixtySeven" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text className="test_202208292003" variant="body8">
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[22%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="Three33" variant="body8">
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      1/5
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      ，已执行{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      12:23
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      ，预计还需{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      34:09
                    </span>
                  </Text>
                </Row>
                <div
                  className="2xl:h-[3px] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] overflow-hidden relative w-[100%]"
                  name="GroupThirtyOne"
                >
                  <div className="w-full h-full absolute bg-undefined"></div>
                  <div
                    className="h-full absolute"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </Column>
              <Row className="absolute border border-blue_200 border-solid items-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius8 w-[100%]">
                <Row className="items-center lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[11%]">
                  <Button
                    className="flex items-center justify-center arrowdown"
                    shape="icbCircleBorder10"
                    size="smIcn"
                    variant="icbFillBlueA401"
                  >
                    <Img
                      src="images/img_play_24X24.svg"
                      className="flex items-center justify-center"
                      alt="play"
                    />
                  </Button>
                  <Text className="rowarrowdown" variant="body4">
                    任务运行中
                  </Text>
                </Row>
                <Button
                  className="font-normal mb-[2px] lg:ml-[508px] xl:ml-[635px] 2xl:ml-[715px] 3xl:ml-[858px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA400"
                >
                  查看直播
                </Button>
                <Button
                  className="font-normal mb-[2px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillRed600"
                >
                  终止任务
                </Button>
              </Row>
            </Stack>
            <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[17%]">
                  <Text className="OneThousandSixtySeven" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text className="test_202208292003" variant="body8">
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[14%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="Three33" variant="body8">
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      1/5
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      ，已执行{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      12:23
                    </span>
                  </Text>
                </Row>
                <Line className="bg-teal_400 h-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
              </Column>
              <Column className="absolute border border-green_A101 border-solid justify-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius8 w-[100%]">
                <Row className="items-center 3xl:mr-[1041px] lg:mr-[616px] xl:mr-[771px] 2xl:mr-[868px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[11%]">
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="arrowdown"
                    alt="checkmark"
                  />
                  <Text className="rowarrowdown" variant="body4">
                    任务已完成
                  </Text>
                </Row>
                <Button
                  className="font-normal mb-[2px] 3xl:ml-[1085px] lg:ml-[643px] xl:ml-[804px] 2xl:ml-[904px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA400"
                >
                  再次运行
                </Button>
              </Column>
            </Stack>
            <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[17%]">
                  <Text className="OneThousandSixtySeven" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text className="test_202208292003" variant="body8">
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[14%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="Three33" variant="body8">
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      1/5
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      ，已执行{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                      12:23
                    </span>
                  </Text>
                </Row>
                <div
                  className="2xl:h-[3px] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] overflow-hidden relative w-[100%]"
                  name="GroupThirtyTwo"
                >
                  <div className="w-full h-full absolute bg-undefined"></div>
                  <div
                    className="h-full absolute"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </Column>
              <Column className="absolute border border-pink_100 border-solid justify-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius8 w-[100%]">
                <Row className="items-center 3xl:mr-[1041px] lg:mr-[616px] xl:mr-[771px] 2xl:mr-[868px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[11%]">
                  <Img
                    src="images/img_save.svg"
                    className="arrowdown"
                    alt="save"
                  />
                  <Text className="rowarrowdown" variant="body4">
                    任务已终止
                  </Text>
                </Row>
                <Button
                  className="font-normal mb-[2px] 3xl:ml-[1085px] lg:ml-[643px] xl:ml-[804px] 2xl:ml-[904px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA400"
                >
                  再次运行
                </Button>
              </Column>
            </Stack>
            <Stack className="2xl:h-[103px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[17%]">
                  <Text className="OneThousandSixtySeven" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text className="test_202208292003" variant="body8">
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[6%]">
                  <Text className="FiveHundredFiftyFour" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="Three33" variant="body8">
                    --
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]" />
              </Column>
              <Column className="absolute border border-gray_201 border-solid justify-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius8 w-[100%]">
                <Row className="items-center 3xl:mr-[1041px] lg:mr-[616px] xl:mr-[771px] 2xl:mr-[868px] lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[11%]">
                  <Img
                    src="images/img_close_24X24.svg"
                    className="arrowdown"
                    alt="close"
                  />
                  <Text className="rowarrowdown" variant="body4">
                    任务已取消
                  </Text>
                </Row>
                <Button
                  className="font-normal mb-[2px] 3xl:ml-[1085px] lg:ml-[643px] xl:ml-[804px] 2xl:ml-[904px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA400"
                >
                  再次运行
                </Button>
              </Column>
            </Stack>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default Page19;
