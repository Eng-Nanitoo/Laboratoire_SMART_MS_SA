import './AjouterSpecialite.css';

function AjouterSpecialite() {
    return (
        <div className='container-ajouter-specialite bg-white rounded-[5px]'>
            <h2 className='font-medium text-lg'>Ajouter une spécialité</h2>
            <div className="ajouter-specialite-form">
                <div className="input-label">
                    <label htmlFor="">Nom de la specialite</label>
                    <input type="text" placeholder='Nom de la specialite' />
                </div>
                <div className="input-label">
                    <label htmlFor="">Description</label>
                    <textarea placeholder='Description de la specialite'></textarea>
                </div>
                <div className="associed-analyse">
                    <label htmlFor="">
                        Analyse associe 
                        <svg className='dropdown-icon inline-block' width="18" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L0.803848 0.75L11.1962 0.75L6 6Z" fill="#D9D9D9"/>
                        </svg>
                    </label>
                    <div className="choices">
                        <div className="choice">
                            <input type="checkbox" name="" id="" /> Analyse 1
                        </div>
                        <div className="choice">
                            <input type="checkbox" name="" id="" /> Analyse 1
                        </div>
                        <div className="choice">
                            <input type="checkbox" name="" id="" /> Analyse 1
                        </div>
                    </div>
                </div>
            </div>
            <div className="submit-button">
                <button className='text-white rounded-[5px]'>Enregistrer</button>
            </div>
        </div>
    )
}

export default AjouterSpecialite
