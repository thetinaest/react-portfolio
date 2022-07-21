import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";

function Nav(props) {
    const {} = props;

    return(
        <header>
            <h1>
                Kristina Brennan
            </h1>
            <nav>
                {options.map(option => {

                })}
            </nav>
        </header>
    );
}