import './SuggestionItem.scss';

export const SuggestionItem = (props: {
    value: string
}) => {

    const { value } = props;

    return <div key={`div_${value}`} className={'suggestion-item suggestion-item__hover'}>
        {value}
    </div>
}