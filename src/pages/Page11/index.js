import React from "react";

import {
  Stack,
  Column,
  Row,
  CheckBox,
  Button,
  Line,
  Text,
  Img,
  List,
} from "components";
import Header3 from "components/Header/Header3";

const Page11 = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-pingfangsc lg:h-[2696px] xl:h-[3373px] 2xl:h-[3794px] 3xl:h-[4552px] mx-[auto] w-[100%]">
        <Column className="absolute bottom-[0] inset-x-[0] justify-end mx-[auto] w-[98%]">
          <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mr-[auto] w-[15%]">
            <CheckBox
              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
              inputClassName="h-[16px] mr-[5px] w-[16px]"
              name="OneThousandFiveHundredFortyOne"
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
          <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
            <Line className="bg-gray_202 h-[1px] rounded-radius05 w-[98%]" />
            <Row className="items-center justify-between lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[97%]">
              <Text
                className="font-semibold text-bluegray_800 w-[auto]"
                variant="body4"
              >
                测试报告
              </Text>
              <Button
                className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[8%]"
                shape="RoundedBorder4"
                size="lg"
                variant="FillBlueA400"
              >
                下载报告
              </Button>
            </Row>
            <Row className="items-start justify-end lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] overflow-auto w-[100%]">
              <Stack className="lg:h-[1362px] xl:h-[1704px] 2xl:h-[1917px] 3xl:h-[2300px] w-[98%]">
                <Column className="absolute bg-gray_54 items-center justify-end lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 top-[1%] w-[100%]">
                  <Column className="items-center justify-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
                    <Column className="bg-white_A700 items-center justify-end lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                      <Column className="justify-start mt-[3px] w-[100%]">
                        <Text
                          className="font-semibold text-bluegray_800 w-[auto]"
                          variant="body4"
                        >
                          被测系统信息
                        </Text>
                        <Row className="items-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[84%]">
                          <Text
                            className="FiveHundredFiftyThree"
                            variant="body7"
                          >
                            自动驾驶系统：
                          </Text>
                          <Text className="ApolloVOne" variant="body7">
                            Apollo自动驾驶系统V1.0
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFortyFive"
                            variant="body7"
                          >
                            仿真车辆：
                          </Text>
                          <Text className="measurement" variant="body7">
                            奥迪A4L
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFortySix"
                            variant="body7"
                          >
                            车辆类型：
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFortySeven"
                            variant="body7"
                          >
                            小型轿车
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[88%]">
                          <Text
                            className="FiveHundredFiftyThree"
                            variant="body7"
                          >
                            传感器：
                          </Text>
                          <Text
                            className="columnonethousandthreehundredforty"
                            variant="body7"
                          >
                            可见光传感器*3{" "}
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFortyNine"
                            variant="body7"
                          >
                            车辆颜色：
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFifty"
                            variant="body7"
                          >
                            白色
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFiftyOne"
                            variant="body7"
                          >
                            动力学仿真：
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFiftyTwo"
                            variant="body7"
                          >
                            仿真名称和内容
                          </Text>
                        </Row>
                        <Row className="items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[55%]">
                          <Text
                            className="FiveHundredFiftyThree"
                            variant="body7"
                          >
                            动力类型：
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFiftyFour"
                            variant="body7"
                          >
                            仿真名称和内容
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFiftyFive"
                            variant="body7"
                          >
                            车体仿真：
                          </Text>
                          <Text
                            className="OneThousandFiveHundredFifty"
                            variant="body7"
                          >
                            仿真名称和内容
                          </Text>
                        </Row>
                        <Column className="bg-white_A700 border border-gray_202 border-solid items-center justify-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                          <Row className="items-start w-[96%]">
                            <Column className="items-center justify-start lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[49%]">
                              <Row className="items-center w-[100%]">
                                <Button
                                  className="flex lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                                  shape="icbCircleBorder10"
                                  size="smIcn"
                                  variant="icbFillBluegray200"
                                >
                                  <Img
                                    src="images/img_dashboard.svg"
                                    className="flex items-center justify-center"
                                    alt="dashboard"
                                  />
                                </Button>
                                <Text className="rowdashboard" variant="body7">
                                  总行驶里程
                                </Text>
                                <Row className="font-dinpro items-center justify-between lg:ml-[231px] xl:ml-[290px] 2xl:ml-[326px] 3xl:ml-[391px] w-[21%]">
                                  <Text
                                    className="font-medium text-bluegray_800 w-[auto]"
                                    as="h5"
                                    variant="h5"
                                  >
                                    1,036
                                  </Text>
                                  <Text
                                    className="columnfivehundredsixty"
                                    variant="body5"
                                  >
                                    km
                                  </Text>
                                </Row>
                              </Row>
                              <Row className="items-start lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[100%]">
                                <Img
                                  src="images/img_clock_24X24.svg"
                                  className="clock"
                                  alt="clock"
                                />
                                <Text
                                  className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rowzero"
                                  variant="body7"
                                >
                                  总行驶时长
                                </Text>
                                <Row className="items-start justify-between lg:ml-[102px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[172px] w-[54%]">
                                  <Text
                                    className="EightyThree"
                                    as="h5"
                                    variant="h5"
                                  >
                                    83
                                  </Text>
                                  <Text
                                    className="OneThousandFiveHundredFiftyNine"
                                    variant="body7"
                                  >
                                    天
                                  </Text>
                                  <Text
                                    className="EightyThree"
                                    as="h5"
                                    variant="h5"
                                  >
                                    23
                                  </Text>
                                  <Text
                                    className="OneThousandFiveHundredSixty"
                                    variant="body7"
                                  >
                                    小时
                                  </Text>
                                  <Text className="Twenty" as="h5" variant="h5">
                                    20
                                  </Text>
                                  <Text
                                    className="OneThousandFiveHundredFiftyNine"
                                    variant="body7"
                                  >
                                    分
                                  </Text>
                                  <Text className="Forty" as="h5" variant="h5">
                                    40
                                  </Text>
                                  <Text
                                    className="OneThousandFiveHundredFiftyNine"
                                    variant="body7"
                                  >
                                    秒
                                  </Text>
                                </Row>
                              </Row>
                            </Column>
                            <Line className="bg-white_A700 border border-gray_202 border-solid lg:h-[154px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[260px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius05 w-[1px]" />
                            <Stack className="bg-white_A700 lg:h-[148px] xl:h-[186px] 2xl:h-[209px] 3xl:h-[250px] lg:ml-[44px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] mt-[4px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 shadow-bs3 lg:w-[147px] xl:w-[185px] 2xl:w-[208px] 3xl:w-[249px]">
                              <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] lg:w-[27px] xl:w-[34px] 2xl:w-[39px] 3xl:w-[46px]">
                                <Text
                                  className="OneThousandFiveHundredSixtyThree"
                                  variant="body8"
                                >
                                  共计
                                </Text>
                                <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] mt-[3px] rounded-radius50 shadow-bs3 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
                                <Text className="zipcode1" variant="body6">
                                  5000
                                </Text>
                              </Column>
                              <div className="absolute bg-gradient4  lg:h-[121px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[120px] xl:w-[151px] 2xl:w-[170px] 3xl:w-[204px]"></div>
                              <div className="absolute bg-gradient5  lg:h-[131px] xl:h-[164px] 2xl:h-[185px] 3xl:h-[221px] inset-[0] justify-center m-[auto] rounded-radius50 shadow-bs5 lg:w-[130px] xl:w-[163px] 2xl:w-[184px] 3xl:w-[220px]"></div>
                            </Stack>
                            <Column className="justify-start lg:ml-[53px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[18%]">
                              <Row className="items-end w-[67%]">
                                <Text
                                  className="OneThousandFiveHundredSixtyFour"
                                  variant="body7"
                                >
                                  通过率
                                </Text>
                                <Text className="Ninety" as="h3" variant="h3">
                                  90
                                </Text>
                                <Text
                                  className="OneThousandFiveHundredSixtyFive"
                                  variant="body5"
                                >
                                  %
                                </Text>
                              </Row>
                              <Row className="items-start ml-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[99%]">
                                <div className="bg-blue_A401 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius2 w-[2%]"></div>
                                <Text
                                  className="OneThousandFiveHundredSixtySix"
                                  variant="body8"
                                >
                                  通过数
                                </Text>
                                <Text className="zipcode_One" variant="body6">
                                  4500
                                </Text>
                              </Row>
                              <Row className="items-start ml-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                                <div className="bg-blue_50 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius2 w-[2%]"></div>
                                <Text
                                  className="OneThousandFiveHundredSixtySix"
                                  variant="body8"
                                >
                                  未通过数
                                </Text>
                                <Text className="FiveHundred" variant="body6">
                                  500
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                      <Column className="items-center justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[1px] w-[100%]">
                        <Column className="bg-white_A700 border border-gray_202 border-solid items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]">
                          <Column className="justify-start 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Column className="w-[10%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body6"
                                >
                                  合规性统计
                                </Text>
                                <Row className="items-end lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pl-[1px] pt-[1px] rounded-radius1 w-[63%]">
                                  <Row className="items-start justify-between ml-[2px] w-[56%]">
                                    <Text className="B" as="h5" variant="h5">
                                      B
                                    </Text>
                                    <Text
                                      className="OneThousandFiveHundredSixtyNine"
                                      variant="body8"
                                    >
                                      级
                                    </Text>
                                  </Row>
                                  <Img
                                    src="images/img_file_12X16.svg"
                                    className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-radius1 w-[23%]"
                                    alt="file"
                                  />
                                </Row>
                                <Row className="items-center justify-between lg:mt-[54px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] rounded-radius3 w-[100%]">
                                  <div className="bg-amber_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[4%]"></div>
                                  <Stack className="lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[86%]">
                                    <Text
                                      className="OneThousandFiveHundredSeventy"
                                      variant="body8"
                                    >
                                      违反交通信号灯
                                    </Text>
                                    <div className="absolute bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] right-[38%] rotate-[18deg] rounded-radius50 shadow-bs3 top-[36%] xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
                                  </Stack>
                                </Row>
                                <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius3 w-[88%]">
                                  <div className="bg-cyan_401 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[4%]"></div>
                                  <Text
                                    className="rowtwenty_two"
                                    variant="body8"
                                  >
                                    违反交通标线
                                  </Text>
                                </Row>
                                <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius3 w-[88%]">
                                  <div className="bg-indigo_A100 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[4%]"></div>
                                  <Text
                                    className="rowtwenty_two"
                                    variant="body8"
                                  >
                                    违反交通标志
                                  </Text>
                                </Row>
                              </Column>
                              <Stack className="lg:h-[168px] xl:h-[210px] 2xl:h-[236px] 3xl:h-[283px] w-[71%]">
                                <Column className="absolute justify-start left-[0] w-[9%]">
                                  <Text
                                    className="columnfivehundredsixty"
                                    variant="body9"
                                  >
                                    违反次数（次）
                                  </Text>
                                  <Text className="TwoHundred" variant="body9">
                                    200
                                  </Text>
                                  <Text
                                    className="OneHundredFifty"
                                    variant="body9"
                                  >
                                    150
                                  </Text>
                                  <Text
                                    className="OneHundredFifty"
                                    variant="body9"
                                  >
                                    100
                                  </Text>
                                  <Text
                                    className="lg:ml-[4px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] columnfivehundredsixty"
                                    variant="body9"
                                  >
                                    50
                                  </Text>
                                  <Text
                                    className="xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[27px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] columnfivehundredsixty"
                                    variant="body9"
                                  >
                                    0
                                  </Text>
                                </Column>
                                <Stack className="absolute border border-bluegray_500_63 border-dashed bottom-[2%] lg:h-[148px] xl:h-[186px] 2xl:h-[209px] 3xl:h-[250px] inset-x-[0] mx-[auto] pr-[2px] w-[96%]">
                                  <Stack className="absolute lg:h-[148px] xl:h-[186px] 2xl:h-[209px] 3xl:h-[250px] w-[100%]">
                                    <Column className="absolute inset-y-[25%] items-center justify-start w-[100%]">
                                      <Column className="items-center justify-start w-[100%]">
                                        <Line className="bg-bluegray_500_63 h-[1px] w-[100%]" />
                                        <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[100%]" />
                                        <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] w-[100%]" />
                                      </Column>
                                    </Column>
                                    <Row className="absolute items-end left-[11%] w-[65%]">
                                      <div className="bg-amber_300 lg:h-[140px] xl:h-[175px] 2xl:h-[197px] 3xl:h-[236px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] rounded-radius6 w-[6%]"></div>
                                      <Line className="bg-bluegray_500_63 lg:h-[148px] xl:h-[185px] 2xl:h-[208px] 3xl:h-[249px] mb-[1px] 3xl:ml-[100px] lg:ml-[59px] xl:ml-[74px] 2xl:ml-[84px] w-[1px]" />
                                      <Line className="bg-bluegray_500_63 lg:h-[148px] xl:h-[185px] 2xl:h-[208px] 3xl:h-[249px] mb-[1px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] w-[1px]" />
                                      <Line className="bg-bluegray_500_63 lg:h-[148px] xl:h-[185px] 2xl:h-[208px] 3xl:h-[249px] mb-[1px] lg:ml-[141px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] w-[1px]" />
                                    </Row>
                                  </Stack>
                                  <div className="absolute bg-cyan_401 bottom-[0] xl:h-[118px] 2xl:h-[133px] 3xl:h-[159px] lg:h-[94px] left-[36%] rounded-radius6 w-[4%]"></div>
                                  <div className="absolute bg-indigo_A100 bottom-[0] lg:h-[121px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] right-[35%] rounded-radius6 w-[4%]"></div>
                                  <div className="absolute bg-deep_orange_400 bottom-[0] lg:h-[121px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] right-[10%] rounded-radius6 w-[4%]"></div>
                                  <Column className="absolute bg-black_900_b2 justify-start left-[13%] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 top-[12%] w-[12%]">
                                    <Text
                                      className="columnonehundredeightyeight"
                                      variant="body8"
                                    >
                                      违规次数
                                      <br />
                                      188次
                                    </Text>
                                  </Column>
                                </Stack>
                              </Stack>
                            </Row>
                            <Row className="items-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[95%]">
                              <Row className="items-center mb-[3px] rounded-radius3 w-[9%]">
                                <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[4%]"></div>
                                <Text className="rowtwenty_two" variant="body8">
                                  违反其他交规
                                </Text>
                              </Row>
                              <Text className="test_4508" variant="body9">
                                违反交通信号灯
                              </Text>
                              <Text className="test_4507" variant="body9">
                                违反交通标线
                              </Text>
                              <Text className="test_4509" variant="body9">
                                违反交通标志
                              </Text>
                              <Text className="test_4509" variant="body9">
                                违反其他交规
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <List
                          className="gap-[0] min-h-[auto] lg:mt-[22px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="listonethousandfourhundredninetythree">
                            <Column className="bg-white_A700 border border-gray_202 border-solid items-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[49%]">
                              <Column className="items-center justify-start lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[99%]">
                                <Row className="items-start justify-between w-[100%]">
                                  <Column className="justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] w-[17%]">
                                    <Text
                                      className="font-semibold text-bluegray_800 w-[auto]"
                                      variant="body6"
                                    >
                                      交通信号灯
                                    </Text>
                                    <Row className="items-end lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pt-[1px] rounded-radius1 w-[80%]">
                                      <Row className="items-start justify-between w-[61%]">
                                        <Text
                                          className="C"
                                          as="h5"
                                          variant="h5"
                                        >
                                          C
                                        </Text>
                                        <Text
                                          className="OneThousandFiveHundredSixtyNine"
                                          variant="body8"
                                        >
                                          级
                                        </Text>
                                      </Row>
                                      <Img
                                        src="images/img_signal.svg"
                                        className="signal"
                                        alt="signal"
                                      />
                                    </Row>
                                    <Row className="items-center xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] lg:mt-[96px] rounded-radius3 w-[80%]">
                                      <div className="bg-bluegray_101 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[6%]"></div>
                                      <Text
                                        className="rowtwenty_two"
                                        variant="body8"
                                      >
                                        情景数量
                                      </Text>
                                    </Row>
                                  </Column>
                                  <Stack className="lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[62%]">
                                    <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                      <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                        <div className="absolute border border-bluegray_500_63 border-dashed bottom-[4%] xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] right-[0] w-[91%]"></div>
                                        <Column className="absolute justify-start left-[0] w-[23%]">
                                          <Text
                                            className="columnfivehundredsixty"
                                            variant="body9"
                                          >
                                            违反次数（次）
                                          </Text>
                                          <Text
                                            className="TwoHundred"
                                            variant="body9"
                                          >
                                            200
                                          </Text>
                                          <Text
                                            className="OneHundredFifty_One"
                                            variant="body9"
                                          >
                                            150
                                          </Text>
                                          <Text
                                            className="OneHundred_One"
                                            variant="body9"
                                          >
                                            100
                                          </Text>
                                          <Text
                                            className="Fifty_One"
                                            variant="body9"
                                          >
                                            50
                                          </Text>
                                          <Text
                                            className="Zero_One"
                                            variant="body9"
                                          >
                                            0
                                          </Text>
                                        </Column>
                                      </Stack>
                                      <Column className="absolute bottom-[23%] items-center justify-start right-[0] w-[91%]">
                                        <Line className="bg-bluegray_500_63 h-[1px] w-[100%]" />
                                        <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                        <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                      </Column>
                                    </Stack>
                                    <Row className="absolute bottom-[4%] items-end justify-center right-[6%] w-[79%]">
                                      <div className="bg-bluegray_101 xl:h-[113px] 2xl:h-[128px] 3xl:h-[153px] lg:h-[91px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius3 w-[6%]"></div>
                                      <div className="bg-amber_300 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] ml-[4px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] rounded-radius3 w-[6%]"></div>
                                      <Line className="bg-bluegray_500_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[1px]" />
                                      <div className="bg-bluegray_101 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] rounded-radius3 w-[6%]"></div>
                                      <div className="bg-amber_300 lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] ml-[4px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] rounded-radius3 w-[6%]"></div>
                                      <Line className="bg-bluegray_500_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[1px]" />
                                      <div className="bg-bluegray_101 3xl:h-[115px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] rounded-radius3 w-[6%]"></div>
                                      <div className="bg-amber_300 lg:h-[57px] xl:h-[71px] 2xl:h-[80px] 3xl:h-[95px] ml-[4px] lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] rounded-radius3 w-[6%]"></div>
                                      <Line className="bg-bluegray_500_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[1px]" />
                                      <div className="bg-bluegray_101 2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius3 w-[6%]"></div>
                                      <div className="bg-amber_300 lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] ml-[4px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] rounded-radius3 w-[6%]"></div>
                                    </Row>
                                  </Stack>
                                </Row>
                                <Row className="items-start lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                                  <Row className="items-center lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] rounded-radius3 w-[13%]">
                                    <div className="bg-amber_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[6%]"></div>
                                    <Text
                                      className="rowtwenty_two"
                                      variant="body8"
                                    >
                                      违规次数
                                    </Text>
                                  </Row>
                                  <Text className="test_4515" variant="body9">
                                    直行红灯
                                  </Text>
                                  <Text className="test_4513" variant="body9">
                                    左转红灯
                                  </Text>
                                  <Text className="test_4513" variant="body9">
                                    调头红灯
                                  </Text>
                                  <Text className="test_4517" variant="body9">
                                    黄灯闪烁减速
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-gray_202 border-solid items-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[49%]">
                              <Row className="items-start justify-between lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[99%]">
                                <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[14%]">
                                  <Text
                                    className="font-semibold text-bluegray_802 w-[auto]"
                                    variant="body6"
                                  >
                                    交通标线
                                  </Text>
                                  <Row className="items-end justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pt-[1px] rounded-radius1 w-[99%]">
                                    <Row className="items-start justify-between w-[61%]">
                                      <Text className="A" as="h5" variant="h5">
                                        A
                                      </Text>
                                      <Text
                                        className="OneThousandFiveHundredSixtyNine"
                                        variant="body8"
                                      >
                                        级
                                      </Text>
                                    </Row>
                                    <Img
                                      src="images/img_group464.svg"
                                      className="Group464"
                                      alt="Group464"
                                    />
                                  </Row>
                                  <Row className="items-center lg:mt-[118px] xl:mt-[148px] 2xl:mt-[167px] 3xl:mt-[200px] rounded-radius3 w-[99%]">
                                    <div className="bg-cyan_401 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[6%]"></div>
                                    <Text
                                      className="rowtwenty_two"
                                      variant="body8"
                                    >
                                      违规次数
                                    </Text>
                                  </Row>
                                </Column>
                                <Column className="items-center justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] pt-[3px] w-[62%]">
                                  <Column className="items-end justify-start w-[100%]">
                                    <Stack className="lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                      <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                        <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                          <div className="absolute border border-bluegray_600_63 border-dashed bottom-[4%] xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] right-[0] w-[91%]"></div>
                                          <Column className="absolute justify-start left-[0] w-[23%]">
                                            <Text
                                              className="columnfivehundredsixty"
                                              variant="body9"
                                            >
                                              违反次数（次）
                                            </Text>
                                            <Text
                                              className="TwoHundred"
                                              variant="body9"
                                            >
                                              200
                                            </Text>
                                            <Text
                                              className="OneHundredFifty_One"
                                              variant="body9"
                                            >
                                              150
                                            </Text>
                                            <Text
                                              className="OneHundred_One"
                                              variant="body9"
                                            >
                                              100
                                            </Text>
                                            <Text
                                              className="Fifty_One"
                                              variant="body9"
                                            >
                                              50
                                            </Text>
                                            <Text
                                              className="Zero_One"
                                              variant="body9"
                                            >
                                              0
                                            </Text>
                                          </Column>
                                        </Stack>
                                        <Column className="absolute bottom-[23%] items-center justify-start right-[0] w-[91%]">
                                          <Line className="bg-bluegray_600_63 h-[1px] w-[100%]" />
                                          <Line className="bg-bluegray_600_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                          <Line className="bg-bluegray_600_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                        </Column>
                                      </Stack>
                                      <Row className="absolute bottom-[4%] items-end justify-between right-[13%] w-[65%]">
                                        <div className="bg-cyan_401 xl:h-[113px] 2xl:h-[128px] 3xl:h-[153px] lg:h-[91px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_600_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] w-[1px]" />
                                        <div className="bg-cyan_401 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_600_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] w-[1px]" />
                                        <div className="bg-cyan_401 2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius3 w-[7%]"></div>
                                      </Row>
                                    </Stack>
                                    <Row className="items-center justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[88%]">
                                      <Text
                                        className="columnfivehundredsixty"
                                        variant="body9"
                                      >
                                        违反车道线规则
                                      </Text>
                                      <Text
                                        className="test_4513_Two"
                                        variant="body9"
                                      >
                                        违反车道规则
                                      </Text>
                                      <Text
                                        className="test_4517_One"
                                        variant="body9"
                                      >
                                        违反禁止标线规则
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                          </Row>
                          <Row className="listonethousandfourhundredninetythree">
                            <Column className="bg-white_A700 border border-gray_202 border-solid items-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[49%]">
                              <Row className="items-start justify-between lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[99%]">
                                <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[13%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body6"
                                  >
                                    交通标志
                                  </Text>
                                  <Row className="items-end justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pt-[1px] rounded-radius1 w-[100%]">
                                    <Row className="items-start justify-between w-[61%]">
                                      <Text className="A" as="h5" variant="h5">
                                        A
                                      </Text>
                                      <Text
                                        className="OneThousandFiveHundredSixtyNine"
                                        variant="body8"
                                      >
                                        级
                                      </Text>
                                    </Row>
                                    <Img
                                      src="images/img_group464.svg"
                                      className="Group464"
                                      alt="Group464 One"
                                    />
                                  </Row>
                                  <Row className="items-center xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] lg:mt-[96px] rounded-radius3 w-[100%]">
                                    <div className="bg-bluegray_101 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[6%]"></div>
                                    <Text
                                      className="rowtwenty_two"
                                      variant="body8"
                                    >
                                      情景数量
                                    </Text>
                                  </Row>
                                  <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius3 w-[100%]">
                                    <div className="bg-indigo_A100 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[6%]"></div>
                                    <Text
                                      className="rowtwenty_two"
                                      variant="body8"
                                    >
                                      违规次数
                                    </Text>
                                  </Row>
                                </Column>
                                <Column className="items-center justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] pt-[3px] w-[62%]">
                                  <Column className="justify-start w-[100%]">
                                    <Stack className="lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                      <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                        <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                          <div className="absolute border border-bluegray_500_63 border-dashed bottom-[4%] xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] right-[0] w-[91%]"></div>
                                          <Column className="absolute justify-start left-[0] w-[23%]">
                                            <Text
                                              className="columnfivehundredsixty"
                                              variant="body9"
                                            >
                                              违反次数（次）
                                            </Text>
                                            <Text
                                              className="TwoHundred"
                                              variant="body9"
                                            >
                                              200
                                            </Text>
                                            <Text
                                              className="OneHundredFifty_One"
                                              variant="body9"
                                            >
                                              150
                                            </Text>
                                            <Text
                                              className="OneHundred_One"
                                              variant="body9"
                                            >
                                              100
                                            </Text>
                                            <Text
                                              className="Fifty_One"
                                              variant="body9"
                                            >
                                              50
                                            </Text>
                                            <Text
                                              className="Zero_One"
                                              variant="body9"
                                            >
                                              0
                                            </Text>
                                          </Column>
                                        </Stack>
                                        <Column className="absolute bottom-[23%] items-center justify-start right-[0] w-[91%]">
                                          <Line className="bg-bluegray_500_63 h-[1px] w-[100%]" />
                                          <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                          <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                        </Column>
                                      </Stack>
                                      <Row className="absolute bottom-[4%] items-end right-[10%] w-[72%]">
                                        <div className="bg-bluegray_101 xl:h-[113px] 2xl:h-[128px] 3xl:h-[153px] lg:h-[91px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius3 w-[7%]"></div>
                                        <div className="bg-indigo_A100 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] ml-[4px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_500_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[1px]" />
                                        <div className="bg-bluegray_101 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] rounded-radius3 w-[7%]"></div>
                                        <div className="bg-indigo_A100 lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] ml-[4px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_500_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[1px]" />
                                        <div className="bg-bluegray_101 2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius3 w-[7%]"></div>
                                        <div className="bg-indigo_A100 lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] ml-[4px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] rounded-radius3 w-[7%]"></div>
                                      </Row>
                                    </Stack>
                                    <Row className="items-center justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[75%]">
                                      <Text
                                        className="FiveHundredFiftyThree"
                                        variant="body9"
                                      >
                                        限速标志
                                      </Text>
                                      <Text
                                        className="lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] columnfivehundredsixty"
                                        variant="body9"
                                      >
                                        停车标志
                                      </Text>
                                      <Text
                                        className="lg:ml-[36px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] FiveHundredFiftyThree"
                                        variant="body9"
                                      >
                                        让行标志
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 border border-gray_202 border-solid items-center lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[49%]">
                              <Row className="items-start justify-between lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[99%]">
                                <Column className="items-center justify-start lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] w-[13%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body6"
                                  >
                                    其他交规
                                  </Text>
                                  <Row className="items-end justify-between lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] pt-[1px] rounded-radius1 w-[100%]">
                                    <Row className="items-start justify-between w-[61%]">
                                      <Text className="C" as="h5" variant="h5">
                                        C
                                      </Text>
                                      <Text
                                        className="OneThousandFiveHundredSixtyNine"
                                        variant="body8"
                                      >
                                        级
                                      </Text>
                                    </Row>
                                    <Img
                                      src="images/img_signal.svg"
                                      className="Group464"
                                      alt="signal One"
                                    />
                                  </Row>
                                  <Row className="items-center xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] lg:mt-[96px] rounded-radius3 w-[100%]">
                                    <div className="bg-bluegray_101 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[6%]"></div>
                                    <Text
                                      className="rowtwenty_two"
                                      variant="body8"
                                    >
                                      情景数量
                                    </Text>
                                  </Row>
                                  <Row className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-radius3 w-[100%]">
                                    <div className="bg-deep_orange_400 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[6%]"></div>
                                    <Text
                                      className="rowtwenty_two"
                                      variant="body8"
                                    >
                                      违规次数
                                    </Text>
                                  </Row>
                                </Column>
                                <Column className="items-center justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] pt-[3px] w-[62%]">
                                  <Column className="justify-start w-[100%]">
                                    <Stack className="lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                      <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                        <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                          <div className="absolute border border-bluegray_500_63 border-dashed bottom-[4%] xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] right-[0] w-[91%]"></div>
                                          <Column className="absolute justify-start left-[0] w-[23%]">
                                            <Text
                                              className="columnfivehundredsixty"
                                              variant="body9"
                                            >
                                              违反次数（次）
                                            </Text>
                                            <Text
                                              className="TwoHundred"
                                              variant="body9"
                                            >
                                              200
                                            </Text>
                                            <Text
                                              className="OneHundredFifty_One"
                                              variant="body9"
                                            >
                                              150
                                            </Text>
                                            <Text
                                              className="OneHundred_One"
                                              variant="body9"
                                            >
                                              100
                                            </Text>
                                            <Text
                                              className="Fifty_One"
                                              variant="body9"
                                            >
                                              50
                                            </Text>
                                            <Text
                                              className="Zero_One"
                                              variant="body9"
                                            >
                                              0
                                            </Text>
                                          </Column>
                                        </Stack>
                                        <Column className="absolute bottom-[23%] items-center justify-start right-[0] w-[91%]">
                                          <Line className="bg-bluegray_500_63 h-[1px] w-[100%]" />
                                          <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                          <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                        </Column>
                                      </Stack>
                                      <Row className="absolute bottom-[4%] items-end right-[10%] w-[72%]">
                                        <div className="bg-bluegray_101 xl:h-[113px] 2xl:h-[128px] 3xl:h-[153px] lg:h-[91px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius3 w-[7%]"></div>
                                        <div className="bg-deep_orange_400 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] ml-[4px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_500_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[1px]" />
                                        <div className="bg-bluegray_101 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] rounded-radius3 w-[7%]"></div>
                                        <div className="bg-deep_orange_400 lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] ml-[4px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_500_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[1px]" />
                                        <div className="bg-bluegray_101 2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius3 w-[7%]"></div>
                                        <div className="bg-deep_orange_400 lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] ml-[4px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] rounded-radius3 w-[7%]"></div>
                                      </Row>
                                    </Stack>
                                    <Row className="items-center justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[79%]">
                                      <Text
                                        className="columnfivehundredsixty"
                                        variant="body9"
                                      >
                                        保持合理车距
                                      </Text>
                                      <Text
                                        className="lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] columnfivehundredsixty"
                                        variant="body9"
                                      >
                                        保持合理车速
                                      </Text>
                                      <Text
                                        className="lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] FiveHundredFiftyThree"
                                        variant="body9"
                                      >
                                        让行标志
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                          </Row>
                        </List>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Row className="absolute bg-gray_54 items-center xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] top-[0] w-[100%]">
                  <Row className="items-center lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[94%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      合规性评估报告
                    </Text>
                    <Row className="items-start justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius1 w-[8%]">
                      <Text className="A" as="h1" variant="h1">
                        A
                      </Text>
                      <Text
                        className="OneThousandFiveHundredSeventySeven"
                        variant="body4"
                      >
                        级
                      </Text>
                      <Img
                        src="images/img_signal_19X20.svg"
                        className="signal_Two"
                        alt="signal Two"
                      />
                    </Row>
                    <Column className="items-center lg:ml-[406px] xl:ml-[508px] 2xl:ml-[572px] 3xl:ml-[686px] rounded-radius4 w-[25%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Column className="w-[23%]">
                          <Text className="rowbrand" variant="body9">
                            2022-07-25
                          </Text>
                          <Text
                            className="OneThousandFiveHundredSeventyEight"
                            variant="body9"
                          >
                            创建日期
                          </Text>
                        </Column>
                        <Line className="bg-gray_303 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius05 w-[1px]" />
                        <Column className="items-center w-[15%]">
                          <Text className="rowbrand" variant="body9">
                            14:00:32
                          </Text>
                          <Text
                            className="OneThousandFiveHundredSeventyEight"
                            variant="body9"
                          >
                            开始时间
                          </Text>
                        </Column>
                        <Line className="bg-gray_303 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius05 w-[1px]" />
                        <Column className="items-center w-[15%]">
                          <Text className="rowbrand" variant="body9">
                            00:23:51
                          </Text>
                          <Text
                            className="OneThousandFiveHundredEighty"
                            variant="body9"
                          >
                            测评时长
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Row>
                </Row>
              </Stack>
              <Img
                src="images/img_342deg.png"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[170px] xl:ml-[213px] 2xl:ml-[240px] 3xl:ml-[288px] lg:mt-[193px] xl:mt-[241px] 2xl:mt-[272px] 3xl:mt-[326px] w-[2px]"
                alt="342deg"
              />
              <Img
                src="images/img_342deg.png"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] ml-[4px] lg:mt-[189px] xl:mt-[237px] 2xl:mt-[267px] 3xl:mt-[320px] w-[2px]"
                alt="342deg One"
              />
              <Img
                src="images/img_288deg.png"
                className="xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:ml-[1452px] xl:ml-[1816px] 2xl:ml-[2043px] 3xl:ml-[2451px] xl:mt-[1079px] 2xl:mt-[1214px] 3xl:mt-[1457px] lg:mt-[863px] w-[5px]"
                alt="288deg"
              />
              <Img
                src="images/img_288deg.png"
                className="xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] xl:mt-[1075px] 2xl:mt-[1209px] 3xl:mt-[1451px] lg:mt-[859px] w-[5px]"
                alt="288deg One"
              />
              <Img
                src="images/img_270deg_5.png"
                className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[245px] xl:ml-[306px] 2xl:ml-[345px] 3xl:ml-[414px] lg:mt-[1346px] xl:mt-[1683px] 2xl:mt-[1894px] 3xl:mt-[2272px] rotate-[90deg] w-[5px]"
                alt="270deg"
              />
              <Img
                src="images/img_270deg_6.png"
                className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mt-[1346px] xl:mt-[1683px] 2xl:mt-[1894px] 3xl:mt-[2272px] rotate-[90deg] w-[5px]"
                alt="270deg One"
              />
            </Row>
            <Img
              src="images/img_126deg.svg"
              className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[242px] xl:ml-[303px] 2xl:ml-[341px] 3xl:ml-[409px] lg:mt-[2072px] xl:mt-[2592px] 2xl:mt-[2916px] 3xl:mt-[3498px] w-[4px]"
              alt="126deg"
            />
            <Img
              src="images/img_126deg.svg"
              className="test_126deg_One2"
              alt="126deg One"
            />
            <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:ml-[252px] xl:ml-[315px] 2xl:ml-[355px] 3xl:ml-[426px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] rotate-[126deg] rounded-radius50 shadow-bs3 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
            <Img
              src="images/img_144deg.svg"
              className="test_144deg4"
              alt="144deg"
            />
            <Img
              src="images/img_144deg.svg"
              className="test_144deg_One2"
              alt="144deg One"
            />
            <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] 2xl:ml-[1072px] 3xl:ml-[1287px] lg:ml-[762px] xl:ml-[953px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] rotate-[144deg] rounded-radius50 shadow-bs3 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
          </Column>
        </Column>
        <Column className="absolute items-center justify-start top-[0] w-[100%]">
          <Header3 className="w-[100%]" />
          <Column className="items-center justify-start w-[100%]">
            <Stack className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] w-[100%]">
              <Stack className="test_20220825">
                <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                  <Img
                    src="images/img_image1_16.png"
                    className="imageOne"
                    alt="imageOne"
                  />
                  <Img
                    src="images/img_20220825_16.png"
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
            <Stack className="lg:h-[100px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[18%]">
                  <Text className="FiveHundredFiftyFour" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text className="test_202208292001" variant="body8">
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[12%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="test_202208292001" variant="body8">
                    5/5，执行12:23
                  </Text>
                </Row>
                <Line className="bg-teal_400 h-[4px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
              </Column>
              <Column className="absolute border border-light_green_300 border-solid items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Column className="justify-start mb-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-center xl:mr-[1051px] 2xl:mr-[1182px] 3xl:mr-[1419px] lg:mr-[840px] w-[11%]">
                    <Img
                      src="images/img_checkmark_1.svg"
                      className="close5"
                      alt="checkmark One"
                    />
                    <Text className="rowplay1" variant="body4">
                      任务已完成
                    </Text>
                  </Row>
                  <Button
                    className="font-normal xl:ml-[1078px] 2xl:ml-[1212px] 3xl:ml-[1455px] lg:ml-[861px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[9%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillBlueA400"
                  >
                    再次运行
                  </Button>
                </Column>
              </Column>
            </Stack>
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
        <Stack className="absolute lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] inset-x-[0] mx-[auto] top-[26%] w-[96%]">
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
                                className="absolute right-[25%] top-[6%] rowbrand"
                                variant="body9"
                              >
                                00:40
                              </Text>
                              <Text className="time4" variant="body9">
                                00:40
                              </Text>
                              <Text
                                className="absolute right-[36%] top-[6%] rowbrand"
                                variant="body9"
                              >
                                2020-09-09 21:00:02
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
                            <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                              <Text className="columntime_one" variant="body9">
                                01:23
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
                          className="absolute right-[36%] top-[20%] rowbrand"
                          variant="body9"
                        >
                          2020-09-09 21:00:02
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
        <Column className="absolute bg-white_A700 inset-x-[0] items-center justify-start mx-[auto] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] top-[25%] w-[96%]">
          <Column className="items-center justify-start w-[100%]">
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
          </Column>
        </Column>
        <Line className="absolute bg-bluegray_200 lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] right-[1%] rounded-radius2 top-[26%] w-[4px]" />
      </Stack>
    </>
  );
};

export default Page11;
