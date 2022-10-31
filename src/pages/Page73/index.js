import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Radio,
  SelectBox,
  Stack,
  Button,
} from "components";
import Header6 from "components/Header/Header6";
import Sidebar4 from "components/Sidebar/Sidebar4";

const Page73 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-alibabapuhuiti1 items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header6 className="w-[100%]" />
          <Row className="items-start justify-evenly w-[98%]">
            <Sidebar4 className="w-[20%]" />
            <Column className="font-pingfangsc justify-start w-[80%]">
              <Column className="items-center justify-start lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[100%]">
                <Column className="justify-start w-[99%]">
                  <Row className="items-start w-[20%]">
                    <Row className="items-start justify-evenly w-[58%]">
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        资源库
                      </Text>
                      <Img
                        src="images/img_checkmark_3.svg"
                        className="checkmark2"
                        alt="checkmark"
                      />
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        被测车辆管理
                      </Text>
                    </Row>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark One"
                    />
                    <Text className="SevenHundredSeventyNine" variant="body9">
                      新建被测车辆
                    </Text>
                  </Row>
                  <Line className="bg-gray_201 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                </Column>
              </Column>
              <Column className="justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[58%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  variant="body4"
                >
                  新建被测车辆
                </Text>
                <Row className="items-start justify-between lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[100%]">
                  <Text
                    className="rowtwothousandninehundredeightyone"
                    variant="body8"
                  >
                    * 名称
                  </Text>
                  <Row className="bg-white_A700 border border-gray_300 border-solid items-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius4 w-[76%]">
                    <Column className="items-center justify-start lg:mb-[49px] xl:mb-[61px] 2xl:mb-[69px] 3xl:mb-[82px] ml-[4px] mt-[4px] w-[14%]">
                      <Text className="OneHundredThirtyFive" variant="body8">
                        请输入名称
                      </Text>
                    </Column>
                    <Text
                      className="lg:ml-[262px] xl:ml-[328px] 2xl:ml-[369px] 3xl:ml-[443px] lg:mt-[52px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] columnfivehundredsixty"
                      variant="body8"
                    >
                      0{" "}
                    </Text>
                    <Text className="tips3" variant="body8">
                      /
                    </Text>
                    <Text className="tips_One1" variant="body8">
                      60
                    </Text>
                  </Row>
                </Row>
                <Row className="items-start justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="rowtwothousandninehundredeightyone"
                    variant="body8"
                  >
                    * 类型
                  </Text>
                  <Column className="items-center justify-start w-[76%]">
                    <Column className="bg-white_A700 border border-gray_300 border-solid justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[100%]">
                      <Radio
                        value="undefined"
                        className="font-normal ml-[1px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                        inputClassName="h-[16px] mr-[5px] w-[16px]"
                        checked={true}
                        name="FiveThousandFourHundredFortySeven"
                        label=""
                        shape="RoundedBorder8"
                        variant="OutlineBlueA400"
                      ></Radio>
                      <SelectBox
                        className="font-normal lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_200 w-[94%]"
                        placeholderClassName="text-bluegray_200"
                        name="Group255"
                        placeholder="请选择被测算法"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_2.svg"
                            className="lg:w-[11px] lg:h-[12px] lg:mr-[14px] xl:w-[14px] xl:h-[15px] xl:mr-[18px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[21px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[25px]"
                            alt="arrow_down"
                          />
                        }
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineBlueA400"
                      ></SelectBox>
                      <Stack className="lg:h-[144px] xl:h-[180px] 2xl:h-[203px] 3xl:h-[243px] my-[3px] w-[100%]">
                        <Column className="absolute bottom-[0] items-center justify-start w-[100%]">
                          <Column className="justify-start w-[100%]">
                            <Radio
                              value="undefined"
                              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              checked={false}
                              name="FiveThousandFourHundredFortyEight"
                              label=""
                            ></Radio>
                            <Row className="bg-gray_52 border border-gray_300 border-solid items-center ml-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[95%]">
                              <Column className="items-center w-[26%]">
                                <Text
                                  className="OneHundredThirtyFive"
                                  variant="body8"
                                >
                                  请选择被测工控机
                                </Text>
                              </Column>
                              <Img
                                src="images/img_arrowdown_2.svg"
                                className="lg:ml-[204px] xl:ml-[256px] 2xl:ml-[288px] 3xl:ml-[345px] arrowleft"
                                alt="arrowdown Three"
                              />
                            </Row>
                            <Radio
                              value="undefined"
                              className="font-normal lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              checked={false}
                              name="FiveThousandFourHundredFifty"
                              label=""
                            ></Radio>
                            <Row className="bg-gray_52 border border-gray_300 border-solid items-center ml-[auto] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[95%]">
                              <Column className="items-center w-[30%]">
                                <Text
                                  className="OneHundredThirtyFive"
                                  variant="body8"
                                >
                                  请选择被测域控制器
                                </Text>
                              </Column>
                              <Img
                                src="images/img_arrowdown_2.svg"
                                className="lg:ml-[194px] xl:ml-[243px] 2xl:ml-[274px] 3xl:ml-[328px] arrowleft"
                                alt="arrowdown Four"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="absolute bg-white_A700 items-center justify-start py-[4px] right-[0] rounded-radius4 shadow-bs6 top-[0] w-[95%]">
                          <Stack className="2xl:h-[109px] 3xl:h-[130px] lg:h-[77px] xl:h-[97px] w-[100%]">
                            <Column className="absolute items-center justify-start w-[100%]">
                              <Column className="items-center justify-start w-[100%]">
                                <Column className="items-center justify-start w-[100%]">
                                  <Column className="bg-gray_201 justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                                    <Text
                                      className="columntitle"
                                      variant="body8"
                                    >
                                      Apollo V5.0
                                    </Text>
                                  </Column>
                                  <Column className="justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[100%]">
                                    <Text
                                      className="columntitle"
                                      variant="body8"
                                    >
                                      Apollo V7.0
                                    </Text>
                                  </Column>
                                </Column>
                                <Column className="justify-start 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                                  <Text
                                    className="column2ndmenuitem"
                                    variant="body8"
                                  >
                                    感知算法 V2.3
                                  </Text>
                                </Column>
                              </Column>
                            </Column>
                            <Line className="absolute bg-bluegray_100 3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] inset-y-[0] my-[auto] right-[2%] rounded-radius25 w-[5px]" />
                          </Stack>
                          <Column className="justify-start 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                            <Text className="column2ndmenuitem" variant="body8">
                              感知算法 V2.4
                            </Text>
                          </Column>
                          <Column className="justify-start 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] w-[100%]">
                            <Text className="column2ndmenuitem" variant="body8">
                              感知算法 V2.5
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                    </Column>
                  </Column>
                </Row>
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    * 车辆类型
                  </Text>
                  <SelectBox
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_200 w-[76%]"
                    placeholderClassName="text-bluegray_200"
                    name="Group258"
                    placeholder="请选择车辆车型"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="lg:w-[11px] lg:h-[12px] lg:mr-[13px] xl:w-[14px] xl:h-[15px] xl:mr-[16px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[19px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[22px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineGray3001_2"
                  ></SelectBox>
                </Row>
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    * 车辆动力学配置
                  </Text>
                  <SelectBox
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_200 w-[76%]"
                    placeholderClassName="text-bluegray_200"
                    name="Group256"
                    placeholder="请选择车辆动力学配置"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="lg:w-[11px] lg:h-[12px] lg:mr-[13px] xl:w-[14px] xl:h-[15px] xl:mr-[16px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[19px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[22px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineGray3001_2"
                  ></SelectBox>
                </Row>
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    * 车辆传感器配置
                  </Text>
                  <SelectBox
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_200 w-[76%]"
                    placeholderClassName="text-bluegray_200"
                    name="Group257"
                    placeholder="请选择车辆传感器配置"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="lg:w-[11px] lg:h-[12px] lg:mr-[13px] xl:w-[14px] xl:h-[15px] xl:mr-[16px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[19px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[22px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineGray3001_2"
                  ></SelectBox>
                </Row>
                <Row className="items-center lg:ml-[110px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[21%]">
                  <Button
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGray201"
                  >
                    取消
                  </Button>
                  <Button
                    className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlueA400"
                  >
                    确认
                  </Button>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page73;
