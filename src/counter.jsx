function Counter(counterTitle, counterNumber) {

    setInterval(() => {

        i;

        if (i < counterNumber) {

            i++;

        }

    }, 20);

    return (
        <div>
            <h3>{counterTitle}</h3>
            <h2>{i}</h2>
        </div>
    );
}