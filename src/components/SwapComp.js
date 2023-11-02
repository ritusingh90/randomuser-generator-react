import React, { useReducer, useRef, useState } from 'react'

const SwapComp = () => { 
    const [ data, setData ] = useState({
        divOne: [1, 2 , 3, 4, 5],
        divTwo: []
      });


    // const oneData = [1, 2, 3, 4, 5];
    // const twoData = [];

    // const [checkData, setCheckData] = useState({oneData,twoData});
    // console.log("dnqjdhq", checkData.twoData)
    // const [checkTwoData, setCheckTwoData] = useState();
    
    //   const handleClick = (e) => {
    //     const { parentNode, nodeName } = e.target;
    //     console.log("fdsfnksd:", parentNode, ",dalwejsmks: ", nodeName)
    
    //     if (nodeName === 'BUTTON') {
    //       const { num } = e.target.dataset;
    //       const { id } = parentNode.dataset;

    //       console.log("dsfsdfsd", num, "adahfafnaefb", id)

    //       const remaining = data[id].filter(el => el !== +num);
    //       console.log("Remaining:", remaining);
    //       if (id === 'divOne') {
    //         setData({
    //           divOne: remaining,
    //           divTwo: [...data.divTwo, +num].sort()
    //         });
    //       }
    //       if (id === 'divTwo') {
    //         setData({
    //           divOne: [...data.divOne, +num].sort(),
    //           divTwo: remaining
    //         });
    //       }
    //     }
    //   }

    //   const handleCheck = (e) => {
    //     const { parentNode, nodeName } = e.target;
    //     console.log("fdsfnksd:", parentNode, ",dalwejsmks: ", nodeName)
    
    //     if (nodeName === 'INPUT') {
    //       const { num } = e.target.dataset;
    //       const { id } = parentNode.dataset;

    //       console.log("dsfsdfsd", num, "adahfafnaefb", id)

    //       const remaining = data[id].filter(el => el !== +num);
    //       console.log("Remaining:", remaining);
    //       if (id === 'divOne') {
    //         setCheckData({
    //             oneData: remaining,
    //             twoData: [...data.twoData, +num].sort()
    //         });
    //       }
    //       if (id === 'divTwo') {
    //         setCheckData({
    //             oneData: [...data.oneData, +num].sort(),
    //             twoData: remaining
    //         });
    //       }
    //     }
    //   }

    let  aa; let bb ;

    const oncheckhandleChange = (e) => {
        // const { parentNode, nodeName } = e.target;
        const parentNade = e.target.parentNode.parentNode;
        const nodeName = e.target.nodeName;

        if (nodeName === 'INPUT') {
            const { num } = e.target.dataset;
            const { id } = parentNade.dataset;
            console.log(num, id);

            const remianing = data[id].filter(el => el !== +num);
            console.log("asdwe", remianing)
           

            if (id === 'divOne') {
                        setData({
                          divOne: remianing,
                          divTwo: [...data.divTwo, +num].sort()
                        });
                      }
                      if (id === 'divTwo') {
                        setData({
                          divOne: [...data.divOne, +num].sort(),
                          divTwo: remianing
                        });
                      }

        }

    }

    

    const onLeftChangeHandle = () => {
        // setOne({aa,bb})
        // setData({divOne:aa,divTwo:bb});
        // console.log("sdwqeqweqwe", data)
    }

    const onRightChangeHandle = () => {

    }
    
      return (<>
           

            {/* <div className="flex mb-4" onClick={handleClick}>
                <div className="w-1/2 bg-gray-400 h-12">
                    <div data-id='divOne'>
                        {
                            data.divOne.map((item, index) => {
                                return (
                                    <button key={index} data-num={item}>Click {item}</button>

                                )
                            })
                        }
                    </div>
                </div>
                <div className="w-1/2 bg-gray-500 h-12">
                    <div data-id='divTwo'>
                        {
                            data.divTwo.map((item, index) => {
                                return (
                                    <button key={index} data-num={item}>Click {item}</button>
                                )
                            })
                        }
                    </div>
                </div>
            </div> */}

            <div className="flex mb-4" >
                <div className="w-1/2 bg-gray-400 h-12">
                    <div data-id='divOne'>
                        {
                            data.divOne.map((item, index) => {
                                return (<div key={index}>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" data-num={item} onChange={oncheckhandleChange}/>
                                        <label htmlFor="vehicle1"> Check {item}</label>
                                    </div>   
                                )
                            })
                        }
                    </div>
                </div>
                <button className='left-btn mr-3' onClick={onLeftChangeHandle}>Left</button>
                <button className='right-btn' onClick={onRightChangeHandle}>Right</button>
                <div className="w-1/2 bg-gray-500 h-12">
                    <div data-id='divTwo'>
                        {
                            data.divTwo.map((item, index) => {
                                return (<div key={index}>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" data-num={item}/>
                                        <label htmlFor="vehicle1"> Check {item}</label>
                                        </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
      );
  
}

export default SwapComp