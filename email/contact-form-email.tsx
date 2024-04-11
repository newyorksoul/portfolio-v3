import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-white text-gray-800 font-sans">
          <Container className="max-w-[480px] mx-auto py-20 pb-48">
            <Section className="p-6 border border-solid border-gray-300 rounded-md text-center">
              <Heading className="leading-tight">
                You received the following message from your portfolio's contact form
              </Heading>
          <Text className="mb-4 text-left">
            Hey, <strong>{senderEmail}</strong> sent a message!
          </Text>
          <Text className="mb-4 text-left">{message}</Text>

        </Section>
        //Footer
        <Text className="text-gray-600 text-xs text-center mt-16">
          Isle Byte, LLC. ・ New York City
        </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}