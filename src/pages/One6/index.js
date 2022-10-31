import React from "react";

import { Column, Stack, Img, Text, Row, Line, Button } from "components";
import Header10 from "components/Header/Header10";

const One6Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[128px] xl:pb-[161px] 2xl:pb-[181px] 3xl:pb-[217px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
            <Stack className="bottom-[0] test_20220825">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_57.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Img
                  src="images/img_20220825_56.png"
                  className="test_20220825"
                  alt="20220825"
                />
              </Stack>
              <Column className="absolute bg-gradient1  justify-end left-[0] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[65%]">
                <Text
                  className="columnonethousandfiftyseven"
                  as="h6"
                  variant="h6"
                >
                  道路左转-增强
                </Text>
              </Column>
            </Stack>
            <Column className="absolute justify-end lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] top-[29%] w-[100%]">
              <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[9%]">
                <Text className="FiveHundredFiftyTwo" variant="body9">
                  任务
                </Text>
                <Img
                  src="images/img_checkmark_3.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text className="SevenHundredSeventyNine" variant="body9">
                  道路左转-增强
                </Text>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
            </Column>
            <Header10 className="absolute font-alibabapuhuiti1 top-[0] w-[100%]" />
          </Stack>
          <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
            <Stack className="lg:h-[100px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] w-[100%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-center justify-end ml-[auto] w-[17%]">
                  <Text className="OneThousandSixtySeven" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text
                    className="font-alibabapuhuiti1 test_151223"
                    variant="body8"
                  >
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[14%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="test_151223" variant="body8">
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      1/5
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      ，已执行{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      12:23
                    </span>
                  </Text>
                </Row>
                <Line className="bg-teal_400 h-[4px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
              </Column>
              <Column className="absolute border border-green_A101 border-solid items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
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
                    className="font-normal xl:ml-[1095px] 2xl:ml-[1232px] 3xl:ml-[1479px] lg:ml-[876px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[7%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillBlueA400"
                  >
                    再次运行
                  </Button>
                </Column>
              </Column>
            </Stack>
            <Row className="items-start lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[93%]">
              <Text
                className="font-semibold text-bluegray_800 w-[auto]"
                variant="body4"
              >
                测试描述
              </Text>
              <Text className="description2" variant="body8">
                按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。
              </Text>
            </Row>
            <Row className="items-center xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[61%]">
              <Row className="bg-gray_54 items-start justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[58%]">
                <Column className="items-center justify-start ml-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[18%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    测试过程预览
                  </Text>
                </Column>
                <Column
                  className="bg-cover bg-repeat items-center justify-start mr-[4px] lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius4 w-[66%]"
                  style={{ backgroundImage: "url('images/img_group535.png')" }}
                >
                  <Button
                    className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center rounded-radius50 lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                    size="lgIcn"
                    variant="icbOutlineWhiteA700e51_2"
                  >
                    <Img
                      src="images/img_play_44X44.svg"
                      className="flex items-center justify-center"
                      alt="play"
                    />
                  </Button>
                </Column>
              </Row>
              <Row className="bg-gray_54 items-start justify-between lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[37%]">
                <Column className="items-center justify-start ml-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[30%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    测试报告预览
                  </Text>
                </Column>
                <Stack className="Group629">
                  <Img
                    src="images/img_vector_167X118.svg"
                    className="Vector3"
                    alt="Vector"
                  />
                  <div className="absolute border border-gray_201 border-solid lg:h-[121px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] rounded-radius4 w-[100%]"></div>
                </Stack>
              </Row>
            </Row>
            <Line className="bg-gray_201 h-[1px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[100%]" />
            <Text className="columntwothousandthreehundredsix" variant="body4">
              增强测试方法设置
            </Text>
            <Column className="bg-gray_54 justify-start xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius8 w-[91%]">
              <Column className="justify-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[75%]">
                <Row className="items-center w-[52%]">
                  <Column className="items-center mt-[1px] w-[26%]">
                    <Text className="columnfivehundredsixty" variant="body8">
                      测试方法：故障注入
                    </Text>
                  </Column>
                  <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                  <Text
                    className="TwoThousandThreeHundredThirteen"
                    variant="body8"
                  >
                    控制类：
                  </Text>
                  <Text
                    className="TwoThousandThreeHundredTwelve"
                    variant="body8"
                  >
                    油门失效、刹车失效、刹车响应延迟
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[47%]">
                  <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                  <Text
                    className="TwoThousandThreeHundredThirteen"
                    variant="body8"
                  >
                    控制类：
                  </Text>
                  <Text
                    className="TwoThousandThreeHundredTwelve"
                    variant="body8"
                  >
                    油门失效、刹车失效、刹车响应延迟、转向相应延迟
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[25%]">
                  <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                  <Text
                    className="TwoThousandThreeHundredFifteen"
                    variant="body8"
                  >
                    预警交互类：
                  </Text>
                  <Text
                    className="TwoThousandThreeHundredSixteen"
                    variant="body8"
                  >
                    油门失效、刹车失效
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[100%]">
                  <Column className="items-center justify-start mb-[1px] w-[9%]">
                    <Text className="columnfivehundredsixty" variant="body8">
                      参数空间介绍
                    </Text>
                  </Column>
                  <Text
                    className="rowfourthousandninehundredthirtyfive"
                    variant="body8"
                  >
                    npc 车辆开始位置npc_start_s [580, 600]，
                    npc车辆速度npc_speed[4, 15]，
                    npc切入距主车距离relative_distance[5, 20]
                  </Text>
                </Row>
              </Column>
            </Column>
            <Line className="bg-gray_201 h-[1px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[100%]" />
            <Text className="columntwothousandthreehundredsix" variant="body4">
              采样覆盖度与效果分析
            </Text>
            <Column className="bg-gray_54 items-center justify-start lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
              <Column className="items-center justify-start lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] mt-[4px] w-[100%]">
                <Column className="bg-white_A700 items-center justify-start lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                  <Text
                    className="rowonethousandthreehundredsixtyfour"
                    as="h5"
                    variant="h5"
                  >
                    单变量覆盖热力图
                  </Text>
                  <Column className="items-center justify-start lg:mb-[147px] xl:mb-[185px] 2xl:mb-[208px] 3xl:mb-[249px] lg:mt-[186px] xl:mt-[233px] 2xl:mt-[262px] 3xl:mt-[314px] w-[19%]">
                    <div className="overflow-x-auto w-[100%]">
                      <Stack className="lg:h-[154px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[260px] w-[100%]">
                        <Stack className="absolute bottom-[0] lg:h-[170px] xl:h-[213px] 2xl:h-[240px] 3xl:h-[287px] inset-x-[0] w-[100%]">
                          <Stack className="absolute lg:h-[170px] xl:h-[213px] 2xl:h-[240px] 3xl:h-[287px] w-[100%]">
                            <Row className="absolute bg-gradient10  lg:h-[137px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] inset-x-[0] items-start justify-end mx-[auto] lg:px-[12px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[21px] rounded-radius50 top-[0] lg:w-[136px] xl:w-[170px] 2xl:w-[192px] 3xl:w-[230px]">
                              <Img
                                src="images/img_ellipse94.png"
                                className="lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[13%]"
                                alt="EllipseSixtyOne"
                              />
                              <div className="bg-gradient11  lg:h-[10px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] rounded-radius50 xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px] lg:w-[9px]"></div>
                              <Stack className="lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] lg:mb-[58px] xl:mb-[72px] 2xl:mb-[82px] 3xl:mb-[98px] lg:ml-[38px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] mr-[1px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[21%]">
                                <div className="absolute bg-gradient12  lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] right-[0] rounded-radius21 top-[0] w-[55%]"></div>
                                <div className="absolute bg-gradient13  bottom-[0] lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] left-[0] rounded-radius192 w-[58%]"></div>
                              </Stack>
                            </Row>
                            <Stack
                              className="absolute bg-cover bg-repeat bottom-[0] xl:h-[121px] 2xl:h-[136px] 3xl:h-[163px] lg:h-[96px] px-[3px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group3006.png')",
                              }}
                            >
                              <Column className="absolute inset-x-[0] items-center justify-start mx-[auto] top-[7%] w-[46%]">
                                <Column className="justify-start w-[100%]">
                                  <Img
                                    src="images/img_group632_38X156.svg"
                                    className="lg:h-[28px] xl:h-[34px] 2xl:h-[39px] 3xl:h-[46px] w-[100%]"
                                    alt="Group632"
                                  />
                                  <Text
                                    className="lg:ml-[24px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rowbrand"
                                    variant="body8"
                                  >
                                    该图表暂无数据
                                  </Text>
                                </Column>
                              </Column>
                              <Img
                                src="images/img_group434_23X12.png"
                                className="absolute lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] left-[29%] top-[0] w-[4%]"
                                alt="Group407"
                              />
                            </Stack>
                          </Stack>
                          <Img
                            src="images/img_group434_23X12.png"
                            className="absolute lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] left-[35%] top-[39%] w-[3%]"
                            alt="Group409"
                          />
                          <Img
                            src="images/img_group434_23X12.png"
                            className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] right-[31%] top-[41%] w-[3%]"
                            alt="Group408"
                          />
                          <Img
                            src="images/img_group435_103X129.png"
                            className="absolute 2xl:h-[104px] 3xl:h-[124px] lg:h-[74px] xl:h-[92px] left-[22%] top-[19%] w-[38%]"
                            alt="Group435"
                          />
                        </Stack>
                        <Img
                          src="images/img_group790.png"
                          className="absolute lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] right-[29%] top-[34%] w-[18%]"
                          alt="Group790"
                        />
                      </Stack>
                    </div>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default One6Page;
