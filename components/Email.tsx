import React from "react";

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  name: string;
  email: string;
  phoneNumber: string;
  details: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({
  name,
  email,
  phoneNumber,
  details,
}) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              You got a message!
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Hello Kevin & Dan,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              You got an email from <strong>{name}</strong>.
              <br />
              Their email is {email}.
              <br />
              Their Phone Number: {phoneNumber}.
              <br />
              The Details: <br />
              {details}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
