import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  List,
  Stack,
  Button,
  Slider,
  CheckBox,
  SelectBox,
} from "components";
import Header1 from "components/Header/Header1";

const One4Page = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[22px] 3xl:pb-[26px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Column className="font-alibabapuhuiti items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]">
            <Column className="bg-white_A700 items-center justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-start w-[92%]">
                    <Text className="ID2" variant="body9">
                      ID
                    </Text>
                    <Column className="font-pingfangsc items-center justify-start xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[83px] mt-[2px] w-[2%]">
                      <Text className="columnfivehundredsixty" variant="body9">
                        案例
                      </Text>
                    </Column>
                    <Row className="font-pingfangsc items-start justify-center lg:ml-[219px] xl:ml-[274px] 2xl:ml-[309px] 3xl:ml-[371px] w-[5%]">
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
                      className="OneThousandSevenHundredEightyNine"
                      variant="body9"
                    >
                      任务状态
                    </Text>
                    <Row className="font-pingfangsc items-start justify-center xl:ml-[120px] 2xl:ml-[136px] 3xl:ml-[163px] lg:ml-[96px] w-[5%]">
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
                      className="OneThousandSevenHundredNinetyOne"
                      variant="body9"
                    >
                      任务结果
                    </Text>
                    <Text
                      className="OneThousandSevenHundredNinetyTwo"
                      variant="body9"
                    >
                      操作
                    </Text>
                  </Row>
                  <Line className="bg-gray_201 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                </Column>
              </Column>
            </Column>
            <List
              className="gap-[0] min-h-[auto] w-[100%]"
              orientation="vertical"
            >
              <Stack className="listfivehundredninetyfive">
                <Column className="absolute items-center justify-start w-[100%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                    </Column>
                    <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                      <Text className="columnu12304" variant="body9">
                        U1230
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                      <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                        <Column
                          className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          style={{
                            backgroundImage: "url('images/img_group777.png')",
                          }}
                        >
                          <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                            <Img
                              src="images/img_rectangle354.png"
                              className="Rectangle354"
                              alt="Rectangle354"
                            />
                          </Stack>
                        </Column>
                        <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                          <Text
                            className="font-semibold text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            道路左转
                          </Text>
                          <Text
                            className="TwoThousandFiveHundredThree"
                            variant="body9"
                          >
                            具体场景故障案例具体场景故障案例具体场...
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                      <Text className="columnu12304" variant="body9">
                        2022-08-12 20:23:12
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                      <Text
                        className="columnthreethousandthreehundredeightythree"
                        variant="body9"
                      >
                        排队中
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                      <Text
                        className="columnonehundredtwentythree_one"
                        variant="body9"
                      >
                        --
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[12%]">
                      <Text
                        className="columnfivehundredninetynine"
                        variant="body9"
                      >
                        --
                      </Text>
                    </Column>
                    <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                  </Row>
                </Column>
                <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
              </Stack>
              <Stack className="listfivehundredninetyfive">
                <Column className="absolute items-center justify-start w-[100%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                    </Column>
                    <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                      <Text className="columnu12304" variant="body9">
                        U1230
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                      <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                        <Column
                          className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          style={{
                            backgroundImage: "url('images/img_group777.png')",
                          }}
                        >
                          <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                            <Img
                              src="images/img_rectangle356.png"
                              className="Rectangle354"
                              alt="Rectangle356"
                            />
                          </Stack>
                        </Column>
                        <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                          <Text
                            className="font-semibold text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            道路左转
                          </Text>
                          <Text
                            className="TwoThousandFiveHundredThree"
                            variant="body9"
                          >
                            具体场景故障案例具体场景故障案例具体场...
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                      <Text className="columnu12304" variant="body9">
                        2022-08-12 20:23:12
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                      <Text
                        className="columnthreethousandthreehundredeightyeight"
                        variant="body9"
                      >
                        <span className="text-blue_A400 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          运行中{" "}
                        </span>
                        <span className="text-blue_A400 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          2/20
                        </span>
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                      <Text className="columnu12304" variant="body9">
                        1:23
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[12%]">
                      <Text
                        className="columnfivehundredninetynine"
                        variant="body9"
                      >
                        --
                      </Text>
                    </Column>
                    <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                  </Row>
                </Column>
                <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
              </Stack>
              <Stack className="listfivehundredninetyfive">
                <Column className="absolute items-center justify-start w-[100%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                    </Column>
                    <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                      <Text className="columnu12304" variant="body9">
                        U1230
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                      <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                        <Column
                          className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          style={{
                            backgroundImage: "url('images/img_group777.png')",
                          }}
                        >
                          <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                            <Img
                              src="images/img_rectangle355.png"
                              className="Rectangle354"
                              alt="Rectangle355"
                            />
                          </Stack>
                        </Column>
                        <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                          <Text
                            className="font-semibold text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            道路左转
                          </Text>
                          <Text
                            className="TwoThousandFiveHundredThree"
                            variant="body9"
                          >
                            具体场景故障案例具体场景故障案例具体场...
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                      <Text className="columnu12304" variant="body9">
                        2022-08-12 20:23:12
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                      <Text
                        className="columnthreethousandthreehundredninetythree"
                        variant="body9"
                      >
                        <span className="text-teal_400 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          已完成{" "}
                        </span>
                        <span className="text-teal_400 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          3/3
                        </span>
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                      <Text className="columnu12304" variant="body9">
                        1:23
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[12%]">
                      <Row className="bg-gray_54 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius2 w-[39%]">
                        <div className="bg-red_600 rounded-radius50 plus_One"></div>
                        <Text className="rowellipsenine" variant="body9">
                          不通过
                        </Text>
                      </Row>
                    </Column>
                    <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                  </Row>
                </Column>
                <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
              </Stack>
              <Stack className="listfivehundredninetyfive">
                <Column className="absolute items-center justify-start w-[100%]">
                  <Row className="items-center justify-evenly w-[100%]">
                    <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                      <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                    </Column>
                    <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                      <Text className="columnu12304" variant="body9">
                        U1230
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                      <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                        <Column
                          className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                          style={{
                            backgroundImage: "url('images/img_group777.png')",
                          }}
                        >
                          <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                            <Img
                              src="images/img_rectangle357.png"
                              className="Rectangle354"
                              alt="Rectangle357"
                            />
                          </Stack>
                        </Column>
                        <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                          <Text
                            className="font-semibold text-bluegray_800 w-[auto]"
                            variant="body9"
                          >
                            道路左转
                          </Text>
                          <Text
                            className="TwoThousandFiveHundredThree"
                            variant="body9"
                          >
                            具体场景故障案例具体场景故障案例具体场...
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                      <Text className="columnu12304" variant="body9">
                        2022-08-12 20:23:12
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                      <Text
                        className="columnthreethousandthreehundredninetyeight"
                        variant="body9"
                      >
                        <span className="text-red_600 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          已中断{" "}
                        </span>
                        <span className="text-red_600 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          2/4
                        </span>
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                      <Text className="columnu12304" variant="body9">
                        1:23
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 font-pingfangsc 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[12%]">
                      <Text
                        className="columnfivehundredninetynine"
                        variant="body9"
                      >
                        --
                      </Text>
                    </Column>
                    <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                  </Row>
                </Column>
                <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
              </Stack>
              <footer className="bg-white_A700 my-[0] w-[100%]">
                <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                  <Column className="absolute items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                        <Text className="columnu12304" variant="body9">
                          U1230
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                        <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                          <Column
                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            style={{
                              backgroundImage: "url('images/img_group777.png')",
                            }}
                          >
                            <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle269_1.png"
                                className="Rectangle354"
                                alt="Rectangle362"
                              />
                            </Stack>
                          </Column>
                          <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                            <Text
                              className="font-semibold text-bluegray_800 w-[auto]"
                              variant="body9"
                            >
                              道路左转
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              具体场景故障案例具体场景故障案例具体场...
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                        <Text className="columnu12304" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text
                          className="columnthreethousandthreehundredninetyeight"
                          variant="body9"
                        >
                          已终止
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text
                          className="columnonehundredtwentythree_one"
                          variant="body9"
                        >
                          --
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[12%]">
                        <Text
                          className="columnfivehundredninetynine"
                          variant="body9"
                        >
                          --
                        </Text>
                      </Column>
                      <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                    </Row>
                  </Column>
                  <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                </Stack>
              </footer>
              <footer className="bg-white_A700 my-[0] w-[100%]">
                <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                  <Column className="absolute items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                        <Text className="columnu12304" variant="body9">
                          U1230
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                        <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                          <Column
                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            style={{
                              backgroundImage: "url('images/img_group777.png')",
                            }}
                          >
                            <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle364.png"
                                className="Rectangle354"
                                alt="Rectangle364"
                              />
                            </Stack>
                          </Column>
                          <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                            <Text
                              className="font-semibold text-bluegray_800 w-[auto]"
                              variant="body9"
                            >
                              道路左转
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              具体场景故障案例具体场景故障案例具体场...
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                        <Text className="columnu12304" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text
                          className="columnthreethousandthreehundredninetythree"
                          variant="body9"
                        >
                          <span className="text-teal_400 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            已完成{" "}
                          </span>
                          <span className="text-teal_400 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            3/3
                          </span>
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text className="columnu12304" variant="body9">
                          1:23
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[12%]">
                        <Row className="bg-gray_54 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius2 w-[39%]">
                          <div className="bg-teal_400 rounded-radius50 plus_One"></div>
                          <Text className="rowellipsenine" variant="body9">
                            通过
                          </Text>
                        </Row>
                      </Column>
                      <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                    </Row>
                  </Column>
                  <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                </Stack>
              </footer>
              <footer className="bg-white_A700 my-[0] w-[100%]">
                <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                  <Column className="absolute items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                        <Text className="columnu12304" variant="body9">
                          U1230
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                        <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                          <Column
                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            style={{
                              backgroundImage: "url('images/img_group777.png')",
                            }}
                          >
                            <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle365.png"
                                className="Rectangle354"
                                alt="Rectangle365"
                              />
                            </Stack>
                          </Column>
                          <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                            <Text
                              className="font-semibold text-bluegray_800 w-[auto]"
                              variant="body9"
                            >
                              道路左转
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              具体场景故障案例具体场景故障案例具体场...
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                        <Text className="columnu12304" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text
                          className="columnthreethousandthreehundredeightyeight"
                          variant="body9"
                        >
                          <span className="text-blue_A400 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            运行中{" "}
                          </span>
                          <span className="text-blue_A400 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            2/20
                          </span>
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text className="columnu12304" variant="body9">
                          1:23
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[12%]">
                        <Text
                          className="columnfivehundredninetynine"
                          variant="body9"
                        >
                          --
                        </Text>
                      </Column>
                      <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray54"
                        >
                          <Img
                            src="images/img_contrast.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="contrast One"
                          />
                        </Button>
                      </Row>
                    </Row>
                  </Column>
                  <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                </Stack>
              </footer>
              <footer className="bg-white_A700 my-[0] w-[100%]">
                <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                  <Column className="absolute items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                        <Text className="columnu12304" variant="body9">
                          U1230
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                        <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                          <Column
                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            style={{
                              backgroundImage: "url('images/img_group777.png')",
                            }}
                          >
                            <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle363.png"
                                className="Rectangle354"
                                alt="Rectangle363"
                              />
                            </Stack>
                          </Column>
                          <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                            <Text
                              className="font-semibold text-bluegray_800 w-[auto]"
                              variant="body9"
                            >
                              道路左转
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              具体场景故障案例具体场景故障案例具体场...
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                        <Text className="columnu12304" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text
                          className="columnthreethousandthreehundredninetythree"
                          variant="body9"
                        >
                          <span className="text-teal_400 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            已完成{" "}
                          </span>
                          <span className="text-teal_400 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            3/3
                          </span>
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text className="columnu12304" variant="body9">
                          1:23
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[12%]">
                        <Row className="bg-gray_54 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius2 w-[39%]">
                          <div className="bg-red_600 rounded-radius50 plus_One"></div>
                          <Text className="rowellipsenine" variant="body9">
                            不通过
                          </Text>
                        </Row>
                      </Column>
                      <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                    </Row>
                  </Column>
                  <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                </Stack>
              </footer>
              <footer className="bg-white_A700 my-[0] w-[100%]">
                <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                  <Column className="absolute items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                        <Text className="columnu12304" variant="body9">
                          U1230
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                        <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                          <Column
                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            style={{
                              backgroundImage: "url('images/img_group777.png')",
                            }}
                          >
                            <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle359.png"
                                className="Rectangle354"
                                alt="Rectangle359"
                              />
                            </Stack>
                          </Column>
                          <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                            <Text
                              className="font-semibold text-bluegray_800 w-[auto]"
                              variant="body9"
                            >
                              道路左转
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              具体场景故障案例具体场景故障案例具体场...
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                        <Text className="columnu12304" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text
                          className="columnthreethousandthreehundredninetyeight"
                          variant="body9"
                        >
                          <span className="text-red_600 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            已中断{" "}
                          </span>
                          <span className="text-red_600 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                            2/4
                          </span>
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text className="columnu12304" variant="body9">
                          1:23
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[12%]">
                        <Text
                          className="columnfivehundredninetynine"
                          variant="body9"
                        >
                          --
                        </Text>
                      </Column>
                      <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                    </Row>
                  </Column>
                  <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                </Stack>
              </footer>
              <footer className="bg-white_A700 my-[0] w-[100%]">
                <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                  <Column className="absolute items-center justify-start w-[100%]">
                    <Row className="items-center justify-evenly w-[100%]">
                      <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                        <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                      </Column>
                      <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                        <Text className="columnu12304" variant="body9">
                          U1230
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[24%]">
                        <Row className="items-end my-[4px] rounded-radius4 w-[90%]">
                          <Column
                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                            style={{
                              backgroundImage: "url('images/img_group777.png')",
                            }}
                          >
                            <Stack className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]">
                              <Img
                                src="images/img_rectangle358.png"
                                className="Rectangle354"
                                alt="Rectangle358"
                              />
                            </Stack>
                          </Column>
                          <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[83%]">
                            <Text
                              className="font-semibold text-bluegray_800 w-[auto]"
                              variant="body9"
                            >
                              道路左转
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              具体场景故障案例具体场景故障案例具体场...
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 font-alibabapuhuiti lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[19%]">
                        <Text className="columnu12304" variant="body9">
                          2022-08-12 20:23:12
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text
                          className="columnfivehundredninetyeight"
                          variant="body9"
                        >
                          已取消
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[13%]">
                        <Text
                          className="columnonehundredtwentythree_one"
                          variant="body9"
                        >
                          --
                        </Text>
                      </Column>
                      <Column className="bg-white_A700 font-pingfangsc 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[12%]">
                        <Text
                          className="columnfivehundredninetynine"
                          variant="body9"
                        >
                          --
                        </Text>
                      </Column>
                      <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[7%]">
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray54"
                        >
                          <Img
                            src="images/img_eye.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="eye Nine"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                    </Row>
                  </Column>
                  <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                </Stack>
              </footer>
              <Slider
                slidesToShow={9}
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                activeSlideCSS="scale-[0.03] my-[0]"
                magnifiedIndex={8}
                centerMode
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
            <Row className="font-pingfangsc items-center justify-between lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]">
              <Row className="items-center justify-between w-[19%]">
                <CheckBox
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                  name="ThreeThousandFiveHundredTwentyThree"
                  label="全选"
                  shape="RoundedBorder2"
                  size="sm"
                  variant="OutlineBluegray100"
                ></CheckBox>
                <div className="bg-gray_201 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[1px]"></div>
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[23%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA400"
                >
                  删除
                </Button>
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[34%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA400"
                >
                  取消执行
                </Button>
              </Row>
              <Row className="items-center justify-between w-[36%]">
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
                    name="Group3168"
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
                <Row className="items-center justify-center w-[43%]">
                  <Img
                    src="images/img_arrowleft.svg"
                    className="arrowleft2"
                    onClick={() => sliderRef.current?.slidePrev()}
                    alt="arrowleft"
                  />
                  <Stack className="lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[3px] w-[79%]">
                    <div className="bg-gray_54 left-[0] rounded-radius3 lightbulb"></div>
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
                    className="arrowright1"
                    onClick={() => sliderRef.current?.slideNext()}
                    alt="arrowright"
                  />
                </Row>
                <Row className="items-center justify-between rounded-radius4 w-[19%]">
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
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default One4Page;
