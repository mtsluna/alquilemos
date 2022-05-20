import './SuggestionList.scss';
import {LoadingSpinner} from "../LoadingSpinner/LoadingSpinner";
import {SuggestionItem} from "./SuggestionItem/SuggestionItem";
import {SuggestionEmpty} from "./SuggestionEmpty/SuggestionEmpty";

export const SuggestionList = (props: {
    placesToShow: string[],
    setSearchValue: any,
    load: boolean
}) => {

    const {
        placesToShow,
        setSearchValue,
        load
    } = props;

    const clickSuggestion = (suggestion: any) => {
        setSearchValue(suggestion)
    }

    const itemsToRender = (placesToShow: string[]) => {
        return placesToShow.length ? placesToShow.map((value) => <button key={`button_${value}`} onClick={() => {
            clickSuggestion(value);
        }} className={'suggestion-list__clickable-div'}>
            <SuggestionItem value={value}/>
        </button>) : <SuggestionEmpty/>
    }

    return <div className={'suggestion-list'}>
        {
            (!load) ? itemsToRender(placesToShow) : <LoadingSpinner color={'#000000'} size={14}/>
        }
    </div>
}