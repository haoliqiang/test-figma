import React from "react";

import { Row, Line, Column, Text, Stack, Img, Button } from "components";

const RowTwenty = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Row className="items-center justify-evenly w-[15%]">
          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[24%]">
            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
          </Column>
          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[76%]">
            <Text className="columnonehundredseventeen" variant="body9">
              UE999999
            </Text>
          </Column>
        </Row>
        <Row className="items-center justify-evenly w-[43%]">
          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[9%]">
            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
          </Column>
          <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[28%]">
            <Text className="columnonehundredseventeen" variant="body9">
              UE999999
            </Text>
          </Column>
          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[102px] lg:pr-[60px] xl:pr-[75px] 2xl:pr-[85px] py-[4px] w-[64%]">
            <Column className="items-center justify-start rounded-radius4 w-[94%]">
              <Row className="items-end justify-between w-[100%]">
                <Column
                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  style={{ backgroundImage: "url('images/img_group192.png')" }}
                >
                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                </Column>
                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                  <Text className="rowonethousandseventy" variant="body9">
                    道路左转-增强
                  </Text>
                  <Text className="TwoThousandEightHundredFour" variant="body9">
                    具体场景故障案例具体场景
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
        <Row className="items-center justify-evenly w-[100%]">
          <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Row className="items-center justify-evenly w-[100%]">
                <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[4%]">
                  <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
                </Column>
                <Column className="bg-white_A700 pb-[1px] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] pr-[1px] lg:pt-[12px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[12%]">
                  <Text className="columnonehundredseventeen" variant="body9">
                    UE999999
                  </Text>
                </Column>
                <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[102px] lg:pr-[60px] xl:pr-[75px] 2xl:pr-[85px] py-[4px] w-[27%]">
                  <Column className="items-center justify-start rounded-radius4 w-[94%]">
                    <Row className="items-end justify-between w-[100%]">
                      <Column
                        className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                        style={{
                          backgroundImage: "url('images/img_group192.png')",
                        }}
                      >
                        <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                      </Column>
                      <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                        <Text className="rowonethousandseventy" variant="body9">
                          道路左转-增强
                        </Text>
                        <Text
                          className="TwoThousandEightHundredFour"
                          variant="body9"
                        >
                          具体场景故障案例具体场景
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[20%]">
                  <Column className="justify-start mt-[1px] w-[61%]">
                    <Text className="FortyEight_Five" variant="body9">
                      48分钟
                    </Text>
                    <Text className="language_Five" variant="body9">
                      2022-08-12 20:23:12
                    </Text>
                  </Column>
                </Column>
                <Row className="items-center justify-center w-[28%]">
                  <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
                    <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                      <Row className="items-start justify-evenly w-[100%]">
                        <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                        <Text
                          className="columnonehundredseventeen"
                          variant="body9"
                        >
                          不通过
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
                    <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                      <Text
                        className="columnonehundredseventeen"
                        variant="body9"
                      >
                        12次
                      </Text>
                      <Img
                        src="images/img_polygon15_7X4.svg"
                        className="PolygonFifteen"
                        alt="PolygonFifteen Five"
                      />
                    </Row>
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
                      alt="edit Two"
                    />
                  </Button>
                  <Button
                    className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center mr-[4px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_frame_28X28.svg"
                      className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                      alt="Frame Three"
                    />
                  </Button>
                </Row>
              </Row>
            </Column>
          </Stack>
        </Row>
        <Row className="items-center justify-center w-[47%]">
          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[102px] lg:pr-[60px] xl:pr-[75px] 2xl:pr-[85px] py-[4px] w-[57%]">
            <Column className="items-center justify-start rounded-radius4 w-[94%]">
              <Row className="items-end justify-between w-[100%]">
                <Column
                  className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                  style={{ backgroundImage: "url('images/img_group192.png')" }}
                >
                  <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                </Column>
                <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[74%]">
                  <Text className="rowonethousandseventy" variant="body9">
                    道路左转-增强
                  </Text>
                  <Text className="TwoThousandEightHundredFour" variant="body9">
                    具体场景故障案例具体场景
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column className="bg-white_A700 lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] w-[43%]">
            <Column className="justify-start mt-[1px] w-[61%]">
              <Text className="FortyEight_Five" variant="body9">
                48分钟
              </Text>
              <Text className="language_Five" variant="body9">
                2022-08-12 20:23:12
              </Text>
            </Column>
          </Column>
        </Row>
        <Row className="items-center justify-center w-[16%]">
          <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[100%]">
            <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
              <Row className="items-start justify-evenly w-[100%]">
                <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                <Text className="columnonehundredseventeen" variant="body9">
                  不通过
                </Text>
              </Row>
            </Column>
          </Column>
        </Row>
        <Row className="items-center justify-center w-[28%]">
          <Row className="items-center justify-center w-[100%]">
            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] 3xl:pr-[112px] lg:pr-[66px] xl:pr-[83px] 2xl:pr-[94px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[8px] w-[57%]">
              <Column className="bg-gray_54 items-center justify-end lg:px-[3px] xl:px-[4px] 2xl:px-[5px] 3xl:px-[6px] py-[1px] rounded-radius2 w-[76%]">
                <Row className="items-start justify-evenly w-[100%]">
                  <div className="bg-red_600 mt-[2px] rounded-radius50 plus_One"></div>
                  <Text className="columnonehundredseventeen" variant="body9">
                    不通过
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:pr-[11px] xl:pr-[14px] 2xl:pr-[16px] 3xl:pr-[19px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] w-[43%]">
              <Row className="items-start mr-[auto] mt-[2px] w-[30%]">
                <Text className="columnonehundredseventeen" variant="body9">
                  12次
                </Text>
                <Img
                  src="images/img_polygon15_7X4.svg"
                  className="PolygonFifteen"
                  alt="PolygonFifteen Five"
                />
              </Row>
            </Column>
          </Row>
        </Row>
      </Row>
    </>
  );
};

export default RowTwenty;
