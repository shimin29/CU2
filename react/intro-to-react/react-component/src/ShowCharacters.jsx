import Character from "./props-lesson/Character"

function ShowCharacters(){
    return(
        <>
        <Character
        character_name="Spider-Man"
        character_element="Web"
        character_power_level="7000"/>
        <Character 
        character_name="Superman"
        character_element="Yellow Sun"
        character_power_level="9999" />
        {/* Based on the example above, create a character called Goku, element is Saiyan, Power level is "It's over 9000!"  */}
        <Character
        character_name="Goku"
        character_element="Saiyan"
        character_power_level="It's over 9000!" />
        </>
    )
}

export default ShowCharacters