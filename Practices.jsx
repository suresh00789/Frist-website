import React from 'react'
import { useState } from 'react'

const Practices = () => {
  const [ison, setIson] = useState(false)
  const [date, setDate] = useState("");
  const handleClick = () => {
    console.log(handleClick);
    setIson(!ison)
  }
  // yha se isko display karne ke liye map ka use kiya jata hai .
  const user = [
    { name: "suresh" },
    { cast: "jangid" },
    { age: 17 }
  ]

  //  yah kuch bhi value pass karke return me print kara akte hai 

  const heading = "ofuwfhfifgffigf"
  const pera = "hello i am suresh jangid "
  const [count, setCount] = useState(0)

  //  but ab hume ek function banana padta hai jisse
  //  hamare pass value update ho jaayega 
  const handleClicktome = () => {
    setCount(() => count + 1)
  }

  // button ke data ko show karne ke liye hame phle yaha se define karna padta hai .
  // const handleClick = () => {
  //   alert("hello i am suresh jangid ")
  // }
  let age = 16

  let watch = "not watched"
  if (age === 18) watch = "not watched"

  const students = []

  //  yha par hamm let se print karvake display kara sakte hai <chota      > bda our yah print se return me {me valeu }
  //  passs kara ne se diplay ho ta hai 



 setInterval(() => {
 const now = new Date()
 const formet = now.toLocaleDateString()
 const formeted = now.toLocaleTimeString()
 setDate(`${formet} - ${formeted}`)
 }, 1000)


  //\\///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\////\\//\\//\/\\/\\//\\//\\//\\//\\//\\//\\//
  return (

    <>
      {/* <div>
        <h1> heading:-{heading}</h1>
        <p>{pera}</p> */}


      {/* imp  */}
      {/* ====>>> ye impotend hai ise se hamm koi value ko true ya false kara sajte hai  */}

      {/* <button> {age === 18 ? 'true' : 'false'} </button>
        <button>{watch}</button>

      </div> */}

      {/* is ham students ya koi ou value ho tho hamm use false ya true kar sakte hai  */}

      {/* imp */}
      {/* is mathod me hamm ! optar use kar sakte hai jisse hamm && ke baad wale mathod ko run kara sake hai  */}
      {/* <p>{!students.length && " no studendts found"}</p>
      <p>number of  students {students.length}</p> */}

      {/* =====================================================>>> ye pura hia jo hmara map hai yha se suraat hota hai. */}
      {/* const name = () => {
      name.push("suresh")
   }
    */}
      {/* ye map ko pass krne se hoa
         hai par mere pass json file nahi hai our 
        jab json file se data yah pass karvate hai 
        tho ye props yha print ya show honge .  */}

      {/* ye map hai isme key ki sabe jyada need
     rhti hai uske bina map kam nahi karga . */}
      {/* 
        //  {/* <ul>
        //     {
        //       name.map(( index) => {
        // 
        //  =======>>>>>>> isme agar {} ise pass karenge toh map kam nahi karga lekin () ise pass karenge toh kam aata hai .
        //       return(
        //   <li key={index}>
        //           <span>{name}</span>
        //         </li>
                   )
        //       }))
        //     }
        //  </ul> */}
      {/* =====================================================>>> ye pura hia jo hmara map hai yha se close hota hai. */}

      {/* button ko ese difaine karte hai jisse data show hota hai  */}
      {/* <button className='bg-red-500 text-white mb:left-0 mt-4 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out' onClick={handleClick}>click me</button> */}
      {/* =======>>> ye use kana jaruri hai ye sabse asan hai because  isme jayada time nahi lagta hai */}



      {/* isme jab hamm usestate ka use karte
        hai to koi bhi value ko change kar sakte 
        hai jese ki 1+2=3 or 1+2=4 etc.our 
        is mathod se click karke agli value ko 
        print kra sakte hai isko definede kar sakte hai */}
      {/* <section>
        <h1>{count}</h1>
        <button className='bg-red-500 text-white mb:left-0 mt-4 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out' onClick={handleClicktome}>click me</button>
      </section> */}


      {/* is trha se map ka use hota hai 
      bhaut assan hota hai isme key ko pass
       kra na padta hai our uper me kuch bhi defaine
        ho tho use map ki madad se display karaya jata hai  */}
      {/* <section>
          <h1 className="flex font-extrabold flex-col  items-center justify-center">user list </h1>
          <ul>
            {
              user.map((user,index) => {
                return (
                  <li className='flex flex-col  items-center justify-center' key={index}>
                    {user.name} {user.age} {user.cast}
                  </li>
                )
              })
            }
          </ul>
           <button className='bg-red-500 text-white  mb:left-0 mt-4 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out' onClick={() => alert('hello suresh')}>hello suresh!!!</button>
        </section> */}


      {/* yha hame onclick eliment ka use karna pdta hai 
        jisse on / off button change ho jaaye. */}

      {/* ================================================================================ */}
      {/* <div className="container animate-bounce animate-duration-4000 animate-ease-in-out text-white bg-white h-36 w-96 m-auto mt-10 border-2 border-gray-800 shadow-2xl p-4 rounded-2xl">
                <div className="toggle-container" onClick={handleClick}>
                   ================================================================
                   
                   
                   <div className={`switch-button translate-x-[${ison ? "100%" : "0%"}] ${ison ? "bg-green-500" : "bg-red-500"} p-2 rounded-full`}> */}
      {/* yha hme ek condition ka use karna pdta hai 
                       jise color ya button ki value change ho jaaye.
                       our ise switcen me hame ${``} ka use karna pdta hai 
                       kyunki ${``} ke andar javascript code likh sakte hai.
                       nahi toh ye run nahi hoga isme hame kuch bhi value pass kar sakte hai.
                       */}

      {/* ================================================================== */}
      {/* <button className="text-white font-bold">
                            {ison ? "on" : "off"}
                        </button> */}


      {/* ========================================================================= */}
      {/* our yhan bhi hame condition ka use krna pdta hai 
                        jisse on/off button ki value change ho jaaye. */}
      {/* </div>
                </div>
            </div> */}
      {/* ================================================================================ */}


      {/* <section className="todo-container">
        <header>
          <h1>Todo List</h1>
        </header>
        <section>
          <form>
            <input  type="text" className="todo-input hover:border-b-blue-800 border-4 focus:outline-none focus:border-transparent w-36 md:w-1/2 mx-auto my-4 px-4 py-2 rounded outline-none" placeholder="Add a todo" />
            <button className="todo-button " type="submit" onClick={() => alert('hello suresh')}>
               ad a todo
            </button>
          </form>
          <div className="todo-container">
            <ul className="todo-list"></ul>
          </div>
        </section>

      </section> */}
   
{/* <header>
  <h1 className='container font-bold text-xl bg-gradient-to-r w-96 h-16 rounded-lg p-4 animate-bounce animate-duration-9000 animate-ease-in-out from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text shadow-2xl'>
    {date}
  </h1>
</header> */}



      
{/* =================>>>>> this is the end of practices section <<<<<=================== */}

    </>

  )
}

export default Practices