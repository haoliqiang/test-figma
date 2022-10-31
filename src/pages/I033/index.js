import React from "react";

import {
  Column,
  Stack,
  SelectBox,
  Img,
  Row,
  Line,
  Text,
  Button,
  CheckBox,
  Input,
} from "components";
import Header9 from "components/Header/Header9";
import Sidebar from "components/Sidebar/Sidebar";

const I033Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Stack className="3xl:h-[1081px] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] w-[100%]">
          <Column className="absolute bg-white_A700 bottom-[0] items-center justify-end lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] right-[0] w-[81%]">
            <Column className="justify-start lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[98%]">
              <Column className="bg-blue_A401 items-center justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius4 w-[11%]">
                <SelectBox
                  className="font-normal mb-[1px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[92%]"
                  placeholderClassName="text-white_A700"
                  name="Group223"
                  placeholder="新建测试案例"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_16X16.svg"
                      className="mr-[0] lg:w-[5px] lg:h-[4px] xl:w-[7px] xl:h-[5px] 2xl:w-[8px] 2xl:h-[6px] 3xl:w-[9px] 3xl:h-[7px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </Column>
              <div className="lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                <Row className="bg-white_A700 items-center lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] w-[100%]">
                  <Row className="items-center justify-center 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[15%]">
                    <Text className="rowid1" variant="body9">
                      ID
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                    <Text className="rowonehundredfiftyfive" variant="body9">
                      案例
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                    <Text className="rowonehundredfiftysix" variant="body9">
                      操作
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[47%]">
                    <Text className="rowonehundredfiftyseven" variant="body9">
                      最近一次测试时间
                    </Text>
                    <Img
                      src="images/img_close_16X16.svg"
                      className="close"
                      alt="close"
                    />
                  </Row>
                  <Row className="items-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[16%]">
                    <Text className="rowonehundredfiftyeight" variant="body9">
                      最近一次测试结果
                    </Text>
                  </Row>
                  <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[28%]">
                    <Text className="rowonehundredfiftynine" variant="body9">
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
                    <Row className="items-center justify-evenly w-[15%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                        <Text className="columnu1230" variant="body9">
                          UE999999
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[43%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                        <Text className="columnu1230" variant="body9">
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                              <Text
                                className="font-semibold text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                道路左转-增强
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
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                            <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                            <Text className="columnu1230" variant="body9">
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
                                  <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                                  <Text
                                    className="font-semibold text-gray_905 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-增强
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
                                  <Text className="columnu1230" variant="body9">
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                              <Text
                                className="font-semibold text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                道路左转-增强
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
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
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
                              <Text className="columnu1230" variant="body9">
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
                    <Row className="items-center justify-evenly w-[15%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                        <Text className="columnu1230" variant="body9">
                          U12315678
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[43%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                        <Text className="columnu1230" variant="body9">
                          U12315678
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
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                            <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                            <Text className="columnu1230" variant="body9">
                              U12315678
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
                                <Text className="columnu1230" variant="body9">
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
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
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
                    <Row className="items-center justify-evenly w-[15%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                        <Text className="columnu1230" variant="body9">
                          U1232
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[43%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                        <Text className="columnu1230" variant="body9">
                          U1232
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
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="items-center w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                            <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                          </Column>
                          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                            <Text className="columnu1230" variant="body9">
                              U1232
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
                                <Text className="columnu1230" variant="body9">
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
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
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
                  <Row className="bg-white_A700 items-center w-[100%]">
                    <Row className="items-center justify-evenly w-[15%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                        <Text className="columnu1230" variant="body9">
                          U1233
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[43%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                        <Text className="columnu1230" variant="body9">
                          U1233
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
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
                              U1233
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
                                  <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
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
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
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
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_102 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_400 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="columnu1230" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
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
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                        <Column className="justify-start mt-[1px] w-[61%]">
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
                              <Text className="columnu1230" variant="body9">
                                不通过
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                          <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                            <Text className="columnu1230" variant="body9">
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
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                        <Text className="columnu1230" variant="body9">
                          U1234
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[43%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                        <Text className="columnu1230" variant="body9">
                          U1234
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
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
                              U1234
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
                                  <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
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
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
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
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_102 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_400 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="columnu1230" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                <Text className="columnu1230" variant="body9">
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
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
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                        <Column className="justify-start mt-[1px] w-[61%]">
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
                              <Text className="columnu1230" variant="body9">
                                不通过
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                          <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                            <Text className="columnu1230" variant="body9">
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
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                        <Text className="columnu1230" variant="body9">
                          U1235
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[43%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                        <Text className="columnu1230" variant="body9">
                          U1235
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
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
                              U1235
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
                                  <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
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
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
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
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_102 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_400 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="columnu1230" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                <Text className="columnu1230" variant="body9">
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[68%]">
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
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                        <Column className="justify-start mt-[1px] w-[61%]">
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
                              <Text className="columnu1230" variant="body9">
                                不通过
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                          <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                            <Text className="columnu1230" variant="body9">
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
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                        <Text className="columnu1230" variant="body9">
                          U1236
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[43%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                        <Text className="columnu1230" variant="body9">
                          U1236
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
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
                              U1236
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
                                  <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
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
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
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
                              <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                <Text className="columnu1230" variant="body9">
                                  05次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
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
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                        <Column className="justify-start mt-[1px] w-[61%]">
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
                          <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                            <Text className="columnu1230" variant="body9">
                              05次
                            </Text>
                            <Img
                              src="images/img_polygon15_7X4.svg"
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
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                        <Text className="columnu1230" variant="body9">
                          U1237
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[43%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                        <Text className="columnu1230" variant="body9">
                          U1237
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
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
                              U1237
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
                                  <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
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
                          </Column>
                          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                            <Column className="justify-start mt-[1px] w-[61%]">
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
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                              <Column className="bg-gray_102 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                                <Row className="items-start justify-evenly w-[100%]">
                                  <div className="bg-red_400 mt-[2px] rounded-radius50 plus_One"></div>
                                  <Text className="columnu1230" variant="body9">
                                    不通过
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                              <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                                <Text className="columnu1230" variant="body9">
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
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
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                        <Column className="justify-start mt-[1px] w-[61%]">
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
                              <Text className="columnu1230" variant="body9">
                                不通过
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                          <Row className="items-start mr-[auto] mt-[2px] w-[32%]">
                            <Text className="columnu1230" variant="body9">
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
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
                        <Text className="columnu1230" variant="body9">
                          U1238
                        </Text>
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[43%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
                        <Text className="columnu1230" variant="body9">
                          U1238
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
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
                      </Column>
                    </Row>
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                        <div className="border border-gray_402 border-solid rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                        <Text className="columnu1230" variant="body9">
                          U1238
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
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
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                        <Column className="justify-start mt-[1px] w-[61%]">
                          <Text
                            className="font-medium text-gray_905 w-[auto]"
                            variant="body9"
                          >
                            08分钟
                          </Text>
                          <Text className="language" variant="body9">
                            2022-08-12 20:23:12
                          </Text>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[16%]">
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
                      <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[12%]">
                        <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                          <Text className="columnu1230" variant="body9">
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
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_edit.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="edit Eight"
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
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[70%]">
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
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
                        <Column className="justify-start mt-[1px] w-[61%]">
                          <Text
                            className="font-medium text-gray_905 w-[auto]"
                            variant="body9"
                          >
                            08分钟
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
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_906"
                    inputClassName="h-[16px] mr-[5px] w-[16px]"
                    name="SixThousandFourHundredEightyEight"
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
                    name="Group2909"
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
                    className="arrowleft1"
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
                    className="arrowleft1"
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
          <Column className="absolute bg-white_A700 justify-end lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] right-[0] top-[7%] w-[81%]">
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
          <Header9 className="absolute top-[0] w-[100%]" />
          <Sidebar className="absolute bottom-[0] left-[0] w-[19%]" />
          <Column className="absolute bg-black_900_a2 items-center justify-end lg:p-[34px] xl:p-[43px] 2xl:p-[49px] 3xl:p-[58px] w-[100%]">
            <Column className="bg-white_A700 items-center justify-start 2xl:mt-[102px] 3xl:mt-[122px] lg:mt-[72px] xl:mt-[90px] lg:pt-[12px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[21px] rounded-radius10 w-[54%]">
              <Row className="items-end justify-between w-[91%]">
                <Column className="justify-end pr-[3px] py-[3px] w-[63%]">
                  <Text className="FiveHundredFiftyTwo" variant="body7">
                    案例编辑
                  </Text>
                </Column>
                <Img
                  src="images/img_close_1.svg"
                  className="close6"
                  alt="close Two"
                />
              </Row>
              <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Line className="bg-gray_202 h-[1px] w-[100%]" />
                <Row className="items-start justify-end ml-[auto] lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[95%]">
                  <Column className="items-center justify-start w-[95%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-medium text-bluegray_500 w-[auto]"
                        variant="body8"
                      >
                        * 案例名称
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_800 Group251"
                        wrapClassName="w-[76%]"
                        name="Group251"
                        placeholder="道路左转-具体故障案例"
                        shape="RoundedBorder4"
                        size="md"
                      ></Input>
                    </Row>
                    <Column className="items-center justify-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[99%]">
                      <Column className="items-end justify-start w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text
                            className="font-medium text-bluegray_500 w-[auto]"
                            variant="body8"
                          >
                            * 采样算法类型
                          </Text>
                          <Row className="items-center justify-between py-[2px] w-[76%]">
                            <CheckBox
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              name="SixThousandFiveHundredSeventeen"
                              label="交叉熵采样"
                              shape="RoundedBorder2"
                              size="sm"
                              variant="OutlineBluegray1001_2"
                            ></CheckBox>
                            <CheckBox
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="mr-[5px] w-[undefinedpx]"
                              name="SixThousandFiveHundredEighteen"
                              label="随机采样"
                              size="sm"
                            ></CheckBox>
                            <CheckBox
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              name="Halton"
                              label="Halton采样"
                              shape="RoundedBorder2"
                              size="sm"
                              variant="OutlineBluegray1001_2"
                            ></CheckBox>
                            <CheckBox
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              name="SixThousandFiveHundredNineteen"
                              label="随机采样"
                              shape="RoundedBorder2"
                              size="sm"
                              variant="OutlineBluegray1001_2"
                            ></CheckBox>
                          </Row>
                        </Row>
                        <Column className="justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[76%]">
                          <Row className="items-center justify-between py-[2px] w-[100%]">
                            <CheckBox
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              name="SixThousandFiveHundredTwenty"
                              label="交叉熵采样"
                              shape="RoundedBorder2"
                              size="sm"
                              variant="OutlineBluegray1001_2"
                            ></CheckBox>
                            <CheckBox
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="mr-[5px] w-[undefinedpx]"
                              name="SixThousandFiveHundredTwentyOne"
                              label="随机采样"
                              size="sm"
                            ></CheckBox>
                            <CheckBox
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              name="Halton One"
                              label="Halton采样"
                              shape="RoundedBorder2"
                              size="sm"
                              variant="OutlineBluegray1001_2"
                            ></CheckBox>
                            <CheckBox
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              name="SixThousandFiveHundredTwentyTwo"
                              label="随机采样"
                              shape="RoundedBorder2"
                              size="sm"
                              variant="OutlineBluegray1001_2"
                            ></CheckBox>
                          </Row>
                          <Row className="items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] py-[2px] w-[45%]">
                            <CheckBox
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              name="SixThousandFiveHundredTwentyThree"
                              label="交叉熵采样"
                              shape="RoundedBorder2"
                              size="sm"
                              variant="OutlineBluegray1001_2"
                            ></CheckBox>
                            <CheckBox
                              className="font-normal lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="mr-[5px] w-[undefinedpx]"
                              name="SixThousandFiveHundredTwentyFour"
                              label="随机采样"
                              size="sm"
                            ></CheckBox>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <Row className="items-center justify-between lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_500 w-[auto]"
                        variant="body8"
                      >
                        * 采样次数
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[76%]">
                        <Text className="One_One" variant="body8">
                          6
                        </Text>
                      </Column>
                    </Row>
                    <Line className="bg-gray_202 h-[1px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
                    <Column className="items-center justify-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
                      <Text className="columnlanguage_nineteen" variant="body8">
                        参数空间介绍： npc 车辆开始位置npc_start_s [580, 600]，
                        npc车辆速度npc_speed[4, 15]，
                        npc切入距主车距离relative_distance[5, 20]{" "}
                      </Text>
                    </Column>
                    <Row className="items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_500 w-[auto]"
                        variant="body8"
                      >
                        * NPC车辆位置
                      </Text>
                      <Input
                        className="placeholder:text-bluegray_800 Group251"
                        wrapClassName="2xl:ml-[58px] 3xl:ml-[69px] lg:ml-[41px] w-[36%] xl:ml-[51px]"
                        name="Group251 One"
                        placeholder="580"
                        shape="RoundedBorder4"
                        size="lg"
                      ></Input>
                      <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                      <Input
                        className="placeholder:text-bluegray_800 Group251"
                        wrapClassName="2xl:ml-[8px] 3xl:ml-[9px] lg:ml-[5px] w-[36%] xl:ml-[7px]"
                        name="Group252"
                        placeholder="600"
                        shape="RoundedBorder4"
                        size="lg"
                      ></Input>
                    </Row>
                    <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                      <Text
                        className="font-medium text-bluegray_500 w-[auto]"
                        variant="body8"
                      >
                        * NPC车辆速度
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                        <Text className="One_One" variant="body8">
                          4
                        </Text>
                      </Column>
                      <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                      <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                        <Text className="One_One" variant="body8">
                          15
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Line className="bg-gray_300 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] rounded-radius3 w-[6px]" />
                </Row>
                <Stack className="lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Row className="absolute inset-x-[0] items-center mx-[auto] top-[0] w-[91%]">
                    <Text
                      className="font-medium text-bluegray_500 w-[auto]"
                      variant="body8"
                    >
                      * 切入主车距离
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        5
                      </Text>
                    </Column>
                    <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        20
                      </Text>
                    </Column>
                  </Row>
                  <Column className="absolute bg-white_A700 bottom-[0] items-center justify-start lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Line className="bg-gray_202 h-[1px] w-[100%]" />
                      <Row className="items-center justify-end ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[19%]">
                        <Button
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillGray204"
                        >
                          取消
                        </Button>
                        <Button
                          className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillBlueA401"
                        >
                          保存
                        </Button>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </Column>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default I033Page;
