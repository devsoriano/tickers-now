import { useLocation } from "react-router-dom";
import { CardDetailToday } from "../../components/CardDetailToday";
import { RecordInfoSomeDay } from "../../components/RecordInfoSomeDay";
import { HistoryTicker } from "../../components/HistoryTicker";
import { Layout } from "../../components/Layout";
import { GoBack } from "../../components/GoBack";
import { GoOthersTickers } from "../../components/GoOthersTickers";

export const Detail = () => {
  const location = useLocation();

  return (
    <Layout>
      <GoBack />
      <CardDetailToday dataToday={location.state.item} />
      <RecordInfoSomeDay symbol={location.state.item.symbol} />
      <HistoryTicker symbol={location.state.item.symbol} />
      <GoOthersTickers />
      <GoBack />
    </Layout>
  );
};
