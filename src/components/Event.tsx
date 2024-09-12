import { FC } from "react";

interface EventInterface {
    event?: string;
    color?: 'red'|'blue'|'green'|'orange'|'yellow'|'magenta'|'teal'|'pink'
    location?: string;
}

const Event: FC<EventInterface> = ({event, color}) => {
    return (
        <div className={`Event ${color}`}>
        <h5 >{event}</h5>
        </div>
    );
}

export default Event;