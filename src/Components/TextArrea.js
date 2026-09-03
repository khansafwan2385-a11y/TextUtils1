import React,{useState} from 'react'


export default function TextArrea({showAlert}) {
 
  const change = (event)=>{

    setText(event.target.value);
    
    
    
  }
  const convertToUpperCase = ()=>{
    let newText = Text.toUpperCase();
    setText(newText);
    if(Text.length!==0){
       showAlert("Text Is Convert To UpperCase","success");
    
    }else{
      showAlert("Phele Text Enter Karo","danger")
    }
   

  }
  const Handler = (event)=>{
    change(event);
    counter(event);
  }
  const counter = (event) => {
  const words = event.target.value.split(/\s+/);
  let finalWords = words.filter((ele)=>{
    return ele!=="";
  });


  const character = event.target.value.trim().split("");
  const finalCharcter = character.filter((ele)=>{
    return ele!==" ";
  });

  

  if (event.target.value.trim() === "") {
    setCountWord(0);
    setCountCharacter(0);
  } else {
    setCountWord(finalWords.length);
    setCountCharacter(finalCharcter.length);
  }

  
}
  const convertToLowerCase =()=>{
    let newText1 = Text.toLowerCase();
    setText(newText1);
    if(Text.length!==0){
       showAlert("Text Is Convert To LowerCase","success");
    }else{
      showAlert("Phele Text Enter Karo","danger")
    }
    
  }
  const ClearText=()=>{
    setCountWord(0);
    setCountCharacter(0);
   let  newText2 = "";
    setText(newText2);
    if(Text.length!==0){
       showAlert("Text Is Clear","success");
    }else{
      showAlert("Phele Text Enter Karo","danger")
    }
    
  }
  // const textCaptalize=()=>{
  //   const textArray = Text.split(/\s+/);
  //   // const finalTextArray = textArray.filter((ele)=>{
  //   //   return ele!="";
  //   // });
  //   const lastFinalTextCaptalizeArray = textArray.map((words)=>{
  //     return words[0].toUpperCase()+words.slice(1).toLowerCase();
  //   });
  //   let newText4 = lastFinalTextCaptalizeArray.join(" ");
  //   setText(newText4);
  // }
  const textCaptalize = () => {
  const newText = Text.replace(/\b\w+/g, (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  setText(newText);
  if(Text.length!==0){
         showAlert("Text Is Convert To Captalize Text","success");
    }else{
      showAlert("Phele Text Enter Karo","danger")
    }

};
    
  
  let [CountWord,setCountWord]=useState(0);
  const [CountCharacter,setCountCharacter]=useState(0);

  const[Text,setText] = useState("");

  const CopyText=()=>{
   
    navigator.clipboard.writeText(Text);
    if(Text.length!==0){
      
       showAlert("Text Is Copy","success");
    }else{
      showAlert("Phele Text Enter Karo","danger")
    }
      
    }
    
  
  const RmoveSpace =()=>{
    let textArray = Text.split(/[ ]+/);
    setText(textArray.join(" "));
    if(Text.length!==0){
       showAlert("Space is removed","success");
    }else{
      showAlert("Phele Text Enter Karo","danger")
    }
    
  }
  return (
        <>
          
<div className='container  mt-0'>
 <h1 className='text10'>Enter Text For Analyze</h1>
        <div className="form-floating container">
        <textarea className="form-control"  id="floatingTextarea" value={Text} onChange={Handler} style={{height:"200px"}}></textarea>
        <button className='btn btn-primary mt-4' onClick={convertToUpperCase}>Convert To uperCase</button>
        <button className='btn btn-primary mt-4 ms-4' onClick={convertToLowerCase}>Convert To lowerCase</button>
         <button className='btn btn-primary mt-4 ms-4' onClick={ClearText}>Clear Text</button>
         <button className='btn btn-primary mt-4 ms-4' onClick={textCaptalize}>Captalize</button>
         <button className='btn btn-primary mt-4 ms-4' onClick={CopyText}>Copy Text</button>
         <button className='btn btn-primary mt-4 ms-4' onClick={RmoveSpace}>Remove Extra Space</button>
         

        </div>
        <div className="container my-5 ms-0">
          <h1>Your Text Sumary</h1>
          <p className='ms-2 mb-1 yaya'>Total word : {CountWord}</p>
          <p className='ms-2 yaya mb-1'>Total Character : {CountCharacter}</p>
          <p className='ms-2 yaya'>Read Time : {0.008*CountWord} Minutes</p>
          <h2 className='ms-2 '>Preview</h2>
           <p className='ms-2'>{Text.length>0?Text:"Enter somthing in the text box about to priview it hare. "}</p>



         </div>
        </div>
       
        </>
    
  )
}
