import React from "react";

import {
  Column,
  Stack,
  Img,
  Text,
  Row,
  Line,
  List,
  Button,
  Slider,
  SelectBox,
} from "components";
import Header1 from "components/Header/Header1";

const Page38 = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[36px] xl:pb-[45px] 2xl:pb-[51px] 3xl:pb-[61px] w-[100%]">
        <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
          <Stack className="bottom-[0] test_20220825">
            <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
              <Img
                src="images/img_image1_26.png"
                className="imageOne"
                alt="imageOne"
              />
              <Img
                src="images/img_20220825_26.png"
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
                道路左转
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
          <Text className="TwoThousandOneHundredTen" variant="body3">
            测试概览
          </Text>
          <Text
            className="absolute bg-blue_100 font-alibabapuhuiti font-normal left-[18%] lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[2px] rounded-radius95 text-blue_A400_ab top-[0] w-[34px]"
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
            <Line className="bg-blue_A400 h-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[100%]" />
          </Column>
        </Stack>
        <Column className="bg-white_A700 items-center justify-start lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[96%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-start w-[94%]">
                <Text className="ID2" variant="body9">
                  ID
                </Text>
                <Column className="font-pingfangsc items-center justify-start lg:ml-[125px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] mt-[2px] w-[4%]">
                  <Text className="columnfivehundredsixty" variant="body9">
                    任务名称
                  </Text>
                </Column>
                <Row className="font-pingfangsc items-start justify-center lg:ml-[137px] xl:ml-[171px] 2xl:ml-[193px] 3xl:ml-[231px] w-[5%]">
                  <Text className="rowsixhundredfiftythree" variant="body9">
                    提交时间
                  </Text>
                  <Img
                    src="images/img_offer.svg"
                    className="arrowleft"
                    alt="offer"
                  />
                </Row>
                <Text
                  className="lg:ml-[137px] xl:ml-[172px] 2xl:ml-[194px] 3xl:ml-[232px] rowfivethousandonehundredfiftyfour"
                  variant="body9"
                >
                  任务状态
                </Text>
                <Row className="font-pingfangsc items-start justify-center lg:ml-[111px] xl:ml-[139px] 2xl:ml-[157px] 3xl:ml-[188px] w-[5%]">
                  <Text className="rowsixhundredfiftythree" variant="body9">
                    执行时长
                  </Text>
                  <Img
                    src="images/img_offer.svg"
                    className="arrowleft"
                    alt="offer One"
                  />
                </Row>
                <Text
                  className="xl:ml-[118px] 2xl:ml-[133px] 3xl:ml-[159px] lg:ml-[94px] rowfivethousandonehundredfiftyfour"
                  variant="body9"
                >
                  任务结果
                </Text>
                <Text
                  className="xl:ml-[123px] 2xl:ml-[139px] 3xl:ml-[166px] lg:ml-[98px] rowfivethousandonehundredfiftyfour"
                  variant="body9"
                >
                  操作
                </Text>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
            </Column>
          </Column>
        </Column>
        <List className="gap-[0] min-h-[auto] w-[96%]" orientation="vertical">
          <Column className="listu1230">
            <Column className="items-center justify-start w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Row className="items-end w-[98%]">
                  <Text className="U1230" variant="body9">
                    U1230
                  </Text>
                  <Text
                    className="ThreeThousandOneHundredThirtySix"
                    variant="body9"
                  >
                    任务名称任务名称任务名称
                  </Text>
                  <Text className="language16" variant="body9">
                    2022-08-12 20:23:12
                  </Text>
                  <Text
                    className="font-pingfangsc lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] xl:ml-[120px] 2xl:ml-[136px] 3xl:ml-[163px] lg:ml-[96px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] columntwentyseven"
                    variant="body9"
                  >
                    排队中
                  </Text>
                  <Text className="OneHundredTwentyThree2" variant="body9">
                    --
                  </Text>
                  <Column className="font-pingfangsc justify-start lg:ml-[129px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] p-[2px] w-[4%]">
                    <Text
                      className="columnthreethousandonehundredthirtyeight"
                      variant="body9"
                    >
                      --
                    </Text>
                  </Column>
                  <Button
                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_eye.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                      alt="eye"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_close.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                      alt="close"
                    />
                  </Button>
                </Row>
                <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
              </Column>
            </Column>
          </Column>
          <footer className="bg-white_A700 my-[0] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-end w-[98%]">
                <Text className="U1230" variant="body9">
                  U1230
                </Text>
                <Text
                  className="ThreeThousandOneHundredThirtySix"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text className="language16" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="ThreeThousandOneHundredForty" variant="body9">
                  <span className="text-blue_A400 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    运行中{" "}
                  </span>
                  <span className="text-blue_A400 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    2/20
                  </span>
                </Text>
                <Text
                  className="xl:ml-[122px] 2xl:ml-[138px] 3xl:ml-[165px] lg:ml-[98px] U1230"
                  variant="body9"
                >
                  1:23
                </Text>
                <Column className="font-pingfangsc justify-start lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] p-[2px] w-[4%]">
                  <Text
                    className="columnthreethousandonehundredthirtyeight"
                    variant="body9"
                  >
                    --
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="eye One"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_contrast.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="contrast"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
            </Column>
          </footer>
          <footer className="bg-white_A700 my-[0] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-end w-[98%]">
                <Text className="U1230" variant="body9">
                  U1230
                </Text>
                <Text
                  className="ThreeThousandOneHundredThirtySix"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text className="language16" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="ThreeThousandOneHundredForty" variant="body9">
                  <span className="text-teal_400 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    已完成{" "}
                  </span>
                  <span className="text-teal_400 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    3/3
                  </span>
                </Text>
                <Text className="time_One2" variant="body9">
                  1:23
                </Text>
                <Column className="bg-gray_54 font-pingfangsc items-center justify-end lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius2 w-[4%]">
                  <Row className="items-start justify-evenly mt-[2px] w-[100%]">
                    <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                    <Text className="rowbrand" variant="body9">
                      不通过
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="eye Two"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_frame_28X28.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
            </Column>
          </footer>
          <footer className="bg-white_A700 my-[0] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-end w-[98%]">
                <Text className="U1230" variant="body9">
                  U1230
                </Text>
                <Text
                  className="ThreeThousandOneHundredThirtySix"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text className="language16" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="ThreeThousandOneHundredForty" variant="body9">
                  <span className="text-teal_400 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    已完成{" "}
                  </span>
                  <span className="text-teal_400 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    3/3
                  </span>
                </Text>
                <Text className="time_One2" variant="body9">
                  1:23
                </Text>
                <Column className="bg-gray_54 font-pingfangsc justify-end lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius2 w-[4%]">
                  <Row className="items-start mr-[auto] mt-[2px] w-[74%]">
                    <div className="bg-teal_400 mt-[2px] rounded-radius50 plus_One"></div>
                    <Text className="rowellipsenine_two" variant="body9">
                      通过
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="eye Three"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_frame_28X28.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame One"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
            </Column>
          </footer>
          <footer className="bg-white_A700 my-[0] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-end w-[98%]">
                <Text className="U1230" variant="body9">
                  U1230
                </Text>
                <Text
                  className="ThreeThousandOneHundredThirtySix"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text className="language16" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="ThreeThousandOneHundredForty" variant="body9">
                  <span className="text-red_600 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    已中断{" "}
                  </span>
                  <span className="text-red_600 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    2/4
                  </span>
                </Text>
                <Text className="time_One2" variant="body9">
                  1:23
                </Text>
                <Column className="font-pingfangsc justify-start lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] p-[2px] w-[4%]">
                  <Text
                    className="columnthreethousandonehundredthirtyeight"
                    variant="body9"
                  >
                    --
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="eye Four"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_frame_28X28.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Two"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
            </Column>
          </footer>
          <footer className="bg-white_A700 my-[0] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-end w-[98%]">
                <Text className="U1230" variant="body9">
                  U1230
                </Text>
                <Text
                  className="ThreeThousandOneHundredThirtySix"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text className="language16" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text
                  className="font-pingfangsc lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] xl:ml-[120px] 2xl:ml-[136px] 3xl:ml-[163px] lg:ml-[96px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] columnfiftyseven"
                  variant="body9"
                >
                  已终止
                </Text>
                <Text className="OneHundredTwentyThree2" variant="body9">
                  --
                </Text>
                <Column className="font-pingfangsc justify-start lg:ml-[129px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] p-[2px] w-[4%]">
                  <Text
                    className="columnthreethousandonehundredthirtyeight"
                    variant="body9"
                  >
                    --
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="eye Five"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_frame_28X28.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Three"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
            </Column>
          </footer>
          <footer className="bg-white_A700 my-[0] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-end w-[98%]">
                <Text className="U1230" variant="body9">
                  U1230
                </Text>
                <Text
                  className="ThreeThousandOneHundredThirtySix"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text className="language16" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="ThreeThousandOneHundredForty" variant="body9">
                  已取消
                </Text>
                <Text className="OneHundredTwentyThree2" variant="body9">
                  --
                </Text>
                <Column className="font-pingfangsc justify-start lg:ml-[129px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] p-[2px] w-[4%]">
                  <Text
                    className="columnthreethousandonehundredthirtyeight"
                    variant="body9"
                  >
                    --
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="eye Six"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_frame_28X28.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Four"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
            </Column>
          </footer>
          <footer className="bg-white_A700 my-[0] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-end w-[98%]">
                <Text className="U1230" variant="body9">
                  U1230
                </Text>
                <Text
                  className="ThreeThousandOneHundredThirtySix"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text className="language16" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="ThreeThousandOneHundredForty" variant="body9">
                  <span className="text-red_600 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    已中断{" "}
                  </span>
                  <span className="text-red_600 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    2/4
                  </span>
                </Text>
                <Text className="time_One2" variant="body9">
                  1:23
                </Text>
                <Column className="font-pingfangsc justify-start lg:ml-[122px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] p-[2px] w-[4%]">
                  <Text
                    className="columnthreethousandonehundredthirtyeight"
                    variant="body9"
                  >
                    --
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="eye Seven"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_frame_28X28.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Five"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
            </Column>
          </footer>
          <footer className="bg-white_A700 my-[0] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-end w-[98%]">
                <Text className="U1230" variant="body9">
                  U1230
                </Text>
                <Text
                  className="ThreeThousandOneHundredThirtySix"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text className="language16" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="ThreeThousandOneHundredForty" variant="body9">
                  已取消
                </Text>
                <Text className="OneHundredTwentyThree2" variant="body9">
                  --
                </Text>
                <Column className="font-pingfangsc justify-start lg:ml-[129px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] p-[2px] w-[4%]">
                  <Text
                    className="columnthreethousandonehundredthirtyeight"
                    variant="body9"
                  >
                    --
                  </Text>
                </Column>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[154px] lg:ml-[91px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="eye Eight"
                  />
                </Button>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_frame_28X28.svg"
                    className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                    alt="Frame Six"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]" />
            </Column>
          </footer>
          <Slider
            slidesToShow={9}
            activeIndex={sliderState}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            activeSlideCSS="scale-[1.00] my-[0]"
            ref={sliderRef}
            className="bg-white_A700 my-[0] w-[100%]"
            items={[...Array(27)].map(() => (
              <React.Fragment key={Math.random()}>
                <Line className="bg-gray_201 h-[1px] w-[100%]" />
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
        <Column className="items-end lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:px-[22px] xl:px-[28px] 2xl:px-[32px] 3xl:px-[38px] w-[100%]">
          <Row className="items-center justify-end w-[36%]">
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
                name="Group3273"
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
            <Row className="items-center justify-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[43%]">
              <Img
                src="images/img_arrowleft.svg"
                className="arrowleft2"
                onClick={() => sliderRef.current?.slidePrev()}
                alt="arrowleft"
              />
              <Stack className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[3px] w-[79%]">
                <div className="bg-gray_54 left-[0] rounded-radius3 lightbulb"></div>
                <Row className="absolute bottom-[5%] items-start justify-between right-[0] w-[96%]">
                  <Text className="One19" variant="body9">
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
                className="arrowright1"
                onClick={() => sliderRef.current?.slideNext()}
                alt="arrowright"
              />
            </Row>
            <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] rounded-radius4 w-[19%]">
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
        </Column>
      </Column>
    </>
  );
};

export default Page38;
