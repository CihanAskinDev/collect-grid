import content from "../data/plants.json";
import CollectionPanel from "./CollectionPanel";
import "../styles/Collection.css";

export default function CollectionList() {

    return (
        <>
            <h2>Collection List</h2>
            <div className="collection-container">

            </div>
            {
                content.map((element, index) => {

                    return (
                        <div key={index} className="collection-panel">
                            <CollectionPanel 
                            key={index}
                            data={element}/>
                        </div>
                    )
                })
            }
        </>
    )

}