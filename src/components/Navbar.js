import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Settings from "./Settings";

function Navbar(props) {
    return (
        <div className="navbar flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black dark:text-white">
            <QuestionMarkIcon
                onClick={() => {
                    props.help(true);
                }}
            />
            <h1 className="text-3xl font-bold tracking-wider">5БУКВ</h1>
            <Settings darkness={props.darkness} dark={props.dark}/>
        </div>
    );
}

export default Navbar;
