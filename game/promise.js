const promiseMethod = () => {
    return new Promise((reslove, request)=> {
        setTimeout(() => {
            reslove('hi');
        }, 2000);
    });
}

promiseMethod().then((value) => {
    console.log("done",value);
},
(value)=>{
    console.log("reject");
});


async function abc()
{
        const data = await fetch('https://portal.tycoonstats.com/api/demo')
        console.log(data.text())
}
abc()