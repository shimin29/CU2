import BasketballTeam from "./props-lesson/BasketballTeam";


function ShowBasketballTeam(){
    //Using Spread Operator with Props
    const newBasketballTeam = {
        team_name: "Golden State Warriors",
        team_star_player: "Stephen Curry",
        team_manager: "Mike Dunleavy Jr.",
        players: ["Draymond Green", "Brandin Podziemski", "Al Horford", "Malevy Leons", "Jimmy Butler"]
    }

    return(
        <div>
            {/* You can use Spread Operator when you call a component */}
            <BasketballTeam {...newBasketballTeam}/>
            <BasketballTeam
            team_name="Los Angeles Lakers"
            team_star_player="LeBron James"
            team_manager="Rob Pelinka" 
            players={[
                "LeBron James",
                "Luka Doncic",
                "Dalton Knecht",
                "Jake LaRavia",
                "Bronny James"
            ]}
            />
            <BasketballTeam
            
            team_name="New York Knicks"
            team_star_player="Jalen Brunson"
            team_manager="Doc Rivers" 
            players={[
                "Jalen Brunson",
                "Mikal Bridges",
                "OG Anunoby",
                "Karl-Anthony Towns"
            ]}
            />
        </div>
    )
}

export default ShowBasketballTeam