import React from "react";

import { Column, Row, Text, Img, Button, List, Line, Input } from "components";

const StartPagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-[auto] w-[100%]">
        <Row className="bg-indigo_A200 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end p-[13px] sm:p-[5px] md:p-[6px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1677px] ml-[auto] mr-[auto] sm:mx-[0] my-[3px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text className="flex-grow text-gray_50" as="h1" variant="h1">
              Join AeolusFlights today and save up to 20% on your flight using
              code TRAVEL at checkout. Promotion valid for new users only.
            </Text>
            <Img
              src="images/img_close.svg"
              className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
              alt="close"
            />
          </Row>
        </Row>
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:px-[12px] sm:px-[15px] px-[24px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1868px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-white_A700 sm:h-[26px] md:h-[34px] h-[64px] sm:mb-[3px] md:mb-[4px] mb-[9px] md:mt-[10px] mt-[20px] sm:mt-[7px] w-[11%]"></div>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] sm:w-[100%] w-[36%]">
              <Column className="flex flex-col items-center sm:mx-[0] p-[10px] md:p-[5px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[11%]">
                <Text
                  className="not-italic text-bluegray_400 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Flights
                </Text>
              </Column>
              <Column className="flex flex-col items-center md:ml-[25px] ml-[49px] sm:mx-[0] p-[10px] md:p-[5px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[11%]">
                <Text
                  className="mb-[3px] not-italic text-bluegray_400 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Hotels
                </Text>
              </Column>
              <Column className="flex flex-col items-center md:ml-[25px] ml-[49px] sm:mx-[0] p-[10px] md:p-[5px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[14%]">
                <Text
                  className="not-italic text-bluegray_400 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Packages
                </Text>
              </Column>
              <Column className="flex flex-col items-center md:ml-[25px] ml-[49px] sm:mx-[0] p-[10px] md:p-[5px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[11%]">
                <Text
                  className="not-italic text-bluegray_400 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Sign in
                </Text>
              </Column>
              <Button className="cursor-pointer font-normal min-w-[15%] sm:ml-[19px] md:ml-[25px] ml-[49px] sm:my-[2px] md:my-[3px] my-[6px] not-italic text-[16px] text-center text-gray_51 w-[max-content]">
                Sign up
              </Button>
            </Row>
          </Row>
        </Row>
        <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[43px] w-[100%]">
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:p-[15px] md:p-[48px] p-[93px] w-[100%]"
            style={{ backgroundImage: "url('images/defaultNoData.png')" }}
          >
            <Column className="flex flex-col items-center justify-start max-w-[1200px] mb-[152px] sm:mb-[60px] md:mb-[78px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_herotextgradi.png"
                className="max-w-[100%] sm:w-[100%] w-[63%]"
                alt="HeroTextGradi"
              />
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mt-[19px] md:mt-[24px] mt-[48px] outline outline-[1px] outline-bluegray_100 rounded-radius4 shadow-bs w-[100%]">
                <List
                  className="gap-[0.50px] md:gap-[1px] sm:gap-[1px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-[repeat(1,_1fr_1px)_1fr] min-h-[auto] sm:w-[100%] w-[55%]"
                  orientation="horizontal"
                >
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[3px] md:p-[4px] p-[8px] rounded-radius4 w-[100%]">
                    <Img
                      src="images/img_airplane.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="airplane"
                    />
                    <Text
                      className="flex-grow sm:ml-[3px] md:ml-[4px] ml-[8px] not-italic text-bluegray_400"
                      as="h2"
                      variant="h2"
                    >
                      From where?
                    </Text>
                  </Row>
                  <Line className="self-center w-[1px] h-[48px] sm:h-[20px] md:h-[25px] bg-bluegray_100" />
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:p-[3px] md:p-[4px] p-[8px] rounded-radius4 w-[100%]">
                    <Img
                      src="images/img_airplane.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="airplane One"
                    />
                    <Text
                      className="flex-grow sm:ml-[3px] md:ml-[4px] ml-[8px] mr-[179px] sm:mr-[71px] md:mr-[92px] not-italic text-bluegray_400"
                      as="h2"
                      variant="h2"
                    >
                      Where to?
                    </Text>
                  </Row>
                </List>
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:p-[3px] md:p-[4px] p-[8px] rounded-radius4 sm:w-[100%] w-[21%]">
                  <Img
                    src="images/img_trash.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                    alt="trash"
                  />
                  <Text
                    className="flex-grow sm:ml-[3px] md:ml-[4px] ml-[8px] sm:mr-[25px] md:mr-[33px] mr-[64px] not-italic text-bluegray_400"
                    as="h2"
                    variant="h2"
                  >
                    Depart - Return
                  </Text>
                </Row>
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[17%]"
                  name="adultCounter"
                  placeholder="1 adult"
                  prefix={
                    <Img
                      src="images/img_user.svg"
                      className="ml-[2px] mr-[8px] sm:mr-[3px] md:mr-[4px] rounded-radius4 my-[auto]"
                      alt="user"
                    />
                  }
                ></Input>
                <Button className="cursor-pointer font-normal min-w-[8%] not-italic text-[18px] text-center text-gray_51 w-[max-content]">
                  Search
                </Button>
              </Row>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default StartPagePage;
