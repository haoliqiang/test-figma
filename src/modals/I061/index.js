import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line, List, Input, Button } from "components";

const I061Modal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[100%]"
        overlayClassName="bg-gray_900_90 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-end 2xl:p-[111px] 3xl:p-[133px] lg:p-[78px] xl:p-[98px] rounded-radius10 w-[100%]">
            <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[79%]">
              <Row className="items-end justify-between w-[93%]">
                <Column className="justify-end pr-[3px] py-[3px] w-[46%]">
                  <Text className="OneHundredFiftyThree" variant="body7">
                    添加测试案例
                  </Text>
                </Column>
                <Img
                  src="images/img_close_1.svg"
                  className="common-pointer close6"
                  onClick={props.onRequestClose}
                  alt="close"
                />
              </Row>
              <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
                <Line className="bg-gray_202 h-[1px] w-[100%]" />
                <Row className="items-start justify-between mt-[2px] w-[97%]">
                  <Column className="bg-white_A700 border border-gray_202 border-solid items-center justify-start lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] p-[1px] rounded-radius8 w-[97%]">
                    <Row className="items-start justify-between w-[96%]">
                      <Column className="justify-start lg:mt-[14px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[48%]">
                        <Text
                          className="columnonethousandfourhundredfortynine"
                          variant="body9"
                        >
                          测试案例
                        </Text>
                        <List
                          className="gap-[0] min-h-[auto] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="listuser">
                            <Img
                              src="images/img_user.svg"
                              className="user4"
                              alt="user"
                            />
                            <Text className="rowuser" variant="body8">
                              我的测试集
                            </Text>
                            <Text
                              className="OneThousandFourHundredFortyOne"
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
                          <Row className="listuser">
                            <Img
                              src="images/img_calculator.svg"
                              className="user4"
                              alt="calculator"
                            />
                            <Text className="rowuser" variant="body8">
                              企业测试集
                            </Text>
                            <Text
                              className="OneThousandFourHundredFortyOne"
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
                          <Row className="listuser">
                            <Img
                              src="images/img_calculator.svg"
                              className="user4"
                              alt="calculator One"
                            />
                            <Text className="rowuser" variant="body8">
                              标准案例库
                            </Text>
                            <Text
                              className="OneThousandFourHundredFortyOne"
                              variant="body9"
                            >
                              下级
                            </Text>
                            <Img
                              src="images/img_arrowright_1.svg"
                              className="arrowright2"
                              alt="arrowright Two"
                            />
                          </Row>
                          <Row className="listuser">
                            <Img
                              src="images/img_calculator.svg"
                              className="user4"
                              alt="calculator Two"
                            />
                            <Text className="rowuser" variant="body8">
                              可信赖案例库
                            </Text>
                            <Text
                              className="lg:ml-[184px] xl:ml-[231px] 2xl:ml-[260px] 3xl:ml-[312px] rowsixteen_four"
                              variant="body9"
                            >
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
        </div>
      </ModalProvider>
    </>
  );
};

export { I061Modal };
