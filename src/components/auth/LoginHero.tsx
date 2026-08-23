import { Heading } from "@/design-system/components/Typography/Heading";

import { Text } from "@/design-system/components/Typography/Text";

export default function LoginHero() {
  return (
    <div className="hidden h-full flex-col justify-center lg:flex">
      <Heading level={"h1"}>
        Enterprise AI CRM
      </Heading>

      <Text
        className="mt-5 max-w-lg"
        color="secondary"
      >
        Secure, scalable and AI-powered CRM built
        for enterprise organizations.
      </Text>
    </div>
  );
}