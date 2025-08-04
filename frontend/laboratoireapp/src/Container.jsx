import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/Main'
import Article from './pages/Article';
import { SearchProvider} from "./context/SearchContext";

function Container({element}) {
    
    return (
        <SearchProvider>
            <div className='container min-w-full'>
                <Sidebar/>
                <Header title={element.headerContent.title} description={element.headerContent.description}/>
                <Main>
                    {element.component}
                </Main>
            </div>
        </SearchProvider>
    )
}

export default Container

