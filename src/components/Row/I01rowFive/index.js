import React from "react";

import { Row, Line, Column, Text, Button, Img } from "components";

const I01rowFive = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Row className="items-center lg:pr-[113px] xl:pr-[141px] 2xl:pr-[159px] 3xl:pr-[190px] w-[38%]">
          <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[54px] xl:pr-[67px] 2xl:pr-[76px] 3xl:pr-[91px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[100%]">
            <Column className="justify-start w-[92%]">
              <Text className="FortyEight_Five" variant="body9">
                感知算法 V1.0
              </Text>
              <Text className="TwoThousandEightHundredFour" variant="body9">
                算法描述算法描述算法描述算法描述算法描述
              </Text>
            </Column>
          </Column>
          <Text className="columnonehundredseventeen" variant="body9">
            Apollo V5.0
          </Text>
        </Row>
        <Row className="items-start lg:pr-[110px] xl:pr-[137px] 2xl:pr-[155px] 3xl:pr-[186px] w-[77%]">
          <Column className="bg-white_A700 justify-end xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[54px] xl:pr-[67px] 2xl:pr-[76px] 3xl:pr-[91px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[49%]">
            <Column className="justify-start w-[92%]">
              <Text className="FortyEight_Five" variant="body9">
                感知算法 V1.0
              </Text>
              <Text className="TwoThousandEightHundredFour" variant="body9">
                算法描述算法描述算法描述算法描述算法描述
              </Text>
            </Column>
          </Column>
          <Column className="bg-white_A700 justify-end lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[33%]">
            <Text className="columnonehundredseventeen" variant="body9">
              Apollo V5.0
            </Text>
          </Column>
          <Column className="bg-white_A700 justify-end lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[2px] w-[33%]">
            <Text className="columnonehundredseventeen" variant="body9">
              编译型
            </Text>
          </Column>
          <Text className="columnu1230_eighteen" variant="body9">
            --
          </Text>
        </Row>
        <Row className="items-center xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] w-[100%]">
          <Column className="items-center w-[89%]">
            <Row className="items-center justify-evenly w-[100%]">
              <Column className="bg-white_A700 xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pr-[54px] xl:pr-[67px] 2xl:pr-[76px] 3xl:pr-[91px] lg:pt-[4px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[35%]">
                <Column className="justify-start w-[92%]">
                  <Text className="FortyEight_Five" variant="body9">
                    感知算法 V1.0
                  </Text>
                  <Text className="TwoThousandEightHundredFour" variant="body9">
                    算法描述算法描述算法描述算法描述算法描述
                  </Text>
                </Column>
              </Column>
              <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[23%]">
                <Text className="columnonehundredseventeen" variant="body9">
                  Apollo V5.0
                </Text>
              </Column>
              <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[2px] w-[24%]">
                <Text className="columnonehundredseventeen" variant="body9">
                  编译型
                </Text>
              </Column>
              <Column className="bg-white_A700 lg:py-[17px] xl:py-[22px] 2xl:py-[25px] 3xl:py-[30px] w-[18%]">
                <Text className="columnu1230_eighteen" variant="body9">
                  --
                </Text>
              </Column>
            </Row>
          </Column>
          <Button
            className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
            shape="icbRoundedBorder3"
            size="mdIcn"
            variant="icbFillGray54"
          >
            <Img
              src="images/img_share_28X28.svg"
              className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
              alt="share Three"
            />
          </Button>
          <Row className="items-center justify-between lg:ml-[14px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] w-[7%]">
            <Button
              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
              shape="icbRoundedBorder3"
              size="mdIcn"
              variant="icbFillGray54"
            >
              <Img
                src="images/img_edit_4.svg"
                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                alt="edit Three"
              />
            </Button>
            <Button
              className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
              shape="icbRoundedBorder3"
              size="mdIcn"
              variant="icbFillGray54"
            >
              <Img
                src="images/img_trash_8.svg"
                className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                alt="trash Three"
              />
            </Button>
          </Row>
        </Row>
        <Row className="items-center justify-center lg:pr-[135px] xl:pr-[169px] 2xl:pr-[191px] 3xl:pr-[229px] w-[27%]">
          <Column className="bg-white_A700 lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] pt-[3px] w-[100%]">
            <Text className="columnonehundredseventeen" variant="body9">
              Apollo V5.0
            </Text>
          </Column>
          <Text className="columnonehundredseventeen" variant="body9">
            编译型
          </Text>
        </Row>
      </Row>
    </>
  );
};

export default I01rowFive;
