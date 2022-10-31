import React from "react";

import { Column, Row, Text, Img, Line, Input, Button } from "components";

const I16Page = () => {
  return (
    <>
      <Column className="bg-black_900_87 font-pingfangsc items-center justify-start mx-[auto] lg:p-[215px] xl:p-[269px] 2xl:p-[303px] 3xl:p-[363px] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:pt-[12px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[21px] rounded-radius10 w-[58%]">
          <Row className="items-center justify-between py-[2px] w-[87%]">
            <Text className="rowtwohundredfortyseven" variant="body7">
              添加到测试集
            </Text>
            <Img src="images/img_close_1.svg" className="close2" alt="close" />
          </Row>
          <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Line className="bg-gray_202 h-[1px] w-[100%]" />
            <Text
              className="lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] text-bluegray_200 column20220825"
              variant="body8"
            >
              案例名称
            </Text>
            <Input
              className="placeholder:text-bluegray_800 Group251"
              wrapClassName="2xl:ml-[32px] 2xl:mt-[11px] 3xl:ml-[38px] 3xl:mt-[13px] lg:ml-[22px] lg:mt-[7px] w-[87%] xl:ml-[28px] xl:mt-[9px]"
              name="Group246"
              placeholder="道路右转"
              shape="RoundedBorder4"
              size="md"
              variant="OutlineGray302"
            ></Input>
            <Column className="bg-white_A700 items-center justify-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Line className="bg-gray_202 h-[1px] w-[100%]" />
                <Row className="items-center justify-end ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[28%]">
                  <Button
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGray204"
                  >
                    取消
                  </Button>
                  <Button
                    className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlueA401"
                  >
                    确认
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default I16Page;
