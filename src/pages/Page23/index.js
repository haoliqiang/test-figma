import React from "react";

import { Column, Text, Line, Row, Img, List, Button, Stack } from "components";

const Page23 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc justify-start mx-[auto] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[9px] w-[100%]">
        <Column className="justify-start lg:mb-[58px] xl:mb-[73px] 2xl:mb-[82px] 3xl:mb-[98px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[74%]">
          <Column className="justify-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[99%]">
            <Text
              className="font-semibold lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] text-black_900_e5 w-[auto]"
              as="h5"
              variant="h5"
            >
              图标
            </Text>
            <Column className="justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] lg:mt-[19px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[59%]">
              <Text
                className="font-semibold text-black_900_e5 w-[auto]"
                variant="body5"
              >
                导航
              </Text>
              <Line className="bg-gray_200 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
            </Column>
            <Row className="items-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[9%]">
              <Img
                src="images/img_help_16X16.svg"
                className="mt-[2px] plus_One"
                alt="help"
              />
              <Img
                src="images/img_arrowdown_1.svg"
                className="xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] mt-[2px] plus_One"
                alt="arrowup"
              />
              <Img
                src="images/img_arrowdown_1.svg"
                className="xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] mt-[2px] plus_One"
                alt="arrowdown"
              />
              <Img
                src="images/img_arrowleft_16X16.svg"
                className="xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] mt-[4px] plus_One"
                alt="arrowleft"
              />
              <Img
                src="images/img_arrowright_16X16.svg"
                className="xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] mt-[3px] plus_One"
                alt="arrowright"
              />
              <Img
                src="images/img_.svg"
                className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] user6"
                alt="TwoThousandTwoHundredFortyEight"
              />
            </Row>
            <Column className="justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[59%]">
              <Text
                className="font-semibold text-black_900_e5 w-[auto]"
                variant="body5"
              >
                系统测试/资源库左侧导航栏
              </Text>
              <Line className="bg-gray_200 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
            </Column>
            <Row className="items-start lg:ml-[1px] 2xl:ml-[2px] xl:ml-[2px] 3xl:ml-[3px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] w-[62%]">
              <List
                className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[15px] 3xl:gap-[19px] grid grid-cols-[repeat(15,minmax(0,1fr))] min-h-[auto] w-[89%]"
                orientation="horizontal"
              >
                <Column className="listuser1">
                  <Img
                    src="images/img_user_20X20.svg"
                    className="user6"
                    alt="user"
                  />
                  <Img
                    src="images/img_contrast_20X20.svg"
                    className="contrast"
                    alt="contrast"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_car_20X20.svg"
                    className="user6"
                    alt="car"
                  />
                  <Img
                    src="images/img_music.svg"
                    className="contrast"
                    alt="music"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_laptop.svg"
                    className="user6"
                    alt="laptop"
                  />
                  <Img
                    src="images/img_videocamera_20X20.svg"
                    className="contrast"
                    alt="videocamera"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_upload_20X20.svg"
                    className="user6"
                    alt="upload"
                  />
                  <Img
                    src="images/img_upload_1.svg"
                    className="contrast"
                    alt="upload One"
                  />
                </Column>
                <Column className="listuser1">
                  <Img src="images/img_info.svg" className="user6" alt="info" />
                  <Img
                    src="images/img_television.svg"
                    className="contrast"
                    alt="television"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_user_1.svg"
                    className="user6"
                    alt="user One"
                  />
                  <Img
                    src="images/img_file_1.svg"
                    className="contrast"
                    alt="file"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_car_1.svg"
                    className="user6"
                    alt="car One"
                  />
                  <Img
                    src="images/img_car_2.svg"
                    className="contrast"
                    alt="car One"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_music_20X20.svg"
                    className="user6"
                    alt="music One"
                  />
                  <Img
                    src="images/img_music_1.svg"
                    className="contrast"
                    alt="music One"
                  />
                </Column>
                <Column className="listuser1">
                  <Img src="images/img_mail.svg" className="user6" alt="mail" />
                  <Img
                    src="images/img_property1.svg"
                    className="contrast"
                    alt="PropertyOne"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_location.svg"
                    className="user6"
                    alt="location"
                  />
                  <Img
                    src="images/img_location_20X20.svg"
                    className="contrast"
                    alt="location One"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_settings.svg"
                    className="user6"
                    alt="settings"
                  />
                  <Img
                    src="images/img_settings_20X20.svg"
                    className="contrast"
                    alt="settings One"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_share_20X20.svg"
                    className="user6"
                    alt="share"
                  />
                  <Img
                    src="images/img_volume.svg"
                    className="contrast"
                    alt="volume"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_contrast_1.svg"
                    className="user6"
                    alt="contrast One"
                  />
                  <Img
                    src="images/img_plus_20X20.svg"
                    className="contrast"
                    alt="plus"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_download.svg"
                    className="user6"
                    alt="download"
                  />
                  <Img
                    src="images/img_videocamera_1.svg"
                    className="contrast"
                    alt="videocamera One"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_settings_1.svg"
                    className="user6"
                    alt="settings One"
                  />
                  <Img
                    src="images/img_clock_20X20.svg"
                    className="contrast"
                    alt="clock"
                  />
                </Column>
              </List>
              <List
                className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[15px] 3xl:gap-[19px] grid grid-cols-2 min-h-[auto] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] w-[9%]"
                orientation="horizontal"
              >
                <Column className="listuser1">
                  <Img
                    src="images/img_plus_3.svg"
                    className="plus_One"
                    alt="plus One"
                  />
                  <Img
                    src="images/img_plus_4.svg"
                    className="mb-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] plus_One"
                    alt="plus One"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_trash_5.svg"
                    className="plus_One"
                    alt="trash"
                  />
                  <Img
                    src="images/img_upload_16X16.svg"
                    className="upload_One"
                    alt="upload One"
                  />
                </Column>
              </List>
            </Row>
            <Column className="justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[59%]">
              <Text
                className="font-semibold text-black_900_e5 w-[auto]"
                variant="body5"
              >
                可信赖评估
              </Text>
              <Line className="bg-gray_200 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
            </Column>
            <Row className="items-start lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[3%]">
              <Img
                src="images/img_ticket_17X16.svg"
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[9px] w-[23%]"
                alt="ticket"
              />
              <Img
                src="images/img_clock_17X16.svg"
                className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[9px] lg:ml-[1px] 2xl:ml-[2px] xl:ml-[2px] 3xl:ml-[3px] w-[23%]"
                alt="clock One"
              />
              <Img
                src="images/img_arrowright.svg"
                className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] plus_One"
                alt="arrowright One"
              />
            </Row>
            <Column className="justify-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[59%]">
              <Text
                className="font-semibold text-black_900_e5 w-[auto]"
                variant="body5"
              >
                列表
              </Text>
              <Line className="bg-gray_200 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
            </Column>
            <Img
              src="images/img_unfoldmore.svg"
              className="2xl:ml-[1px] xl:ml-[1px] lg:ml-[1px] 3xl:ml-[2px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] plus_One"
              alt="unfoldmore"
            />
            <Row className="items-start ml-[4px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[39%]">
              <List
                className="lg:gap-[11px] xl:gap-[14px] 2xl:gap-[15px] 3xl:gap-[19px] grid grid-cols-8 min-h-[auto] w-[80%]"
                orientation="horizontal"
              >
                <Column className="listuser1">
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_search.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="search"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_camera.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="camera"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_instagram.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="instagram"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_instagram.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="instagram One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_instagram.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="instagram Two"
                    />
                  </Button>
                </Column>
                <Column className="listuser1">
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_edit_2.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="edit"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_close_3.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="close"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_edit_3.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="edit One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_edit_3.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="edit Two"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_edit_3.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="edit Three"
                    />
                  </Button>
                </Column>
                <Column className="listuser1">
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_volume_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="volume One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_volume_1.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="volume One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_file_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="file One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_file_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="file One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_file_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="file Two"
                    />
                  </Button>
                </Column>
                <Column className="listuser1">
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_file_2.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="file Two"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_volume_2.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="volume Two"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_videocamera_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="videocamera Two"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_videocamera_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="videocamera One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_videocamera_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="videocamera Two"
                    />
                  </Button>
                </Column>
                <Column className="listuser1">
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_play_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="play"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_property1_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="PropertyOne One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_clock_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="clock Two"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_clock_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="clock One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_clock_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="clock Two"
                    />
                  </Button>
                </Column>
                <Column className="listuser1">
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_contrast_2.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="contrast Two"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_camera_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="camera One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_contrast_20X20.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="contrast One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_contrast_20X20.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="contrast Two"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_contrast_20X20.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="contrast Three"
                    />
                  </Button>
                </Column>
                <Column className="listuser1">
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_close_4.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="close One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_close_5.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="close One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_close_6.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="close Two"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_close_6.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="close Three"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_close_6.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="close Four"
                    />
                  </Button>
                </Column>
                <Column className="listuser1">
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_trash_28X28.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="trash One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_trash_6.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="trash One"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray54"
                  >
                    <Img
                      src="images/img_trash_7.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="trash Two"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_trash_7.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="trash Three"
                    />
                  </Button>
                  <Button
                    className="flex xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] items-center justify-center lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                    shape="icbRoundedBorder3"
                    size="mdIcn"
                    variant="icbFillGray100"
                  >
                    <Img
                      src="images/img_trash_7.svg"
                      className="flex items-center justify-center lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px]"
                      alt="trash Four"
                    />
                  </Button>
                </Column>
              </List>
              <Column className="border border-deep_purple_A200 border-solid items-center justify-start lg:ml-[11px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[19px] lg:p-[5px] 2xl:p-[7px] xl:p-[7px] 3xl:p-[9px] rounded-radius5 w-[5%]">
                <Img
                  src="images/img_filter_1.svg"
                  className="plus_One"
                  alt="filter"
                />
                <Img
                  src="images/img_filter_2.svg"
                  className="upload_One"
                  alt="filter One"
                />
              </Column>
              <Img
                src="images/img_01.svg"
                className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[14px] lg:ml-[8px] 3xl:w-[11px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"
                alt="One"
              />
              <Img
                src="images/img_map.svg"
                className="2xl:h-[10px] 3xl:h-[12px] lg:h-[7px] xl:h-[9px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] 3xl:w-[11px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"
                alt="map"
              />
            </Row>
            <Column className="justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] w-[59%]">
              <Text
                className="font-semibold text-black_900_e5 w-[auto]"
                variant="body5"
              >
                测试任务
              </Text>
              <Line className="bg-gray_200 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
            </Column>
            <Row className="items-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] w-[14%]">
              <Img
                src="images/img__32X32.svg"
                className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] xl:w-[11px] 2xl:w-[12px] 3xl:w-[15px] lg:w-[9px]"
                alt="TwoThousandTwoHundredFiftyThree"
              />
              <Img
                src="images/img_clock_32X32.svg"
                className="clock_Three"
                alt="clock Three"
              />
              <Img
                src="images/img_checkmark_32X32.svg"
                className="clock_Three"
                alt="checkmark"
              />
              <Img
                src="images/img_play_32X32.svg"
                className="clock_Three"
                alt="play One"
              />
              <Img
                src="images/img_close_32X32.svg"
                className="clock_Three"
                alt="close Two"
              />
              <Img
                src="images/img_clock_2.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                alt="clock Four"
              />
              <Img
                src="images/img_clock_3.svg"
                className="xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[8px] lg:ml-[5px] 2xl:ml-[7px] xl:ml-[7px] 3xl:ml-[9px] 2xl:w-[11px] 3xl:w-[13px] lg:w-[7px] xl:w-[9px]"
                alt="clock Five"
              />
            </Row>
            <Column className="justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[59%]">
              <Text
                className="font-semibold text-black_900_e5 w-[auto]"
                variant="body5"
              >
                个人中心
              </Text>
              <Line className="bg-gray_200 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
            </Column>
            <Row className="items-start lg:ml-[2px] 2xl:ml-[3px] xl:ml-[3px] 3xl:ml-[4px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] w-[11%]">
              <List
                className="lg:gap-[4px] xl:gap-[5px] 2xl:gap-[6px] 3xl:gap-[7px] grid grid-cols-2 min-h-[auto] w-[43%]"
                orientation="horizontal"
              >
                <Column className="listuser1">
                  <Img
                    src="images/img_eye_3.svg"
                    className="plus_One"
                    alt="eye"
                  />
                  <Img
                    src="images/img_eye_4.svg"
                    className="upload_One"
                    alt="eye One"
                  />
                </Column>
                <Column className="listuser1">
                  <Img
                    src="images/img_airplane_1.svg"
                    className="plus_One"
                    alt="airplane"
                  />
                  <Img
                    src="images/img_airplane_2.svg"
                    className="upload_One"
                    alt="airplane One"
                  />
                </Column>
              </List>
              <Img
                src="images/img_checkmark_1.svg"
                className="lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] plus_One"
                alt="checkmark One"
              />
              <Img
                src="images/img_close_2.svg"
                className="xl:ml-[3px] lg:ml-[3px] 2xl:ml-[4px] 3xl:ml-[5px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] plus_One"
                alt="close Three"
              />
            </Row>
            <Column className="justify-start lg:ml-[1px] 3xl:ml-[2px] 2xl:ml-[2px] xl:ml-[2px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[59%]">
              <Text
                className="font-semibold text-black_900_e5 w-[auto]"
                variant="body5"
              >
                缺省页
              </Text>
              <Line className="bg-gray_200 h-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[100%]" />
            </Column>
            <Row className="items-start justify-between lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[19px] w-[100%]">
              <Stack className="bg-white_A700 3xl:h-[114px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] 3xl:w-[114px] lg:w-[67px] xl:w-[84px] 2xl:w-[95px]">
                <Img
                  src="images/img_group411.svg"
                  className="Group411"
                  alt="Group411"
                />
                <Text
                  className="absolute bottom-[4%] font-normal inset-x-[0] mx-[auto] not-italic text-bluegray_800 w-[max-content]"
                  variant="body8"
                >
                  抱歉，您访问的页面不存在
                  <br />
                </Text>
              </Stack>
              <Stack className="bg-white_A700 3xl:h-[114px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] 3xl:w-[114px] lg:w-[67px] xl:w-[84px] 2xl:w-[95px]">
                <Img
                  src="images/img_group431.svg"
                  className="Group411"
                  alt="Group431"
                />
                <Column className="absolute bottom-[9%] justify-start left-[16%] w-[55%]">
                  <Img
                    src="images/img_group433.svg"
                    className="lg:h-[40px] xl:h-[50px] 2xl:h-[56px] 3xl:h-[67px] xl:mr-[3px] lg:mr-[3px] 2xl:mr-[4px] 3xl:mr-[5px] w-[91%]"
                    alt="Group433"
                  />
                  <Text
                    className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[8px] rowrectangle"
                    variant="body8"
                  >
                    哎呀，网络出错了
                    <br />
                  </Text>
                </Column>
              </Stack>
              <Stack className="bg-white_A700 3xl:h-[114px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] 3xl:w-[114px] lg:w-[67px] xl:w-[84px] 2xl:w-[95px]">
                <Stack className="Group411">
                  <Stack className="Group431_One">
                    <Stack className="Group431_One">
                      <Stack className="Group431_One">
                        <Stack className="Group431_One">
                          <Img
                            src="images/img_group431_216X240.svg"
                            className="Group431_One"
                            alt="Group431 One"
                          />
                          <Img
                            src="images/img_group434.png"
                            className="absolute 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] inset-y-[0] left-[21%] my-[auto] w-[5%]"
                            alt="Group434"
                          />
                        </Stack>
                        <Row className="absolute bottom-[20%] items-start left-[10%] w-[65%]">
                          <Img
                            src="images/img_ellipse94.png"
                            className="lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:mt-[5px] 2xl:mt-[7px] xl:mt-[7px] 3xl:mt-[9px] w-[62%]"
                            alt="EllipseNinetyFour"
                          />
                          <Img
                            src="images/img_group434.png"
                            className="3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[16px] lg:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[7%]"
                            alt="Group407"
                          />
                          <Img
                            src="images/img_group433_16X9.png"
                            className="lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] ml-[3px] w-[6%]"
                            alt="Group433 One"
                          />
                        </Row>
                      </Stack>
                      <Img
                        src="images/img_group411_56X87.png"
                        className="absolute lg:h-[16px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] inset-[0] justify-center m-[auto] w-[36%]"
                        alt="Group411 One"
                      />
                    </Stack>
                    <Img
                      src="images/img_vector63.png"
                      className="absolute 3xl:h-[10px] lg:h-[6px] xl:h-[8px] 2xl:h-[9px] left-[31%] rounded-radius121 top-[30%] w-[18%]"
                      alt="VectorSixtyThree"
                    />
                  </Stack>
                  <Img
                    src="images/img_vector64.png"
                    className="absolute right-[30%] rounded-radius121 top-[25%] rewind"
                    alt="VectorSixtyFour"
                  />
                </Stack>
                <Column className="absolute bottom-[10%] inset-x-[0] justify-start mx-[auto] w-[41%]">
                  <Row className="items-start ml-[2px] w-[66%]">
                    <Img
                      src="images/img_subtract.png"
                      className="xl:h-[4px] lg:h-[4px] 2xl:h-[5px] 3xl:h-[6px] lg:mt-[1px] 2xl:mt-[2px] xl:mt-[2px] 3xl:mt-[3px] w-[15%]"
                      alt="Subtract"
                    />
                    <Img
                      src="images/img_subtract_9X11.png"
                      className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[17%]"
                      alt="Subtract One"
                    />
                  </Row>
                  <Text
                    className="lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] rowbrand"
                    variant="body8"
                  >
                    暂无测试记录～
                  </Text>
                </Column>
              </Stack>
              <List
                className="lg:gap-[28px] xl:gap-[35px] 2xl:gap-[39px] 3xl:gap-[47px] grid grid-cols-2 min-h-[auto] w-[22%]"
                orientation="horizontal"
              >
                <Stack className="bg-white_A700 3xl:h-[114px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] w-[100%]">
                  <Stack className="Group411">
                    <Stack className="Group431_One">
                      <Img
                        src="images/img_group431_1.svg"
                        className="Group431_One"
                        alt="Group431 Two"
                      />
                      <Img
                        src="images/img_ellipse94.png"
                        className="absolute bottom-[23%] lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] left-[13%] w-[49%]"
                        alt="EllipseNinetyFour One"
                      />
                    </Stack>
                    <Img
                      src="images/img_group442.png"
                      className="Group442"
                      alt="Group442"
                    />
                  </Stack>
                  <Column className="absolute bottom-[8%] justify-start right-[13%] w-[70%]">
                    <Img
                      src="images/img_group470.png"
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[26%]"
                      alt="Group470"
                    />
                    <Text className="test_581601_One" variant="body8">
                      任务尚未开始，请耐心等待
                    </Text>
                  </Column>
                </Stack>
                <Stack className="bg-white_A700 3xl:h-[114px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] w-[100%]">
                  <Stack className="Group411">
                    <Stack className="Group431_One">
                      <Img
                        src="images/img_group431_2.svg"
                        className="Group431_One"
                        alt="Group431 Three"
                      />
                      <Img
                        src="images/img_ellipse94.png"
                        className="absolute bottom-[23%] lg:h-[15px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] left-[13%] w-[49%]"
                        alt="EllipseNinetyFour Two"
                      />
                    </Stack>
                    <Img
                      src="images/img_group442.png"
                      className="Group442"
                      alt="Group442 One"
                    />
                  </Stack>
                  <Column className="absolute bottom-[8%] inset-x-[0] justify-start mx-[auto] w-[64%]">
                    <Img
                      src="images/img_group470_41X43.png"
                      className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[24px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[41px] w-[28%]"
                      alt="Group470 One"
                    />
                    <Text className="test_581601_One" variant="body8">
                      任务已取消，请再次运行
                    </Text>
                  </Column>
                </Stack>
              </List>
              <Column
                className="bg-cover bg-repeat items-center justify-end 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] 3xl:p-[10px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px] w-[9%]"
                style={{ backgroundImage: "url('images/img__216X240.svg')" }}
              >
                <Stack className="lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[75%]">
                  <Img
                    src="images/img_group435.png"
                    className="absolute lg:h-[35px] xl:h-[44px] 2xl:h-[49px] 3xl:h-[59px] left-[0] w-[89%]"
                    alt="Group435"
                  />
                  <Img
                    src="images/img_group448.svg"
                    className="absolute lg:h-[14px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] right-[0] top-[23%] w-[31%]"
                    alt="Group448"
                  />
                </Stack>
                <Text
                  className="xl:mt-[2px] lg:mt-[2px] 3xl:mt-[3px] 2xl:mt-[3px] rowbrand"
                  variant="body8"
                >
                  该图表暂无数据
                </Text>
              </Column>
              <Stack className="bg-white_A700 3xl:h-[114px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] 3xl:w-[114px] lg:w-[67px] xl:w-[84px] 2xl:w-[95px]">
                <Img
                  src="images/img_group431_3.svg"
                  className="Group411"
                  alt="Group431 Four"
                />
                <Column className="absolute bottom-[10%] justify-start left-[10%] w-[65%]">
                  <Img
                    src="images/img_group436.svg"
                    className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] w-[100%]"
                    alt="Group436"
                  />
                  <Text
                    className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] rowbrand"
                    variant="body8"
                  >
                    搜索无结果
                  </Text>
                </Column>
              </Stack>
              <Stack className="bg-white_A700 3xl:h-[114px] lg:h-[68px] xl:h-[85px] 2xl:h-[96px] 3xl:w-[114px] lg:w-[67px] xl:w-[84px] 2xl:w-[95px]">
                <Stack className="Group411">
                  <Stack className="Group431_One">
                    <Img
                      src="images/img_group431_4.svg"
                      className="Group431_One"
                      alt="Group431 Five"
                    />
                    <Img
                      src="images/img_ellipse94.png"
                      className="absolute bottom-[38%] lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] left-[11%] w-[41%]"
                      alt="EllipseNinetyFour Three"
                    />
                  </Stack>
                  <Img
                    src="images/img_group442.png"
                    className="Group442"
                    alt="Group442 Two"
                  />
                </Stack>
                <Column className="absolute bottom-[10%] justify-start left-[15%] w-[65%]">
                  <Img
                    src="images/img_group470_1.png"
                    className="lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[28%]"
                    alt="Group470 Two"
                  />
                  <Img
                    src="images/img_group632.svg"
                    className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[2px] w-[100%]"
                    alt="Group632"
                  />
                  <Text
                    className="lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] 3xl:mt-[11px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] rowbrand"
                    variant="body8"
                  >
                    任务执行中...
                  </Text>
                </Column>
              </Stack>
            </Row>
          </Column>
          <Column className="bg-blue_A400 items-center justify-start lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[63px] xl:p-[115px] 2xl:p-[129px] 3xl:p-[155px] lg:p-[92px] w-[82%]">
            <Button
              className="flex items-center justify-center rounded-radius50 caretdownsmal"
              size="lgIcn"
              variant="icbOutlineWhiteA700e51_2"
            >
              <Img
                src="images/img_play_44X44.svg"
                className="flex items-center justify-center"
                alt="play Two"
              />
            </Button>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Page23;
