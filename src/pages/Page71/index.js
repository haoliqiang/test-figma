import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Button,
  Stack,
  List,
  Slider,
  SelectBox,
} from "components";
import Header7 from "components/Header/Header7";
import Sidebar5 from "components/Sidebar/Sidebar5";

const Page71 = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-alibabapuhuiti1 items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Header7 className="w-[100%]" />
          <Row className="items-start justify-evenly w-[99%]">
            <Sidebar5 className="w-[20%]" />
            <Column className="font-pingfangsc items-center justify-start w-[80%]">
              <Column className="justify-end lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[99%]">
                <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[12%]">
                  <Text className="FiveHundredFiftyTwo" variant="body9">
                    资源库
                  </Text>
                  <Img
                    src="images/img_checkmark_3.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                  <Text className="SevenHundredSeventyNine" variant="body9">
                    被测车辆管理
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
              </Column>
              <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[97%]">
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[10%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA400"
                >
                  新建被测车辆
                </Button>
                <Column className="font-alibabapuhuiti1 items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] rounded-radius2 w-[42%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-normal mb-[1px] text-blue_A401 w-[auto]"
                        variant="body6"
                      >
                        全部
                      </Text>
                      <Text className="tips_Three" variant="body6">
                        被测算法
                      </Text>
                      <Text className="tips_Three" variant="body6">
                        被测域控制器
                      </Text>
                      <Text className="FiveHundredFiftyThree" variant="body6">
                        被测工控机
                      </Text>
                    </Row>
                    <div className="bg-blue_A400 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] rounded-radius15 w-[7%]"></div>
                  </Column>
                </Column>
                <Stack className="font-pingfangsc lg:h-[160px] xl:h-[200px] 2xl:h-[225px] 3xl:h-[269px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Column className="absolute bottom-[0] inset-x-[0] items-center justify-start mx-[auto] w-[99%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="bg-gray_201 items-center justify-start my-[1px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-center w-[98%]">
                            <Column className="items-center rounded-radius4 w-[25%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                                  <Img
                                    src="images/img_rectangle106.png"
                                    className="Rectangle354"
                                    alt="Rectangle106"
                                  />
                                </Stack>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[81%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    被测车辆名称被测车辆名称被测车辆名...
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    轿车
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="items-center lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] w-[4%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                被测算法
                              </Text>
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
                                吉利V1.0
                              </Text>
                            </Column>
                            <Text
                              className="lg:ml-[146px] xl:ml-[183px] 2xl:ml-[206px] 3xl:ml-[247px] rowbrand"
                              variant="body9"
                            >
                              --
                            </Text>
                            <Text
                              className="lg:ml-[134px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[226px] rowbrand"
                              variant="body9"
                            >
                              --
                            </Text>
                            <Row className="items-center justify-between lg:ml-[130px] xl:ml-[163px] 2xl:ml-[184px] 3xl:ml-[220px] w-[12%]">
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray54"
                              >
                                <Img
                                  src="images/img_eye.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="eye"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray54"
                              >
                                <Img
                                  src="images/img_edit_4.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="edit"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray54"
                              >
                                <Img
                                  src="images/img_trash_8.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="trash"
                                />
                              </Button>
                            </Row>
                          </Row>
                          <Line className="bg-gray_300 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center justify-start mb-[1px] mt-[0.5px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-center justify-between w-[98%]">
                            <Column className="items-center rounded-radius4 w-[11%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                                  <Img
                                    src="images/img_rectangle106_40X40.png"
                                    className="Rectangle354"
                                    alt="Rectangle106 One"
                                  />
                                </Stack>
                                <Column className="justify-start lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[57%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    Apollo V7.0
                                  </Text>
                                  <Text className="language15" variant="body9">
                                    SUV
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="w-[6%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                被测工控机
                              </Text>
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
                                吉利V1.0
                              </Text>
                            </Column>
                            <Text className="rowbrand" variant="body9">
                              --
                            </Text>
                            <Text className="rowbrand" variant="body9">
                              --
                            </Text>
                            <Row className="items-center justify-between w-[12%]">
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray54"
                              >
                                <Img
                                  src="images/img_eye.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="eye One"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray54"
                              >
                                <Img
                                  src="images/img_edit_4.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="edit One"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray54"
                              >
                                <Img
                                  src="images/img_trash_8.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="trash One"
                                />
                              </Button>
                            </Row>
                          </Row>
                          <Line className="bg-gray_300 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                        </Column>
                      </Column>
                      <footer className="bg-white_A700 my-[1px] w-[100%]">
                        <Column className="items-center justify-start w-[100%]">
                          <Row className="items-center justify-between w-[98%]">
                            <Column className="items-center rounded-radius4 w-[10%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                                  <Img
                                    src="images/img_rectangle106_1.png"
                                    className="Rectangle354"
                                    alt="Rectangle106 Two"
                                  />
                                </Stack>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    现代 V1.2
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    货车
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="w-[7%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                被测域控制器
                              </Text>
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
                                吉利V1.0
                              </Text>
                            </Column>
                            <Text className="rowbrand" variant="body9">
                              --
                            </Text>
                            <Text className="rowbrand" variant="body9">
                              --
                            </Text>
                            <Row className="items-center justify-between w-[12%]">
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray54"
                              >
                                <Img
                                  src="images/img_eye.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="eye Two"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray54"
                              >
                                <Img
                                  src="images/img_edit_4.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="edit Two"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray54"
                              >
                                <Img
                                  src="images/img_trash_8.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="trash Two"
                                />
                              </Button>
                            </Row>
                          </Row>
                          <Line className="bg-gray_300 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                        </Column>
                      </footer>
                    </List>
                  </Column>
                  <Column className="absolute bg-white_A700 items-center justify-start 2xl:pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] 2xl:pt-[10px] 3xl:pt-[12px] lg:pt-[7px] xl:pt-[8px] top-[0] w-[100%]">
                    <Column className="justify-start w-[99%]">
                      <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[89%]">
                        <Text className="FiveHundredFiftyThree" variant="body9">
                          被测车辆名称
                        </Text>
                        <Text
                          className="lg:ml-[155px] xl:ml-[194px] 2xl:ml-[219px] 3xl:ml-[262px] FiveHundredFiftyThree"
                          variant="body9"
                        >
                          类型
                        </Text>
                        <Column className="items-center lg:ml-[163px] xl:ml-[204px] 2xl:ml-[230px] 3xl:ml-[276px] w-[6%]">
                          <Text
                            className="columnfivehundredsixty"
                            variant="body9"
                          >
                            车辆动力学
                          </Text>
                        </Column>
                        <Column className="items-center lg:ml-[102px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[172px] mt-[1px] w-[6%]">
                          <Text
                            className="columnfivehundredsixty"
                            variant="body9"
                          >
                            车辆传感器
                          </Text>
                        </Column>
                        <Column className="items-center xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[166px] lg:ml-[98px] mt-[1px] w-[2%]">
                          <Text
                            className="columnfivehundredsixty"
                            variant="body9"
                          >
                            操作
                          </Text>
                        </Column>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                    </Column>
                  </Column>
                  <Column className="absolute bg-white_A700 bottom-[23%] items-center justify-end left-[6%] 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] rounded-radius4 shadow-bs6 w-[20%]">
                    <Text
                      className="font-normal leading-[normal] mt-[3px] not-italic text-bluegray_800 w-[99%]"
                      variant="body9"
                    >
                      被测车辆名称被测车辆名称被测车辆名被测车辆名称被测车辆名称被测车辆名被测车辆名称被测车辆名称被测车辆名被测车辆名称被测车辆名称被测车辆名测车辆名
                    </Text>
                  </Column>
                </Stack>
                <List
                  className="font-pingfangsc gap-[0] min-h-[auto] w-[98%]"
                  orientation="vertical"
                >
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[98%]">
                        <Column className="items-center rounded-radius4 w-[10%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_2.png"
                                className="Rectangle354"
                                alt="Rectangle106 Three"
                              />
                            </Stack>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[52%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                长安 V5.0
                              </Text>
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
                                客车
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="w-[6%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            被测工控机
                          </Text>
                          <Text
                            className="TwoThousandFiveHundredThree"
                            variant="body9"
                          >
                            吉利V1.0
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Row className="items-center justify-between w-[12%]">
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_eye.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="eye Three"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_edit_4.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="edit Three"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_trash_8.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="trash Three"
                            />
                          </Button>
                        </Row>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                    </Column>
                  </footer>
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[98%]">
                        <Column className="items-center rounded-radius4 w-[10%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106.png"
                                className="Rectangle354"
                                alt="Rectangle106 Four"
                              />
                            </Stack>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                蔚来 V1.3
                              </Text>
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
                                轿车
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="items-center w-[4%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            被测算法
                          </Text>
                          <Text
                            className="TwoThousandFiveHundredThree"
                            variant="body9"
                          >
                            吉利V1.0
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Row className="items-center justify-between w-[12%]">
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_eye.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="eye Four"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_edit_4.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="edit Four"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_trash_8.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="trash Four"
                            />
                          </Button>
                        </Row>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                    </Column>
                  </footer>
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[98%]">
                        <Column className="items-center rounded-radius4 w-[10%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_40X40.png"
                                className="Rectangle354"
                                alt="Rectangle106 Five"
                              />
                            </Stack>
                            <Column className="w-[52%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                现代 V2.2
                              </Text>
                              <Text className="language15" variant="body9">
                                SUV
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="w-[6%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            被测工控机
                          </Text>
                          <Text
                            className="TwoThousandFiveHundredThree"
                            variant="body9"
                          >
                            吉利V1.0
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Row className="items-center justify-between w-[12%]">
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_eye.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="eye Five"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_edit_4.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="edit Five"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_trash_8.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="trash Five"
                            />
                          </Button>
                        </Row>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                    </Column>
                  </footer>
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[98%]">
                        <Column className="items-center rounded-radius4 w-[11%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_1.png"
                                className="Rectangle354"
                                alt="Rectangle106 Six"
                              />
                            </Stack>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[57%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                马自达 V0.8
                              </Text>
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
                                货车
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="w-[7%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            被测域控制器
                          </Text>
                          <Text
                            className="TwoThousandFiveHundredThree"
                            variant="body9"
                          >
                            吉利V1.0
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Row className="items-center justify-between w-[12%]">
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_eye.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="eye Six"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_edit_4.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="edit Six"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_trash_8.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="trash Six"
                            />
                          </Button>
                        </Row>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                    </Column>
                  </footer>
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Column className="items-center justify-start w-[100%]">
                      <Row className="items-center justify-between w-[98%]">
                        <Column className="items-center rounded-radius4 w-[10%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_2.png"
                                className="Rectangle354"
                                alt="Rectangle106 Seven"
                              />
                            </Stack>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[52%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                大众 V2.9
                              </Text>
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
                                客车
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="w-[6%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            被测工控机
                          </Text>
                          <Text
                            className="TwoThousandFiveHundredThree"
                            variant="body9"
                          >
                            吉利V1.0
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Text className="rowbrand" variant="body9">
                          --
                        </Text>
                        <Row className="items-center justify-between w-[12%]">
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_eye.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="eye Seven"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_edit_4.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="edit Seven"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_trash_8.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="trash Seven"
                            />
                          </Button>
                        </Row>
                      </Row>
                      <Line className="bg-gray_300 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                    </Column>
                  </footer>
                  <Slider
                    slidesToShow={6}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    activeSlideCSS="scale-[0.09] my-[0]"
                    magnifiedIndex={4}
                    centerMode
                    ref={sliderRef}
                    className="bg-white_A700 my-[0] w-[100%]"
                    items={[...Array(18)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                      </React.Fragment>
                    ))}
                    Indicator={({ isActive }) => {
                      if (isActive) {
                        return <div className="" />;
                      }
                      return <div className="" role="button" tabIndex={0} />;
                    }}
                  />
                </List>
                <Row className="font-pingfangsc items-center justify-end ml-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[44%]">
                  <Row className="items-center justify-evenly w-[32%]">
                    <Text className="OneHundredThirtyFive" variant="body9">
                      共
                    </Text>
                    <Text className="rowbrand" variant="body9">
                      1120
                    </Text>
                    <Text className="OneHundredThirtyFive" variant="body9">
                      条
                    </Text>
                    <SelectBox
                      className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-bluegray_800 w-[53%]"
                      placeholderClassName="text-bluegray_800"
                      name="Group3028"
                      placeholder="10条/页"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_1.svg"
                          className="lg:w-[11px] lg:h-[12px] lg:mr-[4px] xl:w-[14px] xl:h-[15px] xl:mr-[5px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[6px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[7px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineGray300"
                    ></SelectBox>
                  </Row>
                  <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[43%]">
                    <Img
                      src="images/img_arrowleft.svg"
                      className="arrowleft2"
                      onClick={() => sliderRef.current?.slidePrev()}
                      alt="arrowleft"
                    />
                    <Stack className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[3px] w-[79%]">
                      <div className="bg-gray_54 left-[0] rounded-radius3 lightbulb"></div>
                      <Row className="absolute bottom-[5%] items-start justify-between right-[0] w-[96%]">
                        <Text className="One" variant="body9">
                          1
                        </Text>
                        <Text className="language_TwentyTwo" variant="body9">
                          2 3 4 5
                        </Text>
                        <Text className="OneHundredThirtyEight" variant="body9">
                          …
                        </Text>
                        <Text className="language_TwentyTwo" variant="body9">
                          100
                        </Text>
                      </Row>
                    </Stack>
                    <Img
                      src="images/img_arrowright.svg"
                      className="arrowright1"
                      onClick={() => sliderRef.current?.slideNext()}
                      alt="arrowright"
                    />
                  </Row>
                  <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] rounded-radius4 w-[19%]">
                    <Text className="rowbrand" variant="body9">
                      前往
                    </Text>
                    <Button
                      className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[50%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineGray300"
                    >
                      1000
                    </Button>
                    <Text className="rowbrand" variant="body9">
                      页
                    </Text>
                  </Row>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page71;
