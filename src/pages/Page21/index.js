import React from "react";

import {
  Column,
  Text,
  Line,
  Row,
  Input,
  List,
  SelectBox,
  Img,
  CheckBox,
  Stack,
} from "components";

const Page21 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] w-[100%]">
        <Column className="justify-start lg:mb-[538px] xl:mb-[673px] 2xl:mb-[757px] 3xl:mb-[909px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
          <Text
            className="font-semibold text-black_900_e5 w-[auto]"
            as="h5"
            variant="h5"
          >
            表单
          </Text>
          <Column className="justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              输入框
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
          <Row className="items-start justify-between lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[100%]">
            <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[29%]">
              <Input
                className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-gray_401 text-gray_401 w-[100%]"
                wrapClassName="w-[100%]"
                name="PropertyOne"
                placeholder="请输入案例名称"
                shape="RoundedBorder4"
                size="md"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-gray_401 text-gray_401 w-[100%]"
                wrapClassName="2xl:mt-[14px] 3xl:mt-[17px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                name="PropertyOne One"
                placeholder="请输入案例名称"
                shape="RoundedBorder4"
                size="md"
                variant="OutlineBlueA200"
              ></Input>
              <Column className="bg-white_A700 border border-blue_A400 border-solid justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius4 w-[100%]">
                <Text
                  className="mb-[3px] ml-[2px] columnthirtyseven"
                  variant="body8"
                >
                  |
                </Text>
              </Column>
              <Input
                className="placeholder:text-bluegray_800 PropertyOne_Two"
                wrapClassName="2xl:mt-[14px] 3xl:mt-[17px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                name="PropertyOne Two"
                placeholder="输入完成"
                shape="RoundedBorder4"
                size="md"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_500 text-bluegray_500 w-[100%]"
                wrapClassName="2xl:mt-[14px] 3xl:mt-[17px] lg:mt-[10px] w-[100%] xl:mt-[13px]"
                name="PropertyOne Three"
                placeholder="禁用状态"
                shape="RoundedBorder4"
                size="md"
                variant="OutlineGray3001_2"
              ></Input>
            </Column>
            <List
              className="border border-deep_purple_A200 border-solid gap-[0] min-h-[auto] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[29%]"
              orientation="vertical"
            >
              <Column className="bg-white_A700 border border-gray_300 border-solid justify-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[100%]">
                <Text className="Property" variant="body8">
                  请输入描述
                </Text>
                <Row className="items-center justify-end lg:ml-[228px] xl:ml-[285px] 2xl:ml-[320px] 3xl:ml-[385px] mr-[4px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[9%]">
                  <Text className="FiveHundredFiftyThree" variant="body8">
                    0{" "}
                  </Text>
                  <Text className="tips" variant="body8">
                    /
                  </Text>
                  <Text className="tips_One" variant="body8">
                    100
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 border border-blue_A200 border-solid justify-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[100%]">
                <Text className="Property" variant="body8">
                  请输入描述
                </Text>
                <Row className="items-center justify-end lg:ml-[228px] xl:ml-[285px] 2xl:ml-[320px] 3xl:ml-[385px] mr-[4px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[9%]">
                  <Text className="FiveHundredFiftyThree" variant="body8">
                    0{" "}
                  </Text>
                  <Text className="tips" variant="body8">
                    /
                  </Text>
                  <Text className="tips_One" variant="body8">
                    100
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 border border-blue_A400 border-solid justify-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[100%]">
                <Text
                  className="ml-[4px] lg:mr-[248px] xl:mr-[311px] 2xl:mr-[350px] 3xl:mr-[420px] mt-[2px] columnthirtyseven"
                  variant="body8"
                >
                  |
                </Text>
                <Row className="items-center justify-end lg:ml-[228px] xl:ml-[285px] 2xl:ml-[320px] 3xl:ml-[385px] mr-[4px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[9%]">
                  <Text className="FiveHundredFiftyThree" variant="body8">
                    0{" "}
                  </Text>
                  <Text className="tips" variant="body8">
                    /
                  </Text>
                  <Text className="tips_One" variant="body8">
                    100
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid justify-end lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[100%]">
                <Text
                  className="lg:mr-[221px] xl:mr-[276px] 2xl:mr-[311px] 3xl:mr-[373px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] rowellipsenine_two"
                  variant="body8"
                >
                  输入完成
                </Text>
                <Row className="items-center justify-end lg:ml-[228px] xl:ml-[285px] 2xl:ml-[320px] 3xl:ml-[385px] mr-[4px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] w-[9%]">
                  <Text className="tips_Three" variant="body8">
                    4
                  </Text>
                  <Text className="tips" variant="body8">
                    /
                  </Text>
                  <Text className="tips_One" variant="body8">
                    100
                  </Text>
                </Row>
              </Column>
            </List>
            <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[29%]">
              <Row className="items-center w-[100%]">
                <Input
                  className="placeholder:text-bluegray_200 GroupFour"
                  wrapClassName="w-[47%]"
                  name="GroupFour"
                  placeholder="请输入区间值"
                  shape="RoundedBorder4"
                  size="md"
                ></Input>
                <div className="bg-gray_300 h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] w-[3%]"></div>
                <Input
                  className="placeholder:text-bluegray_200 GroupFour"
                  wrapClassName="2xl:ml-[5px] 3xl:ml-[7px] lg:ml-[4px] w-[47%] xl:ml-[5px]"
                  name="GroupThree"
                  placeholder="请输入区间值"
                  shape="RoundedBorder4"
                  size="md"
                ></Input>
              </Row>
              <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                <Input
                  className="placeholder:text-bluegray_200 GroupFour"
                  wrapClassName="w-[47%]"
                  name="GroupEight"
                  placeholder="请输入区间值"
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineBlueA200"
                ></Input>
                <div className="bg-gray_300 h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] w-[3%]"></div>
                <Input
                  className="placeholder:text-bluegray_200 GroupFour"
                  wrapClassName="2xl:ml-[5px] 3xl:ml-[7px] lg:ml-[4px] w-[47%] xl:ml-[5px]"
                  name="GroupSeven"
                  placeholder="请输入区间值"
                  shape="RoundedBorder4"
                  size="md"
                ></Input>
              </Row>
              <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                <Text
                  className="bg-white_A700 border border-blue_A400 border-solid font-normal not-italic 3xl:pb-[11px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[18px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] rounded-radius4 text-blue_A400 w-[234px]"
                  variant="body8"
                >
                  |
                </Text>
                <div className="bg-gray_300 h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] w-[3%]"></div>
                <Input
                  className="placeholder:text-bluegray_200 GroupFour"
                  wrapClassName="2xl:ml-[5px] 3xl:ml-[7px] lg:ml-[4px] w-[47%] xl:ml-[5px]"
                  name="GroupNine"
                  placeholder="请输入区间值"
                  shape="RoundedBorder4"
                  size="md"
                ></Input>
              </Row>
              <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                <Input
                  className="placeholder:text-bluegray_800 PropertyOne_Two"
                  wrapClassName="w-[47%]"
                  name="GroupSix"
                  placeholder="580"
                  shape="RoundedBorder4"
                  size="md"
                ></Input>
                <div className="bg-gray_300 h-[1px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] w-[3%]"></div>
                <Input
                  className="placeholder:text-bluegray_800 PropertyOne_Two"
                  wrapClassName="2xl:ml-[5px] 3xl:ml-[7px] lg:ml-[4px] w-[47%] xl:ml-[5px]"
                  name="GroupFive"
                  placeholder="600"
                  shape="RoundedBorder4"
                  size="md"
                ></Input>
              </Row>
            </Column>
          </Row>
          <Column className="justify-start 2xl:mt-[105px] 3xl:mt-[126px] lg:mt-[74px] xl:mt-[93px] w-[84%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              选择器
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
          <Row className="items-start ml-[2px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[66%]">
            <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[46%]">
              <SelectBox
                className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_200 w-[86%]"
                placeholderClassName="text-bluegray_200"
                name="PropertyOne Four"
                placeholder="请选择被测算法"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_2.svg"
                    className="lg:w-[8px] lg:h-[9px] lg:mr-[10px] xl:w-[10px] xl:h-[11px] xl:mr-[13px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[15px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[18px]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineGray3001_2"
              ></SelectBox>
              <SelectBox
                className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_200 w-[86%]"
                placeholderClassName="text-bluegray_200"
                name="PropertyOne Five"
                placeholder="请选择被测算法"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_3.svg"
                    className="lg:w-[8px] lg:h-[9px] lg:mr-[10px] xl:w-[10px] xl:h-[11px] xl:mr-[13px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[15px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[18px]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineBlueA200"
              ></SelectBox>
              <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[86%]">
                <SelectBox
                  className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_200 w-[100%]"
                  placeholderClassName="text-bluegray_200"
                  name="GroupOne"
                  placeholder="请选择被测算法"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_4.svg"
                      className="lg:w-[8px] lg:h-[9px] lg:mr-[10px] xl:w-[10px] xl:h-[11px] xl:mr-[13px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[15px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[18px]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineBlueA400"
                ></SelectBox>
                <Column className="bg-white_A700 items-center justify-start mt-[2px] py-[4px] rounded-radius4 shadow-bs6 w-[100%]">
                  <Input
                    className="placeholder:text-bluegray_800 PropertyOne_Two"
                    wrapClassName="w-[100%]"
                    name="ComponentsDrop"
                    placeholder="被测算法1"
                    size="md"
                    variant="FillGray201"
                  ></Input>
                  <Column className="justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                    <Text className="column2ndmenuitem" variant="body8">
                      被测算法2
                    </Text>
                  </Column>
                  <Column className="justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                    <Text className="column2ndmenuitem" variant="body8">
                      被测算法3
                    </Text>
                  </Column>
                  <Column className="justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                    <Text className="column2ndmenuitem" variant="body8">
                      被测算法4
                    </Text>
                  </Column>
                  <Column className="justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] w-[100%]">
                    <Text className="column2ndmenuitem" variant="body8">
                      被测算法5
                    </Text>
                  </Column>
                </Column>
              </Column>
              <SelectBox
                className="font-normal lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_800 w-[86%]"
                placeholderClassName="text-bluegray_800"
                name="PropertyOne Six"
                placeholder="被测算法1"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_2.svg"
                    className="lg:w-[8px] lg:h-[9px] lg:mr-[10px] xl:w-[10px] xl:h-[11px] xl:mr-[13px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[15px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[18px]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineGray3001_2"
              ></SelectBox>
              <SelectBox
                className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_500 w-[86%]"
                placeholderClassName="text-bluegray_500"
                name="PropertyOne Seven"
                placeholder="禁用状态"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_2.svg"
                    className="lg:w-[8px] lg:h-[9px] lg:mr-[10px] xl:w-[10px] xl:h-[11px] xl:mr-[13px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[15px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[18px]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineGray3001_2"
              ></SelectBox>
            </Column>
            <Column className="border border-deep_purple_A200 border-solid justify-start lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[87px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[46%]">
              <List
                className="gap-[0] min-h-[auto] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[91%]"
                orientation="vertical"
              >
                <Column className="listtwothousandtwohundredsixteen">
                  <Row className="items-center w-[11%]">
                    <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft5"></div>
                    <Text
                      className="rowtwothousandtwohundredsixteen"
                      variant="body8"
                    >
                      感知
                    </Text>
                  </Row>
                  <SelectBox
                    className="font-normal lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_200 w-[95%]"
                    placeholderClassName="text-bluegray_200"
                    name="TwoThousandTwoHundredEighteen"
                    placeholder="请选择接入协议"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="lg:w-[8px] lg:h-[9px] lg:mr-[10px] xl:w-[10px] xl:h-[11px] xl:mr-[13px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[15px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[18px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineGray3001_2"
                  ></SelectBox>
                </Column>
                <Column className="listtwothousandtwohundredsixteen">
                  <Row className="items-center w-[11%]">
                    <CheckBox
                      className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="Group3370"
                      label=""
                    ></CheckBox>
                    <Text
                      className="rowtwothousandtwohundredsixteen"
                      variant="body8"
                    >
                      感知
                    </Text>
                  </Row>
                  <SelectBox
                    className="font-normal lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_200 w-[95%]"
                    placeholderClassName="text-bluegray_200"
                    name="TwoThousandTwoHundredTwenty"
                    placeholder="请选择接入协议"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_3.svg"
                        className="lg:w-[8px] lg:h-[9px] lg:mr-[10px] xl:w-[10px] xl:h-[11px] xl:mr-[13px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[15px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[18px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineBlueA200"
                  ></SelectBox>
                </Column>
              </List>
              <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] pt-[2px] w-[91%]">
                <Row className="items-center w-[11%]">
                  <CheckBox
                    className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px]"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    name="Group3372"
                    label=""
                  ></CheckBox>
                  <Text
                    className="rowtwothousandtwohundredsixteen"
                    variant="body8"
                  >
                    感知
                  </Text>
                </Row>
                <Column className="items-center justify-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[95%]">
                  <Row className="bg-white_A700 border border-blue_A400 border-solid items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius4 w-[100%]">
                    <Column className="items-center w-[23%]">
                      <Text className="OneHundredThirtyFive" variant="body8">
                        请选择接入协议
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrowdown_4.svg"
                      className="lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] arrowleft5"
                      alt="arrowdown Three"
                    />
                  </Row>
                  <Column className="bg-white_A700 items-center justify-start mt-[2px] pt-[4px] shadow-bs6 w-[100%]">
                    <Text
                      className="bg-gray_201 font-normal not-italic 3xl:pl-[10px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] lg:pr-[18px] xl:pr-[22px] 2xl:pr-[25px] 3xl:pr-[30px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] text-bluegray_800 w-[449px]"
                      variant="body8"
                    >
                      接入协议1
                    </Text>
                    <Column className="justify-end lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[37px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                      <Text className="column2ndmenuitem_one" variant="body8">
                        接入协议2
                      </Text>
                    </Column>
                    <Column className="justify-end lg:mt-[40px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                      <Text className="column2ndmenuitem_one" variant="body8">
                        接入协议3
                      </Text>
                    </Column>
                    <Column className="justify-end 3xl:mt-[100px] lg:mt-[59px] xl:mt-[74px] 2xl:mt-[83px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                      <Text className="column2ndmenuitem_one" variant="body8">
                        接入协议4
                      </Text>
                    </Column>
                    <Column className="justify-end 2xl:mt-[110px] 3xl:mt-[132px] lg:mt-[78px] xl:mt-[97px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] w-[100%]">
                      <Text className="column2ndmenuitem_one" variant="body8">
                        接入协议5
                      </Text>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[109px] xl:mt-[137px] 2xl:mt-[154px] 3xl:mt-[185px] w-[91%]"
                orientation="vertical"
              >
                <Column className="listtwothousandtwohundredsixteen">
                  <Row className="items-center w-[11%]">
                    <CheckBox
                      className="xl:h-[11px] 2xl:h-[12px] 3xl:h-[15px] lg:h-[9px]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="Group3371"
                      label=""
                    ></CheckBox>
                    <Text
                      className="rowtwothousandtwohundredsixteen"
                      variant="body8"
                    >
                      感知
                    </Text>
                  </Row>
                  <SelectBox
                    className="font-normal lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_800 w-[95%]"
                    placeholderClassName="text-bluegray_800"
                    name="TwoThousandTwoHundredTwentyTwo"
                    placeholder="接入协议1"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="lg:w-[8px] lg:h-[9px] lg:mr-[10px] xl:w-[10px] xl:h-[11px] xl:mr-[13px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[15px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[18px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineGray3001_2"
                  ></SelectBox>
                </Column>
                <Column className="listtwothousandtwohundredsixteen">
                  <Row className="items-center w-[11%]">
                    <div className="bg-gray_101 border border-bluegray_100 border-solid rounded-radius2 arrowleft5"></div>
                    <Text
                      className="rowtwothousandtwohundredsixteen"
                      variant="body8"
                    >
                      感知
                    </Text>
                  </Row>
                  <SelectBox
                    className="font-normal lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-bluegray_500 w-[95%]"
                    placeholderClassName="text-bluegray_500"
                    name="TwoThousandTwoHundredTwentyFive"
                    placeholder="禁用状态"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_2.svg"
                        className="lg:w-[8px] lg:h-[9px] lg:mr-[10px] xl:w-[10px] xl:h-[11px] xl:mr-[13px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[15px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[18px]"
                        alt="arrow_down"
                      />
                    }
                    shape="RoundedBorder4"
                    size="lg"
                    variant="OutlineGray3001_2"
                  ></SelectBox>
                </Column>
              </List>
            </Column>
          </Row>
          <Column className="justify-start xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[85px] w-[84%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              上传
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
          <Row className="items-start ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[47%]">
            <Column className="border border-deep_purple_A200 border-solid items-center justify-start 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[18%]">
              <Column className="bg-white_A700 border border-gray_300 border-solid 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] items-center justify-center lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[21px] rounded-radius4 3xl:w-[105px] lg:w-[62px] xl:w-[78px] 2xl:w-[88px]">
                <Img
                  src="images/img_plus_1.svg"
                  className="lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] arrowdown"
                  alt="plus"
                />
                <Text
                  className="3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] columnfivehundredsixty"
                  variant="body9"
                >
                  点击上传图片
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-blue_A200 border-solid 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:px-[12px] xl:px-[15px] 2xl:px-[17px] 3xl:px-[21px] rounded-radius4 3xl:w-[105px] lg:w-[62px] xl:w-[78px] 2xl:w-[88px]">
                <Img
                  src="images/img_plus_2.svg"
                  className="lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] arrowdown"
                  alt="plus One"
                />
                <Text
                  className="font-normal 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] not-italic text-blue_A200 w-[auto]"
                  variant="body9"
                >
                  点击上传图片
                </Text>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[14px] lg:px-[8px] rounded-radius4 3xl:w-[105px] lg:w-[62px] xl:w-[78px] 2xl:w-[88px]">
                <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[100%]">
                  <Stack className="bg-gray_300 2xl:h-[3px] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius2 w-[100%]">
                    <Img
                      src="images/img_progressinner.svg"
                      className="absolute 2xl:h-[3px] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] right-[0] rounded-radius2 w-[57%]"
                      alt="progressinner"
                    />
                  </Stack>
                </Column>
                <Text
                  className="lg:my-[11px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] columnfivehundredsixty"
                  variant="body9"
                >
                  上传中
                </Text>
              </Column>
              <Stack className="border border-gray_300 border-solid 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] rounded-radius4 3xl:w-[105px] lg:w-[62px] xl:w-[78px] 2xl:w-[88px]">
                <Img
                  src="images/img_rectangle293.png"
                  className="absolute 3xl:h-[105px] lg:h-[63px] xl:h-[78px] 2xl:h-[88px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                  alt="Rectangle293"
                />
              </Stack>
              <Stack className="3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] 3xl:w-[105px] lg:w-[62px] xl:w-[78px] 2xl:w-[88px]">
                <Stack className="absolute bottom-[1%] 3xl:h-[105px] lg:h-[63px] xl:h-[78px] 2xl:h-[88px] w-[100%]">
                  <Img
                    src="images/img_rectangle293.png"
                    className="absolute 3xl:h-[105px] lg:h-[63px] xl:h-[78px] 2xl:h-[88px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                    alt="Rectangle293 One"
                  />
                </Stack>
                <Row className="absolute bg-black_900_cc border border-gray_300 border-solid 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] items-center lg:px-[17px] xl:px-[22px] 2xl:px-[24px] 3xl:px-[29px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_eye_2.svg"
                    className="xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:my-[9px] arrowleft5"
                    alt="eye"
                  />
                  <Img
                    src="images/img_trash_3.svg"
                    className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[14px] 3xl:ml-[17px] xl:my-[11px] 2xl:my-[13px] 3xl:my-[15px] lg:my-[9px] arrowleft5"
                    alt="trash"
                  />
                </Row>
              </Stack>
              <Column className="bg-white_A700 border border-red_600 border-solid 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] lg:px-[18px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] rounded-radius4 3xl:w-[105px] lg:w-[62px] xl:w-[78px] 2xl:w-[88px]">
                <Img
                  src="images/img_close_2.svg"
                  className="lg:h-[11px] xl:h-[14px] 2xl:h-[15px] 3xl:h-[18px] lg:w-[10px] xl:w-[13px] 2xl:w-[14px] 3xl:w-[17px]"
                  alt="close"
                />
                <Text
                  className="mb-[2px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] columnfiftyseven"
                  variant="body9"
                >
                  上传失败
                </Text>
              </Column>
            </Column>
            <Column className="border border-deep_purple_A200 border-solid items-center justify-start xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[61%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] lg:p-[31px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[53px] rounded-radius4 w-[100%]">
                  <Row className="items-center justify-center py-[3px] w-[43%]">
                    <Column className="items-center rounded-radius3 w-[34%]">
                      <Text className="columnthirtyseven" variant="body8">
                        点击上传
                      </Text>
                    </Column>
                    <Img
                      src="images/img_slash_16X16.svg"
                      className="slash1"
                      alt="slash"
                    />
                    <Text
                      className="rowtwothousandtwohundredtwentysix"
                      variant="body8"
                    >
                      拖拽到此区域
                    </Text>
                  </Row>
                </Column>
                <Line className="self-center w-[100%] justify-start items-center lg:mb-[101px] xl:mb-[126px] 2xl:mb-[142px] 3xl:mb-[170px]" />
                <Column className="bg-white_A700 border border-blue_A200 border-solid items-center justify-start lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] lg:p-[31px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[53px] rounded-radius4 w-[100%]">
                  <Row className="items-center justify-center py-[3px] w-[43%]">
                    <Column className="items-center rounded-radius3 w-[34%]">
                      <Text
                        className="font-normal not-italic text-blue_A200 w-[auto]"
                        variant="body8"
                      >
                        点击上传
                      </Text>
                    </Column>
                    <Img
                      src="images/img_slash_1.svg"
                      className="slash1"
                      alt="slash One"
                    />
                    <Text
                      className="font-normal ml-[4px] not-italic text-blue_A200 w-[auto]"
                      variant="body8"
                    >
                      拖拽到此区域
                    </Text>
                  </Row>
                </Column>
              </List>
              <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]">
                <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[31px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[53px] rounded-radius4 w-[100%]">
                  <Row className="items-center justify-center py-[3px] w-[43%]">
                    <Column className="items-center rounded-radius3 w-[34%]">
                      <Text className="columnthirtyseven" variant="body8">
                        点击上传
                      </Text>
                    </Column>
                    <Img
                      src="images/img_slash_16X16.svg"
                      className="slash1"
                      alt="slash Two"
                    />
                    <Text
                      className="rowtwothousandtwohundredtwentysix"
                      variant="body8"
                    >
                      拖拽到此区域
                    </Text>
                  </Row>
                </Column>
                <Row className="font-roboto items-end ml-[4px] xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[36%]">
                  <Img
                    src="images/img_iconattachment.svg"
                    className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:my-[2px] 2xl:my-[3px] xl:my-[3px] 3xl:my-[4px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                    alt="iconattachment"
                  />
                  <Text
                    className="mb-[2px] lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] OneThousandTwoHundredSeventySix"
                    variant="body8"
                  >
                    xxx.png
                  </Text>
                  <Column className="items-center justify-start lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] lg:p-[4px] 2xl:p-[5px] xl:p-[5px] 3xl:p-[7px] w-[57%]">
                    <Stack className="bg-gray_300 2xl:h-[3px] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] my-[2px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] rounded-radius2 w-[100%]">
                      <Img
                        src="images/img_progressinner.svg"
                        className="absolute 2xl:h-[3px] xl:h-[3px] lg:h-[3px] 3xl:h-[4px] right-[0] rounded-radius2 w-[57%]"
                        alt="progressinner One"
                      />
                    </Stack>
                  </Column>
                </Row>
              </Column>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[100%]"
                orientation="vertical"
              >
                <Column className="justify-start lg:my-[55px] xl:my-[69px] 2xl:my-[78px] 3xl:my-[94px] pb-[2px] w-[100%]">
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[31px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[53px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-center py-[3px] w-[43%]">
                      <Column className="items-center rounded-radius3 w-[34%]">
                        <Text className="columnthirtyseven" variant="body8">
                          点击上传
                        </Text>
                      </Column>
                      <Img
                        src="images/img_slash_16X16.svg"
                        className="slash1"
                        alt="slash Three"
                      />
                      <Text
                        className="rowtwothousandtwohundredtwentysix"
                        variant="body8"
                      >
                        拖拽到此区域
                      </Text>
                    </Row>
                  </Column>
                  <Column className="font-roboto items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[79%]">
                    <Row className="items-center p-[1px] w-[100%]">
                      <Img
                        src="images/img_iconattachment.svg"
                        className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] ml-[2px] my-[2px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                        alt="iconattachment One"
                      />
                      <Text
                        className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] columnthirtyseven"
                        variant="body8"
                      >
                        xxx.png
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Line className="self-center w-[100%] justify-start items-center lg:mb-[101px] xl:mb-[126px] 2xl:mb-[142px] 3xl:mb-[170px]" />
                <Column className="justify-start lg:my-[55px] xl:my-[69px] 2xl:my-[78px] 3xl:my-[94px] pb-[2px] w-[100%]">
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start lg:p-[31px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[53px] rounded-radius4 w-[100%]">
                    <Row className="items-center justify-center py-[3px] w-[43%]">
                      <Column className="items-center rounded-radius3 w-[34%]">
                        <Text className="columnthirtyseven" variant="body8">
                          点击上传
                        </Text>
                      </Column>
                      <Img
                        src="images/img_slash_16X16.svg"
                        className="slash1"
                        alt="slash Four"
                      />
                      <Text
                        className="rowtwothousandtwohundredtwentysix"
                        variant="body8"
                      >
                        拖拽到此区域
                      </Text>
                    </Row>
                  </Column>
                  <Column className="font-roboto items-center justify-start xl:mt-[3px] lg:mt-[3px] 2xl:mt-[4px] 3xl:mt-[5px] w-[79%]">
                    <Row className="items-center p-[1px] w-[100%]">
                      <Img
                        src="images/img_iconattachment.svg"
                        className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] ml-[2px] my-[2px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                        alt="iconattachment Two"
                      />
                      <Text
                        className="lg:ml-[4px] 2xl:ml-[5px] xl:ml-[5px] 3xl:ml-[7px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] columnfiftyseven"
                        variant="body8"
                      >
                        xxx.png
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </List>
              <Column className="items-center justify-start lg:mb-[101px] xl:mb-[126px] 2xl:mb-[142px] 3xl:mb-[170px] w-[100%]">
                <Column className="bg-white_A700 border border-gray_300 border-solid font-pingfangsc items-center justify-start lg:p-[31px] xl:p-[39px] 2xl:p-[44px] 3xl:p-[53px] rounded-radius4 w-[100%]">
                  <Row className="items-center justify-center py-[3px] w-[43%]">
                    <Column className="items-center rounded-radius3 w-[34%]">
                      <Text className="columnthirtyseven" variant="body8">
                        点击上传
                      </Text>
                    </Column>
                    <Img
                      src="images/img_slash_16X16.svg"
                      className="slash1"
                      alt="slash Five"
                    />
                    <Text
                      className="rowtwothousandtwohundredtwentysix"
                      variant="body8"
                    >
                      拖拽到此区域
                    </Text>
                  </Row>
                </Column>
                <Input
                  className="font-normal font-roboto not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-blue_A400 text-blue_A400 w-[100%]"
                  wrapClassName="2xl:mt-[4px] 3xl:mt-[5px] flex lg:mt-[3px] w-[100%] xl:mt-[3px]"
                  name="weburl Three"
                  placeholder="xxx.png"
                  prefix={
                    <Img
                      src="images/img_iconattachment.svg"
                      className="ml-[1px] lg:w-[7px] lg:h-[8px] lg:mr-[4px] xl:w-[9px] xl:h-[10px] xl:mr-[5px] 2xl:w-[10px] 2xl:h-[11px] 2xl:mr-[5px] 3xl:w-[12px] 3xl:h-[13px] 3xl:mr-[7px] my-[auto]"
                      alt="icon-attachment"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_trash_4.svg"
                      className="lg:w-[8px] lg:h-[9px] lg:ml-[18px] lg:mr-[3px] xl:w-[10px] xl:h-[11px] xl:ml-[22px] xl:mr-[4px] 2xl:w-[11px] 2xl:h-[12px] 2xl:ml-[25px] 2xl:mr-[5px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[30px] 3xl:mr-[6px] my-[auto]"
                      alt="trash"
                    />
                  }
                  size="sm"
                  variant="FillGray201"
                ></Input>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page21;
