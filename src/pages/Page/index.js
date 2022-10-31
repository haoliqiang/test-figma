import React from "react";

import { Column, Text, Row, Line, Img, List } from "components";

const Page = () => {
  return (
    <>
      <Column className="bg-bluegray_50 font-pingfangsc justify-start mx-[auto] 2xl:p-[106px] 3xl:p-[127px] lg:p-[75px] xl:p-[94px] w-[100%]">
        <Column className="justify-start lg:mb-[53px] xl:mb-[66px] 2xl:mb-[74px] 3xl:mb-[89px] mt-[1px] w-[77%]">
          <Text className="not-italic text-black_900 w-[auto]" variant="body1">
            交互状态
          </Text>
          <Text
            className="3xl:mt-[111px] lg:mt-[65px] xl:mt-[82px] 2xl:mt-[92px] rowninehundrednineteen"
            variant="body6"
          >
            按钮
          </Text>
          <Row className="items-start lg:mt-[33px] xl:mt-[42px] 2xl:mt-[47px] 3xl:mt-[57px] w-[26%]">
            <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[20%]">
              <Text
                className="font-normal not-italic text-black_900_87 w-[auto]"
                variant="body9"
              >
                默认
              </Text>
              <Text
                className="font-normal lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] not-italic text-black_900_87 w-[auto]"
                variant="body9"
              >
                滑过
              </Text>
              <Text
                className="font-normal lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] not-italic text-black_900_87 w-[auto]"
                variant="body9"
              >
                点击
              </Text>
              <Text
                className="lg:mt-[115px] xl:mt-[144px] 2xl:mt-[162px] 3xl:mt-[194px] rowninehundrednineteen"
                variant="body6"
              >
                卡片
              </Text>
            </Column>
            <Line className="bg-black_900_63 lg:h-[175px] xl:h-[218px] 2xl:h-[246px] 3xl:h-[295px] lg:ml-[29px] xl:ml-[36px] 2xl:ml-[40px] 3xl:ml-[49px] w-[1px]" />
            <Column className="items-center justify-start lg:ml-[51px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[33%]">
              <Row className="items-start justify-between w-[100%]">
                <Text className="rowtwentyone" variant="body9">
                  文字按钮
                </Text>
                <Img
                  src="images/img_polygon15_7X4.svg"
                  className="PolygonFifteen6"
                  alt="PolygonFifteen"
                />
              </Row>
              <Row className="items-start justify-between lg:mt-[52px] xl:mt-[65px] 2xl:mt-[73px] 3xl:mt-[88px] w-[100%]">
                <Text className="rowsevenhundredsixty" variant="body9">
                  文字按钮
                </Text>
                <Img
                  src="images/img_polygon15_7X4.svg"
                  className="PolygonFifteen6"
                  alt="PolygonFifteen One"
                />
              </Row>
              <Row className="items-start justify-between lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[100%]">
                <Text
                  className="font-normal not-italic text-blue_700 w-[auto]"
                  variant="body9"
                >
                  文字按钮
                </Text>
                <Img
                  src="images/img_polygon15_7X4.svg"
                  className="PolygonFifteen6"
                  alt="PolygonFifteen Two"
                />
              </Row>
            </Column>
          </Row>
          <Row className="items-center lg:mt-[36px] xl:mt-[46px] 2xl:mt-[51px] 3xl:mt-[62px] w-[95%]">
            <Text
              className="font-normal mt-[1px] not-italic text-black_900_87 w-[auto]"
              variant="body9"
            >
              默认
            </Text>
            <Text
              className="font-normal lg:ml-[338px] xl:ml-[423px] 2xl:ml-[476px] 3xl:ml-[571px] mt-[1px] not-italic text-black_900_87 w-[auto]"
              variant="body9"
            >
              滑过：
            </Text>
            <Text
              className="font-normal 2xl:ml-[10px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] not-italic text-black_900_87 w-[auto]"
              variant="body9"
            >
              卡片出现阴影，呈浮起效果，文字hover时高亮
            </Text>
          </Row>
          <List
            className="lg:gap-[52px] xl:gap-[65px] 2xl:gap-[73px] 3xl:gap-[88px] grid grid-cols-2 min-h-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 border border-gray_202 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
              <Img
                src="images/img_rectangle269.png"
                className="lg:h-[206px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[347px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                alt="Rectangle269"
              />
              <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] w-[93%]">
                <Text
                  className="font-semibold text-gray_905 w-[auto]"
                  variant="body7"
                >
                  欧盟交通法评估
                </Text>
                <Text
                  className="font-normal leading-[normal] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic text-gray_500 w-[100%]"
                  variant="body9"
                >
                  测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                </Text>
              </Column>
              <Row className="bg-gray_53 items-center justify-evenly lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="text-orange_500 w-[auto]" variant="body2">
                  3.2
                </Text>
                <Line className="bg-gray_202 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[1px]" />
                <Column className="items-center pt-[2px] w-[77%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-start w-[55%]">
                      <Row className="items-start w-[59%]">
                        <Img
                          src="images/img_file.svg"
                          className="file4"
                          alt="file"
                        />
                        <Text className="rowfile2" variant="body9">
                          测试记录：
                        </Text>
                      </Row>
                      <Row className="items-start justify-between lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] w-[31%]">
                        <Text className="rowtwentyone" variant="body9">
                          16次
                        </Text>
                        <Img
                          src="images/img_polygon15_7X4.svg"
                          className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] mt-[1px] rounded-radius1 w-[11%]"
                          alt="PolygonFifteen Three"
                        />
                      </Row>
                    </Row>
                    <Row className="items-start justify-between xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-start w-[32%]">
                        <Img
                          src="images/img_checkmark_14X14.svg"
                          className="file4"
                          alt="checkmark"
                        />
                        <Text className="rowfile2" variant="body9">
                          最近测试：
                        </Text>
                      </Row>
                      <Row className="items-center justify-between mt-[1px] w-[62%]">
                        <Text className="rowtwentyone" variant="body9">
                          2022-08-23 09:20:22
                        </Text>
                        <Img
                          src="images/img_polygon15_7X4.svg"
                          className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] rounded-radius1 w-[3%]"
                          alt="PolygonEight"
                        />
                      </Row>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Column className="bg-white_A700 border border-gray_202 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
              <Img
                src="images/img_rectangle269.png"
                className="lg:h-[206px] xl:h-[257px] 2xl:h-[289px] 3xl:h-[347px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                alt="Rectangle269 One"
              />
              <Column className="justify-start lg:mt-[18px] xl:mt-[23px] 2xl:mt-[25px] 3xl:mt-[31px] w-[93%]">
                <Text
                  className="font-semibold text-gray_905 w-[auto]"
                  variant="body7"
                >
                  欧盟交通法评估
                </Text>
                <Text
                  className="font-normal leading-[normal] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic text-gray_500 w-[100%]"
                  variant="body9"
                >
                  测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                </Text>
              </Column>
              <Row className="bg-gray_53 items-center justify-evenly lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] 3xl:mt-[39px] lg:p-[13px] xl:p-[16px] 2xl:p-[19px] 3xl:p-[22px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Text className="text-orange_500 w-[auto]" variant="body2">
                  3.2
                </Text>
                <Line className="bg-gray_202 lg:h-[35px] xl:h-[44px] 2xl:h-[50px] 3xl:h-[59px] w-[1px]" />
                <Column className="items-center pt-[2px] w-[75%]">
                  <Column className="justify-start w-[100%]">
                    <Row className="items-start w-[56%]">
                      <Row className="items-start w-[59%]">
                        <Img
                          src="images/img_file.svg"
                          className="file4"
                          alt="file One"
                        />
                        <Text className="rowfile2" variant="body9">
                          测试记录：
                        </Text>
                      </Row>
                      <Row className="items-start justify-between lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[1px] w-[31%]">
                        <Text className="rowsevenhundredsixty" variant="body9">
                          16次
                        </Text>
                        <Img
                          src="images/img_polygon15_7X4.svg"
                          className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] mt-[1px] rounded-radius1 w-[11%]"
                          alt="PolygonFifteen Four"
                        />
                      </Row>
                    </Row>
                    <Row className="items-start justify-between xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[100%]">
                      <Row className="items-start w-[33%]">
                        <Img
                          src="images/img_checkmark_14X14.svg"
                          className="file4"
                          alt="checkmark One"
                        />
                        <Text className="rowfile2" variant="body9">
                          最近测试：
                        </Text>
                      </Row>
                      <Row className="items-center justify-between mt-[1px] w-[61%]">
                        <Text className="rowtwentyone" variant="body9">
                          2022-08-23 12:10:22
                        </Text>
                        <Img
                          src="images/img_polygon15_7X4.svg"
                          className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] rounded-radius1 w-[3%]"
                          alt="PolygonEight One"
                        />
                      </Row>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
          </List>
        </Column>
      </Column>
    </>
  );
};

export default Page;
