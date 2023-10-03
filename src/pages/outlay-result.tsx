import { GlobalLayout } from "@/layouts/GlobalLayout";
import { OutlayResult } from "@/modules/outlay/components/OutlayResult";
import { OutlaySuccess } from "@/modules/outlay/components/OutlaySuccess";
import { useState } from "react";

const OutlayResultPage = () => {
  const [resultSent, setResultSent] = useState(false);

  const onSent = () => setResultSent(true);

  return resultSent ? <OutlaySuccess /> : <OutlayResult onSent={onSent} />;
};

OutlayResultPage.layout = (page: React.ReactElement) => (
  <GlobalLayout>{page}</GlobalLayout>
);

export default OutlayResultPage;
