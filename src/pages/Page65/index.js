import React from "react";

import { Column, Stack, Img, Text, Row, Line, Button } from "components";
import Header1 from "components/Header/Header1";
import Footer1 from "components/Footer/Footer1";
import Footer3 from "components/Footer/Footer3";
import Footer4 from "components/Footer/Footer4";

const Page65 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] 3xl:pb-[114px] lg:pb-[67px] xl:pb-[84px] 2xl:pb-[95px] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
            <Stack className="bottom-[0] test_20220825">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_51.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Img
                  src="images/img_20220825_50.png"
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
                  道路左转
                </Text>
              </Column>
            </Stack>
            <Header1 className="absolute top-[0] w-[100%]" />
            <Column className="absolute justify-end lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] top-[29%] w-[100%]">
              <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[7%]">
                <Text className="FiveHundredFiftyTwo" variant="body9">
                  任务
                </Text>
                <Img
                  src="images/img_checkmark_3.svg"
                  className="checkmark"
                  alt="checkmark"
                />
                <Text className="SevenHundredSeventyNine" variant="body9">
                  道路左转
                </Text>
              </Row>
              <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
            </Column>
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
                <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[14%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="test_151223" variant="body8">
                    <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      1/5
                    </span>
                    <span className="text-bluegray_800 font-pingfangsc lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      ，已执行{" "}
                    </span>
                    <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                      12:23
                    </span>
                  </Text>
                </Row>
                <div
                  className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] overflow-hidden relative w-[100%]"
                  name="Group322"
                >
                  <div className="w-full h-full absolute bg-undefined"></div>
                  <div
                    className="h-full absolute"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </Column>
              <Column className="absolute border border-pink_100 border-solid items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Column className="justify-start mb-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-center xl:mr-[1051px] 2xl:mr-[1182px] 3xl:mr-[1419px] lg:mr-[840px] w-[11%]">
                    <Img
                      src="images/img_save.svg"
                      className="close5"
                      alt="save"
                    />
                    <Text className="rowplay1" variant="body4">
                      任务已终止
                    </Text>
                  </Row>
                  <Button
                    className="font-normal xl:ml-[1095px] 2xl:ml-[1232px] 3xl:ml-[1479px] lg:ml-[876px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[7%]"
                    shape="RoundedBorder4"
                    size="lg"
                    variant="FillBlueA400"
                  >
                    再次运行
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
            <Footer1 className="xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[61%]" />
            <Line className="bg-gray_201 h-[1px] lg:mt-[45px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] rounded-radius05 w-[100%]" />
            <Row className="items-center justify-between lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[98%]">
              <Row className="items-center justify-between w-[92%]">
                <Row className="items-start w-[91%]">
                  <Text className="rowonethousandseventythree" variant="body4">
                    测试科目
                  </Text>
                  <Stack className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[9%]">
                    <Text className="language3" variant="body9">
                      执行了 次测试
                    </Text>
                    <Text className="Twelve1" variant="body7">
                      12
                    </Text>
                  </Stack>
                  <Row className="items-start justify-between 3xl:ml-[1044px] lg:ml-[618px] xl:ml-[773px] 2xl:ml-[870px] pt-[2px] w-[5%]">
                    <Line className="bg-red_600 lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] mt-[1px] rounded-radius1 w-[2px]" />
                    <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                      <Row className="absolute items-end justify-between left-[0] top-[0] w-[73%]">
                        <Text className="Six24" variant="body3">
                          6
                        </Text>
                        <Text
                          className="OneThousandSeventyFour"
                          variant="body9"
                        >
                          次
                        </Text>
                      </Row>
                      <Row className="absolute bottom-[0] items-start justify-evenly w-[100%]">
                        <Text
                          className="columnapollovfiftyfive"
                          variant="body9"
                        >
                          压线
                        </Text>
                        <Img
                          src="images/img_eye_16X16.svg"
                          className="eye2"
                          alt="eye"
                        />
                      </Row>
                    </Stack>
                  </Row>
                </Row>
                <Row className="items-start justify-between pt-[2px] w-[5%]">
                  <Line className="bg-red_600 lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] mt-[1px] rounded-radius1 w-[2px]" />
                  <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                    <Row className="absolute items-end justify-between left-[0] top-[0] w-[73%]">
                      <Text className="Six24" variant="body3">
                        6
                      </Text>
                      <Text className="OneThousandSeventyFour" variant="body9">
                        次
                      </Text>
                    </Row>
                    <Row className="absolute bottom-[0] items-start justify-evenly w-[100%]">
                      <Text className="columnapollovfiftyfive" variant="body9">
                        撞车
                      </Text>
                      <Img
                        src="images/img_eye_16X16.svg"
                        className="eye2"
                        alt="eye One"
                      />
                    </Row>
                  </Stack>
                </Row>
              </Row>
              <Row className="items-start justify-between pt-[2px] w-[4%]">
                <Line className="bg-red_600 lg:h-[27px] xl:h-[33px] 2xl:h-[38px] 3xl:h-[45px] mt-[1px] rounded-radius1 w-[2px]" />
                <Stack className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]">
                  <Row className="absolute items-end justify-between left-[0] top-[0] w-[73%]">
                    <Text className="Six24" variant="body3">
                      6
                    </Text>
                    <Text className="OneThousandSeventyFour" variant="body9">
                      次
                    </Text>
                  </Row>
                  <Row className="absolute bottom-[0] items-start justify-evenly w-[100%]">
                    <Text className="columnapollovfiftyfive" variant="body9">
                      逆行
                    </Text>
                    <Img
                      src="images/img_eye_16X16.svg"
                      className="eye2"
                      alt="eye Two"
                    />
                  </Row>
                </Stack>
              </Row>
            </Row>
            <Footer3 className="bg-white_A700 lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]" />
            <Footer4 className="w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page65;
