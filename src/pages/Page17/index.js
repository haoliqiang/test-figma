import React from "react";

import {
  Column,
  Text,
  Line,
  Row,
  Img,
  SelectBox,
  Stack,
  Button,
} from "components";

const Page17 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc justify-start mx-[auto] lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] w-[100%]">
        <Text
          className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] text-black_900_e5 w-[auto]"
          as="h5"
          variant="h5"
        >
          导航类
        </Text>
        <Column className="items-center lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              导航
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
        </Column>
        <Row className="bg-blue_A400 font-alibabapuhuiti1 items-center lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] w-[77%]">
          <Row className="items-center lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] w-[13%]">
            <Img
              src="images/img_reply.svg"
              className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px] mb-[1px] w-[7%]"
              alt="reply"
            />
            <Text
              className="font-normal lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] text-white_A700 tracking-ls1 w-[auto]"
              variant="body7"
            >
              自动驾驶安全验证平台
            </Text>
          </Row>
          <Row className="font-pingfangsc items-center justify-center lg:ml-[53px] xl:ml-[67px] 2xl:ml-[75px] 3xl:ml-[90px] w-[34%]">
            <Text className="TwoThousandNinetySix" variant="body8">
              首页
            </Text>
            <Text
              className="font-semibold mb-[1px] lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] text-white_A700 w-[auto]"
              variant="body8"
            >
              系统测试
            </Text>
            <Text
              className="font-normal lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] mt-[1px] not-italic text-white_A700_a2 w-[auto]"
              variant="body8"
            >
              可信赖评估
            </Text>
            <Text
              className="lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] TwoThousandNinetySix"
              variant="body8"
            >
              任务
            </Text>
            <Text
              className="lg:ml-[33px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] TwoThousandNinetySix"
              variant="body8"
            >
              资源库
            </Text>
          </Row>
          <Row className="font-alibabapuhuiti1 items-start justify-center lg:ml-[167px] xl:ml-[209px] 2xl:ml-[235px] 3xl:ml-[282px] w-[21%]">
            <SelectBox
              className="font-normal mt-[2px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-white_A700 w-[33%]"
              placeholderClassName="text-white_A700"
              name="FrameTen"
              placeholder="Apollo-V5.5"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_16X16.svg"
                  className="mr-[0] lg:w-[8px] lg:h-[9px] xl:w-[10px] xl:h-[11px] 2xl:w-[11px] 2xl:h-[12px] 3xl:w-[14px] 3xl:h-[15px]"
                  alt="arrow_down"
                />
              }
              size="sm"
            ></SelectBox>
            <Row className="font-pingfangsc items-start justify-center lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] w-[45%]">
              <Img
                src="images/img_ellipse5.png"
                className="lg:h-[11px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] rounded-radius50 lg:w-[10px] xl:w-[13px] 2xl:w-[14px] 3xl:w-[17px]"
                alt="EllipseFive"
              />
              <SelectBox
                className="font-normal lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] mt-[2px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-white_A700 w-[78%]"
                placeholderClassName="text-white_A700"
                name="FrameNine"
                placeholder="欢迎，王志杰"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_16X16.svg"
                    className="mr-[0] lg:w-[8px] lg:h-[9px] xl:w-[10px] xl:h-[11px] 2xl:w-[11px] 2xl:h-[12px] 3xl:w-[14px] 3xl:h-[15px]"
                    alt="arrow_down"
                  />
                }
                size="sm"
              ></SelectBox>
            </Row>
            <Img
              src="images/img_help.svg"
              className="lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] mt-[2px] arrowleft5"
              alt="help"
            />
          </Row>
        </Row>
        <Column className="font-pingfangsc items-center xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[85px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              面包屑
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
        </Column>
        <Column className="font-pingfangsc justify-end lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:pt-[13px] xl:pt-[16px] 2xl:pt-[19px] 3xl:pt-[22px] lg:px-[13px] xl:px-[16px] 2xl:px-[19px] 3xl:px-[22px] w-[77%]">
          <Row className="items-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] mr-[auto] w-[11%]">
            <Text className="FiveHundredFiftyTwo" variant="body9">
              任务
            </Text>
            <Img
              src="images/img_checkmark_3.svg"
              className="3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] ml-[4px] 3xl:w-[10px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px]"
              alt="checkmark"
            />
            <Text className="SevenHundredSeventyNine" variant="body9">
              自动驾驶合规性评估
            </Text>
          </Row>
          <Line className="bg-gray_201 h-[1px] lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[99%]" />
        </Column>
        <Column className="font-pingfangsc items-center xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[85px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              Tabs
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
        </Column>
        <Column className="font-alibabapuhuiti1 items-center justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[44px] w-[25%]">
          <Row className="items-start justify-between pt-[3px] w-[100%]">
            <Column className="items-center justify-start w-[8%]">
              <Text
                className="font-normal text-blue_A400 w-[auto]"
                variant="body6"
              >
                全部
              </Text>
              <div className="bg-blue_A400 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius15 w-[100%]"></div>
            </Column>
            <Text className="FiveHundredFiftyThree" variant="body6">
              被测算法
            </Text>
            <Text className="FiveHundredFiftyThree" variant="body6">
              被测域控制器
            </Text>
            <Text className="FiveHundredFiftyThree" variant="body6">
              被测工控机
            </Text>
          </Row>
        </Column>
        <Column className="border border-deep_purple_A200 border-solid font-alibabapuhuiti1 items-center justify-start lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[79%]">
          <Stack className="lg:h-[51px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:px-[14px] xl:px-[18px] 2xl:px-[20px] 3xl:px-[24px] w-[100%]">
            <Line className="absolute bg-gray_201 bottom-[0] h-[1px] inset-x-[0] mx-[auto] rounded-radius05 w-[96%]" />
            <Text
              className="absolute bg-blue_100 font-normal left-[19%] not-italic lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] py-[2px] rounded-radius10 text-blue_A400_ab top-[0] w-[34px]"
              variant="body8"
            >
              99+
            </Text>
            <Row className="absolute bottom-[0] font-pingfangsc items-start justify-between left-[0] lg:pt-[2px] 2xl:pt-[3px] xl:pt-[3px] 3xl:pt-[4px] w-[18%]">
              <Column className="items-center justify-start mt-[1px] w-[38%]">
                <Text
                  className="font-semibold text-blue_A400 w-[auto]"
                  variant="body3"
                >
                  评估概览
                </Text>
                <Line className="bg-blue_A400 h-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[100%]" />
              </Column>
              <Text className="columnfivehundredsixty" variant="body3">
                测试记录
              </Text>
            </Row>
          </Stack>
          <Stack className="lg:h-[51px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:px-[14px] xl:px-[18px] 2xl:px-[20px] 3xl:px-[24px] w-[100%]">
            <Line className="absolute bg-gray_201 bottom-[0] h-[1px] inset-x-[0] mx-[auto] rounded-radius05 w-[96%]" />
            <Text className="TwoThousandOneHundredTen" variant="body3">
              评估概览
            </Text>
            <Text
              className="absolute bg-blue_100 font-alibabapuhuiti1 font-normal left-[19%] not-italic lg:px-[2px] 2xl:px-[3px] xl:px-[3px] 3xl:px-[4px] py-[2px] rounded-radius10 text-blue_A400_ab top-[0] w-[34px]"
              variant="body8"
            >
              99+
            </Text>
            <Column className="absolute bottom-[0] font-pingfangsc items-center justify-start left-[11%] w-[7%]">
              <Text
                className="font-semibold text-blue_A400 w-[auto]"
                variant="body3"
              >
                测试记录
              </Text>
              <Line className="bg-blue_A400 h-[3px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[100%]" />
            </Column>
          </Stack>
        </Column>
        <Column className="font-pingfangsc items-center xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[85px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              分页
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
        </Column>
        <Row className="font-pingfangsc items-center lg:mb-[259px] xl:mb-[325px] 2xl:mb-[365px] 3xl:mb-[438px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[27%]">
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
              className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-bluegray_800 w-[53%]"
              placeholderClassName="text-bluegray_800"
              name="Group122"
              placeholder="10条/页"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_1.svg"
                  className="lg:w-[8px] lg:h-[9px] lg:mr-[3px] xl:w-[10px] xl:h-[11px] xl:mr-[3px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[4px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[5px]"
                  alt="arrow_down"
                />
              }
              shape="RoundedBorder4"
              size="md"
              variant="OutlineGray300"
            ></SelectBox>
          </Row>
          <Row className="items-center justify-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[43%]">
            <Img
              src="images/img_arrowleft.svg"
              className="arrowleft5"
              alt="arrowleft"
            />
            <Stack className="lg:h-[11px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] ml-[3px] w-[79%]">
              <div className="absolute bg-gray_54 lg:h-[11px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] left-[0] rounded-radius3 lg:w-[10px] xl:w-[13px] 2xl:w-[14px] 3xl:w-[17px]"></div>
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
              className="lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] arrowleft5"
              alt="arrowright"
            />
          </Row>
          <Row className="items-center justify-between 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] rounded-radius4 w-[19%]">
            <Text className="rowbrand" variant="body9">
              前往
            </Text>
            <Button
              className="font-normal not-italic 3xl:text-[10px] lg:text-[6px] xl:text-[7px] 2xl:text-[8px] text-center w-[50%]"
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
      </Column>
    </>
  );
};

export default Page17;
