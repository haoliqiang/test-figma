import React from "react";

import { Column, Text, Row, Line, List, Button, Stack, Img } from "components";

const One1Page = () => {
  return (
    <>
      <Column className="bg-bluegray_50 font-pingfangsc justify-start mx-[auto] lg:p-[48px] xl:p-[60px] 2xl:p-[68px] 3xl:p-[81px] w-[100%]">
        <Column className="justify-start lg:mb-[132px] xl:mb-[166px] 2xl:mb-[187px] 3xl:mb-[224px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[92%]">
          <Column className="justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[21px] w-[69%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              variant="body1"
            >
              交互状态
            </Text>
            <Text
              className="font-normal lg:mt-[39px] xl:mt-[48px] 2xl:mt-[55px] 3xl:mt-[66px] not-italic text-red_500 w-[auto]"
              variant="body6"
            >
              测试描述的设计规则：2k屏以下，宽度随屏幕适配；2k屏以上，文字需要定宽，宽度为2560px；
            </Text>
            <Row className="items-start 2xl:mt-[105px] 3xl:mt-[126px] lg:mt-[75px] xl:mt-[93px] w-[58%]">
              <Column className="justify-start lg:mb-[26px] xl:mb-[33px] 2xl:mb-[37px] 3xl:mb-[44px] w-[8%]">
                <Text className="rowninehundrednineteen" variant="body6">
                  按钮
                </Text>
                <Text
                  className="font-normal lg:mt-[38px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[64px] not-italic text-black_900_87 w-[auto]"
                  variant="body9"
                >
                  默认
                </Text>
                <Text
                  className="font-normal lg:mt-[42px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[71px] not-italic text-black_900_87 w-[auto]"
                  variant="body9"
                >
                  滑过
                </Text>
                <Text
                  className="font-normal lg:mt-[42px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[71px] not-italic text-black_900_87 w-[auto]"
                  variant="body9"
                >
                  点击
                </Text>
              </Column>
              <Line className="bg-black_900_63 lg:h-[141px] xl:h-[177px] 2xl:h-[199px] 3xl:h-[238px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[70px] w-[1px]" />
              <Column className="items-center justify-start lg:ml-[32px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[35px] xl:mt-[45px] 2xl:mt-[50px] 3xl:mt-[60px] w-[75%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="listrectangle3281">
                    <Column className="bg-white_A700 border border-gray_202 border-solid p-[1px] rounded-radius4 w-[47%]">
                      <Row className="items-center w-[88%]">
                        <Column className="bg-gray_53 items-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[3px] rounded-br-[0] rounded-tl-[3px] rounded-tr-[0] w-[29%]">
                          <div className="bg-white_A700 border border-gray_304 border-solid 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] rounded-radius2 arrowdown"></div>
                        </Column>
                        <Column className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] w-[62%]">
                          <Text className="TwoHundredFortyTwo" variant="body9">
                            测试场景3
                          </Text>
                          <Text
                            className="OneThousandTwoHundredSeventyNine"
                            variant="body8"
                          >
                            道路通行条件
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Button
                      className="font-normal not-italic lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-center w-[29%]"
                      shape="RoundedBorder4"
                      size="lg"
                      variant="FillBlueA401"
                    >
                      开始评估
                    </Button>
                  </Row>
                  <Row className="listrectangle3281">
                    <Column className="bg-white_A700 border border-blue_A202 border-solid p-[1px] rounded-radius4 w-[47%]">
                      <Row className="items-center w-[88%]">
                        <Column className="bg-gray_53 items-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[3px] rounded-br-[0] rounded-tl-[3px] rounded-tr-[0] w-[29%]">
                          <div className="bg-white_A700 border border-blue_A202 border-solid 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] rounded-radius2 arrowdown"></div>
                        </Column>
                        <Column className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] w-[62%]">
                          <Text className="TwoHundredFortyTwo" variant="body9">
                            测试场景3
                          </Text>
                          <Text
                            className="OneThousandTwoHundredSeventyNine"
                            variant="body8"
                          >
                            道路通行条件
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Button
                      className="font-normal not-italic lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-center w-[29%]"
                      shape="RoundedBorder4"
                      size="lg"
                      variant="FillBlueA202"
                    >
                      开始评估
                    </Button>
                  </Row>
                  <Row className="listrectangle3281">
                    <Column className="bg-white_A700 border border-blue_A401 border-solid p-[1px] rounded-radius4 w-[47%]">
                      <Row className="items-center w-[88%]">
                        <Column className="bg-blue_A400_33 items-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] rounded-bl-[3px] rounded-br-[0] rounded-tl-[3px] rounded-tr-[0] w-[29%]">
                          <Column className="bg-white_A700 border border-gray_304 border-solid items-center justify-start 3xl:my-[11px] lg:my-[7px] xl:my-[8px] 2xl:my-[9px] rounded-radius2 arrowdown">
                            <Stack className="bg-blue_A401 rounded-radius2 arrowdown">
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="absolute arrowdown"
                                alt="checkmark"
                              />
                            </Stack>
                          </Column>
                        </Column>
                        <Column className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] w-[62%]">
                          <Text className="TwoHundredFortyTwo" variant="body9">
                            测试场景3
                          </Text>
                          <Text
                            className="OneThousandTwoHundredSeventyNine"
                            variant="body8"
                          >
                            道路通行条件
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Button
                      className="font-normal not-italic lg:text-[12px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[21px] text-center w-[29%]"
                      shape="RoundedBorder4"
                      size="lg"
                      variant="FillBlue700"
                    >
                      开始评估
                    </Button>
                  </Row>
                </List>
              </Column>
            </Row>
          </Column>
          <List
            className="xl:gap-[111px] 2xl:gap-[125px] 3xl:gap-[150px] lg:gap-[89px] grid grid-cols-2 min-h-[auto] lg:mt-[127px] xl:mt-[159px] 2xl:mt-[179px] 3xl:mt-[215px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-gradient2  border border-gray_202 border-solid items-center justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius8 w-[100%]">
              <Row className="items-start justify-between w-[98%]">
                <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[19%]">
                  <Text className="columnu1230" variant="body8">
                    测试过程预览
                  </Text>
                  <div className="bg-gray_500 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[31%]"></div>
                </Column>
                <Stack
                  className="bg-cover bg-repeat lg:h-[133px] xl:h-[167px] 2xl:h-[188px] 3xl:h-[225px] lg:px-[49px] xl:px-[61px] 2xl:px-[69px] 3xl:px-[83px] rounded-radius4 w-[67%]"
                  style={{ backgroundImage: "url('images/img_group1715.png')" }}
                >
                  <Button
                    className="absolute flex lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                    size="lgIcn"
                    variant="icbOutlineWhiteA700e5"
                  >
                    <Img
                      src="images/img_play_44X44.svg"
                      className="flex items-center justify-center"
                      alt="play"
                    />
                  </Button>
                  <Button
                    className="absolute flex lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] inset-[0] items-center justify-center m-[auto] rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                    size="lgIcn"
                    variant="icbOutlineWhiteA700e5"
                  >
                    <Img
                      src="images/img_play_44X44.svg"
                      className="flex items-center justify-center"
                      alt="play One"
                    />
                  </Button>
                </Stack>
              </Row>
            </Column>
            <Column className="bg-gradient2  border border-gray_202 border-solid items-center justify-start lg:p-[12px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[21px] rounded-radius8 w-[100%]">
              <Row className="items-start justify-between w-[98%]">
                <Column className="justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[19%]">
                  <Text className="columnu1230" variant="body8">
                    测试过程预览
                  </Text>
                  <div className="bg-gray_500 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[1px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[31%]"></div>
                </Column>
                <Column
                  className="bg-cover bg-repeat items-center justify-start lg:p-[49px] xl:p-[61px] 2xl:p-[69px] 3xl:p-[83px] rounded-radius4 w-[67%]"
                  style={{ backgroundImage: "url('images/img_group1715.png')" }}
                >
                  <Button
                    className="flex lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] items-center justify-center rounded-radius50 lg:w-[34px] xl:w-[43px] 2xl:w-[48px] 3xl:w-[58px]"
                    size="lgIcn"
                    variant="icbFillBlueA202"
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
          </List>
        </Column>
      </Column>
    </>
  );
};

export default One1Page;
