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
  CheckBox,
  SelectBox,
} from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";

const I031Page = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Row className="items-center justify-evenly w-[100%]">
            <Sidebar className="w-[19%]" />
            <Column className="items-center w-[81%]">
              <Column className="bg-white_A700 justify-end lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] w-[100%]">
                <Row className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mr-[auto] w-[16%]">
                  <Text className="OneHundredFiftyThree" variant="body9">
                    我的测试集
                  </Text>
                  <Img
                    src="images/img_checkmark.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                  <Text className="OneHundredFiftyFour" variant="body9">
                    20220804测试集
                  </Text>
                </Row>
                <Line className="bg-gray_202 h-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[99%]" />
              </Column>
              <Column className="justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]">
                <Button
                  className="flex items-center justify-center text-center w-[11%]"
                  rightIcon={
                    <Img
                      src="images/img_union_5X8.svg"
                      className="ml-[4px] text-center lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"
                      alt="Union"
                    />
                  }
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA401"
                >
                  <div className="bg-transparent font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                    新建测试案例
                  </div>
                </Button>
                <Stack className="lg:h-[170px] xl:h-[213px] 2xl:h-[240px] 3xl:h-[287px] mt-[2px] w-[100%]">
                  <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                    <div className="w-[100%]">
                      <Row className="bg-white_A700 items-center lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] w-[100%]">
                        <Row className="items-center justify-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[4%]">
                          <Text
                            className="flex items-center ml-[2px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] TwoHundredEightySix"
                            variant="body9"
                          >
                            ID
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[17%]">
                          <Text
                            className="lg:ml-[113px] xl:ml-[141px] 2xl:ml-[159px] 3xl:ml-[190px] rowonehundredfiftyeight"
                            variant="body9"
                          >
                            案例
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                          <Text
                            className="rowonehundredfiftysix"
                            variant="body9"
                          >
                            操作
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[59%]">
                          <Text
                            className="lg:ml-[304px] xl:ml-[380px] 2xl:ml-[428px] 3xl:ml-[513px] TwoHundredFortyTwo"
                            variant="body9"
                          >
                            最近一次测试时间
                          </Text>
                          <Img
                            src="images/img_close_16X16.svg"
                            className="close"
                            alt="close"
                          />
                        </Row>
                        <Row className="items-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[16%]">
                          <Text
                            className="rowonehundredfiftyeight"
                            variant="body9"
                          >
                            最近一次测试结果
                          </Text>
                        </Row>
                        <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[28%]">
                          <Text
                            className="rowonehundredfiftynine"
                            variant="body9"
                          >
                            累计测试
                          </Text>
                          <Img
                            src="images/img_close_16X16.svg"
                            className="close_One"
                            alt="close One"
                          />
                        </Row>
                      </Row>
                      <Column className="items-center justify-start lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] w-[98%]">
                        <Row className="bg-white_A700 items-center w-[100%]">
                          <Row className="items-center justify-evenly w-[4%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                              <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                          </Row>
                          <Row className="items-center lg:pr-[15px] xl:pr-[19px] 2xl:pr-[22px] 3xl:pr-[26px] w-[17%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                              <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                            <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                              <Text className="columnu1230" variant="body9">
                                U1230
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center justify-evenly w-[100%]">
                            <Column className="items-center w-[100%]">
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                  <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                                </Column>
                                <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                  <Text className="columnu1230" variant="body9">
                                    U1230
                                  </Text>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[27%]">
                                  <Column className="items-center justify-start rounded-radius4 w-[87%]">
                                    <Row className="items-end justify-between w-[100%]">
                                      <Column
                                        className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group777.png')",
                                        }}
                                      >
                                        <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                      </Column>
                                      <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                                        <Text
                                          className="font-semibold text-gray_905 w-[auto]"
                                          variant="body9"
                                        >
                                          道路左转
                                        </Text>
                                        <Text
                                          className="OneHundredSixtyOne"
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
                                      className="font-medium text-gray_905 w-[auto]"
                                      variant="body9"
                                    >
                                      48分钟
                                    </Text>
                                    <Text className="language" variant="body9">
                                      2022-08-12 20:23:12
                                    </Text>
                                  </Column>
                                </Column>
                                <Row className="items-center justify-center w-[28%]">
                                  <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                    <Column className="bg-gray_102 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                      <Row className="items-start justify-evenly w-[100%]">
                                        <div className="bg-red_400 mt-[2px] rounded-radius50 plus_One"></div>
                                        <Text
                                          className="columnu1230"
                                          variant="body9"
                                        >
                                          不通过
                                        </Text>
                                      </Row>
                                    </Column>
                                  </Column>
                                  <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                    <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                      <Text
                                        className="columnu1230"
                                        variant="body9"
                                      >
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
                                    variant="icbFillGray102"
                                  >
                                    <Img
                                      src="images/img_edit.svg"
                                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                      alt="edit"
                                    />
                                  </Button>
                                  <Button
                                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                    shape="icbRoundedBorder3"
                                    size="mdIcn"
                                    variant="icbFillGray102"
                                  >
                                    <Img
                                      src="images/img_frame_1.svg"
                                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                      alt="Frame"
                                    />
                                  </Button>
                                </Row>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center w-[59%]">
                            <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[20%]">
                              <Text className="columnu1230" variant="body9">
                                U1230
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[46%]">
                              <Column className="items-center justify-start rounded-radius4 w-[87%]">
                                <Row className="items-end justify-between w-[100%]">
                                  <Column
                                    className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group777.png')",
                                    }}
                                  >
                                    <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                  </Column>
                                  <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                                    <Text
                                      className="font-semibold text-gray_905 w-[auto]"
                                      variant="body9"
                                    >
                                      道路左转
                                    </Text>
                                    <Text
                                      className="OneHundredSixtyOne"
                                      variant="body9"
                                    >
                                      具体场景故障案例具体场景故障案例...
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[34%]">
                              <Column className="justify-start mt-[1px] w-[61%]">
                                <Text
                                  className="font-medium text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  48分钟
                                </Text>
                                <Text className="language" variant="body9">
                                  2022-08-12 20:23:12
                                </Text>
                              </Column>
                            </Column>
                          </Row>
                          <Row className="items-center justify-center w-[16%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                              <Column className="bg-gray_102 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_400 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="columnu1230" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                          </Row>
                          <Row className="items-center justify-center w-[28%]">
                            <Row className="items-center justify-center w-[100%]">
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                <Column className="bg-gray_102 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                  <Row className="items-start justify-evenly w-[100%]">
                                    <div className="bg-red_400 mt-[2px] rounded-radius50 plus_One"></div>
                                    <Text
                                      className="columnu1230"
                                      variant="body9"
                                    >
                                      不通过
                                    </Text>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                  <Text className="columnu1230" variant="body9">
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
                          <Row className="items-center justify-evenly w-[4%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                              <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                          </Row>
                          <Row className="items-center lg:pr-[15px] xl:pr-[19px] 2xl:pr-[22px] 3xl:pr-[26px] w-[17%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                              <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                            <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                              <Text className="columnu1230" variant="body9">
                                U123156789as
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center justify-evenly w-[100%]">
                            <Column className="items-center w-[100%]">
                              <Row className="items-center justify-evenly w-[100%]">
                                <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                  <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                                </Column>
                                <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                  <Text className="columnu1230" variant="body9">
                                    U123156789as
                                  </Text>
                                </Column>
                                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[27%]">
                                  <Column className="items-center justify-start rounded-radius4 w-[67%]">
                                    <Row className="items-end justify-between w-[100%]">
                                      <Column
                                        className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group191.png')",
                                        }}
                                      >
                                        <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                      </Column>
                                      <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                        <Text
                                          className="font-semibold text-gray_905 w-[auto]"
                                          variant="body9"
                                        >
                                          道路右转
                                        </Text>
                                        <Text
                                          className="OneHundredSixtyOne"
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
                                      className="font-medium text-gray_905 w-[auto]"
                                      variant="body9"
                                    >
                                      32分钟
                                    </Text>
                                    <Text className="language" variant="body9">
                                      2022-08-12 20:23:12
                                    </Text>
                                  </Column>
                                </Column>
                                <Row className="items-center justify-center w-[28%]">
                                  <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                    <Column className="bg-gray_102 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] px-[2px] rounded-radius2 w-[76%]">
                                      <Row className="items-start justify-center w-[65%]">
                                        <div className="bg-teal_500 mt-[2px] rounded-radius50 plus_One"></div>
                                        <Text
                                          className="rowellipsenine_three"
                                          variant="body9"
                                        >
                                          通过
                                        </Text>
                                      </Row>
                                    </Column>
                                  </Column>
                                  <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                    <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                      <Text
                                        className="columnu1230"
                                        variant="body9"
                                      >
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
                                    variant="icbFillGray102"
                                  >
                                    <Img
                                      src="images/img_edit.svg"
                                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                      alt="edit One"
                                    />
                                  </Button>
                                  <Button
                                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                    shape="icbRoundedBorder3"
                                    size="mdIcn"
                                    variant="icbFillGray102"
                                  >
                                    <Img
                                      src="images/img_frame_1.svg"
                                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                      alt="Frame One"
                                    />
                                  </Button>
                                </Row>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="items-center w-[59%]">
                            <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[20%]">
                              <Text className="columnu1230" variant="body9">
                                U123156789as
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[46%]">
                              <Column className="items-center justify-start rounded-radius4 w-[67%]">
                                <Row className="items-end justify-between w-[100%]">
                                  <Column
                                    className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group191.png')",
                                    }}
                                  >
                                    <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                  </Column>
                                  <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                    <Text
                                      className="font-semibold text-gray_905 w-[auto]"
                                      variant="body9"
                                    >
                                      道路右转
                                    </Text>
                                    <Text
                                      className="OneHundredSixtyOne"
                                      variant="body9"
                                    >
                                      具体场景故障案例具体场景
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[34%]">
                              <Column className="justify-start mt-[1px] w-[61%]">
                                <Text
                                  className="font-medium text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  32分钟
                                </Text>
                                <Text className="language" variant="body9">
                                  2022-08-12 20:23:12
                                </Text>
                              </Column>
                            </Column>
                          </Row>
                          <Row className="items-center justify-center w-[16%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                              <Column className="bg-gray_102 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] px-[2px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-center w-[65%]">
                                  <div className="bg-teal_500 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text
                                    className="rowellipsenine_three"
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
                                <Column className="bg-gray_102 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] px-[2px] rounded-radius2 w-[76%]">
                                  <Row className="items-start justify-center w-[65%]">
                                    <div className="bg-teal_500 mt-[2px] rounded-radius50 plus_One"></div>
                                    <Text
                                      className="rowellipsenine_three"
                                      variant="body9"
                                    >
                                      通过
                                    </Text>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                  <Text className="columnu1230" variant="body9">
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
                          <Row className="items-center justify-evenly w-[4%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
                              <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                          </Row>
                          <Row className="items-center lg:pr-[15px] xl:pr-[19px] 2xl:pr-[22px] 3xl:pr-[26px] w-[17%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                              <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                            <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                              <Text className="columnu1230" variant="body9">
                                U1232
                              </Text>
                            </Column>
                          </Row>
                          <Row className="items-center justify-evenly w-[100%]">
                            <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                              <Column className="absolute items-center justify-start w-[100%]">
                                <Row className="items-center justify-evenly w-[100%]">
                                  <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                                    <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                                  </Column>
                                  <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                                    <Text
                                      className="columnu1230"
                                      variant="body9"
                                    >
                                      U1232
                                    </Text>
                                  </Column>
                                  <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[27%]">
                                    <Column className="items-center justify-start rounded-radius4 w-[67%]">
                                      <Row className="items-end justify-between w-[100%]">
                                        <Column
                                          className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group192.png')",
                                          }}
                                        >
                                          <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                        </Column>
                                        <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                          <Text
                                            className="font-semibold text-gray_905 w-[auto]"
                                            variant="body9"
                                          >
                                            道路右转
                                          </Text>
                                          <Text
                                            className="OneHundredSixtyOne"
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
                                        className="font-medium text-gray_905 w-[auto]"
                                        variant="body9"
                                      >
                                        28分钟
                                      </Text>
                                      <Text
                                        className="language"
                                        variant="body9"
                                      >
                                        2022-08-12 20:23:12
                                      </Text>
                                    </Column>
                                  </Column>
                                  <Row className="items-center justify-center w-[28%]">
                                    <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                                      <Column className="bg-gray_102 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] px-[2px] rounded-radius2 w-[76%]">
                                        <Row className="items-start justify-center w-[65%]">
                                          <div className="bg-teal_500 mt-[2px] rounded-radius50 plus_One"></div>
                                          <Text
                                            className="rowellipsenine_three"
                                            variant="body9"
                                          >
                                            通过
                                          </Text>
                                        </Row>
                                      </Column>
                                    </Column>
                                    <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                      <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                        <Text
                                          className="columnu1230"
                                          variant="body9"
                                        >
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
                                      variant="icbFillGray102"
                                    >
                                      <Img
                                        src="images/img_edit.svg"
                                        className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                        alt="edit Two"
                                      />
                                    </Button>
                                    <Button
                                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                      shape="icbRoundedBorder3"
                                      size="mdIcn"
                                      variant="icbFillGray102"
                                    >
                                      <Img
                                        src="images/img_frame_1.svg"
                                        className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                        alt="Frame Two"
                                      />
                                    </Button>
                                  </Row>
                                </Row>
                              </Column>
                            </Stack>
                          </Row>
                          <Row className="items-center w-[59%]">
                            <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[20%]">
                              <Text className="columnu1230" variant="body9">
                                U1232
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[46%]">
                              <Column className="items-center justify-start rounded-radius4 w-[67%]">
                                <Row className="items-end justify-between w-[100%]">
                                  <Column
                                    className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group192.png')",
                                    }}
                                  >
                                    <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                  </Column>
                                  <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                    <Text
                                      className="font-semibold text-gray_905 w-[auto]"
                                      variant="body9"
                                    >
                                      道路右转
                                    </Text>
                                    <Text
                                      className="OneHundredSixtyOne"
                                      variant="body9"
                                    >
                                      具体场景故障案例具体场景
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[34%]">
                              <Column className="justify-start mt-[1px] w-[61%]">
                                <Text
                                  className="font-medium text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  28分钟
                                </Text>
                                <Text className="language" variant="body9">
                                  2022-08-12 20:23:12
                                </Text>
                              </Column>
                            </Column>
                          </Row>
                          <Row className="items-center justify-center w-[16%]">
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
                              <Column className="bg-gray_102 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] px-[2px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-center w-[65%]">
                                  <div className="bg-teal_500 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text
                                    className="rowellipsenine_three"
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
                                <Column className="bg-gray_102 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] px-[2px] rounded-radius2 w-[76%]">
                                  <Row className="items-start justify-center w-[65%]">
                                    <div className="bg-teal_500 mt-[2px] rounded-radius50 plus_One"></div>
                                    <Text
                                      className="rowellipsenine_three"
                                      variant="body9"
                                    >
                                      通过
                                    </Text>
                                  </Row>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                                <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                                  <Text className="columnu1230" variant="body9">
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
                      </Column>
                    </div>
                  </Column>
                  <Column className="absolute bg-white_A700 border border-gray_202 border-solid justify-start left-[0] pr-[1px] py-[1px] rounded-radius6 shadow-bs4 top-[0] w-[21%]">
                    <Column className="items-center justify-start lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] rounded-radius2 w-[68%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-center w-[68%]">
                          <Img
                            src="images/img_rectangle283.png"
                            className="Rectangle283"
                            alt="Rectangle283"
                          />
                          <Text className="rowrectangle283" variant="body8">
                            标准案例2.0
                          </Text>
                        </Row>
                        <Text className="columnrectangle283" variant="body9">
                          兼容OpenScenario标准，支持xosc导入编辑
                        </Text>
                      </Column>
                    </Column>
                    <Line className="bg-gray_202 h-[1px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]" />
                    <Column className="items-center justify-start lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius2 w-[75%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-center w-[50%]">
                          <Img
                            src="images/img_rectangle283_24X24.png"
                            className="Rectangle283"
                            alt="Rectangle283 One"
                          />
                          <Text className="rowrectangle283_one" variant="body8">
                            增强案例
                          </Text>
                        </Row>
                        <Text className="columnrectangle283" variant="body9">
                          基于标准案例基础上可选择参数采样、故障注入、行为模型等
                        </Text>
                      </Column>
                    </Column>
                  </Column>
                </Stack>
                <List
                  className="gap-[0] min-h-[auto] w-[98%]"
                  orientation="vertical"
                >
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Column className="absolute items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                            <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[12%]">
                            <Text
                              className="columntwohundredsixtyeight"
                              variant="body9"
                            >
                              U1233
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[27%]">
                            <Row className="items-end my-[4px] rounded-radius4 w-[55%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group193.png')",
                                }}
                              >
                                <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                                <Text
                                  className="font-semibold text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text
                                  className="OneHundredSixtyOne"
                                  variant="body9"
                                >
                                  摄像头失效故障模式
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[61%]">
                              <Text
                                className="font-medium text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                26分钟
                              </Text>
                              <Text className="language" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                          <Row className="items-center justify-center w-[28%]">
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[57%]">
                              <Row className="bg-gray_102 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius2 w-[35%]">
                                <div className="bg-red_400 rounded-radius50 plus_One"></div>
                                <Text
                                  className="rowellipsenine3"
                                  variant="body9"
                                >
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                              <Row className="items-start lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[28%]">
                                <Text className="columnu1230" variant="body9">
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
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_edit.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="edit Three"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_frame_1.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="Frame Three"
                              />
                            </Button>
                          </Row>
                        </Row>
                      </Column>
                      <Line className="absolute bg-gray_202 bottom-[0] h-[1px] w-[100%]" />
                    </Stack>
                  </footer>
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Column className="absolute items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                            <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[12%]">
                            <Text
                              className="columntwohundredsixtyeight"
                              variant="body9"
                            >
                              U1234
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[27%]">
                            <Row className="items-end my-[4px] rounded-radius4 w-[51%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group194.png')",
                                }}
                              >
                                <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text
                                  className="OneHundredSixtyOne"
                                  variant="body9"
                                >
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[61%]">
                              <Text
                                className="font-medium text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                25分钟
                              </Text>
                              <Text className="language" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                          <Row className="items-center justify-center w-[28%]">
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[57%]">
                              <Row className="bg-gray_102 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius2 w-[35%]">
                                <div className="bg-red_400 rounded-radius50 plus_One"></div>
                                <Text
                                  className="rowellipsenine3"
                                  variant="body9"
                                >
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                              <Row className="items-start lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[29%]">
                                <Text className="columnu1230" variant="body9">
                                  08次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="PolygonFifteen_Seven1"
                                  alt="PolygonFifteen Seven"
                                />
                              </Row>
                            </Column>
                          </Row>
                          <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_edit.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="edit Four"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_frame_1.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="Frame Four"
                              />
                            </Button>
                          </Row>
                        </Row>
                      </Column>
                      <Line className="absolute bg-gray_202 bottom-[0] h-[1px] w-[100%]" />
                    </Stack>
                  </footer>
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Column className="absolute items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                            <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[12%]">
                            <Text
                              className="columntwohundredsixtyeight"
                              variant="body9"
                            >
                              U1235
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[27%]">
                            <Row className="items-end my-[4px] rounded-radius4 w-[55%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group195.png')",
                                }}
                              >
                                <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
                                <Text
                                  className="font-semibold text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text
                                  className="OneHundredSixtyOne"
                                  variant="body9"
                                >
                                  摄像头失效故障模式
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[61%]">
                              <Text
                                className="font-medium text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                18分钟
                              </Text>
                              <Text className="language" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                          <Row className="items-center justify-center w-[28%]">
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[57%]">
                              <Row className="bg-gray_102 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius2 w-[35%]">
                                <div className="bg-red_400 rounded-radius50 plus_One"></div>
                                <Text
                                  className="rowellipsenine3"
                                  variant="body9"
                                >
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                              <Row className="items-start lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[29%]">
                                <Text className="columnu1230" variant="body9">
                                  06次
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
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_edit.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="edit Five"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_frame_1.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="Frame Five"
                              />
                            </Button>
                          </Row>
                        </Row>
                      </Column>
                      <Line className="absolute bg-gray_202 bottom-[0] h-[1px] w-[100%]" />
                    </Stack>
                  </footer>
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Column className="absolute items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                            <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[12%]">
                            <Text
                              className="columntwohundredsixtyeight"
                              variant="body9"
                            >
                              U1236
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[27%]">
                            <Row className="items-end my-[4px] rounded-radius4 w-[60%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group196.png')",
                                }}
                              >
                                <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
                                <Text
                                  className="font-semibold text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text
                                  className="OneHundredSixtyOne"
                                  variant="body9"
                                >
                                  逻辑场景采样故障模式
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[61%]">
                              <Text
                                className="font-medium text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                16分钟
                              </Text>
                              <Text className="language" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                          <Row className="items-center justify-center w-[28%]">
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[57%]">
                              <Row className="bg-gray_102 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius2 w-[35%]">
                                <div className="bg-teal_500 lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] rounded-radius50 plus_One"></div>
                                <Text
                                  className="mt-[2px] rowellipsenine_three"
                                  variant="body9"
                                >
                                  通过
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                              <Row className="items-start lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[29%]">
                                <Text className="columnu1230" variant="body9">
                                  05次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="PolygonFifteen_Seven1"
                                  alt="PolygonFifteen Nine"
                                />
                              </Row>
                            </Column>
                          </Row>
                          <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_edit.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="edit Six"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_frame_1.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="Frame Six"
                              />
                            </Button>
                          </Row>
                        </Row>
                      </Column>
                      <Line className="absolute bg-gray_202 bottom-[0] h-[1px] w-[100%]" />
                    </Stack>
                  </footer>
                  <footer className="bg-white_A700 my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Column className="absolute items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                            <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[12%]">
                            <Text
                              className="columntwohundredsixtyeight"
                              variant="body9"
                            >
                              U1237
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[27%]">
                            <Row className="items-end my-[4px] rounded-radius4 w-[51%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group197.png')",
                                }}
                              >
                                <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text
                                  className="OneHundredSixtyOne"
                                  variant="body9"
                                >
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[61%]">
                              <Text
                                className="font-medium text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                10分钟
                              </Text>
                              <Text className="language" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                          <Row className="items-center justify-center w-[28%]">
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[57%]">
                              <Row className="bg-gray_102 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius2 w-[35%]">
                                <div className="bg-red_400 rounded-radius50 plus_One"></div>
                                <Text
                                  className="rowellipsenine3"
                                  variant="body9"
                                >
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                              <Row className="items-start lg:my-[12px] xl:my-[15px] 2xl:my-[17px] 3xl:my-[20px] w-[29%]">
                                <Text className="columnu1230" variant="body9">
                                  04次
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
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_edit.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="edit Seven"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_frame_1.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="Frame Seven"
                              />
                            </Button>
                          </Row>
                        </Row>
                      </Column>
                      <Line className="absolute bg-gray_202 bottom-[0] h-[1px] w-[100%]" />
                    </Stack>
                  </footer>
                  <Slider
                    slidesToShow={8}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    activeSlideCSS="scale-[0.04] my-[0]"
                    magnifiedIndex={7}
                    centerMode
                    ref={sliderRef}
                    className="bg-white_A700 my-[0] w-[100%]"
                    items={[...Array(24)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <Line className="bg-gray_202 h-[1px] w-[100%]" />
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
                <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[97%]">
                  <Row className="items-center justify-between w-[38%]">
                    <CheckBox
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_906"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      name="OneThousandEleven"
                      label="全选"
                      shape="RoundedBorder2"
                      size="sm"
                      variant="OutlineGray402"
                    ></CheckBox>
                    <div className="bg-gray_202 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[1px]"></div>
                    <Button
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[15%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      删除
                    </Button>
                    <Button
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[28%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      运行选定案例
                    </Button>
                    <Button
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[28%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                  </Row>
                  <Row className="items-center justify-evenly w-[45%]">
                    <Text className="TwoHundredFortyTwo" variant="body9">
                      共
                    </Text>
                    <Text className="columnu1230" variant="body9">
                      1120
                    </Text>
                    <Text className="TwoHundredFortyTwo" variant="body9">
                      条
                    </Text>
                    <SelectBox
                      className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_905 w-[17%]"
                      placeholderClassName="text-gray_905"
                      name="Group219"
                      placeholder="10条/页"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_5X8.svg"
                          className="lg:w-[5px] lg:h-[4px] lg:mr-[5px] xl:w-[7px] xl:h-[5px] xl:mr-[7px] 2xl:w-[8px] 2xl:h-[6px] 2xl:mr-[8px] 3xl:w-[9px] 3xl:h-[7px] 3xl:mr-[9px]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineGray202"
                    ></SelectBox>
                    <Img
                      src="images/img_arrowleft_9X5.svg"
                      className="cursor-pointer arrowleft1"
                      onClick={() => sliderRef.current?.slidePrev()}
                      alt="arrowleft"
                    />
                    <Button
                      className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center user"
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillGray203"
                    >
                      1
                    </Button>
                    <Text className="TwoHundredFortyTwo" variant="body9">
                      2 3 4 5
                    </Text>
                    <Text className="TwoHundredFortyTwo" variant="body9">
                      …
                    </Text>
                    <Text className="TwoHundredFortyTwo" variant="body9">
                      100
                    </Text>
                    <Img
                      src="images/img_arrowright_9X5.svg"
                      className="cursor-pointer arrowleft1"
                      onClick={() => sliderRef.current?.slideNext()}
                      alt="arrowright"
                    />
                    <Text className="columnu1230" variant="body9">
                      前往
                    </Text>
                    <Button
                      className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[10%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineGray301"
                    >
                      1000
                    </Button>
                    <Text className="columnu1230" variant="body9">
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

export default I031Page;
