import React from "react";

import { Column, Row, Stack, Line, Text, Img, Button, List } from "components";
import Header7 from "components/Header/Header7";
import Sidebar9 from "components/Sidebar/Sidebar9";

const I052Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-alibabapuhuiti1 items-center justify-end mx-[auto] w-[100%]">
        <Column className="items-center justify-end w-[100%]">
          <Header7 className="w-[100%]" />
          <Row className="items-start justify-evenly w-[98%]">
            <Stack className="3xl:h-[1088px] lg:h-[645px] xl:h-[806px] 2xl:h-[907px] w-[20%]">
              <Sidebar9 className="absolute top-[0] w-[100%]" />
              <Line className="absolute bg-gray_101 3xl:h-[1088px] lg:h-[645px] xl:h-[806px] 2xl:h-[907px] right-[0] w-[1px]" />
            </Stack>
            <Column className="font-pingfangsc items-center justify-start w-[80%]">
              <Column className="justify-end lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[100%]">
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
                    主车模型
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
              </Column>
              <Column className="font-alibabapuhuiti1 justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[97%]">
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[10%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineGray3001_2"
                >
                  新建主车模型
                </Button>
                <List
                  className="font-pingfangsc lg:gap-[22px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[38px] grid grid-cols-4 min-h-[auto] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                    <Column className="items-center justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] w-[100%]">
                      <Img
                        src="images/img_maskgroup.png"
                        className="Maskgroup2"
                        alt="Maskgroup"
                      />
                      <Text className="columnmaskgroup1" variant="body7">
                        轿车
                      </Text>
                      <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[81%]">
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_share_28X28.svg"
                            className="arrowleft"
                            alt="share One"
                          />
                          <Img
                            src="images/img_edit_1.svg"
                            className="arrowleft"
                            alt="edit"
                          />
                          <Img
                            src="images/img_trash_2.svg"
                            className="arrowleft"
                            alt="trash"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                    <Column className="items-center justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] w-[100%]">
                      <Img
                        src="images/img_maskgroup.png"
                        className="Maskgroup2"
                        alt="Maskgroup One"
                      />
                      <Text className="columnmaskgroup1" variant="body7">
                        货车
                      </Text>
                      <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[81%]">
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_share_28X28.svg"
                            className="arrowleft"
                            alt="share Two"
                          />
                          <Img
                            src="images/img_edit_1.svg"
                            className="arrowleft"
                            alt="edit One"
                          />
                          <Img
                            src="images/img_trash_2.svg"
                            className="arrowleft"
                            alt="trash One"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                    <Column className="items-center justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] w-[100%]">
                      <Img
                        src="images/img_maskgroup.png"
                        className="Maskgroup2"
                        alt="Maskgroup Two"
                      />
                      <Text className="columnmaskgroup1" variant="body7">
                        SUV
                      </Text>
                      <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[81%]">
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_share_28X28.svg"
                            className="arrowleft"
                            alt="share Three"
                          />
                          <Img
                            src="images/img_edit_1.svg"
                            className="arrowleft"
                            alt="edit Two"
                          />
                          <Img
                            src="images/img_trash_2.svg"
                            className="arrowleft"
                            alt="trash Two"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="border border-gray_300 border-solid items-center justify-start p-[1px] rounded-radius8 w-[100%]">
                    <Column className="items-center justify-start xl:mb-[11px] 2xl:mb-[13px] 3xl:mb-[15px] lg:mb-[9px] w-[100%]">
                      <Img
                        src="images/img_maskgroup.png"
                        className="Maskgroup2"
                        alt="Maskgroup Three"
                      />
                      <Text className="columnmaskgroup1" variant="body7">
                        客车
                      </Text>
                      <Column className="items-center justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[81%]">
                        <Line className="bg-gray_300 h-[1px] w-[100%]" />
                        <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                          <Img
                            src="images/img_share_28X28.svg"
                            className="arrowleft"
                            alt="share Four"
                          />
                          <Img
                            src="images/img_edit_1.svg"
                            className="arrowleft"
                            alt="edit Three"
                          />
                          <Img
                            src="images/img_trash_2.svg"
                            className="arrowleft"
                            alt="trash Three"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </List>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default I052Page;
