import React from "react";

import { Column, Stack, Row, Text, Button, Img, Input, Line } from "components";
import Header from "components/Header/Header";
import Sidebar3 from "components/Sidebar/Sidebar3";

const Page1 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Stack className="3xl:h-[1005px] lg:h-[596px] xl:h-[745px] 2xl:h-[838px] w-[100%]">
          <Column className="absolute bg-white_A700 border border-gray_302 border-solid h-[max-content] inset-y-[0] justify-start my-[auto] lg:p-[23px] xl:p-[29px] 2xl:p-[33px] 3xl:p-[39px] right-[0] w-[81%]">
            <Column className="justify-start lg:mb-[129px] xl:mb-[161px] 2xl:mb-[182px] 3xl:mb-[218px] lg:mt-[51px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[60%]">
              <Row className="items-start w-[75%]">
                <Text className="rowsevenhundredseventytwo" variant="body8">
                  *头像
                </Text>
                <Column className="items-center justify-start xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] w-[68%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Button
                      className="flex 3xl:h-[106px] lg:h-[63px] xl:h-[79px] 2xl:h-[89px] items-center justify-center rounded-radius50 3xl:w-[105px] lg:w-[62px] xl:w-[78px] 2xl:w-[88px]"
                      size="xlIcn"
                      variant="icbFillGray201"
                    >
                      <Img
                        src="images/img_user_88X88.svg"
                        className="flex items-center justify-center lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px]"
                        alt="user"
                      />
                    </Button>
                    <Column className="w-[66%]">
                      <Button
                        className="font-normal ml-[1px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[40%]"
                        shape="RoundedBorder4"
                        size="md"
                        variant="FillBlueA401"
                      >
                        修改头像
                      </Button>
                      <Text className="column修改头像" variant="body8">
                        png、jpg格式，图片大小不超过2M
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_500 w-[auto]"
                  variant="body8"
                >
                  *姓名
                </Text>
                <Input
                  className="placeholder:text-bluegray_200 Group246"
                  wrapClassName="w-[76%]"
                  name="Group246"
                  placeholder="请输入案例描述"
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
                  *单位
                </Text>
                <Input
                  className="placeholder:text-bluegray_200 Group246"
                  wrapClassName="w-[76%]"
                  name="Group246 One"
                  placeholder="请输入单位名称"
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
                  *部门
                </Text>
                <Input
                  className="placeholder:text-bluegray_200 Group246"
                  wrapClassName="w-[76%]"
                  name="Group249"
                  placeholder="请输入部门"
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
                  *工号
                </Text>
                <Input
                  className="placeholder:text-bluegray_200 Group246"
                  wrapClassName="w-[76%]"
                  name="Group250"
                  placeholder="请输入工号"
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
                  *账户类型
                </Text>
                <Input
                  className="placeholder:text-bluegray_800 Group251"
                  wrapClassName="w-[76%]"
                  name="Group251"
                  placeholder="企业管理员"
                  shape="RoundedBorder4"
                  size="md"
                  variant="OutlineGray2011_2"
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
                个人信息
              </Text>
            </Row>
            <Line className="bg-gray_201 h-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[99%]" />
          </Column>
          <Sidebar3 className="absolute inset-y-[0] left-[0] my-[auto] w-[19%]" />
        </Stack>
      </Column>
    </>
  );
};

export default Page1;
