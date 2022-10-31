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
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const Page12 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] xl:pb-[115px] 2xl:pb-[130px] 3xl:pb-[156px] lg:pb-[92px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
            <Stack className="bottom-[0] test_20220825">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_19.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Img
                  src="images/img_20220825_19.png"
                  className="test_20220825"
                  alt="20220825"
                />
              </Stack>
              <Column className="absolute bg-gradient1  justify-end left-[0] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[65%]">
                <Text
                  className="columnonethousandtwohundredsixty"
                  as="h6"
                  variant="h6"
                >
                  中华人民共和国道路交通安全法
                </Text>
              </Column>
            </Stack>
            <Column className="absolute bg-bluegray_50_75 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] top-[29%] w-[100%]">
              <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] w-[14%]">
                <Row className="items-start justify-evenly w-[100%]">
                  <Text className="OneHundredFiftyThree" variant="body9">
                    可信懒评估
                  </Text>
                  <Img
                    src="images/img_checkmark.svg"
                    className="checkmark2"
                    alt="checkmark"
                  />
                  <Text className="TwoHundredEightyFour" variant="body9">
                    自动驾驶合规性评估
                  </Text>
                </Row>
              </Column>
            </Column>
            <Header className="absolute top-[0] w-[100%]" />
          </Stack>
          <Column className="justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[96%]">
            <Column className="items-center justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-start w-[22%]">
                  <Text
                    className="font-semibold lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-blue_A400 w-[auto]"
                    variant="body3"
                  >
                    评估概览
                  </Text>
                  <Text
                    className="mb-[1px] lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowtwohundredninetyfour"
                    variant="body3"
                  >
                    测试记录
                  </Text>
                  <Text className="Group1327" variant="body8">
                    99+
                  </Text>
                </Row>
                <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Line className="absolute bg-gray_202 bottom-[0] h-[1px] rounded-radius05 w-[100%]" />
                  <Line className="absolute bg-blue_A400 h-[3px] left-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[7%]" />
                </Stack>
              </Column>
            </Column>
            <Row className="items-start lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[15%]">
              <Text
                className="font-semibold text-bluegray_800 w-[auto]"
                variant="body4"
              >
                测试描述
              </Text>
              <Text
                className="bg-gray_53 font-normal lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] mt-[1px] not-italic pb-[2px] lg:pt-[3px] xl:pt-[4px] 2xl:pt-[5px] 3xl:pt-[6px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] rounded-radius4 text-bluegray_500 w-[84px]"
                variant="body9"
              >
                Apollo-V5.5
              </Text>
            </Row>
            <Text
              className="font-normal lg:leading-[18px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] not-italic text-bluegray_800 w-[84%]"
              variant="body8"
            >
              按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。
            </Text>
            <Footer className="xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[61%]" />
            <Line className="bg-gray_202 h-[1px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[100%]" />
            <Row className="items-start lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[93%]">
              <Text
                className="rowonethousandtwohundredseventyfive"
                variant="body4"
              >
                测试科目
              </Text>
              <Column className="bg-white_A700 border border-blue_A400 border-solid justify-start lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] p-[1px] rounded-radius4 w-[29%]">
                <Row className="items-center w-[96%]">
                  <Column className="bg-blue_100 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-bl-[3px] rounded-br-[0] rounded-tl-[3px] rounded-tr-[0] w-[16%]">
                    <Stack className="bg-blue_A400 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] rounded-radius2 arrowleft">
                      <Img
                        src="images/img_checkmark_2.svg"
                        className="checkmark_One"
                        alt="checkmark One"
                      />
                    </Stack>
                  </Column>
                  <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[80%]">
                    <Text className="OneHundredThirtyFive" variant="body9">
                      测试场景5
                    </Text>
                    <Text
                      className="OneThousandTwoHundredSeventySix"
                      variant="body8"
                    >
                      交通事故处理交通事故处理交通事故处理交通
                    </Text>
                  </Column>
                </Row>
              </Column>
              <List
                className="lg:gap-[14px] xl:gap-[17px] 2xl:gap-[20px] 3xl:gap-[24px] grid grid-cols-2 min-h-[auto] lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[59%]"
                orientation="horizontal"
              >
                <Column className="listrectangle328">
                  <Row className="items-center w-[96%]">
                    <Column className="bg-gray_53 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[16%]">
                      <div className="bg-white_A700 border border-gray_304 border-solid 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] rounded-radius2 arrowleft"></div>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[80%]">
                      <Text className="columnfivehundredsixty" variant="body9">
                        测试场景5
                      </Text>
                      <Text
                        className="OneThousandTwoHundredSeventySix"
                        variant="body8"
                      >
                        交通事故处理交通事故处理交通事故处理交通
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="listrectangle328">
                  <Row className="items-center w-[96%]">
                    <Column className="bg-gray_53 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[16%]">
                      <div className="bg-white_A700 border border-gray_304 border-solid 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] rounded-radius2 arrowleft"></div>
                    </Column>
                    <Column className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[80%]">
                      <Text className="columnfivehundredsixty" variant="body9">
                        测试场景5
                      </Text>
                      <Text
                        className="OneThousandTwoHundredSeventySix"
                        variant="body8"
                      >
                        交通事故处理交通事故处理交通事故处理交通
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </List>
            </Row>
            <Row className="items-center xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] w-[17%]">
              <Button
                className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[41%]"
                shape="RoundedBorder4"
                size="lg"
                variant="FillBlueA400"
              >
                开始评估
              </Button>
              <Row className="items-start justify-between lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] w-[45%]">
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
                  --
                </Text>
              </Row>
            </Row>
            <Input
              className="placeholder:text-bluegray_800 zipcode"
              wrapClassName="2xl:ml-[128px] 2xl:mt-[24px] 3xl:ml-[153px] 3xl:mt-[28px] flex lg:ml-[91px] lg:mt-[17px] w-[84%] xl:ml-[113px] xl:mt-[21px]"
              name="Group852"
              placeholder="任务已添加至任务列表"
              prefix={
                <Img
                  src="images/img_checkmark_1.svg"
                  className="ml-[2px] lg:w-[9px] lg:h-[10px] lg:mr-[5px] xl:w-[12px] xl:h-[13px] xl:mr-[7px] 2xl:w-[14px] 2xl:h-[15px] 2xl:mr-[8px] 3xl:w-[16px] 3xl:h-[17px] 3xl:mr-[9px] my-[auto]"
                  alt="checkmark"
                />
              }
              shape="RoundedBorder4"
              size="xl"
              variant="OutlineLightgreen300"
            ></Input>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page12;
