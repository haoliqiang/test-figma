import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Input,
  Radio,
  Stack,
  List,
  CheckBox,
  Button,
} from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";

const I051Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Row className="items-start justify-evenly w-[100%]">
            <Sidebar className="w-[19%]" />
            <Column className="justify-start w-[81%]">
              <Column className="bg-white_A700 items-center justify-start lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] w-[100%]">
                <Column className="justify-start w-[99%]">
                  <Row className="items-start w-[24%]">
                    <Row className="items-start justify-evenly w-[65%]">
                      <Text className="OneHundredFiftyThree" variant="body9">
                        我的测试集
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark2"
                        alt="checkmark"
                      />
                      <Text className="OneHundredFiftyThree" variant="body9">
                        20220804测试集
                      </Text>
                    </Row>
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark"
                      alt="checkmark One"
                    />
                    <Text className="OneHundredFiftyFour" variant="body9">
                      新建增强案例
                    </Text>
                  </Row>
                  <Line className="bg-gray_202 h-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]" />
                </Column>
              </Column>
              <Column className="justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[57%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Text
                        className="font-medium text-gray_701 w-[auto]"
                        variant="body8"
                      >
                        *测试案例选择
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-blue_A401 text-blue_A401 w-[100%]"
                        wrapClassName="flex w-[76%]"
                        name="Group255"
                        placeholder="添加测试案例"
                        prefix={
                          <Img
                            src="images/img_plus_16X16.svg"
                            className="ml-[0] mr-[4px] lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px] my-[auto]"
                            alt="plus"
                          />
                        }
                        shape="RoundedBorder4"
                        size="md"
                        variant="OutlineGray202"
                      ></Input>
                    </Row>
                    <Text
                      className="columnonethousandthreehundredsixteen"
                      variant="body9"
                    >
                      可多选，会创建多个新的增强测试案例
                    </Text>
                  </Column>
                </Column>
                <Row className="items-start justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text className="rowonethousandonehundredten" variant="body8">
                    *增强测试方法选择
                  </Text>
                  <Column className="bg-white_A700 border border-gray_202 border-solid justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[76%]">
                    <Radio
                      value="undefined"
                      className="font-normal ml-[1px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_905"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={true}
                      name="OneThousandThreeHundredSeventeen"
                      label=""
                      shape="RoundedBorder8"
                      variant="OutlineBlueA401"
                    ></Radio>
                    <Column className="items-center justify-start lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[89%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Column className="justify-start w-[100%]">
                          <Row className="items-start w-[84%]">
                            <Text
                              className="font-semibold text-blue_A401 w-[auto]"
                              variant="body9"
                            >
                              控制类
                            </Text>
                            <Text
                              className="OneThousandThreeHundredNineteen"
                              variant="body9"
                            >
                              决策类
                            </Text>
                            <Text
                              className="OneThousandThreeHundredNineteen"
                              variant="body9"
                            >
                              感知类
                            </Text>
                            <Text
                              className="OneThousandThreeHundredNineteen"
                              variant="body9"
                            >
                              预警交互类
                            </Text>
                            <Text
                              className="OneThousandThreeHundredNineteen"
                              variant="body9"
                            >
                              环境干扰类
                            </Text>
                          </Row>
                          <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                            <Line className="absolute bg-gray_202 bottom-[0] h-[1px] w-[100%]" />
                            <div className="absolute bg-blue_A401 xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] left-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[8%]"></div>
                          </Stack>
                        </Column>
                      </Column>
                      <Column className="items-center justify-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                        <List
                          className="gap-[0] min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="listrectangle3281">
                            <Column className="bg-white_A700 items-center pt-[1px] w-[17%]">
                              <CheckBox
                                className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                inputClassName="h-[16px] mr-[5px] w-[16px]"
                                name="OneThousandTwoHundredEightyNine"
                                label="油门失效"
                                shape="RoundedBorder2"
                                size="sm"
                                variant="OutlineGray402"
                              ></CheckBox>
                            </Column>
                            <Column className="bg-white_A700 items-center pt-[1px] w-[23%]">
                              <CheckBox
                                className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                inputClassName="h-[16px] mr-[5px] w-[16px]"
                                name="OneThousandTwoHundredNinety"
                                label="油门响应延迟"
                                shape="RoundedBorder2"
                                size="sm"
                                variant="OutlineGray402"
                              ></CheckBox>
                            </Column>
                            <Column className="bg-white_A700 items-center pt-[1px] w-[17%]">
                              <CheckBox
                                className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                inputClassName="h-[16px] mr-[5px] w-[16px]"
                                name="OneThousandTwoHundredNinetyOne"
                                label="档位失效"
                                shape="RoundedBorder2"
                                size="sm"
                                variant="OutlineGray402"
                              ></CheckBox>
                            </Column>
                            <Column className="bg-white_A700 items-center pt-[1px] w-[23%]">
                              <CheckBox
                                className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                inputClassName="h-[16px] mr-[5px] w-[16px]"
                                name="OneThousandTwoHundredNinetyTwo"
                                label="档位响应延迟"
                                shape="RoundedBorder2"
                                size="sm"
                                variant="OutlineGray402"
                              ></CheckBox>
                            </Column>
                          </Row>
                          <Row className="listrectangle3281">
                            <Column className="bg-white_A700 items-center pt-[1px] w-[17%]">
                              <CheckBox
                                className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                inputClassName="h-[16px] mr-[5px] w-[16px]"
                                name="OneThousandTwoHundredNinetyThree"
                                label="刹车失效"
                                shape="RoundedBorder2"
                                size="sm"
                                variant="OutlineGray402"
                              ></CheckBox>
                            </Column>
                            <Column className="bg-white_A700 items-center pt-[1px] w-[23%]">
                              <CheckBox
                                className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                inputClassName="h-[16px] mr-[5px] w-[16px]"
                                name="OneThousandTwoHundredNinetyFour"
                                label="刹车响应延迟"
                                shape="RoundedBorder2"
                                size="sm"
                                variant="OutlineGray402"
                              ></CheckBox>
                            </Column>
                            <Column className="bg-white_A700 items-center pt-[1px] w-[17%]">
                              <CheckBox
                                className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                inputClassName="h-[16px] mr-[5px] w-[16px]"
                                name="OneThousandTwoHundredNinetyFive"
                                label="转向失效"
                                shape="RoundedBorder2"
                                size="sm"
                                variant="OutlineGray402"
                              ></CheckBox>
                            </Column>
                            <Column className="bg-white_A700 items-center pt-[1px] w-[23%]">
                              <CheckBox
                                className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                inputClassName="h-[16px] mr-[5px] w-[16px]"
                                name="OneThousandTwoHundredNinetySix"
                                label="转向响应延迟"
                                shape="RoundedBorder2"
                                size="sm"
                                variant="OutlineGray402"
                              ></CheckBox>
                            </Column>
                          </Row>
                        </List>
                      </Column>
                    </Column>
                    <Radio
                      value="NPC"
                      className="font-normal ml-[1px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={false}
                      name="NPC"
                      label="NPC"
                      variant="OutlineGray402"
                    ></Radio>
                    <Row className="items-center justify-between lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[89%]">
                      <List
                        className="xl:gap-[110px] 2xl:gap-[124px] 3xl:gap-[148px] lg:gap-[88px] grid grid-cols-2 min-h-[auto] w-[52%]"
                        orientation="horizontal"
                      >
                        <Column className="listonethousandtwohundredninetyseven">
                          <CheckBox
                            className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                            inputClassName="h-[16px] mr-[5px] w-[16px]"
                            name="OneThousandTwoHundredNinetySeven"
                            label="行人"
                            shape="RoundedBorder2"
                            size="sm"
                            variant="OutlineGray402"
                          ></CheckBox>
                        </Column>
                        <Column className="listonethousandtwohundredninetyseven">
                          <CheckBox
                            className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                            inputClassName="h-[16px] mr-[5px] w-[16px]"
                            name="OneThousandTwoHundredNinetyEight"
                            label="车辆"
                            shape="RoundedBorder2"
                            size="sm"
                            variant="OutlineGray402"
                          ></CheckBox>
                        </Column>
                      </List>
                      <Column className="bg-white_A700 items-center pt-[1px] w-[19%]">
                        <CheckBox
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="OneThousandThreeHundredTwentyThree"
                          label="行人+车辆"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray402"
                        ></CheckBox>
                      </Column>
                    </Row>
                    <Radio
                      value="undefined"
                      className="font-normal ml-[1px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_905"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={false}
                      name="OneThousandThreeHundredTwentyFour"
                      label=""
                      variant="OutlineGray402"
                    ></Radio>
                    <Row className="items-center justify-between lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] w-[89%]">
                      <Column className="bg-white_A700 items-center pt-[1px] w-[20%]">
                        <CheckBox
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="OneThousandThreeHundredTwentyFive"
                          label="交叉熵采样"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray402"
                        ></CheckBox>
                      </Column>
                      <Column className="bg-white_A700 items-center pt-[1px] w-[17%]">
                        <CheckBox
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="OneThousandThreeHundredTwentySix"
                          label="随机采样"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray402"
                        ></CheckBox>
                      </Column>
                      <Column className="bg-white_A700 items-center pt-[1px] w-[20%]">
                        <CheckBox
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="OneThousandThreeHundredTwentySeven"
                          label="Halton采样"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray402"
                        ></CheckBox>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="columnonethousandthreehundredsixteen"
                  variant="body9"
                >
                  可多选，多选的项目不会同时起作用，而是每次生效一个，逐个测试
                </Text>
                <Row className="items-center lg:ml-[110px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[25%]">
                  <Button
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[37%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGray204"
                  >
                    取消
                  </Button>
                  <Button
                    className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[54%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlueA401"
                  >
                    确认创建
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

export default I051Page;
