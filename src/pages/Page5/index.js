import React from "react";

import {
  Column,
  Stack,
  Img,
  Text,
  Row,
  Line,
  Button,
  List,
  CheckBox,
} from "components";
import Header1 from "components/Header/Header1";
import Footer3 from "components/Footer/Footer3";

const Page5 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[30px] xl:pb-[38px] 2xl:pb-[43px] 3xl:pb-[51px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
            <Stack className="bottom-[0] test_20220825">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_6.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Img
                  src="images/img_20220825_6.png"
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
                  中华人民共和国道路交通安全法
                </Text>
              </Column>
            </Stack>
            <Column className="absolute justify-end lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] top-[29%] w-[100%]">
              <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[11%]">
                <Text className="FiveHundredFiftyTwo" variant="body9">
                  任务
                </Text>
                <Img
                  src="images/img_checkmark_3.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text className="SevenHundredSeventyNine" variant="body9">
                  自动驾驶合规性评估
                </Text>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
            </Column>
            <Header1 className="absolute top-[0] w-[100%]" />
          </Stack>
          <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[97%]">
            <Stack className="lg:h-[100px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] w-[99%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[17%]">
                  <Text className="OneThousandSixtySeven" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text className="test_202208292002" variant="body8">
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[22%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="test_151223" variant="body8">
                    <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      1/5
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      ，已执行{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      12:23
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      ，预计还需{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      34:09
                    </span>
                  </Text>
                </Row>
                <div
                  className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] overflow-hidden relative w-[100%]"
                  name="Group519"
                >
                  <div className="w-full h-full absolute bg-undefined"></div>
                  <div
                    className="h-full absolute"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </Column>
              <Row className="absolute border border-blue_200 border-solid items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Row className="items-start mb-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-center w-[11%]">
                    <Button
                      className="flex items-center justify-center close5"
                      shape="icbCircleBorder10"
                      size="smIcn"
                      variant="icbFillBlueA401"
                    >
                      <Img
                        src="images/img_play_24X24.svg"
                        className="flex items-center justify-center"
                        alt="play"
                      />
                    </Button>
                    <Text className="rowplay1" variant="body4">
                      任务运行中
                    </Text>
                  </Row>
                  <Button
                    className="font-normal 3xl:ml-[1169px] lg:ml-[692px] xl:ml-[866px] 2xl:ml-[974px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[7%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillBlueA400"
                  >
                    查看直播
                  </Button>
                  <Button
                    className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[7%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillRed600"
                  >
                    终止任务
                  </Button>
                </Row>
              </Row>
            </Stack>
            <Row className="items-center lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] w-[15%]">
              <Text className="rowonethousandseventy" variant="body4">
                测试描述
              </Text>
              <Button
                className="font-alibabapuhuiti font-normal lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[38%]"
                shape="RoundedBorder4"
                size="sm"
                variant="FillGray54"
              >
                Apollo-V5.5
              </Button>
            </Row>
            <Text
              className="font-normal lg:leading-[18px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-bluegray_800 w-[82%]"
              variant="body8"
            >
              按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。
            </Text>
            <Row className="items-center xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[60%]">
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
                      alt="play One"
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
            <Line className="bg-gray_201 h-[1px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[99%]" />
            <Row className="items-center justify-between lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[96%]">
              <Row className="items-center justify-between w-[92%]">
                <Row className="items-start w-[91%]">
                  <Text className="rowonethousandseventythree" variant="body4">
                    测试科目
                  </Text>
                  <Stack className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[9%]">
                    <Text className="language3" variant="body9">
                      执行了 次测试
                    </Text>
                    <Text className="Twelve1" variant="body7">
                      12
                    </Text>
                  </Stack>
                  <Row className="items-start justify-between 3xl:ml-[1044px] lg:ml-[618px] xl:ml-[773px] 2xl:ml-[870px] pt-[2px] w-[5%]">
                    <Line className="bg-red_600 lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] mt-[1px] rounded-radius1 w-[2px]" />
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                      <Row className="absolute items-end justify-between left-[0] top-[0] w-[73%]">
                        <Text className="Six24" variant="body3">
                          6
                        </Text>
                        <Text
                          className="OneThousandSeventyFour"
                          variant="body9"
                        >
                          次
                        </Text>
                      </Row>
                      <Row className="absolute bottom-[0] items-start justify-evenly w-[100%]">
                        <Text
                          className="columnapollovfiftyfive"
                          variant="body9"
                        >
                          压线
                        </Text>
                        <Img
                          src="images/img_eye_16X16.svg"
                          className="eye2"
                          alt="eye"
                        />
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-start justify-between pt-[2px] w-[5%]">
                  <Line className="bg-red_600 lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] mt-[1px] rounded-radius1 w-[2px]" />
                  <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                    <Row className="absolute items-end justify-between left-[0] top-[0] w-[73%]">
                      <Text className="Six24" variant="body3">
                        6
                      </Text>
                      <Text className="OneThousandSeventyFour" variant="body9">
                        次
                      </Text>
                    </Row>
                    <Row className="absolute bottom-[0] items-start justify-evenly w-[100%]">
                      <Text className="columnapollovfiftyfive" variant="body9">
                        撞车
                      </Text>
                      <Img
                        src="images/img_eye_16X16.svg"
                        className="eye2"
                        alt="eye One"
                      />
                    </Row>
                  </Stack>
                </Row>
              </Row>
              <Row className="items-start justify-between pt-[2px] w-[4%]">
                <Line className="bg-red_600 lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] mt-[1px] rounded-radius1 w-[2px]" />
                <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                  <Row className="absolute items-end justify-between left-[0] top-[0] w-[73%]">
                    <Text className="Six24" variant="body3">
                      6
                    </Text>
                    <Text className="OneThousandSeventyFour" variant="body9">
                      次
                    </Text>
                  </Row>
                  <Row className="absolute bottom-[0] items-start justify-evenly w-[100%]">
                    <Text className="columnapollovfiftyfive" variant="body9">
                      逆行
                    </Text>
                    <Img
                      src="images/img_eye_16X16.svg"
                      className="eye2"
                      alt="eye Two"
                    />
                  </Row>
                </Stack>
              </Row>
            </Row>
            <Footer3 className="bg-white_A700 lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]" />
            <Row className="items-start justify-between w-[100%]">
              <Column className="justify-start w-[99%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="lg:ml-[138px] xl:ml-[173px] 2xl:ml-[195px] 3xl:ml-[234px] columntwentyseven"
                            variant="body9"
                          >
                            排队中
                          </Text>
                          <Text
                            className="lg:ml-[110px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] rowbrand"
                            variant="body9"
                          >
                            --
                          </Text>
                          <Text
                            className="lg:ml-[125px] xl:ml-[157px] 2xl:ml-[177px] 3xl:ml-[212px] rowbrand"
                            variant="body9"
                          >
                            --
                          </Text>
                          <Text
                            className="lg:ml-[160px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] rowbrand"
                            variant="body9"
                          >
                            --
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[123px] xl:ml-[153px] 2xl:ml-[173px] 3xl:ml-[207px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_vector_28X28.svg"
                              className="flex items-center justify-center"
                              alt="Vector"
                            />
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="lg:ml-[138px] xl:ml-[173px] 2xl:ml-[195px] 3xl:ml-[234px] columnthirtyseven"
                            variant="body9"
                          >
                            运行中
                          </Text>
                          <Text
                            className="lg:ml-[110px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] rowbrand"
                            variant="body9"
                          >
                            --
                          </Text>
                          <Text
                            className="lg:ml-[125px] xl:ml-[157px] 2xl:ml-[177px] 3xl:ml-[212px] rowbrand"
                            variant="body9"
                          >
                            --
                          </Text>
                          <Text
                            className="lg:ml-[160px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] rowbrand"
                            variant="body9"
                          >
                            --
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[123px] xl:ml-[153px] 2xl:ml-[173px] 3xl:ml-[207px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="font-pingfangsc items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="OneThousandTwentyEight"
                            variant="body9"
                          >
                            已完成
                          </Text>
                          <Text className="One_Two" variant="body9">
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              压线
                            </span>
                            <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              1
                            </span>
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              次
                            </span>
                          </Text>
                          <Text className="language_One" variant="body9">
                            2022-08-12 20:23:12
                          </Text>
                          <Text className="time3" variant="body9">
                            1:23
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[145px] 2xl:ml-[163px] 3xl:ml-[195px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_vector_1.svg"
                              className="flex items-center justify-center"
                              alt="Vector Two"
                            />
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="font-pingfangsc items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="OneThousandTwentyEight"
                            variant="body9"
                          >
                            已完成
                          </Text>
                          <Text className="One_Two" variant="body9">
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              压线
                            </span>
                            <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              1
                            </span>
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              次
                            </span>
                          </Text>
                          <Text className="language_One" variant="body9">
                            2022-08-12 20:23:12
                          </Text>
                          <Text className="time3" variant="body9">
                            1:23
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[145px] 2xl:ml-[163px] 3xl:ml-[195px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_vector_1.svg"
                              className="flex items-center justify-center"
                              alt="Vector Three"
                            />
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="font-pingfangsc items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="OneThousandTwentyEight"
                            variant="body9"
                          >
                            已完成
                          </Text>
                          <Text className="One_Two" variant="body9">
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              压线
                            </span>
                            <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              1
                            </span>
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              次
                            </span>
                          </Text>
                          <Text className="language_One" variant="body9">
                            2022-08-12 20:23:12
                          </Text>
                          <Text className="time3" variant="body9">
                            1:23
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[145px] 2xl:ml-[163px] 3xl:ml-[195px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_vector_1.svg"
                              className="flex items-center justify-center"
                              alt="Vector Four"
                            />
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="font-pingfangsc items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="OneThousandTwentyEight"
                            variant="body9"
                          >
                            已完成
                          </Text>
                          <Text className="One_Two" variant="body9">
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              压线
                            </span>
                            <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              1
                            </span>
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              次
                            </span>
                          </Text>
                          <Text className="language_One" variant="body9">
                            2022-08-12 20:23:12
                          </Text>
                          <Text className="time3" variant="body9">
                            1:23
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[145px] 2xl:ml-[163px] 3xl:ml-[195px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_vector_1.svg"
                              className="flex items-center justify-center"
                              alt="Vector Five"
                            />
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="font-pingfangsc items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="OneThousandTwentyEight"
                            variant="body9"
                          >
                            已完成
                          </Text>
                          <Text className="One_Two" variant="body9">
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              压线
                            </span>
                            <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              1
                            </span>
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              次
                            </span>
                          </Text>
                          <Text className="language_One" variant="body9">
                            2022-08-12 20:23:12
                          </Text>
                          <Text className="time3" variant="body9">
                            1:23
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[145px] 2xl:ml-[163px] 3xl:ml-[195px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_vector_1.svg"
                              className="flex items-center justify-center"
                              alt="Vector Six"
                            />
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="font-pingfangsc items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="OneThousandTwentyEight"
                            variant="body9"
                          >
                            已完成
                          </Text>
                          <Text className="One_Two" variant="body9">
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              压线
                            </span>
                            <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              1
                            </span>
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              次
                            </span>
                          </Text>
                          <Text className="language_One" variant="body9">
                            2022-08-12 20:23:12
                          </Text>
                          <Text className="time3" variant="body9">
                            1:23
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[145px] 2xl:ml-[163px] 3xl:ml-[195px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_vector_1.svg"
                              className="flex items-center justify-center"
                              alt="Vector Seven"
                            />
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="font-pingfangsc items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="OneThousandTwentyEight"
                            variant="body9"
                          >
                            已完成
                          </Text>
                          <Text className="One_Two" variant="body9">
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              压线
                            </span>
                            <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              1
                            </span>
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              次
                            </span>
                          </Text>
                          <Text className="language_One" variant="body9">
                            2022-08-12 20:23:12
                          </Text>
                          <Text className="time3" variant="body9">
                            1:23
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[145px] 2xl:ml-[163px] 3xl:ml-[195px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_vector_1.svg"
                              className="flex items-center justify-center"
                              alt="Vector Eight"
                            />
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                  <footer className="my-[0] w-[100%]">
                    <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                      <Button
                        className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA400"
                      >
                        添加到测试集
                      </Button>
                      <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Line className="absolute bg-gray_201 bottom-[0] h-[1px] w-[100%]" />
                        <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] w-[86%]">
                          <Column className="font-pingfangsc items-center rounded-radius4 w-[12%]">
                            <Row className="items-end justify-between w-[100%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text className="TwentySix" variant="body9">
                                  具体场景故障案例
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Text
                            className="OneThousandTwentyEight"
                            variant="body9"
                          >
                            已完成
                          </Text>
                          <Text className="One_Two" variant="body9">
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              压线
                            </span>
                            <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              1
                            </span>
                            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                              次
                            </span>
                          </Text>
                          <Text className="language_One" variant="body9">
                            2022-08-12 20:23:12
                          </Text>
                          <Text className="time3" variant="body9">
                            1:23
                          </Text>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[145px] 2xl:ml-[163px] 3xl:ml-[195px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_vector_1.svg"
                              className="flex items-center justify-center"
                              alt="Vector Nine"
                            />
                          </Button>
                        </Row>
                      </Stack>
                    </Stack>
                  </footer>
                </List>
                <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[16%]">
                  <CheckBox
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                    inputClassName="h-[16px] mr-[5px] w-[16px]"
                    name="OneThousandEightySix"
                    label="全选"
                    shape="RoundedBorder2"
                    size="sm"
                    variant="OutlineBluegray100"
                  ></CheckBox>
                  <div className="bg-gray_201 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[1px]"></div>
                  <Button
                    className="font-normal lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[53%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlueA400"
                  >
                    添加到测试集
                  </Button>
                </Row>
              </Column>
              <Line className="bg-bluegray_200 lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] rounded-radius2 w-[4px]" />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page5;
