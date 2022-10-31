import React from "react";

import { Row, Column, Img, Text, Line } from "components";

const Sidebar2 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Row className="bg-white_A700 items-start justify-end lg:pl-[19px] xl:pl-[24px] 2xl:pl-[27px] 3xl:pl-[32px] w-[100%]">
            <Column className="justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[96%]">
              <Row className="bg-white_A700 items-center p-[2px] rounded-radius4 w-[95%]">
                <Img
                  src="images/img_caretdownsmal_16X16.svg"
                  className="arrowleft"
                  alt="caretdownsmal"
                />
                <Img
                  src="images/img_clock_4.svg"
                  className="user4"
                  alt="clock"
                />
                <Text className="rowclock4" variant="body8">
                  我的测试集
                </Text>
                <Img
                  src="images/img_icon_16X16.svg"
                  className="plus8"
                  alt="icon"
                />
              </Row>
              <Row className="items-center justify-end ml-[auto] mt-[3px] w-[81%]">
                <Column className="bg-white_A700 border border-gray_300 border-solid 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[73%]">
                  <Text
                    className="bg-blue_100 font-normal font-pingfangsc ml-[2px] not-italic py-[2px] text-bluegray_800 w-[84px]"
                    variant="body8"
                  >
                    未命名文件夹
                  </Text>
                </Column>
                <Img
                  src="images/img_frame.svg"
                  className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] close5"
                  alt="Frame"
                />
                <Img
                  src="images/img_checkmark_6.svg"
                  className="lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] arrowleft"
                  alt="checkmark"
                />
              </Row>
              <Row className="bg-white_A700 items-center mt-[3px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[95%]">
                <div className="bg-bluegray_500 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="rowellipseten9" variant="body8">
                  故障案例 2022-8-22
                </Text>
              </Row>
              <Row className="items-center lg:ml-[28px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[45%]">
                <Column className="bg-blue_A400_66 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] items-center px-[2px] rounded-radius50 lg:w-[5px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]">
                  <div className="bg-blue_A400 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                </Column>
                <Text
                  className="font-pingfangsc font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] text-blue_A400 w-[auto]"
                  variant="body8"
                >
                  20220804测试
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[95%]">
                <div className="bg-bluegray_500 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[22px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text
                  className="font-pingfangsc lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] columnapollovfiftyfive"
                  variant="body8"
                >
                  Apollo V5极端路况测试
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] rounded-radius4 w-[95%]">
                <div className="bg-bluegray_500 lg:h-[3px] xl:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] rounded-radius50 lg:w-[2px] xl:w-[3px] 3xl:w-[4px] 2xl:w-[4px]"></div>
                <Text className="rowellipseten9" variant="body8">
                  入门引导
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] p-[2px] rounded-radius4 w-[95%]">
                <Img
                  src="images/img_play_16X16.svg"
                  className="arrowleft"
                  alt="play"
                />
                <Img src="images/img_car.svg" className="user4" alt="car" />
                <Text className="rowclock4" variant="body8">
                  企业测试集
                </Text>
                <Img
                  src="images/img_icon_16X16.svg"
                  className="plus8"
                  alt="icon One"
                />
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] p-[2px] rounded-radius4 w-[95%]">
                <Img
                  src="images/img_play_16X16.svg"
                  className="arrowleft"
                  alt="play One"
                />
                <Img
                  src="images/img_computer_20X20.svg"
                  className="user4"
                  alt="computer"
                />
                <Text className="rowclock4" variant="body8">
                  标准案例库
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] p-[2px] rounded-radius4 w-[95%]">
                <Img
                  src="images/img_play_16X16.svg"
                  className="arrowleft"
                  alt="play Two"
                />
                <Img
                  src="images/img_folder_20X20.svg"
                  className="user4"
                  alt="folder"
                />
                <Text className="rowclock4" variant="body8">
                  可信赖案例库
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_201 3xl:h-[1004px] lg:h-[595px] xl:h-[744px] 2xl:h-[837px] lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1px]" />
          </Row>
        </div>
      </aside>
    </>
  );
};

export default Sidebar2;
