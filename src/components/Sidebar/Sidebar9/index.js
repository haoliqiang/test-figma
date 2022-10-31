import React from "react";

import { Column, Row, Img, Text } from "components";

const Sidebar9 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-white_A700 items-center justify-start xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px] w-[100%]">
            <Row className="bg-white_A700 items-center justify-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
              <Img src="images/img_car_1.svg" className="computer" alt="car" />
              <Text className="rowsettings" variant="body8">
                被测车辆管理
              </Text>
            </Row>
            <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
              <Img
                src="images/img_music_20X20.svg"
                className="computer"
                alt="music"
              />
              <Text className="rowlightbulb" variant="body8">
                传感器
              </Text>
            </Row>
            <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
              <Img src="images/img_mail.svg" className="computer" alt="mail" />
              <Text className="rowmail" variant="body8">
                主车模型
              </Text>
            </Row>
            <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
              <Img
                src="images/img_location_20X20.svg"
                className="computer"
                alt="location"
              />
              <Text
                className="font-alibabapuhuiti1 font-normal xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] lg:mr-[102px] xl:mr-[128px] 2xl:mr-[144px] 3xl:mr-[172px] text-blue_A400 w-[auto]"
                variant="body8"
              >
                地图
              </Text>
            </Row>
            <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
              <Img
                src="images/img_settings.svg"
                className="computer"
                alt="settings"
              />
              <Text className="rowlightbulb" variant="body8">
                动力学
              </Text>
            </Row>
            <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
              <Img
                src="images/img_share_20X20.svg"
                className="computer"
                alt="share"
              />
              <Text className="rowlocation" variant="body8">
                环境
              </Text>
            </Row>
            <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
              <Img
                src="images/img_download.svg"
                className="computer"
                alt="download"
              />
              <Text className="rowmail" variant="body8">
                被测算法
              </Text>
            </Row>
            <Row className="bg-white_A700 items-center justify-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
              <Img
                src="images/img_contrast_1.svg"
                className="computer"
                alt="contrast"
              />
              <Text className="rowplus" variant="body8">
                被测工控机
              </Text>
            </Row>
            <Row className="bg-white_A700 items-center justify-center lg:mb-[253px] xl:mb-[316px] 2xl:mb-[356px] 3xl:mb-[427px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius4 w-[91%]">
              <Img
                src="images/img_settings_1.svg"
                className="computer"
                alt="settings One"
              />
              <Text className="rowsettings" variant="body8">
                被测域控制器
              </Text>
            </Row>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar9;
