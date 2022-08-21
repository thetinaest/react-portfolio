import React from 'react';

function Nav(props) {
    const {options, curOption, setCurOption} = props;

    return(
        <header>
            <h1>
                Kris<span>tina</span> Brennan
            </h1>
            <nav>
                <ul>
                    {options.map(option => {
                        return(
                            <li
                                href={option.link}
                                key={option.name}
                                className={curOption.name === option.name ? 'focus': ''}
                                onClick={() => {
                                    setCurOption(option)
                                }}>{option.name}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );  
};

export default Nav;