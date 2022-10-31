import React from "react";

import { Row, Column, Img, Text, Stack, Line } from "components";

const Sidebar7 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Row className="bg-white_A700 items-start justify-end lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] w-[100%]">
            <Column className="items-center justify-start xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[91%]">
              <Row className="bg-white_A700 items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[100%]">
                <Img
                  src="images/img_car_3.svg"
                  className="computer"
                  alt="car"
                />
                <Text className="rowcar5" variant="body8">
                  被测车辆管理
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[100%]">
                <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] w-[9%]">
                  <Img
                    src="images/img_car_3.svg"
                    className="car"
                    alt="car One"
                  />
                  <Img
                    src="images/img_upload_2.svg"
                    className="upload"
                    alt="upload"
                  />
                </Stack>
                <Text className="rowcar5" variant="body8">
                  传感器
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[100%]">
                <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] w-[9%]">
                  <Img
                    src="images/img_car_3.svg"
                    className="car"
                    alt="car Two"
                  />
                  <Img
                    src="images/img_airplane_20X20.svg"
                    className="upload"
                    alt="airplane"
                  />
                </Stack>
                <Text className="rowcar5" variant="body8">
                  主车模型
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius4 w-[100%]">
                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] w-[9%]">
                  <Img
                    src="images/img_car_3.svg"
                    className="car"
                    alt="car Three"
                  />
                  <Stack className="bg-white_A700 px-[1px] upload">
                    <Img
                      src="images/img_location_18X18.svg"
                      className="location"
                      alt="location"
                    />
                  </Stack>
                </Stack>
                <Text className="rowcar5" variant="body8">
                  地图
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[100%]">
                <Stack
                  className="bg-cover bg-repeat computer"
                  style={{ backgroundImage: "url('images/img_car_3.svg')" }}
                >
                  <Img
                    src="images/img_lightbulb.svg"
                    className="lightbulb"
                    alt="lightbulb"
                  />
                </Stack>
                <Text className="rowcar5" variant="body8">
                  动力学
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:p-[4px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius4 w-[100%]">
                <Stack className="lg:h-[17px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[28px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] mt-[3px] w-[9%]">
                  <Img
                    src="images/img_car_3.svg"
                    className="car"
                    alt="car Four"
                  />
                  <Stack className="bg-white_A700 upload">
                    <Img
                      src="images/img_frame_20X20.svg"
                      className="lightbulb"
                      alt="Frame"
                    />
                  </Stack>
                </Stack>
                <Text className="rowcar5" variant="body8">
                  环境
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[100%]">
                <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] w-[9%]">
                  <Img
                    src="images/img_car_3.svg"
                    className="car"
                    alt="car Five"
                  />
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="upload"
                    alt="mail"
                  />
                </Stack>
                <Text className="rowcar5" variant="body8">
                  被测算法
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[100%]">
                <Stack
                  className="bg-cover bg-repeat computer"
                  style={{ backgroundImage: "url('images/img_car_3.svg')" }}
                >
                  <Img
                    src="images/img_plus_7.svg"
                    className="lightbulb"
                    alt="plus"
                  />
                </Stack>
                <Text className="rowcar_five" variant="body8">
                  被测工控机
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[100%]">
                <Stack
                  className="bg-cover bg-repeat computer"
                  style={{ backgroundImage: "url('images/img_car_3.svg')" }}
                >
                  <Img
                    src="images/img_settings_2.svg"
                    className="lightbulb"
                    alt="settings"
                  />
                </Stack>
                <Text className="rowcar5" variant="body8">
                  被测域控制器
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_101 3xl:h-[1004px] lg:h-[595px] xl:h-[744px] 2xl:h-[837px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] w-[1px]" />
          </Row>
        </div>
      </aside>
    </>
  );
};

export default Sidebar7;
