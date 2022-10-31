import React from "react";

import { Column, Row, Text, Img, Line, Button } from "components";
import Header8 from "components/Header/Header8";
import Sidebar8 from "components/Sidebar/Sidebar8";

const I092Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header8 className="w-[100%]" />
          <Row className="font-alibabapuhuiti1 items-start justify-evenly w-[98%]">
            <Sidebar8 className="w-[20%]" />
            <Column className="font-pingfangsc justify-start w-[80%]">
              <Column className="items-center justify-start lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[100%]">
                <Column className="justify-start w-[99%]">
                  <Row className="items-start w-[20%]">
                    <Row className="items-start justify-evenly w-[53%]">
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        资源库
                      </Text>
                      <Img
                        src="images/img_checkmark_3.svg"
                        className="checkmark2"
                        alt="checkmark"
                      />
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        被测工控机
                      </Text>
                    </Row>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark One"
                    />
                    <Text className="SevenHundredSeventyNine" variant="body9">
                      被测工控机详情
                    </Text>
                  </Row>
                  <Line className="bg-gray_201 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                </Column>
              </Column>
              <Column className="justify-start lg:ml-[22px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[70%]">
                <Text className="columnsixthousandfive" variant="body4">
                  被测工控机详情
                </Text>
                <Button
                  className="font-normal lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[14%]"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="FillBlueA400"
                >
                  编辑
                </Button>
                <Row className="items-center ml-[1px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[40%]">
                  <Text className="FiveHundredFiftyFour" variant="body8">
                    名称
                  </Text>
                  <Text className="V20_Two" variant="body8">
                    吉利 V1.1
                  </Text>
                </Row>
                <Row className="items-start ml-[1px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[41%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    类型
                  </Text>
                  <Text className="V20_Two" variant="body8">
                    Cyber RT
                  </Text>
                </Row>
                <Row className="items-start ml-[1px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[51%]">
                  <Text className="FiveHundredFiftyThree" variant="body8">
                    DomainID
                  </Text>
                  <Text
                    className="font-medium lg:ml-[140px] xl:ml-[175px] 2xl:ml-[197px] 3xl:ml-[236px] my-[1px] text-bluegray_800 w-[auto]"
                    variant="body8"
                  >
                    123456
                  </Text>
                  <Row className="items-center justify-evenly mb-[1px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[17%]">
                    <div className="bg-teal_400 rounded-radius50 plus_One"></div>
                    <Text className="rowbrand" variant="body8">
                      连接成功
                    </Text>
                  </Row>
                </Row>
                <Row className="items-start ml-[1px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[51%]">
                  <Text className="FiveHundredFiftyThree" variant="body8">
                    接入模块
                  </Text>
                  <Row className="items-start lg:ml-[145px] xl:ml-[181px] 2xl:ml-[204px] 3xl:ml-[244px] w-[35%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      variant="body8"
                    >
                      感知
                    </Text>
                    <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 underline w-[auto]">
                      Cyber 标准协议
                    </Text>
                  </Row>
                </Row>
                <Row className="items-start lg:ml-[185px] xl:ml-[232px] 2xl:ml-[261px] 3xl:ml-[313px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[18%]">
                  <Text
                    className="font-medium text-bluegray_800 w-[auto]"
                    variant="body8"
                  >
                    融合
                  </Text>
                  <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[1px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-blue_A400 underline w-[auto]">
                    Cyber 标准协议
                  </Text>
                </Row>
                <Row className="items-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[100%]">
                  <Text
                    className="mb-[3px] columnfivehundredsixty"
                    variant="body8"
                  >
                    描述：
                  </Text>
                  <Text
                    className="font-medium lg:ml-[161px] xl:ml-[201px] 2xl:ml-[227px] 3xl:ml-[272px] mt-[3px] text-bluegray_800 w-[auto]"
                    variant="body8"
                  >
                    被测工控机为吉利V1.1 ，类型Cyber RT，基于Cyber
                    标准协议接入模块为感知和融合
                  </Text>
                </Row>
                <Row className="items-start ml-[1px] lg:mt-[28px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[50%]">
                  <Text className="columnfivehundredsixty" variant="body8">
                    其他控制接口
                  </Text>
                  <Text
                    className="lg:ml-[125px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] FiveHundredFiftyTwo"
                    variant="body8"
                  >
                    http：//cscontrol.py
                  </Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default I092Page;
