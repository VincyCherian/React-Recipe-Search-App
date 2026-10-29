
import { useState, useEffect } from "react";
import useRecipes from "../hooks/useRecipes";
import { useDebounce } from "../hooks/useDebounce";

import RecipeCard from "./RecipeCard";


// function RecipeSearch()
// {
//     const [query, setQuery] = useState("")
//     const [searchUrl, setSearchUrl] = useState(null);

//     const debouncedQuery = useDebounce(query, 400);

//     const url = debouncedQuery? `/recipes/search?q=${encodeURIComponent(debouncedQuery)}`: '/recipes';

//     const { data, loading, errors } = useRecipes(url)



//     return(
//         <>
//         <form id="searchForm" onSubmit={(e) => e.preventDefault()}>
//             <div>
//                 {/* <label for="searchText">Search</label>  */}
//                 <input id="searchText" type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search for a recipe" /> &nbsp;
//                 <button type="submit" name="Search" class="btn btn-primary">
//                     <b id="search-icon" class="bi bi-search"></b>
//                 </button>
//             </div>
//         </form>

//         <div className="container">
//                 <div className="row g-4 featured-pdt-row">
//                         {!loading && data?.recipes?.length>0? data.recipes.map(m => (<RecipeCard key={m.id} {...m} fList={0} />)) : !loading && <h5 text-align='center' style={{'color':'red'}}>No matching recipes found</h5>}
//                 </div>
//         </div>

//         <br />  <br />  <br />  <br />  <br />
                
//         </>
//     );
// }


function RecipeSearch()
{
    const [query, setQuery] = useState("")
    const [searchUrl, setSearchUrl] = useState("/recipes");
    // const [loading, setLoading] = useState(true)
    // const [errors, setErrors] = useState("")
    // const [data, setData] = useState([])
   // const debouncedQuery = useDebounce(query, 400);

   // const url = debouncedQuery? `/recipes/search?q=${encodeURIComponent(debouncedQuery)}`: '/recipes';
   const {data, loading, errors}  = useRecipes(searchUrl)

   function handleSubmit(e) {
        e.preventDefault();

        const searchTerm = query.trim();

        if (searchTerm==="") {
            setSearchUrl("/recipes");
            
        } 
        else {
            setSearchUrl(`/recipes/search?q=${encodeURIComponent(searchTerm)}` );
        }
    }



    return(
    //     <>
    //     <form id="searchForm" onSubmit={handleSubmit}>
    //         <div>
    //             {/* <label for="searchText">Search</label>  */}
    //             <input id="searchText" type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search for a recipe" /> &nbsp;
    //             <button type="submit" name="Search" className="btn btn-primary">
    //                 <b id="search-icon" className="bi bi-search"></b>
    //             </button> &nbsp; &nbsp;
    //             <button type="button" name="ShowAll" className="btn btn-primary" onClick={()=> {setQuery(""); setSearchUrl("/recipes")}}>
    //                 Show All
    //             </button>
    //         </div>
    //     </form>

    //   {loading && <p>Loading recipes...</p>}

    //   {errors && <p>Error: {errors}</p>} 



    //     <div className="container">
    //             <div className="row g-4 featured-pdt-row">
    //                     {!loading && (data?.recipes?.length>0? data.recipes.map(m => (<RecipeCard key={m.id} {...m} fList={0} />)) : !loading && <h5 text-align='center' style={{'color':'red'}}>No matching recipes found</h5>)}
    //             </div>
    //     </div>

    //     <br />  <br />  <br />  <br />  <br />
                
    //     </>

         <section className="recipe-search-page">
            {/* <h3 className="recipe-search-heading">Explore Recipes</h3> */}

            <form id="searchForm" className="recipe-search-form" onSubmit={handleSubmit} >
                <input id="searchText" type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for a recipe"
                    aria-label="Search for a recipe"
                />

                <button type="submit" className="btn btn-primary search-btn">
                    <i className="bi bi-search" aria-hidden="true"></i>
                    <span>Search</span>
                </button>

                <button type="button" className="btn btn-primary show-all-btn" onClick={()=> {setQuery(""); setSearchUrl("/recipes")}} >
                    Show All
                </button>
            </form>

            {loading && (
                <p className="recipe-status" role="status">
                    Loading recipes...
                </p>
            )}

            {errors && (
                <p className="recipe-error" role="alert">
                    Error: {String(errors)}
                </p>
            )}

            {!loading && !errors && (
                <div className="container recipe-results">
                    <div className="row g-4 featured-pdt-row">
                        {data?.recipes?.length > 0 ? (
                            data.recipes.map((recipe) => ( <RecipeCard key={recipe.id}  {...recipe} fList={0}  />
                            ))
                        ) : (
                            <div className="col-12">
                                <h5 className="no-recipes-message">
                                    No matching recipes found
                                </h5>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
export default RecipeSearch