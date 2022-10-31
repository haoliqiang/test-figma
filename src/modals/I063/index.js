import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Stack, Line, List, Button } from "components";

const I063Modal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-black_900_a2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-end 2xl:p-[100px] 3xl:p-[120px] lg:p-[71px] xl:p-[88px] rounded-radius10 w-[100%]">
            <Row className="items-end justify-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[53%]">
              <Column className="justify-end pr-[3px] py-[3px] w-[63%]">
                <Text className="FiveHundredFiftyTwo" variant="body7">
                  案例编辑
                </Text>
              </Column>
              <Img
                src="images/img_close_1.svg"
                className="common-pointer close12"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Column className="items-end justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[58%]">
              <Stack className="2xl:h-[111px] 3xl:h-[133px] lg:h-[79px] xl:h-[98px] w-[100%]">
                <Column className="absolute items-center justify-start w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Line className="bg-gray_202 h-[1px] w-[100%]" />
                    <Row className="items-center lg:mt-[49px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] w-[91%]">
                      <Text
                        className="font-medium text-bluegray_500 w-[auto]"
                        variant="body8"
                      >
                        * NPC车辆位置
                      </Text>
                      <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                        <Text className="One_One" variant="body8">
                          580
                        </Text>
                      </Column>
                      <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                      <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                        <Text className="One_One" variant="body8">
                          600
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Column className="absolute bg-white_A700 bottom-[4%] items-center justify-start lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] shadow-bs8 w-[100%]">
                  <Line className="bg-gray_202 h-[1px] w-[93%]" />
                  <Column className="items-center justify-start xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[8px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[93%]">
                    <Text className="columnlanguage_nineteen" variant="body8">
                      参数空间介绍： npc 车辆开始位置npc_start_s [580, 600]，
                      npc车辆速度npc_speed[4, 15]，
                      npc切入距主车距离relative_distance[5, 20]{" "}
                    </Text>
                  </Column>
                </Column>
              </Stack>
              <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[91%]">
                <Text
                  className="font-medium text-bluegray_500 w-[auto]"
                  variant="body8"
                >
                  * NPC车辆速度
                </Text>
                <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[41px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                  <Text className="One_One" variant="body8">
                    4
                  </Text>
                </Column>
                <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                  <Text className="One_One" variant="body8">
                    15
                  </Text>
                </Column>
              </Row>
              <Row className="items-start justify-end ml-[auto] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[95%]">
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[95%]"
                  orientation="vertical"
                >
                  <Row className="listnpc_one">
                    <Text
                      className="font-medium text-bluegray_500 w-[auto]"
                      variant="body8"
                    >
                      * 切入主车距离
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        5
                      </Text>
                    </Column>
                    <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        20
                      </Text>
                    </Column>
                  </Row>
                  <Row className="listnpc_one">
                    <Text
                      className="font-medium text-bluegray_500 w-[auto]"
                      variant="body8"
                    >
                      * 切入主车距离
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        5
                      </Text>
                    </Column>
                    <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        20
                      </Text>
                    </Column>
                  </Row>
                  <Row className="listnpc_one">
                    <Text
                      className="font-medium text-bluegray_500 w-[auto]"
                      variant="body8"
                    >
                      * 切入主车距离
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        5
                      </Text>
                    </Column>
                    <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        20
                      </Text>
                    </Column>
                  </Row>
                  <Row className="listnpc_one">
                    <Text
                      className="font-medium text-bluegray_500 w-[auto]"
                      variant="body8"
                    >
                      * 切入主车距离
                    </Text>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        5
                      </Text>
                    </Column>
                    <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                    <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                      <Text className="One_One" variant="body8">
                        20
                      </Text>
                    </Column>
                  </Row>
                </List>
                <Line className="bg-gray_300 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] rounded-radius3 w-[6px]" />
              </Row>
              <Row className="items-center lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[91%]">
                <Text
                  className="font-medium text-bluegray_500 w-[auto]"
                  variant="body8"
                >
                  * 切入主车距离
                </Text>
                <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                  <Text className="One_One" variant="body8">
                    5
                  </Text>
                </Column>
                <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                  <Text className="One_One" variant="body8">
                    20
                  </Text>
                </Column>
              </Row>
              <Stack className="lg:h-[52px] xl:h-[65px] 2xl:h-[73px] 3xl:h-[87px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Row className="absolute inset-x-[0] items-center mx-[auto] top-[0] w-[91%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    * 切入主车距离
                  </Text>
                  <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[42px] xl:ml-[53px] 2xl:ml-[60px] 3xl:ml-[72px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                    <Text className="One_One" variant="body8">
                      5
                    </Text>
                  </Column>
                  <div className="bg-gray_300 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[2%]"></div>
                  <Column className="bg-white_A700 border border-gray_300 border-solid lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[36%]">
                    <Text className="One_One" variant="body8">
                      20
                    </Text>
                  </Column>
                </Row>
                <Column className="absolute bg-white_A700 bottom-[0] items-center justify-start lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Column className="justify-start w-[100%]">
                    <Line className="bg-gray_202 h-[1px] w-[100%]" />
                    <Row className="items-center justify-end ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[19%]">
                      <Button
                        className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillGray204"
                      >
                        取消
                      </Button>
                      <Button
                        className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA401"
                      >
                        保存
                      </Button>
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export { I063Modal };
