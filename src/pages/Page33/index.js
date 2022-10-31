import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  CheckBox,
  List,
  Input,
  Button,
} from "components";

const Page33 = () => {
  return (
    <>
      <Column className="bg-black_900_87 font-pingfangsc items-center justify-start mx-[auto] 2xl:p-[110px] 3xl:p-[132px] lg:p-[78px] xl:p-[97px] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:pt-[12px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[21px] rounded-radius10 w-[79%]">
          <Row className="items-end justify-between w-[93%]">
            <Column className="justify-end pr-[3px] py-[3px] w-[46%]">
              <Text className="OneHundredFiftyThree" variant="body7">
                添加测试案例
              </Text>
            </Column>
            <Img src="images/img_close_1.svg" className="close6" alt="close" />
          </Row>
          <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
            <Line className="bg-gray_202 h-[1px] w-[100%]" />
            <Row className="items-start justify-between mt-[2px] w-[97%]">
              <Column className="bg-white_A700 border border-gray_202 border-solid items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] p-[1px] rounded-radius8 w-[97%]">
                <Row className="items-start justify-between w-[96%]">
                  <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[48%]">
                    <Row className="items-start ml-[4px] w-[31%]">
                      <Text className="OneHundredFiftyThree" variant="body9">
                        测试案例
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="checkmark"
                        alt="checkmark"
                      />
                      <Text className="OneHundredFiftyFour" variant="body9">
                        我的测试集
                      </Text>
                    </Row>
                    <Row className="bg-white_A700 items-center justify-end xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] p-[4px] rounded-radius4 w-[100%]">
                      <CheckBox
                        className="font-semibold 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_905"
                        inputClassName="h-[16px] mr-[5px] w-[16px]"
                        name="ThreeThousandThirtyEight"
                        label="入门引导"
                        shape="RoundedBorder2"
                        size="sm"
                        variant="OutlineGray4021_2"
                      ></CheckBox>
                      <Text
                        className="rowonethousandfourhundredfiftysix"
                        variant="body9"
                      >
                        下级
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="arrowright2"
                        alt="arrowright"
                      />
                    </Row>
                    <Row className="bg-white_A700 items-center justify-end p-[4px] rounded-radius4 w-[100%]">
                      <Column className="bg-blue_A401 items-center 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] px-[3px] rounded-radius2 arrowleft">
                        <div className="bg-white_A700 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] my-[4px] w-[100%]"></div>
                      </Column>
                      <Text className="rowuser" variant="body8">
                        20220804测试
                      </Text>
                      <Text
                        className="lg:ml-[176px] xl:ml-[220px] 2xl:ml-[248px] 3xl:ml-[297px] rowsixteen_four"
                        variant="body9"
                      >
                        下级
                      </Text>
                      <Img
                        src="images/img_arrowright_1.svg"
                        className="arrowright2"
                        alt="arrowright One"
                      />
                    </Row>
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="listapollovfive">
                        <CheckBox
                          className="font-semibold 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_905"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="ApolloVFive"
                          label="Apollo V5极端路况测"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray4021_2"
                        ></CheckBox>
                        <Text className="rowapollovfive" variant="body9">
                          下级
                        </Text>
                        <Img
                          src="images/img_arrowright_1.svg"
                          className="xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] arrowright2"
                          alt="arrowright Two"
                        />
                      </Row>
                      <Row className="justify-end listuser">
                        <CheckBox
                          className="font-semibold 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_905"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="0822"
                          label="故障案例 08-22"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineGray4021_2"
                        ></CheckBox>
                        <Text className="row0822" variant="body9">
                          下级
                        </Text>
                        <Img
                          src="images/img_arrowright_1.svg"
                          className="arrowright2"
                          alt="arrowright Three"
                        />
                      </Row>
                    </List>
                  </Column>
                  <Line className="bg-gray_202 lg:h-[359px] xl:h-[449px] 2xl:h-[505px] 3xl:h-[606px] w-[1px]" />
                  <Column className="items-center justify-start lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[48%]">
                    <Row className="items-start justify-between w-[100%]">
                      <Text
                        className="rowonethousandfourhundredfifty"
                        variant="body9"
                      >
                        已选
                      </Text>
                      <Img
                        src="images/img_trash_16X16.svg"
                        className="eye2"
                        alt="trash"
                      />
                    </Row>
                    <Input
                      className="placeholder:text-gray_905 Group285"
                      wrapClassName="2xl:mt-[13px] 3xl:mt-[15px] flex lg:mt-[9px] w-[100%] xl:mt-[11px]"
                      name="Group285"
                      placeholder="道路左传测试"
                      suffix={
                        <Img
                          src="images/img_close_1.svg"
                          className="mr-[2px] lg:w-[11px] lg:h-[12px] lg:ml-[24px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder4"
                      size="xl"
                      variant="FillGray105"
                    ></Input>
                    <Input
                      className="placeholder:text-gray_905 Group285"
                      wrapClassName="2xl:mt-[8px] 3xl:mt-[9px] flex lg:mt-[5px] w-[100%] xl:mt-[7px]"
                      name="Group286"
                      placeholder="道路左传测试"
                      suffix={
                        <Img
                          src="images/img_close_1.svg"
                          className="mr-[2px] lg:w-[11px] lg:h-[12px] lg:ml-[24px] xl:w-[14px] xl:h-[15px] xl:ml-[31px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[35px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[42px] my-[auto]"
                          alt="close"
                        />
                      }
                      shape="RoundedBorder4"
                      size="xl"
                      variant="FillGray105"
                    ></Input>
                  </Column>
                </Row>
              </Column>
              <Line className="bg-gray_205 xl:h-[114px] 2xl:h-[129px] 3xl:h-[154px] lg:h-[92px] rounded-radius3 w-[6px]" />
            </Row>
            <Column className="bg-white_A700 items-center justify-start lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Line className="bg-gray_202 h-[1px] w-[100%]" />
                <Row className="items-center justify-end ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[17%]">
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
                    确认添加
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

export default Page33;
