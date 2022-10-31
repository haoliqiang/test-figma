import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Stack,
  Line,
  Button,
} from "components";
import Sidebar9 from "components/Sidebar/Sidebar9";

const Page81 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-alibabapuhuiti1 items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Row className="bg-blue_A400 items-center lg:p-[15px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] w-[100%]">
            <Row className="items-center lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[99%]">
              <Row className="items-center w-[13%]">
                <Img
                  src="images/img_reply.svg"
                  className="reply3"
                  alt="reply"
                />
                <Text className="rowreply2" variant="body7">
                  自动驾驶安全验证平台
                </Text>
              </Row>
              <Row className="font-pingfangsc items-center justify-center 2xl:ml-[103px] 3xl:ml-[123px] lg:ml-[73px] xl:ml-[91px] w-[35%]">
                <Text className="TwoThousandNinetySix" variant="body8">
                  首页
                </Text>
                <Text
                  className="ThreeThousandTwoHundredThirtySeven"
                  variant="body8"
                >
                  系统测试
                </Text>
                <Text className="TwoThousandSixHundredTwenty" variant="body8">
                  可信赖评估
                </Text>
                <Text className="TwoThousandSixHundredTwenty" variant="body8">
                  任务
                </Text>
                <Text
                  className="font-semibold lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] mt-[1px] text-white_A700 w-[auto]"
                  variant="body8"
                >
                  资源库
                </Text>
              </Row>
              <Row className="font-alibabapuhuiti1 items-center justify-between lg:ml-[245px] xl:ml-[306px] 2xl:ml-[345px] 3xl:ml-[414px] w-[19%]">
                <SelectBox
                  className="font-normal not-italic pb-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[27%]"
                  placeholderClassName="text-white_A700"
                  name="FrameTen"
                  placeholder="AD-V2.3"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_16X16.svg"
                      className="mr-[0] lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
                <Row className="font-pingfangsc items-start justify-center w-[49%]">
                  <Img
                    src="images/img_ellipse5.png"
                    className="rounded-radius50 user"
                    alt="EllipseFive"
                  />
                  <SelectBox
                    className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[78%]"
                    placeholderClassName="text-white_A700"
                    name="FrameNine"
                    placeholder="欢迎，王志杰"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_16X16.svg"
                        className="mr-[0] lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                  ></SelectBox>
                </Row>
                <Img
                  src="images/img_help.svg"
                  className="arrowleft"
                  alt="help"
                />
              </Row>
            </Row>
          </Row>
          <Row className="items-start justify-evenly w-[98%]">
            <Stack className="3xl:h-[1088px] lg:h-[645px] xl:h-[806px] 2xl:h-[907px] w-[20%]">
              <Sidebar9 className="absolute top-[0] w-[100%]" />
              <Line className="absolute bg-gray_101 3xl:h-[1088px] lg:h-[645px] xl:h-[806px] 2xl:h-[907px] right-[0] w-[1px]" />
            </Stack>
            <Column className="justify-start w-[80%]">
              <Column className="font-pingfangsc justify-end lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[100%]">
                <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[9%]">
                  <Text className="FiveHundredFiftyTwo" variant="body9">
                    资源库
                  </Text>
                  <Img
                    src="images/img_checkmark_3.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                  <Text className="SevenHundredSeventyNine" variant="body9">
                    被测算法
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
              </Column>
              <Button
                className="font-alibabapuhuiti1 font-normal lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[9%]"
                shape="RoundedBorder4"
                size="md"
                variant="FillBlueA401"
              >
                新建被测算法
              </Button>
              <Stack className="bg-white_A700 font-pingfangsc lg:h-[171px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] lg:ml-[327px] xl:ml-[409px] 2xl:ml-[460px] 3xl:ml-[552px] lg:mt-[113px] xl:mt-[142px] 2xl:mt-[160px] 3xl:mt-[192px] lg:w-[170px] xl:w-[213px] 2xl:w-[240px] 3xl:w-[288px]">
                <Stack className="bottom-[0] Group431">
                  <Stack className="Group431">
                    <Img
                      src="images/img_group431_9.svg"
                      className="Group431"
                      alt="Group431"
                    />
                    <Img
                      src="images/img_group434.png"
                      className="Group4341"
                      alt="Group434"
                    />
                  </Stack>
                  <Row className="absolute bottom-[20%] items-start left-[10%] w-[65%]">
                    <Img
                      src="images/img_ellipse94.png"
                      className="EllipseNinetyFour4"
                      alt="EllipseNinetyFour"
                    />
                    <Img
                      src="images/img_group434.png"
                      className="Group4071"
                      alt="Group407"
                    />
                    <Img
                      src="images/img_group433_16X9.png"
                      className="Group4332"
                      alt="Group433"
                    />
                  </Row>
                </Stack>
                <Column className="absolute bottom-[10%] justify-start right-[27%] w-[41%]">
                  <Img
                    src="images/img_group411_104X99.svg"
                    className="2xl:h-[105px] 3xl:h-[125px] lg:h-[74px] xl:h-[93px] w-[100%]"
                    alt="Group411"
                  />
                  <Text
                    className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] rowbrand"
                    variant="body8"
                  >
                    暂无地图
                  </Text>
                </Column>
              </Stack>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page81;
