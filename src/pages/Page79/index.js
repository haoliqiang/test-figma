import React from "react";

import { Column, Stack, Img, Text, Row, Line, Button } from "components";
import Header1 from "components/Header/Header1";

const Page79 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[45px] xl:pb-[56px] 2xl:pb-[64px] 3xl:pb-[76px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
            <Stack className="bottom-[0] test_20220825">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_55.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Img
                  src="images/img_20220825_54.png"
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
              <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[11%]">
                <Text className="FiveHundredFiftyTwo" variant="body9">
                  任务
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
          <Column className="justify-start lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
            <Stack className="lg:h-[100px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] w-[100%]">
              <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[17%]">
                  <Text className="OneThousandSixtySeven" variant="body8">
                    任务提交时间：
                  </Text>
                  <Text className="test_202208292002" variant="body8">
                    2022-08-29 20:04:29
                  </Text>
                </Row>
                <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[24%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="test_151223" variant="body8">
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      前方还有{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      3{" "}
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      个任务，预计还需等待{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      8{" "}
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      分钟
                    </span>
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[4px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
              </Column>
              <Column className="absolute border border-solid border-teal_A100 items-center justify-start lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius8 w-[100%]">
                <Column className="justify-start lg:my-[4px] xl:my-[6px] 2xl:my-[7px] 3xl:my-[8px] w-[100%]">
                  <Stack className="lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] xl:mr-[1051px] 2xl:mr-[1182px] 3xl:mr-[1419px] lg:mr-[840px] w-[11%]">
                    <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[97%]">
                      <Img
                        src="images/img_arrowdown.svg"
                        className="close5"
                        alt="arrowdown Two"
                      />
                      <Text className="rowplay1" variant="body4">
                        任务排队中
                      </Text>
                    </Row>
                    <div className="absolute bg-white_A700 lg:h-[18px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] inset-y-[0] left-[3%] my-[auto] rounded-radius125 w-[16%]"></div>
                    <Img
                      src="images/img_clock_32X32.svg"
                      className="absolute lg:h-[23px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] left-[0] lg:w-[22px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                      alt="clock"
                    />
                  </Stack>
                  <Button
                    className="font-normal xl:ml-[1099px] 2xl:ml-[1236px] 3xl:ml-[1484px] lg:ml-[878px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[7%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillBlueA400"
                  >
                    取消任务
                  </Button>
                </Column>
              </Column>
            </Stack>
            <Row className="items-start lg:mt-[48px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[93%]">
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
            <Row className="items-center xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[61%]">
              <Row className="bg-gray_54 items-start justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[58%]">
                <Column className="justify-start ml-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[18%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    测试过程预览
                  </Text>
                  <div className="bg-gray_401 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                </Column>
                <Column
                  className="bg-cover bg-repeat items-center justify-start mr-[4px] lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius4 w-[66%]"
                  style={{ backgroundImage: "url('images/img_group535.png')" }}
                >
                  <Button
                    className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center rounded-radius50 lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                    size="lgIcn"
                    variant="icbOutlineWhiteA700e51_2"
                  >
                    <Img
                      src="images/img_play_44X44.svg"
                      className="flex items-center justify-center"
                      alt="play"
                    />
                  </Button>
                </Column>
              </Row>
              <Row className="bg-gray_54 items-start justify-between lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[37%]">
                <Column className="justify-start ml-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[30%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    测试报告预览
                  </Text>
                  <div className="bg-gray_401 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                </Column>
                <Img
                  src="images/img_rectangle349.png"
                  className="Rectangle3491"
                  alt="Rectangle349"
                />
              </Row>
            </Row>
            <Line className="bg-gray_201 h-[1px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[100%]" />
            <Text className="columntwothousandthreehundredsix" variant="body4">
              测试科目
            </Text>
            <Stack className="bg-white_A700 lg:h-[171px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] lg:ml-[403px] xl:ml-[505px] 2xl:ml-[568px] 3xl:ml-[681px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:w-[170px] xl:w-[213px] 2xl:w-[240px] 3xl:w-[288px]">
              <Stack className="bottom-[0] Group431">
                <Stack className="Group431">
                  <Img
                    src="images/img_group431_8.svg"
                    className="Group431"
                    alt="Group431"
                  />
                  <Img
                    src="images/img_ellipse94.png"
                    className="absolute bottom-[23%] lg:h-[36px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] left-[13%] w-[49%]"
                    alt="EllipseNinetyFour"
                  />
                </Stack>
                <Img
                  src="images/img_group442_91X68.png"
                  className="absolute 3xl:h-[110px] lg:h-[65px] xl:h-[81px] 2xl:h-[92px] inset-x-[0] mx-[auto] top-[15%] w-[28%]"
                  alt="Group442"
                />
              </Stack>
              <Column className="absolute bottom-[8%] justify-start right-[13%] w-[70%]">
                <Img
                  src="images/img_group470_2.png"
                  className="lg:h-[30px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] w-[26%]"
                  alt="Group470"
                />
                <Text className="columngroup470" variant="body8">
                  任务尚未开始，请耐心等待
                </Text>
              </Column>
            </Stack>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page79;
