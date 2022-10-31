import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Line,
  Button,
  Input,
} from "components";
import Sidebar3 from "components/Sidebar/Sidebar3";

const Page68 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] w-[100%]">
        <Column className="items-center justify-start w-[100%]">
          <Row className="bg-blue_A400 items-center lg:p-[14px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] w-[100%]">
            <Row className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[98%]">
              <Row className="items-center w-[14%]">
                <Img
                  src="images/img_airplane.svg"
                  className="close5"
                  alt="airplane"
                />
                <Text className="rowairplane" variant="body7">
                  自动驾驶安全验证平台
                </Text>
              </Row>
              <Row className="items-center justify-center 3xl:ml-[103px] lg:ml-[61px] xl:ml-[76px] 2xl:ml-[86px] w-[35%]">
                <Text className="TwoThousandNinetySix" variant="body8">
                  首页
                </Text>
                <Text
                  className="ThreeThousandTwoHundredThirtySeven"
                  variant="body8"
                >
                  系统测试
                </Text>
                <Text className="TwoThousandSixHundredEighteen" variant="body8">
                  可信赖评估
                </Text>
                <Text className="TwoThousandSixHundredTwenty" variant="body8">
                  任务
                </Text>
                <Text className="TwoThousandSixHundredTwenty" variant="body8">
                  资源库
                </Text>
              </Row>
              <Row className="font-alibabapuhuiti items-start justify-between lg:ml-[231px] xl:ml-[289px] 2xl:ml-[325px] 3xl:ml-[390px] w-[21%]">
                <SelectBox
                  className="font-normal mt-[2px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[33%]"
                  placeholderClassName="text-white_A700"
                  name="FrameTen"
                  placeholder="Apollo-V5.5"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_16X16.svg"
                      className="mr-[0] lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                      alt="arrow_down"
                    />
                  }
                  size="sm"
                ></SelectBox>
                <Row className="font-pingfangsc items-start justify-center w-[45%]">
                  <Img
                    src="images/img_ellipse5.png"
                    className="rounded-radius50 user"
                    alt="EllipseFive"
                  />
                  <SelectBox
                    className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[78%]"
                    placeholderClassName="text-white_A700"
                    name="FrameNine"
                    placeholder="欢迎，王志杰"
                    isSearchable={false}
                    isMulti={false}
                    indicator={
                      <Img
                        src="images/img_arrowdown_16X16.svg"
                        className="mr-[0] lg:w-[11px] lg:h-[12px] xl:w-[14px] xl:h-[15px] 2xl:w-[16px] 2xl:h-[17px] 3xl:w-[19px] 3xl:h-[20px]"
                        alt="arrow_down"
                      />
                    }
                    size="sm"
                  ></SelectBox>
                </Row>
                <Img src="images/img_help.svg" className="help2" alt="help" />
              </Row>
            </Row>
          </Row>
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
              <Column className="justify-start lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[58%]">
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
                          src="images/img_user_2.svg"
                          className="flex items-center justify-center lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px]"
                          alt="user"
                        />
                      </Button>
                      <Column className="w-[66%]">
                        <Button
                          className="font-normal ml-[1px] not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-center w-[40%]"
                          shape="RoundedBorder4"
                          size="md"
                          variant="FillBlueA400"
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

export default Page68;
