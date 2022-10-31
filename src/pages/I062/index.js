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
import I06rowNine from "components/Row/I06rowNine";
import I06rowFifteen from "components/Row/I06rowFifteen";

const I062Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header8 className="w-[100%]" />
          <Row className="font-alibabapuhuiti1 items-center justify-evenly w-[99%]">
            <Sidebar7 className="w-[20%]" />
            <Column className="font-pingfangsc items-center w-[80%]">
              <Column className="justify-end lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[99%]">
                <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[11%]">
                  <Text className="FiveHundredFiftyTwo" variant="body9">
                    资源库
                  </Text>
                  <Img
                    src="images/img_checkmark_3.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                  <Text className="SevenHundredSeventyNine" variant="body9">
                    被测工控机
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
              </Column>
              <Column className="font-alibabapuhuiti1 justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[97%]">
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[11%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA401"
                >
                  新建被测工控机
                </Button>
                <div className="font-pingfangsc lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                  <Row className="bg-white_A700 items-center lg:pr-[12px] xl:pr-[15px] 2xl:pr-[17px] 3xl:pr-[20px] w-[100%]">
                    <Row className="items-center lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[9%]">
                      <Text
                        className="rowfivethousandfourhundredseventyseven"
                        variant="body9"
                      >
                        被测工控机名称
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[100%]">
                      <Text
                        className="rowfivethousandfourhundredseventyeight"
                        variant="body9"
                      >
                        操作
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[40%]">
                      <Text
                        className="rowfivethousandeighthundredeightyone"
                        variant="body9"
                      >
                        被测工控机类型
                      </Text>
                    </Row>
                    <Row className="items-center justify-center 3xl:pl-[10px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[10px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] w-[25%]">
                      <Text className="rowdomainid" variant="body9">
                        DomainID
                      </Text>
                    </Row>
                    <Row className="items-center justify-center lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] w-[23%]">
                      <Text
                        className="rowfivethousandeighthundredeightytwo"
                        variant="body9"
                      >
                        连接状态
                      </Text>
                    </Row>
                  </Row>
                  <Column className="items-center justify-start lg:mr-[12px] xl:mr-[15px] 2xl:mr-[17px] 3xl:mr-[20px] w-[98%]">
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <Text
                          className="rowfivethousandsixhundredthirtyeight"
                          variant="body9"
                        >
                          吉利 V1.1
                        </Text>
                      </Row>
                      <Row className="items-center xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Row className="items-center justify-evenly w-[88%]">
                              <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[37%]">
                                <Column className="justify-start lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[72%]">
                                  <Text
                                    className="rowfivethousandsixhundredthirtyeight"
                                    variant="body9"
                                  >
                                    吉利 V1.1
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    被测工控机描述被测工控机名称被测工控机描述
                                  </Text>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[23%]">
                                <Text className="rowbrand" variant="body9">
                                  Cyber RT
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[22%]">
                                <Text className="rowbrand" variant="body9">
                                  345
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] w-[18%]">
                                <Text
                                  className="columnfivethousandeighthundredeightyfour"
                                  variant="body9"
                                >
                                  连接成功
                                </Text>
                              </Column>
                            </Row>
                            <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                        </Column>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                      </Row>
                      <Row className="items-center lg:pr-[120px] xl:pr-[151px] 2xl:pr-[170px] 3xl:pr-[204px] w-[40%]">
                        <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
                          <Column className="justify-start lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[72%]">
                            <Text
                              className="rowfivethousandsixhundredthirtyeight"
                              variant="body9"
                            >
                              吉利 V1.1
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              被测工控机描述被测工控机名称被测工控机描述
                            </Text>
                          </Column>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          Cyber RT
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:pr-[132px] xl:pr-[165px] 2xl:pr-[186px] 3xl:pr-[223px] w-[25%]">
                        <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[100%]">
                          <Text className="rowbrand" variant="body9">
                            Cyber RT
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          345
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:pr-[107px] 2xl:pr-[121px] 3xl:pr-[145px] lg:pr-[86px] w-[23%]">
                        <Column className="bg-white_A700 pb-[1px] lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[100%]">
                          <Text className="rowbrand" variant="body9">
                            345
                          </Text>
                        </Column>
                        <Text className="columnfortyseven" variant="body9">
                          连接成功
                        </Text>
                      </Row>
                    </Row>
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <Text
                          className="rowfivethousandsixhundredthirtyeight"
                          variant="body9"
                        >
                          Apollo V6.0
                        </Text>
                      </Row>
                      <Row className="items-center xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[100%]">
                        <Column className="items-center w-[100%]">
                          <Row className="items-center justify-between w-[100%]">
                            <Row className="items-center justify-evenly w-[88%]">
                              <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[37%]">
                                <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[72%]">
                                  <Text
                                    className="rowfivethousandsixhundredthirtyeight"
                                    variant="body9"
                                  >
                                    Apollo V6.0
                                  </Text>
                                  <Text
                                    className="TwoThousandFiveHundredThree"
                                    variant="body9"
                                  >
                                    被测工控机描述被测工控机名称被测工控机描述
                                  </Text>
                                </Column>
                              </Column>
                              <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[23%]">
                                <Text className="rowbrand" variant="body9">
                                  Cyber RT
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 pb-[1px] lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[22%]">
                                <Text className="rowbrand" variant="body9">
                                  123
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] w-[18%]">
                                <Text
                                  className="mt-[2px] columnfiftyseven"
                                  variant="body9"
                                >
                                  连接失败
                                </Text>
                              </Column>
                            </Row>
                            <Row className="bg-white_A700 items-center justify-between lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                              <Button
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                                className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                        </Column>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                      </Row>
                      <Row className="items-center lg:pr-[120px] xl:pr-[151px] 2xl:pr-[170px] 3xl:pr-[204px] w-[40%]">
                        <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[100%]">
                          <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[72%]">
                            <Text
                              className="rowfivethousandsixhundredthirtyeight"
                              variant="body9"
                            >
                              Apollo V6.0
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              被测工控机描述被测工控机名称被测工控机描述
                            </Text>
                          </Column>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          Cyber RT
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:pr-[133px] xl:pr-[167px] 2xl:pr-[188px] 3xl:pr-[225px] w-[25%]">
                        <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[100%]">
                          <Text className="rowbrand" variant="body9">
                            Cyber RT
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          123
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:pr-[107px] 2xl:pr-[121px] 3xl:pr-[145px] lg:pr-[86px] w-[23%]">
                        <Column className="bg-white_A700 pb-[1px] lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[100%]">
                          <Text className="rowbrand" variant="body9">
                            123
                          </Text>
                        </Column>
                        <Text className="columnfiftyseven" variant="body9">
                          连接失败
                        </Text>
                      </Row>
                    </Row>
                    <I06rowNine className="bg-white_A700 items-center w-[100%]" />
                    <I06rowNine className="bg-white_A700 items-center w-[100%]" />
                    <I06rowNine className="bg-white_A700 items-center w-[100%]" />
                    <I06rowFifteen className="bg-white_A700 items-center w-[100%]" />
                    <I06rowFifteen className="bg-white_A700 items-center w-[100%]" />
                    <I06rowNine className="bg-white_A700 items-center w-[100%]" />
                    <Row className="bg-white_A700 items-center w-[100%]">
                      <Row className="items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
                        <Text
                          className="rowfivethousandsixhundredthirtyeight"
                          variant="body9"
                        >
                          Apollo V3.0
                        </Text>
                      </Row>
                      <Row className="items-center justify-end w-[100%]">
                        <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[32%]">
                          <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[72%]">
                            <Text
                              className="rowfivethousandsixhundredthirtyeight"
                              variant="body9"
                            >
                              Apollo V3.0
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              被测工控机描述被测工控机名称被测工控机描述
                            </Text>
                          </Column>
                        </Column>
                        <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pr-[3px] pt-[3px] w-[20%]">
                          <Text className="rowbrand" variant="body9">
                            Cyber RT
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 pb-[1px] lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[19%]">
                          <Text className="rowbrand" variant="body9">
                            57654
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] w-[15%]">
                          <Text
                            className="columnfivethousandeighthundredeightyfour"
                            variant="body9"
                          >
                            连接成功
                          </Text>
                        </Column>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                        <Row className="bg-white_A700 items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                          <Button
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
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
                      </Row>
                      <Row className="items-center xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] w-[40%]">
                        <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[5px] xl:pr-[7px] 2xl:pr-[8px] 3xl:pr-[9px] lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[86%]">
                          <Column className="justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[72%]">
                            <Text
                              className="rowfivethousandsixhundredthirtyeight"
                              variant="body9"
                            >
                              Apollo V3.0
                            </Text>
                            <Text
                              className="TwoThousandFiveHundredThree"
                              variant="body9"
                            >
                              被测工控机描述被测工控机名称被测工控机描述
                            </Text>
                          </Column>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          Cyber RT
                        </Text>
                      </Row>
                      <Row className="items-center justify-center lg:pr-[121px] xl:pr-[152px] 2xl:pr-[171px] 3xl:pr-[205px] w-[25%]">
                        <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pr-[3px] pt-[3px] w-[100%]">
                          <Text className="rowbrand" variant="body9">
                            Cyber RT
                          </Text>
                        </Column>
                        <Text className="rowbrand" variant="body9">
                          57654
                        </Text>
                      </Row>
                      <Row className="items-center justify-center xl:pr-[107px] 2xl:pr-[121px] 3xl:pr-[145px] lg:pr-[86px] w-[23%]">
                        <Column className="bg-white_A700 pb-[1px] lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[100%]">
                          <Text className="rowbrand" variant="body9">
                            57654
                          </Text>
                        </Column>
                        <Text className="columnfortyseven" variant="body9">
                          连接成功
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
                      name="Group3246"
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

export default I062Page;
