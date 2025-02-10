import BaseText from "../../base/BaseText";
import BaseLayout from "../../layouts/BaseLayout";

function Loading() {
  return (
    <>
      <BaseLayout>
        <BaseText text="Loading...." className={"min-h-screen"} />
      </BaseLayout>
    </>
  );
}

export default Loading;
