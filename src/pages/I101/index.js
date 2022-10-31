import React from "react";

import { Column, Stack, Img, Text, Row, Button, Line } from "components";
import Header from "components/Header/Header";

const I101Page = () => {
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
                    src="images/img_image1_11.png"
                    className="imageOne"
                    alt="imageOne"
                  />
                  <Img
                    src="images/img_20220825_11.png"
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
                        <Column className="bg-gray_202 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius4 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]">
                          <Button
                            className="flex items-center justify-center rounded-radius50 user"
                            size="smIcn"
                            variant="icbFillGray500"
                          >
                            <Img
                              src="images/img_close_20X20.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="close"
                            />
                          </Button>
                        </Column>
                        <Text className="rowclose" variant="body4">
                          任务已取消
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
                      <Row className="items-start justify-between w-[7%]">
                        <Text className="TwoHundredEightySix" variant="body8">
                          任务进度：
                        </Text>
                        <Text className="FiveHundredThirtySix" variant="body8">
                          --
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
                  <Line className="bg-gray_202 h-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]" />
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
            <Row className="items-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[55%]">
              <Text className="rowtwohundredninetyfour" variant="body7">
                测试结果
              </Text>
              <Column
                className="bg-cover bg-repeat lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] items-center justify-end lg:ml-[372px] xl:ml-[466px] 2xl:ml-[524px] 3xl:ml-[629px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] 2xl:px-[11px] 3xl:px-[13px] lg:px-[7px] xl:px-[9px] lg:w-[142px] xl:w-[177px] 2xl:w-[200px] 3xl:w-[240px]"
                style={{ backgroundImage: "url('images/img_group395.svg')" }}
              >
                <Text className="columnfivehundredfifty" variant="body8">
                  任务已取消
                </Text>
              </Column>
            </Row>
            <Line className="bg-gray_205 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] lg:ml-[1018px] xl:ml-[1273px] 2xl:ml-[1432px] 3xl:ml-[1719px] xl:mt-[117px] 2xl:mt-[132px] 3xl:mt-[158px] lg:mt-[93px] rounded-radius3 w-[6px]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default I101Page;
