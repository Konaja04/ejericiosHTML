import * as React from 'react';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

const App = ()=>{
    const [value, setValue] = React.useState<number | null>(2);

    return <div>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>

    <Typography component="legend">Controlled</Typography>
    <Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
        setValue(newValue);
    }}
    />
    <Typography component="legend">Read only</Typography>
    <Rating name="read-only" value={value} readOnly />
    <Typography component="legend">Disabled</Typography>
    <Rating name="disabled" value={value} disabled />
    <Typography component="legend">No rating given</Typography>
    <Rating name="no-value" value={null} />
    </div>
}
export default App