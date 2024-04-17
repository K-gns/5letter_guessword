function Box(props) {
    let state = "text-black border-2 border-gray-300 dark:text-white";
    if (props.state === "C") state = "bg-emerald-500 text-white";
    if (props.state === "E") state = "bg-amber-500 text-white";
    if (props.state === "N") state = "bg-zinc-500 text-white dark:bg-gray-700";

    return (
        <div
            className={
                "w-8 h-8 sm:w-10 sm:h-10 grid place-items-center p-0 m-0 font-bold text-lg sm:text-2xl " + state
            }
        >
            {props.value}
        </div>
    );
}

function Help() {
    return (
        <>
            <p className="text-left text-sm sm:text-base py-5 font-regular opacity-75 mr-1">
                Загадывается существительное из 5 букв.
                Вам нужно его отгадать.
                <br/>
                На разгадку у вас шесть попыток. <br/> Вписывать можно только настоящие слова-существительные в
                единственном числе.
                <br/> После попытки вам покажет, какие буквы вы угадали и они есть в слове.
            </p>
            <hr />
            <h3 className="text-left font-bold py-5">Примеры</h3>
            <div className="flex gap-1">
                <Box value="М" state="E" />
                <Box value="Ы" state="N" />
                <Box value="С" state="N" />
                <Box value="Л" state="E" />
                <Box value="Ь" state="E" />
            </div>
            <p className="text-left text-sm sm:text-base py-2 opacity-75">
                Буквы "М", "Л", "Ь" оранжевые - они есть в загаданном слове, но стоят в других местах. Буквы "Ы", "С" серые - их в слове нет.
            </p>
            <div className="flex gap-1">
                <Box value="Ф" state="C" />
                <Box value="И" state="C" />
                <Box value="К" state="N" />
                <Box value="У" state="N" />
                <Box value="С" state="N" />
            </div>
            <p className="text-left text-sm sm:text-base py-2 opacity-75">
                Буквы "Ф" и "И" зеленые - они есть в загаданном слове и стоят на нужных местах.
            </p>
            <div className="flex gap-1">
                <Box value="Ф" state="C"/>
                <Box value="И" state="C"/>
                <Box value="Л" state="C"/>
                <Box value="Ь" state="C"/>
                <Box value="М" state="C"/>
            </div>
            <p className="text-left text-sm sm:text-base py-2 opacity-75">
                Когда вы угадаете слово, все буквы окрасятся в зеленый.
            </p>
        </>
    );
}

export default Help;
