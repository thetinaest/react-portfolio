import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from 'react';

function Nav(props) {
    const {options} = props;

    return(
        <header>
            <h1>
                Kristina Brennan
            </h1>
            <nav>
                <ul>
                    {options.map(option => {
                        return(
                            <li key={option.name}><a href={option.link}>{option.name}</a></li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );  
};

export default Nav;