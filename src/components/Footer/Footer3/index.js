import React from "react";

import { Column, Row, Text, Img, Line } from "components";

const Footer3 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="justify-start lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[100%]">
          <Row className="items-start lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[85%]">
            <Column className="items-center justify-start mt-[2px] w-[2%]">
              <Text
                className="TwoThousandFourHundredThirtyEight"
                variant="body9"
              >
                案例
              </Text>
            </Column>
            <Text
              className="lg:ml-[224px] xl:ml-[281px] 2xl:ml-[316px] 3xl:ml-[379px] rowfivethousandonehundredfiftyfour"
              variant="body9"
            >
              任务状态
            </Text>
            <Row className="items-start justify-center lg:ml-[102px] xl:ml-[128px] 2xl:ml-[144px] 3xl:ml-[172px] w-[5%]">
              <Text
                className="rowfivethousandonehundredfiftyfour"
                variant="body9"
              >
                发现事故
              </Text>
              <Img
                src="images/img_filter_16X16.svg"
                className="arrowleft"
                alt="filter"
              />
            </Row>
            <Row className="items-start justify-center xl:ml-[113px] 2xl:ml-[128px] 3xl:ml-[153px] lg:ml-[91px] w-[5%]">
              <Text
                className="rowfivethousandonehundredfiftyfour"
                variant="body9"
              >
                完成时间
              </Text>
              <Img
                src="images/img_offer.svg"
                className="arrowleft"
                alt="offer"
              />
            </Row>
            <Row className="items-start justify-center lg:ml-[125px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] w-[5%]">
              <Text
                className="rowfivethousandonehundredfiftyfour"
                variant="body9"
              >
                运行时长
              </Text>
              <Img
                src="images/img_offer.svg"
                className="arrowleft"
                alt="offer One"
              />
            </Row>
            <Text
              className="xl:ml-[110px] 2xl:ml-[124px] 3xl:ml-[148px] lg:ml-[88px] rowfivethousandonehundredfiftyfour"
              variant="body9"
            >
              操作
            </Text>
          </Row>
          <Line className="bg-gray_201 h-[1px] lg:mt-[4px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] w-[100%]" />
        </Column>
      </footer>
    </>
  );
};

export default Footer3;
