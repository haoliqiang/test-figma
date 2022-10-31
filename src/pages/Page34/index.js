import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  List,
  CheckBox,
  Input,
  Button,
} from "components";

const Page34 = () => {
  return (
    <>
      <Column className="bg-black_900_87 font-pingfangsc items-center justify-start mx-[auto] 2xl:p-[110px] 3xl:p-[132px] lg:p-[78px] xl:p-[97px] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:pt-[12px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[21px] rounded-radius10 w-[79%]">
          <Row className="items-end justify-between w-[93%]">
            <Column className="justify-end pr-[3px] py-[3px] w-[46%]">
              <Text className="OneHundredFiftyThree" variant="body7">
                添加测试案例
              </Text>
            </Column>
            <Img src="images/img_close_1.svg" className="close6" alt="close" />
          </Row>
          <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Line className="bg-gray_202 h-[1px] w-[100%]" />
            <Row className="items-start justify-between mt-[2px] w-[97%]">
              <Column className="bg-white_A700 border border-gray_202 border-solid items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] p-[1px] rounded-radius8 w-[97%]">
                <Row className="items-start justify-between w-[96%]">
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[48%]">
                    <Row className="items-start ml-[4px] w-[55%]">
                      <Row className="items-start justify-evenly mt-[1px] w-[56%]">
                        <Text className="OneHundredFiftyThree" variant="body9">
                          测试案例
                        </Text>
                        <Img
                          src="images/img_icon_12X12.svg"
                          className="checkmark2"
                          alt="icon"
                        />
                        <Text className="OneHundredFiftyThree" variant="body9">
                          我的测试集
                        </Text>
                      </Row>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark"
                        alt="checkmark"
                      />
                      <Text className="OneHundredFiftyFour" variant="body9">
                        20220804测试
                      </Text>
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="listue999999">
                        <CheckBox
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_905"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="UE999999"
                          label="UE999999"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray402"
                        ></CheckBox>
                        <Column className="items-center lg:mr-[4px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] my-[4px] rounded-radius4 w-[60%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Column
                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group191.png')",
                              }}
                            >
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[79%]">
                              <Text
                                className="font-semibold text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                道路左转测试案例
                              </Text>
                              <Text
                                className="OneHundredSixtyOne"
                                variant="body9"
                              >
                                具体场景故障案例具体场景故障案...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Row>
                      <Row className="listue999999">
                        <CheckBox
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_905"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="UE999999 One"
                          label="UE999999"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray402"
                        ></CheckBox>
                        <Column className="items-center lg:mr-[4px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] my-[4px] rounded-radius4 w-[60%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Column
                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group191.png')",
                              }}
                            >
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[79%]">
                              <Text
                                className="font-semibold text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                道路左转测试案例
                              </Text>
                              <Text
                                className="OneHundredSixtyOne"
                                variant="body9"
                              >
                                具体场景故障案例具体场景故障案...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Row>
                    </List>
                    <CheckBox
                      className="w-[100%]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="Group288"
                      label=""
                    ></CheckBox>
                    <CheckBox
                      className="w-[100%]"
                      inputClassName="mr-[5px] w-[undefinedpx]"
                      name="Group289"
                      label=""
                    ></CheckBox>
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="listue999999">
                        <CheckBox
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_905"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="UE999999 Two"
                          label="UE999999"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray402"
                        ></CheckBox>
                        <Column className="items-center lg:mr-[4px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] my-[4px] rounded-radius4 w-[60%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Column
                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group191.png')",
                              }}
                            >
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[79%]">
                              <Text
                                className="font-semibold text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                道路左转测试案例
                              </Text>
                              <Text
                                className="OneHundredSixtyOne"
                                variant="body9"
                              >
                                具体场景故障案例具体场景故障案...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Row>
                      <Row className="listue999999">
                        <CheckBox
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_905"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="UE999999 Three"
                          label="UE999999"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray402"
                        ></CheckBox>
                        <Column className="items-center lg:mr-[4px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] my-[4px] rounded-radius4 w-[60%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Column
                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group191.png')",
                              }}
                            >
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[79%]">
                              <Text
                                className="font-semibold text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                道路左转测试案例
                              </Text>
                              <Text
                                className="OneHundredSixtyOne"
                                variant="body9"
                              >
                                具体场景故障案例具体场景故障案...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Row>
                      <Row className="listue999999">
                        <CheckBox
                          className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_905"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="UE999999 Four"
                          label="UE999999"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray402"
                        ></CheckBox>
                        <Column className="items-center lg:mr-[4px] xl:mr-[6px] 2xl:mr-[7px] 3xl:mr-[8px] my-[4px] rounded-radius4 w-[60%]">
                          <Row className="items-end justify-between w-[100%]">
                            <Column
                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group191.png')",
                              }}
                            >
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[79%]">
                              <Text
                                className="font-semibold text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                道路左转测试案例
                              </Text>
                              <Text
                                className="OneHundredSixtyOne"
                                variant="body9"
                              >
                                具体场景故障案例具体场景故障案...
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                      </Row>
                    </List>
                  </Column>
                  <Line className="bg-gray_202 lg:h-[359px] xl:h-[449px] 2xl:h-[505px] 3xl:h-[606px] w-[1px]" />
                  <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[48%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text
                        className="rowonethousandfourhundredfifty"
                        variant="body9"
                      >
                        已选
                      </Text>
                      <Img
                        src="images/img_trash_16X16.svg"
                        className="eye2"
                        alt="trash"
                      />
                    </Row>
                    <Input
                      className="placeholder:text-gray_905 Group285"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] flex lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      name="Group285"
                      placeholder="道路左传测试"
                      suffix={
                        <Img
                          src="images/img_close_1.svg"
                          className="mr-[2px] lg:w-[11px] lg:h-[12px] lg:ml-[24px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder4"
                      size="xl"
                      variant="FillGray105"
                    ></Input>
                    <Input
                      className="placeholder:text-gray_905 Group285"
                      wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] flex lg:mt-[5px] w-[100%] xl:mt-[7px]"
                      name="Group286"
                      placeholder="道路右传测试"
                      suffix={
                        <Img
                          src="images/img_close_1.svg"
                          className="mr-[2px] lg:w-[11px] lg:h-[12px] lg:ml-[24px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder4"
                      size="xl"
                      variant="FillGray105"
                    ></Input>
                  </Column>
                </Row>
              </Column>
              <Line className="bg-gray_205 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius3 w-[6px]" />
            </Row>
            <Column className="bg-white_A700 items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Line className="bg-gray_202 h-[1px] w-[100%]" />
                <Row className="items-center justify-end ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[17%]">
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
                    确认添加
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page34;
