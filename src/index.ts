interface Advice {
    id: number,
    advice: string,
}

(function() {
    //Globals
    const title = document.getElementById('title');
    const inner = document.getElementById('text');
    const button = document.querySelector('button');
    let info: Advice;

    //Events
    document.addEventListener('DOMContentLoaded', initApp);
    button?.addEventListener('click', initApp);

    //Logic
    async function fetchData(): Promise<Advice> {
        try {
            const res = await fetch('https://api.adviceslip.com/advice');
            const resData = await res.json();
            return resData.slip;
        } catch (error) {
            if (error instanceof Error)
                alert(error)
        }
        return info;
    }

    function initApp() {
        fetchData().then((value) => {
            info = {
                id: value.id,
                advice: value.advice,
            }
        })
        if (title) 
            title.textContent = `ADVICE #${String(info.id)}`;
        if (inner) 
            inner.textContent = `"${info.advice}"`  
    }

})()