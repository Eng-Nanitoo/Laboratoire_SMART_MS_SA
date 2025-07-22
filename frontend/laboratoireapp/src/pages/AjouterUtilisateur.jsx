import './AjouterUtilisateur.css';

function AjouterUtilisateur() {
    return (
        <div className='container-ajouter-utilisateur bg-white rounded-[5px]'>
            <h2 className='font-medium text-lg'>Ajouter un utilisateur</h2>
            <div className="ajouter-utilisateur-form grid grid-cols-3">
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Nom complet</label>
                    <input type="text" placeholder='Nom complet' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Genre</label>
                    <input type="text" placeholder='Genre' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>NNI</label>
                    <input type="text" placeholder='NNI' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Adresse</label>
                    <input type="text" placeholder='Adresse' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Email</label>
                    <input type="text" placeholder='Email' />
                </div>
                <div className="input-label">
                    <label htmlFor="" className='font-medium text-sm'>Telephone</label>
                    <input type="text" placeholder='Telephone' />
                </div>
                <div className="permissions">
                    <label htmlFor="">Acces</label>
                    <div className="choice">
                        <input type="checkbox" name="" id="" />Administrateur
                    </div>
                    <div className="choice">
                        <input type="checkbox" name="" id="" />Responsable de stock
                    </div>
                    <div className="choice">
                        <input type="checkbox" name="" id="" />Technicien de labo
                    </div>
                    <div className="choice">
                        <input type="checkbox" name="" id="" />Caissier
                    </div>
                </div>
                <div className="analyse-types">
                    <label htmlFor="">Type d'analyse autorises</label>
                    <div className="choice">
                        <input type="checkbox" name="" id="" />Analyse 1
                    </div>
                    <div className="choice">
                        <input type="checkbox" name="" id="" />Analyse 1
                    </div>
                    <div className="choice">
                        <input type="checkbox" name="" id="" />Analyse 1
                    </div>
                    <div className="choice">
                        <input type="checkbox" name="" id="" />Analyse 1
                    </div>
                </div>
            </div>
            <div className="submit-button">
                <button className='text-white w-40 text-center rounded-[3px] cursor-pointer'>Enregistrer</button>
            </div>
        </div>
    )
}

export default AjouterUtilisateur
