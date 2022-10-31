import React from "react";

import { Column, Stack, Img, Text, Row, Button, Line } from "components";
import Header from "components/Header/Header";

const I06Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Stack className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] w-[100%]">
              <Stack className="test_20220825">
                <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                  <Img
                    src="images/img_image1_7.png"
                    className="imageOne"
                    alt="imageOne"
                  />
                  <Img
                    src="images/img_20220825_7.png"
                    className="test_20220825"
                    alt="20220825"
                  />
                </Stack>
                <Column className="absolute bg-gradient1  justify-end left-[0] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[65%]">
                  <Text
                    className="columntwohundredeightytwo"
                    as="h6"
                    variant="h6"
                  >
                    道路左转
                  </Text>
                </Column>
              </Stack>
              <Column className="absolute bg-bluegray_50_75 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] top-[1%] w-[100%]">
                <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] w-[7%]">
                  <Row className="items-start justify-evenly w-[100%]">
                    <Text className="OneHundredFiftyThree" variant="body9">
                      任务
                    </Text>
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark2"
                      alt="checkmark"
                    />
                    <Text className="TwoHundredEightyFour" variant="body9">
                      道路左转
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Column className="border border-gray_202 border-solid items-center justify-end lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] p-[1px] rounded-radius8 w-[96%]">
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[97%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Row className="items-center w-[12%]">
                        <Button
                          className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray202"
                        >
                          <Img
                            src="images/img_vector_36X36.svg"
                            className="flex items-center justify-center lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px]"
                            alt="Vector"
                          />
                        </Button>
                        <Text className="rowvector" variant="body4">
                          任务已完成
                        </Text>
                      </Row>
                      <Row className="items-center w-[18%]">
                        <Text className="TwoHundredEightySix" variant="body8">
                          任务提交时间：
                        </Text>
                        <Text className="test_20220829200" variant="body8">
                          2022-08-29 20:04:29
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                      <Row className="items-start w-[12%]">
                        <Text className="TwoHundredFortyTwo" variant="body8">
                          任务进度：
                        </Text>
                        <Text className="test_20220829200" variant="body8">
                          1/1，执行12:23
                        </Text>
                      </Row>
                      <Button
                        className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA401"
                      >
                        再次运行
                      </Button>
                    </Row>
                  </Column>
                  <Line className="bg-green_A700 h-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
                </Column>
              </Column>
            </Column>
            <Row className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[11%]">
              <Text className="columnu1230" variant="body8">
                测试描述
              </Text>
              <Text className="Group355" variant="body9">
                Apollo-V5.5
              </Text>
            </Row>
            <Text className="TwoHundredEightyNine" variant="body8">
              道路左传，有左侧车辆切入
            </Text>
            <Row className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[58%]">
              <Column className="bg-gradient2  border border-gray_202 border-solid items-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[58%]">
                <Row className="items-start justify-between w-[98%]">
                  <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[19%]">
                    <Text className="columnu1230" variant="body8">
                      测试过程预览
                    </Text>
                    <div className="bg-gray_500 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat items-center justify-start lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius4 w-[67%]"
                    style={{
                      backgroundImage: "url('images/img_group1715.png')",
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
              <Column className="bg-gradient2  border border-gray_202 border-solid items-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[37%]">
                <Row className="items-start justify-between mt-[1px] w-[97%]">
                  <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[31%]">
                    <Text className="columnu1230" variant="body8">
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
            <Line className="bg-gray_202 h-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] rounded-radius05 w-[96%]" />
            <Text className="TwoHundredNinetyTwo" variant="body7">
              测试结果
            </Text>
            <Column className="items-center justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] pt-[3px] w-[96%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[86%]">
                  <Column className="items-center mt-[1px] w-[2%]">
                    <Text className="TwoHundredFortyTwo" variant="body9">
                      案例
                    </Text>
                  </Column>
                  <Text className="OneThousandOneHundredForty" variant="body9">
                    任务状态
                  </Text>
                  <Text
                    className="OneThousandOneHundredFortyOne"
                    variant="body9"
                  >
                    发现事故
                  </Text>
                  <Column className="items-center xl:ml-[116px] 2xl:ml-[131px] 3xl:ml-[157px] lg:ml-[93px] w-[4%]">
                    <Text className="TwoHundredFortyTwo" variant="body9">
                      完成时间
                    </Text>
                  </Column>
                  <Column className="items-center lg:ml-[135px] xl:ml-[169px] 2xl:ml-[191px] 3xl:ml-[229px] mt-[1px] w-[4%]">
                    <Text className="TwoHundredFortyTwo" variant="body9">
                      运行时长
                    </Text>
                  </Column>
                  <Text
                    className="OneThousandOneHundredFortyFour"
                    variant="body9"
                  >
                    操作
                  </Text>
                </Row>
                <Line className="bg-gray_202 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
              </Column>
              <Stack className="lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[100%]">
                <Button
                  className="absolute font-normal not-italic right-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center top-[23%] w-[8%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA401"
                >
                  添加到测试集
                </Button>
                <Stack className="absolute lg:h-[50px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] w-[100%]">
                  <Column className="absolute items-center justify-start left-[0] w-[71%]">
                    <Row className="items-start w-[100%]">
                      <Column className="bg-white_A700 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                        <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[37%]">
                        <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[42%]">
                          <Column
                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            style={{
                              backgroundImage: "url('images/img_group777.png')",
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
                              className="TwoHundredSixtySix"
                              variant="body9"
                            >
                              具体场景故障案例
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                        <Text
                          className="columntwohundredsixtyeight"
                          variant="body9"
                        >
                          已完成
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[26%]">
                        <Text className="columnone2" variant="body9">
                          逆行1次
                        </Text>
                      </Column>
                      <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[19%]"></div>
                    </Row>
                  </Column>
                  <Line className="absolute bg-gray_202 bottom-[7%] h-[1px] w-[100%]" />
                  <Row className="absolute items-center justify-between right-[10%] top-[26%] w-[17%]">
                    <Text className="columnu1230" variant="body9">
                      05:23
                    </Text>
                    <Button
                      className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                      shape="icbRoundedBorder3"
                      size="mdIcn"
                      variant="icbFillGray102"
                    >
                      <Img
                        src="images/img_frame_2.svg"
                        className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                        alt="Frame"
                      />
                    </Button>
                  </Row>
                  <Text
                    className="absolute right-[36%] top-[36%] columnu1230"
                    variant="body9"
                  >
                    2020-09-09 21:00:02
                  </Text>
                </Stack>
              </Stack>
            </Column>
            <Line className="bg-gray_205 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] lg:ml-[1018px] xl:ml-[1273px] 2xl:ml-[1432px] 3xl:ml-[1719px] lg:mt-[138px] xl:mt-[173px] 2xl:mt-[195px] 3xl:mt-[234px] rounded-radius3 w-[6px]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default I06Page;
