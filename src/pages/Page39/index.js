import React from "react";

import { Column, Row, Img, Text, SelectBox, Line, Grid } from "components";

const Page39 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-alibabapuhuiti1 items-center justify-start mx-[auto] lg:pb-[34px] xl:pb-[42px] 2xl:pb-[48px] 3xl:pb-[57px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Row className="bg-blue_A400 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
            <Row className="items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[99%]">
              <Row className="items-center w-[13%]">
                <Img
                  src="images/img_reply.svg"
                  className="reply3"
                  alt="reply"
                />
                <Text className="rowreply2" variant="body7">
                  自动驾驶安全验证平台
                </Text>
              </Row>
              <Row className="font-pingfangsc items-center justify-center 2xl:ml-[103px] 3xl:ml-[123px] lg:ml-[73px] xl:ml-[91px] w-[35%]">
                <Text className="TwoThousandNinetySix" variant="body8">
                  首页
                </Text>
                <Text
                  className="ThreeThousandTwoHundredThirtySeven"
                  variant="body8"
                >
                  系统测试
                </Text>
                <Text
                  className="font-semibold lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] my-[1px] text-white_A700 w-[auto]"
                  variant="body8"
                >
                  可信赖评估
                </Text>
                <Text className="TwoThousandSixHundredEighteen" variant="body8">
                  任务
                </Text>
                <Text className="TwoThousandSixHundredTwenty" variant="body8">
                  资源库
                </Text>
              </Row>
              <Row className="font-alibabapuhuiti1 items-start justify-between lg:ml-[228px] xl:ml-[285px] 2xl:ml-[321px] 3xl:ml-[385px] w-[21%]">
                <SelectBox
                  className="font-normal mt-[2px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[33%]"
                  placeholderClassName="text-white_A700"
                  name="FrameTen"
                  placeholder="Apollo-V5.5"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_1.svg"
                      className="mr-[0] lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
                <Row className="font-pingfangsc items-start justify-center w-[45%]">
                  <Img
                    src="images/img_ellipse5.png"
                    className="rounded-radius50 user"
                    alt="EllipseFive"
                  />
                  <SelectBox
                    className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[78%]"
                    placeholderClassName="text-white_A700"
                    name="FrameNine"
                    placeholder="欢迎，王志杰"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_1.svg"
                        className="mr-[0] lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                  ></SelectBox>
                </Row>
                <Img src="images/img_help.svg" className="help2" alt="help" />
              </Row>
            </Row>
          </Row>
          <Row className="font-pingfangsc items-center justify-between lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
            <aside className="w-[23%]">
              <div className="">
                <Column className="justify-start w-[100%]">
                  <Column className="items-center justify-start pl-[3px] py-[3px] w-[62%]">
                    <Text
                      className="font-semibold my-[1px] text-bluegray_800 w-[auto]"
                      variant="body4"
                    >
                      自动驾驶安全性评估
                    </Text>
                  </Column>
                  <Column className="border border-gray_300 border-solid items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] p-[1px] rounded-radius8 w-[100%]">
                    <Img
                      src="images/img_rectangle269_212X318.png"
                      className="Rectangle269"
                      alt="Rectangle269"
                    />
                    <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        variant="body7"
                      >
                        础石AD L4整体性安全评估 V0.1
                      </Text>
                      <Text
                        className="ThreeThousandTwoHundredFortyThree"
                        variant="body9"
                      >
                        测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                      </Text>
                    </Column>
                    <Row className="bg-gray_54 items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text className="ml-[3px] B7" as="h4" variant="h4">
                        B
                      </Text>
                      <Text
                        className="ThreeThousandTwoHundredFortyFour"
                        variant="body9"
                      >
                        级
                      </Text>
                      <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                      <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] pt-[1px] w-[77%]">
                        <Column className="justify-start w-[100%]">
                          <Row className="items-start w-[58%]">
                            <Img
                              src="images/img_file_16X16.svg"
                              className="file10"
                              alt="file"
                            />
                            <Text className="rowfile4" variant="body9">
                              测试记录：
                            </Text>
                            <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[33%]">
                              <Text className="rowtwentyone1" variant="body9">
                                16次
                              </Text>
                              <Img
                                src="images/img_arrowright.svg"
                                className="eye2"
                                alt="arrowright"
                              />
                            </Row>
                          </Row>
                          <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                            <Img
                              src="images/img_clock_16X16.svg"
                              className="file10"
                              alt="clock"
                            />
                            <Text
                              className="rowsixhundredfiftythree"
                              variant="body9"
                            >
                              最近测试：
                            </Text>
                            <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[61%]">
                              <Text className="rowtwentyone1" variant="body9">
                                2022-08-23 21:10:22
                              </Text>
                              <Img
                                src="images/img_arrowright.svg"
                                className="arrowleft"
                                alt="arrowright One"
                              />
                            </Row>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] pl-[3px] py-[3px] w-[62%]">
                    <Text
                      className="columnsevenhundredtwentyfive"
                      variant="body4"
                    >
                      自动驾驶合规性评估
                    </Text>
                  </Column>
                  <Column className="border border-gray_300 border-solid items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] p-[1px] rounded-radius8 w-[100%]">
                    <Img
                      src="images/img_rectangle269_1.png"
                      className="Rectangle269"
                      alt="Rectangle269 One"
                    />
                    <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        variant="body7"
                      >
                        中华人民共和国道路交通安全法
                      </Text>
                      <Text
                        className="ThreeThousandTwoHundredFortyThree"
                        variant="body9"
                      >
                        由国科础石提供的基于L4级别的安全性评估，包括功能安全和预期功能安全等的整体安全性评估。
                      </Text>
                    </Column>
                    <Row className="bg-gray_54 items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text className="A5" as="h4" variant="h4">
                        A
                      </Text>
                      <Text
                        className="TwoThousandOneHundredNinetyEight"
                        variant="body9"
                      >
                        级
                      </Text>
                      <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                      <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                        <Column className="justify-start w-[100%]">
                          <Row className="items-start w-[55%]">
                            <Img
                              src="images/img_file_16X16.svg"
                              className="file10"
                              alt="file One"
                            />
                            <Text className="rowfile4" variant="body9">
                              测试记录：
                            </Text>
                            <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[31%]">
                              <Text className="rowtwentyone1" variant="body9">
                                3次
                              </Text>
                              <Img
                                src="images/img_arrowright.svg"
                                className="eye2"
                                alt="arrowright Two"
                              />
                            </Row>
                          </Row>
                          <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                            <Img
                              src="images/img_clock_16X16.svg"
                              className="file10"
                              alt="clock One"
                            />
                            <Text
                              className="rowsixhundredfiftythree"
                              variant="body9"
                            >
                              最近测试：
                            </Text>
                            <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                              <Text className="rowtwentyone1" variant="body9">
                                2022-04-23 22:28:22
                              </Text>
                              <Img
                                src="images/img_arrowright.svg"
                                className="arrowleft"
                                alt="arrowright Three"
                              />
                            </Row>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] pl-[3px] py-[3px] w-[62%]">
                    <Text
                      className="columnsevenhundredtwentyfive"
                      variant="body4"
                    >
                      自动驾驶舒适性评估
                    </Text>
                  </Column>
                  <Column className="border border-gray_300 border-solid items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] p-[1px] rounded-radius8 w-[100%]">
                    <Column
                      className="bg-cover bg-repeat items-end justify-end lg:pl-[4px] xl:pl-[6px] 2xl:pl-[7px] 3xl:pl-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group2997.png')",
                      }}
                    >
                      <div className="bg-black_901 lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:mt-[128px] xl:mt-[161px] 2xl:mt-[181px] 3xl:mt-[217px] w-[16%]"></div>
                    </Column>
                    <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        variant="body7"
                      >
                        础石舒适性整体评估 V0.1
                      </Text>
                      <Text
                        className="ThreeThousandTwoHundredFortyThree"
                        variant="body9"
                      >
                        测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                      </Text>
                    </Column>
                    <Row className="bg-gray_54 items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                      <Text className="B7" as="h4" variant="h4">
                        B
                      </Text>
                      <Text
                        className="ThreeThousandTwoHundredFortyFour"
                        variant="body9"
                      >
                        级
                      </Text>
                      <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                      <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                        <Column className="justify-start w-[100%]">
                          <Row className="items-start w-[54%]">
                            <Img
                              src="images/img_file_16X16.svg"
                              className="file10"
                              alt="file Two"
                            />
                            <Text className="rowfile4" variant="body9">
                              测试记录：
                            </Text>
                            <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[29%]">
                              <Text className="rowtwentyone1" variant="body9">
                                1次
                              </Text>
                              <Img
                                src="images/img_arrowright.svg"
                                className="eye2"
                                alt="arrowright Four"
                              />
                            </Row>
                          </Row>
                          <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                            <Img
                              src="images/img_clock_16X16.svg"
                              className="file10"
                              alt="clock Two"
                            />
                            <Text
                              className="rowsixhundredfiftythree"
                              variant="body9"
                            >
                              最近测试：
                            </Text>
                            <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                              <Text className="rowtwentyone1" variant="body9">
                                2022-08-21 05:56:29
                              </Text>
                              <Img
                                src="images/img_arrowright.svg"
                                className="arrowleft"
                                alt="arrowright Five"
                              />
                            </Row>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </div>
            </aside>
            <Column className="items-center w-[74%]">
              <Grid className="lg:gap-[22px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-3 w-[100%]">
                <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_rectangle269_2.png"
                    className="Rectangle269"
                    alt="Rectangle269 Two"
                  />
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      感知鲁棒性安全评估
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyThree"
                      variant="body9"
                    >
                      由国科础石提供的基于L4级别的安全性评估，包括功能安全和预期功能安全等的整体安全性评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="A5" as="h4" variant="h4">
                      A
                    </Text>
                    <Text
                      className="TwoThousandOneHundredNinetyEight"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] pt-[1px] w-[76%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[56%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file10"
                            alt="file Three"
                          />
                          <Text className="rowfile4" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[31%]">
                            <Text className="rowtwentyone1" variant="body9">
                              6次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright Six"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file10"
                            alt="clock Three"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[61%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-23 11:10:22
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft"
                              alt="arrowright One"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_rectangle269_3.png"
                    className="Rectangle269"
                    alt="Rectangle269 Three"
                  />
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      场景适应能力安全评估
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyThree"
                      variant="body9"
                    >
                      测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="C3" as="h4" variant="h4">
                      C
                    </Text>
                    <Text
                      className="ThreeThousandOneHundredNinetySeven"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[55%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file10"
                            alt="file Four"
                          />
                          <Text className="rowfile4" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[31%]">
                            <Text className="rowtwentyone1" variant="body9">
                              9次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright Seven"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file10"
                            alt="clock Four"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-23 09:20:22
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft"
                              alt="arrowright One One"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_rectangle269_4.png"
                    className="Rectangle269"
                    alt="Rectangle269 Four"
                  />
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      决策鲁棒性安全评估
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyThree"
                      variant="body9"
                    >
                      由国科础石提供的基于L4级别的安全性评估，包括功能安全和预期功能安全等的整体安全性评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text
                      className="font-alibabapuhuiti1 font-normal ml-[4px] text-bluegray_200 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      -
                    </Text>
                    <Text
                      className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] TwoThousandFourHundredThirtyEight"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] pt-[1px] w-[52%]">
                      <Column className="items-center justify-start w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file10"
                            alt="file Five"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly w-[43%]">
                            <Text className="rowtwentyone1" variant="body9">
                              尚未测试
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright Eight"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file10"
                            alt="clock Five"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly w-[43%]">
                            <Text className="rowtwentyone1" variant="body9">
                              尚未测试
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright One Two"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_rectangle293.png"
                    className="Rectangle269"
                    alt="Rectangle269 Five"
                  />
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      香港交通法评估
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyThree"
                      variant="body9"
                    >
                      测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="A5" as="h4" variant="h4">
                      A
                    </Text>
                    <Text
                      className="TwoThousandOneHundredNinetyEight"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[58%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file10"
                            alt="file Six"
                          />
                          <Text className="rowfile4" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[34%]">
                            <Text className="rowtwentyone1" variant="body9">
                              24次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright Nine"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file10"
                            alt="clock Six"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-10 09:49:20
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft"
                              alt="arrowright One Three"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-gray_201 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_03883128c9474.png"
                    className="Rectangle269"
                    alt="03883128c9474"
                  />
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      欧盟交通法评估
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyThree"
                      variant="body9"
                    >
                      测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="B7" as="h4" variant="h4">
                      B
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyFour"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[58%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file10"
                            alt="file Seven"
                          />
                          <Text className="rowfile4" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[33%]">
                            <Text className="rowtwentyone1" variant="body9">
                              16次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright Ten"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file10"
                            alt="clock Seven"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-23 09:20:22
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft"
                              alt="arrowright One Four"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_rectangle269_5.png"
                    className="Rectangle269"
                    alt="Rectangle269 Six"
                  />
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      美国交通法评估
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyThree"
                      variant="body9"
                    >
                      测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="C3" as="h4" variant="h4">
                      C
                    </Text>
                    <Text
                      className="ThreeThousandOneHundredNinetySeven"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[55%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file10"
                            alt="file Eight"
                          />
                          <Text className="rowfile4" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[31%]">
                            <Text className="rowtwentyone1" variant="body9">
                              9次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright Eleven"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file10"
                            alt="clock Eight"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-11 23:25:03
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft"
                              alt="arrowright One Five"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_rectangle269_6.png"
                    className="Rectangle269"
                    alt="Rectangle269 Seven"
                  />
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      城市道路舒适性评估
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyThree"
                      variant="body9"
                    >
                      由国科础石提供的基于L4级别的安全性评估，包括功能安全和预期功能安全等的整体安全性评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="ml-[1px] C3" as="h4" variant="h4">
                      C
                    </Text>
                    <Text
                      className="ThreeThousandOneHundredNinetySeven"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] pt-[1px] w-[77%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[56%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file10"
                            alt="file Nine"
                          />
                          <Text className="rowfile4" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[31%]">
                            <Text className="rowtwentyone1" variant="body9">
                              6次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright Twelve"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file10"
                            alt="clock Nine"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[61%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-23 11:10:22
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft"
                              alt="arrowright One Six"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_rectangle269_7.png"
                    className="Rectangle269"
                    alt="Rectangle269 Eight"
                  />
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      越野道路舒适性评估
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyThree"
                      variant="body9"
                    >
                      测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center justify-end lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="C3" as="h4" variant="h4">
                      C
                    </Text>
                    <Text
                      className="ThreeThousandOneHundredNinetySeven"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[58%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file10"
                            alt="file Ten"
                          />
                          <Text className="rowfile4" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[33%]">
                            <Text className="rowtwentyone1" variant="body9">
                              16次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright Thirteen"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file10"
                            alt="clock Ten"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-23 09:20:22
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft"
                              alt="arrowright One Seven"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_rectangle269_8.png"
                    className="Rectangle269"
                    alt="Rectangle269 Nine"
                  />
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      高速公路舒适性评估
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredFortyThree"
                      variant="body9"
                    >
                      测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="A5" as="h4" variant="h4">
                      A
                    </Text>
                    <Text
                      className="TwoThousandOneHundredNinetyEight"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[58%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file10"
                            alt="file Eleven"
                          />
                          <Text className="rowfile4" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[34%]">
                            <Text className="rowtwentyone1" variant="body9">
                              24次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye2"
                              alt="arrowright Fourteen"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file10"
                            alt="clock Eleven"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-10 09:49:20
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft"
                              alt="arrowright One Eight"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Grid>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page39;
