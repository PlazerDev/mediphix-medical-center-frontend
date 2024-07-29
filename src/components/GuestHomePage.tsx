import { useAuthContext } from "@asgardeo/auth-react";

function GuestHomePage() {
  const { signIn } = useAuthContext();

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => signIn()}>Log In</button>
      </div>
    </>
  );
}

export default GuestHomePage;
