import React from 'react';
import { saveAs } from 'file-saver';
import Formo from '../../components/pages/Formo';

import One from '../../../src/Image/RENT1.jpg';
import Two from '../../../src/Image/RENT2.jpg';
import Three from '../../../src/Image/RENT3.jpg';
import NotFound from '../../../src/Image/NoData.png';

import { useLocation, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';




function TwoD2(props) {


    // const getData = (data) => {
    // console.log(data)
    // } 

    if (props.name1 == 1) {

        const downloadImage = () => {
            saveAs(One, 'image.jpg') // Put your image url here.
          }

        return (

            <div >
                {/* <Forms getData={getData}/> */}
                {/* <h2>Aag Lga Denge!!!</h2> */}
                {/* <h1>{props.name1}</h1> */}

                <img src={One} alt="House Image" height="590px" width="880px"
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "7px",
                        backgroundColor:"white"
                    }} />

                <Link to="/2d1" >
                    <Button variant="primary" type="submit"
                        onClick={downloadImage}
                        style={{
                            marginTop: "8px",
                            marginLeft: "700px"

                        }}>
                        Download
                    </Button>
                </Link>

                {/* <Button variant="primary" type="submit"
                    style={{
                        marginLeft: "675px"
                    }}>
                    3 D View
                </Button> */}

            </div >
        );
    }


    else if(props.name1 == 2) {
        const downloadImage = () => {
            saveAs(Two, 'image.jpg') // Put your image url here.
          }
        return (

            <div >
                {/* <Forms getData={getData}/> */}
                {/* <h2>Aag Lga Denge!!!</h2> */}
                {/* <h1>{props.name1}</h1> */}

                <img src={Two} alt="MyBurger" height="590px" width="880px"
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "7px"
                    }} />

                    <Link to="/2d1" >
                    <Button variant="primary" type="submit"
                        onClick={downloadImage}
                        style={{
                            marginTop: "8px",
                            marginLeft: "700px"

                        }}>
                        Download
                    </Button>
                </Link>

                {/* <Button variant="primary" type="submit"
                    style={{
                        marginLeft: "675px"
                    }}>
                    3 D View
                </Button> */}

            </div>
        );
    }

    else if(props.name1 == 3){
        const downloadImage = () => {
            saveAs(Three, 'image.jpg') // Put your image url here.
          }
    
        return (

            <div >
                {/* <Forms getData={getData}/> */}
                {/* <h2>Aag Lga Denge!!!</h2> */}
                {/* <h1>{props.name1}</h1> */}

                <img src={Three} alt="House architecture" height="590px" width="880px"
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "7px"
                    }} />

                    <Link to="/2d1" >
                    <Button variant="primary" type="submit"
                        onClick={downloadImage}
                        style={{
                            marginTop: "8px",
                            marginLeft: "700px"

                        }}>
                        Download
                    </Button>
                </Link>

                {/* <Button variant="primary" type="submit"
                    style={{
                        marginLeft: "675px"
                    }}>
                    3 D View
                </Button> */}


            </div>
        );
    }

    else{
        // const downloadImage = () => {
        //     saveAs(NotFound, 'image.png') // Put your image url here.
        //   }
    
        return (

            <div >
                {/* <Forms getData={getData}/> */}
                {/* <h2>Aag Lga Denge!!!</h2> */}
                {/* <h1>{props.name1}</h1> */}

                <img src={NotFound} alt="House architecture"
                 height="590px" width="880px"
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "30px"
                    }} />

                {/* <Link to="/2d1" >
                    <Button variant="primary" type="submit"
                        onClick={downloadImage}
                        style={{
                            marginLeft: "350px"

                        }}>
                        Download
                    </Button>
                </Link>

                <Button variant="primary" type="submit"
                    style={{
                        marginLeft: "650px"
                    }}>
                    3 D View
                </Button>
 */}

            </div>
        );
    }

}

export default TwoD2;