import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Button,
  Line,
  Stack,
  SelectBox,
} from "components";
import Header7 from "components/Header/Header7";
import Sidebar5 from "components/Sidebar/Sidebar5";
import RowTwentySix from "components/Row/RowTwentySix";

const Page74 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-alibabapuhuiti1 items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Header7 className="w-[100%]" />
          <Row className="items-start justify-evenly w-[99%]">
            <Sidebar5 className="w-[20%]" />
            <Column className="font-pingfangsc items-center justify-start w-[80%]">
              <Column className="items-center justify-start 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[7px] xl:pl-[9px] 2xl:pt-[11px] 3xl:pt-[13px] lg:pt-[7px] xl:pt-[9px] w-[99%]">
                <Column className="justify-start w-[98%]">
                  <Row className="items-center w-[45%]">
                    <Row className="items-start justify-evenly w-[26%]">
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        资源库
                      </Text>
                      <Img
                        src="images/img_checkmark_3.svg"
                        className="checkmark2"
                        alt="checkmark"
                      />
                      <Text className="FiveHundredFiftyThree" variant="body9">
                        被测车辆管理
                      </Text>
                    </Row>
                    <Button
                      className="2xl:ml-[200px] 3xl:ml-[240px] flex items-center justify-center lg:ml-[142px] text-center w-[33%] xl:ml-[177px]"
                      leftIcon={
                        <Img
                          src="images/img_checkmark_1.svg"
                          className="text-center lg:w-[11px] lg:h-[12px] lg:mr-[5px] xl:w-[14px] xl:h-[15px] xl:mr-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[9px]"
                          alt="checkmark"
                        />
                      }
                      shape="RoundedBorder4"
                      size="lg"
                      variant="OutlineBlack90026"
                    >
                      <div className="bg-transparent font-medium xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        创建成功
                      </div>
                    </Button>
                  </Row>
                  <Line className="bg-gray_201 h-[1px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]" />
                </Column>
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
                <div className="font-pingfangsc lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                  <Row className="bg-white_A700 items-center lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] w-[100%]">
                    <Row className="items-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[28%]">
                      <Text
                        className="rowfivethousandfourhundredseventyseven"
                        variant="body9"
                      >
                        被测车辆名称
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text
                        className="rowfivethousandfourhundredseventyeight"
                        variant="body9"
                      >
                        操作
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[23%]">
                      <Text
                        className="lg:mr-[157px] xl:mr-[197px] 2xl:mr-[222px] 3xl:mr-[266px] rowsixhundredfiftythree"
                        variant="body9"
                      >
                        类型
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[19%]">
                      <Text
                        className="rowtwothousandthreehundredtwentysix"
                        variant="body9"
                      >
                        车辆动力学
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[18%]">
                      <Text
                        className="xl:mr-[116px] 2xl:mr-[131px] 3xl:mr-[157px] lg:mr-[93px] rowsixhundredfiftythree"
                        variant="body9"
                      >
                        车辆传感器
                      </Text>
                    </Row>
                  </Row>
                  <Column className="items-center justify-start lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] w-[98%]">
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[28%]">
                        <Column className="items-center rounded-radius4 w-[42%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106.png"
                                className="Rectangle354"
                                alt="Rectangle106"
                              />
                            </Stack>
                            <Column className="justify-start mb-[2px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[57%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                Apollo V5.0
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
                      </Row>
                      <Row className="items-center justify-evenly xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[100%]">
                        <Column className="items-center xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                          <Row className="items-center w-[100%]">
                            <Column className="items-center rounded-radius4 w-[11%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                                  <Img
                                    src="images/img_rectangle106.png"
                                    className="Rectangle354"
                                    alt="Rectangle106 One"
                                  />
                                </Stack>
                                <Column className="justify-start mb-[2px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[57%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    Apollo V5.0
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
                            <Column className="items-center lg:ml-[123px] xl:ml-[153px] 2xl:ml-[173px] 3xl:ml-[207px] lg:mr-[145px] xl:mr-[181px] 2xl:mr-[204px] 3xl:mr-[244px] w-[4%]">
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
                              className="lg:ml-[136px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:mr-[124px] xl:mr-[155px] 2xl:mr-[175px] 3xl:mr-[210px] rowbrand"
                              variant="body9"
                            >
                              --
                            </Text>
                            <Text
                              className="lg:ml-[124px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] lg:mr-[120px] xl:mr-[151px] 2xl:mr-[170px] 3xl:mr-[204px] rowbrand"
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
                        </Column>
                      </Row>
                      <Row className="items-center justify-center p-[2px] w-[23%]">
                        <Column className="items-center lg:ml-[123px] xl:ml-[153px] 2xl:ml-[173px] 3xl:ml-[207px] lg:mr-[145px] xl:mr-[181px] 2xl:mr-[204px] 3xl:mr-[244px] mt-[3px] w-[19%]">
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
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[19%]">
                        <Text
                          className="lg:ml-[136px] xl:ml-[170px] 2xl:ml-[192px] 3xl:ml-[230px] lg:mr-[124px] xl:mr-[155px] 2xl:mr-[175px] 3xl:mr-[210px] test_75B1FF_One"
                          variant="body9"
                        >
                          --
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[18%]">
                        <Text
                          className="lg:ml-[124px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] lg:mr-[120px] xl:mr-[151px] 2xl:mr-[170px] 3xl:mr-[204px] test_75B1FF_One"
                          variant="body9"
                        >
                          --
                        </Text>
                      </Row>
                    </Row>
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[28%]">
                        <Column className="items-center rounded-radius4 w-[41%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_40X40.png"
                                className="Rectangle354"
                                alt="Rectangle106 Two"
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
                      </Row>
                      <Row className="items-center justify-evenly xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[100%]">
                        <Column className="items-center xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Column className="items-center rounded-radius4 w-[11%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                                  <Img
                                    src="images/img_rectangle106_40X40.png"
                                    className="Rectangle354"
                                    alt="Rectangle106 Three"
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
                        </Column>
                      </Row>
                      <Row className="items-center justify-center p-[2px] w-[23%]">
                        <Column className="mt-[3px] w-[24%]">
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
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[19%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[18%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                    </Row>
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[28%]">
                        <Column className="items-center rounded-radius4 w-[37%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_1.png"
                                className="Rectangle354"
                                alt="Rectangle106 Four"
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
                      </Row>
                      <Row className="items-center justify-evenly xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[100%]">
                        <Column className="items-center w-[100%]">
                          <Column className="items-center justify-start xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center rounded-radius4 w-[10%]">
                                <Row className="items-end justify-between w-[100%]">
                                  <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                                    <Img
                                      src="images/img_rectangle106_1.png"
                                      className="Rectangle354"
                                      alt="Rectangle106 Five"
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
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-center p-[2px] w-[23%]">
                        <Column className="mt-[3px] w-[29%]">
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
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[19%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[18%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                    </Row>
                    <RowTwentySix className="bg-white_A700 items-center w-[100%]" />
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[28%]">
                        <Column className="items-center rounded-radius4 w-[37%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106.png"
                                className="Rectangle354"
                                alt="Rectangle106 Eight"
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
                      </Row>
                      <Row className="items-center justify-evenly xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[100%]">
                        <Column className="items-center w-[100%]">
                          <Column className="items-center justify-start xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center rounded-radius4 w-[10%]">
                                <Row className="items-end justify-between w-[100%]">
                                  <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                                    <Img
                                      src="images/img_rectangle106.png"
                                      className="Rectangle354"
                                      alt="Rectangle106 Nine"
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
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-center p-[2px] w-[23%]">
                        <Column className="items-center mt-[3px] w-[19%]">
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
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[19%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[18%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                    </Row>
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[28%]">
                        <Column className="items-center rounded-radius4 w-[37%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_40X40.png"
                                className="Rectangle354"
                                alt="Rectangle106 Ten"
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
                      </Row>
                      <Row className="items-center justify-evenly xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[100%]">
                        <Column className="items-center w-[100%]">
                          <Column className="items-center justify-start xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center rounded-radius4 w-[10%]">
                                <Row className="items-center justify-between w-[100%]">
                                  <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                                    <Img
                                      src="images/img_rectangle106_40X40.png"
                                      className="Rectangle354"
                                      alt="Rectangle106 Eleven"
                                    />
                                  </Stack>
                                  <Column className="w-[52%]">
                                    <Text
                                      className="font-medium text-bluegray_800 w-[auto]"
                                      variant="body9"
                                    >
                                      现代 V2.2
                                    </Text>
                                    <Text
                                      className="language15"
                                      variant="body9"
                                    >
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
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-center p-[2px] w-[23%]">
                        <Column className="mt-[3px] w-[24%]">
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
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[19%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[18%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                    </Row>
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[28%]">
                        <Column className="items-center rounded-radius4 w-[42%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_1.png"
                                className="Rectangle354"
                                alt="Rectangle106 Twelve"
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
                      </Row>
                      <Row className="items-center justify-evenly xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[100%]">
                        <Column className="items-center w-[100%]">
                          <Column className="items-center justify-start xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="items-center rounded-radius4 w-[11%]">
                                <Row className="items-end justify-between w-[100%]">
                                  <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                                    <Img
                                      src="images/img_rectangle106_1.png"
                                      className="Rectangle354"
                                      alt="Rectangle106 Thirteen"
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
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-center p-[2px] w-[23%]">
                        <Column className="mt-[3px] w-[29%]">
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
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[19%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[18%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                    </Row>
                    <RowTwentySix className="bg-white_A700 items-center w-[100%]" />
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[28%]">
                        <Column className="items-center rounded-radius4 w-[37%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_2.png"
                                className="Rectangle354"
                                alt="Rectangle106 Sixteen"
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
                      </Row>
                      <Row className="items-center justify-between xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] w-[100%]">
                        <Column className="items-center rounded-radius4 w-[10%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Stack className="bg-gray_101 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle106_2.png"
                                className="Rectangle354"
                                alt="Rectangle106 Seventeen"
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
                        <Row className="items-center justify-between w-[11%]">
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_eye.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="eye Eight"
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
                              alt="edit Eight"
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
                              alt="trash Eight"
                            />
                          </Button>
                        </Row>
                      </Row>
                      <Row className="items-center justify-center xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] w-[23%]">
                        <Column className="mt-[3px] w-[27%]">
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
                      </Row>
                      <Row className="items-center justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[19%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[18%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                </div>
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
                      name="Group3055"
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
                      className="arrowleft"
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
                      className="arrowright"
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

export default Page74;
