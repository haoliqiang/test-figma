import React from "react";

import { Column, Row, Stack, Img, Text, Line, Button } from "components";
import Header3 from "components/Header/Header3";

const Page2 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-end mx-[auto] w-[100%]">
        <div className="overflow-x-auto w-[100%]">
          <Row className="items-start justify-end overflow-auto w-[100%]">
            <Column className="items-center justify-start w-[100%]">
              <Header3 className="w-[100%]" />
              <Column className="justify-start w-[100%]">
                <Stack className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] w-[100%]">
                  <Stack className="test_20220825">
                    <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                      <Img
                        src="images/img_image1_5.png"
                        className="imageOne"
                        alt="imageOne"
                      />
                      <Img
                        src="images/img_20220825_5.png"
                        className="test_20220825"
                        alt="20220825"
                      />
                    </Stack>
                    <Column className="absolute bg-gradient1  justify-end left-[0] lg:p-[19px] xl:p-[24px] 2xl:p-[27px] 3xl:p-[32px] w-[65%]">
                      <Text
                        className="columnfivehundredfiftyone"
                        as="h6"
                        variant="h6"
                      >
                        中华人民共和国道路交通安全法
                      </Text>
                    </Column>
                  </Stack>
                  <Column className="absolute bg-bluegray_50_75 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] top-[1%] w-[100%]">
                    <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] w-[11%]">
                      <Row className="items-start justify-evenly w-[100%]">
                        <Text className="FiveHundredFiftyTwo" variant="body9">
                          任务
                        </Text>
                        <Img
                          src="images/img_checkmark.svg"
                          className="checkmark2"
                          alt="checkmark"
                        />
                        <Text className="FiveHundredFiftyThree" variant="body9">
                          自动驾驶合规性评估
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
                <Stack className="lg:h-[100px] xl:h-[125px] 2xl:h-[141px] 3xl:h-[169px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[96%]">
                  <Column className="absolute bottom-[1%] inset-x-[0] justify-start w-[100%]">
                    <Row className="items-center justify-end ml-[auto] w-[18%]">
                      <Text className="FiveHundredFiftyFour" variant="body8">
                        任务提交时间：
                      </Text>
                      <Text className="test_202208292001" variant="body8">
                        2022-08-29 20:04:29
                      </Text>
                    </Row>
                    <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[23%]">
                      <Text className="columnfivehundredsixty" variant="body8">
                        任务进度：
                      </Text>
                      <Text className="test_202208292001" variant="body8">
                        前方还有3个任务，预计还需等待8分钟
                      </Text>
                    </Row>
                    <Line className="bg-gray_201 h-[4px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[100%]" />
                  </Column>
                  <Row className="absolute border border-cyan_A100 border-solid items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                    <Row className="items-start mb-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                      <Img
                        src="images/img_arrowdown.svg"
                        className="close5"
                        alt="arrowdown One"
                      />
                      <Text className="rowclose1" variant="body4">
                        任务排队中
                      </Text>
                      <Button
                        className="font-normal 2xl:ml-[1066px] 3xl:ml-[1279px] lg:ml-[758px] xl:ml-[948px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[9%]"
                        shape="RoundedBorder4"
                        size="lg"
                        variant="FillBlueA400"
                      >
                        取消任务
                      </Button>
                    </Row>
                  </Row>
                </Stack>
                <Row className="items-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[13%]">
                  <Text
                    className="font-semibold text-bluegray_800 w-[auto]"
                    variant="body4"
                  >
                    测试描述
                  </Text>
                  <Text className="Group3551" variant="body9">
                    Apollo-V5.5
                  </Text>
                </Row>
                <Text
                  className="xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] column202208252"
                  variant="body8"
                >
                  按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。
                </Text>
                <Row className="items-center xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[58%]">
                  <Column className="bg-gray_54 items-center lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[58%]">
                    <Row className="items-start justify-between w-[98%]">
                      <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[19%]">
                        <Text
                          className="columnfivehundredsixty"
                          variant="body8"
                        >
                          测试过程预览
                        </Text>
                        <div className="bg-gray_500 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] ml-[1px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
                      </Column>
                      <Column
                        className="bg-cover bg-repeat items-center justify-start lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius4 w-[67%]"
                        style={{
                          backgroundImage: "url('images/img_group535.png')",
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
                            alt="play"
                          />
                        </Button>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-gray_54 items-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[37%]">
                    <Row className="items-start justify-between mt-[1px] w-[97%]">
                      <Column className="justify-start xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[31%]">
                        <Text
                          className="columnfivehundredsixty"
                          variant="body8"
                        >
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
                <Text
                  className="font-semibold lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] text-bluegray_800 w-[auto]"
                  variant="body4"
                >
                  测试结果
                </Text>
                <Column
                  className="bg-cover bg-repeat lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] items-center justify-end lg:ml-[440px] xl:ml-[551px] 2xl:ml-[620px] 3xl:ml-[744px] 2xl:mt-[105px] 3xl:mt-[126px] lg:mt-[74px] xl:mt-[93px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] lg:w-[142px] xl:w-[177px] 2xl:w-[200px] 3xl:w-[240px]"
                  style={{ backgroundImage: "url('images/img_group395.svg')" }}
                >
                  <Text
                    className="columnsevenhundredninetynine"
                    variant="body8"
                  >
                    尚未开始任务，请耐心等待
                  </Text>
                </Column>
                <Img
                  src="images/img_126deg.svg"
                  className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[265px] xl:ml-[331px] 2xl:ml-[373px] 3xl:ml-[447px] lg:mt-[3867px] xl:mt-[4837px] 2xl:mt-[5441px] 3xl:mt-[6529px] w-[4px]"
                  alt="126deg"
                />
                <Img
                  src="images/img_126deg.svg"
                  className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:ml-[275px] xl:ml-[345px] 2xl:ml-[388px] 3xl:ml-[465px] lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[4px]"
                  alt="126deg One"
                />
                <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:ml-[275px] xl:ml-[344px] 2xl:ml-[387px] 3xl:ml-[464px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] rotate-[126deg] rounded-radius50 shadow-bs3 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
                <Img
                  src="images/img_144deg.svg"
                  className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] 2xl:ml-[1081px] 3xl:ml-[1297px] lg:ml-[768px] xl:ml-[961px] lg:mt-[121px] xl:mt-[152px] 2xl:mt-[171px] 3xl:mt-[205px] w-[3px]"
                  alt="144deg"
                />
                <Img
                  src="images/img_144deg.svg"
                  className="lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] 2xl:ml-[1104px] 3xl:ml-[1325px] lg:ml-[785px] xl:ml-[982px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[3px]"
                  alt="144deg One"
                />
                <div className="bg-white_A700 xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] 2xl:ml-[1104px] 3xl:ml-[1325px] lg:ml-[785px] xl:ml-[982px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[88px] rotate-[144deg] rounded-radius50 shadow-bs3 xl:w-[1px] lg:w-[1px] 3xl:w-[2px] 2xl:w-[2px]"></div>
              </Column>
            </Column>
            <Img
              src="images/img_288deg.png"
              className="xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:ml-[1607px] xl:ml-[2010px] 2xl:ml-[2261px] 3xl:ml-[2713px] lg:mt-[2160px] xl:mt-[2702px] 2xl:mt-[3040px] 3xl:mt-[3647px] w-[5px]"
              alt="288deg"
            />
            <Img
              src="images/img_288deg.png"
              className="xl:h-[2px] lg:h-[2px] 3xl:h-[3px] 2xl:h-[3px] lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:mt-[2156px] xl:mt-[2698px] 2xl:mt-[3035px] 3xl:mt-[3641px] w-[5px]"
              alt="288deg One"
            />
            <Img
              src="images/img_270deg.png"
              className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[245px] xl:ml-[306px] 2xl:ml-[345px] 3xl:ml-[414px] lg:mt-[2643px] xl:mt-[3306px] 2xl:mt-[3719px] 3xl:mt-[4462px] rotate-[90deg] w-[5px]"
              alt="270deg"
            />
            <Img
              src="images/img_270deg_1X5.png"
              className="xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:ml-[23px] xl:ml-[29px] 2xl:ml-[33px] 3xl:ml-[39px] lg:mt-[2643px] xl:mt-[3306px] 2xl:mt-[3719px] 3xl:mt-[4462px] rotate-[90deg] w-[5px]"
              alt="270deg One"
            />
          </Row>
        </div>
      </Column>
    </>
  );
};

export default Page2;
