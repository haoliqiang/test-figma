import React from "react";

import { Column, Text, Line, Row, List, Button, Img } from "components";

const Page16 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] w-[100%]">
        <Column className="justify-start lg:mb-[513px] xl:mb-[641px] 2xl:mb-[721px] 3xl:mb-[866px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[100%]">
          <Text
            className="font-semibold text-black_900_e5 w-[auto]"
            as="h5"
            variant="h5"
          >
            按钮类
          </Text>
          <Column className="justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              按钮
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
          <Row className="items-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[42%]">
            <List
              className="lg:gap-[20px] xl:gap-[26px] 2xl:gap-[29px] 3xl:gap-[35px] grid grid-cols-3 min-h-[auto] w-[65%]"
              orientation="horizontal"
            >
              <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[100%]">
                <Button
                  className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA400"
                >
                  下载报告
                </Button>
                <Button
                  className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA200"
                >
                  下载报告
                </Button>
                <Button
                  className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlue800"
                >
                  下载报告
                </Button>
                <Button
                  className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineGray3001_2"
                >
                  下载报告
                </Button>
              </Column>
              <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[100%]">
                <Button
                  className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA400"
                >
                  开始评估
                </Button>
                <Button
                  className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA200"
                >
                  开始评估
                </Button>
                <Button
                  className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlue800"
                >
                  开始评估
                </Button>
                <Button
                  className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineGray3001_2"
                >
                  开始评估
                </Button>
              </Column>
              <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[100%]">
                <Button
                  className="font-normal not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillRed600"
                >
                  终止任务
                </Button>
                <Button
                  className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillRed300"
                >
                  终止任务
                </Button>
                <Button
                  className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillRed900"
                >
                  终止任务
                </Button>
                <Button
                  className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic xl:text-[10px] 2xl:text-[11px] 3xl:text-[14px] lg:text-[8px] text-center w-[100%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineGray3001_2"
                >
                  终止任务
                </Button>
              </Column>
            </List>
            <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[13%]">
              <Button
                className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                shape="RoundedBorder4"
                size="md"
                variant="FillBlueA400"
              >
                按钮
              </Button>
              <Button
                className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                shape="RoundedBorder4"
                size="md"
                variant="FillBlueA200"
              >
                按钮
              </Button>
              <Button
                className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                shape="RoundedBorder4"
                size="md"
                variant="FillBlue800"
              >
                按钮
              </Button>
              <Button
                className="font-normal lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                shape="RoundedBorder4"
                size="md"
                variant="OutlineGray3001_2"
              >
                按钮
              </Button>
            </Column>
            <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[12%]">
              <Column className="items-center justify-start mt-[2px] w-[100%]">
                <Text className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-blue_A400 underline w-[auto]">
                  文字链接
                </Text>
              </Column>
              <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Text className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-blue_A200 underline w-[auto]">
                  文字链接
                </Text>
              </Column>
              <Column className="items-center justify-start mb-[3px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Text className="font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-blue_800 underline w-[auto]">
                  文字链接
                </Text>
              </Column>
            </Column>
          </Row>
          <Column className="justify-start xl:mt-[106px] 2xl:mt-[119px] 3xl:mt-[143px] lg:mt-[85px] w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              单/复选
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
          <Row className="items-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[38%]">
            <List
              className="border border-deep_purple_A200 border-solid gap-[0] min-h-[auto] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[59%]"
              orientation="vertical"
            >
              <Column className="bg-white_A700 border border-gray_300 border-solid justify-start mr-[2px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] p-[1px] rounded-radius4 w-[99%]">
                <Row className="items-center w-[96%]">
                  <Column className="bg-gray_54 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[16%]">
                    <div className="bg-white_A700 border border-bluegray_100 border-solid lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius2 arrowleft5"></div>
                  </Column>
                  <Column className="xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] w-[80%]">
                    <Text className="columnfivehundredsixty" variant="body9">
                      <span className="text-bluegray_500 font-pingfangsc lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                        测试场景{" "}
                      </span>
                      <span className="text-bluegray_500 font-alibabapuhuiti1 lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                        05
                      </span>
                    </Text>
                    <Text className="TwoThousandEighty" variant="body8">
                      交通事故处理交通事故处理交通事故处理交通
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 border border-blue_A200 border-solid justify-start mr-[2px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] p-[1px] rounded-radius4 w-[99%]">
                <Row className="items-center w-[96%]">
                  <Column className="bg-blue_100 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] w-[16%]">
                    <div className="bg-white_A700 border border-blue_A400 border-solid lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] rounded-radius2 arrowleft5"></div>
                  </Column>
                  <Column className="xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] w-[80%]">
                    <Text className="columnfivehundredsixty" variant="body9">
                      <span className="text-bluegray_500 font-pingfangsc lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                        测试场景{" "}
                      </span>
                      <span className="text-bluegray_500 font-alibabapuhuiti1 lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                        05
                      </span>
                    </Text>
                    <Text className="TwoThousandEighty" variant="body8">
                      交通事故处理交通事故处理交通事故处理交通
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 border border-blue_A400 border-solid justify-start mr-[2px] lg:my-[5px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] p-[1px] rounded-radius4 w-[99%]">
                <Row className="items-center w-[96%]">
                  <Column className="bg-blue_100 items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-bl-[3px] rounded-br-[0] rounded-tl-[3px] rounded-tr-[0] w-[16%]">
                    <Button
                      className="flex items-center justify-center lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] arrowleft5"
                      shape="icbRoundedBorder3"
                      size="smIcn"
                      variant="icbFillBlueA400"
                    >
                      <Img
                        src="images/img_checkmark_4.svg"
                        className="flex items-center justify-center"
                        alt="checkmark"
                      />
                    </Button>
                  </Column>
                  <Column className="xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] w-[80%]">
                    <Text className="columnfivehundredsixty" variant="body9">
                      <span className="text-bluegray_500 font-pingfangsc lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                        测试场景{" "}
                      </span>
                      <span className="text-bluegray_500 font-alibabapuhuiti1 lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[10px]">
                        05
                      </span>
                    </Text>
                    <Text className="TwoThousandEighty" variant="body8">
                      交通事故处理交通事故处理交通事故处理交通
                    </Text>
                  </Column>
                </Row>
              </Column>
            </List>
            <Column className="border border-deep_purple_A200 border-solid items-center justify-start 3xl:ml-[119px] lg:ml-[70px] xl:ml-[88px] 2xl:ml-[99px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[8%]">
              <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft5"></div>
              <div className="bg-white_A700 border border-blue_A400 border-solid lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] rounded-radius2 arrowleft5"></div>
              <Button
                className="flex items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] arrowleft5"
                shape="icbRoundedBorder3"
                size="smIcn"
                variant="icbFillBlueA400"
              >
                <Img
                  src="images/img_checkmark_4.svg"
                  className="flex items-center justify-center"
                  alt="checkmark One"
                />
              </Button>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] px-[4px] rounded-radius2 arrowleft5">
                <div className="bg-blue_A400 lg:h-[5px] 2xl:h-[6px] xl:h-[6px] 3xl:h-[8px] lg:w-[4px] 2xl:w-[5px] xl:w-[5px] 3xl:w-[7px]"></div>
              </Column>
              <div className="bg-gray_101 border border-bluegray_100 border-solid lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] rounded-radius2 arrowleft5"></div>
              <Button
                className="flex items-center justify-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] arrowleft5"
                shape="icbRoundedBorder3"
                size="smIcn"
                variant="icbOutlineBluegray100"
              >
                <Img
                  src="images/img_checkmark_5.svg"
                  className="flex items-center justify-center"
                  alt="checkmark Two"
                />
              </Button>
            </Column>
            <Column className="border border-deep_purple_A200 border-solid items-center justify-end lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] xl:p-[10px] 2xl:p-[11px] 3xl:p-[14px] lg:p-[8px] rounded-radius5 w-[8%]">
              <div className="bg-white_A700 border border-bluegray_100 border-solid mt-[4px] rounded-radius50 arrowleft5"></div>
              <div className="bg-white_A700 border border-blue_A400 border-solid lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] rounded-radius50 arrowleft5"></div>
              <Column className="bg-white_A700 border border-blue_A400 border-solid items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] px-[4px] rounded-radius50 arrowleft5">
                <div className="bg-blue_A400 lg:h-[5px] 2xl:h-[6px] xl:h-[6px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] 2xl:w-[5px] xl:w-[5px] 3xl:w-[7px]"></div>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page16;
