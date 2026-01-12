import { SignUp } from "@clerk/nextjs";

export default function SignUpAgent() {
  return (
    <SignUp
      unsafeMetadata={{ signUpType: "agent" }}
      //   afterSignInUrl={"/agent/preOrder"}
    />
  );
}
