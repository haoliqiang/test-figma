import React from "react";

import { Column, Stack, Img, Text, Row, Line, Button } from "components";
import Header1 from "components/Header/Header1";

const Page57 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-end mx-[auto] w-[100%]">
        <Stack className="3xl:h-[1081px] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] w-[100%]">
          <Column className="absolute bottom-[4%] items-center justify-start top-[7%] w-[100%]">
            <Stack className="lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] w-[100%]">
              <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
                <Img
                  src="images/img_image1_43.png"
                  className="imageOne"
                  alt="imageOne"
                />
                <Column
                  className="absolute bg-cover bg-repeat justify-start lg:px-[42px] xl:px-[53px] 2xl:px-[60px] 3xl:px-[72px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group1043.png')" }}
                >
                  <Column className="bg-gradient1  items-center justify-end lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[83%]">
                    <Text
                      className="lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      中华人民共和国道路交通安全法
                    </Text>
                  </Column>
                </Column>
              </Stack>
              <Column className="absolute justify-end lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] lg:px-[18px] xl:px-[23px] 2xl:px-[26px] 3xl:px-[31px] top-[1%] w-[100%]">
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
            </Stack>
            <Column className="items-center justify-start lg:mt-[176px] xl:mt-[220px] 2xl:mt-[248px] 3xl:mt-[297px] w-[96%]">
              <Text
                className="font-semibold text-bluegray_800 w-[auto]"
                variant="body4"
              >
                测试描述
              </Text>
              <Line className="bg-gray_201 h-[1px] lg:mt-[265px] xl:mt-[331px] 2xl:mt-[373px] 3xl:mt-[447px] rounded-radius05 w-[100%]" />
            </Column>
          </Column>
          <Column className="absolute bottom-[11%] inset-x-[0] items-center justify-start mx-[auto] w-[96%]">
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
                <Row className="items-start lg:ml-[15px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[6%]">
                  <Text className="FiveHundredFiftyFour" variant="body8">
                    任务进度：
                  </Text>
                  <Text className="test_151223" variant="body8">
                    --
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[4px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
              </Column>
              <Column className="absolute border border-gray_201 border-solid items-center justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius8 w-[100%]">
                <Column className="justify-start mb-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
                  <Row className="items-center xl:mr-[1051px] 2xl:mr-[1182px] 3xl:mr-[1419px] lg:mr-[840px] w-[11%]">
                    <Img
                      src="images/img_close_24X24.svg"
                      className="close5"
                      alt="close"
                    />
                    <Text className="rowplay1" variant="body4">
                      任务已取消
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
            <Column className="bg-gray_54 font-alibabapuhuiti items-center justify-start lg:mt-[47px] xl:mt-[59px] 2xl:mt-[67px] 3xl:mt-[80px] p-[4px] rounded-radius4 w-[6%]">
              <Text
                className="font-normal text-bluegray_500 w-[auto]"
                variant="body9"
              >
                Apollo-V5.5
              </Text>
            </Column>
            <Text
              className="font-normal lg:leading-[18px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic text-bluegray_800 w-[84%]"
              variant="body8"
            >
              按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。按照中国道路交通法，对自动驾驶算法的合规性进行评测。
            </Text>
            <Row className="font-pingfangsc items-center justify-center lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[61%]">
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
          </Column>
          <Header1 className="absolute top-[0] w-[100%]" />
          <Stack className="absolute bg-black_900_a2 3xl:h-[1081px] lg:h-[640px] xl:h-[801px] 2xl:h-[901px] lg:px-[114px] xl:px-[143px] 2xl:px-[161px] 3xl:px-[193px] w-[100%]">
            <Img
              src="images/img_vector_577X563.svg"
              className="absolute lg:h-[411px] xl:h-[514px] 2xl:h-[578px] 3xl:h-[693px] inset-[0] justify-center m-[auto] w-[39%]"
              alt="Vector"
            />
          </Stack>
        </Stack>
        <Text
          className="font-semibold lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] text-bluegray_800 w-[auto]"
          variant="body4"
        >
          测试科目
        </Text>
        <Column
          className="bg-cover bg-repeat lg:h-[143px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] items-center justify-end lg:mt-[46px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:px-[5px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] lg:w-[142px] xl:w-[177px] 2xl:w-[200px] 3xl:w-[240px]"
          style={{ backgroundImage: "url('images/img_group395.svg')" }}
        >
          <Text className="columnfourthousandfourhundredfifty" variant="body8">
            尚未开始任务，请耐心等待
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default Page57;
