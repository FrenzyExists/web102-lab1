import { FC } from "react";

interface EventInterface {
    event?: string;
    color?: 'red'|'blue'|'green'|'orange'|'yellow'|'magenta'|'teal'|'pink'
    location?: string;
}

const Event: FC<EventInterface> = ({event, color}) => {
    return (
        <>
        <h5 className={`Event ${color}`}>{event}</h5>
        </>
    );
}

export default Event;