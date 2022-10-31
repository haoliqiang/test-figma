import React from "react";

import { Column, Stack, Row, Text, Input, Img, Button, Line } from "components";
import Header from "components/Header/Header";
import Sidebar1 from "components/Sidebar/Sidebar1";

const Page4 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Stack className="3xl:h-[1005px] lg:h-[596px] xl:h-[745px] 2xl:h-[838px] w-[100%]">
          <Column className="absolute bg-white_A700 border border-gray_302 border-solid h-[max-content] inset-y-[0] justify-start my-[auto] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] right-[0] w-[81%]">
            <Column className="justify-start lg:mb-[324px] xl:mb-[405px] 2xl:mb-[456px] 3xl:mb-[547px] lg:mt-[44px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[60%]">
              <Row className="items-center justify-between w-[100%]">
                <Text
                  className="font-medium text-bluegray_500 w-[auto]"
                  variant="body8"
                >
                  *用户名
                </Text>
                <Input
                  className="placeholder:text-bluegray_800 Group251"
                  wrapClassName="w-[76%]"
                  name="Group251"
                  placeholder="liuriming"
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineGray2011_2"
                ></Input>
              </Row>
              <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_500 w-[auto]"
                  variant="body8"
                >
                  *密码
                </Text>
                <Input
                  className="placeholder:text-bluegray_200 Group2461"
                  wrapClassName="flex w-[76%]"
                  name="Group246"
                  placeholder="请输入案例描述"
                  suffix={
                    <Img
                      src="images/img_rewind.svg"
                      className="lg:w-[10px] lg:h-[11px] lg:ml-[24px] lg:mr-[5px] xl:w-[13px] xl:h-[14px] xl:ml-[31px] xl:mr-[7px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[35px] 2xl:mr-[8px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[42px] 3xl:mr-[9px] my-[auto]"
                      alt="rewind"
                    />
                  }
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineGray201"
                ></Input>
              </Row>
              <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_500 w-[auto]"
                  variant="body8"
                >
                  *密码确认
                </Text>
                <Input
                  className="placeholder:text-bluegray_200 Group2461"
                  wrapClassName="flex w-[76%]"
                  name="Group252"
                  placeholder="请输入案例描述"
                  suffix={
                    <Img
                      src="images/img_rewind.svg"
                      className="lg:w-[10px] lg:h-[11px] lg:ml-[24px] lg:mr-[5px] xl:w-[13px] xl:h-[14px] xl:ml-[31px] xl:mr-[7px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[35px] 2xl:mr-[8px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[42px] 3xl:mr-[9px] my-[auto]"
                      alt="rewind"
                    />
                  }
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineGray201"
                ></Input>
              </Row>
              <Row className="items-center lg:ml-[110px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[25%]">
                <Button
                  className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[37%]"
                  shape="RoundedBorder4"
                  size="md"
                  variant="FillGray201"
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
          <Column className="absolute bg-white_A700 justify-end lg:pt-[17px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] lg:px-[17px] xl:px-[22px] 2xl:px-[25px] 3xl:px-[30px] right-[0] top-[0] w-[81%]">
            <Row className="items-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mr-[auto] w-[10%]">
              <Text className="FiveHundredFiftyTwo" variant="body9">
                个人中心
              </Text>
              <Img
                src="images/img_checkmark_12X12.svg"
                className="checkmark"
                alt="checkmark"
              />
              <Text className="SevenHundredSeventyNine" variant="body9">
                安全设置
              </Text>
            </Row>
            <Line className="bg-gray_201 h-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[99%]" />
          </Column>
          <Sidebar1 className="absolute inset-y-[0] left-[0] my-[auto] w-[19%]" />
        </Stack>
      </Column>
    </>
  );
};

export default Page4;
