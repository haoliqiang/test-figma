import React from "react";

import {
  Column,
  Stack,
  Img,
  Text,
  Row,
  Line,
  List,
  Button,
  Input,
} from "components";
import Header1 from "components/Header/Header1";
import Footer1 from "components/Footer/Footer1";

const Page42 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] 3xl:pb-[117px] lg:pb-[69px] xl:pb-[87px] 2xl:pb-[98px] w-[100%]">
        <Column className="justify-start w-[100%]">
          <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
            <Stack className="bottom-[0] test_20220825">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_29.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Img
                  src="images/img_20220825_29.png"
                  className="test_20220825"
                  alt="20220825"
                />
              </Stack>
              <Column className="absolute bg-gradient1  justify-end left-[0] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[65%]">
                <Text
                  className="columnonethousandfiftyseven"
                  as="h6"
                  variant="h6"
                >
                  中华人民共和国道路交通安全法
                </Text>
              </Column>
            </Stack>
            <Column className="absolute justify-end lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] top-[29%] w-[100%]">
              <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[14%]">
                <Text className="FiveHundredFiftyTwo" variant="body9">
                  可信赖评估
                </Text>
                <Img
                  src="images/img_checkmark_3.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text className="SevenHundredSeventyNine" variant="body9">
                  自动驾驶合规性评估
                </Text>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
            </Column>
            <Header1 className="absolute top-[0] w-[100%]" />
          </Stack>
          <Stack className="3xl:h-[116px] lg:h-[69px] xl:h-[86px] 2xl:h-[97px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:px-[19px] xl:px-[24px] 2xl:px-[28px] 3xl:px-[33px] w-[100%]">
            <Line className="absolute bg-gray_201 bottom-[0] h-[1px] inset-x-[0] mx-[auto] rounded-radius05 w-[96%]" />
            <Row className="absolute items-start justify-center left-[11%] top-[0] w-[10%]">
              <Text className="TwoThousandFourHundredFourteen" variant="body3">
                测试记录
              </Text>
              <Text className="Frame1982" variant="body8">
                99+
              </Text>
            </Row>
            <Column className="absolute bottom-[0] items-center justify-start left-[0] w-[7%]">
              <Text
                className="font-semibold text-blue_A400 w-[auto]"
                variant="body3"
              >
                评估概览
              </Text>
              <Line className="bg-blue_A400 h-[3px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[100%]" />
            </Column>
          </Stack>
          <Row className="items-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[89%]">
            <Text
              className="font-semibold text-bluegray_800 w-[auto]"
              variant="body4"
            >
              测试描述
            </Text>
            <Text className="description2" variant="body8">
              按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。
            </Text>
          </Row>
          <Footer1 className="lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[58%]" />
          <Line className="bg-gray_201 h-[1px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[96%]" />
          <Row className="items-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[89%]">
            <Text
              className="rowonethousandtwohundredseventyfive"
              variant="body4"
            >
              测试科目
            </Text>
            <List
              className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-3 min-h-[auto] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[90%]"
              orientation="horizontal"
            >
              <Column className="listcheckmark_one">
                <Row className="items-center w-[96%]">
                  <Column className="bg-blue_100 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[3px] rounded-br-[0] rounded-tl-[3px] rounded-tr-[0] w-[16%]">
                    <Button
                      className="flex items-center justify-center 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] arrowleft"
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
                  </Column>
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[80%]">
                    <Text className="columnfivehundredsixty" variant="body9">
                      <span className="text-bluegray_500 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                        测试场景{" "}
                      </span>
                      <span className="text-bluegray_500 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                        05
                      </span>
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredSixty"
                      variant="body8"
                    >
                      交通事故处理交通事故处理交通事故处理交通
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid justify-start p-[1px] rounded-radius4 w-[100%]">
                <Row className="items-center w-[96%]">
                  <Column className="bg-gray_54 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[16%]">
                    <div className="bg-white_A700 border border-bluegray_100 border-solid 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] rounded-radius2 arrowleft"></div>
                  </Column>
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[80%]">
                    <Text className="columnfivehundredsixty" variant="body9">
                      <span className="text-bluegray_500 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                        测试场景{" "}
                      </span>
                      <span className="text-bluegray_500 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                        05
                      </span>
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredSixty"
                      variant="body8"
                    >
                      交通事故处理交通事故处理交通事故处理交通
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 border border-gray_300 border-solid justify-start p-[1px] rounded-radius4 w-[100%]">
                <Row className="items-center w-[96%]">
                  <Column className="bg-gray_54 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[16%]">
                    <div className="bg-white_A700 border border-bluegray_100 border-solid 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] rounded-radius2 arrowleft"></div>
                  </Column>
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[80%]">
                    <Text className="columnfivehundredsixty" variant="body9">
                      <span className="text-bluegray_500 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                        测试场景{" "}
                      </span>
                      <span className="text-bluegray_500 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                        05
                      </span>
                    </Text>
                    <Text
                      className="ThreeThousandTwoHundredSixty"
                      variant="body8"
                    >
                      交通事故处理交通事故处理交通事故处理交通
                    </Text>
                  </Column>
                </Row>
              </Column>
            </List>
          </Row>
          <Row className="items-center lg:ml-[113px] xl:ml-[142px] 2xl:ml-[160px] 3xl:ml-[192px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[19%]">
            <Button
              className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[35%]"
              shape="RoundedBorder4"
              size="lg"
              variant="FillBlueA400"
            >
              开始评估
            </Button>
            <Row className="items-start justify-between lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[54%]">
              <Text
                className="OneThousandTwoHundredSeventySeven"
                variant="body9"
              >
                上次测试时长：
              </Text>
              <Text
                className="OneThousandTwoHundredSeventyEight"
                variant="body8"
              >
                <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  25
                </span>
                <span className="text-bluegray_800 font-pingfangsc lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  分
                </span>
                <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  12
                </span>
                <span className="text-bluegray_800 font-pingfangsc lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  秒
                </span>
              </Text>
            </Row>
          </Row>
          <Input
            className="placeholder:text-bluegray_800 zipcode"
            wrapClassName="2xl:ml-[160px] 2xl:mt-[24px] 3xl:ml-[192px] 3xl:mt-[28px] flex lg:ml-[113px] lg:mt-[17px] w-[80%] xl:ml-[142px] xl:mt-[21px]"
            name="Alert"
            placeholder="任务已添加至任务列表"
            prefix={
              <Img
                src="images/img_checkmark_1.svg"
                className="ml-[2px] lg:w-[11px] lg:h-[12px] lg:mr-[5px] xl:w-[14px] xl:h-[15px] xl:mr-[7px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[8px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[9px] my-[auto]"
                alt="checkmark"
              />
            }
            shape="RoundedBorder4"
            size="xl"
            variant="OutlineGreenA101"
          ></Input>
        </Column>
      </Column>
    </>
  );
};

export default Page42;
