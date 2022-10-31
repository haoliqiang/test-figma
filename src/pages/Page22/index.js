import React from "react";

import { Column, Text, Row, Line, Button, Img, Input } from "components";

const Page22 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:p-[26px] xl:p-[32px] 2xl:p-[36px] 3xl:p-[44px] w-[100%]">
        <Column className="justify-start lg:mb-[354px] xl:mb-[443px] 2xl:mb-[499px] 3xl:mb-[599px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
          <Text
            className="font-semibold text-black_900_e5 w-[auto]"
            as="h5"
            variant="h5"
          >
            弹窗
          </Text>
          <Column className="items-center justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-start w-[34%]">
                <Text
                  className="font-semibold mb-[1px] text-black_900_e5 w-[auto]"
                  variant="body5"
                >
                  弹窗{" "}
                </Text>
                <Text
                  className="font-normal lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] mt-[1px] not-italic text-black_900_e5 w-[auto]"
                  variant="body5"
                >
                  高度极限值是700px，超出700出现滚动条；宽度极限值是960px
                </Text>
              </Row>
              <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[100%]" />
            </Column>
          </Column>
          <Row className="items-center justify-end ml-[auto] 2xl:mt-[104px] 3xl:mt-[125px] lg:mt-[74px] xl:mt-[92px] w-[3%]">
            <Line className="bg-blue_200 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]" />
            <Text className="rowrectangle827" variant="body5">
              标题
            </Text>
          </Row>
          <Row className="items-center justify-end ml-[auto] mt-[4px] w-[3%]">
            <Line className="bg-blue_200 lg:h-[295px] xl:h-[369px] 2xl:h-[415px] 3xl:h-[498px] w-[4px]" />
            <Text className="rowrectangle827" variant="body5">
              内容
            </Text>
          </Row>
          <Row className="items-center justify-end ml-[auto] mt-[4px] w-[4%]">
            <Line className="bg-blue_200 lg:h-[34px] xl:h-[42px] 2xl:h-[48px] 3xl:h-[57px] w-[4px]" />
            <Text className="rowrectangle827" variant="body5">
              操作栏
            </Text>
          </Row>
          <Column className="justify-start 3xl:mt-[1060px] lg:mt-[627px] xl:mt-[785px] 2xl:mt-[883px] w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              反馈提示框
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
          </Column>
          <Row className="items-center lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[77%]">
            <Column className="border border-deep_purple_A200 border-solid items-center lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[14%]">
              <Button
                className="flex items-center justify-center text-center w-[100%]"
                leftIcon={
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[4px] xl:w-[10px] xl:h-[11px] xl:mr-[5px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[5px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[7px]"
                    alt="checkmark"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineBlack90026"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                  任务取消成功
                </div>
              </Button>
              <Button
                className="2xl:mt-[14px] 3xl:mt-[17px] flex items-center justify-center lg:mt-[10px] text-center w-[100%] xl:mt-[13px]"
                leftIcon={
                  <Img
                    src="images/img_close_2.svg"
                    className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[4px] xl:w-[10px] xl:h-[11px] xl:mr-[5px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[5px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[7px]"
                    alt="close"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineBlack90026"
              >
                <div className="bg-transparent font-medium 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px]">
                  任务取消失败
                </div>
              </Button>
            </Column>
            <Column className="border border-deep_purple_A200 border-solid items-center lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] lg:p-[10px] xl:p-[13px] 2xl:p-[14px] 3xl:p-[17px] rounded-radius5 w-[83%]">
              <Input
                className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="flex w-[100%]"
                name="PropertyOne"
                placeholder="任务已添加至任务列表"
                prefix={
                  <Img
                    src="images/img_checkmark_1.svg"
                    className="ml-[2px] lg:w-[8px] lg:h-[9px] lg:mr-[4px] xl:w-[10px] xl:h-[11px] xl:mr-[5px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[5px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[7px] my-[auto]"
                    alt="checkmark"
                  />
                }
                shape="RoundedBorder4"
                size="xl"
                variant="OutlineGreenA101"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="2xl:mt-[14px] 3xl:mt-[17px] flex lg:mt-[10px] w-[100%] xl:mt-[13px]"
                name="PropertyOne One"
                placeholder="任务添加失败"
                prefix={
                  <Img
                    src="images/img_close_2.svg"
                    className="ml-[2px] lg:w-[8px] lg:h-[9px] lg:mr-[4px] xl:w-[10px] xl:h-[11px] xl:mr-[5px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[5px] 3xl:w-[14px] 3xl:h-[15px] 3xl:mr-[7px] my-[auto]"
                    alt="close"
                  />
                }
                shape="RoundedBorder4"
                size="xl"
                variant="OutlinePink100"
              ></Input>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page22;
