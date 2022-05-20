import './LoadingSpinner.scss';
import {ClipLoader} from "react-spinners";

export const LoadingSpinner = (props: {
    color: string,
    size: number
}) => {

    const {color, size} = props;

    return <div key={'load'} className={'loading-spinner'}>
        <ClipLoader color={color} loading={true} size={size} />
    </div>
}