import Card from "./card";

function Tours({tours, removeTour}){
    return(
        <div className="Container">
            <div>
                <h1 className="title">Tourism Guide</h1>
            </div>
            <div className="cards">
            {
                tours.map((tour) => {
                    return <Card key={tour.id} {...tour} removeTour = {removeTour}></Card>
                })
            }
            </div>
        </div>
    );
};

export default Tours;