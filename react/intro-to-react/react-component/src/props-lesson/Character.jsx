function Character(props){
    return(
        <>
        <div className="card text-center shadow-sm">
            <div className="card-body">
            <h2 className="card-title mb-2">{props.character_name}</h2>
            <h3 className="card-subtitle mb-3 text-muted text-uppercase">{props.character_element}</h3>
            <p className="card-text fs-5 fw-bold text-primary mb-0">{props.character_power_level}</p>
        </div>
        </div>
        </>
    )
}

export default Character