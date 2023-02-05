import { useState } from "react";

export const styleSwitch = (s, h) => {

    const [styles, setStyle] = useState(s);

    const switchStyles = (hover) => {
        if (hover) {
            setStyle(h);
        } else {
            setStyle(s);
        }
    };

    return [styles, switchStyles];

}
