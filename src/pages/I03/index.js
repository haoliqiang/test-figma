import React from "react";

import {
  Column,
  Stack,
  Img,
  Text,
  Row,
  Button,
  Line,
  List,
  CheckBox,
} from "components";
import Header from "components/Header/Header";

const I03Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[36px] xl:pb-[46px] 2xl:pb-[52px] 3xl:pb-[62px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column className="justify-start w-[100%]">
            <Stack className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] w-[100%]">
              <Stack className="test_20220825">
                <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                  <Img
                    src="images/img_image1_1.png"
                    className="imageOne"
                    alt="imageOne"
                  />
                  <Img
                    src="images/img_20220825_1.png"
                    className="test_20220825"
                    alt="20220825"
                  />
                </Stack>
                <Column className="absolute bg-gradient1  justify-end left-[0] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[65%]">
                  <Text
                    className="columntwohundredeightytwo"
                    as="h6"
                    variant="h6"
                  >
                    道路左转-增强
                  </Text>
                </Column>
              </Stack>
              <Column className="absolute bg-bluegray_50_75 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] top-[1%] w-[100%]">
                <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] w-[9%]">
                  <Row className="items-start justify-evenly w-[100%]">
                    <Text className="OneHundredFiftyThree" variant="body9">
                      任务
                    </Text>
                    <Img
                      src="images/img_checkmark.svg"
                      className="checkmark2"
                      alt="checkmark"
                    />
                    <Text className="TwoHundredEightyFour" variant="body9">
                      道路左转-增强
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Column className="border border-gray_202 border-solid items-center justify-end lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] p-[1px] rounded-radius8 w-[96%]">
              <Column className="items-center justify-start lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                <Column className="items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[97%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Row className="items-center w-[12%]">
                        <Column className="bg-gray_202 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius4 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]">
                          <Button
                            className="flex items-center justify-center rounded-radius50 user"
                            size="smIcn"
                            variant="icbFillBlueA401"
                          >
                            <Img
                              src="images/img_play_20X20.svg"
                              className="flex items-center justify-center"
                              alt="play"
                            />
                          </Button>
                        </Column>
                        <Text className="rowplay" variant="body4">
                          任务运行中
                        </Text>
                      </Row>
                      <Row className="items-center w-[18%]">
                        <Text className="TwoHundredEightySix" variant="body8">
                          任务提交时间：
                        </Text>
                        <Text className="test_20220829200" variant="body8">
                          2022-08-29 20:04:29
                        </Text>
                      </Row>
                    </Row>
                    <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                      <Row className="items-start w-[22%]">
                        <Text className="TwoHundredFortyTwo" variant="body8">
                          任务进度：
                        </Text>
                        <Text className="test_20220829200" variant="body8">
                          1/5，已执行12:23，预计还需34:09
                        </Text>
                      </Row>
                      <Button
                        className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[7%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillRed602"
                      >
                        终止任务
                      </Button>
                    </Row>
                  </Column>
                  <Stack className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                    <Line className="absolute bg-gray_202 h-[4px] left-[0] w-[100%]" />
                    <Line className="absolute bg-blue_A401 h-[4px] left-[0] w-[67%]" />
                  </Stack>
                </Column>
              </Column>
            </Column>
            <Row className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[11%]">
              <Text className="columnu1230" variant="body8">
                测试描述
              </Text>
              <Text className="Group355" variant="body9">
                Apollo-V5.5
              </Text>
            </Row>
            <Text className="TwoHundredEightyNine" variant="body8">
              道路左传，有左侧车辆切入
            </Text>
            <Row className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[58%]">
              <Column className="bg-gradient2  border border-gray_202 border-solid items-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[58%]">
                <Row className="items-start justify-between w-[98%]">
                  <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[19%]">
                    <Text className="columnu1230" variant="body8">
                      测试过程预览
                    </Text>
                    <div className="bg-gray_500 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                  </Column>
                  <Column
                    className="bg-cover bg-repeat items-center justify-start lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius4 w-[67%]"
                    style={{
                      backgroundImage: "url('images/img_group1715.png')",
                    }}
                  >
                    <Button
                      className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center rounded-radius50 lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                      size="lgIcn"
                      variant="icbOutlineWhiteA700e5"
                    >
                      <Img
                        src="images/img_play_44X44.svg"
                        className="flex items-center justify-center"
                        alt="play One"
                      />
                    </Button>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-gradient2  border border-gray_202 border-solid items-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[37%]">
                <Row className="items-start justify-between mt-[1px] w-[97%]">
                  <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[31%]">
                    <Text className="columnu1230" variant="body8">
                      测试报告预览
                    </Text>
                    <div className="bg-gray_500 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                  </Column>
                  <Img
                    src="images/img_rectangle349.png"
                    className="Rectangle349"
                    alt="Rectangle349"
                  />
                </Row>
              </Column>
            </Row>
            <Line className="bg-gray_202 h-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] rounded-radius05 w-[96%]" />
            <Text className="TwoHundredNinetyTwo" variant="body7">
              增强测试方法设置
            </Text>
            <Column className="bg-gradient2  border border-gray_202 border-solid justify-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[58%]">
              <Column className="items-center justify-start lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[16%]">
                <Text
                  className="font-medium text-gray_905 w-[auto]"
                  variant="body8"
                >
                  测试方法：故障注入
                </Text>
              </Column>
              <Row className="items-center ml-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[41%]">
                <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="ThreeHundredForty" variant="body8">
                  控制类：
                </Text>
                <Text className="ThreeHundredFortyOne" variant="body8">
                  油门失效、刹车失效、刹车响应延迟
                </Text>
              </Row>
              <Row className="items-center ml-[1px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[53%]">
                <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="ThreeHundredForty" variant="body8">
                  控制类：
                </Text>
                <Text className="ThreeHundredFortyOne" variant="body8">
                  油门失效、刹车失效、刹车响应延迟、转向相应延迟
                </Text>
              </Row>
              <Row className="items-center lg:mb-[4px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[1px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[28%]">
                <div className="bg-blue_A401 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="ThreeHundredFortyFour" variant="body8">
                  预警交互类：
                </Text>
                <Text className="ThreeHundredFortyFive" variant="body8">
                  油门失效、刹车失效
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_202 h-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[39px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] rounded-radius05 w-[96%]" />
            <Row className="items-center lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[93%]">
              <Text className="rowtwohundredninetyfour" variant="body7">
                测试结果
              </Text>
              <Stack className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[7%]">
                <Text className="language2" variant="body9">
                  执行了 次测试
                </Text>
                <Text className="Twelve" variant="body7">
                  12
                </Text>
              </Stack>
              <Column className="items-center 3xl:ml-[1077px] lg:ml-[637px] xl:ml-[797px] 2xl:ml-[897px] w-[20%]">
                <List
                  className="lg:gap-[22px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-[repeat(2,_1fr_2px)_1fr] min-h-[auto] xl:pl-[12px] 2xl:pl-[14px] 3xl:pl-[16px] lg:pl-[9px] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="listsix">
                    <Row className="items-end w-[78%]">
                      <Text className="rowsix" variant="body4">
                        6
                      </Text>
                      <Text className="TwoHundredSixty" variant="body9">
                        次
                      </Text>
                    </Row>
                    <Row className="items-start justify-evenly lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                      <Text className="TwoHundredFortyTwo" variant="body9">
                        压线
                      </Text>
                      <Img
                        src="images/img_eye_9X13.svg"
                        className="eye"
                        alt="eye"
                      />
                    </Row>
                  </Column>
                  <Line className="self-center w-[2px] bg-red_601 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius1" />
                  <Column className="mt-[1px] listsix">
                    <Row className="items-end w-[78%]">
                      <Text className="rowsix" variant="body4">
                        4
                      </Text>
                      <Text className="TwoHundredSixtyTwo" variant="body9">
                        次
                      </Text>
                    </Row>
                    <Row className="items-start justify-evenly lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Text className="TwoHundredFortyTwo" variant="body9">
                        撞车
                      </Text>
                      <Img
                        src="images/img_eye_9X13.svg"
                        className="eye"
                        alt="eye One"
                      />
                    </Row>
                  </Column>
                  <Line className="self-center w-[2px] bg-red_601 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius1" />
                  <Column className="mt-[1px] listsix">
                    <Row className="items-end w-[78%]">
                      <Text className="rowsix" variant="body4">
                        5
                      </Text>
                      <Text className="TwoHundredSixtyTwo" variant="body9">
                        次
                      </Text>
                    </Row>
                    <Row className="items-start justify-evenly lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Text className="TwoHundredFortyTwo" variant="body9">
                        逆行
                      </Text>
                      <Img
                        src="images/img_eye_9X13.svg"
                        className="eye"
                        alt="eye Two"
                      />
                    </Row>
                  </Column>
                </List>
              </Column>
            </Row>
            <footer className="lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
              <Column className="items-center justify-start w-[100%]">
                <Column className="bg-white_A700 items-center justify-start lg:pt-[5px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Column className="justify-start w-[100%]">
                      <Row className="items-start lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[86%]">
                        <Column className="items-center justify-start mt-[2px] w-[2%]">
                          <Text className="TwoHundredFortyTwo" variant="body9">
                            案例
                          </Text>
                        </Column>
                        <Text className="TwoHundredNinetySix" variant="body9">
                          任务状态
                        </Text>
                        <Row className="items-start xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[86px] w-[21%]">
                          <Text
                            className="rowonehundredfiftyeight"
                            variant="body9"
                          >
                            发现事故
                          </Text>
                          <Img
                            src="images/img_filter.svg"
                            className="filter"
                            alt="filter"
                          />
                          <Row className="items-start justify-evenly xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[84px] w-[26%]">
                            <Text
                              className="rowonehundredfiftyeight"
                              variant="body9"
                            >
                              完成时间
                            </Text>
                            <Img
                              src="images/img_close_16X16.svg"
                              className="arrowleft"
                              alt="close"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-center lg:ml-[124px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] w-[5%]">
                          <Text
                            className="rowonehundredfiftyeight"
                            variant="body9"
                          >
                            运行时长
                          </Text>
                          <Img
                            src="images/img_close_16X16.svg"
                            className="arrowleft"
                            alt="close One"
                          />
                        </Row>
                        <Text className="ThreeHundred" variant="body9">
                          操作
                        </Text>
                      </Row>
                      <Line className="bg-gray_202 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
                    </Column>
                  </Column>
                </Column>
                <Stack className="lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] w-[100%]">
                  <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[0] w-[8%]">
                    <Button
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                    <Button
                      className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                    <Button
                      className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                    <Button
                      className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                    <Button
                      className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                    <Button
                      className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                    <Button
                      className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                    <Button
                      className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                    <Button
                      className="font-normal lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                    <Button
                      className="font-normal lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                  </Column>
                  <Stack className="absolute lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] w-[100%]">
                    <Stack className="absolute lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] w-[100%]">
                      <Stack className="absolute lg:h-[460px] xl:h-[575px] 2xl:h-[647px] 3xl:h-[776px] w-[100%]">
                        <Stack className="absolute lg:h-[414px] xl:h-[518px] 2xl:h-[583px] 3xl:h-[699px] top-[0] w-[100%]">
                          <Stack className="absolute lg:h-[414px] xl:h-[518px] 2xl:h-[583px] 3xl:h-[699px] w-[100%]">
                            <Column className="absolute justify-start w-[100%]">
                              <Stack className="lg:h-[323px] xl:h-[403px] 2xl:h-[454px] 3xl:h-[544px] w-[100%]">
                                <Stack className="absolute lg:h-[277px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] top-[0] w-[100%]">
                                  <Stack className="absolute lg:h-[277px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] w-[100%]">
                                    <Stack className="absolute lg:h-[277px] xl:h-[347px] 2xl:h-[390px] 3xl:h-[468px] w-[100%]">
                                      <Column className="absolute items-center justify-start left-[0] top-[0] w-[71%]">
                                        <Row className="items-center justify-evenly w-[100%]">
                                          <Column className="items-center w-[41%]">
                                            <Column className="items-center justify-start w-[100%]">
                                              <Row className="items-start justify-evenly w-[100%]">
                                                <Column className="bg-white_A700 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[10%]">
                                                  <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                                                </Column>
                                                <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[90%]">
                                                  <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[55%]">
                                                    <Column
                                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group777.png')",
                                                      }}
                                                    >
                                                      <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                                    </Column>
                                                    <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                                      <Text
                                                        className="font-semibold text-gray_905 w-[auto]"
                                                        variant="body9"
                                                      >
                                                        道路左转-随机采样-增强1
                                                      </Text>
                                                      <Text
                                                        className="TwoHundredSixtySix"
                                                        variant="body9"
                                                      >
                                                        具体场景故障案例
                                                      </Text>
                                                    </Column>
                                                  </Row>
                                                </Column>
                                              </Row>
                                              <Row className="items-start justify-evenly lg:mt-[132px] xl:mt-[166px] 2xl:mt-[187px] 3xl:mt-[224px] w-[100%]">
                                                <Column className="bg-white_A700 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[10%]">
                                                  <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                                                </Column>
                                                <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[90%]">
                                                  <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[56%]">
                                                    <Column
                                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group777.png')",
                                                      }}
                                                    >
                                                      <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                                    </Column>
                                                    <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                                      <Text
                                                        className="font-semibold text-gray_905 w-[auto]"
                                                        variant="body9"
                                                      >
                                                        道路左转-随机采样-增强5
                                                      </Text>
                                                      <Text
                                                        className="TwoHundredSixtySix"
                                                        variant="body9"
                                                      >
                                                        具体场景故障案例
                                                      </Text>
                                                    </Column>
                                                  </Row>
                                                </Column>
                                              </Row>
                                            </Column>
                                          </Column>
                                          <Column className="items-center w-[59%]">
                                            <Row className="items-center w-[100%]">
                                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                                <Text
                                                  className="columntwohundredsixtyeight"
                                                  variant="body9"
                                                >
                                                  排队中
                                                </Text>
                                              </Column>
                                              <Column className="bg-white_A700 lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[44%]">
                                                <Text
                                                  className="columnthreehundredfiftyeight"
                                                  variant="body9"
                                                >
                                                  --
                                                </Text>
                                              </Column>
                                              <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                                            </Row>
                                            <Row className="items-center lg:mt-[136px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] w-[100%]">
                                              <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                                <Text
                                                  className="columntwohundredsixtyeight"
                                                  variant="body9"
                                                >
                                                  已完成
                                                </Text>
                                              </Column>
                                              <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                                                <Text
                                                  className="columnone2"
                                                  variant="body9"
                                                >
                                                  压线1次
                                                </Text>
                                              </Column>
                                              <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                                            </Row>
                                          </Column>
                                        </Row>
                                      </Column>
                                      <Line className="absolute bg-gray_202 h-[1px] top-[16%] w-[100%]" />
                                      <Line className="absolute bg-gray_202 bottom-[18%] h-[1px] w-[100%]" />
                                      <Text
                                        className="ThreeHundredSixty"
                                        variant="body9"
                                      >
                                        --
                                      </Text>
                                      <Text
                                        className="time_One"
                                        variant="body9"
                                      >
                                        00:40
                                      </Text>
                                      <Text
                                        className="ThreeHundredSixtyOne"
                                        variant="body9"
                                      >
                                        --
                                      </Text>
                                      <Text
                                        className="test_20200909210_One"
                                        variant="body9"
                                      >
                                        2020-09-09 21:00:02
                                      </Text>
                                      <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] top-[16%] w-[3%]">
                                        <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                                      </Column>
                                      <Column className="absolute bg-white_A700 bottom-[1%] items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                                        <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                                      </Column>
                                      <Column className="absolute bg-white_A700 justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] top-[16%] w-[26%]">
                                        <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[82%]">
                                          <Column
                                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group191.png')",
                                            }}
                                          >
                                            <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                          </Column>
                                          <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[82%]">
                                            <Text
                                              className="font-semibold text-gray_905 w-[auto]"
                                              variant="body9"
                                            >
                                              道路左转-随机采样-增强2
                                            </Text>
                                            <Text
                                              className="TwoHundredSixtySix"
                                              variant="body9"
                                            >
                                              具体场景故障案例具体场景故障案例具体故..
                                            </Text>
                                          </Column>
                                        </Row>
                                      </Column>
                                      <Column className="absolute bg-white_A700 bottom-[0] justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[26%]">
                                        <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[82%]">
                                          <Column
                                            className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group191.png')",
                                            }}
                                          >
                                            <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                          </Column>
                                          <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[82%]">
                                            <Text
                                              className="font-semibold text-gray_905 w-[auto]"
                                              variant="body9"
                                            >
                                              道路左转-随机采样-增强6
                                            </Text>
                                            <Text
                                              className="TwoHundredSixtySix"
                                              variant="body9"
                                            >
                                              具体场景故障案例具体场景故障案例具体故..
                                            </Text>
                                          </Column>
                                        </Row>
                                      </Column>
                                    </Stack>
                                    <Column className="absolute bottom-[1%] inset-x-[0] items-center justify-start mx-[auto] w-[42%]">
                                      <Row className="items-center w-[100%]">
                                        <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                          <Text
                                            className="columntwohundredsixtyeight"
                                            variant="body9"
                                          >
                                            运行中
                                          </Text>
                                        </Column>
                                        <Column className="bg-white_A700 lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[44%]">
                                          <Text
                                            className="columnthreehundredfiftyeight"
                                            variant="body9"
                                          >
                                            --
                                          </Text>
                                        </Column>
                                        <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                                      </Row>
                                      <Row className="items-center lg:mt-[136px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] w-[100%]">
                                        <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                          <Text
                                            className="columntwohundredsixtyeight"
                                            variant="body9"
                                          >
                                            已完成
                                          </Text>
                                        </Column>
                                        <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                                          <Text
                                            className="columnone2"
                                            variant="body9"
                                          >
                                            撞车1次
                                          </Text>
                                        </Column>
                                        <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                                      </Row>
                                    </Column>
                                  </Stack>
                                  <Column className="absolute bottom-[1%] items-center justify-start right-[19%] w-[13%]">
                                    <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                                      <Text
                                        className="columnfourhundredthirtyseven"
                                        variant="body9"
                                      >
                                        --
                                      </Text>
                                    </Column>
                                    <Column className="bg-white_A700 justify-start lg:mt-[136px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                                      <Text
                                        className="columntime_two"
                                        variant="body9"
                                      >
                                        01:23
                                      </Text>
                                    </Column>
                                  </Column>
                                </Stack>
                                <Line className="absolute bg-gray_202 h-[1px] top-[28%] w-[100%]" />
                                <Line className="absolute bg-gray_202 bottom-[15%] h-[1px] w-[100%]" />
                                <Text
                                  className="absolute right-[44%] top-[20%] columnu1230"
                                  variant="body9"
                                >
                                  --
                                </Text>
                                <Text
                                  className="test_20200909210_Three"
                                  variant="body9"
                                >
                                  2020-09-09 21:00:02
                                </Text>
                                <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] top-[28%] w-[3%]">
                                  <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                                </Column>
                                <Column className="absolute bg-white_A700 bottom-[1%] items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                                  <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                                </Column>
                                <Column className="absolute bg-white_A700 justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] top-[28%] w-[26%]">
                                  <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[56%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group192.png')",
                                      }}
                                    >
                                      <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                      <Text
                                        className="font-semibold text-gray_905 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转-随机采样-增强3
                                      </Text>
                                      <Text
                                        className="ThreeHundredThree"
                                        variant="body9"
                                      >
                                        摄像头失效故障模式
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                                <Column className="absolute bg-white_A700 bottom-[0] justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[26%]">
                                  <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[56%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group192.png')",
                                      }}
                                    >
                                      <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                      <Text
                                        className="font-semibold text-gray_905 w-[auto]"
                                        variant="body9"
                                      >
                                        道路右转-随机采样-增强7
                                      </Text>
                                      <Text
                                        className="ThreeHundredThree"
                                        variant="body9"
                                      >
                                        摄像头失效故障模式
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Stack>
                              <Row className="items-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[29%]">
                                <Column className="bg-white_A700 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[10%]">
                                  <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                                </Column>
                                <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[90%]">
                                  <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[90%]">
                                    <Column
                                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group192.png')",
                                      }}
                                    >
                                      <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                    </Column>
                                    <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[84%]">
                                      <Text
                                        className="font-semibold text-gray_905 w-[auto]"
                                        variant="body9"
                                      >
                                        道路左转道路左转道路左转道...-随机采样-增强9
                                      </Text>
                                      <Text
                                        className="ThreeHundredThree"
                                        variant="body9"
                                      >
                                        摄像头失效故障模式
                                      </Text>
                                    </Column>
                                  </Row>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="absolute bottom-[1%] inset-x-[0] items-center justify-start mx-[auto] w-[42%]">
                              <Row className="items-center w-[100%]">
                                <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                  <Text
                                    className="columntwohundredsixtyeight"
                                    variant="body9"
                                  >
                                    已完成
                                  </Text>
                                </Column>
                                <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                                  <Text className="columnone2" variant="body9">
                                    逆行1次
                                  </Text>
                                </Column>
                                <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                              </Row>
                              <Row className="items-center lg:mt-[136px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] w-[100%]">
                                <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                  <Text
                                    className="columntwohundredsixtyeight"
                                    variant="body9"
                                  >
                                    已完成
                                  </Text>
                                </Column>
                                <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                                  <Text className="columnone2" variant="body9">
                                    逆行1次
                                  </Text>
                                </Column>
                                <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                              </Row>
                              <Row className="items-center lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[100%]">
                                <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[15%]">
                                  <Text
                                    className="columntwohundredsixtyeight"
                                    variant="body9"
                                  >
                                    已完成
                                  </Text>
                                </Column>
                                <Column className="bg-white_A700 lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[44%]">
                                  <Text className="columnone2" variant="body9">
                                    逆行1次
                                  </Text>
                                </Column>
                                <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[32%]"></div>
                              </Row>
                            </Column>
                          </Stack>
                          <Column className="absolute bottom-[1%] items-center justify-start right-[19%] w-[13%]">
                            <Column className="items-center justify-start w-[100%]">
                              <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                                <Text
                                  className="columntime_two"
                                  variant="body9"
                                >
                                  05:23
                                </Text>
                              </Column>
                              <Column className="bg-white_A700 justify-start lg:mt-[136px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                                <Text
                                  className="columntime_two"
                                  variant="body9"
                                >
                                  05:23
                                </Text>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 justify-start lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                              <Text className="columntime_two" variant="body9">
                                05:23
                              </Text>
                            </Column>
                          </Column>
                        </Stack>
                        <Line className="absolute bg-gray_202 h-[1px] top-[30%] w-[100%]" />
                        <Line className="absolute bg-gray_202 bottom-[31%] h-[1px] w-[100%]" />
                        <Line className="absolute bg-gray_202 bottom-[11%] h-[1px] w-[100%]" />
                        <Text className="test_20200909210_Four" variant="body9">
                          2020-09-09 21:00:02
                        </Text>
                        <Column className="absolute justify-start left-[3%] top-[30%] w-[68%]">
                          <Row className="items-start w-[100%]">
                            <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[38%]">
                              <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[56%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group1723.png')",
                                  }}
                                >
                                  <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                  <Text
                                    className="font-semibold text-gray_905 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-随机采样-增强4
                                  </Text>
                                  <Text
                                    className="ThreeHundredThree"
                                    variant="body9"
                                  >
                                    摄像头失效故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                              <Text
                                className="columntwohundredsixtyeight"
                                variant="body9"
                              >
                                已完成
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[27%]">
                              <Text className="columnone2" variant="body9">
                                压线1次
                              </Text>
                            </Column>
                            <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[20%]"></div>
                          </Row>
                          <Text className="columnrectangle345" variant="body9">
                            2020-09-09 21:00:02
                          </Text>
                        </Column>
                        <Column className="absolute bottom-[15%] justify-start left-[3%] w-[68%]">
                          <Row className="items-start w-[100%]">
                            <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[38%]">
                              <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[56%]">
                                <Column
                                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group1723.png')",
                                  }}
                                >
                                  <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                                </Column>
                                <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                                  <Text
                                    className="font-semibold text-gray_905 w-[auto]"
                                    variant="body9"
                                  >
                                    道路左转-随机采样-增强8
                                  </Text>
                                  <Text
                                    className="ThreeHundredThree"
                                    variant="body9"
                                  >
                                    摄像头失效故障模式
                                  </Text>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 justify-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[9%]">
                              <Text
                                className="columntwohundredsixtyeight"
                                variant="body9"
                              >
                                已完成
                              </Text>
                            </Column>
                            <Column className="bg-white_A700 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[27%]">
                              <Text className="columnone2" variant="body9">
                                压线1次
                              </Text>
                            </Column>
                            <div className="bg-white_A700 lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] w-[20%]"></div>
                          </Row>
                          <Text className="columnrectangle377" variant="body9">
                            2020-09-09 21:00:02
                          </Text>
                        </Column>
                        <Button
                          className="absolute flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center right-[10%] top-[3%] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray10075"
                        >
                          <Img
                            src="images/img_frame_2.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="Frame"
                          />
                        </Button>
                        <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] top-[30%] w-[3%]">
                          <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Column className="absolute bg-white_A700 bottom-[21%] items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Column className="absolute bg-white_A700 bottom-[1%] items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                          <div className="border border-gray_402 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius2 arrowleft"></div>
                        </Column>
                        <Column className="absolute bg-white_A700 bottom-[0] justify-start left-[3%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[26%]">
                          <Row className="items-end 3xl:mb-[10px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] mt-[4px] rounded-radius4 w-[64%]">
                            <Column
                              className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group1723.png')",
                              }}
                            >
                              <div className="bg-gray_900_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                            </Column>
                            <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[77%]">
                              <Text
                                className="font-semibold text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                道路左转-故障注入-延迟-增强1
                              </Text>
                              <Text
                                className="ThreeHundredThree"
                                variant="body9"
                              >
                                摄像头失效故障模式
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Column className="absolute bg-white_A700 bottom-[1%] justify-start left-[29%] lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[6%]">
                          <Text
                            className="columntwohundredsixtyeight"
                            variant="body9"
                          >
                            已完成
                          </Text>
                        </Column>
                        <Column className="absolute bg-white_A700 bottom-[1%] justify-end left-[35%] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[19%]">
                          <Text className="columnone2" variant="body9">
                            压线1次
                          </Text>
                        </Column>
                        <div className="absolute bg-white_A700 bottom-[1%] lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] right-[29%] w-[13%]"></div>
                      </Stack>
                      <Column className="absolute bottom-[21%] items-center justify-start right-[19%] w-[13%]">
                        <Column className="bg-white_A700 justify-start lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                          <Text className="columntime_two" variant="body9">
                            1:22:23
                          </Text>
                        </Column>
                        <Column className="bg-white_A700 justify-start lg:mt-[136px] xl:mt-[170px] 2xl:mt-[192px] 3xl:mt-[230px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[100%]">
                          <Text className="columntime_two" variant="body9">
                            1:22:23
                          </Text>
                        </Column>
                      </Column>
                    </Stack>
                    <Column className="absolute bottom-[1%] items-end justify-start right-[10%] w-[35%]">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_2.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame One"
                        />
                      </Button>
                      <Row className="items-center lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                        <Text className="columnu1230" variant="body9">
                          2020-09-09 21:00:02
                        </Text>
                        <Column className="bg-white_A700 lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] lg:p-[17px] xl:p-[22px] 2xl:p-[25px] 3xl:p-[30px] w-[37%]">
                          <Text className="columntime_two" variant="body9">
                            1:22:23
                          </Text>
                        </Column>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_frame_2.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="Frame Two"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Line className="absolute bg-gray_202 h-[1px] top-[39%] w-[100%]" />
                    <Line className="absolute bg-gray_202 bottom-[21%] h-[1px] w-[100%]" />
                    <Line className="absolute bg-gray_202 bottom-[1%] h-[1px] w-[100%]" />
                    <Column className="absolute items-end justify-start right-[10%] top-[13%] w-[35%]">
                      <Column className="items-center justify-start w-[6%]">
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_videocamera.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="videocamera"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_frame_2.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="Frame Three"
                          />
                        </Button>
                      </Column>
                      <Row className="items-center justify-between lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                        <Text className="columnu1230" variant="body9">
                          2020-09-09 21:00:02
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_frame_2.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="Frame Four"
                          />
                        </Button>
                      </Row>
                    </Column>
                    <Column className="absolute bottom-[24%] items-end justify-start right-[10%] w-[35%]">
                      <Column className="items-center justify-start w-[6%]">
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center w-[100%]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_frame_2.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="Frame Five"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[100%]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_frame_2.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="Frame Six"
                          />
                        </Button>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_frame_2.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="Frame Seven"
                          />
                        </Button>
                      </Column>
                      <Row className="items-center justify-between lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
                        <Text className="columnu1230" variant="body9">
                          2020-09-09 21:00:02
                        </Text>
                        <Button
                          className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                          shape="icbRoundedBorder3"
                          size="mdIcn"
                          variant="icbFillGray102"
                        >
                          <Img
                            src="images/img_frame_2.svg"
                            className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                            alt="Frame Eight"
                          />
                        </Button>
                      </Row>
                    </Column>
                  </Stack>
                </Stack>
                <Row className="items-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
                  <Row className="items-center justify-between mt-[3px] w-[16%]">
                    <CheckBox
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_906"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      name="FourHundredFiftyThree"
                      label="全选"
                      shape="RoundedBorder2"
                      size="sm"
                      variant="OutlineGray402"
                    ></CheckBox>
                    <div className="bg-gray_202 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] w-[1px]"></div>
                    <Button
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[53%]"
                      shape="RoundedBorder4"
                      size="md"
                      variant="FillBlueA401"
                    >
                      添加到测试集
                    </Button>
                  </Row>
                  <Row className="items-center justify-center lg:ml-[469px] xl:ml-[587px] 2xl:ml-[660px] 3xl:ml-[792px] w-[17%]">
                    <Row className="items-start justify-between mb-[1px] w-[46%]">
                      <Text className="FourHundredFiftyFour" variant="body8">
                        执行案例：
                      </Text>
                      <Text className="rowsix" variant="body4">
                        2
                      </Text>
                      <Text className="FourHundredFiftyFive" variant="body8">
                        个
                      </Text>
                    </Row>
                    <Row className="items-start justify-between lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] mt-[1px] w-[34%]">
                      <Text className="FourHundredFiftyFour" variant="body8">
                        压线：
                      </Text>
                      <Text className="rowsix" variant="body4">
                        6
                      </Text>
                      <Text className="FourHundredFiftyFive" variant="body8">
                        次
                      </Text>
                    </Row>
                  </Row>
                  <Row className="items-start justify-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] mt-[1px] w-[6%]">
                    <Text className="FourHundredFiftyFour" variant="body8">
                      撞车：
                    </Text>
                    <Text
                      className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] rowsix"
                      variant="body4"
                    >
                      1
                    </Text>
                    <Text
                      className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] FourHundredFiftyFive"
                      variant="body8"
                    >
                      次
                    </Text>
                  </Row>
                  <Row className="items-start justify-between lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] mt-[1px] w-[6%]">
                    <Text className="FourHundredFiftyFour" variant="body8">
                      逆行：
                    </Text>
                    <Text className="rowsix" variant="body4">
                      1
                    </Text>
                    <Text className="FourHundredFiftyFive" variant="body8">
                      次
                    </Text>
                  </Row>
                </Row>
              </Column>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default I03Page;
