import React from "react";

const AnswerItem = ({answer, key}) => {

    return(
        <li>
            <input type="radio" id={key} name="meme_questions" value={answer} checked={answer}/>
                <label for={answer}>{answer}</label>
        </li>
    )
}

export default AnswerItem