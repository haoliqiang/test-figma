import React from "react";

import { Column, Row, Text, Img, Line, Input, Button } from "components";
import Header1 from "components/Header/Header1";
import Sidebar3 from "components/Sidebar/Sidebar3";

const Page70 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Row className="items-start justify-evenly w-[98%]">
            <Sidebar3 className="w-[20%]" />
            <Column className="justify-start w-[80%]">
              <Column className="justify-end lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[100%]">
                <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[11%]">
                  <Text className="FiveHundredFiftyTwo" variant="body9">
                    个人中心
                  </Text>
                  <Img
                    src="images/img_checkmark_3.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                  <Text className="SevenHundredSeventyNine" variant="body9">
                    个人信息
                  </Text>
                </Row>
                <Line className="bg-gray_201 h-[1px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]" />
              </Column>
              <Column className="justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[58%]">
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
                    className="placeholder:text-bluegray_800 zipcode"
                    wrapClassName="flex w-[76%]"
                    name="zipcode"
                    placeholder="123456"
                    suffix={
                      <Img
                        src="images/img_eye_9X13.svg"
                        className="lg:w-[10px] lg:h-[11px] lg:ml-[24px] lg:mr-[5px] xl:w-[13px] xl:h-[14px] xl:ml-[31px] xl:mr-[7px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[35px] 2xl:mr-[8px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[42px] 3xl:mr-[9px] my-[auto]"
                        alt="eye"
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
                  <Img
                    src="images/img_group580.svg"
                    className="lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[76%]"
                    alt="Group580"
                  />
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
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Page70;
