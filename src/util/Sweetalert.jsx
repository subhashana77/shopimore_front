import React from "react";
import Swal from "sweetalert2";

const Sweetalert = (title, type, text) => {
    return (
        Swal.fire({
            title: title,
            type: type,
            text: text,
        })
    );
}

export default Sweetalert;
