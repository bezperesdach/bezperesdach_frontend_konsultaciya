import Portal from "../portal/portal";
import SearchablePrices from "./components/searchable-prices/searchable-prices";
import { useAppSelector } from "@/store/hooks";

const PricesSidebar = () => {
  const sidebarShown = useAppSelector((state) => state.generalReducer.pricesSidebarShown);

  return (
    <>
      {sidebarShown ? (
        <Portal id="sidebarPopup">
          <SearchablePrices shown={sidebarShown} />
        </Portal>
      ) : null}
    </>
  );
};

export default PricesSidebar;
