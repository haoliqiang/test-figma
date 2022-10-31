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

const Page53 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[37px] xl:pb-[47px] 2xl:pb-[53px] 3xl:pb-[63px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
            <Stack className="bottom-[0] test_20220825">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_39.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Img
                  src="images/img_20220825_39.png"
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
                <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[14%]">
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
            <Row className="items-start lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[92%]">
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
                  src="images/img_group628.svg"
                  className="Group629"
                  alt="Group628"
                />
              </Row>
            </Row>
            <Row className="items-start justify-between lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[100%]">
              <Column className="justify-end lg:pt-[34px] xl:pt-[43px] 2xl:pt-[49px] 3xl:pt-[58px] w-[99%]">
                <Row className="items-center justify-between w-[98%]">
                  <Row className="items-center justify-between w-[92%]">
                    <Row className="items-start w-[91%]">
                      <Text
                        className="rowonethousandseventythree"
                        variant="body4"
                      >
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
                <Column className="bg-white_A700 items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[85%]">
                        <Column className="items-center justify-start mt-[2px] w-[2%]">
                          <Text
                            className="columnfivehundredsixty"
                            variant="body9"
                          >
                            案例
                          </Text>
                        </Column>
                        <Text
                          className="lg:ml-[224px] xl:ml-[281px] 2xl:ml-[316px] 3xl:ml-[379px] rowsixhundredfiftythree"
                          variant="body9"
                        >
                          任务状态
                        </Text>
                        <Row className="items-start justify-center lg:ml-[102px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[172px] w-[6%]">
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            发现事故
                          </Text>
                          <Stack className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] w-[30%]">
                            <Img
                              src="images/img_filter_2.svg"
                              className="left-[0] checkmark_One"
                              alt="filter"
                            />
                            <Text
                              className="absolute bottom-[6%] right-[0] columnthirtyseven"
                              variant="body9"
                            >
                              4
                            </Text>
                          </Stack>
                        </Row>
                        <Row className="items-start justify-center xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[86px] w-[5%]">
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            完成时间
                          </Text>
                          <Img
                            src="images/img_offer.svg"
                            className="arrowleft"
                            alt="offer"
                          />
                        </Row>
                        <Row className="items-start justify-center lg:ml-[125px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] w-[5%]">
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            运行时长
                          </Text>
                          <Img
                            src="images/img_offer.svg"
                            className="arrowleft"
                            alt="offer One"
                          />
                        </Row>
                        <Text
                          className="xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] rowsixhundredfiftythree"
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
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                            alt="Vector"
                          />
                        </Button>
                      </Row>
                    </Stack>
                  </Stack>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201 rounded-radius05" />
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                            alt="Vector One"
                          />
                        </Button>
                      </Row>
                    </Stack>
                  </Stack>
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201 rounded-radius05" />
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201 rounded-radius05" />
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201 rounded-radius05" />
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201 rounded-radius05" />
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201 rounded-radius05" />
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201 rounded-radius05" />
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201 rounded-radius05" />
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                  <Line className="self-center w-[100%] h-[1px] bg-gray_201 rounded-radius05" />
                  <Stack className="list添加到测试集_four">
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
                              <Text
                                className="TwoThousandFiveHundredThree"
                                variant="body9"
                              >
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
                </List>
                <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mr-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[16%]">
                  <CheckBox
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                    inputClassName="h-[16px] mr-[5px] w-[16px]"
                    name="FourThousandThreeHundredNinetyEight"
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
                <Row className="items-center justify-between xl:mt-[103px] 2xl:mt-[116px] 3xl:mt-[139px] lg:mt-[82px] w-[99%]">
                  <Text
                    className="font-semibold text-bluegray_800 w-[auto]"
                    variant="body4"
                  >
                    测试科目
                  </Text>
                  <Button
                    className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[9%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillBlueA400"
                  >
                    下载报告
                  </Button>
                </Row>
                <Stack className="xl:h-[1235px] 2xl:h-[1389px] 3xl:h-[1667px] lg:h-[988px] lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]">
                  <Column className="absolute bg-gray_54 items-center justify-end lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 top-[1%] w-[100%]">
                    <Column className="items-center justify-start lg:mb-[12px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[21px] 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[84px] w-[100%]">
                      <Column className="bg-white_A700 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius8 w-[100%]">
                        <Column className="justify-start lg:mb-[18px] xl:mb-[23px] 2xl:mb-[26px] 3xl:mb-[31px] w-[98%]">
                          <Text
                            className="font-semibold text-bluegray_800 w-[auto]"
                            variant="body4"
                          >
                            被测系统信息
                          </Text>
                          <Row className="items-start lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[84%]">
                            <Text
                              className="FiveHundredFiftyThree"
                              variant="body7"
                            >
                              自动驾驶系统：
                            </Text>
                            <Text className="ApolloVOne" variant="body7">
                              Apollo自动驾驶系统V1.0
                            </Text>
                            <Text
                              className="OneThousandFiveHundredFortyFive"
                              variant="body7"
                            >
                              仿真车辆：
                            </Text>
                            <Text className="measurement" variant="body7">
                              奥迪A4L
                            </Text>
                            <Text
                              className="OneThousandFiveHundredFortySix"
                              variant="body7"
                            >
                              车辆类型：
                            </Text>
                            <Text
                              className="OneThousandFiveHundredFortySeven"
                              variant="body7"
                            >
                              小型轿车
                            </Text>
                          </Row>
                          <Row className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[88%]">
                            <Text
                              className="FiveHundredFiftyThree"
                              variant="body7"
                            >
                              传感器：
                            </Text>
                            <Text
                              className="columnonethousandthreehundredforty"
                              variant="body7"
                            >
                              可见光传感器*3{" "}
                            </Text>
                            <Text
                              className="OneThousandFiveHundredFortyNine"
                              variant="body7"
                            >
                              车辆颜色：
                            </Text>
                            <Text
                              className="OneThousandFiveHundredFifty"
                              variant="body7"
                            >
                              白色
                            </Text>
                            <Text
                              className="FourThousandOneHundredTwentySix"
                              variant="body7"
                            >
                              动力学仿真：
                            </Text>
                            <Text
                              className="OneThousandFiveHundredFiftyTwo"
                              variant="body7"
                            >
                              仿真名称和内容
                            </Text>
                          </Row>
                          <Row className="items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[55%]">
                            <Text
                              className="FiveHundredFiftyThree"
                              variant="body7"
                            >
                              动力类型：
                            </Text>
                            <Text
                              className="OneThousandFiveHundredFiftyFour"
                              variant="body7"
                            >
                              仿真名称和内容
                            </Text>
                            <Text
                              className="OneThousandFiveHundredFiftyFive"
                              variant="body7"
                            >
                              车体仿真：
                            </Text>
                            <Text
                              className="OneThousandFiveHundredFifty"
                              variant="body7"
                            >
                              仿真名称和内容
                            </Text>
                          </Row>
                          <Column className="bg-white_A700 border border-gray_202 border-solid items-center justify-start lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                            <Row className="items-center w-[96%]">
                              <Column className="items-center w-[49%]">
                                <Row className="items-center w-[100%]">
                                  <Button
                                    className="flex lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] items-center justify-center lg:w-[15px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                                    shape="icbCircleBorder10"
                                    size="smIcn"
                                    variant="icbFillBluegray200"
                                  >
                                    <Img
                                      src="images/img_dashboard.svg"
                                      className="flex items-center justify-center"
                                      alt="dashboard"
                                    />
                                  </Button>
                                  <Text
                                    className="rowdashboard"
                                    variant="body7"
                                  >
                                    总行驶里程
                                  </Text>
                                  <Row className="items-end justify-between lg:ml-[226px] xl:ml-[283px] 2xl:ml-[319px] 3xl:ml-[383px] w-[23%]">
                                    <Text
                                      className="font-alibabapuhuiti font-medium text-bluegray_800 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      1,036
                                    </Text>
                                    <Text
                                      className="font-dinpro mb-[4px] rowzero"
                                      variant="body5"
                                    >
                                      km
                                    </Text>
                                  </Row>
                                </Row>
                                <Row className="items-start lg:mt-[53px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[100%]">
                                  <Img
                                    src="images/img_clock_24X24.svg"
                                    className="clock"
                                    alt="clock"
                                  />
                                  <Text className="rowclock1" variant="body7">
                                    总行驶时长
                                  </Text>
                                  <Row className="items-start justify-between lg:ml-[102px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[172px] w-[54%]">
                                    <Text
                                      className="EightyThree"
                                      as="h5"
                                      variant="h5"
                                    >
                                      83
                                    </Text>
                                    <Text
                                      className="OneThousandFiveHundredFiftyNine"
                                      variant="body7"
                                    >
                                      天
                                    </Text>
                                    <Text
                                      className="EightyThree"
                                      as="h5"
                                      variant="h5"
                                    >
                                      23
                                    </Text>
                                    <Text
                                      className="OneThousandFiveHundredSixty"
                                      variant="body7"
                                    >
                                      小时
                                    </Text>
                                    <Text
                                      className="Twenty"
                                      as="h5"
                                      variant="h5"
                                    >
                                      20
                                    </Text>
                                    <Text
                                      className="OneThousandFiveHundredFiftyNine"
                                      variant="body7"
                                    >
                                      分
                                    </Text>
                                    <Text
                                      className="Forty"
                                      as="h5"
                                      variant="h5"
                                    >
                                      40
                                    </Text>
                                    <Text
                                      className="OneThousandFiveHundredFiftyNine"
                                      variant="body7"
                                    >
                                      秒
                                    </Text>
                                  </Row>
                                </Row>
                              </Column>
                              <Line className="bg-white_A700 border border-gray_202 border-solid lg:h-[154px] xl:h-[193px] 2xl:h-[217px] 3xl:h-[260px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius05 w-[1px]" />
                              <Stack className="bg-white_A700 lg:h-[148px] xl:h-[186px] 2xl:h-[209px] 3xl:h-[250px] lg:ml-[44px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 shadow-bs3 lg:w-[147px] xl:w-[185px] 2xl:w-[208px] 3xl:w-[249px]">
                                <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] lg:w-[27px] xl:w-[34px] 2xl:w-[39px] 3xl:w-[46px]">
                                  <Text
                                    className="OneThousandFiveHundredSixtyThree"
                                    variant="body8"
                                  >
                                    共计
                                  </Text>
                                  <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] mt-[3px] rounded-radius50 shadow-bs3 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
                                  <Text className="zipcode1" variant="body6">
                                    5000
                                  </Text>
                                </Column>
                                <div className="absolute bg-gradient4  lg:h-[121px] xl:h-[152px] 2xl:h-[171px] 3xl:h-[205px] inset-[0] justify-center m-[auto] rounded-radius50 lg:w-[120px] xl:w-[151px] 2xl:w-[170px] 3xl:w-[204px]"></div>
                                <div className="absolute bg-gradient5  lg:h-[131px] xl:h-[164px] 2xl:h-[185px] 3xl:h-[221px] inset-[0] justify-center m-[auto] rounded-radius50 shadow-bs5 lg:w-[130px] xl:w-[163px] 2xl:w-[184px] 3xl:w-[220px]"></div>
                              </Stack>
                              <Column className="lg:ml-[53px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] w-[18%]">
                                <Row className="items-end w-[67%]">
                                  <Text
                                    className="OneThousandFiveHundredSixtyFour"
                                    variant="body7"
                                  >
                                    通过率
                                  </Text>
                                  <Text className="Ninety" as="h3" variant="h3">
                                    90
                                  </Text>
                                  <Text
                                    className="OneThousandFiveHundredSixtyFive"
                                    variant="body5"
                                  >
                                    %
                                  </Text>
                                </Row>
                                <Row className="items-start ml-[1px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[99%]">
                                  <div className="bg-blue_A401 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius2 w-[2%]"></div>
                                  <Text
                                    className="OneThousandFiveHundredSixtySix"
                                    variant="body8"
                                  >
                                    通过数
                                  </Text>
                                  <Text className="zipcode_One" variant="body6">
                                    4500
                                  </Text>
                                </Row>
                                <Row className="items-start ml-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[99%]">
                                  <div className="bg-blue_50 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius2 w-[2%]"></div>
                                  <Text
                                    className="OneThousandFiveHundredSixtySix"
                                    variant="body8"
                                  >
                                    未通过数
                                  </Text>
                                  <Text className="FiveHundred" variant="body6">
                                    500
                                  </Text>
                                </Row>
                              </Column>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                        <Column className="justify-start lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] mt-[1px] w-[100%]">
                          <Row className="items-end w-[13%]">
                            <Text
                              className="rowtwothousandthirty"
                              variant="body4"
                            >
                              平稳性
                            </Text>
                            <Row className="items-start justify-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[23%]">
                              <Text className="B" as="h5" variant="h5">
                                B
                              </Text>
                              <Text
                                className="TwoThousandThirtyOne"
                                variant="body8"
                              >
                                级
                              </Text>
                            </Row>
                            <Img
                              src="images/img_signal_12X16.svg"
                              className="file6"
                              alt="signal"
                            />
                          </Row>
                          <Column className="items-center justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] rounded-radius4 w-[100%]">
                            <List
                              className="gap-[0] min-h-[auto] w-[100%]"
                              orientation="vertical"
                            >
                              <Row className="listonethousandninehundredseventyfour">
                                <Row className="items-center justify-between w-[12%]">
                                  <Text
                                    className="Brand_One_One"
                                    variant="body6"
                                  >
                                    横向平稳性
                                  </Text>
                                  <Text
                                    className="FiveHundredFiftyThree"
                                    variant="body6"
                                  >
                                    <span className="text-bluegray_500 font-dinpro1 lg:text-[14px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px]">
                                      C
                                    </span>
                                    <span className="text-bluegray_500 font-dinpro1 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                                      {" "}
                                    </span>
                                    <span className="text-bluegray_500 font-pingfangsc lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                                      级
                                    </span>
                                  </Text>
                                </Row>
                                <div className="bg-red_301 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius4 w-[28%]"></div>
                                <div className="bg-gray_52 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] rounded-radius4 w-[28%]"></div>
                                <div className="bg-gray_52 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] rounded-radius4 w-[28%]"></div>
                              </Row>
                              <Row className="listonethousandeighthundredsixtyseven">
                                <Row className="items-center justify-between w-[12%]">
                                  <Text
                                    className="Brand_One_One"
                                    variant="body6"
                                  >
                                    纵向平稳性
                                  </Text>
                                  <Text
                                    className="FiveHundredFiftyThree"
                                    variant="body6"
                                  >
                                    <span className="text-bluegray_500 font-dinpro1 lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                                      A{" "}
                                    </span>
                                    <span className="text-bluegray_500 font-pingfangsc lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                                      级
                                    </span>
                                  </Text>
                                </Row>
                                <Row className="items-center justify-between w-[84%]">
                                  <div className="bg-cyan_401 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] rounded-radius4 w-[33%]"></div>
                                  <div className="bg-cyan_401 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] rounded-radius4 w-[33%]"></div>
                                  <div className="bg-cyan_401 lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] rounded-radius4 w-[33%]"></div>
                                </Row>
                              </Row>
                            </List>
                          </Column>
                          <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] 2xl:ml-[106px] 3xl:ml-[127px] lg:ml-[75px] xl:ml-[94px] lg:mt-[34px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] rotate-[18deg] rounded-radius50 shadow-bs3 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
                          <List
                            className="lg:gap-[22px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-2 min-h-[auto] mt-[4px] w-[100%]"
                            orientation="horizontal"
                          >
                            <Column className="listonethousandninehundredseventysix">
                              <Row className="items-end justify-between lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[99%]">
                                <Column className="justify-start mb-[4px] w-[17%]">
                                  <Text
                                    className="font-semibold text-bluegray_800 w-[auto]"
                                    variant="body6"
                                  >
                                    横向平稳性
                                  </Text>
                                  <Row className="items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[1px] rounded-radius1 w-[80%]">
                                    <Row className="items-start justify-between w-[61%]">
                                      <Text className="C" as="h5" variant="h5">
                                        C
                                      </Text>
                                      <Text
                                        className="OneThousandFiveHundredSixtyNine"
                                        variant="body8"
                                      >
                                        级
                                      </Text>
                                    </Row>
                                    <Img
                                      src="images/img_signal.svg"
                                      className="signal"
                                      alt="signal One"
                                    />
                                  </Row>
                                  <Row className="items-center lg:mt-[118px] xl:mt-[148px] 2xl:mt-[167px] 3xl:mt-[200px] rounded-radius3 w-[96%]">
                                    <div className="bg-amber_300 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[5%]"></div>
                                    <Text
                                      className="rowtwenty_two"
                                      variant="body8"
                                    >
                                      横向平稳性
                                    </Text>
                                  </Row>
                                </Column>
                                <Column className="items-center justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] pt-[3px] w-[62%]">
                                  <Column className="justify-start w-[100%]">
                                    <Stack className="lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                      <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                        <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                          <div className="absolute border border-bluegray_500_63 border-dashed bottom-[4%] xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] right-[0] w-[91%]"></div>
                                          <Column className="absolute justify-start left-[0] w-[19%]">
                                            <Text
                                              className="columnfivehundredsixty"
                                              variant="body9"
                                            >
                                              用例数（个）
                                            </Text>
                                            <Text
                                              className="TwoHundred"
                                              variant="body9"
                                            >
                                              200
                                            </Text>
                                            <Text
                                              className="OneHundredFifty_One"
                                              variant="body9"
                                            >
                                              150
                                            </Text>
                                            <Text
                                              className="OneHundred_One"
                                              variant="body9"
                                            >
                                              100
                                            </Text>
                                            <Text
                                              className="Fifty_One"
                                              variant="body9"
                                            >
                                              50
                                            </Text>
                                            <Text
                                              className="Zero_One"
                                              variant="body9"
                                            >
                                              0
                                            </Text>
                                          </Column>
                                        </Stack>
                                        <Column className="absolute bottom-[23%] items-center justify-start right-[0] w-[91%]">
                                          <Line className="bg-bluegray_500_63 h-[1px] w-[100%]" />
                                          <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                          <Line className="bg-bluegray_500_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                        </Column>
                                      </Stack>
                                      <Row className="absolute bottom-[4%] items-end justify-between right-[13%] w-[65%]">
                                        <div className="bg-amber_300 3xl:h-[104px] lg:h-[62px] xl:h-[77px] 2xl:h-[87px] lg:mt-[36px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_500_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] w-[1px]" />
                                        <div className="bg-amber_300 lg:h-[41px] xl:h-[51px] 2xl:h-[58px] 3xl:h-[69px] lg:mt-[56px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_500_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] w-[1px]" />
                                        <div className="bg-amber_300 lg:h-[55px] xl:h-[68px] 2xl:h-[77px] 3xl:h-[92px] lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] rounded-radius3 w-[7%]"></div>
                                      </Row>
                                    </Stack>
                                    <Row className="items-center justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[67%]">
                                      <Text
                                        className="columnfivehundredsixty"
                                        variant="body9"
                                      >
                                        A级
                                      </Text>
                                      <Text
                                        className="test_45134"
                                        variant="body9"
                                      >
                                        B级
                                      </Text>
                                      <Text
                                        className="test_45174"
                                        variant="body9"
                                      >
                                        C级
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 border border-gray_202 border-solid items-center justify-end mb-[1px] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] rounded-radius8 w-[100%]">
                              <Row className="items-end justify-between lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[99%]">
                                <Column className="justify-start mb-[4px] w-[17%]">
                                  <Text
                                    className="font-semibold text-bluegray_802 w-[auto]"
                                    variant="body6"
                                  >
                                    纵向平稳性
                                  </Text>
                                  <Row className="items-end lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[1px] rounded-radius1 w-[80%]">
                                    <Row className="items-start justify-between w-[61%]">
                                      <Text className="A" as="h5" variant="h5">
                                        A
                                      </Text>
                                      <Text
                                        className="OneThousandFiveHundredSixtyNine"
                                        variant="body8"
                                      >
                                        级
                                      </Text>
                                    </Row>
                                    <Img
                                      src="images/img_group464_12X16.svg"
                                      className="signal"
                                      alt="Group464"
                                    />
                                  </Row>
                                  <Row className="items-center lg:mt-[118px] xl:mt-[148px] 2xl:mt-[167px] 3xl:mt-[200px] rounded-radius3 w-[96%]">
                                    <div className="bg-indigo_A101 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] rounded-radius2 w-[5%]"></div>
                                    <Text
                                      className="rowtwenty_two"
                                      variant="body8"
                                    >
                                      纵向平稳性
                                    </Text>
                                  </Row>
                                </Column>
                                <Column className="items-center justify-start lg:mt-[43px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] pt-[3px] w-[62%]">
                                  <Column className="justify-start w-[100%]">
                                    <Stack className="lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                      <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                        <Stack className="absolute lg:h-[119px] xl:h-[149px] 2xl:h-[168px] 3xl:h-[201px] w-[100%]">
                                          <div className="absolute border border-bluegray_600_63 border-dashed bottom-[4%] xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] right-[0] w-[91%]"></div>
                                          <Column className="absolute justify-start left-[0] w-[19%]">
                                            <Text
                                              className="columnfivehundredsixty"
                                              variant="body9"
                                            >
                                              用例数（个）
                                            </Text>
                                            <Text
                                              className="TwoHundred"
                                              variant="body9"
                                            >
                                              200
                                            </Text>
                                            <Text
                                              className="OneHundredFifty_One"
                                              variant="body9"
                                            >
                                              150
                                            </Text>
                                            <Text
                                              className="OneHundred_One"
                                              variant="body9"
                                            >
                                              100
                                            </Text>
                                            <Text
                                              className="Fifty_One"
                                              variant="body9"
                                            >
                                              50
                                            </Text>
                                            <Text
                                              className="Zero_One"
                                              variant="body9"
                                            >
                                              0
                                            </Text>
                                          </Column>
                                        </Stack>
                                        <Column className="absolute bottom-[23%] items-center justify-start right-[0] w-[91%]">
                                          <Line className="bg-bluegray_600_63 h-[1px] w-[100%]" />
                                          <Line className="bg-bluegray_600_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                          <Line className="bg-bluegray_600_63 h-[1px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[100%]" />
                                        </Column>
                                      </Stack>
                                      <Row className="absolute bottom-[4%] items-end justify-between right-[13%] w-[65%]">
                                        <div className="bg-indigo_A101 xl:h-[113px] 2xl:h-[128px] 3xl:h-[153px] lg:h-[91px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_600_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] w-[1px]" />
                                        <div className="bg-indigo_A101 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] rounded-radius3 w-[7%]"></div>
                                        <Line className="bg-bluegray_600_63 xl:h-[122px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] w-[1px]" />
                                        <div className="bg-indigo_A101 2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] rounded-radius3 w-[7%]"></div>
                                      </Row>
                                    </Stack>
                                    <Row className="items-center justify-end ml-[auto] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[67%]">
                                      <Text
                                        className="columnfivehundredsixty"
                                        variant="body9"
                                      >
                                        A级
                                      </Text>
                                      <Text
                                        className="test_45134"
                                        variant="body9"
                                      >
                                        B级
                                      </Text>
                                      <Text
                                        className="test_45174"
                                        variant="body9"
                                      >
                                        C级
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Column>
                          </List>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                  <Row className="absolute bg-gray_54 items-center lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] top-[0] w-[100%]">
                    <Row className="items-start xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] lg:ml-[9px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[96%]">
                      <Text
                        className="rowtwothousandthirtytwo"
                        as="h5"
                        variant="h5"
                      >
                        舒适性评估报告
                      </Text>
                      <Row className="items-start justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius1 w-[8%]">
                        <Text className="A" as="h1" variant="h1">
                          A
                        </Text>
                        <Text
                          className="OneThousandFiveHundredSeventySeven"
                          variant="body4"
                        >
                          级
                        </Text>
                        <Img
                          src="images/img_group464_19X20.svg"
                          className="signal_Two"
                          alt="Group464 One"
                        />
                      </Row>
                      <Column className="items-center justify-start lg:ml-[404px] xl:ml-[506px] 2xl:ml-[569px] 3xl:ml-[683px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] rounded-radius4 w-[26%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Column className="w-[22%]">
                            <Text className="rowbrand" variant="body9">
                              2022-07-26
                            </Text>
                            <Text
                              className="OneThousandFiveHundredSeventyEight"
                              variant="body9"
                            >
                              创建日期
                            </Text>
                          </Column>
                          <Line className="bg-gray_303 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius05 w-[1px]" />
                          <Column className="items-center w-[14%]">
                            <Text className="rowbrand" variant="body9">
                              14:00:32
                            </Text>
                            <Text
                              className="OneThousandFiveHundredSeventyEight"
                              variant="body9"
                            >
                              开始时间
                            </Text>
                          </Column>
                          <Line className="bg-gray_303 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius05 w-[1px]" />
                          <Column className="items-center w-[14%]">
                            <Text className="rowbrand" variant="body9">
                              00:23:51
                            </Text>
                            <Text
                              className="OneThousandFiveHundredEighty"
                              variant="body9"
                            >
                              测评时长
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </Row>
                  </Row>
                </Stack>
              </Column>
              <Line className="bg-bluegray_200 lg:h-[57px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[115px] xl:mt-[145px] 2xl:mt-[163px] 3xl:mt-[195px] rounded-radius2 w-[4px]" />
            </Row>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page53;
