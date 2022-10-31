import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Button,
  SelectBox,
  Stack,
} from "components";
import Header8 from "components/Header/Header8";
import Sidebar7 from "components/Sidebar/Sidebar7";
import I01rowFive from "components/Row/I01rowFive";

const I012Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header8 className="w-[100%]" />
          <Row className="font-alibabapuhuiti1 items-center justify-evenly w-[99%]">
            <Sidebar7 className="w-[20%]" />
            <Column className="font-pingfangsc items-center w-[80%]">
              <Column className="justify-end lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[99%]">
                <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[9%]">
                  <Text className="FiveHundredFiftyTwo" variant="body9">
                    资源库
                  </Text>
                  <Img
                    src="images/img_checkmark_3.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                  <Text className="SevenHundredSeventyNine" variant="body9">
                    被测算法
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
              </Column>
              <Column className="font-alibabapuhuiti1 justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[97%]">
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[10%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA401"
                >
                  新建被测算法
                </Button>
                <div className="font-pingfangsc lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                  <Row className="bg-white_A700 items-center lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] w-[100%]">
                    <Row className="items-center lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[8%]">
                      <Text
                        className="rowfivethousandfourhundredseventyseven"
                        variant="body9"
                      >
                        被测算法名称
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[37%]">
                      <Text
                        className="lg:ml-[232px] xl:ml-[290px] 2xl:ml-[327px] 3xl:ml-[392px] rowsixhundredfiftythree"
                        variant="body9"
                      >
                        被测算法版本
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[76%]">
                      <Text
                        className="lg:ml-[552px] xl:ml-[691px] 2xl:ml-[777px] 3xl:ml-[932px] rowsixhundredfiftythree"
                        variant="body9"
                      >
                        运行环境
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[99%]">
                      <Text
                        className="3xl:ml-[1128px] lg:ml-[668px] xl:ml-[836px] 2xl:ml-[940px] 2xl:mr-[104px] 3xl:mr-[124px] lg:mr-[73px] xl:mr-[92px] rowsixhundredfiftythree"
                        variant="body9"
                      >
                        操作
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[27%]">
                      <Text
                        className="lg:ml-[152px] xl:ml-[191px] 2xl:ml-[215px] 3xl:ml-[258px] rowsixhundredfiftythree"
                        variant="body9"
                      >
                        被测算法类型
                      </Text>
                    </Row>
                  </Row>
                  <Column className="items-center justify-start lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] w-[98%]">
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[8%]">
                        <Text
                          className="rowfivethousandsixhundredthirtyeight"
                          variant="body9"
                        >
                          Apollo V5.0
                        </Text>
                      </Row>
                      <Row className="items-center lg:pr-[113px] xl:pr-[141px] 2xl:pr-[159px] 3xl:pr-[190px] w-[37%]">
                        <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[53px] xl:pr-[66px] 2xl:pr-[75px] 3xl:pr-[90px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[100%]">
                          <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[92%]">
                            <Text
                              className="rowfivethousandsixhundredthirtyeight"
                              variant="body9"
                            >
                              Apollo V5.0
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              算法描述算法描述算法描述算法描述算法描述
                            </Text>
                          </Column>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          Apollo V5.0
                        </Text>
                      </Row>
                      <Row className="items-start lg:pr-[110px] xl:pr-[137px] 2xl:pr-[155px] 3xl:pr-[186px] w-[76%]">
                        <Column className="bg-white_A700 justify-end xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[53px] xl:pr-[66px] 2xl:pr-[75px] 3xl:pr-[90px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[49%]">
                          <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[92%]">
                            <Text
                              className="rowfivethousandsixhundredthirtyeight"
                              variant="body9"
                            >
                              Apollo V5.0
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              算法描述算法描述算法描述算法描述算法描述
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 justify-end lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[33%]">
                          <Text className="rowbrand" variant="body9">
                            Apollo V5.0
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 justify-end lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[2px] w-[33%]">
                          <Text className="rowbrand" variant="body9">
                            编译型
                          </Text>
                        </Column>
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                      <Row className="items-center xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] w-[99%]">
                        <Column className="items-center w-[89%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[53px] xl:pr-[66px] 2xl:pr-[75px] 3xl:pr-[90px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[35%]">
                              <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[92%]">
                                <Text
                                  className="rowfivethousandsixhundredthirtyeight"
                                  variant="body9"
                                >
                                  Apollo V5.0
                                </Text>
                                <Text
                                  className="TwoThousandFiveHundredThree"
                                  variant="body9"
                                >
                                  算法描述算法描述算法描述算法描述算法描述
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[23%]">
                              <Text className="rowbrand" variant="body9">
                                Apollo V5.0
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[2px] w-[24%]">
                              <Text className="rowbrand" variant="body9">
                                编译型
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:py-[17px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] w-[18%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                --
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray54"
                        >
                          <Img
                            src="images/img_share_28X28.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="share"
                          />
                        </Button>
                        <Row className="items-center justify-between lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[7%]">
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_edit_4.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="edit"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_trash_8.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="trash"
                            />
                          </Button>
                        </Row>
                      </Row>
                      <Row className="items-center justify-center lg:pr-[135px] xl:pr-[169px] 2xl:pr-[191px] 3xl:pr-[229px] w-[27%]">
                        <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[100%]">
                          <Text className="rowbrand" variant="body9">
                            Apollo V5.0
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          编译型
                        </Text>
                      </Row>
                    </Row>
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[8%]">
                        <Text
                          className="rowfivethousandsixhundredthirtyeight"
                          variant="body9"
                        >
                          Apollo V7.0
                        </Text>
                      </Row>
                      <Row className="items-center lg:pr-[113px] xl:pr-[141px] 2xl:pr-[159px] 3xl:pr-[190px] w-[37%]">
                        <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[53px] xl:pr-[66px] 2xl:pr-[75px] 3xl:pr-[90px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[100%]">
                          <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[92%]">
                            <Text
                              className="rowfivethousandsixhundredthirtyeight"
                              variant="body9"
                            >
                              Apollo V7.0
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              算法描述算法描述算法描述算法描述算法描述
                            </Text>
                          </Column>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          Apollo V5.0
                        </Text>
                      </Row>
                      <Row className="items-start lg:pr-[110px] xl:pr-[137px] 2xl:pr-[155px] 3xl:pr-[186px] w-[76%]">
                        <Column className="bg-white_A700 justify-end xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[53px] xl:pr-[66px] 2xl:pr-[75px] 3xl:pr-[90px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[49%]">
                          <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[92%]">
                            <Text
                              className="rowfivethousandsixhundredthirtyeight"
                              variant="body9"
                            >
                              Apollo V7.0
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              算法描述算法描述算法描述算法描述算法描述
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 justify-end lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[33%]">
                          <Text className="rowbrand" variant="body9">
                            Apollo V5.0
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 justify-end lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[2px] w-[33%]">
                          <Text className="rowbrand" variant="body9">
                            解释型
                          </Text>
                        </Column>
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                      <Row className="items-center xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] w-[99%]">
                        <Column className="items-center w-[89%]">
                          <Row className="items-center justify-evenly w-[100%]">
                            <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[53px] xl:pr-[66px] 2xl:pr-[75px] 3xl:pr-[90px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[35%]">
                              <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[92%]">
                                <Text
                                  className="rowfivethousandsixhundredthirtyeight"
                                  variant="body9"
                                >
                                  Apollo V7.0
                                </Text>
                                <Text
                                  className="TwoThousandFiveHundredThree"
                                  variant="body9"
                                >
                                  算法描述算法描述算法描述算法描述算法描述
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[23%]">
                              <Text className="rowbrand" variant="body9">
                                Apollo V5.0
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[2px] w-[24%]">
                              <Text className="rowbrand" variant="body9">
                                解释型
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 lg:py-[17px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] w-[18%]">
                              <Text className="test_75B1FF_One" variant="body9">
                                --
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray54"
                        >
                          <Img
                            src="images/img_share_28X28.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="share One"
                          />
                        </Button>
                        <Row className="items-center justify-between lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[7%]">
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_edit_4.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="edit One"
                            />
                          </Button>
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                            shape="icbRoundedBorder3"
                            size="mdIcn"
                            variant="icbFillGray54"
                          >
                            <Img
                              src="images/img_trash_8.svg"
                              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                              alt="trash One"
                            />
                          </Button>
                        </Row>
                      </Row>
                      <Row className="items-center justify-center lg:pr-[135px] xl:pr-[169px] 2xl:pr-[191px] 3xl:pr-[229px] w-[27%]">
                        <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[100%]">
                          <Text className="rowbrand" variant="body9">
                            Apollo V5.0
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          解释型
                        </Text>
                      </Row>
                    </Row>
                    <I01rowFive className="bg-white_A700 items-center justify-end xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] w-[100%]" />
                    <I01rowFive className="bg-white_A700 items-center justify-end xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] w-[100%]" />
                    <I01rowFive className="bg-white_A700 items-center justify-end xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] w-[100%]" />
                    <I01rowFive className="bg-white_A700 items-center justify-end xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] w-[100%]" />
                    <I01rowFive className="bg-white_A700 items-center justify-end xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] w-[100%]" />
                    <I01rowFive className="bg-white_A700 items-center justify-end xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] w-[100%]" />
                    <Row className="bg-white_A700 items-center justify-end xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] w-[100%]">
                      <Row className="items-center lg:pr-[113px] xl:pr-[141px] 2xl:pr-[159px] 3xl:pr-[190px] w-[38%]">
                        <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[54px] xl:pr-[67px] 2xl:pr-[76px] 3xl:pr-[91px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Column className="justify-start w-[92%]">
                            <Text
                              className="font-medium text-bluegray_800 w-[auto]"
                              variant="body9"
                            >
                              感知算法 V0.5
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              算法描述算法描述算法描述算法描述算法描述
                            </Text>
                          </Column>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          Apollo V5.0
                        </Text>
                      </Row>
                      <Row className="items-start lg:pr-[110px] xl:pr-[137px] 2xl:pr-[155px] 3xl:pr-[186px] w-[77%]">
                        <Column className="bg-white_A700 justify-end xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[54px] xl:pr-[67px] 2xl:pr-[76px] 3xl:pr-[91px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[49%]">
                          <Column className="justify-start w-[92%]">
                            <Text
                              className="font-medium text-bluegray_800 w-[auto]"
                              variant="body9"
                            >
                              感知算法 V0.5
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              算法描述算法描述算法描述算法描述算法描述
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 justify-end lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[33%]">
                          <Text className="rowbrand" variant="body9">
                            Apollo V5.0
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 justify-end lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[2px] w-[33%]">
                          <Text className="rowbrand" variant="body9">
                            docker镜像
                          </Text>
                        </Column>
                        <Text className="test_75B1FF_One" variant="body9">
                          --
                        </Text>
                      </Row>
                      <Row className="items-center xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] w-[100%]">
                        <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[54px] xl:pr-[67px] 2xl:pr-[76px] 3xl:pr-[91px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[31%]">
                          <Column className="justify-start w-[92%]">
                            <Text
                              className="font-medium text-bluegray_800 w-[auto]"
                              variant="body9"
                            >
                              感知算法 V0.5
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              算法描述算法描述算法描述算法描述算法描述
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[21%]">
                          <Text className="rowbrand" variant="body9">
                            Apollo V5.0
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[2px] w-[21%]">
                          <Text className="rowbrand" variant="body9">
                            docker镜像
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 lg:py-[17px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] w-[16%]">
                          <Text className="test_75B1FF_One" variant="body9">
                            --
                          </Text>
                        </Column>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray54"
                        >
                          <Img
                            src="images/img_share_28X28.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="share Eight"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray54"
                        >
                          <Img
                            src="images/img_edit_4.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="edit Eight"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray54"
                        >
                          <Img
                            src="images/img_trash_8.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="trash Eight"
                          />
                        </Button>
                      </Row>
                      <Row className="items-center justify-center lg:pr-[117px] xl:pr-[146px] 2xl:pr-[165px] 3xl:pr-[198px] w-[27%]">
                        <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[100%]">
                          <Text className="rowbrand" variant="body9">
                            Apollo V5.0
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          docker镜像
                        </Text>
                      </Row>
                    </Row>
                  </Column>
                </div>
                <Row className="font-pingfangsc items-center justify-end ml-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[44%]">
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
                      name="Group2737"
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
                      className="arrowleft"
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
                      className="arrowright"
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
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default I012Page;
