import React from "react";

import { Row, Line, Column, Text, Stack, Button, Img } from "components";

const RowTen = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Row className="items-center lg:pr-[138px] xl:pr-[173px] 2xl:pr-[195px] 3xl:pr-[234px] w-[28%]">
          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[21%]">
            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
          </Column>
          <Column className="items-center rounded-radius4 w-[75%]">
            <Row className="items-end justify-between w-[100%]">
              <Column
                className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                style={{ backgroundImage: "url('images/img_group777.png')" }}
              >
                <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
              </Column>
              <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                <Text className="rowonethousandseventy" variant="body9">
                  道路左转
                </Text>
                <Text className="TwoThousandEightHundredFour" variant="body9">
                  具体场景故障案例
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
        <Row className="items-center justify-evenly w-[100%]">
          <Stack className="lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] w-[100%]">
            <Button
              className="absolute font-normal font-pingfangsc h-[max-content] inset-y-[0] my-[auto] not-italic right-[1%] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[8%]"
              shape="RoundedBorder4"
              size="md"
              variant="FillBlueA400"
            >
              添加到测试集
            </Button>
            <Stack className="absolute lg:h-[46px] xl:h-[57px] 2xl:h-[65px] 3xl:h-[77px] lg:pr-[105px] xl:pr-[131px] 2xl:pr-[148px] 3xl:pr-[177px] w-[100%]">
              <Column className="absolute bg-white_A700 items-center justify-start left-[0] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[3%]">
                <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
              </Column>
              <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] lg:pl-[5px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] w-[86%]">
                <Column className="items-center xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] rounded-radius4 w-[12%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Column
                      className="bg-cover bg-repeat lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] items-center justify-start rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"
                      style={{
                        backgroundImage: "url('images/img_group777.png')",
                      }}
                    >
                      <div className="bg-bluegray_800_63 lg:h-[29px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius4 lg:w-[28px] xl:w-[35px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                    </Column>
                    <Column className="justify-start mb-[2px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[66%]">
                      <Text className="rowonethousandseventy" variant="body9">
                        道路左转
                      </Text>
                      <Text
                        className="TwoThousandEightHundredFour"
                        variant="body9"
                      >
                        具体场景故障案例
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Text
                  className="ThreeThousandSixHundredEightyThree"
                  variant="body9"
                >
                  已完成
                </Text>
                <Text className="One_Seven" variant="body9">
                  <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    压线
                  </span>
                  <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    1
                  </span>
                  <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    次
                  </span>
                </Text>
                <Text className="language_Four1" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="time_Three" variant="body9">
                  1:23
                </Text>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[115px] xl:ml-[145px] 2xl:ml-[163px] 3xl:ml-[195px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center"
                    alt="Vector Three"
                  />
                </Button>
              </Row>
            </Stack>
          </Stack>
        </Row>
        <Row className="items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[14%]">
          <Text className="ThreeThousandSixHundredEightyThree" variant="body9">
            已完成
          </Text>
        </Row>
        <Row className="items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[14%]">
          <Text className="One_Seven" variant="body9">
            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
              压线
            </span>
            <span className="text-bluegray_800 font-alibabapuhuiti lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
              1
            </span>
            <span className="text-bluegray_800 lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
              次
            </span>
          </Text>
        </Row>
        <Row className="items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[17%]">
          <Text className="language_Four1" variant="body9">
            2022-08-12 20:23:12
          </Text>
        </Row>
        <Row className="items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[14%]">
          <Text className="time_Three" variant="body9">
            1:23
          </Text>
        </Row>
      </Row>
    </>
  );
};

export default RowTen;
