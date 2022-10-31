import React from "react";

import { Column, Text, Line, Row, Img, Stack, Button, List } from "components";

const Page18 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc justify-start mx-[auto] lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] w-[100%]">
        <Text
          className="font-semibold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] text-black_900_e5 w-[auto]"
          as="h5"
          variant="h5"
        >
          列表
        </Text>
        <Column className="items-center lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              有复选框+图片+操作按钮
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
        </Column>
        <Column className="bg-white_A700 items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[7px] w-[74%]">
          <Column className="items-center justify-start w-[100%]">
            <Row className="items-start w-[92%]">
              <Text
                className="flex font-alibabapuhuiti1 items-center FiveHundredFiftyThree"
                variant="body9"
              >
                ID
              </Text>
              <Column className="font-pingfangsc items-center justify-start 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[85px] mt-[2px] w-[2%]">
                <Text className="columnfivehundredsixty" variant="body9">
                  案例
                </Text>
              </Column>
              <Row className="font-pingfangsc items-start justify-center lg:ml-[161px] xl:ml-[201px] 2xl:ml-[226px] 3xl:ml-[272px] w-[5%]">
                <Text className="rowsixhundredfiftythree" variant="body9">
                  提交时间
                </Text>
                <Img
                  src="images/img_offer.svg"
                  className="arrowleft5"
                  alt="offer"
                />
              </Row>
              <Text
                className="xl:ml-[124px] 2xl:ml-[140px] 3xl:ml-[168px] lg:ml-[99px] rowfivethousandonehundredfiftyfour"
                variant="body9"
              >
                任务状态
              </Text>
              <Row className="font-pingfangsc items-start justify-center 3xl:ml-[119px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] w-[5%]">
                <Text className="rowsixhundredfiftythree" variant="body9">
                  执行时长
                </Text>
                <Img
                  src="images/img_offer.svg"
                  className="arrowleft5"
                  alt="offer One"
                />
              </Row>
              <Text
                className="lg:ml-[58px] xl:ml-[73px] 2xl:ml-[82px] 3xl:ml-[98px] rowfivethousandonehundredfiftyfour"
                variant="body9"
              >
                任务结果
              </Text>
              <Text
                className="3xl:ml-[101px] lg:ml-[60px] xl:ml-[75px] 2xl:ml-[84px] rowfivethousandonehundredfiftyfour"
                variant="body9"
              >
                操作
              </Text>
            </Row>
            <Line className="bg-gray_300 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]" />
          </Column>
        </Column>
        <Column className="border border-deep_purple_A200 border-solid font-alibabapuhuiti1 items-center justify-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[76%]">
          <Stack className="bg-white_A700 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Row className="items-center justify-evenly w-[100%]">
                <Column className="bg-white_A700 items-center 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[3%]">
                  <div className="bg-white_A700 border border-bluegray_100 border-solid 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] rounded-radius2 arrowleft5"></div>
                </Column>
                <Column className="bg-white_A700 lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[9%]">
                  <Text className="columnu12305" variant="body9">
                    U1230
                  </Text>
                </Column>
                <Column className="bg-white_A700 font-pingfangsc lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[24%]">
                  <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                    <Column
                      className="bg-cover bg-repeat lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-start rounded-radius4 lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                      style={{
                        backgroundImage: "url('images/img_group777.png')",
                      }}
                    >
                      <div className="bg-bluegray_800_63 lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] rounded-radius4 lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"></div>
                    </Column>
                    <Column className="justify-start mb-[2px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[83%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        variant="body9"
                      >
                        道路左转
                      </Text>
                      <Text
                        className="TwoThousandOneHundredThirtyFive"
                        variant="body9"
                      >
                        具体场景故障案例具体场景故障案例具体场...
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="bg-white_A700 font-alibabapuhuiti1 lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[19%]">
                  <Text className="columnu12305" variant="body9">
                    2022-08-12 20:23:12
                  </Text>
                </Column>
                <Column className="bg-white_A700 font-pingfangsc lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[13%]">
                  <Text
                    className="2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[7px] xl:mb-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rowbrand"
                    variant="body9"
                  >
                    排队中
                  </Text>
                </Column>
                <Column className="bg-white_A700 font-alibabapuhuiti1 lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[13%]">
                  <Text className="columnu12305" variant="body9">
                    1:23
                  </Text>
                </Column>
                <Column className="bg-white_A700 font-pingfangsc lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[12%]">
                  <Row className="bg-gray_54 items-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius2 w-[39%]">
                    <div className="bg-red_600 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                    <Text className="rowellipsenine" variant="body9">
                      不通过
                    </Text>
                  </Row>
                </Column>
                <Row className="bg-white_A700 items-center justify-between lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[7%]">
                  <Button
                    className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_eye.svg"
                      className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px]"
                      alt="eye"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center mr-[4px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_close.svg"
                      className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px]"
                      alt="close"
                    />
                  </Button>
                </Row>
              </Row>
            </Column>
            <Line className="absolute bg-gray_300 bottom-[0] h-[1px] w-[100%]" />
          </Stack>
          <Column className="bg-gray_201 items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-center w-[98%]">
                <Button
                  className="flex items-center justify-center arrowleft5"
                  shape="icbRoundedBorder3"
                  size="smIcn"
                  variant="icbFillBlueA400"
                >
                  <Img
                    src="images/img_checkmark_4.svg"
                    className="flex items-center justify-center"
                    alt="checkmark"
                  />
                </Button>
                <Text
                  className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] Six54"
                  variant="body9"
                >
                  U1230
                </Text>
                <Column className="font-pingfangsc items-center lg:ml-[48px] xl:ml-[60px] 2xl:ml-[67px] 3xl:ml-[81px] rounded-radius4 w-[21%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Column
                      className="bg-cover bg-repeat lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-start rounded-radius4 lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                      style={{
                        backgroundImage: "url('images/img_group777.png')",
                      }}
                    >
                      <div className="bg-bluegray_800_63 lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] rounded-radius4 lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"></div>
                    </Column>
                    <Column className="justify-start mb-[2px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[83%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        variant="body9"
                      >
                        道路左转
                      </Text>
                      <Text
                        className="TwoThousandOneHundredThirtyFive"
                        variant="body9"
                      >
                        具体场景故障案例具体场景故障案例具体场...
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="lg:ml-[24px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] Six54"
                  variant="body9"
                >
                  2022-08-12 20:23:12
                </Text>
                <Text
                  className="3xl:ml-[117px] lg:ml-[69px] xl:ml-[86px] 2xl:ml-[97px] columnonehundredseventeen"
                  variant="body9"
                >
                  排队中
                </Text>
                <Text
                  className="2xl:ml-[108px] 3xl:ml-[130px] lg:ml-[77px] xl:ml-[96px] Six54"
                  variant="body9"
                >
                  1:23
                </Text>
                <Column className="bg-gray_54 font-pingfangsc 2xl:ml-[110px] 3xl:ml-[133px] lg:ml-[78px] xl:ml-[98px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius2 w-[4%]">
                  <Row className="items-start mr-[auto] mt-[2px] w-[74%]">
                    <div className="bg-teal_400 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] mt-[2px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                    <Text className="rowellipsenine_two" variant="body9">
                      通过
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:ml-[54px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px]"
                    alt="eye One"
                  />
                </Button>
                <Button
                  className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_close.svg"
                    className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px]"
                    alt="close One"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_300 h-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]" />
            </Column>
          </Column>
        </Column>
        <Column className="bg-white_A700 font-pingfangsc items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[41px] xl:mt-[52px] 2xl:mt-[58px] 3xl:mt-[70px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[7px] w-[74%]">
          <Column className="justify-start w-[100%]">
            <Row className="items-start lg:ml-[25px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] w-[85%]">
              <Column className="items-center justify-start mt-[2px] w-[2%]">
                <Text className="columnfivehundredsixty" variant="body9">
                  案例
                </Text>
              </Column>
              <Text
                className="lg:ml-[164px] xl:ml-[206px] 2xl:ml-[232px] 3xl:ml-[278px] rowsixhundredfiftythree"
                variant="body9"
              >
                任务状态
              </Text>
              <Row className="items-start justify-center 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[75px] xl:ml-[94px] w-[5%]">
                <Text className="rowsixhundredfiftythree" variant="body9">
                  发现事故
                </Text>
                <Img
                  src="images/img_filter_16X16.svg"
                  className="arrowleft5"
                  alt="filter"
                />
              </Row>
              <Row className="items-start justify-center 3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[94px] w-[5%]">
                <Text className="rowsixhundredfiftythree" variant="body9">
                  完成时间
                </Text>
                <Img
                  src="images/img_offer.svg"
                  className="arrowleft5"
                  alt="offer Two"
                />
              </Row>
              <Row className="items-start justify-center xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[155px] lg:ml-[91px] w-[5%]">
                <Text className="rowsixhundredfiftythree" variant="body9">
                  运行时长
                </Text>
                <Img
                  src="images/img_offer.svg"
                  className="arrowleft5"
                  alt="offer Three"
                />
              </Row>
              <Text
                className="3xl:ml-[109px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[91px] rowsixhundredfiftythree"
                variant="body9"
              >
                操作
              </Text>
            </Row>
            <Line className="bg-gray_300 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]" />
          </Column>
        </Column>
        <Column className="border border-deep_purple_A200 border-solid font-pingfangsc items-center justify-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[76%]">
          <Stack className="lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[100%]">
            <Button
              className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[8%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Stack className="absolute lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[100%]">
              <Column className="absolute bg-white_A700 items-center justify-start left-[0] 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[3%]">
                <div className="bg-white_A700 border border-bluegray_100 border-solid 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] rounded-radius2 arrowleft5"></div>
              </Column>
              <Line className="absolute bg-gray_300 bottom-[0] h-[1px] w-[100%]" />
              <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                <Column className="font-pingfangsc items-center rounded-radius4 w-[12%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Column
                      className="bg-cover bg-repeat lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-start rounded-radius4 lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                      style={{
                        backgroundImage: "url('images/img_group777.png')",
                      }}
                    >
                      <div className="bg-bluegray_800_63 lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] rounded-radius4 lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"></div>
                    </Column>
                    <Column className="justify-start mb-[2px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[66%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        variant="body9"
                      >
                        道路左转
                      </Text>
                      <Text
                        className="TwoThousandOneHundredThirtyFive"
                        variant="body9"
                      >
                        具体场景故障案例
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] columnonehundredseventeen"
                  variant="body9"
                >
                  排队中
                </Text>
                <Text
                  className="xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[137px] lg:ml-[81px] columnonehundredseventeen"
                  variant="body9"
                >
                  <span className="text-bluegray_800 lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                    压线
                  </span>
                  <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                    1
                  </span>
                  <span className="text-bluegray_800 lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                    次
                  </span>
                </Text>
                <Text
                  className="2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[77px] xl:ml-[97px] Six54"
                  variant="body9"
                >
                  2022-08-12 20:23:12
                </Text>
                <Text
                  className="3xl:ml-[103px] lg:ml-[61px] xl:ml-[77px] 2xl:ml-[86px] Six54"
                  variant="body9"
                >
                  1:23
                </Text>
                <Button
                  className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] lg:ml-[85px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center"
                    alt="Vector"
                  />
                </Button>
              </Row>
            </Stack>
          </Stack>
          <Column className="bg-gray_201 items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] 3xl:pt-[10px] lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-center w-[98%]">
                <Button
                  className="flex items-center justify-center arrowleft5"
                  shape="icbRoundedBorder3"
                  size="smIcn"
                  variant="icbFillBlueA400"
                >
                  <Img
                    src="images/img_checkmark_4.svg"
                    className="flex items-center justify-center"
                    alt="checkmark One"
                  />
                </Button>
                <Column className="font-pingfangsc items-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] rounded-radius4 w-[11%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Column
                      className="bg-cover bg-repeat lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-start rounded-radius4 lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                      style={{
                        backgroundImage: "url('images/img_group777.png')",
                      }}
                    >
                      <div className="bg-bluegray_800_63 lg:h-[21px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] rounded-radius4 lg:w-[20px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"></div>
                    </Column>
                    <Column className="justify-start mb-[2px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] w-[66%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        variant="body9"
                      >
                        道路左转
                      </Text>
                      <Text
                        className="TwoThousandOneHundredThirtyFive"
                        variant="body9"
                      >
                        具体场景故障案例
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="lg:ml-[101px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] columnonehundredseventeen"
                  variant="body9"
                >
                  排队中
                </Text>
                <Text
                  className="xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[137px] lg:ml-[81px] columnonehundredseventeen"
                  variant="body9"
                >
                  <span className="text-bluegray_800 lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                    压线
                  </span>
                  <span className="text-bluegray_800 font-alibabapuhuiti1 lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                    1
                  </span>
                  <span className="text-bluegray_800 lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                    次
                  </span>
                </Text>
                <Text
                  className="2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[77px] xl:ml-[97px] Six54"
                  variant="body9"
                >
                  2022-08-12 20:23:12
                </Text>
                <Text
                  className="3xl:ml-[103px] lg:ml-[61px] xl:ml-[77px] 2xl:ml-[86px] Six54"
                  variant="body9"
                >
                  1:23
                </Text>
                <Button
                  className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center xl:ml-[106px] 2xl:ml-[119px] 3xl:ml-[143px] lg:ml-[85px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center"
                    alt="Vector One"
                  />
                </Button>
                <Button
                  className="font-normal font-pingfangsc lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[9%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA400"
                >
                  添加到测试集
                </Button>
              </Row>
              <Line className="bg-gray_300 h-[1px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]" />
            </Column>
          </Column>
        </Column>
        <Column className="font-pingfangsc items-center xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[85px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              无复选框+无图片+操作按钮
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
        </Column>
        <Column className="bg-white_A700 items-center justify-start lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:pt-[4px] 2xl:pt-[5px] xl:pt-[5px] 3xl:pt-[7px] w-[74%]">
          <Column className="items-center justify-start w-[100%]">
            <Row className="items-start w-[94%]">
              <Text
                className="flex font-alibabapuhuiti1 items-center FiveHundredFiftyThree"
                variant="body9"
              >
                ID
              </Text>
              <Column className="font-pingfangsc items-center justify-start xl:ml-[114px] 2xl:ml-[129px] 3xl:ml-[155px] lg:ml-[91px] mt-[2px] w-[4%]">
                <Text className="columnfivehundredsixty" variant="body9">
                  任务名称
                </Text>
              </Column>
              <Row className="font-pingfangsc items-start justify-center lg:ml-[100px] xl:ml-[126px] 2xl:ml-[141px] 3xl:ml-[170px] w-[5%]">
                <Text className="rowsixhundredfiftythree" variant="body9">
                  提交时间
                </Text>
                <Img
                  src="images/img_offer.svg"
                  className="arrowleft5"
                  alt="offer Four"
                />
              </Row>
              <Text
                className="lg:ml-[101px] xl:ml-[126px] 2xl:ml-[142px] 3xl:ml-[170px] rowfivethousandonehundredfiftyfour"
                variant="body9"
              >
                任务状态
              </Text>
              <Row className="font-pingfangsc items-start justify-center xl:ml-[102px] 2xl:ml-[115px] 3xl:ml-[138px] lg:ml-[81px] w-[5%]">
                <Text className="rowsixhundredfiftythree" variant="body9">
                  执行时长
                </Text>
                <Img
                  src="images/img_offer.svg"
                  className="arrowleft5"
                  alt="offer Five"
                />
              </Row>
              <Text
                className="3xl:ml-[117px] lg:ml-[69px] xl:ml-[86px] 2xl:ml-[97px] rowfivethousandonehundredfiftyfour"
                variant="body9"
              >
                任务结果
              </Text>
              <Text
                className="2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[72px] xl:ml-[90px] rowfivethousandonehundredfiftyfour"
                variant="body9"
              >
                操作
              </Text>
            </Row>
            <Line className="bg-gray_300 h-[1px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]" />
          </Column>
        </Column>
        <List
          className="border border-deep_purple_A200 border-solid gap-[0] min-h-[auto] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[76%]"
          orientation="vertical"
        >
          <Column className="bg-white_A700 items-center justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[9px] xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[15px] lg:pt-[9px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-start w-[98%]">
                <Text
                  className="font-alibabapuhuiti1 TwoThousandEighty"
                  variant="body9"
                >
                  U1230
                </Text>
                <Text
                  className="2xl:ml-[110px] 3xl:ml-[133px] lg:ml-[78px] xl:ml-[98px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] columnonehundredseventeen"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text
                  className="font-alibabapuhuiti1 lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] TwoThousandEighty"
                  variant="body9"
                >
                  2022-08-12 20:23:12
                </Text>
                <Text
                  className="3xl:ml-[119px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] columnonehundredseventeen"
                  variant="body9"
                >
                  排队中
                </Text>
                <Text
                  className="font-alibabapuhuiti1 xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] TwoThousandEighty"
                  variant="body9"
                >
                  1:23
                </Text>
                <Column className="bg-gray_54 font-pingfangsc items-center justify-end xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[89px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius2 w-[4%]">
                  <Row className="items-start justify-evenly mt-[2px] w-[100%]">
                    <div className="bg-red_600 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] mt-[2px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                    <Text className="rowbrand" variant="body9">
                      不通过
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center 3xl:ml-[113px] lg:ml-[67px] xl:ml-[84px] 2xl:ml-[94px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px]"
                    alt="eye Two"
                  />
                </Button>
                <Button
                  className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_close.svg"
                    className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px]"
                    alt="close Two"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_300 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
            </Column>
          </Column>
          <Column className="bg-gray_201 items-center justify-start mb-[10.5px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] xl:pt-[11px] 2xl:pt-[13px] 3xl:pt-[15px] lg:pt-[9px] w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Row className="items-start w-[98%]">
                <Text
                  className="font-alibabapuhuiti1 TwoThousandEighty"
                  variant="body9"
                >
                  U1230
                </Text>
                <Text
                  className="2xl:ml-[110px] 3xl:ml-[133px] lg:ml-[78px] xl:ml-[98px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] columnonehundredseventeen"
                  variant="body9"
                >
                  任务名称任务名称任务名称
                </Text>
                <Text
                  className="font-alibabapuhuiti1 lg:ml-[50px] xl:ml-[63px] 2xl:ml-[71px] 3xl:ml-[85px] TwoThousandEighty"
                  variant="body9"
                >
                  2022-08-12 20:23:12
                </Text>
                <Text
                  className="3xl:ml-[119px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] columnonehundredseventeen"
                  variant="body9"
                >
                  排队中
                </Text>
                <Text
                  className="font-alibabapuhuiti1 xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] TwoThousandEighty"
                  variant="body9"
                >
                  1:23
                </Text>
                <Column className="bg-gray_54 font-pingfangsc justify-end xl:ml-[112px] 2xl:ml-[126px] 3xl:ml-[151px] lg:ml-[89px] xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] rounded-radius2 w-[4%]">
                  <Row className="items-start mr-[auto] mt-[2px] w-[74%]">
                    <div className="bg-teal_400 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] mt-[2px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                    <Text className="rowellipsenine_two" variant="body9">
                      通过
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center 3xl:ml-[113px] lg:ml-[67px] xl:ml-[84px] 2xl:ml-[94px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_eye.svg"
                    className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px]"
                    alt="eye Three"
                  />
                </Button>
                <Button
                  className="flex lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] items-center justify-center lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] lg:w-[14px] xl:w-[18px] 2xl:w-[20px] 3xl:w-[24px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_close.svg"
                    className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px]"
                    alt="close Three"
                  />
                </Button>
              </Row>
              <Line className="bg-gray_201 h-[1px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
            </Column>
          </Column>
        </List>
        <Column className="font-pingfangsc items-center xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[85px] w-[100%]">
          <Column className="justify-start w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              报告列表
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
        </Column>
        <Stack className="font-pingfangsc lg:h-[209px] xl:h-[262px] 2xl:h-[294px] 3xl:h-[353px] lg:mb-[377px] xl:mb-[472px] 2xl:mb-[531px] 3xl:mb-[638px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] outline outline-[1px] outline-gray_300 w-[44%]">
          <Row className="absolute items-center right-[8%] top-[5%] w-[79%]">
            <Text className="FiveHundredFiftyThree" variant="body9">
              车辆开始位置 npc start s
            </Text>
            <Text
              className="lg:ml-[37px] xl:ml-[47px] 2xl:ml-[52px] 3xl:ml-[63px] FiveHundredFiftyThree"
              variant="body9"
            >
              车辆速度 npc speed
            </Text>
            <Text
              className="lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[87px] columnfivehundredsixty"
              variant="body9"
            >
              切入主车距离 relative ditance
            </Text>
            <Text
              className="lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] FiveHundredFiftyThree"
              variant="body9"
            >
              结果
            </Text>
          </Row>
          <Stack className="absolute lg:h-[209px] xl:h-[262px] 2xl:h-[294px] 3xl:h-[353px] w-[100%]">
            <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
              <Column className="justify-end lg:pr-[4px] xl:pr-[5px] 2xl:pr-[6px] 3xl:pr-[7px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] lg:mr-[32px] xl:mr-[41px] 2xl:mr-[46px] 3xl:mr-[55px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[90%]"
                  orientation="vertical"
                >
                  <Row className="items-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Text className="One_Two1" variant="body9">
                      1
                    </Text>
                    <Text
                      className="lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] test_75B1FF_One"
                      variant="body9"
                    >
                      580，600
                    </Text>
                    <Text
                      className="2xl:ml-[112px] 3xl:ml-[134px] lg:ml-[79px] xl:ml-[99px] One_Two1"
                      variant="body9"
                    >
                      4
                    </Text>
                    <Text className="Five36" variant="body9">
                      5
                    </Text>
                    <Text
                      className="lg:ml-[105px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[178px] One_Two1"
                      variant="body9"
                    >
                      OK
                    </Text>
                  </Row>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_300" />
                  <Row className="items-start xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                    <Text className="One_Two1" variant="body9">
                      2
                    </Text>
                    <Text
                      className="lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] test_75B1FF_One"
                      variant="body9"
                    >
                      581，601
                    </Text>
                    <Text
                      className="xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[82px] One_One"
                      variant="body9"
                    >
                      5
                    </Text>
                    <Text className="Five36" variant="body9">
                      6
                    </Text>
                    <Text className="Five36" variant="body9">
                      OK
                    </Text>
                  </Row>
                </List>
                <Column className="bg-gray_101 justify-end lg:mt-[135px] xl:mt-[169px] 2xl:mt-[190px] 3xl:mt-[228px] p-[2px] w-[100%]">
                  <Line className="bg-gray_300 h-[6px] ml-[3px] mt-[1px] rounded-radius3 w-[15%]" />
                </Column>
              </Column>
            </Column>
            <Column className="absolute bottom-[7%] justify-start left-[2%] w-[1%]">
              <Text className="rowbrand" variant="body9">
                3
              </Text>
              <Text className="Four_One1" variant="body9">
                4
              </Text>
              <Text className="Five_Two" variant="body9">
                5
              </Text>
              <Text className="Four_One1" variant="body9">
                6
              </Text>
              <Text className="Five_Two" variant="body9">
                7
              </Text>
            </Column>
            <Column className="absolute bottom-[6%] justify-start left-[13%] w-[7%]">
              <Text className="rowbrand" variant="body9">
                583，604
              </Text>
              <Text className="Five_Two" variant="body9">
                580，600
              </Text>
              <Text className="test_581601_One" variant="body9">
                581，601
              </Text>
              <Text className="Four_One1" variant="body9">
                583，604
              </Text>
              <Text className="test_581601_One" variant="body9">
                580，600
              </Text>
            </Column>
            <Column className="absolute bottom-[7%] justify-start left-[38%] w-[1%]">
              <Text className="rowbrand" variant="body9">
                6
              </Text>
              <Text className="Four_One1" variant="body9">
                4
              </Text>
              <Text className="Five_Two" variant="body9">
                5
              </Text>
              <Text className="Four_One1" variant="body9">
                6
              </Text>
              <Text className="Five_Two" variant="body9">
                4
              </Text>
            </Column>
            <Column className="absolute bottom-[7%] justify-start right-[36%] w-[1%]">
              <Text className="rowbrand" variant="body9">
                7
              </Text>
              <Text className="Four_One1" variant="body9">
                5
              </Text>
              <Text className="test_581601_One" variant="body9">
                6
              </Text>
              <Text
                className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] rowbrand"
                variant="body9"
              >
                7
              </Text>
              <Text className="Five_Two" variant="body9">
                5
              </Text>
            </Column>
            <Column className="absolute bottom-[7%] items-center justify-start right-[9%] w-[2%]">
              <Text className="rowbrand" variant="body9">
                OK
              </Text>
              <Text className="Four_One1" variant="body9">
                OK
              </Text>
              <Text className="Five_Two" variant="body9">
                OK
              </Text>
              <Text
                className="lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] rowbrand"
                variant="body9"
              >
                OK
              </Text>
              <Text className="Five_Two" variant="body9">
                OK
              </Text>
            </Column>
            <Line className="absolute bg-gray_300 lg:h-[204px] xl:h-[254px] 2xl:h-[286px] 3xl:h-[343px] inset-y-[0] left-[10%] my-[auto] w-[1px]" />
            <Line className="absolute bg-gray_300 lg:h-[204px] xl:h-[254px] 2xl:h-[286px] 3xl:h-[343px] inset-y-[0] left-[36%] my-[auto] w-[1px]" />
            <Line className="absolute bg-gray_300 lg:h-[204px] xl:h-[254px] 2xl:h-[286px] 3xl:h-[343px] inset-y-[0] my-[auto] right-[38%] w-[1px]" />
            <Line className="absolute bg-gray_300 lg:h-[204px] xl:h-[254px] 2xl:h-[286px] 3xl:h-[343px] inset-y-[0] my-[auto] right-[13%] w-[1px]" />
            <Column className="absolute bg-gray_101 bottom-[0] items-end justify-start p-[2px] right-[0] w-[1%]">
              <Line className="bg-gray_300 3xl:h-[113px] lg:h-[67px] xl:h-[84px] 2xl:h-[95px] lg:mb-[110px] xl:mb-[138px] 2xl:mb-[155px] 3xl:mb-[186px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] rounded-radius3 w-[6px]" />
            </Column>
          </Stack>
        </Stack>
      </Column>
    </>
  );
};

export default Page18;
