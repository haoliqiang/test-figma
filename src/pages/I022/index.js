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
} from "components";
import Header8 from "components/Header/Header8";
import Sidebar6 from "components/Sidebar/Sidebar6";

const I022Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Header8 className="w-[100%]" />
          <Row className="font-alibabapuhuiti1 items-start justify-evenly w-[98%]">
            <Sidebar6 className="w-[20%]" />
            <Column className="font-pingfangsc justify-start w-[80%]">
              <Column className="items-center justify-start lg:pl-[18px] xl:pl-[23px] 2xl:pl-[26px] 3xl:pl-[31px] lg:pt-[18px] xl:pt-[23px] 2xl:pt-[26px] 3xl:pt-[31px] w-[100%]">
                <Column className="justify-start w-[99%]">
                  <Row className="items-start w-[18%]">
                    <Row className="items-start justify-evenly w-[53%]">
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        资源库
                      </Text>
                      <Img
                        src="images/img_checkmark_3.svg"
                        className="checkmark2"
                        alt="checkmark"
                      />
                      <Text className="FiveHundredFiftyTwo" variant="body9">
                        被测算法
                      </Text>
                    </Row>
                    <Img
                      src="images/img_checkmark_3.svg"
                      className="checkmark"
                      alt="checkmark One"
                    />
                    <Text className="SevenHundredSeventyNine" variant="body9">
                      新建被测算法
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
                  新建被测算法
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
                <Row className="items-center justify-between lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-radius4 w-[100%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    * 版本
                  </Text>
                  <Input
                    className="placeholder:text-bluegray_200 Group246"
                    wrapClassName="w-[76%]"
                    name="Group251 One"
                    placeholder="请输入版本"
                    shape="RoundedBorder4"
                    size="md"
                  ></Input>
                </Row>
                <Row className="items-center lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] py-[2px] w-[73%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    *导入类型
                  </Text>
                  <RadioGroup
                    selectedValue="undefined"
                    className="flex 3xl:ml-[110px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[92px] w-[68%]"
                    name="radiogroupfivethousandsevenhundredsixtyeight"
                  >
                    <Radio
                      value="undefined"
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={true}
                      name="radiogroupfivethousandsevenhundredsixtyeight"
                      label=""
                      shape="RoundedBorder8"
                      variant="OutlineBlueA400"
                    ></Radio>
                    <Radio
                      value="undefined1"
                      className="font-normal lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={false}
                      name="radiogroupfivethousandsevenhundredsixtyeight"
                      label="undefined1"
                    ></Radio>
                    <Radio
                      value="docker"
                      className="font-normal lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={false}
                      name="radiogroupfivethousandsevenhundredsixtyeight"
                      label="docker"
                    ></Radio>
                  </RadioGroup>
                </Row>
                <Row className="items-start justify-between lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                  <Text
                    className="rowtwothousandninehundredeightytwo"
                    variant="body8"
                  >
                    *文件包上传
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
                <Text
                  className="font-normal lg:leading-[15px] xl:leading-[19px] 2xl:leading-[22px] 3xl:leading-[26px] lg:ml-[111px] xl:ml-[139px] 2xl:ml-[157px] 3xl:ml-[188px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] not-italic text-bluegray_200 w-[75%]"
                  variant="body9"
                >
                  <span className="text-bluegray_200 font-pingfangsc lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    编译型算法说明：文件包根目录编译脚本build.sh,安装脚本install.sh,启动脚本start.sh,demo包参考demo.zip.参考说明：
                  </span>
                  <span className="text-blue_A400 font-pingfangsc underline lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                    http://***.com/cs/api.html.
                  </span>
                </Text>
                <Row className="items-center lg:mt-[32px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] py-[2px] w-[53%]">
                  <Text
                    className="font-medium text-bluegray_500 w-[auto]"
                    variant="body8"
                  >
                    *运行环境
                  </Text>
                  <RadioGroup
                    selectedValue="Linux"
                    className="flex 3xl:ml-[110px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[92px] w-[56%]"
                    name="radiogrouplinux"
                  >
                    <Radio
                      value="Linux"
                      className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={true}
                      name="radiogrouplinux"
                      label="Linux"
                      shape="RoundedBorder8"
                      variant="OutlineBlueA400"
                    ></Radio>
                    <Radio
                      value="windows"
                      className="font-normal lg:ml-[39px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-bluegray_800"
                      inputClassName="h-[16px] mr-[5px] w-[16px]"
                      checked={false}
                      name="radiogrouplinux"
                      label="windows"
                    ></Radio>
                  </RadioGroup>
                </Row>
                <Row className="items-start justify-between lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[100%]">
                  <Text
                    className="rowfivethousandsevenhundredseventythree"
                    variant="body8"
                  >
                    *描述
                  </Text>
                  <Row className="bg-white_A700 border border-gray_300 border-solid items-start lg:p-[5px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius4 w-[76%]">
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
                    *启动命令入口
                  </Text>
                  <Input
                    className="placeholder:text-bluegray_200 Group246"
                    wrapClassName="w-[76%]"
                    name="Group255"
                    placeholder="请输入启动命令入口"
                    shape="RoundedBorder4"
                    size="md"
                  ></Input>
                </Row>
                <Row className="items-center lg:ml-[110px] xl:ml-[138px] 2xl:ml-[156px] 3xl:ml-[187px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[21%]">
                  <Button
                    className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillGray201"
                  >
                    取消
                  </Button>
                  <Button
                    className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[44%]"
                    shape="RoundedBorder4"
                    size="md"
                    variant="FillBlueA400"
                  >
                    确认
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

export default I022Page;
