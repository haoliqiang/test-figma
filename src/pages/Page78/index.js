import React from "react";

import { Column, Stack, Img, Text, Button } from "components";
import Header1 from "components/Header/Header1";

const Page78 = () => {
  return (
    <>
      <Column className="bg-white_A700 font-pingfangsc items-center justify-start mx-[auto] lg:pb-[206px] xl:pb-[257px] 2xl:pb-[290px] 3xl:pb-[348px] w-[100%]">
        <Header1 className="w-[100%]" />
        <Column className="items-center justify-start lg:mt-[189px] xl:mt-[236px] 2xl:mt-[266px] 3xl:mt-[319px] w-[17%]">
          <Stack className="bg-white_A700 lg:h-[171px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] lg:w-[170px] xl:w-[213px] 2xl:w-[240px] 3xl:w-[288px]">
            <Img
              src="images/img_group431_7.svg"
              className="bottom-[0] Group431"
              alt="Group431"
            />
            <Column className="absolute bottom-[8%] justify-start left-[16%] w-[57%]">
              <Img
                src="images/img_group433_141X121.svg"
                className="lg:h-[101px] xl:h-[126px] 2xl:h-[142px] 3xl:h-[170px] lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] w-[88%]"
                alt="Group433"
              />
              <Text
                className="lg:ml-[17px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rowbrand"
                variant="body8"
              >
                哎呀，网络出错了
              </Text>
            </Column>
          </Stack>
          <Button
            className="font-normal not-italic lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[48%]"
            shape="RoundedBorder4"
            size="lg"
            variant="FillBlueA400"
          >
            重新连接
          </Button>
        </Column>
      </Column>
    </>
  );
};

export default Page78;
