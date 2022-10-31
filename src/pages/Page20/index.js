import React from "react";

import { Column, Text, Line, Row, List, Img } from "components";

const Page20 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc justify-start mx-[auto] lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] w-[100%]">
        <Column className="justify-start lg:mb-[536px] xl:mb-[670px] 2xl:mb-[754px] 3xl:mb-[905px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[84%]">
          <Text
            className="font-semibold text-black_900_e5 w-[auto]"
            as="h5"
            variant="h5"
          >
            卡片
          </Text>
          <Column className="justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              卡片
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
          <Row className="items-start lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[73%]">
            <List
              className="lg:gap-[30px] xl:gap-[37px] 2xl:gap-[42px] 3xl:gap-[51px] grid grid-cols-2 min-h-[auto] w-[61%]"
              orientation="horizontal"
            >
              <Column className="justify-start w-[100%]">
                <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                  <Img
                    src="images/img_rectangle269.png"
                    className="lg:h-[111px] xl:h-[139px] 2xl:h-[156px] 3xl:h-[187px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[100%]"
                    alt="Rectangle269"
                  />
                  <Column className="justify-start xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      感知鲁棒性安全评估
                    </Text>
                    <Text
                      className="font-normal leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                      variant="body9"
                    >
                      测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估。
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="B7" as="h4" variant="h4">
                      A
                    </Text>
                    <Text
                      className="TwoThousandOneHundredNinetyEight"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[58%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file8"
                            alt="file"
                          />
                          <Text className="rowfile3" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[34%]">
                            <Text className="rowtwentyone1" variant="body9">
                              21次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye4"
                              alt="arrowright"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file8"
                            alt="clock"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-23 22:20:22
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft5"
                              alt="arrowright One"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-deep_purple_A200 border-solid items-center justify-start ml-[1px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[71px] xl:mt-[89px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[91%]">
                  <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                    <Column className="items-center justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[100%]">
                      <Img
                        src="images/img_maskgroup.png"
                        className="xl:h-[108px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[87px] w-[100%]"
                        alt="Maskgroup"
                      />
                      <Text className="columnmaskgroup" variant="body7">
                        轿车
                      </Text>
                      <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_share.svg"
                            className="arrowleft5"
                            alt="share"
                          />
                          <Img
                            src="images/img_edit_16X16.svg"
                            className="arrowleft5"
                            alt="edit"
                          />
                          <Img
                            src="images/img_trash_1.svg"
                            className="arrowleft5"
                            alt="trash"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="border border-gray_300 border-solid items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] p-[1px] rounded-radius8 w-[100%]">
                    <Column className="items-center justify-start 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[100%]">
                      <Img
                        src="images/img_maskgroup.png"
                        className="xl:h-[108px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[87px] w-[100%]"
                        alt="Maskgroup One"
                      />
                      <Text className="columnmaskgroup" variant="body7">
                        轿车
                      </Text>
                      <Column className="items-center justify-start lg:mt-[10px] xl:mt-[13px] 2xl:mt-[14px] 3xl:mt-[17px] w-[81%]">
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Row className="items-center justify-between 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_share_16X16.svg"
                            className="arrowleft5"
                            alt="share One"
                          />
                          <Img
                            src="images/img_edit_1.svg"
                            className="arrowleft5"
                            alt="edit One"
                          />
                          <Img
                            src="images/img_trash_2.svg"
                            className="arrowleft5"
                            alt="trash One"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="justify-start lg:mb-[405px] xl:mb-[506px] 2xl:mb-[569px] 3xl:mb-[683px] lg:mt-[27px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Column className="justify-start w-[93%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      variant="body7"
                    >
                      感知鲁棒性安全评估
                    </Text>
                    <Text
                      className="font-normal leading-[normal] xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-bluegray_500 w-[100%]"
                      variant="body9"
                    >
                      测试由于摄像头、雷达等感知设备能力不足带来的系统鲁棒性能力范围评估
                    </Text>
                  </Column>
                  <Row className="bg-gray_54 items-center lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] 3xl:p-[11px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-bl-[7px] rounded-br-[7px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                    <Text className="B7" as="h4" variant="h4">
                      A
                    </Text>
                    <Text
                      className="TwoThousandOneHundredNinetyEight"
                      variant="body9"
                    >
                      级
                    </Text>
                    <Line className="bg-gray_201 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[1px]" />
                    <Column className="font-pingfangsc items-center 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] my-[1px] pt-[1px] w-[77%]">
                      <Column className="justify-start w-[100%]">
                        <Row className="items-start w-[58%]">
                          <Img
                            src="images/img_file_16X16.svg"
                            className="file8"
                            alt="file One"
                          />
                          <Text className="rowfile3" variant="body9">
                            测试记录：
                          </Text>
                          <Row className="items-start justify-evenly 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[34%]">
                            <Text className="rowtwentyone1" variant="body9">
                              21次
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="eye4"
                              alt="arrowright One"
                            />
                          </Row>
                        </Row>
                        <Row className="items-start justify-between lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[100%]">
                          <Img
                            src="images/img_clock_16X16.svg"
                            className="file8"
                            alt="clock One"
                          />
                          <Text
                            className="rowsixhundredfiftythree"
                            variant="body9"
                          >
                            最近测试：
                          </Text>
                          <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                            <Text className="rowtwentyone1" variant="body9">
                              2022-08-23 22:20:22
                            </Text>
                            <Img
                              src="images/img_arrowright.svg"
                              className="arrowleft5"
                              alt="arrowright One One"
                            />
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
                <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[28px] 3xl:p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] rounded-radius5 w-[81%]">
                  <Column className="justify-start lg:my-[4px] 2xl:my-[5px] xl:my-[5px] 3xl:my-[7px] pt-[1px] w-[97%]">
                    <Row className="items-start w-[58%]">
                      <Img
                        src="images/img_file_16X16.svg"
                        className="file8"
                        alt="file One"
                      />
                      <Text className="rowfile3" variant="body9">
                        测试记录：
                      </Text>
                      <Row className="items-start justify-evenly 3xl:ml-[10px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] w-[34%]">
                        <Text className="rowtwentyone1" variant="body9">
                          21次
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="eye4"
                          alt="arrowright Two"
                        />
                      </Row>
                    </Row>
                    <Row className="items-start justify-between lg:mt-[4px] 2xl:mt-[5px] xl:mt-[5px] 3xl:mt-[7px] w-[100%]">
                      <Img
                        src="images/img_clock_1.svg"
                        className="file8"
                        alt="clock One"
                      />
                      <Text className="rowsixhundredfiftythree" variant="body9">
                        最近测试：
                      </Text>
                      <Row className="font-alibabapuhuiti1 items-start justify-evenly mb-[1px] w-[62%]">
                        <Text className="rowtwentyone1" variant="body9">
                          2022-08-23 22:20:22
                        </Text>
                        <Img
                          src="images/img_arrowright.svg"
                          className="arrowleft5"
                          alt="arrowright Three"
                        />
                      </Row>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </List>
            <Img
              src="images/img_rectangle269.png"
              className="lg:h-[111px] xl:h-[139px] 2xl:h-[156px] 3xl:h-[187px] 3xl:ml-[107px] lg:ml-[63px] xl:ml-[79px] 2xl:ml-[89px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7px] rounded-tr-[7px] w-[28%]"
              alt="Rectangle269 One"
            />
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page20;
