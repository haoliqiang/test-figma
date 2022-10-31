import React from "react";

import { Row, Column, Img, Text, Line } from "components";

const Sidebar3 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Row className="bg-white_A700 items-start justify-between lg:pl-[13px] xl:pl-[16px] 2xl:pl-[19px] 3xl:pl-[22px] w-[100%]">
            <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[92%]">
              <Row className="items-center justify-evenly w-[100%]">
                <Column className="bg-blue_A400_66 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] items-center px-[2px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]">
                  <div className="bg-blue_A400 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                </Column>
                <Row className="bg-white_A700 items-center lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[97%]">
                  <Img
                    src="images/img_file_3.svg"
                    className="clock13"
                    alt="file"
                  />
                  <Text
                    className="font-pingfangsc font-semibold lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] text-blue_A400 w-[auto]"
                    variant="body8"
                  >
                    个人信息
                  </Text>
                </Row>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius4 w-[97%]">
                <Img src="images/img_car.svg" className="clock13" alt="car" />
                <Text className="rowclock4" variant="body8">
                  安全设置
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_201 3xl:h-[1004px] lg:h-[595px] xl:h-[744px] 2xl:h-[837px] w-[1px]" />
          </Row>
        </div>
      </aside>
    </>
  );
};

export default Sidebar3;
