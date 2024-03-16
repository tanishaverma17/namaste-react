import ItemList from "./ItemList";

const RestaurantCategory = ({ MenuData,showIndex, showItem,setHideShow, setShowIndex }) => {
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto bg-gray-200 shadow-lg p-4 my-3">
        <div
          className="cursor-pointer flex justify-between"
          onClick={() => {
            setShowIndex()
            if(showIndex) setHideShow()
          }}
        >
          <span className="font-bold">
            {MenuData.title} ({MenuData.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        {/*Body*/}
        {showItem && <ItemList items={MenuData.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
