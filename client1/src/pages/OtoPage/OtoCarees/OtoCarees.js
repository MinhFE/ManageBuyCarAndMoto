import NewItem from '../../../components/NewItem';

function OtoCarees() {
    const location = "Quảng Nam";

    return (
        
        <div
            style={{
                width: '1140px',
                display: 'flex',
                flexWrap: 'wrap',
                margin: '30px auto',
            }}
        >
            <NewItem location={location} />
            <NewItem />
            <NewItem />
            <NewItem />
            <NewItem />
        </div>
    );
}

export default OtoCarees;