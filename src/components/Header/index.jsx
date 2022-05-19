import { Title, HeaderC, Button } from "./style.js";
import {IoIosMoon} from "react-icons/io";

export default function Header({themeToggler}){

    return (
        <HeaderC>
            <Title>Where in the world?</Title>
            <Button onClick={themeToggler}>
                <IoIosMoon/>
                Dark Mode
            </Button>
        </HeaderC>
    )
}