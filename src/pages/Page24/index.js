import React from "react";

import { Column, List, Row, Text } from "components";

const Page24 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:p-[30px] xl:p-[38px] 2xl:p-[43px] 3xl:p-[51px] w-[100%]">
        <List
          className="gap-[0] lg:mb-[20px] xl:mb-[25px] 2xl:mb-[28px] 3xl:mb-[34px] min-h-[auto] mt-[4px] w-[98%]"
          orientation="vertical"
        >
          <header className="lg:my-[14px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] w-[100%]">
            <Row className="items-center rounded-radius6 w-[100%]">
              <Column className="items-center w-[3%]">
                <Text
                  className="cursor-pointer hover:font-normal columnfivehundredsixty"
                  variant="body6"
                >
                  <span className="text-bluegray_500 font-dinpro1 lg:text-[17px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[28px]">
                    C
                  </span>
                  <span className="text-bluegray_500 font-dinpro1 lg:text-[15px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px]">
                    {" "}
                  </span>
                  <span className="text-bluegray_500 font-pingfangsc lg:text-[15px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px]">
                    级
                  </span>
                </Text>
              </Column>
              <div className="bg-red_301 lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] lg:ml-[40px] xl:ml-[50px] 2xl:ml-[56px] 3xl:ml-[67px] rounded-radius6 w-[30%]"></div>
              <div className="bg-gray_52 lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] rounded-radius6 w-[30%]"></div>
              <div className="bg-gray_52 lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] rounded-radius6 w-[30%]"></div>
            </Row>
          </header>
          <Column className="items-center justify-start lg:my-[14px] xl:my-[17px] 2xl:my-[19px] 3xl:my-[23px] w-[100%]">
            <Row className="items-center rounded-radius6 w-[100%]">
              <Column className="items-center w-[3%]">
                <Text className="columnfivehundredsixty" variant="body6">
                  <span className="text-bluegray_500 font-dinpro1 lg:text-[17px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[28px]">
                    B
                  </span>
                  <span className="text-bluegray_500 font-pingfangsc lg:text-[15px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px]">
                    级
                  </span>
                </Text>
              </Column>
              <div className="bg-deep_orange_400 lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] lg:ml-[42px] xl:ml-[53px] 2xl:ml-[59px] 3xl:ml-[71px] rounded-radius6 w-[30%]"></div>
              <div className="bg-deep_orange_400 lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] rounded-radius6 w-[30%]"></div>
              <div className="bg-gray_52 lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] rounded-radius6 w-[30%]"></div>
            </Row>
            <Row className="items-center lg:mt-[28px] xl:mt-[35px] 2xl:mt-[39px] 3xl:mt-[47px] rounded-radius6 w-[100%]">
              <Column className="items-center w-[3%]">
                <Text className="columnfivehundredsixty" variant="body6">
                  <span className="text-bluegray_500 font-dinpro1 lg:text-[17px] xl:text-[21px] 2xl:text-[23px] 3xl:text-[28px]">
                    A
                  </span>
                  <span className="text-bluegray_500 font-pingfangsc lg:text-[15px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px]">
                    级
                  </span>
                </Text>
              </Column>
              <div className="bg-cyan_401 lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] lg:ml-[42px] xl:ml-[53px] 2xl:ml-[59px] 3xl:ml-[71px] rounded-radius6 w-[30%]"></div>
              <div className="bg-cyan_401 lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] rounded-radius6 w-[30%]"></div>
              <div className="bg-cyan_401 lg:h-[35px] xl:h-[43px] 2xl:h-[48px] 3xl:h-[58px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[9px] rounded-radius6 w-[30%]"></div>
            </Row>
          </Column>
        </List>
      </Column>
    </>
  );
};

export default Page24;
