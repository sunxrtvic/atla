import React from 'react';

export default function Characters(props) {
    const { characters } = props;

    const handleBackHome = () => {
        window.location.href = '/';  // Redirige a la página principal
    };

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={handleBackHome}>Volver al Inicio</span> {/* Al hacer click se redirige */}
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.photoUrl} alt={character.name}></img>
                        </div>

                        <div>
                            <h3>{character.name}</h3>
                            <p>Gender: <span>{character.gender ? character.gender : "Unknown"}</span></p>
                            {character.hair && <p>Hair: <span>{character.hair}</span></p>}
                            {character.eye && <p>Eye color: <span>{character.eye}</span></p>}
                            {character.skin && (
                                <p>{character.skin === "Fur" || characters.skin === "Scales" ? "Skin" : "Skin tone"}: {character.skin}</p>
                            )}
                            <p>Bending/Weapon: <span>{character.weapon ? character.weapon : "None"}</span></p>
                            <p>Profession: <span>{character.profession ? character.profession : "None"}</span></p>
                            {character.affiliation && <p>Affiliated with {character.affiliation}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
