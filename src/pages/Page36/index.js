import React from "react";

import { Column, Stack, Img, Text, Row, Line, Button } from "components";
import Header1 from "components/Header/Header1";
import Footer2 from "components/Footer/Footer2";

const Page36 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[54px] xl:pb-[68px] 2xl:pb-[77px] 3xl:pb-[92px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
            <Stack className="bottom-[0] test_20220825">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_24.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Img
                  src="images/img_20220825_24.png"
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
              <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[8%]">
                <Text className="FiveHundredFiftyTwo" variant="body9">
                  系统测试
                </Text>
                <Img
                  src="images/img_checkmark_3.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text className="SevenHundredSeventyNine" variant="body9">
                  道路左转
                </Text>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
            </Column>
            <Header1 className="absolute top-[0] w-[100%]" />
          </Stack>
          <Stack className="3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:px-[19px] xl:px-[24px] 2xl:px-[28px] 3xl:px-[33px] w-[100%]">
            <Line className="absolute bg-gray_201 bottom-[0] h-[1px] inset-x-[0] mx-[auto] rounded-radius05 w-[96%]" />
            <Row className="absolute items-start justify-center left-[11%] top-[0] w-[10%]">
              <Text className="TwoThousandFourHundredFourteen" variant="body3">
                测试记录
              </Text>
              <Text className="Frame1982" variant="body8">
                99+
              </Text>
            </Row>
            <Column className="absolute bottom-[0] items-center justify-start left-[0] w-[7%]">
              <Text
                className="font-semibold text-blue_A400 w-[auto]"
                variant="body3"
              >
                测试概览
              </Text>
              <Line className="bg-blue_A400 h-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[100%]" />
            </Column>
          </Stack>
          <Row className="items-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[89%]">
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
          <Row className="items-center lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[58%]">
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
          <Line className="bg-gray_201 h-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[96%]" />
          <Text
            className="lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] columntwothousandthreehundredsix"
            variant="body4"
          >
            增强测试方法设置
          </Text>
          <Footer2 className="bg-gray_54 lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] rounded-radius8 w-[80%]" />
          <Row className="items-center lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[25%]">
            <Button
              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[27%]"
              shape="RoundedBorder4"
              size="lg"
              variant="FillBlueA400"
            >
              开始运行
            </Button>
            <Row className="items-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[64%]">
              <Text className="ThreeThousandOneHundredNineteen" variant="body9">
                上次测试时长：
              </Text>
              <Text className="test_20220828204" variant="body8">
                2022-08-28 20:40:20
              </Text>
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page36;
