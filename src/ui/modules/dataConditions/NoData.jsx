import BaseText from "../../base/BaseText";
import BaseLayout from "../../layouts/BaseLayout";

function NoData() {
  return (
    <>
      <BaseLayout>
        <BaseText text="No Data" className={"min-h-screen"} />
      </BaseLayout>
    </>
  );
}

export default NoData;
