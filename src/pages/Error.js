import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

const Error = () =>{
    return (
        <>
            <MainNavigation/>
            <main className={classes.content}>
                <h1> An error occured!</h1>
                <p> Couldn't find this page. </p>
            </main>
        </>
    );
}

export default Error;