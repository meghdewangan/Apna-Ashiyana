import React from 'react'
import { saveAs } from 'file-saver'
import Forms from '../../components/pages/Forms'

import One from '../../../src/Image/1D.jpg';
import Two from '../../../src/Image/2D.jpg';
import Three from '../../../src/Image/3D.jpg';
import Four from '../../../src/Image/4D.jpg';
import NotFound from '../../../src/Image/NoData.png';

import { useLocation, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function TwoD1(props) {


    // const getData = (data) => {
    // console.log(data)
    // } 

    if (props.name == 1) {

        const downloadImage = () => {
            saveAs(One, 'image.jpg') // Put your image url here.
          }

        return (

            <div >
                {/* <h1>{props.name}</h1> */}

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


    else if(props.name == 2) {
        const downloadImage = () => {
            saveAs(Two, 'image.jpg') // Put your image url here.
          }
        return (

            <div >
                {/* <h1>{props.name}</h1> */}

                <img src={Two} alt="Home Architechture" height="590px" width="880px"
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

    else if(props.name == 3){
        const downloadImage = () => {
            saveAs(Three, 'image.jpg') // Put your image url here.
          }
    
        return (

            <div >
                {/* <Forms getData={getData}/> */}
                {/* <h2>Aag Lga Denge!!!</h2> */}
                {/* <h1>{props.name}</h1> */}

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

    else if(props.name == 4){
        const downloadImage = () => {
            saveAs(Four, 'image.jpg') // Put your image url here.
          }
    
        return (

            <div >
                {/* <Forms getData={getData}/> */}
                {/* <h2>Aag Lga Denge!!!</h2> */}
                {/* <h1>{props.name}</h1> */}

                <img src={Four} alt="House architecture" height="590px" width="880px"
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "8px"
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
                {/* <h1>{props.name}</h1> */}

                <img src={NotFound} alt="House architecture"
                 height="590px" width="880px"
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "28px"
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

export default TwoD1;