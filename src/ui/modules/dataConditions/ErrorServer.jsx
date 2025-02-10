import BaseText from "../../base/BaseText";
import BaseLayout from "../../layouts/BaseLayout";

function ErrorServer() {
  return (
    <>
      <BaseLayout>
        <BaseText
          text="Error Server || Reload Again"
          className={"min-h-screen"}
        />
      </BaseLayout>
    </>
  );
}

export default ErrorServer;
