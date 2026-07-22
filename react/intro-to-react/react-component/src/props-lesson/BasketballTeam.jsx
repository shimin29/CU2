import BasketballPlayer from "./BasketballPlayer"

function BasketballTeam({team_name = "Unnamed Team Name", team_star_player = "Unnamed Star Player" , team_manager = "Unnamed Manager", players = ["Unnamed Players"]}){
    console.log(team_name)
    return(
        <div>
            <h2>Team Name:{team_name}</h2>
            <h3>Star Player:{team_star_player}</h3>
            <p>Manager: {team_manager}</p>
            <h3>Players:</h3>
            {/* .map() is for you to iterate through every element in the array */}
            {players.map((player, index) => (
                <BasketballPlayer key={index} player_name={player}/>
            ))}
            {/* In the instance above, we iterate through players */}
            {/* Reference from ShowBasketballTeam.jsx to see the players, it should be in the form of an array */}
            {/* Because it is an array, we use .map() to parse through each element */}
            {/* Each item in the array will be used as 'player' in the .map() function */}
            {/* We also include index as the key because we are displaying multiple BasketballPlayer components */}
            {/* Then, we use 'player' to assign to BasketballPlayer's player_name prop, so it can display the player_name in the BasketballPlayer component */}
        </div>
    )
}

export default BasketballTeam 