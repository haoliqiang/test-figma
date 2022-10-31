import React from "react";

import {
  Column,
  Row,
  Text,
  Img,
  Line,
  RadioGroup,
  Radio,
  Button,
} from "components";

const I12Page = () => {
  return (
    <>
      <Column className="bg-black_900_87 font-pingfangsc items-center justify-start mx-[auto] lg:p-[128px] xl:p-[160px] 2xl:p-[180px] 3xl:p-[216px] w-[100%]">
        <Column className="bg-white_A700 items-center justify-start lg:pt-[12px] xl:pt-[16px] 2xl:pt-[18px] 3xl:pt-[21px] rounded-radius10 w-[44%]">
          <Column className="items-center justify-start w-[100%]">
            <Row className="items-center justify-between py-[2px] w-[87%]">
              <Text className="rowtwohundredfortyseven" variant="body7">
                添加到测试集
              </Text>
              <Img
                src="images/img_close_1.svg"
                className="close2"
                alt="close"
              />
            </Row>
            <Column className="items-center justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
              <Column className="justify-start w-[100%]">
                <Line className="bg-gray_202 h-[1px] w-[100%]" />
                <Text className="columnrectangle281" variant="body9">
                  请选择测试集
                </Text>
              </Column>
            </Column>
          </Column>
          <Row className="bg-white_A700 items-center lg:mt-[11px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pl-[4px] py-[4px] rounded-radius4 w-[87%]">
            <Img
              src="images/img_caretdownsmal.svg"
              className="arrowleft"
              alt="caretdownsmal"
            />
            <Row className="items-center lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] w-[96%]">
              <Img src="images/img_user.svg" className="user" alt="user" />
              <Text className="rowuser" variant="body8">
                我的测试集
              </Text>
              <Img src="images/img_plus.svg" className="plus" alt="plus" />
            </Row>
          </Row>
          <RadioGroup
            selectedValue="20220804"
            className="w-[87%]"
            name="radiogrouptwohundredfiftyeight"
          >
            <Radio
              value="undefined"
              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_701 w-[100%]"
              inputClassName="h-[16px] mr-[5px] w-[16px]"
              checked={false}
              name="radiogrouptwohundredfiftyeight"
              label=""
              size="md"
              variant="OutlineGray402"
            ></Radio>
            <Radio
              value="20220804"
              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_701 w-[100%]"
              inputClassName="h-[16px] mr-[5px] w-[16px]"
              checked={true}
              name="radiogrouptwohundredfiftyeight"
              label="20220804"
              shape="RoundedBorder8"
              size="md"
              variant="OutlineBlueA401"
            ></Radio>
            <Radio
              value="ApolloV5"
              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_701 w-[100%]"
              inputClassName="h-[16px] mr-[5px] w-[16px]"
              checked={false}
              name="radiogrouptwohundredfiftyeight"
              label="Apollo V5"
              size="lg"
              variant="OutlineGray402"
            ></Radio>
            <Radio
              value="2022822"
              className="font-normal not-italic xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] lg:text-[9px] text-gray_701 w-[100%]"
              inputClassName="h-[16px] mr-[5px] w-[16px]"
              checked={false}
              name="radiogrouptwohundredfiftyeight"
              label=" 2022822"
              size="md"
              variant="OutlineGray402"
            ></Radio>
          </RadioGroup>
          <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pl-[4px] py-[4px] rounded-radius4 w-[87%]">
            <Img src="images/img_play.svg" className="arrowleft" alt="play" />
            <Row className="items-center lg:my-[5px] xl:my-[7px] 2xl:my-[8px] 3xl:my-[9px] w-[96%]">
              <Img
                src="images/img_calculator.svg"
                className="user"
                alt="calculator"
              />
              <Text className="rowuser" variant="body8">
                企业测试集
              </Text>
              <Img src="images/img_plus.svg" className="plus" alt="plus One" />
            </Row>
          </Row>
          <Column className="bg-white_A700 items-center justify-start 3xl:mt-[111px] lg:mt-[66px] xl:mt-[82px] 2xl:mt-[93px] lg:pb-[11px] xl:pb-[14px] 2xl:pb-[16px] 3xl:pb-[19px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
            <Column className="justify-start w-[100%]">
              <Line className="bg-gray_202 h-[1px] w-[100%]" />
              <Row className="items-center justify-end ml-[auto] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[34%]">
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
    </>
  );
};

export default I12Page;
