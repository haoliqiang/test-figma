import React from "react";

import {
  Column,
  Row,
  Line,
  Text,
  Img,
  Button,
  Stack,
  CheckBox,
  SelectBox,
} from "components";
import Header2 from "components/Header/Header2";
import I01OnerowFortySix from "components/Row/I01OnerowFortySix";

const I01OnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[16px] xl:pb-[20px] 2xl:pb-[23px] 3xl:pb-[27px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header2 className="w-[100%]" />
          <Column className="items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]">
            <div className="w-[100%]">
              <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                  <Row className="items-center justify-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[13%]">
                    <Text
                      className="flex items-center lg:ml-[27px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] 3xl:mr-[118px] lg:mr-[70px] xl:mr-[88px] 2xl:mr-[99px] FiveHundredFiftyFour"
                      variant="body9"
                    >
                      ID
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <Text
                      className="xl:ml-[1139px] 2xl:ml-[1281px] 3xl:ml-[1538px] lg:ml-[910px] lg:mr-[39px] xl:mr-[49px] 2xl:mr-[56px] 3xl:mr-[67px] rowsixhundredfiftythree"
                      variant="body9"
                    >
                      操作
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[26%]">
                    <Text
                      className="lg:mr-[208px] xl:mr-[260px] 2xl:mr-[293px] 3xl:mr-[351px] mt-[2px] rownineteen"
                      variant="body9"
                    >
                      案例
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                    <Text className="rownineteen" variant="body9">
                      提交时间
                    </Text>
                    <Img
                      src="images/img_offer.svg"
                      className="lg:mr-[124px] xl:mr-[155px] 2xl:mr-[175px] 3xl:mr-[210px] arrowleft"
                      alt="offer"
                    />
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[14%]">
                    <Text
                      className="xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] lg:mr-[85px] mt-[2px] rownineteen"
                      variant="body9"
                    >
                      任务状态
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[14%]">
                    <Text className="rownineteen" variant="body9">
                      执行时长
                    </Text>
                    <Img
                      src="images/img_offer.svg"
                      className="3xl:mr-[115px] lg:mr-[68px] xl:mr-[85px] 2xl:mr-[96px] arrowleft"
                      alt="offer One"
                    />
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                    <Text
                      className="3xl:mr-[118px] lg:mr-[70px] xl:mr-[88px] 2xl:mr-[99px] mt-[2px] rownineteen"
                      variant="body9"
                    >
                      任务结果
                    </Text>
                  </Row>
                </Row>
              </Row>
              <Column className="items-center justify-start w-[100%]">
                <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                  <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                    <Row className="items-center justify-end pr-[1px] w-[13%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[76%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-end pr-[1px] w-[100%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[9%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              U1230
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[24%]">
                            <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转
                                  </Text>
                                  <Text className="TwentySix" variant="body9">
                                    具体场景故障案例具体场景故障案例具体场...
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[19%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              2022-08-12 20:23:12
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
                            <Column className="items-center justify-start mt-[4px] w-[22%]">
                              <Text
                                className="columntwentyseven"
                                variant="body9"
                              >
                                排队中
                              </Text>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[13%]">
                            <Text
                              className="columnonehundredtwentythree"
                              variant="body9"
                            >
                              --
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[12%]">
                            <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                --
                              </Text>
                            </Column>
                          </Column>
                          <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray101"
                            >
                              <Img
                                src="images/img_eye.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="eye"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray101"
                            >
                              <Img
                                src="images/img_close.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="close"
                              />
                            </Button>
                          </Row>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pr-[1px] w-[26%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[100%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pr-[1px] w-[20%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pr-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                        <Column className="items-center justify-start mt-[4px] w-[22%]">
                          <Text className="columntwentyseven" variant="body9">
                            排队中
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pr-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[100%]">
                        <Text
                          className="columnonehundredtwentythree"
                          variant="body9"
                        >
                          --
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pr-[1px] w-[13%]">
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[100%]">
                        <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                          <Text className="test_75B1FF_One" variant="body9">
                            --
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Row>
                </Row>
                <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                  <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                    <Row className="items-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[76%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center pl-[1px] w-[100%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[9%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              U1230
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[24%]">
                            <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转
                                  </Text>
                                  <Text className="TwentySix" variant="body9">
                                    具体场景故障案例具体场景故障案例具体场...
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[19%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              2022-08-12 20:23:12
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
                            <Column className="items-center justify-start mt-[4px] w-[42%]">
                              <Text
                                className="columnthirtyseven"
                                variant="body9"
                              >
                                运行中 2/20
                              </Text>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[13%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              1:23
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[12%]">
                            <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                --
                              </Text>
                            </Column>
                          </Column>
                          <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray101"
                            >
                              <Img
                                src="images/img_eye.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="eye One"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray101"
                            >
                              <Img
                                src="images/img_contrast.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="contrast"
                              />
                            </Button>
                          </Row>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[26%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[100%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[20%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                        <Column className="items-center justify-start mt-[4px] w-[42%]">
                          <Text className="columnthirtyseven" variant="body9">
                            运行中 2/20
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          1:23
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[100%]">
                        <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                          <Text className="test_75B1FF_One" variant="body9">
                            --
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Row>
                </Row>
                <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                  <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                    <Row className="items-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[76%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center pl-[1px] w-[100%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[9%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              U1230
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[24%]">
                            <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转
                                  </Text>
                                  <Text className="TwentySix" variant="body9">
                                    具体场景故障案例具体场景故障案例具体场...
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[19%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              2022-08-12 20:23:12
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
                            <Column className="items-center justify-start mt-[4px] w-[38%]">
                              <Text
                                className="columnfortyseven"
                                variant="body9"
                              >
                                已完成 3/3
                              </Text>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[13%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              1:23
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[12%]">
                            <Column className="bg-gray_101 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius2 w-[40%]">
                              <Row className="items-start justify-evenly w-[100%]">
                                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                <Text className="rowbrand" variant="body9">
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                          </Column>
                          <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray101"
                            >
                              <Img
                                src="images/img_eye.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="eye Two"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray101"
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
                    <Row className="items-center justify-center pl-[1px] w-[26%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[100%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[20%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                        <Column className="items-center justify-start mt-[4px] w-[38%]">
                          <Text className="columnfortyseven" variant="body9">
                            已完成 3/3
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          1:23
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[100%]">
                        <Column className="bg-gray_101 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius2 w-[40%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                            <Text className="rowbrand" variant="body9">
                              不通过
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Row>
                </Row>
                <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                  <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                    <Row className="items-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[76%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center pl-[1px] w-[100%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[9%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              U1230
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[24%]">
                            <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转
                                  </Text>
                                  <Text className="TwentySix" variant="body9">
                                    具体场景故障案例具体场景故障案例具体场...
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[19%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              2022-08-12 20:23:12
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
                            <Column className="items-center justify-start mt-[4px] w-[38%]">
                              <Text
                                className="columnfiftyseven"
                                variant="body9"
                              >
                                已中断 2/4
                              </Text>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[13%]">
                            <Text className="test_75B1FF_One" variant="body9">
                              1:23
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[12%]">
                            <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                --
                              </Text>
                            </Column>
                          </Column>
                          <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray101"
                            >
                              <Img
                                src="images/img_eye.svg"
                                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                alt="eye Three"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray101"
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
                    <Row className="items-center justify-center pl-[1px] w-[26%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[100%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[20%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                        <Column className="items-center justify-start mt-[4px] w-[38%]">
                          <Text className="columnfiftyseven" variant="body9">
                            已中断 2/4
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          1:23
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[100%]">
                        <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                          <Text className="test_75B1FF_One" variant="body9">
                            --
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Row>
                </Row>
                <I01OnerowFortySix className="bg-white_A700 items-center justify-evenly w-[100%]" />
                <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                  <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                    <Row className="items-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[76%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center pl-[1px] w-[100%]">
                      <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute items-center justify-start w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                              <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[9%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                U1230
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[24%]">
                              <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                                  <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                                    <Text
                                      className="font-semibold text-bluegray_800 w-[auto]"
                                      variant="body9"
                                    >
                                      道路左转
                                    </Text>
                                    <Text className="TwentySix" variant="body9">
                                      具体场景故障案例具体场景故障案例具体场...
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[19%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
                              <Column className="items-center justify-start mt-[4px] w-[38%]">
                                <Text
                                  className="columnfortyseven"
                                  variant="body9"
                                >
                                  已完成 3/3
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[13%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                1:23
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[12%]">
                              <Column className="bg-gray_101 justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pr-[2px] pt-[2px] rounded-radius2 w-[40%]">
                                <Row className="items-start mr-[auto] w-[68%]">
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
                            <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray101"
                              >
                                <Img
                                  src="images/img_eye.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="eye Five"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray101"
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
                      </Stack>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[26%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[100%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[20%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                        <Column className="items-center justify-start mt-[4px] w-[38%]">
                          <Text className="columnfortyseven" variant="body9">
                            已完成 3/3
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          1:23
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[100%]">
                        <Column className="bg-gray_101 justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pr-[2px] pt-[2px] rounded-radius2 w-[40%]">
                          <Row className="items-start mr-[auto] w-[68%]">
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
                  </Row>
                </Row>
                <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                  <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                    <Row className="items-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[76%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center pl-[1px] w-[100%]">
                      <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute items-center justify-start w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                              <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[9%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                U1230
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[24%]">
                              <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                                  <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                                    <Text
                                      className="font-semibold text-bluegray_800 w-[auto]"
                                      variant="body9"
                                    >
                                      道路左转
                                    </Text>
                                    <Text className="TwentySix" variant="body9">
                                      具体场景故障案例具体场景故障案例具体场...
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[19%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
                              <Column className="items-center justify-start mt-[4px] w-[42%]">
                                <Text
                                  className="columnthirtyseven"
                                  variant="body9"
                                >
                                  运行中 2/20
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[13%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                1:23
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[12%]">
                              <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                                <Text
                                  className="test_75B1FF_One"
                                  variant="body9"
                                >
                                  --
                                </Text>
                              </Column>
                            </Column>
                            <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray101"
                              >
                                <Img
                                  src="images/img_eye.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="eye Six"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray101"
                              >
                                <Img
                                  src="images/img_contrast.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="contrast One"
                                />
                              </Button>
                            </Row>
                          </Row>
                        </Column>
                      </Stack>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[26%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[100%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[20%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                        <Column className="items-center justify-start mt-[4px] w-[42%]">
                          <Text className="columnthirtyseven" variant="body9">
                            运行中 2/20
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          1:23
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[100%]">
                        <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                          <Text className="test_75B1FF_One" variant="body9">
                            --
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Row>
                </Row>
                <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                  <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                    <Row className="items-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[76%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center pl-[1px] w-[100%]">
                      <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute items-center justify-start w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                              <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[9%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                U1230
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[24%]">
                              <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                                  <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                                    <Text
                                      className="font-semibold text-bluegray_800 w-[auto]"
                                      variant="body9"
                                    >
                                      道路左转
                                    </Text>
                                    <Text className="TwentySix" variant="body9">
                                      具体场景故障案例具体场景故障案例具体场...
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[19%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
                              <Column className="items-center justify-start mt-[4px] w-[38%]">
                                <Text
                                  className="columnfortyseven"
                                  variant="body9"
                                >
                                  已完成 3/3
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[13%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                1:23
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[12%]">
                              <Column className="bg-gray_101 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius2 w-[40%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="rowbrand" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray101"
                              >
                                <Img
                                  src="images/img_eye.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="eye Seven"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray101"
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
                      </Stack>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[26%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[100%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[20%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                        <Column className="items-center justify-start mt-[4px] w-[38%]">
                          <Text className="columnfortyseven" variant="body9">
                            已完成 3/3
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          1:23
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[100%]">
                        <Column className="bg-gray_101 items-center justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] pt-[2px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius2 w-[40%]">
                          <Row className="items-start justify-evenly w-[100%]">
                            <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                            <Text className="rowbrand" variant="body9">
                              不通过
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Row>
                </Row>
                <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                  <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                    <Row className="items-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[76%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center pl-[1px] w-[100%]">
                      <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute items-center justify-start w-[100%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                              <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[9%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                U1230
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[24%]">
                              <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                                  <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                                    <Text
                                      className="font-semibold text-bluegray_800 w-[auto]"
                                      variant="body9"
                                    >
                                      道路左转
                                    </Text>
                                    <Text className="TwentySix" variant="body9">
                                      具体场景故障案例具体场景故障案例具体场...
                                    </Text>
                                  </Column>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[19%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
                              <Column className="items-center justify-start mt-[4px] w-[38%]">
                                <Text
                                  className="columnfiftyseven"
                                  variant="body9"
                                >
                                  已中断 2/4
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[13%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                1:23
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[12%]">
                              <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                                <Text
                                  className="test_75B1FF_One"
                                  variant="body9"
                                >
                                  --
                                </Text>
                              </Column>
                            </Column>
                            <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray101"
                              >
                                <Img
                                  src="images/img_eye.svg"
                                  className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                                  alt="eye Eight"
                                />
                              </Button>
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                                shape="icbRoundedBorder3"
                                size="mdIcn"
                                variant="icbFillGray101"
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
                      </Stack>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[26%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[100%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[20%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                        <Column className="items-center justify-start mt-[4px] w-[38%]">
                          <Text className="columnfiftyseven" variant="body9">
                            已中断 2/4
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          1:23
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[100%]">
                        <Column className="justify-end pl-[2px] lg:pr-[3px] xl:pr-[4px] 2xl:pr-[5px] 3xl:pr-[6px] lg:py-[3px] xl:py-[4px] 2xl:py-[5px] 3xl:py-[6px] w-[40%]">
                          <Text className="test_75B1FF_One" variant="body9">
                            --
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Row>
                </Row>
                <I01OnerowFortySix className="bg-white_A700 items-center justify-evenly w-[100%]" />
                <Row className="bg-white_A700 items-center justify-evenly w-[100%]">
                  <Row className="items-center 3xl:pr-[115px] lg:pr-[68px] xl:pr-[85px] 2xl:pr-[96px] w-[100%]">
                    <Row className="items-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[76%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[9%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          U1230
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[24%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[19%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[13%]">
                        <Column className="items-center justify-start mt-[4px] w-[38%]">
                          <Text className="columnfortyseven" variant="body9">
                            已完成 3/3
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[13%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          1:23
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[12%]">
                        <Column className="bg-gray_101 justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pr-[2px] pt-[2px] rounded-radius2 w-[40%]">
                          <Row className="items-start mr-[auto] w-[68%]">
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
                      <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray101"
                        >
                          <Img
                            src="images/img_eye.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="eye Ten"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray101"
                        >
                          <Img
                            src="images/img_frame_28X28.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="Frame Seven"
                          />
                        </Button>
                      </Row>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[26%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[4px] py-[4px] w-[100%]">
                        <Column className="items-center justify-start rounded-radius4 w-[89%]">
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
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                              <Text
                                className="font-semibold text-bluegray_800 w-[auto]"
                                variant="body9"
                              >
                                道路左转
                              </Text>
                              <Text className="TwentySix" variant="body9">
                                具体场景故障案例具体场景故障案例具体场...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[20%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[10px] xl:pr-[13px] 2xl:pr-[15px] 3xl:pr-[18px] lg:py-[10px] xl:py-[13px] 2xl:py-[15px] 3xl:py-[18px] w-[100%]">
                        <Column className="items-center justify-start mt-[4px] w-[38%]">
                          <Text className="columnfortyseven" variant="body9">
                            已完成 3/3
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[14%]">
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] lg:py-[12px] xl:py-[15px] 2xl:py-[17px] 3xl:py-[20px] w-[100%]">
                        <Text className="test_75B1FF_One" variant="body9">
                          1:23
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-center pl-[1px] w-[13%]">
                      <Column className="bg-white_A700 xl:p-[8px] 3xl:px-[10px] lg:px-[6px] 2xl:px-[9px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] w-[100%]">
                        <Column className="bg-gray_101 justify-end lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] pr-[2px] pt-[2px] rounded-radius2 w-[40%]">
                          <Row className="items-start mr-[auto] w-[68%]">
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
                  </Row>
                </Row>
              </Column>
            </div>
            <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[99%]">
              <Row className="items-center justify-between w-[19%]">
                <CheckBox
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                  name="OneHundredThirtyFour"
                  label="全选"
                  shape="RoundedBorder2"
                  size="sm"
                  variant="OutlineBluegray100"
                ></CheckBox>
                <div className="bg-gray_201 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[1px]"></div>
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA400"
                >
                  删除
                </Button>
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[34%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA400"
                >
                  取消执行
                </Button>
              </Row>
              <Row className="items-center justify-between w-[36%]">
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
                    name="Group766"
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
                    <div className="bg-gray_101 left-[0] rounded-radius3 lightbulb"></div>
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
    </>
  );
};

export default I01OnePage;
