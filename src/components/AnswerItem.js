import React from "react";

const AnswerItem = ({optionalAnswer}) => {

    const handleInputSelection = () => {

    }

    return(
        <li>
            <input type="radio" id={optionalAnswer} name="meme_questions" value={optionalAnswer}/>
                <label for={optionalAnswer}>{optionalAnswer}</label>
        </li>
    )
}

export default AnswerItem