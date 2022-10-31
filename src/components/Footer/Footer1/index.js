import React from "react";

import { Row, Column, Text, Button, Img } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Row className="items-center justify-between w-[100%]">
          <Row className="bg-gray_54 items-start justify-between lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[58%]">
            <Column className="justify-start ml-[4px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:mt-[9px] w-[18%]">
              <Text
                className="TwoThousandFourHundredThirtyEight"
                variant="body8"
              >
                测试过程预览
              </Text>
              <div className="bg-gray_401 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center justify-start mr-[4px] lg:p-[44px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] rounded-radius4 w-[66%]"
              style={{ backgroundImage: "url('images/img_group535.png')" }}
            >
              <Button
                className="flex lg:h-[32px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[53px] items-center justify-center rounded-radius50 lg:w-[31px] xl:w-[39px] 2xl:w-[44px] 3xl:w-[52px]"
                size="lgIcn"
                variant="icbOutlineWhiteA700e51_2"
              >
                <Img
                  src="images/img_play_44X44.svg"
                  className="flex items-center justify-center"
                  alt="play"
                />
              </Button>
            </Column>
          </Row>
          <Row className="bg-gray_54 items-start justify-between lg:p-[10px] xl:p-[13px] 2xl:p-[15px] 3xl:p-[18px] rounded-radius8 w-[37%]">
            <Column className="justify-start ml-[4px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[30%]">
              <Text
                className="TwoThousandFourHundredThirtyEight"
                variant="body8"
              >
                测试报告预览
              </Text>
              <div className="bg-gray_401 xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 2xl:h-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[31%]"></div>
            </Column>
            <Img
              src="images/img_rectangle349.png"
              className="Rectangle3491"
              alt="Rectangle349"
            />
          </Row>
        </Row>
      </footer>
    </>
  );
};

export default Footer1;
