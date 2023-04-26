import React from "react";
import { Button } from "react-bootstrap";

export const SubmitButton = (props) => {
    return(
        <Button size="lg" type="submit">
            {props.label}
        </Button>
    )
}

