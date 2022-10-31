import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  Input,
  RadioGroup,
  Radio,
  Button,
  List,
  CheckBox,
  SelectBox,
} from "components";
import Header8 from "components/Header/Header8";
import Sidebar8 from "components/Sidebar/Sidebar8";

const I111Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header8 className="w-[100%]" />
          <Row className="font-alibabapuhuiti1 items-start justify-evenly w-[98%]">
            <Sidebar8 className="w-[20%]" />
            <Column className="font-pingfangsc justify-start w-[80%]">
              <Column className="items-center justify-start lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[100%]">
                <Column className="justify-start w-[99%]">
                  <Row className="items-start w-[22%]">
                    <Row className="items-start justify-evenly w-[52%]">
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        资源库
                      </Text>
                      <Img
                        src="images/img_checkmark_3.svg"
                        className="checkmark2"
                        alt="checkmark"
                      />
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        被测域控制器
                      </Text>
                    </Row>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark One"
                    />
                    <Text className="SevenHundredSeventyNine" variant="body9">
                      新建被测域控制器
                    </Text>
                  </Row>
                  <Line className="bg-gray_201 h-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                </Column>
              </Column>
              <Column className="justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[58%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  variant="body4"
                >
                  新建被测域控制器
                </Text>
                <Row className="items-center justify-between lg:mt-[31px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    * 名称
                  </Text>
                  <Input
                    className="placeholder:text-bluegray_200 Group246"
                    wrapClassName="w-[76%]"
                    name="Group251"
                    placeholder="请输入名称"
                    shape="RoundedBorder4"
                    size="md"
                  ></Input>
                </Row>
                <Row className="items-start lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] pt-[2px] w-[52%]">
                  <Text
                    className="rowfivethousandninehundredfortynine"
                    variant="body8"
                  >
                    *类型
                  </Text>
                  <RadioGroup
                    selectedValue="CyberRT"
                    className="flex xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[85px] w-[55%]"
                    name="radiogroupcyberrt"
                  >
                    <Radio
                      value="CyberRT"
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={true}
                      name="radiogroupcyberrt"
                      label="Cyber RT"
                      shape="RoundedBorder8"
                      variant="OutlineBlueA400"
                    ></Radio>
                    <Radio
                      value="ROS"
                      className="font-normal mb-[2px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={false}
                      name="radiogroupcyberrt"
                      label="ROS"
                    ></Radio>
                  </RadioGroup>
                </Row>
                <Row className="items-center justify-between lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    * DomainID
                  </Text>
                  <Row className="items-center justify-between w-[76%]">
                    <Input
                      className="placeholder:text-bluegray_200 Group246"
                      wrapClassName="w-[49%]"
                      name="Group2817"
                      placeholder="请输入DomainID"
                      shape="RoundedBorder4"
                      size="md"
                    ></Input>
                    <Button
                      className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                      shape="RoundedBorder4"
                      size="lg"
                      variant="FillBlueA400"
                    >
                      连接测试
                    </Button>
                    <Column className="bg-gray_54 items-center xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[19%]">
                      <Row className="items-start justify-center mt-[2px] w-[83%]">
                        <div className="bg-bluegray_203 mt-[2px] rounded-radius50 plus_One"></div>
                        <Text className="rowellipsenine_two" variant="body9">
                          连接状态
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Row>
                <Row className="items-start justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="rowtwothousandninehundredeightyone"
                    variant="body8"
                  >
                    *接入模块
                  </Text>
                  <Column className="bg-white_A700 border border-gray_300 border-solid items-center justify-start 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[76%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[99%]"
                      orientation="vertical"
                    >
                      <Column className="listfivethousandninehundredtwentyfive">
                        <CheckBox
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="SixThousandSeventyEight"
                          label="感知"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineBluegray1001_2"
                        ></CheckBox>
                        <SelectBox
                          className="font-normal lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_200 w-[95%]"
                          placeholderClassName="text-bluegray_200"
                          name="Group257"
                          placeholder="接入协议"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_2.svg"
                              className="lg:w-[11px] lg:h-[12px] lg:mr-[14px] xl:w-[14px] xl:h-[15px] xl:mr-[18px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[21px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[25px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder4"
                          size="lg"
                          variant="OutlineGray3001_2"
                        ></SelectBox>
                      </Column>
                      <Column className="listfivethousandninehundredtwentyfive">
                        <CheckBox
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="SixThousandSeventyNine"
                          label="融合"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineBluegray1001_2"
                        ></CheckBox>
                        <SelectBox
                          className="font-normal lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_200 w-[95%]"
                          placeholderClassName="text-bluegray_200"
                          name="Group257 One"
                          placeholder="接入协议"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_2.svg"
                              className="lg:w-[11px] lg:h-[12px] lg:mr-[14px] xl:w-[14px] xl:h-[15px] xl:mr-[18px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[21px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[25px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder4"
                          size="lg"
                          variant="OutlineGray3001_2"
                        ></SelectBox>
                      </Column>
                      <Column className="listfivethousandninehundredtwentyfive">
                        <CheckBox
                          className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                          inputClassName="h-[16px] mr-[5px] w-[16px]"
                          name="SixThousandEighty"
                          label="规划"
                          shape="RoundedBorder2"
                          size="sm"
                          variant="OutlineBluegray1001_2"
                        ></CheckBox>
                        <SelectBox
                          className="font-normal lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_200 w-[95%]"
                          placeholderClassName="text-bluegray_200"
                          name="Group257 Two"
                          placeholder="接入协议"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_2.svg"
                              className="lg:w-[11px] lg:h-[12px] lg:mr-[14px] xl:w-[14px] xl:h-[15px] xl:mr-[18px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[21px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[25px]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder4"
                          size="lg"
                          variant="OutlineGray3001_2"
                        ></SelectBox>
                      </Column>
                    </List>
                    <Column className="justify-start lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[99%]">
                      <Row className="items-center pr-[2px] py-[2px] w-[16%]">
                        <Column className="border border-bluegray_100 border-solid items-center rounded-radius2 arrowleft">
                          <Button
                            className="flex lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] items-center justify-center w-[100%]"
                            shape="icbRoundedBorder3"
                            size="smIcn"
                            variant="icbFillBlueA400"
                          >
                            <Img
                              src="images/img_checkmark_4.svg"
                              className="flex items-center justify-center"
                              alt="checkmark Two"
                            />
                          </Button>
                        </Column>
                        <Text className="rowcheckmark_two1" variant="body8">
                          控制
                        </Text>
                      </Row>
                      <SelectBox
                        className="font-normal lg:ml-[18px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800 w-[95%]"
                        placeholderClassName="text-bluegray_800"
                        name="Group257 Three"
                        placeholder="Cyber 标准协议"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_2.svg"
                            className="lg:w-[11px] lg:h-[12px] lg:mr-[14px] xl:w-[14px] xl:h-[15px] xl:mr-[18px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[21px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[25px]"
                            alt="arrow_down"
                          />
                        }
                        shape="RoundedBorder4"
                        size="xl"
                        variant="OutlineGray3001_2"
                      ></SelectBox>
                    </Column>
                  </Column>
                </Row>
                <Row className="items-start justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="rowfivethousandsevenhundredseventythree"
                    variant="body8"
                  >
                    *描述
                  </Text>
                  <Row className="bg-white_A700 border border-gray_300 border-solid items-start lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius4 w-[76%]">
                    <Column className="items-center justify-start lg:mb-[49px] xl:mb-[61px] 2xl:mb-[69px] 3xl:mb-[82px] ml-[4px] mt-[4px] w-[14%]">
                      <Text className="OneHundredThirtyFive" variant="body8">
                        请输入描述
                      </Text>
                    </Column>
                    <Text className="language20" variant="body8">
                      0{" "}
                    </Text>
                    <Text className="tips3" variant="body8">
                      /
                    </Text>
                    <Text className="tips_One1" variant="body8">
                      100
                    </Text>
                  </Row>
                </Row>
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    *其他控制接口
                  </Text>
                  <Input
                    className="placeholder:text-bluegray_200 Group246"
                    wrapClassName="w-[76%]"
                    name="Group255"
                    placeholder="请输入控制接口"
                    shape="RoundedBorder4"
                    size="md"
                  ></Input>
                </Row>
                <Text className="cscontrol" variant="body9">
                  详细接口参见cscontrol.py实例，参考说明：http://***.com/cs/cscontrolapi.html
                </Text>
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
                    确认新增
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

export default I111Page;
