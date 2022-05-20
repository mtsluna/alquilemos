import './Search.scss';
import {MdSearch} from "react-icons/md";
import {useState} from "react";
import {SuggestionList} from "./SuggestionList/SuggestionList";

const places: string[] = [
    'Godoy Cruz, Mendoza',
    'Maipú, Mendoza',
    'Ciudad de Mendoza, Mendoza',
    'Lujan de Cuyo, Mendoza',
    'Tunuyan, Mendoza',
    'Tupungato, Mendoza',
    'Lavalle, Mendoza',
];

export const Search = () => {

    const [placesToShow, setPlacesToShow] = useState<string[]>([]);
    const [load, setLoad] = useState<boolean>(false);
    const [openSuggestion, setOpenSuggestion] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const changeSearchInput = (e: any) => {
        setSearchValue(e.target.value);
        searchLoad();
        setPlacesToShow(places.flatMap((value) =>
            value.toLowerCase().includes(e.target.value.toLowerCase()) && e.target.value ? [value] : []
        ));
    }

    const searchBorderRadius = (!openSuggestion || !searchValue.length) ? 'search' : 'search search__border-radius-top'

    const searchLoad = () => {
        if (!load) {
            setLoad(true);
            setOpenSuggestion(true);
            setTimeout(() => {
                setLoad(false);
            }, 3000)
        }
    }

    const makeSearch = () => {
        setOpenSuggestion(false);
    }

    return <div className={searchBorderRadius}>
        <div className={'search__box'}>
            <input value={searchValue} onChange={(e) => {
                changeSearchInput(e)
            }} className={'search__input'}/>
            <button onClick={() => { makeSearch() }} className={'search__clickable-search'}>
                <MdSearch className={'search__button'}/>
            </button>
        </div>
        {
            (openSuggestion && searchValue.length) ?
            <SuggestionList load={load} placesToShow={placesToShow} setSearchValue={setSearchValue}/> : <div/>
        }
    </div>
}