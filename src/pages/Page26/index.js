import React from "react";

import { Column, Text, Line, List, Row, Img } from "components";

const Page26 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:p-[30px] xl:p-[37px] 2xl:p-[42px] 3xl:p-[51px] w-[100%]">
        <Column className="justify-start lg:mb-[24px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[7px] xl:mt-[9px] w-[98%]">
          <Text
            className="font-semibold text-black_900_e5 w-[auto]"
            as="h5"
            variant="h5"
          >
            颜色
          </Text>
          <Column className="justify-start lg:mt-[43px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              功能色
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]" />
          </Column>
          <List
            className="lg:gap-[24px] xl:gap-[30px] 2xl:gap-[34px] 3xl:gap-[40px] grid grid-cols-5 min-h-[auto] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[21px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-gray_100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Brand1
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #F0F8FF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-blue_100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Brand2
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #C7E3FF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-blue_200 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Brand3
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #9ECBFF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-blue_A100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="BrandFour" variant="body9">
                    Brand4
                  </Text>
                  <Text className="test_75B1FF" variant="body9">
                    #75B1FF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-blue_A200 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Brand5
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #4D94FF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-blue_A400 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Brand6
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #2373FF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-blue_800 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Brand7
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #1455D9
                  </Text>
                </Row>
              </Column>
              <Column className="bg-blue_900 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Brand8
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #073BB2
                  </Text>
                </Row>
              </Column>
              <Column className="bg-indigo_900 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Brand9
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #00258C
                  </Text>
                </Row>
              </Column>
              <Column className="bg-indigo_901 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Brand10
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #001866
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-gray_50 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Success1
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #F2FFF6
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_50 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Success2
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #D8F2E1
                  </Text>
                </Row>
              </Column>
              <Column className="bg-green_A100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Success3
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #A8E5C0
                  </Text>
                </Row>
              </Column>
              <Column className="bg-green_A200 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Success4
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #7CD9A4
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_300 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Success5
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #54CC8C
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_400 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Success6
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #30BF78
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_600 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Success7
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #1F9960
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_800 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Success8
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #117348
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_900 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Success9
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #084D31
                  </Text>
                </Row>
              </Column>
              <Column className="bg-gray_901 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Success10
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #022619
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-red_50 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="test_75B1FF" variant="body9">
                    Warning1
                  </Text>
                  <Text className="BrandFour" variant="body9">
                    #FFF3F2
                  </Text>
                </Row>
              </Column>
              <Column className="bg-red_100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="test_75B1FF" variant="body9">
                    Warning2
                  </Text>
                  <Text className="BrandFour" variant="body9">
                    #FFD9D4
                  </Text>
                </Row>
              </Column>
              <Column className="bg-deep_orange_100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="test_75B1FF" variant="body9">
                    Warning3
                  </Text>
                  <Text className="BrandFour" variant="body9">
                    #FFB9AB
                  </Text>
                </Row>
              </Column>
              <Column className="bg-deep_orange_A100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="test_75B1FF" variant="body9">
                    Warning4
                  </Text>
                  <Text className="BrandFour" variant="body9">
                    #FF9B82
                  </Text>
                </Row>
              </Column>
              <Column className="bg-deep_orange_300 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="test_75B1FF" variant="body9">
                    Warning5
                  </Text>
                  <Text className="BrandFour" variant="body9">
                    #FF8059
                  </Text>
                </Row>
              </Column>
              <Column className="bg-deep_orange_A200 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="WarningSix" variant="body9">
                    Warning6
                  </Text>
                  <Text className="FF6831" variant="body9">
                    #FF6831
                  </Text>
                </Row>
              </Column>
              <Column className="bg-deep_orange_700 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="WarningSix" variant="body9">
                    Warning7
                  </Text>
                  <Text className="FF6831" variant="body9">
                    #D9561E
                  </Text>
                </Row>
              </Column>
              <Column className="bg-deep_orange_900 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="WarningSix" variant="body9">
                    Warning8
                  </Text>
                  <Text className="FF6831" variant="body9">
                    #B24610
                  </Text>
                </Row>
              </Column>
              <Column className="bg-deep_orange_901 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="WarningSix" variant="body9">
                    Warning9
                  </Text>
                  <Text className="FF6831" variant="body9">
                    #8C3706
                  </Text>
                </Row>
              </Column>
              <Column className="bg-gray_902 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="WarningSix" variant="body9">
                    Warning10
                  </Text>
                  <Text className="FF6831" variant="body9">
                    #662900
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-red_51 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="test_75B1FF" variant="body9">
                    Error1
                  </Text>
                  <Text className="BrandFour" variant="body9">
                    #FFF2F6
                  </Text>
                </Row>
              </Column>
              <Column className="bg-pink_50 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Error2
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #FFDEE6
                  </Text>
                </Row>
              </Column>
              <Column className="bg-pink_100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Error3
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #FFB5C4
                  </Text>
                </Row>
              </Column>
              <Column className="bg-red_200 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="test_75B1FF" variant="body9">
                    Error4
                  </Text>
                  <Text className="BrandFour" variant="body9">
                    #F58799
                  </Text>
                </Row>
              </Column>
              <Column className="bg-red_300 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="test_75B1FF" variant="body9">
                    Error5
                  </Text>
                  <Text className="BrandFour" variant="body9">
                    #E85A6D
                  </Text>
                </Row>
              </Column>
              <Column className="bg-red_600 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Error6
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #DB3244
                  </Text>
                </Row>
              </Column>
              <Column className="bg-red_900 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="WarningSix" variant="body9">
                    Error7
                  </Text>
                  <Text className="FF6831" variant="body9">
                    #B5212A
                  </Text>
                </Row>
              </Column>
              <Column className="bg-red_901 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Error8
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #8F1317
                  </Text>
                </Row>
              </Column>
              <Column className="bg-pink_900 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Error9
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #690808
                  </Text>
                </Row>
              </Column>
              <Column className="bg-gray_903 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Error10
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #420202
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-gray_51 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="test_75B1FF" variant="body9">
                    Other1
                  </Text>
                  <Text className="BrandFour" variant="body9">
                    #F2FFFE
                  </Text>
                </Row>
              </Column>
              <Column className="bg-cyan_50 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Other2
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #D6FFFE
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_A100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Other3
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #B0FEFF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-cyan_A100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Other4
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #8AF9FF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_A200 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandone" variant="body9">
                    Other5
                  </Text>
                  <Text className="rowbrandone" variant="body9">
                    #60EBF7
                  </Text>
                </Row>
              </Column>
              <Column className="bg-cyan_300 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Other6
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #39D5EB
                  </Text>
                </Row>
              </Column>
              <Column className="bg-cyan_400 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Other7
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #25ACC4
                  </Text>
                </Row>
              </Column>
              <Column className="bg-cyan_800 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Other8
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #16859E
                  </Text>
                </Row>
              </Column>
              <Column className="bg-cyan_900 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Other9
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #0B6078
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_901 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Other10
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #033E52
                  </Text>
                </Row>
              </Column>
            </Column>
          </List>
          <Text
            className="font-semibold lg:mt-[38px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[65px] text-black_900_e5 w-[auto]"
            variant="body5"
          >
            图表色
          </Text>
          <Line className="bg-gray_200 h-[1px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]" />
          <List
            className="lg:gap-[24px] xl:gap-[30px] 2xl:gap-[34px] 3xl:gap-[40px] grid grid-cols-5 min-h-[auto] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-blue_100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrand" variant="body9">
                    Brand
                  </Text>
                  <Text className="rowbrand" variant="body9">
                    #C7E3FF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-blue_A100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="Brand_One_One" variant="body9">
                    Brand
                  </Text>
                  <Text className="test_75B1FF_One" variant="body9">
                    #75B1FF
                  </Text>
                </Row>
              </Column>
              <Column className="bg-blue_A400 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Brand
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #2373FF
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-red_101 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrand" variant="body9">
                    Red
                  </Text>
                  <Text className="rowbrand" variant="body9">
                    #F1D4DC
                  </Text>
                </Row>
              </Column>
              <Column className="bg-pink_200 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrand" variant="body9">
                    Red
                  </Text>
                  <Text className="rowbrand" variant="body9">
                    #F191A5
                  </Text>
                </Row>
              </Column>
              <Column className="bg-red_301 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="rowbrandsix" variant="body9">
                    Red
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #F17083
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-cyan_51 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="Green" variant="body9">
                    Green
                  </Text>
                  <Text className="rowbrand" variant="body9">
                    #C7FFF4
                  </Text>
                </Row>
              </Column>
              <Column className="bg-teal_A201 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="Green" variant="body9">
                    Green
                  </Text>
                  <Text className="rowbrand" variant="body9">
                    #6BE8D7
                  </Text>
                </Row>
              </Column>
              <Column className="bg-cyan_401 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="Green" variant="body9">
                    Green
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #1DCEC1
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-orange_50 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="Green" variant="body9">
                    Yellow
                  </Text>
                  <Text className="rowbrand" variant="body9">
                    #FFF8E0
                  </Text>
                </Row>
              </Column>
              <Column className="bg-yellow_200 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="Green" variant="body9">
                    Yellow
                  </Text>
                  <Text className="rowbrand" variant="body9">
                    #FFE099
                  </Text>
                </Row>
              </Column>
              <Column className="bg-amber_300 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                  <Text className="Green" variant="body9">
                    Yellow
                  </Text>
                  <Text className="rowbrandsix" variant="body9">
                    #FCD552
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="items-center justify-start w-[100%]">
              <Column className="bg-indigo_50 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="Purple" variant="body9">
                    Purple
                  </Text>
                  <Text className="Brand_One_One" variant="body9">
                    #E3E3FC
                  </Text>
                </Row>
              </Column>
              <Column className="bg-indigo_100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="Purple" variant="body9">
                    Purple
                  </Text>
                  <Text className="Brand_One_One" variant="body9">
                    #CACAFC
                  </Text>
                </Row>
              </Column>
              <Column className="bg-indigo_A100 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                  <Text className="Purple" variant="body9">
                    Purple
                  </Text>
                  <Text className="FF6831" variant="body9">
                    #A39EFC
                  </Text>
                </Row>
              </Column>
            </Column>
          </List>
          <Column className="justify-start lg:mt-[35px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
            <Text
              className="font-semibold text-black_900_e5 w-[auto]"
              variant="body5"
            >
              文字颜色
            </Text>
            <Line className="bg-gray_200 h-[1px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]" />
          </Column>
          <Column className="items-center justify-start lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[38%]">
            <Column className="justify-start w-[100%]">
              <Row className="items-center w-[83%]">
                <Text
                  className="font-normal mt-[1px] not-italic text-gray_904 w-[auto]"
                  variant="body9"
                >
                  强调/正文标题
                </Text>
                <Text
                  className="font-normal lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] mt-[1px] not-italic text-gray_700 w-[auto]"
                  variant="body9"
                >
                  次强调/正文标题
                </Text>
                <Text
                  className="font-normal lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] not-italic text-bluegray_400 w-[auto]"
                  variant="body9"
                >
                  次要信息
                </Text>
                <Text
                  className="font-normal 3xl:ml-[104px] lg:ml-[61px] xl:ml-[77px] 2xl:ml-[87px] mt-[1px] not-italic text-gray_400 w-[auto]"
                  variant="body9"
                >
                  置灰文字
                </Text>
              </Row>
              <Row className="items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[84%]">
                <Text
                  className="font-normal not-italic text-gray_904 w-[auto]"
                  variant="body9"
                >
                  #25305A
                </Text>
                <Text
                  className="font-normal 3xl:ml-[100px] lg:ml-[59px] xl:ml-[74px] 2xl:ml-[83px] not-italic text-gray_700 w-[auto]"
                  variant="body9"
                >
                  #666E8B
                </Text>
                <Text
                  className="font-normal lg:ml-[58px] xl:ml-[73px] 2xl:ml-[82px] 3xl:ml-[99px] not-italic text-bluegray_400 w-[auto]"
                  variant="body9"
                >
                  #A8ACBD
                </Text>
                <Text
                  className="font-normal lg:ml-[57px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] not-italic text-gray_400 w-[auto]"
                  variant="body9"
                >
                  #C2C5D1
                </Text>
              </Row>
              <Img
                src="images/img_group234.svg"
                className="lg:h-[49px] xl:h-[61px] 2xl:h-[69px] 3xl:h-[82px] xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]"
                alt="Group234"
              />
            </Column>
          </Column>
          <footer className="lg:mt-[37px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] w-[100%]">
            <Column className="justify-start w-[100%]">
              <Column className="justify-start w-[100%]">
                <Text
                  className="font-semibold text-black_900_e5 w-[auto]"
                  variant="body5"
                >
                  中性色板
                </Text>
                <Line className="bg-gray_200 h-[1px] lg:mt-[16px] xl:mt-[21px] 2xl:mt-[23px] 3xl:mt-[28px] w-[100%]" />
              </Column>
              <Column className="items-center justify-start lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[41%]">
                <Column className="justify-start w-[100%]">
                  <Column className="bg-white_A700 border border-gray_200 border-solid items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-center justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] w-[99%]">
                      <Text className="rowbrandone" variant="body9">
                        White
                      </Text>
                      <Text className="rowbrandone" variant="body9">
                        #FFFFFF
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_52 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[98%]">
                      <Text className="GrayOne" variant="body9">
                        Gray1
                      </Text>
                      <Text className="F9F9FA" variant="body9">
                        #F9F9FA
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-center justify-between w-[100%]">
                    <Column className="bg-gray_101 items-center lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                      <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[98%]">
                        <Text className="GrayOne" variant="body9">
                          Gray2
                        </Text>
                        <Text className="F9F9FA" variant="body9">
                          #F2F3F5
                        </Text>
                      </Row>
                    </Column>
                    <div className="bg-gray_54 lg:h-[27px] xl:h-[34px] 2xl:h-[38px] 3xl:h-[46px] w-[43%]"></div>
                  </Row>
                  <Column className="bg-gray_201 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-start justify-between 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[9px] mt-[1px] w-[100%]">
                      <Text className="GrayOne" variant="body9">
                        Gray3
                      </Text>
                      <Text className="F9F9FA" variant="body9">
                        #E9EAEE
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-gray_300 items-center justify-start lg:p-[3px] xl:p-[4px] 2xl:p-[5px] 3xl:p-[6px] w-[43%]">
                    <Row className="items-start justify-between xl:mb-[11px] 2xl:mb-[12px] 3xl:mb-[15px] lg:mb-[9px] mt-[3px] w-[99%]">
                      <Text className="GrayOne" variant="body9">
                        Gray4
                      </Text>
                      <Text className="F9F9FA" variant="body9">
                        #DCDEE5
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-bluegray_100 items-center justify-start xl:p-[3px] lg:p-[3px] 2xl:p-[4px] 3xl:p-[5px] w-[43%]">
                    <Row className="items-start justify-between xl:mb-[12px] 2xl:mb-[13px] 3xl:mb-[16px] lg:mb-[9px] mt-[4px] w-[98%]">
                      <Text className="GrayOne" variant="body9">
                        Gray5
                      </Text>
                      <Text className="F9F9FA" variant="body9">
                        #CFD2DB
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-bluegray_201 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                      <Text className="WarningSix" variant="body9">
                        Gray6
                      </Text>
                      <Text className="FF6831" variant="body9">
                        #BEC1CE
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-bluegray_202 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                      <Text className="WarningSix" variant="body9">
                        Gray7
                      </Text>
                      <Text className="FF6831" variant="body9">
                        #ACB0C0
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-bluegray_300 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                      <Text className="WarningSix" variant="body9">
                        Gray8
                      </Text>
                      <Text className="FF6831" variant="body9">
                        #9298AD
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-bluegray_401 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                      <Text className="WarningSix" variant="body9">
                        Gray9
                      </Text>
                      <Text className="FF6831" variant="body9">
                        #7C839C
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-bluegray_500 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                      <Text className="WarningSix" variant="body9">
                        Gray10
                      </Text>
                      <Text className="FF6831" variant="body9">
                        #666E8B
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-bluegray_600 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                      <Text className="WarningSix" variant="body9">
                        Gray11
                      </Text>
                      <Text className="FF6831" variant="body9">
                        #555E7E
                      </Text>
                    </Row>
                  </Column>
                  <Column className="items-center justify-start w-[43%]">
                    <Column className="bg-bluegray_700 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                      <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                        <Text className="WarningSix" variant="body9">
                          Gray12
                        </Text>
                        <Text className="FF6831" variant="body9">
                          #444D71
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-bluegray_801 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[100%]">
                      <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                        <Text className="WarningSix" variant="body9">
                          Gray13
                        </Text>
                        <Text className="FF6831" variant="body9">
                          #364167
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-bluegray_800 items-center justify-start lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px] w-[43%]">
                    <Row className="items-start justify-between 3xl:mb-[11px] lg:mb-[6px] xl:mb-[8px] 2xl:mb-[9px] w-[99%]">
                      <Text className="WarningSix" variant="body9">
                        Gray14
                      </Text>
                      <Text className="FF6831" variant="body9">
                        #25305A
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default Page26;
