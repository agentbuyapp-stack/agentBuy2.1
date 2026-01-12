import { SignUp } from "@clerk/nextjs";

export default function SignUpUser() {
  return (
    <SignUp
      unsafeMetadata={{ signUpType: "user" }}
      //  afterSignInUrl={"/user"}
    />
  );
}
