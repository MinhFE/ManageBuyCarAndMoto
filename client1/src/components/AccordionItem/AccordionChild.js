import className from 'classnames/bind';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './AccordionItem.module.scss';

const cx = className.bind(styles);

function AccordionChild({ items = [] }) {
    return (
        <>
            {items.map((item, index) => (
                <Accordion key={index} className={cx('item')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={cx('title')}>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className={cx('content')}>
                            {item.content}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </>
    );
}

export default AccordionChild;
