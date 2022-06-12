import { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


// const useFetch = (url) => {

//     const [data, setData] = useState(null);
//     const [ isPending, setisPending] = useState(true);
//     const [ error, setError] = useState(null);

//     useEffect( () => {

        
//         const abortCont = new AbortController();

//         console.log('useEffect running!');
//         setTimeout(
//             () => {
//               fetch(url, { signal : abortCont.signal })
//               .then( (res) => {
//                   if(!res.ok){
//                       throw Error('could not fetch the data'); 
                      
//                   } 
//                   return res.json()
//               }
//               ).then( data =>{
//                   console.log(data)
//                   setData(data);
//                   setisPending(false);
//                   setError(null);
//                 }).catch( err => { 
//                     if(err.name === "AbortError"){
//                         console.log('fetch aborted');
//                     }
//                     else{
//                         setError(err.msg);
//                         setisPending(false);
//                     }
                    
//                 });
//             }, 1000);

//         return () => abortCont.abort() ;
//     }, [url]);

//     return {data, isPending, error};
// }


const useFetch = () => {

    const db = firebase.firestore();
    const [data, setData] = useState([]);

    useEffect( () => {
        db.collection("react-blog")
        .get()
        .then((query) => {
            let arr = [];
            query.docs.map((doc) =>
            arr.push({
                 id: doc.id,
                 title: doc.data().title,
                 content: doc.data().body,
                 author: doc.data().author
                })     
            );
            setData(arr);
        });
    }, [db]);

    return data;
}

export default useFetch;