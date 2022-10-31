import React from "react";

import { Column, Row, Text, Img, List, Line, Stack, Button } from "components";

const Page3 = () => {
  return (
    <>
      <Column className="bg-gray_104 font-pingfangsc items-center justify-start mx-[auto] lg:p-[22px] xl:p-[28px] 2xl:p-[32px] 3xl:p-[38px] w-[100%]">
        <Column className="justify-start lg:mb-[506px] xl:mb-[633px] 2xl:mb-[712px] 3xl:mb-[854px] w-[97%]">
          <Row className="items-center w-[33%]">
            <Text className="mt-[1px] rowninehundrednineteen" variant="body8">
              树列表展开
            </Text>
            <Text
              className="mb-[1px] lg:ml-[214px] xl:ml-[268px] 2xl:ml-[302px] 3xl:ml-[362px] rowninehundrednineteen"
              variant="body8"
            >
              按钮状态
            </Text>
          </Row>
          <Row className="items-start lg:mt-[15px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[73%]">
            <Row className="bg-white_A700 items-start lg:pl-[18px] xl:pl-[22px] 2xl:pl-[25px] 3xl:pl-[30px] w-[31%]">
              <Column className="justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[91%]">
                <Row className="bg-white_A700 items-center p-[2px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_caretdownsmal.svg"
                    className="caretdownsmal"
                    alt="caretdownsmal"
                  />
                  <Img src="images/img_user.svg" className="user2" alt="user" />
                  <Text className="rowcaretdownsmal" variant="body8">
                    我的测试集
                  </Text>
                  <Img
                    src="images/img_plus.svg"
                    className="3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] caretdownsmal"
                    alt="plus"
                  />
                </Row>
                <Row className="bg-white_A700 items-center justify-center mt-[3px] xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius4 w-[100%]">
                  <div className="bg-gray_701 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[37px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                  <Text
                    className="mb-[1px] xl:mr-[103px] 2xl:mr-[116px] 3xl:mr-[139px] lg:mr-[82px] rowellipseeleven_one"
                    variant="body8"
                  >
                    入门引导
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[30px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[51px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[47%]">
                  <Column className="bg-blue_A400_65 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] items-center px-[2px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px]">
                    <div className="bg-blue_A401 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                  </Column>
                  <Text className="rowellipseeleven" variant="body8">
                    20220804测试
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center justify-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] rounded-radius4 w-[100%]">
                  <div className="bg-gray_701 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                  <Text
                    className="lg:mr-[16px] xl:mr-[20px] 2xl:mr-[23px] 3xl:mr-[28px] mt-[3px] rowellipseeleven_one"
                    variant="body8"
                  >
                    Apollo V5极端路况测试
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center justify-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius4 w-[100%]">
                  <div className="bg-gray_701 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:ml-[22px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[37px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                  <Text
                    className="mb-[1px] lg:mr-[22px] xl:mr-[27px] 2xl:mr-[30px] 3xl:mr-[37px] rowellipseeleven_one"
                    variant="body8"
                  >
                    故障案例 2022-8-22
                  </Text>
                </Row>
                <Row className="bg-white_A700 items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] p-[2px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_play.svg"
                    className="caretdownsmal"
                    alt="play"
                  />
                  <Img
                    src="images/img_calculator.svg"
                    className="user2"
                    alt="calculator"
                  />
                  <Text className="rowcaretdownsmal" variant="body8">
                    企业测试集
                  </Text>
                  <Img
                    src="images/img_plus.svg"
                    className="3xl:ml-[115px] lg:ml-[68px] xl:ml-[85px] 2xl:ml-[96px] caretdownsmal"
                    alt="plus One"
                  />
                </Row>
                <List
                  className="gap-[0] min-h-[auto] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="bg-white_A700 items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] p-[2px] rounded-radius4 w-[100%]">
                    <Img
                      src="images/img_play.svg"
                      className="caretdownsmal"
                      alt="play One"
                    />
                    <Img
                      src="images/img_computer.svg"
                      className="user2"
                      alt="computer"
                    />
                    <Text className="rowcaretdownsmal" variant="body8">
                      标准案例库
                    </Text>
                  </Row>
                  <Row className="bg-white_A700 items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] p-[2px] rounded-radius4 w-[100%]">
                    <Img
                      src="images/img_play.svg"
                      className="caretdownsmal"
                      alt="play Two"
                    />
                    <Img
                      src="images/img_folder.svg"
                      className="user2"
                      alt="folder"
                    />
                    <Text className="rowcaretdownsmal" variant="body8">
                      可信赖案例库
                    </Text>
                  </Row>
                </List>
              </Column>
              <Line className="bg-gray_202 3xl:h-[1072px] lg:h-[635px] xl:h-[794px] 2xl:h-[894px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[29px] w-[1px]" />
            </Row>
            <Column className="justify-start lg:ml-[40px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] mt-[4px] w-[63%]">
              <Column className="items-center justify-start lg:ml-[15px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[11%]">
                <Column className="items-center justify-start w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text className="rowninehundredtwentyfour" variant="body9">
                      默认
                    </Text>
                    <Img
                      src="images/img_plus.svg"
                      className="plus_Two"
                      alt="plus Two"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
                    <Text className="rowninehundredtwentyfour" variant="body9">
                      悬浮
                    </Text>
                    <Img
                      src="images/img_floatingicon.svg"
                      className="plus_Two"
                      alt="floatingicon"
                    />
                  </Row>
                  <Row className="items-start justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] w-[100%]">
                    <Text
                      className="mt-[2px] rowninehundrednineteen"
                      variant="body9"
                    >
                      点击
                    </Text>
                    <Img
                      src="images/img_icon.svg"
                      className="caretdownsmal"
                      alt="icon"
                    />
                  </Row>
                </Column>
              </Column>
              <Stack className="lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[323px] lg:mt-[122px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[206px] w-[100%]">
                <Column className="absolute bg-white_A700 justify-end lg:p-[15px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius8 top-[0] w-[100%]">
                  <Column className="justify-start mt-[2px] w-[69%]">
                    <Text className="rowninehundrednineteen" variant="body8">
                      目录状态
                    </Text>
                    <List
                      className="gap-[0] min-h-[auto] ml-[2px] lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[99%]"
                      orientation="vertical"
                    >
                      <Row className="listninehundredeight">
                        <Row className="items-center justify-between xl:pr-[10px] 2xl:pr-[11px] 3xl:pr-[14px] lg:pr-[8px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[14px] lg:py-[8px] w-[84%]">
                          <Text
                            className="rowninehundrednineteen"
                            variant="body9"
                          >
                            默认
                          </Text>
                          <Row className="items-center justify-center lg:mr-[53px] xl:mr-[67px] 2xl:mr-[75px] 3xl:mr-[91px] my-[1px] w-[36%]">
                            <div className="bg-gray_701 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                            <Text
                              className="rowellipseeleven_one"
                              variant="body8"
                            >
                              20220804测试
                            </Text>
                          </Row>
                        </Row>
                        <Img
                          src="images/img_ellipsis.svg"
                          className="caretdownsmal"
                          alt="ellipsis"
                        />
                      </Row>
                      <Row className="listninehundredeight">
                        <Row className="items-center justify-between w-[84%]">
                          <Text
                            className="rowninehundrednineteen"
                            variant="body9"
                          >
                            悬浮
                          </Text>
                          <Row className="bg-gray_102 items-center justify-end 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius4 w-[75%]">
                            <div className="bg-gray_701 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                            <Text
                              className="rowellipseeleven_one"
                              variant="body8"
                            >
                              20220804测试
                            </Text>
                            <Img
                              src="images/img_ellipsis.svg"
                              className="lg:ml-[44px] xl:ml-[55px] 2xl:ml-[61px] 3xl:ml-[74px] my-[4px] caretdownsmal"
                              alt="ellipsis One"
                            />
                          </Row>
                        </Row>
                        <Img
                          src="images/img_bag.svg"
                          className="caretdownsmal"
                          alt="bag"
                        />
                      </Row>
                      <Row className="listninehundredeight">
                        <Row className="items-start justify-between py-[1px] w-[62%]">
                          <Text
                            className="mt-[4px] rowninehundrednineteen"
                            variant="body9"
                          >
                            选中
                          </Text>
                          <Row className="items-center my-[1px] w-[48%]">
                            <Column className="bg-blue_A400_65 3xl:h-[11px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] items-center px-[2px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[7px] 2xl:w-[8px]">
                              <div className="bg-blue_A401 xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] rounded-radius50 xl:w-[3px] lg:w-[3px] 2xl:w-[4px] 3xl:w-[5px]"></div>
                            </Column>
                            <Text className="rowellipseeleven" variant="body8">
                              20220804测试
                            </Text>
                          </Row>
                        </Row>
                        <Img
                          src="images/img_bag_16X16.svg"
                          className="caretdownsmal"
                          alt="bag One"
                        />
                      </Row>
                    </List>
                  </Column>
                </Column>
                <Column className="absolute bg-white_A700 border border-gray_203 border-solid bottom-[0] justify-start pl-[1px] py-[1px] right-[17%] rounded-radius2 w-[15%]">
                  <Row className="items-start xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[65%]">
                    <Img
                      src="images/img_upload.svg"
                      className="plus_Two"
                      alt="upload"
                    />
                    <Text className="rowupload" variant="body9">
                      重命名
                    </Text>
                  </Row>
                  <Line className="bg-gray_203 h-[1px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] w-[100%]" />
                  <Row className="items-start xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[51%]">
                    <Img
                      src="images/img_trash.svg"
                      className="plus_Two"
                      alt="trash"
                    />
                    <Text className="rowupload" variant="body9">
                      删除
                    </Text>
                  </Row>
                </Column>
              </Stack>
            </Column>
          </Row>
          <Column className="bg-white_A700 justify-start lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[53px] lg:p-[28px] xl:p-[36px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius12 w-[100%]">
            <Column className="items-center justify-start lg:mb-[24px] xl:mb-[30px] 2xl:mb-[34px] 3xl:mb-[41px] ml-[2px] w-[95%]">
              <Column className="justify-start w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="justify-start lg:my-[13px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[22px] w-[100%]">
                    <Text className="rowninehundrednineteen" variant="body8">
                      列表默认
                    </Text>
                    <Stack className="bg-white_A700 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[83px] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[98%]">
                      <Column className="absolute items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] w-[4%]">
                            <div className="border border-gray_402 border-solid xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] rounded-radius2 caretdownsmal"></div>
                          </Column>
                          <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[12%]">
                            <Text className="columnu12303" variant="body9">
                              U1230
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[27%]">
                            <Row className="items-end my-[4px] rounded-radius4 w-[88%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-start rounded-radius4 lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-gray_900_63 lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius4 lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                                <Text
                                  className="font-semibold text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text
                                  className="OneHundredSixtyOne"
                                  variant="body9"
                                >
                                  具体场景故障案例具体场景故障案例...
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[20%]">
                            <Column className="justify-start 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[61%]">
                              <Text
                                className="font-medium text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                          <Row className="items-center justify-center w-[28%]">
                            <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[57%]">
                              <Row className="bg-gray_102 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius2 w-[35%]">
                                <div className="bg-red_400 rounded-radius50 plus_One"></div>
                                <Text
                                  className="rowellipsenine3"
                                  variant="body9"
                                >
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[43%]">
                              <Row className="items-start lg:my-[12px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] w-[28%]">
                                <Text className="columnu1230" variant="body9">
                                  16次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="ml-[4px] PolygonFifteen_Two1"
                                  alt="PolygonFifteen"
                                />
                              </Row>
                            </Column>
                          </Row>
                          <Row className="bg-white_A700 items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[9%]">
                            <Button
                              className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_edit.svg"
                                className="flex items-center justify-center lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px]"
                                alt="edit"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_frame_1.svg"
                                className="flex items-center justify-center lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px]"
                                alt="Frame"
                              />
                            </Button>
                          </Row>
                        </Row>
                      </Column>
                      <Line className="absolute bg-gray_202 bottom-[0] h-[1px] w-[100%]" />
                    </Stack>
                  </Column>
                  <Column className="justify-start lg:my-[13px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[22px] w-[100%]">
                    <Text className="rowninehundrednineteen" variant="body8">
                      列表悬浮
                    </Text>
                    <Stack className="bg-gray_53 lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[83px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[98%]">
                      <Column className="absolute items-center justify-start w-[100%]">
                        <Row className="items-center justify-evenly w-[100%]">
                          <Column className="bg-white_A700 items-center xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] w-[4%]">
                            <div className="border border-gray_402 border-solid xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] rounded-radius2 caretdownsmal"></div>
                          </Column>
                          <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[12%]">
                            <Text className="columnu12303" variant="body9">
                              U1230
                            </Text>
                          </Column>
                          <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[27%]">
                            <Row className="items-end my-[4px] rounded-radius4 w-[88%]">
                              <Column
                                className="bg-cover bg-repeat lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] items-center justify-start rounded-radius4 lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group777.png')",
                                }}
                              >
                                <div className="bg-gray_900_63 lg:h-[31px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[52px] rounded-radius4 lg:w-[30px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[51px]"></div>
                              </Column>
                              <Column className="justify-start mb-[2px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[80%]">
                                <Text
                                  className="font-semibold text-gray_905 w-[auto]"
                                  variant="body9"
                                >
                                  道路左转
                                </Text>
                                <Text
                                  className="OneHundredSixtyOne"
                                  variant="body9"
                                >
                                  具体场景故障案例具体场景故障案例...
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[20%]">
                            <Column className="justify-start 3xl:my-[10px] lg:my-[6px] xl:my-[7px] 2xl:my-[8px] w-[61%]">
                              <Text
                                className="font-medium text-gray_905 w-[auto]"
                                variant="body9"
                              >
                                48分钟
                              </Text>
                              <Text className="language" variant="body9">
                                2022-08-12 20:23:12
                              </Text>
                            </Column>
                          </Column>
                          <Row className="items-center justify-center w-[28%]">
                            <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[57%]">
                              <Row className="bg-gray_102 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius2 w-[35%]">
                                <div className="bg-red_400 rounded-radius50 plus_One"></div>
                                <Text
                                  className="rowellipsenine3"
                                  variant="body9"
                                >
                                  不通过
                                </Text>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[43%]">
                              <Row className="items-start lg:my-[12px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] w-[28%]">
                                <Text className="columnu1230" variant="body9">
                                  16次
                                </Text>
                                <Img
                                  src="images/img_polygon15_7X4.svg"
                                  className="ml-[4px] PolygonFifteen_Two1"
                                  alt="PolygonFifteen One"
                                />
                              </Row>
                            </Column>
                          </Row>
                          <Row className="bg-white_A700 items-center justify-between 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] w-[9%]">
                            <Button
                              className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray102"
                            >
                              <Img
                                src="images/img_edit.svg"
                                className="flex items-center justify-center lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px]"
                                alt="edit One"
                              />
                            </Button>
                            <Button
                              className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[9px] lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                              shape="icbRoundedBorder3"
                              size="mdIcn"
                              variant="icbFillGray105"
                            >
                              <Img
                                src="images/img_frame_1.svg"
                                className="flex items-center justify-center lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px]"
                                alt="Frame One"
                              />
                            </Button>
                          </Row>
                        </Row>
                      </Column>
                      <Line className="absolute bg-gray_202 bottom-[0] h-[1px] w-[100%]" />
                    </Stack>
                  </Column>
                </List>
                <Row className="items-center lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[4%]">
                  <div className="border border-gray_402 border-solid rounded-radius2 caretdownsmal"></div>
                  <Stack className="bg-blue_A401 lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] rounded-radius2 caretdownsmal">
                    <Img
                      src="images/img_checkmark_2.svg"
                      className="absolute caretdownsmal"
                      alt="checkmark"
                    />
                  </Stack>
                </Row>
                <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[13%]">
                  <Text
                    className="mt-[1px] rowninehundrednineteen"
                    variant="body9"
                  >
                    默认
                  </Text>
                  <Text
                    className="lg:ml-[29px] xl:ml-[37px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] rowninehundrednineteen"
                    variant="body9"
                  >
                    悬浮
                  </Text>
                  <Text
                    className="lg:ml-[29px] xl:ml-[37px] 2xl:ml-[41px] 3xl:ml-[49px] rowninehundrednineteen"
                    variant="body9"
                  >
                    选中
                  </Text>
                </Row>
                <Row className="items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[14%]">
                  <Button
                    className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray102"
                  >
                    <Img
                      src="images/img_edit.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px]"
                      alt="edit Two"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[44px] lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillBlueA203"
                  >
                    <Img
                      src="images/img_edit_28X28.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px]"
                      alt="edit Three"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[22px] xl:h-[27px] 2xl:h-[30px] 3xl:h-[36px] items-center justify-center lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[44px] lg:w-[21px] xl:w-[26px] 2xl:w-[29px] 3xl:w-[35px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillBlueA401"
                  >
                    <Img
                      src="images/img_edit_28X28.svg"
                      className="flex items-center justify-center lg:h-[13px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px]"
                      alt="edit Four"
                    />
                  </Button>
                </Row>
                <Row className="items-center lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[32px] w-[14%]">
                  <Row className="items-center justify-between w-[60%]">
                    <Row className="items-start justify-evenly w-[34%]">
                      <Text className="columnu1230" variant="body9">
                        16次
                      </Text>
                      <Img
                        src="images/img_polygon15_7X4.svg"
                        className="PolygonFifteen_Two1"
                        alt="PolygonFifteen Two"
                      />
                    </Row>
                    <Row className="items-start justify-evenly w-[34%]">
                      <Text
                        className="font-normal not-italic text-blue_A203 w-[auto]"
                        variant="body9"
                      >
                        16次
                      </Text>
                      <Img
                        src="images/img_polygon15_7X4.svg"
                        className="PolygonFifteen_Two1"
                        alt="PolygonFifteen Three"
                      />
                    </Row>
                  </Row>
                  <Row className="items-start justify-evenly lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[21%]">
                    <Text className="rowsixteen_four" variant="body9">
                      16次
                    </Text>
                    <Img
                      src="images/img_polygon15_1.svg"
                      className="PolygonFifteen_Two1"
                      alt="PolygonFifteen Four"
                    />
                  </Row>
                </Row>
                <Row className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[13%]">
                  <div className="border border-gray_402 border-solid rounded-radius2 caretdownsmal"></div>
                  <div className="border border-blue_A203 border-solid lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius2 caretdownsmal"></div>
                  <Stack className="bg-blue_A401 lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius2 caretdownsmal">
                    <Img
                      src="images/img_checkmark_2.svg"
                      className="absolute caretdownsmal"
                      alt="checkmark One"
                    />
                  </Stack>
                </Row>
                <Row className="items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[11%]">
                  <Column className="bg-gray_102 items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius2 w-[47%]">
                    <Row className="items-start justify-evenly my-[2px] w-[100%]">
                      <div className="bg-red_400 mt-[2px] rounded-radius50 plus_One"></div>
                      <Text className="columnu1230" variant="body9">
                        不通过
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_303 items-center lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius2 w-[47%]">
                    <Row className="items-start justify-evenly my-[2px] w-[100%]">
                      <div className="bg-red_400 mt-[2px] rounded-radius50 plus_One"></div>
                      <Text className="columnu1230" variant="body9">
                        不通过
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page3;
