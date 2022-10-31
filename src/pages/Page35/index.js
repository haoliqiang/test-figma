import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Button,
  Line,
  Radio,
  Stack,
  List,
  CheckBox,
} from "components";
import Header1 from "components/Header/Header1";
import Sidebar from "components/Sidebar/Sidebar";

const Page35 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Row className="items-start justify-evenly w-[98%]">
            <Sidebar className="w-[20%]" />
            <Column className="justify-start w-[80%]">
              <Column className="items-center justify-start pl-[4px] pt-[4px] w-[100%]">
                <Column className="justify-start w-[98%]">
                  <Row className="items-start w-[45%]">
                    <Row className="items-start justify-evenly lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[35%]">
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        我的测试集
                      </Text>
                      <Img
                        src="images/img_checkmark_3.svg"
                        className="checkmark2"
                        alt="checkmark"
                      />
                      <Text className="FiveHundredFiftyThree" variant="body9">
                        20220804测试集
                      </Text>
                    </Row>
                    <Button
                      className="2xl:ml-[148px] 3xl:ml-[177px] flex items-center justify-center lg:ml-[105px] text-center w-[35%] xl:ml-[131px]"
                      leftIcon={
                        <Img
                          src="images/img_warning.svg"
                          className="text-center lg:w-[14px] lg:h-[15px] lg:mr-[5px] xl:w-[17px] xl:h-[18px] xl:mr-[7px] 2xl:w-[20px] 2xl:h-[21px] 2xl:mr-[8px] 3xl:w-[24px] 3xl:h-[25px] 3xl:mr-[9px]"
                          alt="warning"
                        />
                      }
                      shape="RoundedBorder4"
                      size="xl"
                      variant="OutlineGray302"
                    >
                      <div className="bg-transparent font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px]">
                        您有未完成的选项
                      </div>
                    </Button>
                  </Row>
                  <Line className="bg-gray_201 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
                </Column>
              </Column>
              <Column className="justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[58%]">
                <Row className="items-start justify-between w-[100%]">
                  <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[14%]">
                    <Text
                      className="font-medium text-gray_701 w-[auto]"
                      variant="body8"
                    >
                      *测试案例选择
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border border-gray_302 border-solid items-center justify-start p-[2px] rounded-radius4 w-[76%]">
                    <Column className="justify-start lg:mb-[5px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] w-[98%]">
                      <Row className="font-pingfangsc items-start justify-between w-[100%]">
                        <Row className="items-center justify-evenly 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[21%]">
                          <Img
                            src="images/img_plus_16X16.svg"
                            className="arrowleft"
                            alt="plus Two"
                          />
                          <Text className="rowsixteen_four" variant="body8">
                            添加测试案例
                          </Text>
                        </Row>
                        <Line className="bg-gray_206 lg:h-[15px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] rounded-radius15 w-[3px]" />
                      </Row>
                      <Row className="font-roboto items-center 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[95%]">
                        <Button
                          className="flex items-center justify-center text-center w-[27%]"
                          rightIcon={
                            <Img
                              src="images/img_close_10X10.svg"
                              className="ml-[3px] text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineGray3021_2"
                        >
                          <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                            道路右转测试案例6
                          </div>
                        </Button>
                        <Button
                          className="2xl:ml-[8px] 3xl:ml-[9px] flex items-center justify-center lg:ml-[5px] text-center w-[25%] xl:ml-[7px]"
                          rightIcon={
                            <Img
                              src="images/img_close_10X10.svg"
                              className="ml-[3px] text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineGray3021_2"
                        >
                          <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                            道路右转测试案例
                          </div>
                        </Button>
                        <Button
                          className="2xl:ml-[8px] 3xl:ml-[9px] flex items-center justify-center lg:ml-[5px] text-center w-[25%] xl:ml-[7px]"
                          rightIcon={
                            <Img
                              src="images/img_close_10X10.svg"
                              className="ml-[3px] text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineGray3021_2"
                        >
                          <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                            道路右转测试案例
                          </div>
                        </Button>
                        <Button
                          className="2xl:ml-[8px] 3xl:ml-[9px] flex items-center justify-center lg:ml-[5px] text-center w-[17%] xl:ml-[7px]"
                          rightIcon={
                            <Img
                              src="images/img_close_10X10.svg"
                              className="ml-[3px] text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                              alt="close"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineGray3021_2"
                        >
                          <div className="bg-transparent font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                            道路右右转
                          </div>
                        </Button>
                      </Row>
                      <Button
                        className="2xl:mt-[8px] 3xl:mt-[9px] flex items-center justify-center lg:mt-[5px] text-center w-[24%] xl:mt-[7px]"
                        rightIcon={
                          <Img
                            src="images/img_close_10X10.svg"
                            className="ml-[3px] text-center lg:w-[7px] lg:h-[8px] xl:w-[8px] xl:h-[9px] 2xl:w-[10px] 2xl:h-[11px] 3xl:w-[12px] 3xl:h-[13px]"
                            alt="close"
                          />
                        }
                        shape="RoundedBorder4"
                        size="sm"
                        variant="OutlineGray3021_2"
                      >
                        <div className="bg-transparent font-normal font-roboto not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px]">
                          道路右转测试案例
                        </div>
                      </Button>
                    </Column>
                  </Column>
                </Row>
                <Text
                  className="columnonethousandthreehundredsixteen"
                  variant="body9"
                >
                  可多选，会创建多个新的增强测试案例
                </Text>
                <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text
                      className="rowonethousandonehundredten"
                      variant="body8"
                    >
                      *增强测试方法选择
                    </Text>
                    <Column className="bg-white_A700 border border-red_400 border-solid justify-end 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[76%]">
                      <Radio
                        value="undefined"
                        className="font-normal ml-[3px] mt-[2px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_905"
                        inputClassName="h-[16px] mr-[5px] w-[16px]"
                        checked={false}
                        name="ThreeThousandEightyThree"
                        label=""
                        variant="OutlineGray402"
                      ></Radio>
                      <Column className="items-center justify-start lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[88%]">
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
                            <Row className="listninehundredeight">
                              <Column className="bg-white_A700 items-center pt-[1px] w-[17%]">
                                <CheckBox
                                  className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                                  name="ThreeThousandFiftySix"
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
                                  name="ThreeThousandFiftySeven"
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
                                  name="ThreeThousandFiftyEight"
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
                                  name="ThreeThousandFiftyNine"
                                  label="档位响应延迟"
                                  shape="RoundedBorder2"
                                  size="sm"
                                  variant="OutlineGray402"
                                ></CheckBox>
                              </Column>
                            </Row>
                            <Row className="listninehundredeight">
                              <Column className="bg-white_A700 items-center pt-[1px] w-[17%]">
                                <CheckBox
                                  className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                                  inputClassName="h-[16px] mr-[5px] w-[16px]"
                                  name="ThreeThousandSixty"
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
                                  name="ThreeThousandSixtyOne"
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
                                  name="ThreeThousandSixtyTwo"
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
                                  name="ThreeThousandSixtyThree"
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
                        className="font-normal ml-[3px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-black_900"
                        inputClassName="h-[16px] mr-[5px] w-[16px]"
                        checked={false}
                        name="NPC"
                        label="NPC"
                        variant="OutlineGray402"
                      ></Radio>
                      <Row className="items-center justify-between lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[88%]">
                        <List
                          className="xl:gap-[110px] 2xl:gap-[124px] 3xl:gap-[148px] lg:gap-[88px] grid grid-cols-2 min-h-[auto] w-[52%]"
                          orientation="horizontal"
                        >
                          <Column className="listonethousandsixhundredthirtyone">
                            <CheckBox
                              className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              name="ThreeThousandSixtyFour"
                              label="行人"
                              shape="RoundedBorder2"
                              size="sm"
                              variant="OutlineGray402"
                            ></CheckBox>
                          </Column>
                          <Column className="listonethousandsixhundredthirtyone">
                            <CheckBox
                              className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                              inputClassName="h-[16px] mr-[5px] w-[16px]"
                              name="ThreeThousandSixtyFive"
                              label="车辆"
                              shape="RoundedBorder2"
                              size="sm"
                              variant="OutlineGray402"
                            ></CheckBox>
                          </Column>
                        </List>
                        <Column className="bg-gray_53 items-center pt-[1px] w-[19%]">
                          <CheckBox
                            className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                            inputClassName="h-[16px] mr-[5px] w-[16px]"
                            name="ThreeThousandEightyNine"
                            label="行人+车辆"
                            shape="RoundedBorder2"
                            size="sm"
                            variant="OutlineGray402"
                          ></CheckBox>
                        </Column>
                      </Row>
                      <Radio
                        value="undefined"
                        className="font-normal ml-[3px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_905"
                        inputClassName="h-[16px] mr-[5px] w-[16px]"
                        checked={false}
                        name="ThreeThousandNinety"
                        label=""
                        variant="OutlineGray402"
                      ></Radio>
                      <Row className="items-center justify-between lg:ml-[19px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[89%]">
                        <Column className="bg-gray_53 items-center pt-[1px] w-[20%]">
                          <CheckBox
                            className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                            inputClassName="h-[16px] mr-[5px] w-[16px]"
                            name="ThreeThousandNinetyOne"
                            label="交叉熵采样"
                            shape="RoundedBorder2"
                            size="sm"
                            variant="OutlineGray402"
                          ></CheckBox>
                        </Column>
                        <Column className="bg-gray_53 items-center pt-[1px] w-[17%]">
                          <CheckBox
                            className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                            inputClassName="h-[16px] mr-[5px] w-[16px]"
                            name="ThreeThousandNinetyTwo"
                            label="随机采样"
                            shape="RoundedBorder2"
                            size="sm"
                            variant="OutlineGray402"
                          ></CheckBox>
                        </Column>
                        <Column className="bg-gray_53 items-center pt-[1px] w-[20%]">
                          <CheckBox
                            className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-black_900 w-[100%]"
                            inputClassName="h-[16px] mr-[5px] w-[16px]"
                            name="ThreeThousandNinetyThree"
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
                    className="columnonethousandsixhundredfortythree"
                    variant="body9"
                  >
                    可多选，多选的项目不会同时起作用，而是每次生效一个，逐个测试
                  </Text>
                </Column>
                <Row className="items-start lg:ml-[110px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[25%]">
                  <Button
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[37%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGray204"
                  >
                    取消
                  </Button>
                  <Stack className="lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[56%]">
                    <Column className="absolute bg-blue_A401 inset-x-[0] items-center justify-start mx-[auto] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius4 top-[0] w-[97%]">
                      <Text className="button" variant="body8">
                        确认创建
                      </Text>
                    </Column>
                    <Img
                      src="images/img_cursor.svg"
                      className="absolute bottom-[0] right-[0] close5"
                      alt="cursor"
                    />
                  </Stack>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page35;
