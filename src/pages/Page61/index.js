import React from "react";

import { Column, Stack, Img, Text, Row, Line, Button } from "components";
import Header1 from "components/Header/Header1";

const Page61 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[108px] xl:pb-[135px] 2xl:pb-[152px] 3xl:pb-[182px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
            <Stack className="bottom-[0] test_20220825">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_47.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Img
                  src="images/img_20220825_46.png"
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
            <Header1 className="absolute top-[0] w-[100%]" />
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
          </Stack>
          <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
            <Stack className="lg:h-[100px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] w-[100%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[17%]">
                  <Text className="OneThousandSixtySeven" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text className="test_202208292002" variant="body8">
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[6%]">
                  <Text className="FiveHundredFiftyFour" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="test_151223" variant="body8">
                    --
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[4px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
              </Column>
              <Column className="absolute border border-gray_201 border-solid items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Column className="justify-start mb-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-center xl:mr-[1051px] 2xl:mr-[1182px] 3xl:mr-[1419px] lg:mr-[840px] w-[11%]">
                    <Img
                      src="images/img_close_24X24.svg"
                      className="close5"
                      alt="close"
                    />
                    <Text className="rowplay1" variant="body4">
                      任务已取消
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
                <Column className="justify-start ml-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[18%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    测试过程预览
                  </Text>
                  <div className="bg-gray_401 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
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
                <Column className="justify-start ml-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[30%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    测试报告预览
                  </Text>
                  <div className="bg-gray_401 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                </Column>
                <Img
                  src="images/img_rectangle349.png"
                  className="Rectangle3491"
                  alt="Rectangle349"
                />
              </Row>
            </Row>
            <Line className="bg-gray_201 h-[1px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[100%]" />
            <Text className="columntwothousandthreehundredsix" variant="body4">
              增强测试方法设置
            </Text>
            <Column className="bg-gray_54 justify-start xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius8 w-[84%]">
              <Column className="justify-start 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[52%]">
                <Row className="items-start 3xl:mr-[117px] lg:mr-[69px] xl:mr-[87px] 2xl:mr-[98px] w-[83%]">
                  <Column className="justify-start mt-[1px] w-[26%]">
                    <Text className="columnfivehundredsixty" variant="body8">
                      测试方法：故障注入
                    </Text>
                    <div className="bg-gray_401 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[21%]"></div>
                  </Column>
                  <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                  <Text
                    className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] rowbrand"
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
                <Column className="justify-start lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] mt-[3px] w-[74%]">
                  <Row className="items-center w-[100%]">
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
                  <Row className="items-center lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[54%]">
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
                </Column>
              </Column>
            </Column>
            <Line className="bg-gray_201 h-[1px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[100%]" />
            <Text className="columntwothousandthreehundredsix" variant="body4">
              测试科目
            </Text>
            <Column
              className="bg-cover bg-repeat lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] items-center justify-end lg:ml-[418px] xl:ml-[523px] 2xl:ml-[588px] 3xl:ml-[706px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] lg:w-[142px] xl:w-[177px] 2xl:w-[200px] 3xl:w-[240px]"
              style={{ backgroundImage: "url('images/img_group395.svg')" }}
            >
              <Text className="columnsevenhundredninetynine" variant="body8">
                尚未开始任务，请耐心等待
              </Text>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page61;
