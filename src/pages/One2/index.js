import React from "react";

import {
  Column,
  Stack,
  Img,
  Text,
  Row,
  Line,
  Slider,
  List,
  Button,
  SelectBox,
} from "components";
import Header from "components/Header/Header";

const One2Page = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[32px] xl:pb-[40px] 2xl:pb-[46px] 3xl:pb-[55px] w-[100%]">
        <Stack className="lg:h-[159px] xl:h-[199px] 2xl:h-[224px] 3xl:h-[268px] w-[100%]">
          <Stack className="bottom-[0] test_20220825">
            <Stack className="absolute lg:h-[114px] xl:h-[143px] 2xl:h-[161px] 3xl:h-[193px] right-[0] w-[87%]">
              <Img
                src="images/img_image1_20.png"
                className="imageOne"
                alt="imageOne"
              />
              <Img
                src="images/img_20220825_20.png"
                className="test_20220825"
                alt="20220825"
              />
            </Stack>
            <Column className="absolute bg-gradient1  justify-end left-[0] lg:p-[22px] xl:p-[27px] 2xl:p-[31px] 3xl:p-[37px] w-[65%]">
              <Text className="columntwohundredeightytwo" as="h6" variant="h6">
                自动驾驶合规性评估
              </Text>
            </Column>
          </Stack>
          <Column className="absolute bg-bluegray_50_75 justify-end lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] top-[29%] w-[100%]">
            <Column className="items-center justify-start lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[1px] w-[14%]">
              <Row className="items-start justify-evenly w-[100%]">
                <Text className="OneHundredFiftyThree" variant="body9">
                  可信懒评估
                </Text>
                <Img
                  src="images/img_checkmark.svg"
                  className="checkmark2"
                  alt="checkmark"
                />
                <Text className="TwoHundredEightyFour" variant="body9">
                  自动驾驶合规性评估
                </Text>
              </Row>
            </Column>
          </Column>
          <Header className="absolute top-[0] w-[100%]" />
        </Stack>
        <Column className="justify-start lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[96%]">
          <Column className="items-center justify-start w-[100%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-start w-[22%]">
                <Text
                  className="lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rowtwohundredninetyfour"
                  variant="body3"
                >
                  评估概览
                </Text>
                <Text
                  className="font-semibold lg:ml-[45px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] text-blue_A401 w-[auto]"
                  variant="body3"
                >
                  测试记录
                </Text>
                <Text className="Group1327" variant="body8">
                  99+
                </Text>
              </Row>
              <Stack className="xl:h-[3px] lg:h-[3px] 3xl:h-[4px] 2xl:h-[4px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[100%]">
                <Line className="absolute bg-gray_202 bottom-[0] h-[1px] rounded-radius05 w-[100%]" />
                <Line className="absolute bg-blue_A400 h-[3px] left-[12%] rounded-bl-[0] rounded-br-[0] rounded-tl-[2px] rounded-tr-[2px] w-[7%]" />
              </Stack>
            </Column>
          </Column>
          <Stack className="lg:h-[524px] xl:h-[655px] 2xl:h-[737px] 3xl:h-[884px] lg:mt-[41px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[100%]">
            <Column className="absolute items-center justify-start w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <Column className="bg-white_A700 items-center justify-start lg:pt-[22px] xl:pt-[27px] 2xl:pt-[31px] 3xl:pt-[37px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Line className="bg-gray_202 h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:pt-[44px] xl:pt-[56px] 2xl:pt-[63px] 3xl:pt-[75px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Line className="bg-gray_202 h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Column className="bg-white_A700 items-center justify-start lg:pt-[44px] xl:pt-[56px] 2xl:pt-[63px] 3xl:pt-[75px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <Line className="bg-gray_202 h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <footer className="bg-white_A700 w-[100%]">
                  <Line className="bg-gray_202 h-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]" />
                </footer>
                <footer className="bg-white_A700 w-[100%]">
                  <Line className="bg-gray_202 h-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]" />
                </footer>
                <footer className="bg-white_A700 w-[100%]">
                  <Line className="bg-gray_202 h-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]" />
                </footer>
                <footer className="bg-white_A700 w-[100%]">
                  <Line className="bg-gray_202 h-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]" />
                </footer>
                <footer className="bg-white_A700 w-[100%]">
                  <Line className="bg-gray_202 h-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]" />
                </footer>
                <footer className="bg-white_A700 w-[100%]">
                  <Line className="bg-gray_202 h-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]" />
                </footer>
                <footer className="bg-white_A700 w-[100%]">
                  <Line className="bg-gray_202 h-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]" />
                </footer>
                <footer className="bg-white_A700 w-[100%]">
                  <Line className="bg-gray_202 h-[1px] lg:mt-[44px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]" />
                </footer>
                <Slider
                  slidesToShow={1}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="bg-white_A700 w-[100%]"
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <Line className="bg-gray_202 h-[1px]" />
                    </React.Fragment>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return <div className="" />;
                    }
                    return <div className="" role="button" tabIndex={0} />;
                  }}
                />
              </Column>
            </Column>
            <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[98%]">
              <Column className="w-[4%]">
                <Text
                  className="flex items-center TwoHundredFortyTwo"
                  variant="body9"
                >
                  ID
                </Text>
                <Text
                  className="lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] columnu1230"
                  variant="body9"
                >
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
                <Text className="UE123123_One" variant="body9">
                  UE123123
                </Text>
              </Column>
              <Column className="pt-[3px] w-[8%]">
                <Column className="items-center justify-start w-[44%]">
                  <Text className="TwoHundredFortyTwo" variant="body9">
                    任务名称
                  </Text>
                </Column>
                <Text
                  className="OneThousandFourHundredNineteen"
                  variant="body9"
                >
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  自动驾驶合规性评估
                </Text>
              </Column>
              <Column className="pt-[1px] w-[9%]">
                <Row className="items-start w-[51%]">
                  <Text className="rowonehundredfiftyeight" variant="body9">
                    提交时间
                  </Text>
                  <Img
                    src="images/img_close_16X16.svg"
                    className="arrowleft"
                    alt="close"
                  />
                </Row>
                <Text
                  className="lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] columnu1230"
                  variant="body9"
                >
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
                <Text className="UE123123_One" variant="body9">
                  2022-08-12 20:23:12
                </Text>
              </Column>
              <Column className="w-[5%]">
                <Text className="TwoHundredFortyTwo" variant="body9">
                  任务状态
                </Text>
                <Column className="items-center justify-start lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[88%]">
                  <Text className="columnu1230" variant="body9">
                    排队中 0/1
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
                  <Text className="columnu1230" variant="body9">
                    运行中 2/20
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[90%]">
                  <Text className="columnu1230" variant="body9">
                    已完成 5/5
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[90%]">
                  <Text className="columnu1230" variant="body9">
                    已完成 5/5
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
                  <Text className="columnu1230" variant="body9">
                    已取消 0/1
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
                  <Text className="columnu1230" variant="body9">
                    已取消 0/1
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
                  <Text className="columnu1230" variant="body9">
                    已中断 1/6
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[88%]">
                  <Text className="columnu1230" variant="body9">
                    已中断 1/6
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[83%]">
                  <Text className="columnu1230" variant="body9">
                    已取消 1/1
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[83%]">
                  <Text className="columnu1230" variant="body9">
                    已取消 1/1
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[83%]">
                  <Text className="columnu1230" variant="body9">
                    已取消 1/1
                  </Text>
                </Column>
              </Column>
              <Column className="pt-[1px] w-[5%]">
                <Row className="items-start justify-evenly w-[100%]">
                  <Text className="rowonehundredfiftyeight" variant="body9">
                    执行时长
                  </Text>
                  <Img
                    src="images/img_close_16X16.svg"
                    className="arrowleft"
                    alt="close One"
                  />
                </Row>
                <Text
                  className="OneThousandFourHundredNineteen"
                  variant="body9"
                >
                  --
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  1:23
                </Text>
                <Text className="UE123123_One" variant="body9">
                  5:23
                </Text>
                <Text className="UE123123_One" variant="body9">
                  5:23
                </Text>
                <Text className="OneHundredTwentyThree_One" variant="body9">
                  --
                </Text>
                <Text className="UE123123_One" variant="body9">
                  --
                </Text>
                <Text className="OneThousandFourHundredTwenty" variant="body9">
                  1:22:23
                </Text>
                <Text className="UE123123_One" variant="body9">
                  1:22:23
                </Text>
                <Text className="OneHundredTwentyThree_One" variant="body9">
                  --
                </Text>
                <Text className="UE123123_One" variant="body9">
                  --
                </Text>
                <Text className="UE123123_One" variant="body9">
                  --
                </Text>
              </Column>
              <Column className="w-[4%]">
                <Text className="TwoHundredFortyTwo" variant="body9">
                  任务结果
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listonethousandthreehundredninetyfive">
                    <Column className="bg-white_A700 justify-end lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius2 w-[100%]">
                      <Text className="FiveHundredThirtySix" variant="body9">
                        --
                      </Text>
                    </Column>
                  </Column>
                  <Column className="listonethousandthreehundredninetyfive">
                    <Column className="bg-white_A700 justify-end lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius2 w-[100%]">
                      <Text className="FiveHundredThirtySix" variant="body9">
                        --
                      </Text>
                    </Column>
                  </Column>
                </List>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listonethousandthreehundredninetyfive">
                    <Row className="bg-gray_102 items-center justify-between lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] rounded-radius2 w-[100%]">
                      <div className="bg-red_400 rounded-radius50 plus_One"></div>
                      <Text className="rowellipsenine5" variant="body9">
                        不通过
                      </Text>
                    </Row>
                  </Column>
                  <Column className="listonethousandthreehundredninetyfive">
                    <Row className="bg-gray_102 items-center justify-center lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] rounded-radius2 w-[100%]">
                      <div className="bg-teal_500 lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] rounded-radius50 plus_One"></div>
                      <Text className="rowellipsenine_one" variant="body9">
                        通过
                      </Text>
                    </Row>
                  </Column>
                </List>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="listonethousandthreehundredninetyfive">
                    <Column className="bg-white_A700 justify-end lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius2 w-[100%]">
                      <Text className="FiveHundredThirtySix" variant="body9">
                        --
                      </Text>
                    </Column>
                  </Column>
                  <Column className="listonethousandthreehundredninetyfive">
                    <Column className="bg-white_A700 justify-end lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius2 w-[100%]">
                      <Text className="FiveHundredThirtySix" variant="body9">
                        --
                      </Text>
                    </Column>
                  </Column>
                  <Column className="listonethousandthreehundredninetyfive">
                    <Column className="bg-white_A700 justify-end lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius2 w-[100%]">
                      <Text className="FiveHundredThirtySix" variant="body9">
                        --
                      </Text>
                    </Column>
                  </Column>
                  <Column className="listonethousandthreehundredninetyfive">
                    <Column className="bg-white_A700 justify-end lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius2 w-[100%]">
                      <Text className="FiveHundredThirtySix" variant="body9">
                        --
                      </Text>
                    </Column>
                  </Column>
                  <Column className="listonethousandthreehundredninetyfive">
                    <Column className="bg-white_A700 justify-end lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius2 w-[100%]">
                      <Text className="FiveHundredThirtySix" variant="body9">
                        --
                      </Text>
                    </Column>
                  </Column>
                  <Column className="listonethousandthreehundredninetyfive">
                    <Column className="bg-white_A700 justify-end lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius2 w-[100%]">
                      <Text className="FiveHundredThirtySix" variant="body9">
                        --
                      </Text>
                    </Column>
                  </Column>
                  <Column className="listonethousandthreehundredninetyfive">
                    <Column className="bg-white_A700 justify-end lg:pr-[4px] xl:pr-[6px] 2xl:pr-[7px] 3xl:pr-[8px] lg:py-[4px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius2 w-[100%]">
                      <Text className="FiveHundredThirtySix" variant="body9">
                        --
                      </Text>
                    </Column>
                  </Column>
                </List>
              </Column>
              <Column className="items-center mt-[3px] w-[6%]">
                <Column className="justify-start w-[100%]">
                  <Text className="TwoHundredFortyTwo" variant="body9">
                    操作
                  </Text>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_close_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="close Two"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye One"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_contrast_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="contrast"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye Two"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye Three"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame One"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye Four"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame Two"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye Five"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame Three"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye Six"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame Four"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye Seven"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame Five"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye Eight"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame Six"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye Nine"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame Seven"
                        />
                      </Button>
                    </Row>
                    <Row className="listeye">
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_eye_28X28.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="eye Ten"
                        />
                      </Button>
                      <Button
                        className="flex lg:h-[20px] xl:h-[25px] 2xl:h-[29px] 3xl:h-[34px] items-center justify-center lg:w-[19px] xl:w-[24px] 2xl:w-[28px] 3xl:w-[33px]"
                        shape="icbRoundedBorder3"
                        size="mdIcn"
                        variant="icbFillGray102"
                      >
                        <Img
                          src="images/img_frame_1.svg"
                          className="flex items-center justify-center lg:h-[12px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px]"
                          alt="Frame Eight"
                        />
                      </Button>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Row>
          </Stack>
          <Row className="items-center justify-end ml-[auto] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[36%]">
            <Text className="TwoHundredFortyTwo" variant="body9">
              共
            </Text>
            <Text className="rowellipsenine_three" variant="body9">
              1120
            </Text>
            <Text className="ml-[4px] TwoHundredFortyTwo" variant="body9">
              条
            </Text>
            <SelectBox
              className="font-normal lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-gray_905 w-[17%]"
              placeholderClassName="text-gray_905"
              name="Group1174"
              placeholder="10条/页"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_5X8.svg"
                  className="lg:w-[5px] lg:h-[4px] lg:mr-[5px] xl:w-[7px] xl:h-[5px] xl:mr-[7px] 2xl:w-[8px] 2xl:h-[6px] 2xl:mr-[8px] 3xl:w-[9px] 3xl:h-[7px] 3xl:mr-[9px]"
                  alt="arrow_down"
                />
              }
              shape="RoundedBorder4"
              size="md"
              variant="OutlineGray202"
            ></SelectBox>
            <Img
              src="images/img_arrowleft_9X5.svg"
              className="arrowleft4"
              onClick={() => sliderRef.current?.slidePrev()}
              alt="arrowleft"
            />
            <Button
              className="font-normal 3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center user"
              shape="RoundedBorder4"
              size="sm"
              variant="FillGray203"
            >
              1
            </Button>
            <Text
              className="lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] TwoHundredFortyTwo"
              variant="body9"
            >
              2 3 4 5
            </Text>
            <Text
              className="xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:ml-[9px] TwoHundredFortyTwo"
              variant="body9"
            >
              …
            </Text>
            <Text
              className="2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[7px] xl:ml-[9px] TwoHundredFortyTwo"
              variant="body9"
            >
              100
            </Text>
            <Img
              src="images/img_arrowright_9X5.svg"
              className="arrowleft4"
              onClick={() => sliderRef.current?.slideNext()}
              alt="arrowright"
            />
            <Text
              className="lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] columnu1230"
              variant="body9"
            >
              前往
            </Text>
            <Button
              className="font-normal lg:ml-[5px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[8px] text-center w-[10%]"
              shape="RoundedBorder4"
              size="md"
              variant="OutlineGray301"
            >
              1000
            </Button>
            <Text className="rowellipsenine_three" variant="body9">
              页
            </Text>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default One2Page;
