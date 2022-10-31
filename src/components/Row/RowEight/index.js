import React from "react";

import { Row, Line, Column, Text, Stack, Button, Img } from "components";

const RowEight = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Row className="items-center lg:pr-[138px] xl:pr-[173px] 2xl:pr-[195px] 3xl:pr-[234px] w-[28%]">
          <Column className="bg-white_A700 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[21%]">
            <div className="bg-white_A700 border border-bluegray_100 border-solid rounded-radius2 arrowleft"></div>
          </Column>
          <Column className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] rounded-radius4 w-[75%]">
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
              <Row className="absolute h-[max-content] inset-y-[0] items-center left-[3%] my-[auto] pl-[1px] pt-[1px] w-[86%]">
                <Column className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[7px] xl:my-[9px] rounded-radius4 w-[12%]">
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
                  className="ThreeThousandSixHundredSixtySeven"
                  variant="body9"
                >
                  运行中
                </Text>
                <Text className="One_Three" variant="body9">
                  --
                </Text>
                <Text className="test_20220812202_Three" variant="body9">
                  --
                </Text>
                <Text className="OneHundredTwentyThree_Three" variant="body9">
                  --
                </Text>
                <Button
                  className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:ml-[123px] xl:ml-[153px] 2xl:ml-[173px] 3xl:ml-[207px] lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                  shape="icbRoundedBorder3"
                  size="mdIcn"
                  variant="icbFillGray54"
                >
                  <Img
                    src="images/img_vector_1.svg"
                    className="flex items-center justify-center"
                    alt="Vector One"
                  />
                </Button>
              </Row>
            </Stack>
          </Stack>
        </Row>
        <Row className="items-center justify-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[14%]">
          <Text className="ThreeThousandSixHundredSixtySeven" variant="body9">
            运行中
          </Text>
        </Row>
        <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[14%]">
          <Text className="One_Three" variant="body9">
            --
          </Text>
        </Row>
        <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[17%]">
          <Text className="test_20220812202_Three" variant="body9">
            --
          </Text>
        </Row>
        <Row className="items-center justify-center xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] lg:p-[9px] w-[14%]">
          <Text className="OneHundredTwentyThree_Three" variant="body9">
            --
          </Text>
        </Row>
      </Row>
    </>
  );
};

export default RowEight;
