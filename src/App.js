import { useEffect, useState, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ArtistView from './components/ArtistView'
import AlbumView from './components/AlbumView'
import Gallery from './components/Gallery'
import SearchBar from './components/Search'
import Spinner from './components/Spinner'
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'
import { createResource as fetchData } from 'helper'
import { createResource as fetchData } from './helper'


const App = () => {
  let searchInput = useRef('')
  let [data, setData] = useState(null)
  let [message, setMessage] = useState('Search for Music!')

  useEffect(() => {
    if (searchTerm) {
        setData(fetchData(searchTerm))
    }
}, [searchTerm])


  const handleSearch = (e, term) => {
    e.preventDefault()
    setData(fetchData(term, 'main'))
  }

  const renderGallery = () => {
    if(data){
        return (
            Suspense fallback= {<Spinner/>} 
                <Gallery data={data} />
            </Suspense>
        )
    }
}


  return (
    <div className="App">
      {message}
      renderGallery()
	  </div>
  )
//         <Route exact path={'/'}>
//           <SearchContext.Provider value={{term: searchInput, handleSearch: handleSearch}}>
//             <SearchBar />
//           </SearchContext.Provider>
//             <DataContext.Provider value={data}>
//               {renderGallery()}
//             </DataContext.Provider>
//         </Route>
//         <Route path="/album/:id">
//           <AlbumView />
//         </Route>
//         <Route path="/artist/:id">
//           <ArtistView />
//         </Route>
//       </Router>
//     </div>
//   );
// }

export default App;