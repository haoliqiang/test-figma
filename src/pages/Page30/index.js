import React from "react";

import { Column, Row, Text, Img, Line, Input, Button } from "components";
import Header1 from "components/Header/Header1";
import Sidebar from "components/Sidebar/Sidebar";

const Page30 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Row className="items-start justify-evenly w-[98%]">
            <Sidebar className="w-[20%]" />
            <Column className="justify-start w-[80%]">
              <Column className="justify-end lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[100%]">
                <Row className="items-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mr-[auto] w-[16%]">
                  <Text className="FiveHundredFiftyTwo" variant="body9">
                    我的测试集
                  </Text>
                  <Img
                    src="images/img_checkmark_3.svg"
                    className="checkmark"
                    alt="checkmark"
                  />
                  <Text className="SevenHundredSeventyNine" variant="body9">
                    20220804测试集
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
                    *标准案例名称
                  </Text>
                  <Input
                    className="placeholder:text-bluegray_200 Group246"
                    wrapClassName="w-[76%]"
                    name="Group246"
                    placeholder="请输入案例名称"
                    shape="RoundedBorder4"
                    size="md"
                  ></Input>
                </Row>
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    *标准案例描述
                  </Text>
                  <Input
                    className="placeholder:text-bluegray_200 Group246"
                    wrapClassName="w-[76%]"
                    name="Group246 One"
                    placeholder="请输入案例描述"
                    shape="RoundedBorder4"
                    size="md"
                  ></Input>
                </Row>
                <Row className="items-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[42%]">
                  <Text
                    className="rowtwothousandninehundredeightyone"
                    variant="body8"
                  >
                    *案例缩略图
                  </Text>
                  <Column className="bg-white_A700 border border-gray_300 border-solid xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] items-center justify-center lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] rounded-radius4 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[85px]">
                    <Img
                      src="images/img_plus_1.svg"
                      className="plus4"
                      alt="plus Two"
                    />
                    <Text
                      className="xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] OneHundredThirtyFive"
                      variant="body9"
                    >
                      点击上传图片
                    </Text>
                  </Column>
                </Row>
                <Row className="items-start justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="rowtwothousandninehundredeightytwo"
                    variant="body8"
                  >
                    *上传标准案例
                  </Text>
                  <Column className="bg-white_A700 border border-dashed border-gray_300 items-center justify-start lg:p-[43px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] rounded-radius4 w-[76%]">
                    <Row className="items-center justify-center py-[3px] w-[43%]">
                      <Column className="items-center rounded-radius3 w-[34%]">
                        <Text className="columnthirtyseven" variant="body8">
                          点击上传
                        </Text>
                      </Column>
                      <Img
                        src="images/img_slash_16X16.svg"
                        className="slash"
                        alt="slash"
                      />
                      <Text
                        className="rowtwothousandtwohundredtwentysix"
                        variant="body8"
                      >
                        拖拽到此区域
                      </Text>
                    </Row>
                  </Column>
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
                    variant="FillBlueA400"
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

export default Page30;
