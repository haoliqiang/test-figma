import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Line,
  Button,
  CheckBox,
  Stack,
} from "components";
import Sidebar from "components/Sidebar/Sidebar";

const Page27 = () => {
  return (
    <>
      <Column className="bg-gray_105 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Row className="bg-blue_A400 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[98%]">
              <Row className="items-center w-[14%]">
                <Img
                  src="images/img_airplane.svg"
                  className="close5"
                  alt="airplane"
                />
                <Text className="rowairplane" variant="body7">
                  自动驾驶安全验证平台
                </Text>
              </Row>
              <Row className="items-center justify-center 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] w-[35%]">
                <Text className="TwoThousandNinetySix" variant="body8">
                  首页
                </Text>
                <Text
                  className="TwoThousandSixHundredSeventeen"
                  variant="body8"
                >
                  系统测试
                </Text>
                <Text className="TwoThousandSixHundredEighteen" variant="body8">
                  可信赖评估
                </Text>
                <Text className="TwoThousandSixHundredEighteen" variant="body8">
                  任务
                </Text>
                <Text className="TwoThousandSixHundredTwenty" variant="body8">
                  资源库
                </Text>
              </Row>
              <Row className="font-alibabapuhuiti items-start justify-between lg:ml-[231px] xl:ml-[289px] 2xl:ml-[325px] 3xl:ml-[390px] w-[21%]">
                <SelectBox
                  className="font-normal mt-[2px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[33%]"
                  placeholderClassName="text-white_A700"
                  name="FrameTen"
                  placeholder="Apollo-V5.5"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_16X16.svg"
                      className="mr-[0] lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
                <Row className="font-pingfangsc items-start justify-center w-[45%]">
                  <Img
                    src="images/img_ellipse5.png"
                    className="rounded-radius50 user"
                    alt="EllipseFive"
                  />
                  <SelectBox
                    className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[78%]"
                    placeholderClassName="text-white_A700"
                    name="FrameNine"
                    placeholder="欢迎，王志杰"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_16X16.svg"
                        className="mr-[0] lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                  ></SelectBox>
                </Row>
                <Img src="images/img_help.svg" className="help2" alt="help" />
              </Row>
            </Row>
          </Row>
          <Row className="items-center justify-evenly w-[100%]">
            <Sidebar className="w-[19%]" />
            <Column className="bg-white_A700 items-center lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] w-[81%]">
              <Column className="items-center justify-start lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] w-[100%]">
                <Column className="justify-end lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[99%]">
                  <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[16%]">
                    <Text className="FiveHundredFiftyTwo" variant="body9">
                      我的测试集
                    </Text>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark"
                    />
                    <Text className="SevenHundredSeventyNine" variant="body9">
                      20220804测试集
                    </Text>
                  </Row>
                  <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
                </Column>
                <Column className="justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[97%]">
                  <SelectBox
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[11%]"
                    placeholderClassName="text-white_A700"
                    name="icon"
                    placeholder="新建测试案例"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_16X16.svg"
                        className="lg:w-[5px] lg:h-[4px] lg:mr-[8px] xl:w-[7px] xl:h-[5px] xl:mr-[10px] 2xl:w-[8px] 2xl:h-[6px] 2xl:mr-[12px] 3xl:w-[9px] 3xl:h-[7px] 3xl:mr-[14px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlueA400"
                  ></SelectBox>
                  <div className="lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                    <Row className="bg-white_A700 items-center lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] w-[100%]">
                      <Row className="items-center justify-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[15%]">
                        <Text className="rowid4" variant="body9">
                          ID
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                        <Text
                          className="rowtwothousandfourhundredninetyfive"
                          variant="body9"
                        >
                          案例
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                        <Text
                          className="rowtwothousandfourhundredninetysix"
                          variant="body9"
                        >
                          操作
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[47%]">
                        <Text
                          className="rowtwothousandfourhundredninetyseven"
                          variant="body9"
                        >
                          最近一次测试时间
                        </Text>
                        <Img
                          src="images/img_offer.svg"
                          className="close"
                          alt="offer"
                        />
                      </Row>
                      <Row className="items-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[16%]">
                        <Text
                          className="rowsixhundredfiftythree"
                          variant="body9"
                        >
                          最近一次测试结果
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[28%]">
                        <Text
                          className="rowtwothousandfourhundredninetynine"
                          variant="body9"
                        >
                          累计测试
                        </Text>
                        <Img
                          src="images/img_offer.svg"
                          className="close_One"
                          alt="offer One"
                        />
                      </Row>
                    </Row>
                    <Column className="items-center justify-start lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] w-[98%]">
                      <Row className="bg-white_A700 items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[15%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[43%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[19px] xl:pr-[24px] 2xl:pr-[28px] 3xl:pr-[33px] py-[4px] w-[64%]">
                            <Column className="items-center justify-start rounded-radius4 w-[95%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group777.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例具体场景故障案例...
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                <Text className="rowbrand" variant="body9">
                                  UE999999
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[19px] xl:pr-[24px] 2xl:pr-[28px] 3xl:pr-[33px] py-[4px] w-[27%]">
                                <Column className="items-center justify-start rounded-radius4 w-[95%]">
                                  <Row className="items-end justify-between w-[100%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group777.png')",
                                      }}
                                    >
                                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                                      <Text
                                        className="font-semibold text-bluegray_800 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转-增强
                                      </Text>
                                      <Text
                                        className="TwoThousandFiveHundredThree"
                                        variant="body9"
                                      >
                                        具体场景故障案例具体场景故障案例...
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                                <Column className="justify-start mt-[1px] w-[61%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    48分钟
                                  </Text>
                                  <Text className="language15" variant="body9">
                                    2022-08-12 20:23:12
                                  </Text>
                                </Column>
                              </Column>
                              <Row className="items-center justify-center w-[28%]">
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                  <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                    <Row className="items-start justify-evenly w-[100%]">
                                      <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                      <Text
                                        className="rowbrand"
                                        variant="body9"
                                      >
                                        不通过
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                  <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                    <Text className="rowbrand" variant="body9">
                                      16次
                                    </Text>
                                    <Img
                                      src="images/img_polygon15_7X4.svg"
                                      className="PolygonFifteen"
                                      alt="PolygonFifteen"
                                    />
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                                <Button
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                  shape="icbRoundedBorder3"
                                  size="mdIcn"
                                  variant="icbFillGray54"
                                >
                                  <Img
                                    src="images/img_frame_28X28.svg"
                                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                    alt="Frame"
                                  />
                                </Button>
                              </Row>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[47%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[19px] xl:pr-[24px] 2xl:pr-[28px] 3xl:pr-[33px] py-[4px] w-[57%]">
                            <Column className="items-center justify-start rounded-radius4 w-[95%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group777.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例具体场景故障案例...
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[16%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                            <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start justify-evenly w-[100%]">
                                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text className="rowbrand" variant="body9">
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[28%]">
                          <Row className="items-center justify-center w-[100%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="rowbrand" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                <Text className="rowbrand" variant="body9">
                                  16次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="PolygonFifteen"
                                  alt="PolygonFifteen One"
                                />
                              </Row>
                            </Column>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="bg-white_A700 items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[15%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[43%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[102px] lg:pr-[60px] xl:pr-[75px] 2xl:pr-[85px] py-[4px] w-[64%]">
                            <Column className="items-center justify-start rounded-radius4 w-[94%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group191.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例具体场景
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                <Text className="rowbrand" variant="body9">
                                  UE999999
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[102px] lg:pr-[60px] xl:pr-[75px] 2xl:pr-[85px] py-[4px] w-[27%]">
                                <Column className="items-center justify-start rounded-radius4 w-[94%]">
                                  <Row className="items-end justify-between w-[100%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group191.png')",
                                      }}
                                    >
                                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                      <Text
                                        className="font-semibold text-bluegray_800 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转-增强
                                      </Text>
                                      <Text
                                        className="TwoThousandFiveHundredThree"
                                        variant="body9"
                                      >
                                        具体场景故障案例具体场景
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                                <Column className="justify-start mt-[1px] w-[61%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    48分钟
                                  </Text>
                                  <Text className="language15" variant="body9">
                                    2022-08-12 20:23:12
                                  </Text>
                                </Column>
                              </Column>
                              <Row className="items-center justify-center w-[28%]">
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                  <Column className="bg-gray_54 justify-end lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] pr-[2px] py-[1px] rounded-radius2 w-[76%]">
                                    <Row className="items-start mr-[auto] w-[69%]">
                                      <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                                      <Text
                                        className="rowellipsenine_two"
                                        variant="body9"
                                      >
                                        通过
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                  <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                    <Text className="rowbrand" variant="body9">
                                      15次
                                    </Text>
                                    <Img
                                      src="images/img_polygon15_7X4.svg"
                                      className="PolygonFifteen"
                                      alt="PolygonFifteen Two"
                                    />
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                                <Button
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                  shape="icbRoundedBorder3"
                                  size="mdIcn"
                                  variant="icbFillGray54"
                                >
                                  <Img
                                    src="images/img_frame_28X28.svg"
                                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                    alt="Frame One"
                                  />
                                </Button>
                              </Row>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[47%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[102px] lg:pr-[60px] xl:pr-[75px] 2xl:pr-[85px] py-[4px] w-[57%]">
                            <Column className="items-center justify-start rounded-radius4 w-[94%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group191.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例具体场景
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[16%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                            <Column className="bg-gray_54 justify-end lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] pr-[2px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start mr-[auto] w-[69%]">
                                <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text
                                  className="rowellipsenine_two"
                                  variant="body9"
                                >
                                  通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[28%]">
                          <Row className="items-center justify-center w-[100%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_54 justify-end lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] pr-[2px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start mr-[auto] w-[69%]">
                                  <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text
                                    className="rowellipsenine_two"
                                    variant="body9"
                                  >
                                    通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                <Text className="rowbrand" variant="body9">
                                  15次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="PolygonFifteen"
                                  alt="PolygonFifteen Three"
                                />
                              </Row>
                            </Column>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="bg-white_A700 items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[15%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[43%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[102px] lg:pr-[60px] xl:pr-[75px] 2xl:pr-[85px] py-[4px] w-[64%]">
                            <Column className="items-center justify-start rounded-radius4 w-[94%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group192.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例具体场景
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                <Text className="rowbrand" variant="body9">
                                  UE999999
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[102px] lg:pr-[60px] xl:pr-[75px] 2xl:pr-[85px] py-[4px] w-[27%]">
                                <Column className="items-center justify-start rounded-radius4 w-[94%]">
                                  <Row className="items-end justify-between w-[100%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group192.png')",
                                      }}
                                    >
                                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                      <Text
                                        className="font-semibold text-bluegray_800 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转-增强
                                      </Text>
                                      <Text
                                        className="TwoThousandFiveHundredThree"
                                        variant="body9"
                                      >
                                        具体场景故障案例具体场景
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                                <Column className="justify-start mt-[1px] w-[61%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    48分钟
                                  </Text>
                                  <Text className="language15" variant="body9">
                                    2022-08-12 20:23:12
                                  </Text>
                                </Column>
                              </Column>
                              <Row className="items-center justify-center w-[28%]">
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                  <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                    <Row className="items-start justify-evenly w-[100%]">
                                      <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                      <Text
                                        className="rowbrand"
                                        variant="body9"
                                      >
                                        不通过
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                  <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                    <Text className="rowbrand" variant="body9">
                                      12次
                                    </Text>
                                    <Img
                                      src="images/img_polygon15_7X4.svg"
                                      className="PolygonFifteen"
                                      alt="PolygonFifteen Four"
                                    />
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                                <Button
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                  shape="icbRoundedBorder3"
                                  size="mdIcn"
                                  variant="icbFillGray54"
                                >
                                  <Img
                                    src="images/img_frame_28X28.svg"
                                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                    alt="Frame Two"
                                  />
                                </Button>
                              </Row>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[47%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[102px] lg:pr-[60px] xl:pr-[75px] 2xl:pr-[85px] py-[4px] w-[57%]">
                            <Column className="items-center justify-start rounded-radius4 w-[94%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group192.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例具体场景
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[16%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                            <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start justify-evenly w-[100%]">
                                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text className="rowbrand" variant="body9">
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[28%]">
                          <Row className="items-center justify-center w-[100%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="rowbrand" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                <Text className="rowbrand" variant="body9">
                                  12次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="PolygonFifteen"
                                  alt="PolygonFifteen Five"
                                />
                              </Row>
                            </Column>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="bg-white_A700 items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[15%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[43%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[107px] 2xl:pr-[121px] 3xl:pr-[145px] lg:pr-[86px] py-[4px] w-[64%]">
                            <Column className="items-center justify-start rounded-radius4 w-[92%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group193.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    摄像头失效故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                <Text className="rowbrand" variant="body9">
                                  UE999999
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[107px] 2xl:pr-[121px] 3xl:pr-[145px] lg:pr-[86px] py-[4px] w-[27%]">
                                <Column className="items-center justify-start rounded-radius4 w-[92%]">
                                  <Row className="items-end justify-between w-[100%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group193.png')",
                                      }}
                                    >
                                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                                      <Text
                                        className="font-semibold text-bluegray_800 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转-增强
                                      </Text>
                                      <Text
                                        className="TwoThousandFiveHundredThree"
                                        variant="body9"
                                      >
                                        摄像头失效故障模式
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                                <Column className="justify-start mt-[1px] w-[61%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    48分钟
                                  </Text>
                                  <Text className="language15" variant="body9">
                                    2022-08-12 20:23:12
                                  </Text>
                                </Column>
                              </Column>
                              <Row className="items-center justify-center w-[28%]">
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                  <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                    <Row className="items-start justify-evenly w-[100%]">
                                      <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                      <Text
                                        className="rowbrand"
                                        variant="body9"
                                      >
                                        不通过
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                  <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                    <Text className="rowbrand" variant="body9">
                                      10次
                                    </Text>
                                    <Img
                                      src="images/img_polygon15_7X4.svg"
                                      className="PolygonFifteen"
                                      alt="PolygonFifteen Six"
                                    />
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                                <Button
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                  shape="icbRoundedBorder3"
                                  size="mdIcn"
                                  variant="icbFillGray54"
                                >
                                  <Img
                                    src="images/img_frame_28X28.svg"
                                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                    alt="Frame Three"
                                  />
                                </Button>
                              </Row>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[47%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[107px] 2xl:pr-[121px] 3xl:pr-[145px] lg:pr-[86px] py-[4px] w-[57%]">
                            <Column className="items-center justify-start rounded-radius4 w-[92%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group193.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    摄像头失效故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[16%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                            <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start justify-evenly w-[100%]">
                                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text className="rowbrand" variant="body9">
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[28%]">
                          <Row className="items-center justify-center w-[100%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="rowbrand" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                <Text className="rowbrand" variant="body9">
                                  10次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="PolygonFifteen"
                                  alt="PolygonFifteen Seven"
                                />
                              </Row>
                            </Column>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="bg-white_A700 items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[15%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[43%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[119px] 2xl:pr-[134px] 3xl:pr-[160px] lg:pr-[95px] py-[4px] w-[64%]">
                            <Column className="items-center justify-start rounded-radius4 w-[92%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group194.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                <Text className="rowbrand" variant="body9">
                                  UE999999
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[119px] 2xl:pr-[134px] 3xl:pr-[160px] lg:pr-[95px] py-[4px] w-[27%]">
                                <Column className="items-center justify-start rounded-radius4 w-[92%]">
                                  <Row className="items-end justify-between w-[100%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group194.png')",
                                      }}
                                    >
                                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                      <Text
                                        className="font-semibold text-bluegray_800 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转-增强
                                      </Text>
                                      <Text
                                        className="TwoThousandFiveHundredThree"
                                        variant="body9"
                                      >
                                        具体场景故障案例
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                                <Column className="justify-start mt-[1px] w-[61%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    48分钟
                                  </Text>
                                  <Text className="language15" variant="body9">
                                    2022-08-12 20:23:12
                                  </Text>
                                </Column>
                              </Column>
                              <Row className="items-center justify-center w-[28%]">
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                  <Column className="bg-gray_54 justify-end lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] pr-[2px] py-[1px] rounded-radius2 w-[76%]">
                                    <Row className="items-start mr-[auto] w-[69%]">
                                      <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                                      <Text
                                        className="rowellipsenine_two"
                                        variant="body9"
                                      >
                                        通过
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                  <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                    <Text className="rowbrand" variant="body9">
                                      08次
                                    </Text>
                                    <Img
                                      src="images/img_polygon15_7X4.svg"
                                      className="PolygonFifteen_Seven1"
                                      alt="PolygonFifteen Eight"
                                    />
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                                <Button
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                  shape="icbRoundedBorder3"
                                  size="mdIcn"
                                  variant="icbFillGray54"
                                >
                                  <Img
                                    src="images/img_frame_28X28.svg"
                                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                    alt="Frame Four"
                                  />
                                </Button>
                              </Row>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[47%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[119px] 2xl:pr-[134px] 3xl:pr-[160px] lg:pr-[95px] py-[4px] w-[57%]">
                            <Column className="items-center justify-start rounded-radius4 w-[92%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group194.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[16%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                            <Column className="bg-gray_54 justify-end lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] pr-[2px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start mr-[auto] w-[69%]">
                                <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text
                                  className="rowellipsenine_two"
                                  variant="body9"
                                >
                                  通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[28%]">
                          <Row className="items-center justify-center w-[100%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_54 justify-end lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] pr-[2px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start mr-[auto] w-[69%]">
                                  <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text
                                    className="rowellipsenine_two"
                                    variant="body9"
                                  >
                                    通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                <Text className="rowbrand" variant="body9">
                                  08次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="PolygonFifteen_Seven1"
                                  alt="PolygonFifteen Nine"
                                />
                              </Row>
                            </Column>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="bg-white_A700 items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[15%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[43%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[107px] 2xl:pr-[121px] 3xl:pr-[145px] lg:pr-[86px] py-[4px] w-[64%]">
                            <Column className="items-center justify-start rounded-radius4 w-[92%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group195.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    摄像头失效故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                <Text className="rowbrand" variant="body9">
                                  UE999999
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[107px] 2xl:pr-[121px] 3xl:pr-[145px] lg:pr-[86px] py-[4px] w-[27%]">
                                <Column className="items-center justify-start rounded-radius4 w-[92%]">
                                  <Row className="items-end justify-between w-[100%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group195.png')",
                                      }}
                                    >
                                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                                      <Text
                                        className="font-semibold text-bluegray_800 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转-增强
                                      </Text>
                                      <Text
                                        className="TwoThousandFiveHundredThree"
                                        variant="body9"
                                      >
                                        摄像头失效故障模式
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                                <Column className="justify-start mt-[1px] w-[61%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    48分钟
                                  </Text>
                                  <Text className="language15" variant="body9">
                                    2022-08-12 20:23:12
                                  </Text>
                                </Column>
                              </Column>
                              <Row className="items-center justify-center w-[28%]">
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                  <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                    <Row className="items-start justify-evenly w-[100%]">
                                      <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                      <Text
                                        className="rowbrand"
                                        variant="body9"
                                      >
                                        不通过
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                  <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                    <Text className="rowbrand" variant="body9">
                                      06次
                                    </Text>
                                    <Img
                                      src="images/img_polygon15_7X4.svg"
                                      className="PolygonFifteen_Seven1"
                                      alt="PolygonFifteen Ten"
                                    />
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                                <Button
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                  shape="icbRoundedBorder3"
                                  size="mdIcn"
                                  variant="icbFillGray54"
                                >
                                  <Img
                                    src="images/img_frame_28X28.svg"
                                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                    alt="Frame Five"
                                  />
                                </Button>
                              </Row>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[47%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[107px] 2xl:pr-[121px] 3xl:pr-[145px] lg:pr-[86px] py-[4px] w-[57%]">
                            <Column className="items-center justify-start rounded-radius4 w-[92%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group195.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    摄像头失效故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[16%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                            <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start justify-evenly w-[100%]">
                                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text className="rowbrand" variant="body9">
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[28%]">
                          <Row className="items-center justify-center w-[100%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="rowbrand" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                <Text className="rowbrand" variant="body9">
                                  06次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="PolygonFifteen_Seven1"
                                  alt="PolygonFifteen Eleven"
                                />
                              </Row>
                            </Column>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="bg-white_A700 items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[15%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[43%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 2xl:pr-[109px] 3xl:pr-[130px] lg:pr-[77px] xl:pr-[96px] py-[4px] w-[64%]">
                            <Column className="items-center justify-start rounded-radius4 w-[93%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group196.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    逻辑场景采样故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                <Text className="rowbrand" variant="body9">
                                  UE999999
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 2xl:pr-[109px] 3xl:pr-[130px] lg:pr-[77px] xl:pr-[96px] py-[4px] w-[27%]">
                                <Column className="items-center justify-start rounded-radius4 w-[93%]">
                                  <Row className="items-end justify-between w-[100%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group196.png')",
                                      }}
                                    >
                                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
                                      <Text
                                        className="font-semibold text-bluegray_800 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转-增强
                                      </Text>
                                      <Text
                                        className="TwoThousandFiveHundredThree"
                                        variant="body9"
                                      >
                                        逻辑场景采样故障模式
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                                <Column className="justify-start mt-[1px] w-[61%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    48分钟
                                  </Text>
                                  <Text className="language15" variant="body9">
                                    2022-08-12 20:23:12
                                  </Text>
                                </Column>
                              </Column>
                              <Row className="items-center justify-center w-[28%]">
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                  <Column className="bg-gray_54 justify-end lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] pr-[2px] py-[1px] rounded-radius2 w-[76%]">
                                    <Row className="items-start mr-[auto] w-[69%]">
                                      <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                                      <Text
                                        className="rowellipsenine_two"
                                        variant="body9"
                                      >
                                        通过
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                  <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                    <Text className="rowbrand" variant="body9">
                                      05次
                                    </Text>
                                    <Img
                                      src="images/img_polygon15.svg"
                                      className="PolygonFifteen_Seven1"
                                      alt="PolygonFifteen Twelve"
                                    />
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                                <Button
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                  shape="icbRoundedBorder3"
                                  size="mdIcn"
                                  variant="icbFillGray54"
                                >
                                  <Img
                                    src="images/img_frame_28X28.svg"
                                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                    alt="Frame Six"
                                  />
                                </Button>
                              </Row>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[47%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 2xl:pr-[109px] 3xl:pr-[130px] lg:pr-[77px] xl:pr-[96px] py-[4px] w-[57%]">
                            <Column className="items-center justify-start rounded-radius4 w-[93%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group196.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    逻辑场景采样故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[16%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                            <Column className="bg-gray_54 justify-end lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] pr-[2px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start mr-[auto] w-[69%]">
                                <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text
                                  className="rowellipsenine_two"
                                  variant="body9"
                                >
                                  通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[28%]">
                          <Row className="items-center justify-center w-[100%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_54 justify-end lg:pl-[3px] xl:pl-[4px] 2xl:pl-[5px] 3xl:pl-[6px] pr-[2px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start mr-[auto] w-[69%]">
                                  <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text
                                    className="rowellipsenine_two"
                                    variant="body9"
                                  >
                                    通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                <Text className="rowbrand" variant="body9">
                                  05次
                                </Text>
                                <Img
                                  src="images/img_polygon15.svg"
                                  className="PolygonFifteen_Seven1"
                                  alt="PolygonFifteen Thirteen"
                                />
                              </Row>
                            </Column>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="bg-white_A700 items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[15%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[43%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[119px] 2xl:pr-[134px] 3xl:pr-[160px] lg:pr-[95px] py-[4px] w-[64%]">
                            <Column className="items-center justify-start rounded-radius4 w-[92%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group197.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="items-center w-[100%]">
                            <Row className="items-center justify-evenly w-[100%]">
                              <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                <Text className="rowbrand" variant="body9">
                                  UE999999
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[119px] 2xl:pr-[134px] 3xl:pr-[160px] lg:pr-[95px] py-[4px] w-[27%]">
                                <Column className="items-center justify-start rounded-radius4 w-[92%]">
                                  <Row className="items-end justify-between w-[100%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group197.png')",
                                      }}
                                    >
                                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                      <Text
                                        className="font-semibold text-bluegray_800 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转-增强
                                      </Text>
                                      <Text
                                        className="TwoThousandFiveHundredThree"
                                        variant="body9"
                                      >
                                        具体场景故障案例
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                                <Column className="justify-start mt-[1px] w-[61%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    48分钟
                                  </Text>
                                  <Text className="language15" variant="body9">
                                    2022-08-12 20:23:12
                                  </Text>
                                </Column>
                              </Column>
                              <Row className="items-center justify-center w-[28%]">
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                  <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                    <Row className="items-start justify-evenly w-[100%]">
                                      <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                      <Text
                                        className="rowbrand"
                                        variant="body9"
                                      >
                                        不通过
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                  <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                    <Text className="rowbrand" variant="body9">
                                      04次
                                    </Text>
                                    <Img
                                      src="images/img_polygon15_7X4.svg"
                                      className="PolygonFifteen_Seven1"
                                      alt="PolygonFifteen Fourteen"
                                    />
                                  </Row>
                                </Column>
                              </Row>
                              <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                                <Button
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                  shape="icbRoundedBorder3"
                                  size="mdIcn"
                                  variant="icbFillGray54"
                                >
                                  <Img
                                    src="images/img_frame_28X28.svg"
                                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                    alt="Frame Seven"
                                  />
                                </Button>
                              </Row>
                            </Row>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[47%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] xl:pr-[119px] 2xl:pr-[134px] 3xl:pr-[160px] lg:pr-[95px] py-[4px] w-[57%]">
                            <Column className="items-center justify-start rounded-radius4 w-[92%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group197.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    具体场景故障案例
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[16%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                            <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start justify-evenly w-[100%]">
                                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text className="rowbrand" variant="body9">
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[28%]">
                          <Row className="items-center justify-center w-[100%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="rowbrand" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                <Text className="rowbrand" variant="body9">
                                  04次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="PolygonFifteen_Seven1"
                                  alt="PolygonFifteen Fifteen"
                                />
                              </Row>
                            </Column>
                          </Row>
                        </Row>
                      </Row>
                      <Row className="bg-white_A700 items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[15%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[43%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 2xl:pr-[109px] 3xl:pr-[130px] lg:pr-[77px] xl:pr-[96px] py-[4px] w-[64%]">
                            <Column className="items-center justify-start rounded-radius4 w-[93%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group198.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    逻辑场景采样故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                            <Text className="rowbrand" variant="body9">
                              UE999999
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 2xl:pr-[109px] 3xl:pr-[130px] lg:pr-[77px] xl:pr-[96px] py-[4px] w-[27%]">
                            <Column className="items-center justify-start rounded-radius4 w-[93%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group198.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    逻辑场景采样故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[16%]">
                            <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start justify-evenly w-[100%]">
                                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text className="rowbrand" variant="body9">
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[12%]">
                            <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                              <Text className="rowbrand" variant="body9">
                                01次
                              </Text>
                              <Img
                                src="images/img_polygon15_7X4.svg"
                                className="PolygonFifteen"
                                alt="PolygonFifteen Sixteen"
                              />
                            </Row>
                          </Column>
                          <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray54"
                            >
                              <Img
                                src="images/img_frame_28X28.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="Frame Eight"
                              />
                            </Button>
                          </Row>
                        </Row>
                        <Row className="items-center justify-center w-[47%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 2xl:pr-[109px] 3xl:pr-[130px] lg:pr-[77px] xl:pr-[96px] py-[4px] w-[57%]">
                            <Column className="items-center justify-start rounded-radius4 w-[93%]">
                              <Row className="items-end justify-between w-[100%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group198.png')",
                                  }}
                                >
                                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    逻辑场景采样故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language15" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[16%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                            <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start justify-evenly w-[100%]">
                                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text className="rowbrand" variant="body9">
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                        </Row>
                        <Row className="items-center justify-center w-[28%]">
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                            <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                              <Row className="items-start justify-evenly w-[100%]">
                                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text className="rowbrand" variant="body9">
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                            <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                              <Text className="rowbrand" variant="body9">
                                01次
                              </Text>
                              <Img
                                src="images/img_polygon15_7X4.svg"
                                className="PolygonFifteen"
                                alt="PolygonFifteen Seventeen"
                              />
                            </Row>
                          </Column>
                        </Row>
                      </Row>
                    </Column>
                  </div>
                  <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[97%]">
                    <Row className="items-center justify-between w-[38%]">
                      <CheckBox
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                        inputClassName="h-[16px] mr-[5px] w-[16px]"
                        name="TwoThousandSevenHundredFortySix"
                        label="全选"
                        shape="RoundedBorder2"
                        size="sm"
                        variant="OutlineBluegray100"
                      ></CheckBox>
                      <div className="bg-gray_201 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[1px]"></div>
                      <Button
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[15%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        删除
                      </Button>
                      <Button
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[28%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        运行选定案例
                      </Button>
                      <Button
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[28%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                    </Row>
                    <Row className="items-center justify-between w-[46%]">
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
                          name="Group1120"
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
                      <Row className="items-center justify-center w-[43%]">
                        <Img
                          src="images/img_arrowleft.svg"
                          className="arrowleft"
                          alt="arrowleft"
                        />
                        <Stack className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[3px] w-[79%]">
                          <div className="bg-gray_54 left-[0] rounded-radius3 lightbulb"></div>
                          <Row className="absolute bottom-[5%] items-start justify-between right-[0] w-[96%]">
                            <Text className="One19" variant="body9">
                              1
                            </Text>
                            <Text
                              className="language_TwentyTwo"
                              variant="body9"
                            >
                              2 3 4 5
                            </Text>
                            <Text
                              className="OneHundredThirtyEight"
                              variant="body9"
                            >
                              …
                            </Text>
                            <Text
                              className="language_TwentyTwo"
                              variant="body9"
                            >
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
                      <Row className="items-center justify-between rounded-radius4 w-[19%]">
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
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page27;
