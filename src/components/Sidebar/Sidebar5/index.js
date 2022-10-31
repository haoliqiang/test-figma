import React from "react";

import { Row, Column, Img, Text, Stack, Line } from "components";

const Sidebar5 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Row className="items-start w-[100%]">
            <Column className="bg-white_A700 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
              <Row className="bg-white_A700 items-center justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
                <Img
                  src="images/img_computer_1.svg"
                  className="computer"
                  alt="computer"
                />
                <Text className="rowcomputer" variant="body8">
                  被测车辆管理
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[91%]">
                <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] w-[9%]">
                  <Img src="images/img_car_3.svg" className="car" alt="car" />
                  <Img
                    src="images/img_upload_2.svg"
                    className="upload"
                    alt="upload"
                  />
                </Stack>
                <Text className="rowcar" variant="body8">
                  传感器
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[91%]">
                <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] w-[9%]">
                  <Img
                    src="images/img_car_3.svg"
                    className="car"
                    alt="car One"
                  />
                  <Img
                    src="images/img_airplane_20X20.svg"
                    className="upload"
                    alt="airplane"
                  />
                </Stack>
                <Text className="rowcar_one" variant="body8">
                  主车模型
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
                <Column
                  className="bg-cover bg-repeat items-center computer"
                  style={{ backgroundImage: "url('images/img_car_3.svg')" }}
                >
                  <Stack className="bg-white_A700 px-[1px] user">
                    <Img
                      src="images/img_location_18X18.svg"
                      className="location"
                      alt="location"
                    />
                  </Stack>
                </Column>
                <Text className="rowlocation" variant="body8">
                  地图
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
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
                <Text className="rowlightbulb" variant="body8">
                  动力学
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
                <Column
                  className="bg-cover bg-repeat items-center computer"
                  style={{ backgroundImage: "url('images/img_car_3.svg')" }}
                >
                  <Stack className="bg-white_A700 user">
                    <Img
                      src="images/img_frame_20X20.svg"
                      className="lightbulb"
                      alt="Frame"
                    />
                  </Stack>
                </Column>
                <Text className="rowlocation" variant="body8">
                  环境
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] rounded-radius4 w-[91%]">
                <Stack className="lg:h-[15px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] w-[9%]">
                  <Img
                    src="images/img_car_3.svg"
                    className="car"
                    alt="car Two"
                  />
                  <Img
                    src="images/img_mail_20X20.svg"
                    className="upload"
                    alt="mail"
                  />
                </Stack>
                <Text className="rowcar_one" variant="body8">
                  被测算法
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
                <Stack
                  className="bg-cover bg-repeat computer"
                  style={{ backgroundImage: "url('images/img_car_3.svg')" }}
                >
                  <Img
                    src="images/img_plus_6.svg"
                    className="lightbulb"
                    alt="plus"
                  />
                </Stack>
                <Text className="rowplus" variant="body8">
                  被测工控机
                </Text>
              </Row>
              <Row className="bg-white_A700 items-center justify-center lg:mb-[253px] xl:mb-[316px] 2xl:mb-[356px] 3xl:mb-[427px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
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
                <Text className="rowsettings" variant="body8">
                  被测域控制器
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_101 3xl:h-[1088px] lg:h-[645px] xl:h-[806px] 2xl:h-[907px] w-[1px]" />
          </Row>
        </div>
      </aside>
    </>
  );
};

export default Sidebar5;
