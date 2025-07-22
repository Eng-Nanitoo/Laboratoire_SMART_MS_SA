import './Article.css';

function Article() {
    return (
        <div className='container-article bg-white rounded-[5px]'>
            <h2 className='font-medium'>Ajouter un article</h2>
            <div className="article-form grid grid-cols-2">
                <div className="input-label">
                    <label htmlFor="" className='text-sm font-medium'>Nom</label>
                    <input type="text" placeholder='Nom'/>
                </div>
                <div className="input-label">
                    <label htmlFor="" className='text-sm font-medium'>Code</label>
                    <input type="text" placeholder='code'/>
                </div>
                <div className="input-label">
                    <label htmlFor="" className='text-sm font-medium'>Quantite en stock</label>
                    <input type="text" placeholder='Quantite'/>
                </div>
                <div className="input-label">
                    <label htmlFor="" className='text-sm font-medium'>Unite de mesure</label>
                    <input type="text" placeholder='unite'/>
                </div>
                <div className="input-label">
                    <label htmlFor="" className='text-sm font-medium'>Quantite recommendee</label>
                    <input type="text" placeholder='Quantite'/>
                </div>
                <div className="input-label">
                    <label htmlFor="" className='text-sm font-medium'>Categorie</label>
                    <input type="text" placeholder='categorie'/>
                </div>
            </div>
            <div className="submit-button">
                <button className='article-register text-white text-sm font-medium rounded-[3px]'>Enregistrer</button>
            </div>
        </div>
    )
}

export default Article
