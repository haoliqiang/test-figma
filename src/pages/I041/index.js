import React from "react";

import { Column, Stack, Row, Text, Input, Img, Button, Line } from "components";
import Header from "components/Header/Header";
import Sidebar from "components/Sidebar/Sidebar";

const I041Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Stack className="3xl:h-[1005px] lg:h-[596px] xl:h-[745px] 2xl:h-[838px] w-[100%]">
          <Column className="absolute bg-white_A700 border border-gray_302 border-solid h-[max-content] inset-y-[0] justify-start my-[auto] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] right-[0] w-[81%]">
            <Column className="justify-start lg:mb-[105px] xl:mb-[131px] 2xl:mb-[148px] 3xl:mb-[177px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[60%]">
              <Row className="items-center justify-between w-[100%]">
                <Text
                  className="font-medium text-gray_701 w-[auto]"
                  variant="body8"
                >
                  *标准案例名称
                </Text>
                <Input
                  className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_402 text-gray_402 w-[100%]"
                  wrapClassName="w-[76%]"
                  name="Group246"
                  placeholder="请输入案例名称"
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineGray302"
                ></Input>
              </Row>
              <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Text
                  className="font-medium text-gray_701 w-[auto]"
                  variant="body8"
                >
                  *标准案例描述
                </Text>
                <Input
                  className="font-normal not-italic p-[0] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_402 text-gray_402 w-[100%]"
                  wrapClassName="w-[76%]"
                  name="Group246 One"
                  placeholder="请输入案例描述"
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineGray302"
                ></Input>
              </Row>
              <Column className="items-center justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[51%]">
                <Column className="justify-start w-[100%]">
                  <Row className="items-start lg:mr-[42px] xl:mr-[53px] 2xl:mr-[60px] 3xl:mr-[72px] w-[82%]">
                    <Text
                      className="rowonethousandonehundredten"
                      variant="body8"
                    >
                      *案例缩略图
                    </Text>
                    <Column className="bg-white_A700 border border-gray_302 border-solid xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] items-center justify-center lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] rounded-radius4 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[85px]">
                      <Img
                        src="images/img_plus_24X24.svg"
                        className="plus4"
                        alt="plus"
                      />
                      <Text
                        className="font-normal xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] not-italic text-gray_402 w-[auto]"
                        variant="body9"
                      >
                        点击上传图片
                      </Text>
                    </Column>
                  </Row>
                  <Text
                    className="columnonethousandonehundredten"
                    variant="body9"
                  >
                    额外提示语，文字过多时宽度折行
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-start lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
                <Column className="justify-start w-[100%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Text
                      className="font-medium xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] text-gray_701 w-[auto]"
                      variant="body8"
                    >
                      *上传标准案例
                    </Text>
                    <Column className="bg-white_A700 border border-dashed border-gray_302 items-center justify-start lg:p-[43px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] rounded-radius4 w-[76%]">
                      <Row className="items-center justify-center py-[3px] w-[43%]">
                        <Column className="items-center rounded-radius3 w-[34%]">
                          <Text className="rowsixteen_four" variant="body8">
                            点击上传
                          </Text>
                        </Column>
                        <Img
                          src="images/img_slash.svg"
                          className="slash"
                          alt="slash"
                        />
                        <Text
                          className="ml-[4px] rowtwohundredninetyfour"
                          variant="body8"
                        >
                          拖拽到此区域
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                  <Text
                    className="columnonethousandonehundredten"
                    variant="body9"
                  >
                    额外提示语，文字过多时宽度折行
                  </Text>
                </Column>
              </Column>
              <Row className="items-center lg:ml-[110px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] lg:mt-[24px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[25%]">
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[37%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillGray204"
                >
                  取消
                </Button>
                <Button
                  className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[54%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillBlueA401"
                >
                  确认创建
                </Button>
              </Row>
            </Column>
          </Column>
          <Column className="absolute bg-white_A700 items-center justify-start lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] right-[0] top-[0] w-[81%]">
            <Column className="justify-start w-[99%]">
              <Row className="items-start w-[24%]">
                <Row className="items-start justify-evenly w-[65%]">
                  <Text className="OneHundredFiftyThree" variant="body9">
                    我的测试集
                  </Text>
                  <Img
                    src="images/img_checkmark.svg"
                    className="checkmark2"
                    alt="checkmark"
                  />
                  <Text className="OneHundredFiftyThree" variant="body9">
                    20220804测试集
                  </Text>
                </Row>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark"
                  alt="checkmark One"
                />
                <Text className="OneHundredFiftyFour" variant="body9">
                  新建标准案例
                </Text>
              </Row>
              <Line className="bg-gray_202 h-[1px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[100%]" />
            </Column>
          </Column>
          <Sidebar className="absolute inset-y-[0] left-[0] my-[auto] w-[19%]" />
        </Stack>
      </Column>
    </>
  );
};

export default I041Page;
