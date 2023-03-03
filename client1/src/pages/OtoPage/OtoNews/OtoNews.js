import NewItem from '../../../components/NewItem';

function OtoNews() {
    return (
        <div
            style={{
                width: '1140px',
                display: 'flex',
                flexWrap: 'wrap',
                margin: '30px auto',
            }}
        >
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
        </div>
    );
}

export default OtoNews;
